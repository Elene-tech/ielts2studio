/* BarChart: стовпчикова діаграма з групами (кластерна).
   def: {title, yTitle, yMax, yStep, pre:'£', suf:'', cats:[..], series:[{id,name,color,data:[..]}]}
   hl:  {c:[індекси категорій], s:[id серій], vals:true|false} - решта стовпчиків тьмяніє,
        значення над стовпчиками показуються, якщо задано c або s (vals:false вимикає). */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function add(p, tag, a, text) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (text !== undefined) e.textContent = text; p.appendChild(e); return e; }
  window.BarChart = function (host, def, opts) {
    opts = opts || {};
    var W = 680, H = opts.h || 380, PL = 58, PR = 662, PT = 24, PB = H - 62, nC = def.cats.length, nS = def.series.length;
    function iy(v) { return PB - (v / def.yMax) * (PB - PT); }
    var gw = (PR - PL) / nC, bw = Math.min(30, (gw * 0.78) / nS), pre = def.pre || '', suf = def.suf || '';
    var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('class', 'lc barc'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', def.title || '');
    var gg = add(svg, 'g', { 'class': 'grid' });
    for (var v = 0; v <= def.yMax; v += def.yStep) add(gg, 'line', { x1: PL, x2: PR, y1: iy(v), y2: iy(v) });
    var ga = add(svg, 'g', { 'class': 'axis' });
    add(ga, 'line', { x1: PL, x2: PL, y1: PT - 4, y2: PB }); add(ga, 'line', { x1: PL, x2: PR, y1: PB, y2: PB });
    for (var v2 = 0; v2 <= def.yMax; v2 += def.yStep) add(ga, 'text', { x: PL - 9, y: iy(v2) + 4.5, 'text-anchor': 'end' }, v2);
    if (def.yTitle) add(svg, 'text', { 'class': 'axtitle', transform: 'translate(15 ' + ((PT + PB) / 2) + ') rotate(-90)', 'text-anchor': 'middle' }, def.yTitle);
    var B = [];   // B[ci][si] = {g, rect, val}
    def.cats.forEach(function (cn, ci) {
      var cx = PL + gw * (ci + 0.5), x0 = cx - (bw * nS) / 2;
      var words = cn.split(' '), l1 = cn, l2 = '';
      if (cn.length > 11 && words.length > 1) { var half = Math.ceil(words.length / 2); l1 = words.slice(0, half).join(' '); l2 = words.slice(half).join(' '); }
      var t = add(ga, 'text', { x: cx, y: PB + 20, 'text-anchor': 'middle' }, l1); if (l2) add(ga, 'text', { x: cx, y: PB + 37, 'text-anchor': 'middle' }, l2);
      B[ci] = [];
      def.series.forEach(function (se, si) {
        var val = se.data[ci], g = add(svg, 'g', { 'class': 'bg' }), x = x0 + si * bw, y = iy(val);
        var r = add(g, 'rect', { x: x + 1, y: y, width: bw - 2, height: Math.max(0, PB - y), fill: se.color, rx: 2 });
        var tv = add(g, 'text', { 'class': 'bv', x: x + bw / 2, y: y - 6, 'text-anchor': 'middle' }, pre + val + suf);
        B[ci][si] = { g: g, tv: tv };
      });
    });
    host.appendChild(svg);
    var legend = document.createElement('div'); legend.className = 'lc-legend'; var LG = {};
    def.series.forEach(function (se) {
      var b = document.createElement('span'); b.className = 'lc-leg';
      var sw = document.createElement('i'); sw.className = 'sw'; sw.style.background = se.color; b.appendChild(sw); b.appendChild(document.createTextNode(se.name)); legend.appendChild(b); LG[se.id] = b;
    });
    host.appendChild(legend);
    function setHL(hl) {
      hl = hl || {}; var hasC = !!hl.c, hasS = !!hl.s, showV = hl.vals !== undefined ? hl.vals : (hasC || hasS), usedS = {};
      def.cats.forEach(function (cn, ci) {
        def.series.forEach(function (se, si) {
          var on = (!hasC || hl.c.indexOf(ci) > -1) && (!hasS || hl.s.indexOf(se.id) > -1), b = B[ci][si];
          b.g.classList.toggle('dim', (hasC || hasS) && !on); b.tv.classList.toggle('show', !!showV && (on || (!hasC && !hasS)));
          if (on) usedS[se.id] = 1;
        });
      });
      legend.classList.toggle('pulse', !!hl.legend);
      Object.keys(LG).forEach(function (id) { LG[id].classList.toggle('dim', (hasC || hasS) && !usedS[id]); });
    }
    return { svg: svg, setHL: setHL };
  };
})();
