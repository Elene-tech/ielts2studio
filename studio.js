/* Writing Studio · «Пишемо разом»
   Ліворуч графік, праворуч відповідь.
   Режим «Сценарій»: пробіл → наступне речення друкується з обраною швидкістю.
   Режим «Живий»: пишеш сама, графік підсвічується за легендою. */
(function () {
  'use strict';

  var params = new URLSearchParams(location.search);
  var file = (params.get('t') || 'line-1').replace(/[^a-z0-9\-_]/gi, '');
  var s = document.createElement('script');
  s.src = 'data/' + file + '.js';
  s.onload = init;
  s.onerror = function () { document.body.innerHTML = '<p style="padding:30px">Не знайдено завдання: ' + file + '</p>'; };
  document.head.appendChild(s);

  function $(id) { return document.getElementById(id); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }

  function init() {
    var T = window.TASK;
    var body = document.body;
    var NS = 'http://www.w3.org/2000/svg';

    /* ---------- ЛІВА ПАНЕЛЬ ---------- */
    $('kicker').textContent = T.kicker;
    $('prompt').textContent = T.prompt;
    $('promptTail').textContent = T.promptTail + ' Write at least ' + T.minWords + ' words.';
    $('chartTitle').textContent = T.chart.title;

    var C = T.chart;
    var W = 680, H = 436, PL = 66, PR = 660, PT = 34, PB = 368;
    var n = C.xLabels.length;
    function ix(i) { return 100 + i * ((PR - 40 - 100) / (n - 1)) + 0; }
    function iy(v) { return PB - (v / C.yMax) * (PB - PT); }

    function markerEl(shape, cx, cy, color) {
      var r = 6.2, el;
      if (shape === 'square') { el = document.createElementNS(NS, 'rect'); el.setAttribute('x', cx - r); el.setAttribute('y', cy - r); el.setAttribute('width', r * 2); el.setAttribute('height', r * 2); }
      else if (shape === 'diamond') { el = document.createElementNS(NS, 'polygon'); el.setAttribute('points', [cx, cy - r - 2, cx + r + 2, cy, cx, cy + r + 2, cx - r - 2, cy].join(' ')); }
      else if (shape === 'triangle') { el = document.createElementNS(NS, 'polygon'); el.setAttribute('points', [cx, cy - r - 1.5, cx + r + 1.5, cy + r, cx - r - 1.5, cy + r].join(' ')); }
      else { el = document.createElementNS(NS, 'circle'); el.setAttribute('cx', cx); el.setAttribute('cy', cy); el.setAttribute('r', r); }
      el.setAttribute('fill', color); el.setAttribute('stroke', '#fff'); el.setAttribute('stroke-width', 1.8);
      el.setAttribute('class', 'mk');
      return el;
    }
    function add(parent, tag, attrs, text) {
      var e = document.createElementNS(NS, tag);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      if (text !== undefined) e.textContent = text;
      parent.appendChild(e); return e;
    }

    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', C.title);
    var gGrid = add(svg, 'g', { 'class': 'grid' });
    for (var v = 0; v <= C.yMax; v += C.yStep) add(gGrid, 'line', { x1: PL, x2: PR, y1: iy(v), y2: iy(v) });
    var band = add(svg, 'rect', { 'class': 'band', x: 0, y: PT, width: 0, height: PB - PT });
    var gAx = add(svg, 'g', { 'class': 'axis' });
    add(gAx, 'line', { x1: PL, x2: PL, y1: PT - 6, y2: PB });
    add(gAx, 'line', { x1: PL, x2: PR, y1: PB, y2: PB });
    for (var v2 = 0; v2 <= C.yMax; v2 += C.yStep) add(gAx, 'text', { x: PL - 10, y: iy(v2) + 4.5, 'text-anchor': 'end' }, v2);
    C.xLabels.forEach(function (l, i) {
      add(gAx, 'line', { x1: ix(i), x2: ix(i), y1: PB, y2: PB + 5 });
      add(gAx, 'text', { x: ix(i), y: PB + 22, 'text-anchor': 'middle' }, l);
    });
    add(svg, 'text', { 'class': 'axtitle', x: (PL + PR) / 2, y: H - 10, 'text-anchor': 'middle' }, C.xTitle);
    add(svg, 'text', { 'class': 'axtitle', transform: 'translate(16 ' + ((PT + PB) / 2) + ') rotate(-90)', 'text-anchor': 'middle' }, C.yTitle);

    var serG = {};
    C.series.forEach(function (se) {
      var g = add(svg, 'g', { 'class': 'ser on', 'data-id': se.id });
      var pts = se.data.map(function (d, i) { return ix(i) + ',' + iy(d); }).join(' ');
      add(g, 'polyline', { 'class': 'ln', points: pts, stroke: se.color });
      var mks = [], vals = [];
      se.data.forEach(function (d, i) {
        mks.push(g.appendChild(markerEl(se.marker, ix(i), iy(d), se.color)));
      });
      se.data.forEach(function (d, i) {
        var below = se.id === 'read';
        vals.push(add(g, 'text', { 'class': 'val', x: ix(i), y: below ? iy(d) + 26 : iy(d) - 13, fill: se.color }, d));
      });
      serG[se.id] = { g: g, mks: mks, vals: vals };
    });
    var gTags = add(svg, 'g', { 'class': 'tags' });
    $('chart').appendChild(svg);

    /* легенда */
    var legend = $('legend');
    var legBtn = {};
    C.series.forEach(function (se) {
      var b = document.createElement('button');
      b.type = 'button';
      var sv = document.createElementNS(NS, 'svg');
      sv.setAttribute('width', 34); sv.setAttribute('height', 16); sv.setAttribute('viewBox', '0 0 34 16');
      add(sv, 'line', { x1: 0, x2: 34, y1: 8, y2: 8, stroke: se.color, 'stroke-width': 3, 'stroke-linecap': 'round' });
      sv.appendChild(markerEl(se.marker, 17, 8, se.color));
      b.appendChild(sv);
      b.appendChild(document.createTextNode(se.name));
      b.addEventListener('click', function () { manualFocus(se.id); });
      legend.appendChild(b); legBtn[se.id] = b;
    });

    var manual = null, curHL = {};
    function manualFocus(id) {
      manual = (manual === id) ? null : id;
      applyHL(manual ? { s: [id] } : curHL, true);
    }

    function applyHL(hl, isManual) {
      hl = hl || {};
      if (!isManual) { curHL = hl; manual = null; }
      var hasFocus = !!hl.s;
      svg.classList.toggle('focus', hasFocus);
      svg.classList.toggle('axes-on', !!hl.axes);
      C.series.forEach(function (se) {
        var on = !hasFocus || hl.s.indexOf(se.id) > -1;
        serG[se.id].g.classList.toggle('on', on);
        legBtn[se.id].classList.toggle('dim', hasFocus && !on);
        var pts = (hl.pts && hl.pts[se.id]) || [];
        serG[se.id].mks.forEach(function (m, i) { m.classList.toggle('big', pts.indexOf(i) > -1); });
        serG[se.id].vals.forEach(function (t, i) { t.classList.toggle('show', pts.indexOf(i) > -1); });
      });
      if (hl.band) {
        var x0 = ix(hl.band[0]), x1 = ix(hl.band[1]);
        band.setAttribute('x', x0); band.setAttribute('width', x1 - x0); band.classList.add('on');
      } else band.classList.remove('on');
      while (gTags.firstChild) gTags.removeChild(gTags.firstChild);
      (hl.tags || []).forEach(function (t) {
        var px = ix(t.x), py = iy(t.y);
        var w = t.t.length * 8 + 20, h = 24;
        var cx = px + (t.dx || 0), cy = py + (t.dy || 0);
        var g = add(gTags, 'g', { 'class': 'tag' });
        add(g, 'line', { x1: px, y1: py, x2: cx, y2: cy + (t.dy < 0 ? h / 2 : -h / 2) });
        add(g, 'rect', { x: cx - w / 2, y: cy - h / 2, width: w, height: h, rx: 12 });
        add(g, 'text', { x: cx, y: cy + 1 }, t.t);
      });
    }

    /* ---------- ПРАВА ПАНЕЛЬ: КРОКИ, ПАПІР ---------- */
    var stepsEl = $('steps'), stepLi = [];
    T.steps.forEach(function (st) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = '<span class="n">' + st.n + '</span><span>' + st.label + '</span>';
      b.addEventListener('click', function () { if (mode === 'live') liveStep(st.n); });
      li.appendChild(b); stepsEl.appendChild(li); stepLi.push(li);
    });
    function setStep(nn) {
      stepLi.forEach(function (li, i) {
        li.classList.toggle('on', i + 1 === nn);
        li.classList.toggle('done', i + 1 < nn);
      });
    }

    var paper = $('paper'), secEl = {};
    T.sections.forEach(function (sc) {
      var d = document.createElement('div');
      d.className = 'sec'; d.style.setProperty('--c', sc.color); d.dataset.sec = sc.id;
      d.innerHTML = '<div class="sec-h"><span class="chip">' + sc.label + '</span><span class="swc"></span></div>' +
        '<p class="txt"><span class="caret"></span></p>' +
        '<textarea class="live" rows="2" spellcheck="false" placeholder="Пиши тут: ' + sc.label + '"></textarea>';
      paper.appendChild(d);
      secEl[sc.id] = { box: d, txt: d.querySelector('.txt'), caret: d.querySelector('.caret'), live: d.querySelector('.live'), swc: d.querySelector('.swc') };
    });

    /* ---------- ЛІЧИЛЬНИК СЛІВ ---------- */
    function words(str) { var m = str.trim().match(/\S+/g); return m ? m.length : 0; }
    function secText(id) {
      if (mode === 'live') return secEl[id].live.value;
      return Array.prototype.map.call(secEl[id].txt.querySelectorAll('.s'), function (e) { return e.textContent; }).join(' ');
    }
    function updateCount() {
      var tot = 0;
      T.sections.forEach(function (sc) {
        var w = words(secText(sc.id)); tot += w;
        secEl[sc.id].swc.textContent = w ? w + ' сл.' : '';
      });
      $('wcNum').textContent = tot;
      var f = $('meterFill'); f.style.width = Math.min(100, tot / 200 * 100) + '%';
      f.classList.toggle('ok', tot >= T.minWords);
    }

    /* ---------- РЕЖИМ СЦЕНАРІЮ ---------- */
    var mode = 'script';
    var beats = T.beats;
    var idx = -1;              // індекс останнього застосованого біта
    var typing = null;         // {timer, finish()}
    var cps = parseInt(store('ws-cps'), 10) || 16;
    $('speed').value = cps;
    $('speed').addEventListener('input', function () { cps = +this.value; store('ws-cps', cps); });

    function clearTexts() {
      T.sections.forEach(function (sc) {
        var e = secEl[sc.id];
        Array.prototype.slice.call(e.txt.childNodes).forEach(function (c) { if (c !== e.caret) e.txt.removeChild(c); });
        e.box.classList.remove('active');
      });
    }
    function addSentence(secId, text) {
      var e = secEl[secId];
      var prev = e.txt.querySelectorAll('.s');
      Array.prototype.forEach.call(e.txt.querySelectorAll('.s.cur'), function (x) { x.classList.remove('cur'); });
      if (prev.length) e.txt.insertBefore(document.createTextNode(' '), e.caret);
      var sp = document.createElement('span'); sp.className = 's cur'; sp.textContent = text;
      e.txt.insertBefore(sp, e.caret);
      return sp;
    }
    function activate(secId) {
      T.sections.forEach(function (sc) { secEl[sc.id].box.classList.toggle('active', sc.id === secId); });
      if (secId) secEl[secId].box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    function showCheck(on) {
      var box = $('check');
      if (!on) { box.hidden = true; return; }
      runCheck();
    }

    function afterBeat(b, instant) {
      setStep(b.step);
      $('cap').textContent = b.cap || ($('cap').textContent && b.sec ? $('cap').textContent : T.steps[b.step - 1].tip);
      applyHL(b.hl || {});
      $('progBar').style.width = ((beats.indexOf(b) + 1) / beats.length * 100) + '%';
      showCheck(!!b.check);
    }

    function render(upTo) {
      finishTyping();
      clearTexts();
      var lastSec = null, capFor = null;
      for (var j = 0; j <= upTo; j++) {
        var b = beats[j];
        if (b.text) { addSentence(b.sec, b.text); lastSec = b.sec; }
        if (b.cap) capFor = b.cap;
      }
      /* прибрати підсвітку «поточного» у всіх, крім останнього */
      if (upTo >= 0) {
        var bb = beats[upTo];
        T.sections.forEach(function (sc) {
          Array.prototype.forEach.call(secEl[sc.id].txt.querySelectorAll('.s.cur'), function (x) { x.classList.remove('cur'); });
        });
        if (bb.text) {
          var all = secEl[bb.sec].txt.querySelectorAll('.s'); all[all.length - 1].classList.add('cur');
        }
        activate(lastSec);
        setStep(bb.step);
        $('cap').textContent = bb.cap || capFor || T.steps[bb.step - 1].tip;
        applyHL(bb.hl || {});
        $('progBar').style.width = ((upTo + 1) / beats.length * 100) + '%';
        showCheck(!!bb.check);
      } else {
        setStep(0); activate(null); applyHL({});
        $('cap').textContent = 'Натисни пробіл: покажемо, як пишеться відповідь крок за кроком.';
        $('progBar').style.width = '0%';
        showCheck(false);
      }
      updateCount();
    }

    function delayFor(ch) {
      var base = 1000 / cps;
      var j = 0.55 + Math.random() * 0.95;
      var m = 1;
      if (ch === ',') m = 4;
      else if (ch === '.') m = 6;
      else if (ch === ' ') m = 1.25;
      else if (/\d/.test(ch)) m = 1.35;
      return base * j * m;
    }

    function finishTyping() {
      if (typing) { clearTimeout(typing.timer); typing.finish(); typing = null; }
    }

    function typeBeat(b) {
      var sp = addSentence(b.sec, '');
      activate(b.sec);
      var i = 0, full = b.text;
      function done() { sp.textContent = full; updateCount(); }
      typing = { timer: null, finish: done };
      function tick() {
        i++;
        sp.textContent = full.slice(0, i);
        updateCount();
        if (i % 10 === 0) keepVisible(b.sec);
        if (i >= full.length) { typing = null; return; }
        typing.timer = setTimeout(tick, delayFor(full.charAt(i - 1)));
      }
      typing.timer = setTimeout(tick, 380);
    }

    function keepVisible(secId) {
      var r = secEl[secId].box.getBoundingClientRect(), pr = paper.getBoundingClientRect();
      if (r.bottom > pr.bottom - 30) paper.scrollTop += (r.bottom - pr.bottom) + 44;
    }

    function next() {
      if (mode !== 'script') return;
      if (typing) { finishTyping(); return; }
      if (idx >= beats.length - 1) return;
      idx++;
      var b = beats[idx];
      /* підготувати стан без друку цього біта */
      if (b.text) {
        render(idx - 1);                 // стан до цього біта
        afterBeat(b);
        typeBeat(b);
        /* cap для речень без власного: залишаємо попередній */
        var capFor = null;
        for (var j = idx; j >= 0; j--) if (beats[j].cap) { capFor = beats[j].cap; break; }
        $('cap').textContent = b.cap || capFor || T.steps[b.step - 1].tip;
      } else {
        render(idx);
      }
    }
    function prev() {
      if (mode !== 'script') return;
      finishTyping();
      if (idx < 0) return;
      idx--;
      render(idx);
    }
    function restart() { idx = -1; render(-1); paper.scrollTop = 0; }

    $('next').addEventListener('click', next);
    $('prev').addEventListener('click', prev);
    $('restart').addEventListener('click', restart);

    /* ---------- ЖИВИЙ РЕЖИМ ---------- */
    var liveKey = 'ws-live-' + T.id;
    function grow(t) { t.style.height = 'auto'; t.style.height = (t.scrollHeight + 2) + 'px'; }
    T.sections.forEach(function (sc) {
      var t = secEl[sc.id].live;
      t.addEventListener('input', function () { grow(t); updateCount(); saveLive(); });
      t.addEventListener('focus', function () {
        T.sections.forEach(function (x) { secEl[x.id].box.classList.toggle('active', x.id === sc.id); });
        var stn = { intro: 3, overview: 4, body1: 5, body2: 6 }[sc.id]; if (stn && mode === 'live') { setStep(stn); $('cap').textContent = T.steps[stn - 1].tip; }
      });
    });
    function saveLive() {
      var o = {}; T.sections.forEach(function (sc) { o[sc.id] = secEl[sc.id].live.value; });
      store(liveKey, JSON.stringify(o));
    }
    function loadLive() {
      try { var o = JSON.parse(store(liveKey) || '{}'); T.sections.forEach(function (sc) { if (o[sc.id]) { secEl[sc.id].live.value = o[sc.id]; } }); } catch (e) {}
    }
    function liveStep(nn) {
      setStep(nn); $('cap').textContent = T.steps[nn - 1].tip;
      if (nn === 1) applyHL({ axes: true });
      else if (nn === 2) applyHL({});
      else if (nn === 7) runCheck();
      else {
        var id = { 3: 'intro', 4: 'overview', 5: 'body1', 6: 'body2' }[nn];
        secEl[id].live.focus(); secEl[id].box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
      if (nn !== 7) $('check').hidden = true;
    }
    $('checkBtn').addEventListener('click', function () { setStep(7); $('cap').textContent = T.steps[6].tip; runCheck(); });
    $('clearBtn').addEventListener('click', function () {
      if (!confirm('Очистити всі поля?')) return;
      T.sections.forEach(function (sc) { secEl[sc.id].live.value = ''; grow(secEl[sc.id].live); });
      saveLive(); updateCount(); $('check').hidden = true;
    });

    /* ---------- КОПІЮВАННЯ ---------- */
    function fullText() {
      return T.sections.map(function (sc) { return secText(sc.id).trim(); }).filter(Boolean).join('\n\n');
    }
    function copy(btn) {
      var txt = fullText();
      function ok() { var o = btn.textContent; btn.textContent = 'Скопійовано ✓'; setTimeout(function () { btn.textContent = o; }, 1400); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, function () { fallback(); });
      else fallback();
      function fallback() {
        var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); ok(); } catch (e) {} document.body.removeChild(ta);
      }
    }
    $('copyBtn').addEventListener('click', function () { copy(this); });
    $('copyBtn2').addEventListener('click', function () { copy(this); });

    /* ---------- ЧЕКЛИСТ (автоперевірка) ---------- */
    function normWords(str) { return (str.toLowerCase().match(/[a-z0-9’']+/g) || []); }
    function sharesFourGram(a, b) {
      var A = normWords(a), B = normWords(b), set = {};
      for (var i = 0; i + 4 <= B.length; i++) set[B.slice(i, i + 4).join(' ')] = 1;
      for (var j = 0; j + 4 <= A.length; j++) if (set[A.slice(j, j + 4).join(' ')]) return true;
      return false;
    }
    function runCheck() {
      var t = {}; T.sections.forEach(function (sc) { t[sc.id] = secText(sc.id).trim(); });
      var total = words(Object.keys(t).map(function (k) { return t[k]; }).join(' '));
      var all = Object.keys(t).map(function (k) { return t[k]; }).join(' ').toLowerCase();
      var found = T.linking.filter(function (w) { return new RegExp('\\b' + w + '\\b').test(all); });
      var items = [
        { ok: total >= T.minWords, t: 'Обсяг: ' + total + ' слів (потрібно ' + T.minWords + '+)' },
        t.intro ? (sharesFourGram(t.intro, T.prompt) ? { ok: false, t: 'Introduction: 4+ слів поспіль збігаються з умовою, перефразуй глибше' } : { ok: true, t: 'Introduction: є, умову перефразовано' }) : { ok: false, t: 'Introduction: немає' },
        t.overview ? (/\d/.test(t.overview) ? { ok: false, t: 'Overview: є цифри, прибери їх' } : { ok: true, t: 'Overview: є, без цифр' }) : { ok: false, t: 'Overview: немає' },
        { ok: !!(t.body1 && t.body2), t: (t.body1 && t.body2) ? 'Body 1 і Body 2: обидва є' : 'Body 1 і Body 2: бракує абзацу' },
        { ok: found.length >= 3, t: 'Слова-зв’язки: ' + found.length + (found.length >= 3 ? '' : ' (бажано 3+)') + (found.length ? ' — ' + found.join(', ') : '') }
      ];
      var ul = $('checkList'); ul.innerHTML = '';
      items.forEach(function (it, i) {
        var li = document.createElement('li'); li.className = it.ok ? '' : 'bad';
        li.style.animationDelay = (i * 0.28) + 's';
        li.innerHTML = '<i>' + (it.ok ? '✓' : '!') + '</i><span></span>'; li.querySelector('span').textContent = it.t;
        ul.appendChild(li);
      });
      $('check').hidden = false;
      $('check').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    /* ---------- ПЕРЕМИКАЧ РЕЖИМІВ ---------- */
    function setMode(m) {
      finishTyping();
      mode = m; body.dataset.mode = m;
      Array.prototype.forEach.call(document.querySelectorAll('.modes button'), function (b) { b.classList.toggle('on', b.dataset.mode === m); });
      $('check').hidden = true;
      if (m === 'live') {
        $('progBar').style.width = '0%';
        T.sections.forEach(function (sc) { secEl[sc.id].box.classList.remove('active'); grow(secEl[sc.id].live); });
        setStep(1); $('cap').textContent = T.steps[0].tip; applyHL({ axes: true }); updateCount();
      } else { render(idx); }
    }
    Array.prototype.forEach.call(document.querySelectorAll('.modes button'), function (b) {
      b.addEventListener('click', function () { setMode(b.dataset.mode); });
    });

    /* ---------- ШРИФТ, ПОВНИЙ ЕКРАН, ЧИСТИЙ ЕКРАН ---------- */
    var fs = parseInt(store('ws-fs'), 10) || 19;
    function setFs(v) { fs = Math.max(15, Math.min(32, v)); document.documentElement.style.setProperty('--fs', fs + 'px'); store('ws-fs', fs); T.sections.forEach(function (sc) { grow(secEl[sc.id].live); }); }
    setFs(fs);
    $('fsm').addEventListener('click', function () { setFs(fs - 2); });
    $('fsp').addEventListener('click', function () { setFs(fs + 2); });
    function toggleFull() {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    }
    $('full').addEventListener('click', toggleFull);
    function toggleClean() { body.classList.toggle('clean'); $('clean').textContent = body.classList.contains('clean') ? 'Показати кнопки' : 'Чистий екран'; }
    $('clean').addEventListener('click', toggleClean);

    /* ---------- ТАЙМЕР ---------- */
    var left = 20 * 60, tmrId = null;
    function showTmr() {
      var m = Math.floor(left / 60), s2 = left % 60;
      $('tmrTxt').textContent = (m < 10 ? '0' : '') + m + ':' + (s2 < 10 ? '0' : '') + s2;
      $('tmr').classList.toggle('low', left <= 300 && left > 0 && !!tmrId);
    }
    $('tmr').addEventListener('click', function () {
      if (tmrId) { clearInterval(tmrId); tmrId = null; this.classList.remove('run', 'low'); return; }
      if (left <= 0) left = 20 * 60;
      this.classList.add('run');
      tmrId = setInterval(function () { left--; if (left <= 0) { left = 0; clearInterval(tmrId); tmrId = null; $('tmr').classList.remove('run'); } showTmr(); }, 1000);
      showTmr();
    });
    $('tmrReset').addEventListener('click', function () { clearInterval(tmrId); tmrId = null; left = 20 * 60; $('tmr').classList.remove('run', 'low'); showTmr(); });

    /* ---------- КЛАВІАТУРА ---------- */
    document.addEventListener('keydown', function (e) {
      var tag = (e.target && e.target.tagName) || '';
      if (tag === 'TEXTAREA' || tag === 'INPUT' && e.target.type !== 'range') return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      var k = e.key;
      if (mode === 'script') {
        if (k === ' ' || k === 'ArrowRight' || k === 'Enter') { if (tag === 'BUTTON' && k !== 'ArrowRight') { /* кнопка сама спрацює від Enter/пробілу */ e.preventDefault(); } else e.preventDefault(); next(); return; }
        if (k === 'ArrowLeft' || k === 'Backspace') { e.preventDefault(); prev(); return; }
        if (k === 'r' || k === 'R' || k === 'к' || k === 'К') { restart(); return; }
      }
      if (k === 'f' || k === 'F' || k === 'а' || k === 'А') toggleFull();
      if (k === 'c' || k === 'C' || k === 'с' || k === 'С') toggleClean();
    });
    /* кнопки не повинні «ловити» пробіл двічі */
    document.addEventListener('keyup', function (e) { if (e.key === ' ' && e.target.tagName === 'BUTTON') e.preventDefault(); });

    /* ---------- СТАРТ ---------- */
    loadLive();
    render(-1);
    window.__studio = { next: next, prev: prev, restart: restart, setMode: setMode, state: function () { return { idx: idx, mode: mode, typing: !!typing, text: fullText() }; } };
  }
})();
