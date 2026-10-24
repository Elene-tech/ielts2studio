/* LineChart: спільний малювальник лінійного графіка.
   Підсвічування: {s:[id], pts:{id:[i]}, axes:'x'|'y'|'both', band:[i,j], tags:[], legend:true} */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function add(p, tag, a, text) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (text !== undefined) e.textContent = text; p.appendChild(e); return e; }
  function marker(shape, cx, cy, color, r) {
    var e;
    if (shape === 'square') { e = document.createElementNS(NS, 'rect'); e.setAttribute('x', cx - r); e.setAttribute('y', cy - r); e.setAttribute('width', r * 2); e.setAttribute('height', r * 2); }
    else if (shape === 'diamond') { e = document.createElementNS(NS, 'polygon'); e.setAttribute('points', [cx, cy - r - 2, cx + r + 2, cy, cx, cy + r + 2, cx - r - 2, cy].join(' ')); }
    else if (shape === 'triangle') { e = document.createElementNS(NS, 'polygon'); e.setAttribute('points', [cx, cy - r - 1.5, cx + r + 1.5, cy + r, cx - r - 1.5, cy + r].join(' ')); }
    else { e = document.createElementNS(NS, 'circle'); e.setAttribute('cx', cx); e.setAttribute('cy', cy); e.setAttribute('r', r); }
    e.setAttribute('fill', color); e.setAttribute('stroke', '#fff'); e.setAttribute('stroke-width', 1.8); e.setAttribute('class', 'mk');
    return e;
  }

  window.LineChart = function (host, def, opts) {
    opts = opts || {};
    var W = 680, H = opts.h || 410, PL = 70, PR = 662, PT = 26, PB = H - 66;
    var n = def.xLabels.length, x0 = PL + 30, x1 = PR - 22;
    function ix(i) { return x0 + i * (x1 - x0) / (n - 1); }
    function iy(v) { return PB - (v / def.yMax) * (PB - PT); }
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('class', 'lc'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', def.title || '');
    var gGrid = add(svg, 'g', { 'class': 'grid' });
    for (var v = 0; v <= def.yMax; v += def.yStep) add(gGrid, 'line', { x1: PL, x2: PR, y1: iy(v), y2: iy(v) });
    var band = add(svg, 'rect', { 'class': 'band', x: 0, y: PT, width: 0, height: PB - PT });
    var gY = add(svg, 'g', { 'class': 'axis axis-y' }), gX = add(svg, 'g', { 'class': 'axis axis-x' });
    add(gY, 'line', { x1: PL, x2: PL, y1: PT - 6, y2: PB });
    for (var v2 = 0; v2 <= def.yMax; v2 += def.yStep) add(gY, 'text', { x: PL - 10, y: iy(v2) + 5, 'text-anchor': 'end' }, v2);
    add(gY, 'text', { 'class': 'axtitle', transform: 'translate(16 ' + ((PT + PB) / 2) + ') rotate(-90)', 'text-anchor': 'middle' }, def.yTitle || '');
    add(gX, 'line', { x1: PL, x2: PR, y1: PB, y2: PB });
    def.xLabels.forEach(function (l, i) { add(gX, 'line', { x1: ix(i), x2: ix(i), y1: PB, y2: PB + 5 }); add(gX, 'text', { x: ix(i), y: PB + 23, 'text-anchor': 'middle' }, l); });
    add(gX, 'text', { 'class': 'axtitle', x: (PL + PR) / 2, y: H - 10, 'text-anchor': 'middle' }, def.xTitle || '');

    var S = {};
    def.series.forEach(function (se) {
      var g = add(svg, 'g', { 'class': 'ser on' });
      add(g, 'polyline', { 'class': 'ln', points: se.data.map(function (d, i) { return ix(i) + ',' + iy(d); }).join(' '), stroke: se.color });
      var guides = se.data.map(function (d, i) { return add(g, 'line', { 'class': 'guide', x1: PL, x2: ix(i), y1: iy(d), y2: iy(d), stroke: se.color }); });
      var mks = se.data.map(function (d, i) { return g.appendChild(marker(se.marker, ix(i), iy(d), se.color, 5.6)); });
      var vals = se.data.map(function (d, i) {
        var lo = i > 0 && i < n - 1 && d < se.data[i - 1] && d < se.data[i + 1];
        return add(g, 'text', { 'class': 'val', x: ix(i), y: lo ? iy(d) + 26 : iy(d) - 13, fill: se.color }, (def.fmt ? def.fmt(d) : d));
      });
      S[se.id] = { g: g, guides: guides, mks: mks, vals: vals };
    });
    var gTags = add(svg, 'g', {});
    host.appendChild(svg);

    var legendEl = null, legBtn = {};
    if (opts.legend !== false) {
      legendEl = document.createElement('div'); legendEl.className = 'lc-legend';
      def.series.forEach(function (se) {
        var b = document.createElement('span'); b.className = 'lc-leg';
        var sv = document.createElementNS(NS, 'svg'); sv.setAttribute('width', 34); sv.setAttribute('height', 16); sv.setAttribute('viewBox', '0 0 34 16');
        add(sv, 'line', { x1: 0, x2: 34, y1: 8, y2: 8, stroke: se.color, 'stroke-width': 3, 'stroke-linecap': 'round' });
        sv.appendChild(marker(se.marker, 17, 8, se.color, 5));
        b.appendChild(sv); b.appendChild(document.createTextNode(se.name));
        legendEl.appendChild(b); legBtn[se.id] = b;
      });
      host.appendChild(legendEl);
    }

    function setHL(hl) {
      hl = hl || {};
      var focus = !!hl.s;
      svg.classList.toggle('focus', focus);
      svg.classList.toggle('ax-y', hl.axes === 'y' || hl.axes === 'both');
      svg.classList.toggle('ax-x', hl.axes === 'x' || hl.axes === 'both');
      if (legendEl) legendEl.classList.toggle('pulse', !!hl.legend);
      def.series.forEach(function (se) {
        var on = !focus || hl.s.indexOf(se.id) > -1, pts = (hl.pts && hl.pts[se.id]) || [];
        S[se.id].g.classList.toggle('on', on);
        if (legBtn[se.id]) legBtn[se.id].classList.toggle('dim', focus && !on);
        S[se.id].mks.forEach(function (m, i) { m.classList.toggle('big', pts.indexOf(i) > -1); });
        S[se.id].vals.forEach(function (t, i) { t.classList.toggle('show', pts.indexOf(i) > -1); });
        S[se.id].guides.forEach(function (t, i) { t.classList.toggle('show', pts.indexOf(i) > -1); });
      });
      if (hl.band) { band.setAttribute('x', ix(hl.band[0])); band.setAttribute('width', ix(hl.band[1]) - ix(hl.band[0])); band.classList.add('on'); } else band.classList.remove('on');
      while (gTags.firstChild) gTags.removeChild(gTags.firstChild);
      (hl.tags || []).forEach(function (t) {
        var px = ix(t.x), py = iy(t.y), w = t.t.length * 9 + 22, h = 26, cx = px + (t.dx || 0), cy = py + (t.dy || 0);
        var g = add(gTags, 'g', { 'class': 'tag' });
        add(g, 'line', { x1: px, y1: py, x2: cx, y2: cy + (t.dy < 0 ? h / 2 : -h / 2) });
        add(g, 'rect', { x: cx - w / 2, y: cy - h / 2, width: w, height: h, rx: 13 });
        add(g, 'text', { x: cx, y: cy + 1 }, t.t);
      });
    }
    return { svg: svg, setHL: setHL };
  };
})();
