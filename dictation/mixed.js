/* MixedChart: два графіки в одному завданні (mixed task). Складається з будь-яких наявних типів: line, bar, pie, table.
   def: {title, parts:[{key:'a', type:'line'|'bar'|'pie'|'table', title, ...звичайний def того типу}, {key:'b', ...}]}
   hl:  {a:{...hl першого графіка}, b:{...hl другого}, link:'текст зв'язку', legend:true}
        - якщо задано a або b, графік без запису тьмяніє; link показує золоту плашку між графіками.
   opts: {row:true} - поруч (широкий слайд колоди); {h:{line:230,bar:240,pie:240}} - висоти частин. */
(function () {
  'use strict';
  function css() {
    if (document.getElementById('mx-css')) return;
    var s = document.createElement('style'); s.id = 'mx-css';
    s.textContent = '.mxc{display:flex;flex-direction:column;gap:2px;width:100%}.mxc.row{flex-direction:row;align-items:flex-start;gap:14px}.mxc.row .mx-p{flex:1 1 0;min-width:0}.mxc.row .mx-link{display:none}' +
      '.mx-p{transition:opacity .25s;position:relative}.mx-p.dim{opacity:.3}.mx-cap{font:700 12px/1.3 "DM Sans",system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#1A3A2D;margin:4px 0 0;display:flex;gap:8px;align-items:center}' +
      '.mx-cap b{background:#1A3A2D;color:#F7F4EE;border-radius:999px;padding:2px 9px;font-size:11px}.mx-cap span{color:#4a5a52;font-weight:600;text-transform:none;letter-spacing:0;font-size:13px}' +
      '.mx-link{align-self:center;visibility:hidden;font:700 12px/1 "DM Sans",system-ui,sans-serif;background:#FFF0CC;color:#9A7020;border:1.5px solid #C9A84C;border-radius:999px;padding:5px 14px;margin:2px 0}.mx-link.on{visibility:visible}';
    document.head.appendChild(s);
  }
  var FAC = { line: 'LineChart', bar: 'BarChart', pie: 'PieChart', table: 'TableChart' };
  window.MixedChart = function (host, def, opts) {
    opts = opts || {}; css();
    var H = Object.assign({ line: 230, bar: 250, pie: 240, table: 0 }, opts.h || {});
    var root = document.createElement('div'); root.className = 'mxc' + (opts.row ? ' row' : ''); host.appendChild(root);
    var P = [], link = null;
    def.parts.forEach(function (pt, i) {
      var w = document.createElement('div'); w.className = 'mx-p';
      var cap = document.createElement('div'); cap.className = 'mx-cap'; cap.innerHTML = '<b>Chart ' + (i + 1) + '</b><span></span>'; cap.lastChild.textContent = pt.title || ''; w.appendChild(cap);
      var box = document.createElement('div'); w.appendChild(box); root.appendChild(w);
      var o = {}; if (H[pt.type]) o.h = H[pt.type]; if (pt.type === 'pie') o.R = opts.R || (opts.row ? 100 : 72);
      var ch = window[FAC[pt.type]](box, pt, o);
      P.push({ key: pt.key || (i ? 'b' : 'a'), w: w, ch: ch });
      if (i === 0 && def.parts.length > 1) { link = document.createElement('div'); link.className = 'mx-link'; link.textContent = '⇄'; root.appendChild(link); }
    });
    function setHL(hl) {
      hl = hl || {}; var has = hl.a !== undefined || hl.b !== undefined;
      P.forEach(function (p) {
        var h = hl[p.key]; p.w.classList.toggle('dim', has && h === undefined);
        var x = Object.assign({}, h || {}); if (hl.legend && x.legend === undefined) x.legend = true;
        if (p.ch && p.ch.setHL) p.ch.setHL(x);
      });
      if (link) { link.classList.toggle('on', !!hl.link); if (hl.link) link.textContent = '⇄  ' + hl.link; }
    }
    setHL({});
    return { svg: root, setHL: setHL, parts: P };
  };
})();
