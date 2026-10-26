(function () {
  'use strict';
  var started = false, D = window.DICT, S = D.sentences, i = 0, state = 'type', slow = false, results = [], hintN = 0, curAudio = null;
  function $(id) { return document.getElementById(id); }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function clean(t) { return t.replace(/\[\[|\]\]/g, ''); }
  function sec(k) { return D.sections[k]; }
  function tint(el, k) { el.style.setProperty('--c', sec(k).color); el.style.setProperty('--b', sec(k).bg); }

  $('prompt').textContent = D.prompt; $('promptTail').textContent = D.promptTail; $('chartTitle').textContent = D.chart.title;
  var chart = D.chart.type === 'pie' ? window.PieChart($('chart'), D.chart, { h: 360 }) : D.chart.type === 'bar' ? window.BarChart($('chart'), D.chart, { h: 360 }) : D.chart.type === 'table' ? window.TableChart($('chart'), D.chart, { h: 360 }) : window.LineChart($('chart'), D.chart, { h: 380 });
  if (D.chart.type === 'pie' || D.chart.type === 'bar' || D.chart.type === 'table') $('chart').classList.add('piehost');
  if (D.links) { if (D.links.theory) $('lnkTheory').href = D.links.theory; if (D.links.studio) $('lnkStudio').href = D.links.studio; }
  if (D.note) $('apxnote').innerHTML = D.note;
  if (D.title) $('ttl').textContent = D.title.replace(' · ', ': ');
  var APX = D.apxLabel || 'мова наближення';
  var dots = $('dots'); S.forEach(function (s, k) { var d = document.createElement('span'); d.className = 'dot'; d.textContent = k + 1; d.style.setProperty('--c', sec(s.sec).color); dots.appendChild(d); });

  /* ---------- звук ---------- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function stopAll() { if (curAudio) { curAudio.pause(); curAudio = null; } if (window.speechSynthesis) speechSynthesis.cancel(); $('play').classList.remove('busy'); }
  function speak(text) {
    if (!window.speechSynthesis) { $('src').textContent = 'Звук недоступний у цьому браузері'; return; }
    var u = new SpeechSynthesisUtterance(text); u.lang = 'en-GB'; u.rate = slow ? 0.62 : 0.88;
    var vs = speechSynthesis.getVoices().filter(function (v) { return /en[-_]GB/i.test(v.lang); }); if (vs.length) u.voice = vs[0];
    u.onend = function () { $('play').classList.remove('busy'); };
    $('src').textContent = 'озвучення синтезатором'; speechSynthesis.speak(u);
  }
  function play() {
    stopAll(); $('play').classList.add('busy'); chart.setHL(S[i].hl);
    var file = S[i].audio || ((D.audioDir || 'audio/') + pad(i + 1) + '.mp3'), a = new Audio(file); curAudio = a; a.playbackRate = slow ? 0.75 : 1; a.preservesPitch = true;
    var fell = false;
    function fb() { if (fell) return; fell = true; curAudio = null; speak(clean(S[i].text)); }
    a.addEventListener('error', fb); a.addEventListener('ended', function () { $('play').classList.remove('busy'); });
    var pr = a.play(); if (pr && pr.catch) pr.catch(fb);
    if (!fell) $('src').textContent = '';
    a.addEventListener('playing', function () { $('src').textContent = 'голос викладача'; });
  }

  /* ---------- порівняння ---------- */
  function norm(w) { return w.toLowerCase().replace(/(\d),(?=\d)/g, '$1').replace(/^[^a-z0-9]+|[^a-z0-9]+$/g, '').replace(/’/g, "'"); }
  function toks(t) { return t.split(/\s+/).filter(Boolean); }
  function lcs(a, b) {
    var m = a.length, n = b.length, d = [], x, y; for (x = 0; x <= m; x++) { d.push(new Array(n + 1).fill(0)); }
    for (x = m - 1; x >= 0; x--) for (y = n - 1; y >= 0; y--) d[x][y] = a[x] === b[y] ? d[x + 1][y + 1] + 1 : Math.max(d[x + 1][y], d[x][y + 1]);
    var ma = new Array(m).fill(false), mb = new Array(n).fill(false); x = 0; y = 0;
    while (x < m && y < n) { if (a[x] === b[y]) { ma[x] = true; mb[y] = true; x++; y++; } else if (d[x + 1][y] >= d[x][y + 1]) x++; else y++; }
    return { ma: ma, mb: mb };
  }
  function check() {
    var s = S[i], val = $('inp').value.trim(); if (!val) { $('inp').focus(); return; }
    var marked = s.text, parts = [], re = /\[\[(.+?)\]\]/g, last = 0, m, plain = '', flags = [];
    // розкладаємо модель на слова з позначкою наближення
    var modelWords = [];
    while ((m = re.exec(marked))) { push(marked.slice(last, m.index), false); push(m[1], true); last = re.lastIndex; }
    push(marked.slice(last), false);
    function push(txt, ap) { toks(txt).forEach(function (w) { modelWords.push({ w: w, ap: ap }); }); }
    var mw = modelWords.map(function (x) { return norm(x.w); }), sw = toks(val), sn = sw.map(norm);
    var r = lcs(mw, sn), ok = r.ma.filter(Boolean).length, pct = Math.round(100 * ok / mw.length);
    var html = modelWords.map(function (x, k) { var c = r.ma[k] ? 'w-ok' : 'w-miss'; return '<span class="' + c + (x.ap ? ' w-ap' : '') + '">' + esc(x.w) + '</span>'; }).join(' ');
    var extra = sw.map(function (w, k) { return r.mb[k] ? '' : '<span class="w-extra">' + esc(w) + '</span>'; }).filter(Boolean).join(' ');
    var cls = pct === 100 ? 'good' : pct >= 75 ? 'mid' : 'low';
    var msg = pct === 100 ? 'Без помилок' : pct >= 75 ? 'Майже' : 'Послухай ще раз';
    $('res').innerHTML = '<span class="score ' + cls + '">' + msg + ' · ' + ok + ' з ' + mw.length + ' слів</span><div class="lbl">МОДЕЛЬ (золотим: ' + APX + ')</div><div class="line">' + html + '</div>' + (S[i].uk ? '<div class="lbl">ПОЯСНЕННЯ</div><div class="line uk">' + esc(S[i].uk) + '</div>' : '') + (extra ? '<div class="lbl">ЗАЙВЕ / НЕ ТАК У ТВОЇЙ ВІДПОВІДІ</div><div class="line">' + extra + '</div>' : '');
    $('res').hidden = false; results[i] = { ok: ok, total: mw.length, ap: modelWords.filter(function (x) { return x.ap; }).length, apOk: modelWords.filter(function (x, k) { return x.ap && r.ma[k]; }).length };
    state = 'next'; $('check').hidden = true; $('next').hidden = false; $('next').textContent = i === S.length - 1 ? 'Підсумок · Enter →' : 'Далі · Enter →'; $('inp').disabled = true;
    // додаємо в абзац
    var p = document.createElement('div'); p.className = 'pp'; tint(p, s.sec);
    p.innerHTML = '<span class="tg">' + sec(s.sec).label.toUpperCase() + '</span>' + esc(marked).replace(/\[\[(.+?)\]\]/g, '<span class="ap">$1</span>'); $('paper').appendChild(p);
    dots.children[i].classList.add('done');
  }
  function show() {
    var s = S[i]; tint($('dcard'), s.sec); tint($('secChip'), s.sec);
    $('secChip').textContent = sec(s.sec).label; $('cnt').textContent = 'Речення ' + (i + 1) + ' з ' + S.length;
    $('inp').value = ''; $('inp').disabled = false; $('res').hidden = true; $('hintline').hidden = true; hintN = 0;
    $('check').hidden = false; $('next').hidden = true; state = 'type'; chart.setHL(s.hl);
    Array.prototype.forEach.call(dots.children, function (d, k) { d.classList.toggle('cur', k === i); });
    $('inp').focus(); stopAll(); if (started) setTimeout(play, 350);
  }
  function summary() {
    stopAll(); $('dcard').hidden = true; var tot = 0, ok = 0, ap = 0, apOk = 0, worst = [];
    results.forEach(function (r, k) { tot += r.total; ok += r.ok; ap += r.ap; apOk += r.apOk; worst.push({ k: k, miss: r.total - r.ok }); });
    var pct = Math.round(100 * ok / tot); worst.sort(function (a, b) { return b.miss - a.miss; });
    var bad = worst.filter(function (w) { return w.miss > 0; }).slice(0, 3).map(function (w) { return w.k + 1; });
    var el = $('sum'); el.hidden = false;
    el.innerHTML = '<h3>Диктант завершено</h3><div class="big">' + pct + '%</div><p>Слів правильно: ' + ok + ' з ' + tot + '. ' + APX.charAt(0).toUpperCase() + APX.slice(1) + ': ' + apOk + ' з ' + ap + '.</p>' +
      (bad.length ? '<p>Найбільше помилок у реченнях: ' + bad.join(', ') + '. Перечитай їх у відповіді нижче й спробуй ще раз.</p>' : '<p>Усі речення без помилок. Це хороший знак: ти чуєш і відтворюєш Band 7 мову.</p>') +
      '<p><button class="tbtn" id="again">Пройти ще раз</button> <button class="tbtn" id="copy">Копіювати відповідь</button></p>';
    $('again').onclick = function () { location.reload(); };
    $('copy').onclick = function () { var t = S.map(function (s) { return clean(s.text); }).join(' '); if (navigator.clipboard) navigator.clipboard.writeText(t); $('copy').textContent = 'Скопійовано'; };
    chart.setHL({}); window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function nextS() { started = true; if (i === S.length - 1) { summary(); return; } i++; show(); }

  $('play').onclick = function () { started = true; play(); };
  $('slow').onclick = function () { slow = !slow; $('slow').classList.toggle('on', slow); play(); };
  $('hint').onclick = function () { hintN = Math.min(hintN + 2, toks(clean(S[i].text)).length); var w = toks(clean(S[i].text)); $('hintline').hidden = false; $('hintline').textContent = w.slice(0, hintN).join(' ') + ' …'; $('inp').focus(); };
  $('check').onclick = check; $('next').onclick = nextS;
  $('inp').addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); check(); } });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { $('help').hidden = true; return; }
    if (e.key === 'Enter' && !e.defaultPrevented && state === 'next' && e.target.tagName !== 'BUTTON') { e.preventDefault(); nextS(); return; }
    if (e.altKey) { var k = e.key.toLowerCase(); if (k === 'r') { e.preventDefault(); play(); } else if (k === 's') { e.preventDefault(); $('slow').click(); } else if (k === 'h') { e.preventDefault(); $('hint').click(); } }
  });
  $('helpBtn').onclick = function () { $('help').hidden = false; }; $('helpClose').onclick = function () { $('help').hidden = true; };
  $('help').addEventListener('click', function (e) { if (e.target === this) this.hidden = true; });
  if (window.speechSynthesis) speechSynthesis.getVoices();
  window.__dict = { check: check, nextS: nextS, state: function () { return { i: i, state: state, results: results }; } };
  show();
})();
