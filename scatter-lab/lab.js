/* Scatter Lab: build (перетягни точки) і read (обери точне речення). Дані: data/lab-1.js, графіки: scatter-scenes.js */
(function () {
  'use strict';
  var L = window.LAB, $ = function (i) { return document.getElementById(i); };
  var KEY = 'scatter-lab-done';
  var S = { lv: 0, i: 0, res: L.levels.map(function (l) { return l.tasks.map(function () { return null; }); }), tries: 0, chart: null, task: null, done: false };
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function mk(t) { return esc(t).replace(/\[\[(.+?)\]\]/g, '<mark>$1</mark>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function olsPts(P) {
    var n = P.length, mx = 0, my = 0, i; P.forEach(function (p) { mx += p.x; my += p.y; }); mx /= n; my /= n;
    var sxx = 0, syy = 0, sxy = 0; P.forEach(function (p) { sxx += (p.x - mx) * (p.x - mx); syy += (p.y - my) * (p.y - my); sxy += (p.x - mx) * (p.y - my); });
    var m = sxx ? sxy / sxx : 0; return { r: (sxx && syy) ? sxy / Math.sqrt(sxx * syy) : 0, m: m, b: my - m * mx };
  }
  function evalReq(req, pts, yRange) {
    var all = olsPts(pts);
    if (req.r) return all.r >= req.r[0] && all.r <= req.r[1];
    if (req.outlier) {
      var best = { res: 0, rest: null };
      pts.forEach(function (p, i) { var rest = pts.filter(function (_, j) { return j !== i; }), f = olsPts(rest), res = Math.abs(p.y - (f.m * p.x + f.b)); if (res > best.res) best = { res: res, rest: f }; });
      return best.rest && best.rest.r >= 0.85 && best.res >= 0.3 * yRange && all.r < 0.8;
    }
    return false;
  }
  function levelBar() {
    var h = ''; L.levels.forEach(function (l, i) { var all = S.res[i].every(function (r) { return r !== null; }); h += '<button class="lv' + (i === S.lv ? ' on' : '') + '" data-i="' + i + '">' + esc(l.title) + (all ? '<span class="ck">✓</span>' : '') + '</button>'; });
    $('lvls').innerHTML = h; Array.prototype.forEach.call($('lvls').querySelectorAll('.lv'), function (b) { b.onclick = function () { S.lv = +b.getAttribute('data-i'); S.i = 0; $('sum').hidden = true; $('tcard').hidden = false; show(); }; });
  }
  function progBar() { var t = L.levels[S.lv].tasks, h = ''; t.forEach(function (_, i) { var r = S.res[S.lv][i]; h += '<i class="' + (i === S.i ? 'now' : r === 1 ? 'ok' : r === 0 ? 'no' : '') + '"></i>'; }); $('prog').innerHTML = h; }
  function show() {
    var lv = L.levels[S.lv], t = lv.tasks[S.i]; S.task = t; S.tries = 0; levelBar(); progBar();
    $('intro').textContent = lv.intro; $('chip').textContent = t.type === 'build' ? 'ПЕРЕТЯГНИ ТОЧКИ' : 'ОБЕРИ РЕЧЕННЯ'; $('cnt').textContent = (S.i + 1) + ' / ' + lv.tasks.length;
    $('fb').hidden = true; $('next').hidden = true; $('opts').innerHTML = ''; $('check').hidden = true; $('hintb').hidden = true; $('meter').hidden = true; $('chart').innerHTML = '';
    if (t.type === 'build') {
      $('tq').innerHTML = '<div class="sentence">' + mk(t.say) + '</div>';
      var a = t.ax, def = { title: '', xTitle: a.x, yTitle: a.y, xMin: 0, xMax: a.xMax, xStep: a.xStep, yMin: 0, yMax: a.yMax, yStep: a.yStep, pts: t.init.map(function (p, i) { return { id: 'p' + i, x: p[0], y: p[1] }; }) };
      S.chart = ScatterChart($('chart'), def, { drag: true, h: 400, onChange: upd });
      S.chart.setHL({ fit: true }); upd(); $('meter').hidden = false; $('check').hidden = false; $('hintb').hidden = false;
      $('mapnote').textContent = 'Тягни точки мишею або пальцем. Лінія тренду й підпис «сила кореляції» оновлюються самі.';
    } else {
      $('tq').innerHTML = '<div class="qh">' + mk(t.q) + '</div>';
      S.chart = ScatterChart($('chart'), JSON.parse(JSON.stringify(window.SCSC[t.scene])), { h: 400 }); S.chart.setHL(t.hl || {});
      $('mapnote').textContent = window.SCSC[t.scene].title;
      var letters = 'ABCD'; shuffle(t.opts).forEach(function (o, k) {
        var b = document.createElement('button'); b.className = 'opt'; b.innerHTML = '<span class="l">' + letters[k] + '</span><span>' + esc(o.t) + '</span>';
        b.onclick = function () { pick(b, o); }; $('opts').appendChild(b);
      });
    }
  }
  function upd() { var s = S.chart.stats(); $('meter').innerHTML = 'Зараз: <i>' + s.label + '</i>'; }
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
    finish(o.ok);
  }
  $('check').onclick = function () {
    var t = S.task, pts = S.chart.getPts(), ok = evalReq(t.req, pts, t.ax.yMax); S.tries++;
    if (ok) { fb('ok', '<b>Графік відповідає реченню.</b>' + esc(t.uk)); $('check').hidden = true; $('hintb').hidden = true; finish(true); var ul = '<ul class="bank">' + t.bank.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>'; $('fb').innerHTML += ul; }
    else { fb('no', '<b>Ще ні.</b>Зараз на графіку: <mark>' + S.chart.stats().label + '</mark>. Порівняй із реченням.' + (S.tries >= 2 ? ' Натисни «Підказка».' : '')); }
  };
  $('hintb').onclick = function () { fb('hint', '<b>Підказка</b>' + esc(S.task.hint)); };
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
      '<p>' + (next ? '<button class="tbtn pri" id="nl">Рівень ' + (S.lv + 2) + ' →</button> ' : '<a class="tbtn pri" href="../index.html?t=scatter-1">Пишемо разом →</a> ') + '<button class="tbtn" id="rt">Ще раз</button></p>';
    $('rt').onclick = function () { S.res[S.lv] = S.res[S.lv].map(function () { return null; }); S.i = 0; s.hidden = true; $('tcard').hidden = false; show(); };
    if (next) $('nl').onclick = function () { S.lv++; S.i = 0; s.hidden = true; $('tcard').hidden = false; show(); };
  }
  show();
})();
