/* MapChart: карти й плани «було → стало» для IELTS Writing Task 1 (Maps).
   def: { title, style:'town'|'plan', compass:true|false, span:'35 years', scale:'500 m',
          zones:[9 підписів] (необов'язково),
          maps:[ { label:'1990', c:'#7A5C16', building:{x,y,w,h}, ent:[{x,y,d:'up|down|left|right',t:'Main entrance'}], f:[feature..] }, {...} ] }
   feature: { id, g, k, t, icon, x,y,w,h | pts:[[x,y]..],sw | r (коло, x,y = центр) | poly:[[x,y]..],
              ch:'built|gone|replaced|expanded|reduced|moved|converted|same', lab:[x,y], rot, lab:false, fs }
            g = група: пара «що було» → «що стало» ділить g, тому підсвічування працює для обох карт.
   Система координат кожної карти: 0..100 по x, 0..56 по y.
   hl: { ids:[id|g], diff:true, ch:['built'], same:true, panel:0|1, zones:true,
         tags:[{id,t,p}] (підпис-«бульбашка» з фразою про місце),
         rel:[{a,b,t,p}] (стрілка між двома об'єктами: opposite, next to, between…), legend:true }
   opts: { stack:true (карти одна під одною), wide }  Повертає { svg, setHL, layer(i), ptr(evt,i) }. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg', UID = 0, PW = 100, PH = 56, TS = 8;
  var FONT = "'DM Sans',system-ui,sans-serif";
  var K = {
    water:  { f: '#BFDDF0', s: '#8DBBD8', t: '#1F5F85' },
    green:  { f: '#D3E8C3', s: '#9CC184', t: '#2A5C2A' },
    forest: { f: '#A9D39A', s: '#6FA55F', t: '#1F4D1F' },
    field:  { f: '#EFE7B0', s: '#CDBF6A', t: '#6B5A10', pat: 1 },
    res:    { f: '#F8D9C9', s: '#D9A98F', t: '#7A3B1E' },
    com:    { f: '#E8CDEB', s: '#BC93C4', t: '#5A2A66' },
    ind:    { f: '#FCE9AE', s: '#D9BD5F', t: '#6B5200' },
    pub:    { f: '#CFE1F6', s: '#8FB2DB', t: '#1E4A7A' },
    leis:   { f: '#BFE6D8', s: '#78BBA2', t: '#14594A' },
    sand:   { f: '#F5E6B8', s: '#D9C27F', t: '#7A6320' },
    plaza:  { f: '#F0DFC4', s: '#CDB48A', t: '#6B5530' },
    parking:{ f: '#DADDDE', s: '#A9AEB0', t: '#3A4044' },
    floor:  { f: '#EDE9DD', s: '#CFC8B4', t: '#4F4A3C' },
    rail:   { f: '#CFCBC4', s: '#8F8A80', t: '#3A372F' },
    room:   { f: '#FFFFFF', s: '#6B746F', t: '#1D2A24' },
    bridge: { f: '#B9B4A8', s: '#6B6659', t: '#3a362c' },
    transport: { f: '#D9D5CE', s: '#8F8A80', t: '#3A372F' },
    road:   { c: '#C4C8C5' }, track: { c: '#55524B' }
  };
  var CH = {
    built: ['#2C7A5A', 'BUILT'], gone: ['#C0392B', 'DEMOLISHED'], replaced: ['#E1512E', 'REPLACED'], expanded: ['#2C6E8A', 'EXPANDED'],
    reduced: ['#7D5BA6', 'REDUCED'], moved: ['#00838F', 'RELOCATED'], converted: ['#B8860B', 'CONVERTED'], same: ['#6B746F', 'UNCHANGED']
  };
  var ZT = ['NW', 'N', 'NE', 'W', 'CENTRE', 'E', 'SW', 'S', 'SE'], ZP = ['back left', 'back', 'back right', 'left', 'middle', 'right', 'front left', 'front', 'front right'];

  if (!document.getElementById('mpc-css')) {
    var st = document.createElement('style'); st.id = 'mpc-css';
    st.textContent =
      'svg.mpc{display:block;width:100%;height:auto;max-height:100%}svg.mpc text{font-family:' + FONT + '}' +
      '.mpc .ft{transition:opacity .35s}.mpc .ft.dim{opacity:.22}.mpc .ft.dimb{opacity:.5}' +
      '.mpc .pnl{transition:opacity .35s}.mpc .pnl.dim{opacity:.3}' +
      '.mpc .ov{pointer-events:none}.mpc .ring{animation:mpr 1.1s ease-in-out infinite}@keyframes mpr{50%{opacity:.45}}' +
      '.mpc-leg{display:flex;flex-wrap:wrap;justify-content:center;gap:3px 14px;margin:3px 0 1px;font-family:' + FONT + ';transition:opacity .3s}' +
      '.mpc-leg.off{opacity:0;height:0;margin:0;overflow:hidden}' +
      '.mpc-leg .it{display:flex;align-items:center;gap:6px;font-size:13.5px;font-weight:700;color:#1d2a24}' +
      '.mpc-leg .it i{width:13px;height:13px;border-radius:4px;display:inline-block}.mpc-leg .it.dim{opacity:.3}';
    document.head.appendChild(st);
  }

  function add(p, tag, a, text) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (text !== undefined) e.textContent = text; p.appendChild(e); return e; }
  function pts2(p) { return p.map(function (q) { return q[0] + ',' + q[1]; }).join(' '); }
  function wrap(s, max) {
    var w = String(s).split(' '), out = [], cur = '';
    w.forEach(function (x) { if ((cur + ' ' + x).trim().length > max && cur) { out.push(cur); cur = x; } else cur = (cur + ' ' + x).trim(); });
    if (cur) out.push(cur); return out;
  }
  function bbox(d) {
    if (d.pts) { var xs = d.pts.map(function (p) { return p[0]; }), ys = d.pts.map(function (p) { return p[1]; }), h = (d.sw || 3) / 2; return { x: Math.min.apply(0, xs) - h, y: Math.min.apply(0, ys) - h, w: Math.max.apply(0, xs) - Math.min.apply(0, xs) + 2 * h, h: Math.max.apply(0, ys) - Math.min.apply(0, ys) + 2 * h }; }
    if (d.poly) { var px = d.poly.map(function (p) { return p[0]; }), py = d.poly.map(function (p) { return p[1]; }); return { x: Math.min.apply(0, px), y: Math.min.apply(0, py), w: Math.max.apply(0, px) - Math.min.apply(0, px), h: Math.max.apply(0, py) - Math.min.apply(0, py) }; }
    if (d.r) return { x: d.x - d.r, y: d.y - d.r, w: 2 * d.r, h: 2 * d.r };
    return { x: d.x, y: d.y, w: d.w, h: d.h };
  }

  window.MapChart = function (host, def, opts) {
    opts = opts || {};
    var uid = ++UID, n = def.maps.length, stack = !!opts.stack && n > 1, G = stack ? 10 : 16, plan = def.style === 'plan';
    var VW = stack ? PW : n * PW + (n - 1) * G, VH = stack ? n * (TS + PH) + (n - 1) * G + 3 : TS + PH + 3;
    var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 0 ' + VW + ' ' + VH); svg.setAttribute('class', 'mpc'); svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    var defs = add(svg, 'defs', {});
    var hat = add(defs, 'pattern', { id: 'mh' + uid, width: 2.2, height: 2.2, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' });
    add(hat, 'rect', { width: 2.2, height: 2.2, fill: K.field.f }); add(hat, 'line', { x1: 0, y1: 0, x2: 0, y2: 2.2, stroke: K.field.s, 'stroke-width': 0.8 });
    var P = [], used = {};

    function origin(i) { return stack ? { x: 0, y: i * (TS + PH + G) } : { x: i * (PW + G), y: 0 }; }
    def.maps.forEach(function (m, i) {
      var o = origin(i), g = add(svg, 'g', { class: 'pnl', transform: 'translate(' + o.x + ',' + o.y + ')' });
      var cid = 'mc' + uid + '_' + i, cp = add(defs, 'clipPath', { id: cid }); add(cp, 'rect', { x: 0, y: 0, width: PW, height: PH, rx: 1.5 });
      var col = m.c || (i === 0 ? '#7A5C16' : (/propos|plan|future|new/i.test(m.label) ? '#E1512E' : '#1A5E45'));
      var rb = add(g, 'rect', { x: 0, y: 0.6, width: Math.max(26, String(m.label).length * 3.6 + 8), height: TS - 1.4, rx: 1.4, fill: col });
      add(g, 'text', { x: 4, y: TS - 2.2, 'font-size': 4.4, 'font-weight': 700, fill: '#fff', 'letter-spacing': '.4' }, m.label);
      add(g, 'rect', { x: 0, y: TS, width: PW, height: PH, rx: 1.5, fill: plan ? '#EEF0EA' : '#F6F3E6', stroke: '#8D8470', 'stroke-width': 0.5 });
      var body = add(g, 'g', { 'clip-path': 'url(#' + cid + ')', transform: 'translate(0,' + TS + ')' });
      var fl = add(body, 'g', {}), ov = add(body, 'g', { class: 'ov' });
      var reg = [];
      if (m.building) { var b = m.building; add(fl, 'rect', { x: b.x, y: b.y, width: b.w, height: b.h, fill: '#FBF8EF', stroke: '#3E4A44', 'stroke-width': 1.3 }); }
      m.f.forEach(function (d) {
        var k = K[d.k] || K.pub, ch = d.ch || 'same', gg = add(fl, 'g', { class: 'ft', 'data-id': d.id || '', 'data-g': d.g || d.id || '' }), bb = bbox(d);
        used[ch] = 1;
        if (d.pts) {
          var kc = (K[d.k] && K[d.k].c) || (d.k === 'water' ? K.water.f : K.road.c);
          if (d.k === 'water') { add(gg, 'polyline', { points: pts2(d.pts), fill: 'none', stroke: K.water.s, 'stroke-width': (d.sw || 5) + 0.9, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); add(gg, 'polyline', { points: pts2(d.pts), fill: 'none', stroke: K.water.f, 'stroke-width': d.sw || 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); }
          else if (d.k === 'track') { add(gg, 'polyline', { points: pts2(d.pts), fill: 'none', stroke: '#55524B', 'stroke-width': d.sw || 1.6, 'stroke-linejoin': 'round' }); add(gg, 'polyline', { points: pts2(d.pts), fill: 'none', stroke: '#fff', 'stroke-width': (d.sw || 1.6) * 0.45, 'stroke-dasharray': '1.1 1.1', 'stroke-linejoin': 'round' }); }
          else { add(gg, 'polyline', { points: pts2(d.pts), fill: 'none', stroke: '#9FA4A0', 'stroke-width': (d.sw || 3) + 0.7, 'stroke-linecap': 'butt', 'stroke-linejoin': 'round' }); add(gg, 'polyline', { points: pts2(d.pts), fill: 'none', stroke: kc, 'stroke-width': d.sw || 3, 'stroke-linejoin': 'round' }); if (d.dash !== false && (d.sw || 3) >= 2.6) add(gg, 'polyline', { points: pts2(d.pts), fill: 'none', stroke: '#fff', 'stroke-width': 0.35, 'stroke-dasharray': '1.6 1.4', 'stroke-linejoin': 'round' }); }
        } else if (d.poly) {
          add(gg, 'polygon', { points: pts2(d.poly), fill: k.f, stroke: k.s, 'stroke-width': 0.7, 'stroke-linejoin': 'round' });
        } else if (d.r) {
          add(gg, 'circle', { cx: d.x, cy: d.y, r: d.r, fill: k.f || '#fff', stroke: k.s || '#8D8470', 'stroke-width': 0.8 });
        } else {
          add(gg, 'rect', { x: d.x, y: d.y, width: d.w, height: d.h, rx: d.k === 'room' || plan ? 0.6 : 1.1, fill: d.k === 'field' ? 'url(#mh' + uid + ')' : k.f, stroke: k.s, 'stroke-width': plan && d.k !== 'floor' ? 0.9 : 0.6, 'stroke-dasharray': d.dashed ? '1.6 1.2' : '' });
        }
        /* підпис */
        if (d.t && d.lab !== false) {
          var cx = d.lab ? d.lab[0] : bb.x + bb.w / 2, cy = d.lab ? d.lab[1] : bb.y + bb.h / 2, tc = (k.t || '#1d2a24'), fs = d.fs || 3.5;
          var lines = wrap(d.t, Math.max(6, Math.floor(bb.w / (fs * 0.54)))), lw = Math.max.apply(0, lines.map(function (s) { return s.length; })) * fs * 0.56;
          if (!d.fs && !d.pts && lw > bb.w - 1) fs = Math.max(2.6, fs * (bb.w - 1) / lw);
          var ih = d.icon && !d.pts ? Math.min(6.2, Math.max(0, bb.h - lines.length * fs * 1.15 - 2)) : 0, th = lines.length * fs * 1.12, y0 = cy - (th + (ih ? ih + 0.4 : 0)) / 2;
          if (ih > 3.6) { add(gg, 'text', { x: cx, y: y0 + ih * 0.82, 'text-anchor': 'middle', 'font-size': ih }, d.icon); y0 += ih + 0.4; }
          var tx = add(gg, 'text', { x: cx, y: y0 + fs * 0.88, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, fill: tc }, undefined);
          if (d.rot) tx.setAttribute('transform', 'rotate(' + d.rot + ' ' + cx + ' ' + cy + ')');
          lines.forEach(function (s, li) { var ts = add(tx, 'tspan', { x: cx, dy: li ? fs * 1.12 : 0 }, s); });
        } else if (d.icon && !d.pts && d.lab !== false) { var bb2 = bb; add(gg, 'text', { x: bb2.x + bb2.w / 2, y: bb2.y + bb2.h / 2 + 2, 'text-anchor': 'middle', 'font-size': 6 }, d.icon); }
        reg.push({ d: d, g: gg, b: bb, ch: ch, key: d.id || '', grp: d.g || d.id || '' });
      });
      /* стрілки входу */
      (m.ent || []).forEach(function (e) {
        var L = 5.5, vx = e.d === 'left' ? -1 : e.d === 'right' ? 1 : 0, vy = e.d === 'up' ? -1 : e.d === 'down' ? 1 : 0, x1 = e.x - vx * L, y1 = e.y - vy * L, px = -vy, py = vx;
        var eid = e.id || 'ent', gg = add(fl, 'g', { class: 'ft', 'data-id': eid, 'data-g': e.g || eid });
        if (e.ch) used[e.ch] = 1;
        add(gg, 'line', { x1: x1, y1: y1, x2: e.x - vx * 1.4, y2: e.y - vy * 1.4, stroke: '#1A7A4A', 'stroke-width': 1.5, 'stroke-linecap': 'round' });
        add(gg, 'polygon', { points: e.x + ',' + e.y + ' ' + (e.x - vx * 3 + px * 1.9) + ',' + (e.y - vy * 3 + py * 1.9) + ' ' + (e.x - vx * 3 - px * 1.9) + ',' + (e.y - vy * 3 - py * 1.9), fill: '#1A7A4A' });
        add(gg, 'text', (vx < 0 ? { x: 98, y: e.y, transform: 'rotate(-90 98 ' + e.y + ')', 'text-anchor': 'middle', 'font-size': 2.9, 'font-weight': 700, fill: '#1A7A4A' } : { x: vx ? x1 : x1 + 2.6, y: vx ? y1 - 2 : y1 - 0.6, 'text-anchor': vx ? 'end' : 'start', 'font-size': 2.9, 'font-weight': 700, fill: '#1A7A4A', stroke: '#fff', 'stroke-width': 0.9, 'paint-order': 'stroke' }), e.t || 'ENTRANCE');
        reg.push({ d: { id: eid }, g: gg, b: { x: Math.min(e.x, x1) - 1, y: Math.min(e.y, y1) - 1, w: Math.abs(e.x - x1) + 2, h: Math.abs(e.y - y1) + 2 }, ch: e.ch || 'same', key: eid, grp: e.g || eid, ent: !e.ch });
      });
      /* компас і масштаб */
      if (def.compass !== false && !plan) {
        var cg = add(body, 'g', { transform: 'translate(' + (PW - 7) + ',9)' });
        add(cg, 'circle', { r: 5.2, fill: '#fff', stroke: '#8D8470', 'stroke-width': 0.4, opacity: .92 });
        add(cg, 'text', { y: -0.8, 'text-anchor': 'middle', 'font-size': 3.6, 'font-weight': 700, fill: '#1A3A2D' }, 'N'); add(cg, 'polygon', { points: '0,0.2 1.7,4.4 0,3.4 -1.7,4.4', fill: '#1A3A2D' });
      }
      if (def.scale) {
        var sg = add(body, 'g', { transform: 'translate(' + (PW - 19) + ',' + (PH - 5.2) + ')' });
        add(sg, 'rect', { x: 0, y: 0, width: 14, height: 1.2, fill: '#3E4A44' }); add(sg, 'rect', { x: 0, y: 0, width: 7, height: 1.2, fill: '#fff', stroke: '#3E4A44', 'stroke-width': 0.3 });
        add(sg, 'text', { x: 0, y: 4, 'font-size': 2.8, fill: '#3E4A44', 'font-weight': 600 }, def.scale);
      }
      P.push({ g: g, ov: ov, reg: reg, o: o, body: body });
    });
    /* стрілка між картами */
    if (n > 1 && def.span !== false) {
      var ax, ay;
      if (stack) { ax = PW / 2; ay = TS + PH + G / 2 - 0.4; add(svg, 'path', { d: 'M' + (ax - 4) + ',' + (ay - 2.2) + ' L' + ax + ',' + (ay + 2) + ' L' + (ax + 4) + ',' + (ay - 2.2), fill: 'none', stroke: '#9A7020', 'stroke-width': 1.3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); if (def.span) add(svg, 'text', { x: ax + 7, y: ay + 1.2, 'font-size': 3.4, 'font-weight': 700, fill: '#9A7020' }, def.span); }
      else { ax = PW + G / 2; ay = TS + PH / 2; add(svg, 'path', { d: 'M' + (ax - 2.6) + ',' + (ay - 4) + ' L' + (ax + 2.2) + ',' + ay + ' L' + (ax - 2.6) + ',' + (ay + 4), fill: 'none', stroke: '#9A7020', 'stroke-width': 1.3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); if (def.span) { var tt = add(svg, 'text', { x: ax - 0.6, y: ay + 9, 'text-anchor': 'middle', 'font-size': 2.9, 'font-weight': 700, fill: '#9A7020' }, def.span); } }
    }
    host.appendChild(svg);

    /* легенда типів змін */
    var leg = document.createElement('div'); leg.className = 'mpc-leg off'; var LG = {};
    Object.keys(CH).forEach(function (k) { if (!used[k] || (k === 'same' && !used.same)) return; var it = document.createElement('span'); it.className = 'it'; var sw = document.createElement('i'); sw.style.background = CH[k][0]; it.appendChild(sw); it.appendChild(document.createTextNode(CH[k][1])); leg.appendChild(it); LG[k] = it; });
    if (n > 1) host.appendChild(leg);

    function find(i, id) { var r = null; P[i].reg.forEach(function (x) { if (!r && (x.key === id || x.grp === id)) r = x; }); return r; }
    function match(x, ids) { return ids.indexOf(x.key) > -1 || ids.indexOf(x.grp) > -1; }
    function outline(p, x, color, dash, w) {
      var b = x.b, d = x.d;
      if (d.pts) { add(p.ov, 'polyline', { points: pts2(d.pts), fill: 'none', stroke: color, 'stroke-opacity': .5, 'stroke-width': (d.sw || 3) + 2.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }); return; }
      if (d.r) { add(p.ov, 'circle', { cx: d.x, cy: d.y, r: d.r + 0.9, fill: 'none', stroke: color, 'stroke-width': w || 1.1, 'stroke-dasharray': dash || '' }); return; }
      if (d.poly) { add(p.ov, 'polygon', { points: pts2(d.poly), fill: 'none', stroke: color, 'stroke-width': w || 1.1, 'stroke-dasharray': dash || '', 'stroke-linejoin': 'round' }); return; }
      add(p.ov, 'rect', { x: b.x - 0.7, y: b.y - 0.7, width: b.w + 1.4, height: b.h + 1.4, rx: 1.2, fill: 'none', stroke: color, 'stroke-width': w || 1.1, 'stroke-dasharray': dash || '' });
    }
    function badge(p, x, text, color) {
      var b = x.b, w = text.length * 2.05 + 3, bx = Math.max(0.6, Math.min(PW - w - 0.6, b.x + 0.6)), by = Math.max(0.6, b.y - 3.6);
      add(p.ov, 'rect', { x: bx, y: by, width: w, height: 4, rx: 1.2, fill: color }); add(p.ov, 'text', { x: bx + w / 2, y: by + 2.95, 'text-anchor': 'middle', 'font-size': 2.6, 'font-weight': 700, fill: '#fff', 'letter-spacing': '.25' }, text);
    }
    function bubble(p, x, text, color) {
      var b = x.b, lines = wrap(text, 30), fs = 3, w = Math.max.apply(0, lines.map(function (s) { return s.length; })) * fs * 0.54 + 4.4, h = lines.length * fs * 1.15 + 2.8;
      var cx = b.x + b.w / 2, top = b.y - h - 3.2, below = false; if (top < 1) { top = b.y + b.h + 3.2; below = true; }
      var bx = Math.max(1, Math.min(PW - w - 1, cx - w / 2));
      add(p.ov, 'line', { x1: Math.max(bx + 2, Math.min(bx + w - 2, cx)), y1: below ? top : top + h, x2: cx, y2: below ? b.y + b.h : b.y, stroke: color, 'stroke-width': 0.6 });
      add(p.ov, 'rect', { x: bx, y: top, width: w, height: h, rx: 1.6, fill: '#FFF8E0', stroke: color, 'stroke-width': 0.7 });
      var t = add(p.ov, 'text', { x: bx + w / 2, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, fill: '#1A3A2D' });
      lines.forEach(function (s, li) { add(t, 'tspan', { x: bx + w / 2, y: top + 1.4 + fs * 0.88 + li * fs * 1.15 }, s); });
    }
    function arrow(p, a, b, text, color) {
      var ax = a.b.x + a.b.w / 2, ay = a.b.y + a.b.h / 2, bx = b.b.x + b.b.w / 2, by = b.b.y + b.b.h / 2, dx = bx - ax, dy = by - ay, L = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / L, uy = dy / L;
      function edge(bb, ux, uy) { var hw = bb.w / 2 + 0.6, hh = bb.h / 2 + 0.6, t = Math.min(ux ? hw / Math.abs(ux) : 1e9, uy ? hh / Math.abs(uy) : 1e9); return t; }
      var s1 = edge(a.b, ux, uy), s2 = edge(b.b, ux, uy), x1 = ax + ux * s1, y1 = ay + uy * s1, x2 = bx - ux * s2, y2 = by - uy * s2;
      if ((x2 - x1) * ux + (y2 - y1) * uy < 3) { x1 = ax; y1 = ay; x2 = bx; y2 = by; }
      var mid = 'mk' + uid + Math.round(Math.random() * 1e6);
      var mk = add(defs, 'marker', { id: mid, viewBox: '0 0 6 6', refX: 5, refY: 3, markerWidth: 3.2, markerHeight: 3.2, orient: 'auto-start-reverse' }); add(mk, 'path', { d: 'M0,0 L6,3 L0,6 z', fill: color });
      add(p.ov, 'line', { x1: x1, y1: y1, x2: x2, y2: y2, stroke: color, 'stroke-width': 1, 'marker-end': 'url(#' + mid + ')', 'marker-start': 'url(#' + mid + ')', 'stroke-linecap': 'round' });
      var tw = text.length * 1.75 + 3.2, mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      add(p.ov, 'rect', { x: mx - tw / 2, y: my - 2.3, width: tw, height: 4.6, rx: 1.4, fill: '#fff', stroke: color, 'stroke-width': 0.5 });
      add(p.ov, 'text', { x: mx, y: my + 1.1, 'text-anchor': 'middle', 'font-size': 2.9, 'font-weight': 700, fill: color }, text);
    }
    function setHL(hl) {
      hl = hl || {}; var ids = hl.ids ? [].concat(hl.ids) : null, diff = !!hl.diff || !!hl.same || !!hl.ch, chs = hl.ch ? [].concat(hl.ch) : null;
      P.forEach(function (p, i) {
        while (p.ov.firstChild) p.ov.removeChild(p.ov.firstChild);
        p.g.classList.toggle('dim', hl.panel !== undefined && hl.panel !== i);
        p.reg.forEach(function (x) {
          var on = true, soft = false;
          if (ids) on = match(x, ids);
          else if (diff) { on = hl.same ? x.ch === 'same' && !x.ent : (x.ch !== 'same' && (!chs || chs.indexOf(x.ch) > -1)); soft = !on; }
          var bg = x.d.k === 'water' || x.d.k === 'road' || x.d.k === 'track' || x.d.k === 'floor' || x.ent;
          x.g.classList.toggle('dim', !on && !soft && !bg); x.g.classList.toggle('dimb', (!on && bg) || soft);
          if (on && ids) { var c = CH[x.ch] && x.ch !== 'same' ? CH[x.ch][0] : '#E1512E'; var o = add(p.ov, 'g', { class: 'ring' }); var keep = p.ov; p.ov = o; outline(p, x, c, '', 1.3); p.ov = keep; }
          if (on && diff && !ids) { var cc = CH[x.ch]; outline(p, x, cc[0], x.ch === 'gone' ? '1.8 1.2' : '', 0.9); badge(p, x, cc[1], cc[0]); }
        });
        (hl.tags || []).forEach(function (t) { if ((t.p === undefined ? n - 1 : t.p) !== i) return; var x = find(i, t.id); if (x) bubble(p, x, t.t, t.c || '#9A7020'); });
        (hl.rel || []).forEach(function (t) { if ((t.p === undefined ? n - 1 : t.p) !== i) return; var a = find(i, t.a), b = find(i, t.b); if (a && b) arrow(p, a, b, t.t, t.c || '#2C6E8A'); });
        if (hl.zones) {
          var zl = def.zones || (plan ? ZP : ZT);
          for (var q = 1; q < 3; q++) { add(p.ov, 'line', { x1: PW * q / 3, y1: 0, x2: PW * q / 3, y2: PH, stroke: '#1A3A2D', 'stroke-opacity': .55, 'stroke-width': 0.5, 'stroke-dasharray': '2 1.6' }); add(p.ov, 'line', { x1: 0, y1: PH * q / 3, x2: PW, y2: PH * q / 3, stroke: '#1A3A2D', 'stroke-opacity': .55, 'stroke-width': 0.5, 'stroke-dasharray': '2 1.6' }); }
          zl.forEach(function (z, k) { var zx = (k % 3) * PW / 3 + 3, zy = Math.floor(k / 3) * PH / 3 + 6; var w = z.length * 2.4 + 3; add(p.ov, 'rect', { x: zx - 1.2, y: zy - 4, width: w, height: 5.4, rx: 1.4, fill: '#1A3A2D', opacity: .82 }); add(p.ov, 'text', { x: zx + 0.4, y: zy - 0.2, 'font-size': 3.1, 'font-weight': 700, fill: '#fff', 'letter-spacing': '.3' }, z); });
        }
      });
      var show = !!hl.diff || !!hl.same || !!hl.legend || !!hl.ch; leg.classList.toggle('off', !show);
      Object.keys(LG).forEach(function (k) { LG[k].classList.toggle('dim', !!chs && chs.indexOf(k) < 0 || (!!hl.same && k !== 'same')); });
    }
    function ptr(e, i) {
      var p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; var m = svg.getScreenCTM(); if (!m) return { x: 0, y: 0 };
      var q = p.matrixTransform(m.inverse()), o = P[i || 0].o; return { x: q.x - o.x, y: q.y - o.y - TS };
    }
    setHL({});
    return { svg: svg, setHL: setHL, layer: function (i) { return P[i || 0].ov; }, body: function (i) { return P[i || 0].body; }, ptr: ptr, reg: function (i) { return P[i || 0].reg; }, PW: PW, PH: PH, TS: TS };
  };
})();
