/* Language of Location: «Постав на місце». Дані: window.PLACE. Рендер карт: MapChart (map.js). */
(function () {
  'use strict';
  var P = window.PLACE, LV = P.levels, NS = 'http://www.w3.org/2000/svg';
  function $(id) { return document.getElementById(id); }
  function h(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function mk(t) { return String(t).replace(/\[\[(.+?)\]\]/g, '<mark>$1</mark>'); }
  function plain(t) { return String(t).replace(/\[\[|\]\]/g, ''); }
  function sv(p, tag, a, text) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (text !== undefined) e.textContent = text; p.appendChild(e); return e; }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  var li = 0, ti = 0, chart = null, S = null, sel = false, done = {};
  try { done = JSON.parse(store('place-done') || '{}') || {}; } catch (e) { done = {}; }

  function tabs() {
    var box = $('lvls'); box.innerHTML = '';
    LV.forEach(function (L, i) {
      var b = h('button', 'lv' + (i === li ? ' on' : ''), L.name + (done[L.id] != null ? '<span class="ck">✓ ' + done[L.id] + '/' + L.tasks.length + '</span>' : ''));
      b.onclick = function () { start(i); }; box.appendChild(b);
    });
  }
  function start(i) {
    li = i; ti = 0; var L = LV[li];
    S = { placed: {}, out: [], att: 0, phrases: [], first: 0 };
    $('sum').hidden = true; $('tcard').hidden = false;
    $('intro').textContent = L.intro; $('map').innerHTML = '';
    chart = window.MapChart($('map'), L.scene, {});
    var body = chart.body(0); S.slotG = sv(body, 'g', {}); S.placedG = sv(body, 'g', { style: 'pointer-events:none' }); S.slots = {};
    L.slots.forEach(function (s) {
      var g = sv(S.slotG, 'g', {}), r = sv(g, 'rect', { class: 'slot', x: s.x, y: s.y, width: s.w, height: s.h, rx: 1.6 });
      var q = sv(g, 'text', { class: 'slq', x: s.x + s.w / 2, y: s.y + s.h / 2 + 2.2, 'text-anchor': 'middle' }, '?');
      r.addEventListener('click', function () { if (sel && S.cur && S.cur.type === 'place' && !S.locked) tryDrop(s.id); });
      S.slots[s.id] = { d: s, r: r, q: q, filled: false };
    });
    $('mapnote').textContent = L.scene.compass ? 'Угорі праворуч N: північ. На іспиті ти бачитимеш такий самий компас.' : 'Сторін світу на плані немає, тому орієнтир: вхід / брама, алея, стіни, кути.';
    tabs(); task();
  }
  function prog() {
    var L = LV[li], box = $('prog'); box.innerHTML = '';
    L.tasks.forEach(function (t, i) { box.appendChild(h('i', i === ti ? 'now' : S.out[i] === 'ok' ? 'ok' : S.out[i] === 'late' ? 'no' : '')); });
  }
  function fb(cls, html) { var f = $('fb'); f.className = 'fb ' + cls; f.innerHTML = html; f.hidden = false; }
  function task() {
    var L = LV[li], t = L.tasks[ti]; S.cur = t; S.att = 0; S.locked = false; sel = false;
    $('fb').hidden = true; $('next').hidden = true; $('cnt').textContent = (ti + 1) + ' / ' + L.tasks.length; prog();
    Object.keys(S.slots).forEach(function (k) { var o = S.slots[k]; o.r.setAttribute('class', 'slot' + (o.filled ? ' good' : '')); o.g = null; o.r.parentNode.style.display = o.filled ? 'none' : ''; });
    chart.setHL({});
    var tray = $('tray'), opts = $('opts'); tray.innerHTML = ''; opts.innerHTML = '';
    if (t.type === 'place') {
      $('chip').textContent = 'ПОСТАВ НА МІСЦЕ'; $('tq').innerHTML = mk(t.text); tray.hidden = false; opts.hidden = true;
      Object.keys(S.slots).forEach(function (k) { if (!S.slots[k].filled) S.slots[k].r.parentNode.style.display = ''; });
      var tok = h('div', 'tok', '<span class="ic">' + t.tok.icon + '</span><span>' + t.tok.t + '</span>'); tray.appendChild(tok); tray.appendChild(h('span', 'hintl', 'Перетягни значок на карту або торкнись його, а потім потрібного місця.'));
      bindTok(tok, t);
      $('kh').textContent = 'Фраза, виділена золотим, і є «мова місця».';
    } else {
      $('chip').textContent = 'ОБЕРИ ТОЧНИЙ ОПИС'; $('tq').innerHTML = '<span class="qh">' + t.q + '</span>'; tray.hidden = true; opts.hidden = false;
      Object.keys(S.slots).forEach(function (k) { S.slots[k].r.parentNode.style.display = 'none'; });
      chart.setHL({ ids: [t.target] });
      shuffle(t.opts).forEach(function (o, i) {
        var b = h('button', 'opt', '<span class="l">' + 'ABC'[i] + '</span><span>' + o.t + '</span>'); b.onclick = function () { pick(b, o, t); }; opts.appendChild(b);
      });
      $('kh').textContent = 'Дві точні прив’язки краще за одну розмиту.';
    }
  }
  function bindTok(tok, t) {
    tok.addEventListener('pointerdown', function (e) {
      if (S.locked) return; e.preventDefault(); tok.setPointerCapture(e.pointerId);
      var sx = e.clientX, sy = e.clientY, moved = false, g = null;
      function mv(ev) {
        if (!moved && Math.hypot(ev.clientX - sx, ev.clientY - sy) > 6) { moved = true; g = h('div', 'ghost', t.tok.icon); document.body.appendChild(g); }
        if (g) { g.style.left = ev.clientX + 'px'; g.style.top = ev.clientY + 'px'; hover(slotAt(ev)); }
      }
      function up(ev) {
        tok.removeEventListener('pointermove', mv); tok.removeEventListener('pointerup', up); tok.removeEventListener('pointercancel', up);
        if (g) g.remove(); hover(null);
        if (moved) { var s = slotAt(ev); if (s) tryDrop(s); } else { sel = !sel; tok.classList.toggle('sel', sel); }
      }
      tok.addEventListener('pointermove', mv); tok.addEventListener('pointerup', up); tok.addEventListener('pointercancel', up);
    });
  }
  function slotAt(ev) {
    var p = chart.ptr(ev, 0), best = null, bd = 1e9;
    Object.keys(S.slots).forEach(function (k) {
      var o = S.slots[k]; if (o.filled) return; var s = o.d, dx = Math.max(s.x - 1.5 - p.x, 0, p.x - (s.x + s.w + 1.5)), dy = Math.max(s.y - 1.5 - p.y, 0, p.y - (s.y + s.h + 1.5)), d = Math.sqrt(dx * dx + dy * dy);
      if (d === 0) { var c = Math.hypot(p.x - (s.x + s.w / 2), p.y - (s.y + s.h / 2)); if (c < bd) { bd = c; best = k; } }
    });
    return best;
  }
  function hover(id) { Object.keys(S.slots).forEach(function (k) { var o = S.slots[k]; if (!o.filled) o.r.classList.toggle('hov', k === id); }); }
  function addPhrases(t) { (String(t.text || t.uk || '').match(/\[\[(.+?)\]\]/g) || []).forEach(function (m) { var x = m.slice(2, -2); if (S.phrases.indexOf(x) < 0) S.phrases.push(x); }); }
  function finish(first) {
    S.out[ti] = first ? 'ok' : 'late'; if (first) S.first++; prog(); S.locked = true;
    $('next').hidden = false; $('next').textContent = ti < LV[li].tasks.length - 1 ? 'Далі →' : 'Результат →'; $('next').focus();
  }
  function placeTok(id) {
    var o = S.slots[id], s = o.d; o.filled = true; o.r.setAttribute('class', 'slot good'); o.q.style.display = 'none';
    sv(S.placedG, 'rect', { x: s.x + 0.6, y: s.y + 0.6, width: s.w - 1.2, height: s.h - 1.2, rx: 1.4, fill: 'rgba(26,122,74,.18)', stroke: '#1A7A4A', 'stroke-width': .8 });
    sv(S.placedG, 'text', { x: s.x + s.w / 2, y: s.y + s.h / 2 - 0.4, 'text-anchor': 'middle', 'font-size': Math.min(7.5, s.h * 0.55) }, S.cur.tok.icon);
    sv(S.placedG, 'text', { x: s.x + s.w / 2, y: s.y + s.h - 1.8, 'text-anchor': 'middle', 'font-size': Math.min(2.8, (s.w - 1) / (S.cur.tok.t.length * 0.56)), 'font-weight': 700, fill: '#1A5E45' }, S.cur.tok.t);
  }
  function tryDrop(id) {
    var t = S.cur; if (S.locked) return; S.att++;
    if (id === t.slot) {
      placeTok(id); addPhrases(t); $('tray').innerHTML = '<span class="hintl">✓ ' + t.tok.t + ' на місці</span>';
      fb('ok', '<b>' + (S.att === 1 ? 'Правильно!' : 'Тепер правильно.') + '</b>' + mk(t.text) + '<br><br>' + mk(t.uk)); finish(S.att === 1);
    } else {
      var o = S.slots[id]; o.r.classList.add('bad'); setTimeout(function () { o.r.classList.remove('bad'); }, 700);
      $('tcard').classList.remove('shake'); void $('tcard').offsetWidth; $('tcard').classList.add('shake');
      if (S.att >= 3) {
        S.slots[t.slot].r.classList.add('rev'); placeTok(t.slot); addPhrases(t); $('tray').innerHTML = '<span class="hintl">Правильне місце показано на карті</span>';
        fb('no', '<b>Ось правильне місце.</b>' + mk(t.text) + '<br><br>' + mk(t.uk)); finish(false);
      } else fb('hint', '<b>Не те місце.</b>' + t.hint + (S.att === 1 ? '' : '<br>Ще одна спроба.'));
      sel = false; var tk = document.querySelector('.tok'); if (tk) tk.classList.remove('sel');
    }
  }
  function pick(btn, o, t) {
    if (S.locked || btn.disabled) return; S.att++;
    if (o.ok) {
      btn.classList.add('ok'); [].forEach.call($('opts').children, function (b) { b.disabled = true; });
      fb('ok', '<b>' + (S.att === 1 ? 'Точно!' : 'Тепер правильно.') + '</b>' + o.why); finish(S.att === 1);
    } else {
      btn.classList.add('no'); btn.disabled = true; fb('no', '<b>Не зовсім.</b>' + o.why + '<br>Спробуй ще раз.');
      if (S.att >= 2) { [].forEach.call($('opts').children, function (b, i) { }); }
    }
  }
  function summary() {
    var L = LV[li]; done[L.id] = S.first; store('place-done', JSON.stringify(done)); tabs();
    $('tcard').hidden = true; var s = $('sum'); s.hidden = false; $('prog').innerHTML = '';
    var tot = L.tasks.length, nx = li < LV.length - 1;
    s.innerHTML = '<h2>' + L.name + ': готово</h2><div class="big">' + S.first + ' / ' + tot + '</div><p>' + (S.first === tot ? 'Усе з першого разу. Так і треба писати на іспиті.' : S.first >= tot - 2 ? 'Дуже добре. Перечитай фрази, у яких була помилка.' : 'Нормально для першого проходу. Пройди рівень ще раз: перетягувати вдруге вже легше.') + '</p>' +
      '<p><b>Мова місця з цього рівня:</b></p><div class="bank">' + S.phrases.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>' +
      '<div class="row"><button class="tbtn" id="again">↺ Ще раз</button>' + (nx ? '<button class="tbtn pri" id="nxt">Далі: ' + LV[li + 1].name + ' →</button>' : '<a class="tbtn pri" href="../index.html?t=maps-1">Тепер пиши: «Пишемо разом» →</a>') + '</div>';
    $('again').onclick = function () { start(li); }; if (nx) $('nxt').onclick = function () { start(li + 1); };
  }
  $('next').onclick = function () { if (ti < LV[li].tasks.length - 1) { ti++; task(); } else summary(); };
  document.addEventListener('keydown', function (e) { if ((e.key === 'Enter') && !$('next').hidden) { e.preventDefault(); $('next').click(); } });
  start(0);
  window.__place = { start: start, drop: tryDrop, state: function () { return S; }, chart: function () { return chart; } };
})();
