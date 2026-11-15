/* ScatterChart: діаграма розсіювання (scatter graph) для IELTS Writing Task 1.
   def: {title, xTitle, yTitle, xMin,xMax,xStep, yMin,yMax,yStep, xPre,xSuf,yPre,ySuf,
         groups:[{id,name,color,shape:'circle|square|triangle|diamond'}],
         pts:[{id, x, y, g:'groupId', label:'City', o:true (викид/outlier)}],
         fitExclude:['id'] (точки, які не рахуємо у лінії тренду; за замовчуванням: o:true)}
   hl:  {g:[groupIds]   - решта груп тьмяніє,
         p:[ptIds]      - підсвітити точки,
         out:true       - позначити викиди (outliers),
         fit:true|'gid' - лінія тренду, рахується ПО ДАНИХ (OLS), тому завжди збігається з точками,
         labels:true    - підписи точок,
         zone:{x:[a,b], y:[c,d], t:'text'} - заштрихований діапазон,
         ref:{y:v,t:'text'} | {x:v,t} - пунктирна лінія,
         r:true         - бейдж зі силою кореляції,
         legend:true}
   opts: {h, drag:true, onChange(stats)}: перетягування точок (для інтерактиву).
   Повертає {svg, setHL, stats(), getPts(), setPts(arr), fit(), PL,PR,PT,PB}. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function add(p, tag, a, text) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (text !== undefined) e.textContent = text; p.appendChild(e); return e; }
  var CSS = '.scc{width:100%;height:auto;max-height:100%;display:block;font-family:"DM Sans",system-ui,sans-serif}' +
    '.scc .grid line{stroke:#e8e2d3;stroke-width:1}.scc .axis line{stroke:#6b746f;stroke-width:1.5}.scc .axis text{font-size:12.5px;fill:#4a554f}' +
    '.scc .axtitle{font-size:13.5px;font-weight:700;fill:#1A3A2D}.scc .pt{transition:opacity .3s}.scc .pt.dim{opacity:.16}' +
    '.scc .pt .m{stroke:#fff;stroke-width:1.6}.scc .pt.on .m{stroke:#1A3A2D;stroke-width:2.2}.scc .pt.drag{cursor:grab}' +
    '.scc .plab{font-size:11px;fill:#33413a;font-weight:600;paint-order:stroke;stroke:#fff;stroke-width:3px;opacity:0;transition:opacity .3s}.scc .plab.show{opacity:1}' +
    '.scc .fitl{stroke:#1A3A2D;stroke-width:3;stroke-linecap:round;stroke-dasharray:9 6;opacity:0;transition:opacity .35s}.scc .fitl.show{opacity:.9}' +
    '.scc .ring{fill:none;stroke:#C0392B;stroke-width:2.6;stroke-dasharray:4 3;opacity:0;transition:opacity .3s}.scc .ring.show{opacity:1}' +
    '.scc .otag{font-size:12px;font-weight:800;fill:#C0392B;opacity:0;transition:opacity .3s;paint-order:stroke;stroke:#fff;stroke-width:3.5px}.scc .otag.show{opacity:1}' +
    '.scc .zone{fill:rgba(201,168,76,.22);stroke:#C9A84C;stroke-width:1.5;stroke-dasharray:6 4;opacity:0;transition:opacity .3s}.scc .zone.show{opacity:1}' +
    '.scc .zt{font-size:12px;font-weight:700;fill:#8A6410;opacity:0;transition:opacity .3s}.scc .zt.show{opacity:1}' +
    '.scc .refl{stroke:#E1512E;stroke-width:2;stroke-dasharray:5 4;opacity:0;transition:opacity .3s}.scc .refl.show{opacity:1}' +
    '.scc .rb{opacity:0;transition:opacity .3s}.scc .rb.show{opacity:1}.scc .rb rect{fill:#1A3A2D}.scc .rb text{fill:#fff;font-size:12.5px;font-weight:700}' +
    '.scl{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:4px;font-size:13px;color:#33413a}' +
    '.scl svg{width:18px!important;height:18px!important;max-height:none!important}.scl span{white-space:nowrap;display:inline-flex;align-items:center;gap:6px;transition:opacity .3s}.scl span.dim{opacity:.3}.scl.pulse span{animation:sclp 1s ease 2}@keyframes sclp{50%{transform:scale(1.12)}}';
  function inject() { if (document.getElementById('scc-css')) return; var s = document.createElement('style'); s.id = 'scc-css'; s.textContent = CSS; document.head.appendChild(s); }
  function shapeEl(g, sh, cx, cy, color) {
    var a = { 'class': 'm', fill: color };
    if (sh === 'square') { a.x = cx - 5.5; a.y = cy - 5.5; a.width = 11; a.height = 11; a.rx = 1.5; return add(g, 'rect', a); }
    if (sh === 'triangle') { a.points = (cx) + ',' + (cy - 7) + ' ' + (cx + 7) + ',' + (cy + 5.5) + ' ' + (cx - 7) + ',' + (cy + 5.5); return add(g, 'polygon', a); }
    if (sh === 'diamond') { a.points = cx + ',' + (cy - 7.5) + ' ' + (cx + 7.5) + ',' + cy + ' ' + cx + ',' + (cy + 7.5) + ' ' + (cx - 7.5) + ',' + cy; return add(g, 'polygon', a); }
    a.cx = cx; a.cy = cy; a.r = 6.2; return add(g, 'circle', a);
  }
  function setShape(el, sh, cx, cy) {
    if (sh === 'square') { el.setAttribute('x', cx - 5.5); el.setAttribute('y', cy - 5.5); }
    else if (sh === 'triangle') el.setAttribute('points', cx + ',' + (cy - 7) + ' ' + (cx + 7) + ',' + (cy + 5.5) + ' ' + (cx - 7) + ',' + (cy + 5.5));
    else if (sh === 'diamond') el.setAttribute('points', cx + ',' + (cy - 7.5) + ' ' + (cx + 7.5) + ',' + cy + ' ' + cx + ',' + (cy + 7.5) + ' ' + (cx - 7.5) + ',' + cy);
    else { el.setAttribute('cx', cx); el.setAttribute('cy', cy); }
  }
  function ols(P) {
    var n = P.length; if (n < 2) return { n: n, r: 0, m: 0, b: 0 };
    var sx = 0, sy = 0, i; for (i = 0; i < n; i++) { sx += P[i].x; sy += P[i].y; }
    var mx = sx / n, my = sy / n, sxx = 0, syy = 0, sxy = 0;
    for (i = 0; i < n; i++) { var dx = P[i].x - mx, dy = P[i].y - my; sxx += dx * dx; syy += dy * dy; sxy += dx * dy; }
    var m = sxx ? sxy / sxx : 0; return { n: n, r: (sxx && syy) ? sxy / Math.sqrt(sxx * syy) : 0, m: m, b: my - m * mx };
  }
  window.ScatterChart = function (host, def, opts) {
    opts = opts || {}; inject();
    var W = 680, H = opts.h || 410, PL = 80, PR = 656, PT = 22, PB = H - 60;
    var xMin = def.xMin, xMax = def.xMax, yMin = def.yMin, yMax = def.yMax;
    function ix(v) { return PL + (v - xMin) / (xMax - xMin) * (PR - PL); }
    function iy(v) { return PB - (v - yMin) / (yMax - yMin) * (PB - PT); }
    function fx(px) { return xMin + (px - PL) / (PR - PL) * (xMax - xMin); }
    function fy(py) { return yMin + (PB - py) / (PB - PT) * (yMax - yMin); }
    var groups = def.groups && def.groups.length ? def.groups : [{ id: 'a', name: '', color: '#2C6E8A', shape: 'circle' }], GM = {};
    groups.forEach(function (g, i) { g.color = g.color || ['#2C6E8A', '#E1512E', '#2C7A5A', '#C9A84C'][i % 4]; g.shape = g.shape || ['circle', 'square', 'triangle', 'diamond'][i % 4]; GM[g.id] = g; });
    var pts = def.pts.map(function (p) { return { id: p.id, x: p.x, y: p.y, g: p.g || groups[0].id, label: p.label, o: !!p.o }; });
    var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('class', 'scc'); svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', def.title || 'Scatter graph');
    var gg = add(svg, 'g', { 'class': 'grid' }), ga = add(svg, 'g', { 'class': 'axis' }), v;
    var dxs = def.xStep, dys = def.yStep;
    for (v = yMin; v <= yMax + 1e-9; v += dys) add(gg, 'line', { x1: PL, x2: PR, y1: iy(v), y2: iy(v) });
    for (v = xMin; v <= xMax + 1e-9; v += dxs) add(gg, 'line', { x1: ix(v), x2: ix(v), y1: PT, y2: PB });
    add(ga, 'line', { x1: PL, x2: PL, y1: PT - 4, y2: PB }); add(ga, 'line', { x1: PL, x2: PR + 4, y1: PB, y2: PB });
    for (v = yMin; v <= yMax + 1e-9; v += dys) add(ga, 'text', { x: PL - 9, y: iy(v) + 4.5, 'text-anchor': 'end' }, (def.yPre || '') + (def.comma ? v.toLocaleString('en-GB') : v) + (def.ySuf || ''));
    for (v = xMin; v <= xMax + 1e-9; v += dxs) add(ga, 'text', { x: ix(v), y: PB + 19, 'text-anchor': 'middle' }, (def.xPre || '') + v + (def.xSuf || ''));
    if (def.yTitle) add(svg, 'text', { 'class': 'axtitle', transform: 'translate(15 ' + ((PT + PB) / 2) + ') rotate(-90)', 'text-anchor': 'middle' }, def.yTitle);
    if (def.xTitle) add(svg, 'text', { 'class': 'axtitle', x: (PL + PR) / 2, y: PB + 44, 'text-anchor': 'middle' }, def.xTitle);
    var gZone = add(svg, 'g', {}), zoneR = add(gZone, 'rect', { 'class': 'zone', x: 0, y: 0, width: 0, height: 0, rx: 6 }), zoneT = add(gZone, 'text', { 'class': 'zt', 'text-anchor': 'middle' }, '');
    var refL = add(svg, 'line', { 'class': 'refl', x1: 0, x2: 0, y1: 0, y2: 0 }), refT = add(svg, 'text', { 'class': 'zt', 'text-anchor': 'end' }, '');
    var fitL = add(svg, 'line', { 'class': 'fitl', x1: 0, y1: 0, x2: 0, y2: 0 });
    var gP = add(svg, 'g', {}), E = {};
    pts.forEach(function (p) {
      var gr = GM[p.g], g = add(gP, 'g', { 'class': 'pt' + (opts.drag ? ' drag' : ''), 'data-id': p.id });
      var ring = add(g, 'circle', { 'class': 'ring', cx: ix(p.x), cy: iy(p.y), r: 13 });
      var m = shapeEl(g, gr.shape, ix(p.x), iy(p.y), gr.color);
      var lab = add(g, 'text', { 'class': 'plab', x: ix(p.x) + 10, y: iy(p.y) - 9 }, p.label || '');
      var ot = add(g, 'text', { 'class': 'otag', x: ix(p.x), y: iy(p.y) - 19, 'text-anchor': 'middle' }, 'outlier');
      E[p.id] = { p: p, g: g, m: m, ring: ring, lab: lab, ot: ot, gr: gr };
    });
    var rb = add(svg, 'g', { 'class': 'rb' }); var rbR = add(rb, 'rect', { x: PL + 10, y: PT + 6, width: 210, height: 26, rx: 13 }), rbT = add(rb, 'text', { x: PL + 24, y: PT + 24 }, '');
    host.appendChild(svg);
    var legend = document.createElement('div'); legend.className = 'scl'; var LG = {};
    if (groups.length > 1 || groups[0].name) groups.forEach(function (g) {
      var b = document.createElement('span'), sv = document.createElementNS(NS, 'svg'); sv.setAttribute('width', 18); sv.setAttribute('height', 18); sv.setAttribute('viewBox', '0 0 18 18');
      shapeEl(sv, g.shape, 9, 9, g.color); b.appendChild(sv); b.appendChild(document.createTextNode(g.name)); legend.appendChild(b); LG[g.id] = b;
    });
    host.appendChild(legend);

    function fitPts(sel) {
      var ex = def.fitExclude || [], P = pts.filter(function (p) { return !p.o && ex.indexOf(p.id) < 0 && (sel === true || sel === undefined || p.g === sel); });
      return ols(P);
    }
    function strength(r) { var a = Math.abs(r); return a >= .8 ? 'strong' : a >= .5 ? 'moderate' : a >= .25 ? 'weak' : 'no clear'; }
    function label(r) { return (Math.abs(r) < .25 ? 'no clear correlation' : strength(r) + ' ' + (r > 0 ? 'positive' : 'negative') + ' correlation'); }
    function place(id) {
      var e = E[id], cx = ix(e.p.x), cy = iy(e.p.y); setShape(e.m, e.gr.shape, cx, cy);
      e.ring.setAttribute('cx', cx); e.ring.setAttribute('cy', cy); e.lab.setAttribute('x', cx + 10); e.lab.setAttribute('y', cy - 9); e.ot.setAttribute('x', cx); e.ot.setAttribute('y', cy - 19);
    }
    var cur = {};
    function drawFit() {
      var f = cur.fit; if (!f) { fitL.classList.remove('show'); return; }
      var st = fitPts(f), P = pts.filter(function (p) { return f === true || p.g === f; }), a = Infinity, b = -Infinity;
      P.forEach(function (p) { if (p.x < a) a = p.x; if (p.x > b) b = p.x; });
      var x1 = a, x2 = b, y1 = st.m * x1 + st.b, y2 = st.m * x2 + st.b;
      fitL.setAttribute('x1', ix(x1)); fitL.setAttribute('y1', iy(y1)); fitL.setAttribute('x2', ix(x2)); fitL.setAttribute('y2', iy(y2)); fitL.classList.add('show');
    }
    function setHL(hl) {
      hl = hl || {}; cur = hl;
      var hasG = !!hl.g, hasP = !!hl.p;
      Object.keys(E).forEach(function (id) {
        var e = E[id], on = (!hasG || hl.g.indexOf(e.p.g) > -1) && (!hasP || hl.p.indexOf(id) > -1) && !(hl.out && !e.p.o);
        if (hl.out && !hasG && !hasP) on = e.p.o;
        e.g.classList.toggle('dim', !!((hasG || hasP || hl.out) && !on)); e.g.classList.toggle('on', !!((hasP || hl.out) && on));
        e.lab.classList.toggle('show', !!hl.labels && (!(hasG || hasP || hl.out) || on));
        e.ring.classList.toggle('show', !!hl.out && e.p.o); e.ot.classList.toggle('show', !!hl.out && e.p.o);
      });
      if (hl.zone) {
        var z = hl.zone, x0 = ix(z.x ? z.x[0] : xMin), x1 = ix(z.x ? z.x[1] : xMax), y0 = iy(z.y ? z.y[1] : yMax), y1 = iy(z.y ? z.y[0] : yMin);
        zoneR.setAttribute('x', x0); zoneR.setAttribute('y', y0); zoneR.setAttribute('width', x1 - x0); zoneR.setAttribute('height', y1 - y0); zoneR.classList.add('show');
        zoneT.textContent = z.t || ''; zoneT.setAttribute('x', (x0 + x1) / 2); zoneT.setAttribute('y', y0 - 6); zoneT.classList.toggle('show', !!z.t);
      } else { zoneR.classList.remove('show'); zoneT.classList.remove('show'); }
      if (hl.ref) {
        var r = hl.ref;
        if (r.y !== undefined) { refL.setAttribute('x1', PL); refL.setAttribute('x2', PR); refL.setAttribute('y1', iy(r.y)); refL.setAttribute('y2', iy(r.y)); refT.setAttribute('x', PR - 4); refT.setAttribute('y', iy(r.y) - 6); refT.setAttribute('text-anchor', 'end'); }
        else { refL.setAttribute('x1', ix(r.x)); refL.setAttribute('x2', ix(r.x)); refL.setAttribute('y1', PT); refL.setAttribute('y2', PB); refT.setAttribute('x', ix(r.x) + 5); refT.setAttribute('y', PT + 14); refT.setAttribute('text-anchor', 'start'); }
        refT.textContent = r.t || ''; refL.classList.add('show'); refT.classList.toggle('show', !!r.t);
      } else { refL.classList.remove('show'); refT.classList.remove('show'); }
      drawFit(); showR(!!hl.r);
      legend.classList.toggle('pulse', !!hl.legend);
      Object.keys(LG).forEach(function (id) { LG[id].classList.toggle('dim', !!(hasG && hl.g.indexOf(id) < 0)); });
    }
    function showR(on) {
      if (on) {
        var st = fitPts(true); rbT.textContent = label(st.r) + (opts.showNum ? '  (r = ' + st.r.toFixed(2) + ')' : '');
        var w = 30 + (rbT.getComputedTextLength() || 190), x = PR - 10 - w, y = st.r > 0 ? PB - 38 : PT + 6;
        rbR.setAttribute('width', w); rbR.setAttribute('x', x); rbR.setAttribute('y', y); rbT.setAttribute('x', x + 15); rbT.setAttribute('y', y + 18);
      }
      rb.classList.toggle('show', on);
    }
    if (opts.drag) {
      var dragId = null;
      function pos(ev) { var r = svg.getBoundingClientRect(), s = W / r.width; return { x: (ev.clientX - r.left) * s, y: (ev.clientY - r.top) * s }; }
      svg.addEventListener('pointerdown', function (ev) { var g = ev.target.closest && ev.target.closest('.pt'); if (!g) return; dragId = g.getAttribute('data-id'); svg.setPointerCapture(ev.pointerId); ev.preventDefault(); });
      svg.addEventListener('pointermove', function (ev) {
        if (!dragId) return; var q = pos(ev), e = E[dragId];
        e.p.x = Math.round(Math.max(xMin, Math.min(xMax, fx(q.x))) * 10) / 10; e.p.y = Math.round(Math.max(yMin, Math.min(yMax, fy(q.y))) * 10) / 10; place(dragId); drawFit();
        if (opts.onChange) opts.onChange(api.stats());
      });
      function end() { dragId = null; }
      svg.addEventListener('pointerup', end); svg.addEventListener('pointercancel', end);
    }
    var api = {
      svg: svg, setHL: setHL, PL: PL, PR: PR, PT: PT, PB: PB,
      stats: function () { var s = fitPts(true), all = ols(pts); return { r: s.r, m: s.m, b: s.b, rAll: all.r, n: pts.length, label: label(s.r), strength: strength(s.r) }; },
      getPts: function () { return pts.map(function (p) { return { id: p.id, x: p.x, y: p.y, g: p.g, o: p.o }; }); },
      setPts: function (arr) { arr.forEach(function (a) { var e = E[a.id]; if (!e) return; e.p.x = a.x; e.p.y = a.y; if (a.o !== undefined) e.p.o = !!a.o; place(a.id); }); drawFit(); },
      markOutlier: function (id, on) { E[id].p.o = on; }
    };
    return api;
  };
})();
