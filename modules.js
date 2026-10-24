/* Меню модулів: клік по «Target English ▾» у шапці будь-якого застосунку.
   Щоб додати новий модуль, достатньо дописати рядок у MODS (поле soon:true прибрати). */
(function () {
  'use strict';
  var ROOT = (document.currentScript && document.currentScript.src || location.href).replace(/modules\.js.*$/, '');
  var MODS = [
    { n: 1, name: 'Line Graphs',      m: 'line-graph', t: 'line-1', theory: 'lesson-deck/index.html?m=line-graph', studio: 'index.html?t=line-1', dict: 'dictation/index.html?t=line-1' },
    { n: 2, name: 'Pie Charts',       m: 'pie-charts', t: 'pie-1',  theory: 'lesson-deck/index.html?m=pie-charts', studio: 'index.html?t=pie-1',  dict: 'dictation/index.html?t=pie-1' },
    { n: 3, name: 'Bar Charts',       soon: true },
    { n: 4, name: 'Tables',           soon: true },
    { n: 5, name: 'Process Diagrams', soon: true },
    { n: 6, name: 'Maps',             soon: true }
  ];
  var q = new URLSearchParams(location.search);
  var part = /lesson-deck/.test(location.pathname) ? 'theory' : /dictation/.test(location.pathname) ? 'dict' : 'studio';
  var curM = part === 'theory' ? (q.get('m') || 'line-graph') : null;
  var curT = part !== 'theory' ? (q.get('t') || 'line-1') : null;

  var css = document.createElement('style');
  css.textContent = '.brand.mm{cursor:pointer;user-select:none;position:relative}.brand.mm b::after{content:" ▾";font-size:.8em;opacity:.7}' +
    '#mmenu{position:fixed;left:14px;top:58px;z-index:1000;width:400px;max-width:calc(100vw - 28px);background:#fff;color:#1d2a24;border-radius:14px;box-shadow:0 14px 40px rgba(0,0,0,.28);border:1px solid #e3ddcf;padding:10px;font-family:"DM Sans",system-ui,sans-serif}' +
    '#mmenu[hidden]{display:none}#mmenu h4{margin:2px 6px 8px;font-size:12px;letter-spacing:1.2px;color:#6b746f;font-weight:700}' +
    '#mmenu .mr{display:flex;align-items:center;gap:8px;padding:8px 8px;border-radius:10px}#mmenu .mr.cur{background:#FFF0CC}' +
    '#mmenu .mn{flex:1;white-space:nowrap;font-size:15px;font-weight:700;color:#1A3A2D}#mmenu .mn i{font-style:normal;color:#9A7020;margin-right:6px}' +
    '#mmenu .mr.soon .mn{color:#9aa39e;font-weight:500}#mmenu .mr.soon em{font-size:12px;color:#9aa39e;font-style:normal}' +
    '#mmenu a{font-size:13px;font-weight:600;text-decoration:none;color:#1A3A2D;background:#F7F4EE;border:1px solid #e3ddcf;border-radius:8px;padding:5px 9px}' +
    '#mmenu a:hover{background:#EFE9DA}#mmenu a.on{background:#1A3A2D;color:#fff;border-color:#1A3A2D}';
  document.head.appendChild(css);

  var menu = document.createElement('div'); menu.id = 'mmenu'; menu.hidden = true;
  var h = '<h4>МОДУЛІ КУРСУ</h4>';
  MODS.forEach(function (x) {
    var cur = !x.soon && (curM === x.m || curT === x.t);
    if (x.soon) { h += '<div class="mr soon"><span class="mn"><i>' + x.n + '</i>' + x.name + '</span><em>скоро</em></div>'; return; }
    function a(k, label) { return '<a class="' + (cur && part === k ? 'on' : '') + '" href="' + ROOT + x[k] + '">' + label + '</a>'; }
    h += '<div class="mr' + (cur ? ' cur' : '') + '"><span class="mn"><i>' + x.n + '</i>' + x.name + '</span>' + a('theory', 'Теорія') + a('studio', 'Пишемо') + a('dict', 'Диктант') + '</div>';
  });
  menu.innerHTML = h;

  function init() {
    var brand = document.querySelector('.brand'); if (!brand) return;
    brand.classList.add('mm'); brand.title = 'Модулі курсу';
    document.body.appendChild(menu);
    brand.addEventListener('click', function (e) { e.stopPropagation(); menu.hidden = !menu.hidden; });
    document.addEventListener('click', function (e) { if (!menu.contains(e.target)) menu.hidden = true; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu.hidden = true; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
