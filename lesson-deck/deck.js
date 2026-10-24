/* Lesson Deck: інтерактивна презентація (16:9, кроки по пробілу).
   Дані: window.DECK = {meta, chart, slides[]} */
(function () {
  'use strict';
  var D = window.DECK;
  function $(id) { return document.getElementById(id); }
  function h(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function kw(t) { return String(t).replace(/\{\{(.+?)\}\}/g, '<mark class="kw">$1</mark>'); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }
  var COL = {
    blue:  ['#2C6E8A', '#D6E8F5'], green: ['#2C7A5A', '#D6EDE4'], gold: ['#9A7020', '#FFF0CC'], red: ['#E1512E', '#FDDDD8'],
    bad:   ['#C0392B', '#FDDDD8'], good:  ['#1A7A4A', '#D6EDE4'], star: ['#9A7020', '#FFF0CC'], dark: ['#8B0000', '#FFD0C8'], deep: ['#1A3A2D', '#C9DDD2']
  };
  function setCol(el, k) { var c = COL[k] || COL.blue; el.style.setProperty('--c', c[0]); el.style.setProperty('--b', c[1]); }
  function fr(ctx, els, hl, cur) {
    els = [].concat(els);
    els.forEach(function (e) { e.classList.add('fr'); });
    if (cur) cur.setAttribute('data-cur', '1');
    ctx.frags.push({ els: els, hl: hl, cur: cur || null });
  }
  function head(root, d) { root.appendChild(h('h2', 's-title', d.title)); if (d.sub) root.appendChild(h('p', 's-sub', d.sub)); else root.appendChild(h('div', null)).style.height = '14px'; }
  function chartCard(ctx, d, o) {
    o = o || {};
    var c = h('div', 'chart-card'); c.appendChild(h('div', 'ct', D.chart.title));
    ctx.chart = window.LineChart(c, D.chart, { h: o.h || 410 });
    return c;
  }

  var R = {};
  R.title = function (d, ctx) {
    var r = h('div'); r.appendChild(h('span', 'pill', d.module)); r.appendChild(h('p', 'kick', d.kicker)); r.appendChild(h('h1', null, d.title));
    r.appendChild(h('p', 'sub', d.sub)); r.appendChild(h('div', 'lbl', 'IN THIS LESSON:'));
    var ul = h('ul'); d.items.forEach(function (t) { var li = h('li', null, t); ul.appendChild(li); fr(ctx, li); }); r.appendChild(ul); return r;
  };
  R.section = function (d) { var r = h('div'); r.appendChild(h('div', 'num', d.num)); r.appendChild(h('h2', null, d.title)); r.appendChild(h('p', null, d.sub)); return r; };
  R.example = function (d, ctx) {
    var r = h('div'); head(r, d);
    var card = h('div', 'ex-card', d.lines.join('<br>')); r.appendChild(card); fr(ctx, card);
    var lbl = h('div', 'ex-lbl', d.label); r.appendChild(lbl); var grid = h('div', 'ex-grid'); r.appendChild(grid);
    d.reasons.forEach(function (x, i) { var c = h('div', 'ex-r', '<b>' + x[0] + '</b><span>' + x[1] + '</span>'); grid.appendChild(c); fr(ctx, i === 0 ? [c, lbl] : c); });
    lbl.classList.add('fr'); return r;
  };
  R.bands = function (d, ctx) {
    var r = h('div'); head(r, d);
    var q = h('div', 'q-box', '<small>' + d.label + '</small><p>' + d.quote + '</p>'); r.appendChild(q); fr(ctx, q);
    var g = h('div', 'bands'); r.appendChild(g);
    d.cols.forEach(function (c) { var b = h('div', 'bd'); setCol(b, c.k); b.appendChild(h('h3', null, c.band)); var inner = h('div'); c.items.forEach(function (t) { inner.appendChild(h('i', null, '“' + t + '”')); }); b.appendChild(inner); g.appendChild(b); fr(ctx, b); });
    return r;
  };
  R.task = function (d, ctx) {
    var r = h('div'); head(r, d);
    var p = h('div', 'pr-box', d.prompt); r.appendChild(p); fr(ctx, p);
    var c = chartCard(ctx, d); r.appendChild(c); fr(ctx, c, {}); return r;
  };
  R.questions = function (d, ctx) {
    var r = h('div'); head(r, d); var g = h('div', 'two q'); r.appendChild(g);
    var qs = h('div', 'qs'); g.appendChild(qs);
    var c = chartCard(ctx, d); g.appendChild(c);
    d.items.forEach(function (x) { var e = h('div', 'qc', '<div class="n">' + x.n + '</div><b>' + x.q + '</b><span>' + x.uk + '</span>'); qs.appendChild(e); fr(ctx, e, x.hl, e); });
    return r;
  };
  function row(r, ctx, g) {
    var e = h('div', 'row ' + (r.cls || '')); setCol(e, r.k);
    if (r.tag) e.appendChild(h('div', 'tg', r.tag));
    var b = h('div', 'bd2'); if (r.head) b.appendChild(h('div', 'hd', r.head)); if (r.meta) b.appendChild(h('div', 'mt', r.meta)); if (r.text) b.appendChild(h('div', 'tx', kw(r.text)));
    e.appendChild(b); g.appendChild(e); fr(ctx, e); return e;
  }
  R.stack = function (d, ctx) {
    var r = h('div'); head(r, d); var g = h('div', 'stack'); r.appendChild(g);
    d.rows.forEach(function (x) { row(x, ctx, g); });
    if (d.ways) {
      var l = h('div', 'ways-lbl', d.waysLabel); r.appendChild(l);
      d.ways.forEach(function (w, i) { var e = h('div', 'way', '<span class="wn">' + (i + 1) + '</span><span><b>' + w[0] + '</b> <em>' + w[1] + '</em></span>'); r.appendChild(e); fr(ctx, i === 0 ? [e, l] : e); });
      l.classList.add('fr');
    }
    return r;
  };
  R.cols = function (d, ctx) {
    var r = h('div'); head(r, d); var g = h('div', 'cols'); g.style.gridTemplateColumns = 'repeat(' + d.cols.length + ',1fr)'; r.appendChild(g);
    d.cols.forEach(function (c) {
      var e = h('div', 'col' + (d.bullets ? ' bl' : '')); setCol(e, c.k); e.appendChild(h('h3', null, c.head));
      var inner = h('div'); c.items.forEach(function (t) { inner.appendChild(h('span', 'pl', t)); }); e.appendChild(inner); g.appendChild(e); fr(ctx, e);
    }); return r;
  };
  R.levels = function (d, ctx) {
    var r = h('div'); head(r, d);
    d.rows.forEach(function (x) { var e = h('div', 'lv'); setCol(e, x.k); e.appendChild(h('div', 'lh', x.level)); e.appendChild(h('div', 'lc2', '<small>verb + adverb:</small><span>' + x.verb + '</span>')); e.appendChild(h('div', 'lc2', '<small>noun + adjective:</small><span>' + x.noun + '</span>')); r.appendChild(e); fr(ctx, e); });
    return r;
  };
  R.patterns = function (d, ctx) {
    var r = h('div'); head(r, d);
    d.cards.forEach(function (c) { var e = h('div', 'pcard'); setCol(e, c.k); e.appendChild(h('div', 'ph', c.head)); e.appendChild(h('div', 'ps', c.html)); if (c.notes) e.appendChild(h('div', 'pn', c.notes.map(function (n) { return '<span>↑ ' + n + '</span>'; }).join(''))); r.appendChild(e); fr(ctx, e); });
    var n = h('div', 'note', d.note); r.appendChild(n); fr(ctx, n); return r;
  };
  R.quad = function (d, ctx) {
    var r = h('div'); head(r, d); var g = h('div', 'quad'); r.appendChild(g);
    d.boxes.forEach(function (b) { var e = h('div', 'qd'); setCol(e, b.k); e.appendChild(h('h4', null, b.head)); b.items.forEach(function (t) { e.appendChild(h('p', null, t)); }); g.appendChild(e); fr(ctx, e); });
    return r;
  };
  R.model = function (d, ctx) {
    var r = h('div'); head(r, d); var g = h('div', 'two m'); r.appendChild(g);
    var left = h('div', 'mcol'); g.appendChild(left);
    var card = h('div', 'mcard'); setCol(card, d.k); card.appendChild(h('div', 'mh', d.label)); var p = h('p'); card.appendChild(p); left.appendChild(card);
    var chipsLbl = null, chips = null;
    if (d.segs.some(function (s) { return s.chips; })) { chipsLbl = h('div', 'chips-lbl', 'KEY VOCABULARY CHOICES:'); chips = h('div', 'chips'); left.appendChild(chipsLbl); left.appendChild(chips); }
    var c = chartCard(ctx, d); g.appendChild(c);
    d.segs.forEach(function (s, i) {
      if (i) p.appendChild(document.createTextNode(' '));
      var sp = h('span', 'sg', kw(s.t)); p.appendChild(sp);
      var els = [sp];
      (s.chips || []).forEach(function (cp) { var ce = h('div', 'chip', '<b>' + cp[0] + '</b>' + cp[1]); chips.appendChild(ce); els.push(ce); });
      fr(ctx, els, s.hl, sp);
    });
    return r;
  };
  R.rewrite = function (d, ctx) {
    var r = h('div'); head(r, d); var g = h('div', 'two r'); r.appendChild(g);
    var p = h('div', 'rw', d.html); g.appendChild(p); fr(ctx, p);
    var l = h('div', 'rlist'); l.appendChild(h('div', 'rl', d.label)); d.items.forEach(function (x) { l.appendChild(h('div', 'ri', '<b>' + x[0] + '</b><i>' + x[1] + '</i>')); }); g.appendChild(l); fr(ctx, l);
    return r;
  };
  R.answers = function (d, ctx) {
    var r = h('div'); head(r, d);
    d.rows.forEach(function (x) { var e = h('div', 'ans', '<div class="a1">' + x[0] + '</div><div class="ar">→</div><div class="a2">' + x[1] + '</div><small>' + x[2] + '</small>'); r.appendChild(e); fr(ctx, e); });
    return r;
  };
  R.check = function (d, ctx) {
    var r = h('div'); head(r, d); var g = h('div', 'chk'); r.appendChild(g);
    d.items.forEach(function (x) { var e = h('div', 'ck', '<div class="k">' + x[0] + '</div><div><b>' + x[1] + '</b><span>' + x[2] + '</span></div>'); g.appendChild(e); fr(ctx, e); });
    return r;
  };
  R.end = function (d, ctx) {
    var r = h('div'); r.appendChild(h('h2', null, d.title)); r.appendChild(h('p', null, d.text));
    var e = h('div', 'dl', d.dl); r.appendChild(e); fr(ctx, e); return r;
  };

  /* ---------- побудова ---------- */
  var S = [], si = 0, f = 0, wrap = $('slideWrap');
  D.slides.forEach(function (d) {
    var ctx = { frags: [], chart: null };
    var root = R[d.type](d, ctx);
    root.classList.add('slide', 't-' + d.type); root.style.display = 'none'; wrap.appendChild(root);
    S.push({ d: d, root: root, frags: ctx.frags, chart: ctx.chart });
  });
  $('credit').textContent = D.meta.credit; $('brandSub').textContent = D.meta.brandSub || 'Write It Right';
  document.title = D.meta.docTitle || document.title;
  if (D.meta.next) { var nl = $('nextLink'); nl.hidden = false; nl.href = D.meta.next.url; nl.textContent = D.meta.next.label; }

  function show() {
    S.forEach(function (s, i) { s.root.style.display = i === si ? 'flex' : 'none'; });
    var s = S[si];
    s.frags.forEach(function (x, k) { x.els.forEach(function (e) { e.classList.toggle('on', k < f); }); });
    s.frags.forEach(function (x, k) { if (x.cur) x.cur.classList.toggle('cur', k === f - 1); });
    var hl = s.d.hl0 || {};
    for (var k = f - 1; k >= 0; k--) { if (s.frags[k].hl !== undefined) { hl = s.frags[k].hl; break; } }
    if (s.chart) s.chart.setHL(hl);
    $('where').textContent = D.meta.where + (s.d.section ? '  ·  ' + s.d.section : '');
    var tot = s.frags.length;
    $('count').textContent = (si + 1) + ' / ' + S.length;
    $('bar').style.width = ((si + (tot ? f / tot * 0.999 : 0.999)) / S.length * 100) + '%';
    document.querySelectorAll('.tit').forEach(function (b, i) { b.classList.toggle('now', i === si); });
    try { history.replaceState(null, '', '#' + (si + 1)); } catch (e) {}
  }
  function next() { var s = S[si]; if (f < s.frags.length) f++; else if (si < S.length - 1) { si++; f = 0; } show(); }
  function prev() { if (f > 0) f--; else if (si > 0) { si--; f = S[si].frags.length; } show(); }
  function go(i, full) { si = Math.max(0, Math.min(S.length - 1, i)); f = full ? S[si].frags.length : 0; show(); }

  /* ---------- інтерфейс ---------- */
  var stage = $('stage');
  function fit() {
    var vp = $('viewport'), w = vp.clientWidth, hh = vp.clientHeight, sc = Math.min(w / 1280, hh / 720);
    stage.style.transform = 'translate(-50%,-50%) scale(' + sc + ')';
  }
  window.addEventListener('resize', fit);
  var faces = ['right', 'bubble', 'off'], faceName = { right: 'справа', bubble: 'куточок', off: 'немає' };
  var fi = 2;
  function setFace(i) { fi = (i + faces.length) % faces.length; stage.dataset.face = faces[fi];  }
  setFace(fi);
  function toggleClean() { document.body.classList.toggle('clean'); fit(); }
  function toggleFull() { if (document.fullscreenElement) document.exitFullscreen(); else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen(); }
  document.addEventListener('fullscreenchange', fit);

  var tocList = $('tocList'), lastSec = null;
  S.forEach(function (s, i) {
    var sec = s.d.section || (s.d.type === 'title' ? 'Start' : '');
    if (sec !== lastSec) { tocList.appendChild(h('div', 'tsec', sec.toUpperCase())); lastSec = sec; }
    var b = h('button', 'tit', '<span class="tn">' + (i + 1) + '</span><span>' + (s.d.title || s.d.toc || s.d.type).replace(/<[^>]+>/g, '') + '</span>');
    b.addEventListener('click', function () { $('toc').hidden = true; go(i, false); }); tocList.appendChild(b);
  });
  function toggleOv(id, on) { $(id).hidden = on === undefined ? !$(id).hidden : !on; }
  $('tocBtn').onclick = function () { toggleOv('toc', true); }; $('tocClose').onclick = function () { toggleOv('toc', false); };
  $('helpBtn').onclick = function () { toggleOv('help', true); }; $('helpClose').onclick = function () { toggleOv('help', false); };
  ['toc', 'help'].forEach(function (id) { $(id).addEventListener('click', function (e) { if (e.target === this) this.hidden = true; }); });
  $('next').onclick = next; $('prev').onclick = prev; 
  $('clean').onclick = toggleClean; $('full').onclick = toggleFull;

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key, ovOpen = !$('toc').hidden || !$('help').hidden;
    if (k === 'Escape') { $('toc').hidden = true; $('help').hidden = true; return; }
    if (ovOpen) { if (k === ' ') e.preventDefault(); if (k === 'h' || k === 'H' || k === 'р' || k === 'Р') $('help').hidden = true; if (k === 'g' || k === 'G' || k === 'п' || k === 'П') $('toc').hidden = true; return; }
    if (k === ' ' || k === 'ArrowRight' || k === 'Enter' || k === 'PageDown') { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || k === 'Backspace' || k === 'PageUp') { e.preventDefault(); prev(); }
    else if (k === 'Home') go(0, false); else if (k === 'End') go(S.length - 1, true);
    else if (k === 'g' || k === 'G' || k === 'п' || k === 'П') toggleOv('toc', true);
    else if (k === 'c' || k === 'C' || k === 'с' || k === 'С') toggleClean();
    else if (k === 'f' || k === 'F' || k === 'а' || k === 'А') toggleFull();
    else if (k === 'h' || k === 'H' || k === '?' || k === 'р' || k === 'Р') toggleOv('help', true);
  });
  document.addEventListener('keyup', function (e) { if (e.key === ' ') e.preventDefault(); });
  var hs = parseInt((location.hash || '').slice(1), 10); if (hs) si = Math.max(0, Math.min(S.length - 1, hs - 1));
  fit(); show();
  window.__deck = { next: next, prev: prev, go: go, count: function () { return S.length; }, state: function () { return { si: si, f: f, frags: S[si].frags.length }; }, slides: S };
})();
