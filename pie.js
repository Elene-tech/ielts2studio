/* PieChart: кілька кругових діаграм поруч, спільна легенда.
   def: {title, charts:[{id,name,slices:[{id,label,value,color,txt?}]}]}
   hl:  {sl:{chartId:[sliceId..]|'all'}, legend:true} - діаграми без запису в sl тьмяніють. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function add(p, tag, a, text) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (text !== undefined) e.textContent = text; p.appendChild(e); return e; }
  window.PieChart = function (host, def, opts) {
    opts = opts || {};
    var W = 680, H = opts.h || 330, n = def.charts.length, R = Math.min(120, (W / n) / 2 - 30), CY = 40 + (H - 40) / 2 + 6;
    var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('class', 'lc pie'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', def.title || '');
    var C = {};
    def.charts.forEach(function (ch, ci) {
      var cx = (W / n) * (ci + 0.5), g = add(svg, 'g', { 'class': 'pc' }), tot = 0, a0 = -Math.PI / 2;
      ch.slices.forEach(function (s) { tot += s.value; });
      add(g, 'text', { 'class': 'ptitle', x: cx, y: 28, 'text-anchor': 'middle' }, ch.name);
      var S = {};
      ch.slices.forEach(function (s) {
        var a1 = a0 + (s.value / tot) * Math.PI * 2, mid = (a0 + a1) / 2, large = a1 - a0 > Math.PI ? 1 : 0;
        var x0 = cx + R * Math.cos(a0), y0 = CY + R * Math.sin(a0), x1 = cx + R * Math.cos(a1), y1 = CY + R * Math.sin(a1);
        var sg = add(g, 'g', { 'class': 'sl' });
        add(sg, 'path', { d: 'M' + cx + ',' + CY + ' L' + x0 + ',' + y0 + ' A' + R + ',' + R + ' 0 ' + large + ' 1 ' + x1 + ',' + y1 + ' Z', fill: s.color, stroke: '#fff', 'stroke-width': 2.5 });
        var small = s.value < 6, rr = small ? R + 17 : (s.value < 11 ? R * 0.72 : R * 0.64);
        add(sg, 'text', { 'class': 'pv' + (small ? ' out' : ''), x: cx + rr * Math.cos(mid), y: cy(rr, mid), 'text-anchor': 'middle', fill: small ? '#333' : (s.txt || '#fff') }, s.value + '%');
        function cy(r, m) { return CY + r * Math.sin(m) + 6; }
        sg.__dx = Math.cos(mid) * 12; sg.__dy = Math.sin(mid) * 12;
        S[s.id] = sg; a0 = a1;
      });
      C[ch.id] = { g: g, S: S, title: g.querySelector('.ptitle') };
    });
    host.appendChild(svg);
    var legend = document.createElement('div'); legend.className = 'lc-legend'; var LG = {};
    def.charts[0].slices.forEach(function (s) {
      var b = document.createElement('span'); b.className = 'lc-leg';
      var sw = document.createElement('i'); sw.className = 'sw'; sw.style.background = s.color; b.appendChild(sw); b.appendChild(document.createTextNode(s.label)); legend.appendChild(b); LG[s.id] = b;
    });
    host.appendChild(legend);
    function setHL(hl) {
      hl = hl || {}; var sl = hl.sl, used = {};
      legend.classList.toggle('pulse', !!hl.legend);
      def.charts.forEach(function (ch) {
        var c = C[ch.id], sel = sl ? sl[ch.id] : null, chOn = !sl || sel !== undefined && sel !== null;
        c.g.classList.toggle('dim', !chOn); c.title.classList.toggle('on', !!sl && chOn);
        ch.slices.forEach(function (s) {
          var el = c.S[s.id], inSel = !sl || sel === 'all' || (sel && sel.indexOf(s.id) > -1), pop = !!sl && sel && sel !== 'all' && sel.indexOf(s.id) > -1;
          el.classList.toggle('dim', !inSel); el.classList.toggle('pop', pop);
          el.setAttribute('transform', pop ? 'translate(' + el.__dx.toFixed(1) + ' ' + el.__dy.toFixed(1) + ')' : '');
          if (sl && chOn && inSel) used[s.id] = 1;
        });
      });
      Object.keys(LG).forEach(function (id) { LG[id].classList.toggle('dim', !!sl && !used[id]); });
    }
    return { svg: svg, setHL: setHL };
  };
})();
