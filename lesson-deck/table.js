/* TableChart: таблиця даних (рядки = категорії, стовпчики = групи).
   def: {title, corner, cols:['Gen Z\n16–24',..], rows:[{label, data:[..]}], pre:'', suf:'%'}
   hl:  {cells:[[рядок,стовпчик],..]} або {r:[рядки], c:[стовпчики]} (перетин) - решта клітинок тьмяніє;
        {legend:true} - підсвічує заголовки рядків і стовпчиків. */
(function () {
  'use strict';
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  window.TableChart = function (host, def, opts) {
    var pre = def.pre || '', suf = def.suf || '';
    var wrap = el('div', 'lc tblc'), t = el('table'), th = el('thead'), tr = el('tr');
    tr.appendChild(el('th', 'corner', (def.corner || '').replace(/\n/g, '<br>')));
    var CH = def.cols.map(function (c) { var e = el('th', 'ch', String(c).replace(/\n/g, '<br>')); tr.appendChild(e); return e; });
    th.appendChild(tr); t.appendChild(th);
    var tb = el('tbody'), RH = [], CELL = [];
    def.rows.forEach(function (r, ri) {
      var row = el('tr'), rh = el('th', 'rh', String(r.label).replace(/\n/g, '<br>')); row.appendChild(rh); RH.push(rh); CELL[ri] = [];
      r.data.forEach(function (v, ci) { var td = el('td', null, pre + v + suf); row.appendChild(td); CELL[ri][ci] = td; });
      tb.appendChild(row);
    });
    t.appendChild(tb); wrap.appendChild(t); host.appendChild(wrap);
    function setHL(hl) {
      hl = hl || {};
      var hasCells = !!hl.cells, hasR = !!hl.r, hasC = !!hl.c, any = hasCells || hasR || hasC, rowOn = [], colOn = [];
      def.rows.forEach(function (r, ri) {
        r.data.forEach(function (v, ci) {
          var on;
          if (hasCells) on = hl.cells.some(function (p) { return p[0] === ri && p[1] === ci; });
          else on = (!hasR || hl.r.indexOf(ri) > -1) && (!hasC || hl.c.indexOf(ci) > -1);
          CELL[ri][ci].classList.toggle('dim', any && !on); CELL[ri][ci].classList.toggle('hi', any && on);
          if (on) { rowOn[ri] = 1; colOn[ci] = 1; }
        });
      });
      RH.forEach(function (e, ri) { e.classList.toggle('dim', any && !rowOn[ri]); e.classList.toggle('hi', any && !!rowOn[ri]); });
      CH.forEach(function (e, ci) { e.classList.toggle('dim', any && !colOn[ci]); e.classList.toggle('hi', any && !!colOn[ci]); });
      wrap.classList.toggle('pulse', !!hl.legend);
    }
    return { svg: wrap, setHL: setHL };
  };
})();
