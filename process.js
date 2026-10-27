/* ProcessChart: кольорова діаграма процесу (лінійна «змійка», цикл, гілки).
   def: { title, layout:'flow'|'cycle'|'branch',
          phases:[{id,label,color}],            // кольори етапів (flow, cycle)
          perRow:3,                             // flow: скільки карток у ряду (змійка)
          nodes:[{n,t,sub,icon,phase,v:'p'|'a',verb}],   // flow, cycle
          center:{icon,t,sub},                  // cycle: напис у центрі
          trunk:[node..], routes:[{label,color,nodes:[..]}] }   // branch
   node: n = номер, t = назва етапу, sub = пояснення, icon = емодзі, phase = id фази,
         v = 'p' (passive) | 'a' (active), verb = дієслово для підпису voice.
   hl:  {steps:[індекси], phase:'id', route:[i], voice:true, legend:true}
        voice:true показує під карткою кольоровий підпис PASSIVE / ACTIVE з дієсловом. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg', UID = 0;
  var VC = { p: ['#2C6E8A', 'PASSIVE'], a: ['#C2185B', 'ACTIVE'] };
  var FONT = "'DM Sans',system-ui,sans-serif";

  if (!document.getElementById('prc-css')) {
    var st = document.createElement('style'); st.id = 'prc-css';
    st.textContent =
      'svg.prc{display:block;width:100%;height:auto;max-height:100%}' +
      '.prc .pn{transition:opacity .35s,filter .35s}.prc .pn.dim{opacity:.2}' +
      '.prc .pn.hi{filter:drop-shadow(0 3px 7px rgba(0,0,0,.3))}.prc .pn.hi .cd{stroke-width:4.6}' +
      '.prc .ar{transition:opacity .35s}.prc .ar.dim{opacity:.16}' +
      '.prc .pl{opacity:0;transition:opacity .3s}.prc .pn.vo .pl{opacity:1}' +
      '.prc text{font-family:' + FONT + '}' +
      '.prc-leg{display:flex;flex-wrap:wrap;justify-content:center;gap:4px 16px;margin:4px 0 2px;font-family:' + FONT + ';transition:transform .3s}' +
      '.prc-leg .it{display:flex;align-items:center;gap:7px;font-size:14.5px;font-weight:600;color:#1d2a24;transition:opacity .3s}' +
      '.prc-leg .it i{width:14px;height:14px;border-radius:4px;display:inline-block}' +
      '.prc-leg .it.dim{opacity:.3}.prc-leg .vk{display:none}.prc-leg.vo .vk{display:flex}' +
      '.prc-leg.pulse{animation:prcp 1.2s ease 2}@keyframes prcp{50%{transform:scale(1.06)}}';
    document.head.appendChild(st);
  }

  function add(p, tag, a, text) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (text !== undefined) e.textContent = text; p.appendChild(e); return e; }
  function mix(hex, t) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    function m(c) { return Math.round(c + (255 - c) * t); }
    return 'rgb(' + m(r) + ',' + m(g) + ',' + m(b) + ')';
  }
  function fit(base, w, t) { return Math.min(base, (w - 14) / (String(t).length * 0.66)).toFixed(1); }
  function wrapText(s, max, lines) {
    var words = String(s || '').split(' '), out = [], cur = '';
    words.forEach(function (w) { if ((cur + ' ' + w).trim().length > max && cur) { out.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); });
    if (cur) out.push(cur);
    return out.slice(0, lines || 2);
  }

  window.ProcessChart = function (host, def, opts) {
    opts = opts || {};
    var layout = def.layout || 'flow', uid = ++UID, N = [], A = [], W = 560, H = 400, bus = null, extras = [];
    var phases = {}; (def.phases || []).forEach(function (p) { phases[p.id] = p; });
    function colorOf(n, fallback) { return n.color || (n.phase && phases[n.phase] ? phases[n.phase].color : fallback || '#2C7A5A'); }

    /* ---------- геометрія ---------- */
    if (layout === 'flow') {
      var per = (opts.wide && def.perRowWide) || def.perRow || 3, w = 160, h = 120, gx = 40, gy = 40, padT = 14, nr = Math.ceil(def.nodes.length / per);
      W = per * w + (per - 1) * gx; H = padT + nr * h + (nr - 1) * gy + 24;
      def.nodes.forEach(function (d, i) {
        var r = Math.floor(i / per), c = i % per, cc = (r % 2) ? per - 1 - c : c;
        N.push({ d: d, x: cc * (w + gx), y: padT + r * (h + gy), w: w, h: h, r: r, dir: r % 2 ? -1 : 1, kind: 'full' });
      });
      for (var i = 0; i < N.length - 1; i++) {
        var a = N[i], b = N[i + 1], p;
        if (a.r === b.r) { var y = a.y + h / 2; p = a.dir > 0 ? 'M' + (a.x + w + 7) + ' ' + y + 'L' + (b.x - 7) + ' ' + y : 'M' + (a.x - 7) + ' ' + y + 'L' + (b.x + w + 7) + ' ' + y; }
        else { var xx = a.x + w / 2; p = 'M' + xx + ' ' + (a.y + h + 14) + 'L' + xx + ' ' + (b.y - 7); }
        A.push({ a: i, b: i + 1, p: p });
      }
    } else if (layout === 'cycle') {
      var cw = 136, ch = 104, n = def.nodes.length, rx = opts.wide ? 310 : 222, ry = opts.wide ? 132 : 170, cx = rx + cw / 2 + 12, cy = ry + ch / 2 + 12;
      W = cx * 2; H = cy * 2 + 10;
      def.nodes.forEach(function (d, i) {
        var phi = i * 2 * Math.PI / n, x = cx + rx * Math.sin(phi), y = cy - ry * Math.cos(phi);
        N.push({ d: d, x: x - cw / 2, y: y - ch / 2, w: cw, h: ch, phi: phi, kind: 'cyc' });
      });
      var inR = function (px, py, nd, m) { return px > nd.x - m && px < nd.x + nd.w + m && py > nd.y - m && py < nd.y + nd.h + 12 + m; };
      for (var j = 0; j < n; j++) {
        var s = N[j], e = N[(j + 1) % n], p0 = s.phi, p1 = e.phi + (j === n - 1 ? 2 * Math.PI : 0), q0 = p0, q1 = p1, st = 0.004;
        while (q0 < p1 && inR(cx + rx * Math.sin(q0), cy - ry * Math.cos(q0), s, 7)) q0 += st;
        while (q1 > q0 && inR(cx + rx * Math.sin(q1), cy - ry * Math.cos(q1), e, 9)) q1 -= st;
        if (q1 - q0 < 0.05) q1 = q0 + 0.05;
        A.push({ a: j, b: (j + 1) % n, p: 'M' + (cx + rx * Math.sin(q0)).toFixed(1) + ' ' + (cy - ry * Math.cos(q0)).toFixed(1) + 'A' + rx + ' ' + ry + ' 0 0 1 ' + (cx + rx * Math.sin(q1)).toFixed(1) + ' ' + (cy - ry * Math.cos(q1)).toFixed(1) });
      }
      if (def.center) extras.push({ type: 'center', cx: cx, cy: cy, c: def.center });
    } else {   /* branch: колонка спільних етапів, шина, плашки маршрутів, картки */
      var bw = 112, bh = 64, tx = 6, busX = 150, lx = 172, lw = 142, nx0 = lx + lw + 26, bgx = 24, pitch = 80, R = def.routes.length, T = def.trunk.length, maxN = 0;
      def.routes.forEach(function (r) { maxN = Math.max(maxN, r.nodes.length); });
      W = nx0 + maxN * bw + (maxN - 1) * bgx + 8; H = 10 + R * pitch;
      var ym = 10 + ((R - 1) * pitch) / 2 + bh / 2, gap = 34, th = T * bh + (T - 1) * gap, ty0 = ym - th / 2, trunkIdx = [];
      def.trunk.forEach(function (d, i) { N.push({ d: d, x: tx, y: ty0 + i * (bh + gap), w: 116, h: bh, kind: 'cmp', color: '#2C7A5A' }); trunkIdx.push(N.length - 1); });
      for (var k = 0; k < T - 1; k++) { var tx2 = tx + 58; A.push({ a: k, b: k + 1, p: 'M' + tx2 + ' ' + (N[k].y + bh + 4) + 'L' + tx2 + ' ' + (N[k + 1].y - 6) }); }
      def.routes.forEach(function (r, ri) {
        var y0 = 10 + ri * pitch, first = N.length, ymid = y0 + bh / 2;
        extras.push({ type: 'tag', x: lx, y: y0, w: lw, h: bh, color: r.color, t: r.label });
        r.nodes.forEach(function (d, ci) {
          N.push({ d: d, x: nx0 + ci * (bw + bgx), y: y0, w: bw, h: bh, kind: 'cmp', color: r.color, route: ri });
          if (ci > 0) A.push({ a: N.length - 2, b: N.length - 1, p: 'M' + (nx0 + (ci - 1) * (bw + bgx) + bw + 5) + ' ' + ymid + 'L' + (nx0 + ci * (bw + bgx) - 7) + ' ' + ymid });
        });
        A.push({ a: trunkIdx[T - 1], b: first, p: 'M' + (lx + lw + 4) + ' ' + ymid + 'L' + (nx0 - 7) + ' ' + ymid, tagArrow: true });
        A.push({ a: trunkIdx[T - 1], b: first, p: 'M' + busX + ' ' + ymid + 'L' + (lx - 7) + ' ' + ymid, bus: true });
      });
      var lastT = N[trunkIdx[T - 1]], yl = lastT.y + bh / 2;
      bus = 'M' + (tx + 116) + ' ' + yl + 'L' + busX + ' ' + yl + 'M' + busX + ' ' + (10 + bh / 2) + 'L' + busX + ' ' + (10 + (R - 1) * pitch + bh / 2);
    }

    /* ---------- малювання ---------- */
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('class', 'prc'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', def.title || '');
    var defs = add(svg, 'defs', {}), mid = 'prm' + uid;
    var mk = add(defs, 'marker', { id: mid, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 6.5, markerHeight: 6.5, orient: 'auto-start-reverse' });
    add(mk, 'path', { d: 'M0 0L10 5L0 10z', fill: '#C9A84C' });
    if (bus) add(svg, 'path', { d: bus, fill: 'none', stroke: '#C9A84C', 'stroke-width': 3.4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'class': 'ar bus' });
    var AR = A.map(function (x) {
      return { el: add(svg, 'path', { d: x.p, fill: 'none', stroke: '#C9A84C', 'stroke-width': 3.4, 'stroke-linecap': 'round', 'marker-end': 'url(#' + mid + ')', 'class': 'ar' }), a: x.a, b: x.b };
    });
    extras.forEach(function (x) {
      if (x.type === 'tag') {
        var pr = x.t.split(' — '); add(svg, 'rect', { x: x.x, y: x.y, width: x.w, height: x.h, rx: 12, fill: x.color });
        add(svg, 'text', { x: x.x + x.w / 2, y: x.y + (pr[1] ? 27 : 36), 'text-anchor': 'middle', fill: '#fff', 'font-size': 15, 'font-weight': 800, 'letter-spacing': '.3' }, pr[0]);
        if (pr[1]) add(svg, 'text', { x: x.x + x.w / 2, y: x.y + 46, 'text-anchor': 'middle', fill: '#fff', 'font-size': 12.5, 'font-style': 'italic', opacity: .95 }, pr[1]);
      } else if (x.type === 'center') {
        if (x.c.icon) add(svg, 'text', { x: x.cx, y: x.cy - 10, 'text-anchor': 'middle', 'font-size': 38 }, x.c.icon);
        wrapText(x.c.t, 16, 3).forEach(function (l, i) { add(svg, 'text', { x: x.cx, y: x.cy + 22 + i * 17, 'text-anchor': 'middle', fill: '#1A3A2D', 'font-size': 15, 'font-weight': 800, 'letter-spacing': '.4' }, l.toUpperCase()); });
        if (x.c.sub) wrapText(x.c.sub, 26, 2).forEach(function (l, i) { add(svg, 'text', { x: x.cx, y: x.cy + 22 + 17 * Math.min(3, wrapText(x.c.t, 16, 3).length) + 4 + i * 14, 'text-anchor': 'middle', fill: '#5a655f', 'font-size': 12, 'font-style': 'italic' }, l); });
      }
    });
    N.forEach(function (nd, idx) {
      var d = nd.d, col = colorOf(d, nd.color), g = add(svg, 'g', { 'class': 'pn' }), x = nd.x, y = nd.y, w = nd.w, h = nd.h, cxm = x + w / 2;
      add(g, 'rect', { 'class': 'cd', x: x, y: y, width: w, height: h, rx: nd.kind === 'cmp' ? 10 : 15, fill: mix(col, 0.92), stroke: col, 'stroke-width': nd.kind === 'cmp' ? 2.6 : 3 });
      if (nd.kind === 'full') {
        add(g, 'circle', { cx: cxm, cy: y + 36, r: 25, fill: mix(col, 0.78) });
        if (d.icon) add(g, 'text', { x: cxm, y: y + 46, 'text-anchor': 'middle', 'font-size': 28 }, d.icon);
        add(g, 'text', { x: cxm, y: y + 78, 'text-anchor': 'middle', fill: '#1d2a24', 'font-size': fit(13.5, w, d.t), 'font-weight': 800, 'letter-spacing': '.3' }, d.t.toUpperCase());
        wrapText(d.sub, 28, 2).forEach(function (l, i) { add(g, 'text', { x: cxm, y: y + 93 + i * 12.5, 'text-anchor': 'middle', fill: '#4a5550', 'font-size': 10.8, 'font-style': 'italic' }, l); });
        add(g, 'circle', { cx: x + 12, cy: y + 12, r: 13.5, fill: col, stroke: '#fff', 'stroke-width': 2 });
        add(g, 'text', { x: x + 12, y: y + 17.5, 'text-anchor': 'middle', fill: '#fff', 'font-size': 14.5, 'font-weight': 800 }, d.n);
      } else if (nd.kind === 'cyc') {
        add(g, 'circle', { cx: cxm, cy: y + 29, r: 19, fill: mix(col, 0.78) });
        if (d.icon) add(g, 'text', { x: cxm, y: y + 37, 'text-anchor': 'middle', 'font-size': 23 }, d.icon);
        add(g, 'text', { x: cxm, y: y + 63, 'text-anchor': 'middle', fill: '#1d2a24', 'font-size': fit(12.5, w, d.t), 'font-weight': 800, 'letter-spacing': '.2' }, d.t.toUpperCase());
        wrapText(d.sub, 25, 2).forEach(function (l, i) { add(g, 'text', { x: cxm, y: y + 77 + i * 12, 'text-anchor': 'middle', fill: '#4a5550', 'font-size': 10.6, 'font-style': 'italic' }, l); });
        add(g, 'circle', { cx: x + 11, cy: y + 11, r: 12, fill: col, stroke: '#fff', 'stroke-width': 2 });
        add(g, 'text', { x: x + 11, y: y + 15.8, 'text-anchor': 'middle', fill: '#fff', 'font-size': 13, 'font-weight': 800 }, d.n);
      } else {
        var tl = d.t.length > 11 && d.t.indexOf(' ') > 0 ? [d.t.slice(0, d.t.indexOf(' ', Math.floor(d.t.length / 3))).trim(), d.t.slice(d.t.indexOf(' ', Math.floor(d.t.length / 3))).trim()] : [d.t];
        if (tl.length === 2 && (!tl[0] || !tl[1])) tl = [d.t];
        tl.forEach(function (l, i) { add(g, 'text', { x: cxm, y: y + (tl.length === 2 ? 24 : 31) + i * 13, 'text-anchor': 'middle', fill: '#1d2a24', 'font-size': fit(13, w, l), 'font-weight': 800 }, l.toUpperCase()); });
        wrapText(d.sub, tl.length === 2 ? 22 : 17, tl.length === 2 ? 1 : 2).forEach(function (l, i) { add(g, 'text', { x: cxm, y: y + (tl.length === 2 ? 52 : 46) + i * 12, 'text-anchor': 'middle', fill: '#4a5550', 'font-size': 10.6, 'font-style': 'italic' }, l); });
        add(g, 'circle', { cx: x + 10, cy: y + 10, r: 10.5, fill: col, stroke: '#fff', 'stroke-width': 1.8 });
        add(g, 'text', { x: x + 10, y: y + 14.2, 'text-anchor': 'middle', fill: '#fff', 'font-size': 11.5, 'font-weight': 800 }, d.n);
      }
      if (d.v && VC[d.v]) {
        var txt = d.verb || VC[d.v][1], pw = Math.max(64, txt.length * 6.15 + 20), pl = add(g, 'g', { 'class': 'pl' });
        add(pl, 'rect', { x: cxm - pw / 2, y: y + h - 9, width: pw, height: 19, rx: 9.5, fill: VC[d.v][0], stroke: '#fff', 'stroke-width': 1.5 });
        add(pl, 'text', { x: cxm, y: y + h + 4.4, 'text-anchor': 'middle', fill: '#fff', 'font-size': 11, 'font-weight': 800 }, txt);
      }
      nd.g = g; nd.col = col;
    });
    host.appendChild(svg);

    /* ---------- легенда ---------- */
    var leg = document.createElement('div'), LG = {}; leg.className = 'prc-leg';
    function chip(id, color, label, cls) { var it = document.createElement('span'); it.className = 'it' + (cls ? ' ' + cls : ''); var sw = document.createElement('i'); sw.style.background = color; it.appendChild(sw); it.appendChild(document.createTextNode(label)); leg.appendChild(it); if (id) LG[id] = it; }
    (def.phases || []).forEach(function (p) { chip(p.id, p.color, p.label); });
    chip(null, VC.p[0], 'PASSIVE: is/are + V3', 'vk'); chip(null, VC.a[0], 'ACTIVE: the doer acts', 'vk');
    host.appendChild(leg);

    function setHL(hl) {
      hl = hl || {}; var lit = null;
      if (hl.steps) lit = hl.steps;
      else if (hl.phase) { lit = []; N.forEach(function (nd, i) { if (nd.d.phase === hl.phase) lit.push(i); }); }
      else if (hl.route) { lit = []; N.forEach(function (nd, i) { if (nd.route !== undefined && hl.route.indexOf(nd.route) > -1) lit.push(i); }); }
      var has = lit !== null, usedPh = {};
      N.forEach(function (nd, i) {
        var on = !has || lit.indexOf(i) > -1;
        nd.g.classList.toggle('dim', !on); nd.g.classList.toggle('hi', has && on);
        nd.g.classList.toggle('vo', !!hl.voice && on);
        if (on && nd.d.phase) usedPh[nd.d.phase] = 1;
      });
      AR.forEach(function (x) { x.el.classList.toggle('dim', has && !(lit.indexOf(x.a) > -1 && lit.indexOf(x.b) > -1)); });
      var bs = svg.querySelector('.bus'); if (bs) bs.classList.toggle('dim', has);
      Object.keys(LG).forEach(function (id) { LG[id].classList.toggle('dim', has && !usedPh[id]); });
      leg.classList.toggle('vo', !!hl.voice); leg.classList.toggle('pulse', !!hl.legend);
    }
    setHL({});
    return { svg: svg, setHL: setHL };
  };
})();
