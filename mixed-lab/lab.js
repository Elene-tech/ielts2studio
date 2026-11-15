/* Mixed Lab: sort (який графік) і read (обери точне речення). Дані: data/mlab-1.js, графіки: mixed-scenes.js */
(function () {
  'use strict';
  var L = window.LAB, $ = function (i) { return document.getElementById(i); };
  var KEY = 'mixed-lab-done';
  var S = { lv: 0, i: 0, res: L.levels.map(function (l) { return l.tasks.map(function () { return null; }); }), tries: 0, chart: null, task: null, done: false };
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function mk(t) { return esc(t).replace(/\[\[(.+?)\]\]/g, '<mark>$1</mark>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function levelBar() {
    var h = ''; L.levels.forEach(function (l, i) { var all = S.res[i].every(function (r) { return r !== null; }); h += '<button class="lv' + (i === S.lv ? ' on' : '') + '" data-i="' + i + '">' + esc(l.title) + (all ? '<span class="ck">✓</span>' : '') + '</button>'; });
    $('lvls').innerHTML = h; Array.prototype.forEach.call($('lvls').querySelectorAll('.lv'), function (b) { b.onclick = function () { S.lv = +b.getAttribute('data-i'); S.i = 0; $('sum').hidden = true; $('tcard').hidden = false; show(); }; });
  }
  function progBar() { var t = L.levels[S.lv].tasks, h = ''; t.forEach(function (_, i) { var r = S.res[S.lv][i]; h += '<i class="' + (i === S.i ? 'now' : r === 1 ? 'ok' : r === 0 ? 'no' : '') + '"></i>'; }); $('prog').innerHTML = h; }
  function show() {
    var lv = L.levels[S.lv], t = lv.tasks[S.i]; S.task = t; S.tries = 0; levelBar(); progBar();
    $('intro').textContent = lv.intro; $('chip').textContent = t.fixed ? 'ЯКИЙ ГРАФІК?' : 'ОБЕРИ РЕЧЕННЯ'; $('cnt').textContent = (S.i + 1) + ' / ' + lv.tasks.length;
    $('fb').hidden = true; $('next').hidden = true; $('opts').innerHTML = ''; $('check').hidden = true; $('hintb').hidden = true; $('meter').hidden = true; $('chart').innerHTML = '';
    $('tq').innerHTML = (t.say ? '<div class="sentence">' + esc(t.say) + '</div>' : '') + '<div class="qh">' + mk(t.q) + '</div>';
    S.chart = MixedChart($('chart'), window.MXSC[t.scene], { h: { line: 190, bar: 200, pie: 190 }, R: 60 }); S.chart.setHL(t.hl || {});
    $('mapnote').textContent = window.MXSC[t.scene].title;
    var letters = 'ABCD'; (t.fixed ? t.opts : shuffle(t.opts)).forEach(function (o, k) {
      var b = document.createElement('button'); b.className = 'opt'; b.innerHTML = '<span class="l">' + letters[k] + '</span><span>' + esc(o.t) + '</span>';
      b.onclick = function () { pick(b, o); }; $('opts').appendChild(b);
    });
  }
  function fb(cls, html) { var f = $('fb'); f.className = 'fb ' + cls; f.innerHTML = html; f.hidden = false; }
  function finish(ok) {
    S.res[S.lv][S.i] = (ok && S.tries <= 1) ? 1 : 0;
    $('next').hidden = false; $('next').textContent = S.i < L.levels[S.lv].tasks.length - 1 ? 'Далі →' : 'Підсумок рівня →'; progBar(); levelBar();
  }
  function pick(btn, o) {
    if (S.res[S.lv][S.i] !== null) return; S.tries++;
    Array.prototype.forEach.call($('opts').children, function (b) { b.disabled = true; });
    btn.classList.add(o.ok ? 'ok' : 'no');
    if (!o.ok) { var ok = S.task.opts.filter(function (x) { return x.ok; })[0]; Array.prototype.forEach.call($('opts').children, function (b) { if (b.textContent.indexOf(ok.t) > -1) b.classList.add('ok'); }); }
    fb(o.ok ? 'ok' : 'no', '<b>' + (o.ok ? 'Так!' : 'Не зовсім.') + '</b>' + esc(o.ok ? o.why : o.why + ' Правильна відповідь виділена зеленим: ' + S.task.opts.filter(function (x) { return x.ok; })[0].why));
    if (S.task.reveal) S.chart.setHL(S.task.reveal);
    finish(o.ok);
  }
  $('next').onclick = function () {
    var n = L.levels[S.lv].tasks.length;
    if (S.i < n - 1) { S.i++; show(); } else summary();
  };
  function summary() {
    var lv = L.levels[S.lv], sc = S.res[S.lv].filter(function (r) { return r === 1; }).length, n = lv.tasks.length, bank = [];
    lv.tasks.forEach(function (t) { (t.bank || []).forEach(function (b) { if (bank.indexOf(b) < 0) bank.push(b); }); });
    var st = {}; try { st = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
    if (!st[lv.id] || sc > st[lv.id]) st[lv.id] = sc; try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
    $('tcard').hidden = true; var s = $('sum'); s.hidden = false;
    var next = S.lv < L.levels.length - 1;
    s.innerHTML = '<h2>' + esc(lv.title) + ': готово</h2><div class="big">' + sc + ' / ' + n + '</div><p>З першої спроби. Найкращий результат: ' + st[lv.id] + ' / ' + n + '.</p>' +
      (bank.length ? '<h3>Фрази рівня</h3><ul class="bank">' + bank.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' : '') +
      '<p>' + (next ? '<button class="tbtn pri" id="nl">Рівень ' + (S.lv + 2) + ' →</button> ' : '<a class="tbtn pri" href="../index.html?t=mixed-1">Пишемо разом →</a> ') + '<button class="tbtn" id="rt">Ще раз</button></p>';
    $('rt').onclick = function () { S.res[S.lv] = S.res[S.lv].map(function () { return null; }); S.i = 0; s.hidden = true; $('tcard').hidden = false; show(); };
    if (next) $('nl').onclick = function () { S.lv++; S.i = 0; s.hidden = true; $('tcard').hidden = false; show(); };
  }
  show();
})();
