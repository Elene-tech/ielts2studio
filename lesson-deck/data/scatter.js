/* Module 7 · Scatter Graphs. НОВИЙ модуль (матеріалів Олени не було): створено з нуля в єдиному стилі курсу.
   Рідкісний, але реальний формат IELTS Academic Task 1, який майже ніхто не пояснює.
   Принципи:
   · лінія тренду на всіх графіках рахується ПО ДАНИХ (OLS), тож тексти моделей збігаються з точками; усі цифри в моделях звірені з даними;
   · без дат на графіку = present simple; з датами = past simple (окремий слайд);
   · пишемо ЗВ'ЯЗОК, не причину (no «causes», no «because»); викид описуємо, але не пояснюємо;
   · розмітка: {{...}} = дані й позиції (помаранчевий), @@...@@ = кореляція й тренд (рожевий), [[...]] = виняток/викид (золотий).
   Мова слайдів: пояснення українською, приклади британською англійською. */
(function () {
  function wc(t) { return String(t).replace(/%%|@@|\{\{|\}\}|\[\[|\]\]/g, '').trim().split(/\s+/).length; }
  var SC = window.SCSC, TEMP = SC.TEMP, ECON = SC.ECON, HEAT = SC.HEAT, RAIN = SC.RAIN;

  /* ---------- модель A: TEMP (одна група + викид) ---------- */
  var A1 = `The scatter graph {{illustrates}} the relationship between the daily maximum temperature and the number of people who visited a seaside resort on 20 days.`;
  var A2a = `Overall, there is a @@strong positive correlation@@ between the two variables: the warmer the day, the more people @@tend to visit@@ the resort.`;
  var A2b = `There is, however, [[one clear outlier]], a cold day with an unusually high number of visitors.`;
  var A3a = `On days with a maximum temperature of {{9–13°C}}, the resort receives only {{about 3,000 to 9,000}} visitors.`;
  var A3b = `As the temperature rises, the numbers @@generally increase@@, reaching {{roughly 24,000 to 31,000}} at {{25–30°C}}.`;
  var A4a = `The exception is a day at {{11°C}}, which attracts {{around 41,000}} visitors, [[the highest figure on the graph]] and far above the other days at similar temperatures.`;
  var A4b = `Excluding this point, no day exceeds {{roughly 31,000 visitors}}, a figure reached at {{27°C}}.`;
  var AW = [A1, A2a, A2b, A3a, A3b, A4a, A4b].reduce(function (n, t) { return n + wc(t); }, 0);

  /* ---------- модель B: ECON (дві групи) ---------- */
  var B1 = `The scatter graph {{compares}} national income with the share of household spending that goes on food in nine European and nine Asian countries.`;
  var B2a = `Overall, @@the higher a country's income, the lower the share of household spending on food@@, and this negative correlation is very strong in both groups.`;
  var B2b = `At comparable income levels, however, Asian households devote [[a larger share]] of their spending to food than European ones.`;
  var B3 = `The European countries are {{clustered on the right-hand side}} of the graph, with GDP per person of {{roughly US$26,000 to US$53,000}}. Within this range, the food share @@falls steadily@@ from {{about 19% to 9%}}.`;
  var B4 = `The Asian countries cover {{a much wider range}} of incomes, from {{around US$3,000 to US$37,000}}, and their food share @@drops@@ from {{roughly 46% to 19%}}. Between {{US$24,000 and US$30,000}}, for example, Asian households spend {{about 22% to 26%}} of their budget on food, [[compared with 17% to 19% in Europe]].`;
  var BW = [B1, B2a, B2b, B3, B4].reduce(function (n, t) { return n + wc(t); }, 0);

  /* ---------- зразок C: RAIN (помірна кореляція, без викидів) ---------- */
  var C1 = `The scatter graph shows how the average number of cyclists per hour on a city bike route varies with the amount of rainfall in a month.`;
  var C2 = `Overall, there is a @@moderate negative correlation@@ between the two variables: cyclist numbers @@tend to fall@@ as rainfall increases. However, the points are [[quite widely spread]], and the trend is clearer at the extremes than in the middle.`;
  var C3 = `In months with {{less than 40 mm}} of rain, the route has {{roughly 40 to 92}} cyclists per hour, with the highest figure, {{92}}, at {{20 mm}}.`;
  var C4 = `At the other extreme, in months with {{100 mm of rain or more}}, the figure @@falls@@ to between {{about 10 and 37}}, and the lowest value, {{10 cyclists}}, occurs at {{112 mm}}. In between, the numbers [[fluctuate considerably]], ranging from {{about 33 to 82}} cyclists at {{40–80 mm}}.`;
  var CW = [C1, C2, C3, C4].reduce(function (n, t) { return n + wc(t); }, 0);

  window.DECK = {
    meta: {
      docTitle: 'Module 7 · Scatter Graphs · презентація',
      brandSub: 'Write It Right · Module 7: Scatter Graphs',
      credit: 'Elena Kurilets  ·  @english_rrs  ·  @ielts_ukrainians  ·  englishkurilets.com',
      where: 'IELTS Writing Task 1  ·  Module 7: Scatter Graphs',
      next: { label: 'Пишемо разом →', url: '../index.html?t=scatter-1' },
      dict: '../dictation/index.html?t=scatter-1'
    },
    chart: TEMP,
    slides: [
      { type: 'title', module: 'MODULE 7', kicker: 'IELTS Writing Task 1', title: 'Scatter Graphs',
        sub: 'The rarest Task 1 format — and the one almost nobody explains: reading dots, describing correlation, reporting outliers',
        items: ['01  What a scatter graph really shows', '02  The 60-second reading', '03  Direction and strength', '04  Numbers, outliers and groups', '05  Band 8 models — annotated', '06  Practice task + self-check'] },

      { type: 'stack', cls: 'tight', section: 'Roadmap', title: 'How This Module Works', sub: 'SIX STOPS, ABOUT 75 MINUTES — AND ONE LAB WHERE YOU MOVE THE DOTS YOURSELF',
        rows: [
          { k: 'blue',  tag: '1', head: 'Diagnose  ·  5 MIN', text: `Read a real Band 5 scatter answer: it explains the weather instead of describing the graph.` },
          { k: 'green', tag: '2', head: 'Read the graph  ·  10 MIN', text: `Two variables, one dot per case, a trend. Five questions in sixty seconds.` },
          { k: 'gold',  tag: '3', head: 'Correlation language  ·  20 MIN', text: `Positive, negative, none; strong, moderate, weak. The heart of the module, plus the Scatter Lab: drag dots to match a sentence.` },
          { k: 'red',   tag: '4', head: 'Numbers, outliers, groups  ·  10 MIN', text: `How to quote ranges without listing dots, how to report the exception, how to compare two groups.` },
          { k: 'blue',  tag: '5', head: 'Study three models  ·  15 MIN', text: `One graph with an outlier, one with two groups, one moderate correlation, every phrase traced to the data.` },
          { k: 'green', tag: '6', head: 'Write & check  ·  15 MIN', text: `One graph, twenty minutes, then an 8-question self-check before the sample.` }],
        footnote: 'Two rules: @@what@@ = direction + strength.  {{how much}} = a range from the graph, never a list of dots.' },

      { type: 'example', section: 'Diagnose', title: 'What a Band 5 Answer Looks Like', sub: 'CAN YOU SPOT THE FOUR PROBLEMS BEFORE YOU READ THE FLAGS?',
        lines: [`The graph shows temperature and visitors. When it is hot, more people come to the beach because they like the sun.`, `There are many dots. One dot is very high. The line goes up.`],
        label: 'A TYPICAL BAND 5 ANSWER — THE FOUR PROBLEMS',
        reasons: [
          ['✗  A reason instead of a relationship  ·  TASK ACHIEVEMENT', `«because they like the sun»: the graph cannot show why people come. Report the link between two variables, never the cause.`],
          ['✗  No data  ·  TASK ACHIEVEMENT', `«many dots», «very high»: which temperature, how many visitors? A scatter answer needs ranges from the axes.`],
          ['✗  The outlier is mentioned but not described  ·  COHERENCE', `«One dot is very high» does not tell us where it is or what it is compared with.`],
          ['✗  No overview, no strength  ·  LEXICAL RESOURCE', `«The line goes up»: positive correlation? Strong? A real overview names direction AND strength: «a strong positive correlation».`]],
        footnote: 'Головний інсайт: на scatter graph найпоширеніша помилка — пояснювати погоду, а не описувати зв’язок. Ми пишемо тільки те, що видно на графіку.' },

      { type: 'dual', cls: 'sm', section: 'Diagnose', title: 'How Examiners Score Scatter Answers', sub: 'FOUR CRITERIA, 25% EACH — CORRELATION LANGUAGE CARRIES THREE OF THEM',
        cols: [
          { k: 'gold', head: 'Task Achievement  ·  25%', items: [`Band 7+ requires:`, `· an overview: direction AND strength of the relationship`, `· ranges taken from the axes, not a list of dots`, `· the outlier or the groups, if there are any`, `· no reasons and no predictions`] },
          { k: 'blue', head: 'Coherence & Cohesion  ·  25%', items: [`Band 7+ requires:`, `· exactly 4 paragraphs`, `· body 1 = the main trend (low end → high end)`, `· body 2 = the exception, or the second group`, `· comparison words: whereas, by contrast, however`] },
          { k: 'red', head: 'Lexical Resource  ·  25%', items: [`Band 7+ requires:`, `· correlation vocabulary: strong positive, moderate negative, no clear correlation`, `· precise quantity: roughly, just under, from about … to …`, `«the dots go up» = Band 5`] },
          { k: 'green', head: 'Grammar Range & Accuracy  ·  25%', items: [`Band 7+ requires:`, `· the comparative pair: %%the warmer the day, the more people visit%%`, `· present simple for a graph without dates`, `· tend to + infinitive: visitor numbers %%tend to rise%%`] }],
        footnote: 'One skill, three criteria: the same correlation phrases raise Task Achievement (the trend is correct), Lexical Resource (precise words) and Grammar (the comparative pair).' },

      { type: 'task', section: 'The Task', title: 'The Task', sub: 'TEMPERATURE AND VISITORS TO A SEASIDE RESORT  ·  20 min  ·  150+ words  ·  a scatter graph',
        prompt: `The scatter graph below shows the relationship between the daily maximum temperature and the number of visitors to a seaside resort on 20 days. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'READ THE GRAPH LIKE AN EXAMINER:  ① Two variables: x = temperature, y = visitors  ·  ② One dot = one day  ·  ③ The dots rise to the right  ·  ④ One dot is far from the rest  ·  ⑤ No dates, so present simple.' },

      { type: 'questions', cls: 'five', section: 'The Task', title: 'How to Read a Scatter Graph in 60 Seconds', sub: 'FIVE QUESTIONS TO ANSWER BEFORE YOU WRITE A SINGLE WORD',
        items: [
          { n: '01', q: 'What are the two variables?', uk: `x (horizontal) = temperature in °C. y (vertical) = visitors per day. Name both in the introduction.`, hl: { legend: true } },
          { n: '02', q: 'What does one dot mean?', uk: `One day. 20 dots = 20 days. Never describe dots one by one: describe the pattern they make.`, hl: { labels: false } },
          { n: '03', q: 'Which direction is the trend?', uk: `The dots rise from the bottom left to the top right: positive correlation.`, hl: { fit: true } },
          { n: '04', q: 'How strong is it?', uk: `The dots lie close to the line: strong. Wide spread would mean moderate or weak.`, hl: { fit: true, r: true } },
          { n: '05', q: 'Is there an outlier or a group?', uk: `One day at 11°C has about 41,000 visitors: a clear outlier. Always find it before you write.`, hl: { out: true } }] },

      { type: 'stack', cls: 'tight', section: 'Method', title: 'The 4-Paragraph Framework', sub: 'EVERY SCATTER ANSWER — ALWAYS EXACTLY THIS SHAPE',
        rows: [
          { k: 'blue',  tag: '§1', head: 'INTRODUCTION  ·  1 sentence  ·  ~25 words', text: `Paraphrase the prompt: name BOTH variables and what a dot is. «The scatter graph illustrates the relationship between … and … on 20 days.»` },
          { k: 'green', tag: '§2', head: 'OVERVIEW  ·  2 sentences  ·  ~45 words  ·  most important', text: `Direction + strength («a strong positive correlation»), the comparative pair, and the exception or the groups. No numbers yet.` },
          { k: 'gold',  tag: '§3', head: 'BODY 1  ·  2 sentences  ·  ~55 words', text: `The main trend: the low end of the x-axis, then the high end, each with a range from the axes.` },
          { k: 'red',   tag: '§4', head: 'BODY 2  ·  2 sentences  ·  ~45 words', text: `The outlier (position + value + comparison), or the second group compared with the first.` }],
        footnote: 'Never list the dots. 20 dots, 4 sentences: ranges, not points.' },

      /* ---------- ЧИТАННЯ ГРАФІКА ---------- */
      { type: 'mapview', section: 'Reading', title: 'Anatomy of a Scatter Graph', sub: 'FOUR PARTS: LEARN THEIR NAMES, BECAUSE THE EXAM REWARDS THE RIGHT WORD',
        notes: [
          { k: 'blue', head: 'the {{two axes}}', text: `x-axis (horizontal): the variable we compare by; y-axis (vertical): the variable that responds.`, hl: { legend: true } },
          { k: 'green', head: 'a {{dot}} / data point', text: `each dot is ONE case: here, one day. Never write «the graph has many dots».`, hl: { p: ['p1', 'p10', 'p19'], labels: false } },
          { k: 'gold', head: 'the {{trend}} / line of best fit', text: `the direction in which the dots lie. IELTS graphs may or may not draw the line: you can always imagine it.`, hl: { fit: true } },
          { k: 'red', head: 'an {{outlier}}', text: `a dot far from the pattern. Report it in its own sentence.`, hl: { out: true } }] },

      { type: 'mapview', section: 'Reading', title: 'Direction 1 — Positive Correlation', sub: 'BOTH VARIABLES RISE TOGETHER: THE DOTS CLIMB TO THE RIGHT',
        notes: [
          { k: 'green', head: '@@positive correlation@@', text: `as the temperature rises, visitor numbers tend to rise as well.`, hl: { fit: true, r: true } },
          { k: 'blue', head: 'the {{warmer}} the day, the {{more}} visitors', text: `the comparative pair: the + comparative, the + comparative. Both halves change in the same direction.`, hl: { zone: { x: [24, 31], y: [20000, 35000], t: 'warm days: many visitors' } } },
          { k: 'gold', head: 'positively correlated with', text: `«visitor numbers are positively correlated with temperature»: a Band 7+ alternative.`, hl: { fit: true } },
          { k: 'red', head: '@@tend to@@ rise', text: `tend to = a general pattern with exceptions; a safe verb for correlation.`, hl: { fit: true, out: true } }] },

      { type: 'mapview', section: 'Reading', title: 'Direction 2 — Negative Correlation', sub: 'ONE VARIABLE RISES AS THE OTHER FALLS: THE DOTS SLIDE DOWN TO THE RIGHT',
        chart: HEAT,
        notes: [
          { k: 'red', head: '@@negative correlation@@', text: `as the winter temperature rises, monthly heating bills tend to fall.`, hl: { fit: true, r: true } },
          { k: 'blue', head: 'the {{colder}} the city, the {{higher}} the bill', text: `the same pair; the adjectives show the opposite direction. Colder → higher is NEGATIVE.`, hl: { zone: { x: [-3, 0], y: [120, 150], t: 'cold cities: high bills' } } },
          { k: 'gold', head: 'inversely related / decrease as … increase', text: `«heating bills decrease as temperatures increase»: another Band 7+ frame.`, hl: { fit: true } },
          { k: 'green', head: 'Trap: negative ≠ bad', text: `negative only means the variables move in opposite directions. Nobody is complaining.`, hl: { fit: true, r: true } }] },

      { type: 'vocab', section: 'Language', title: 'Describing Correlation', sub: 'DIRECTION + STRENGTH + A VERB THAT FITS THE TREND', grid: true,
        rows: [
          { k: 'green', term: 'a strong positive correlation', text: `«there is {{a strong positive correlation}} between …»`, note: 'dots close to a rising line' },
          { k: 'red', term: 'a strong negative correlation', text: `«there is {{a strong negative correlation}} between …»`, note: 'dots close to a falling line' },
          { k: 'gold', term: 'a moderate / weak correlation', text: `«a {{moderate}} correlation, although the points are widely spread»`, note: 'a visible trend, but with spread' },
          { k: 'blue', term: 'no clear correlation', text: `«there is {{no clear correlation}} between … and …»`, note: 'no direction at all: a cloud' },
          { k: 'green', term: 'tend to + verb', text: `«visitor numbers {{tend to rise}} as the temperature increases»`, note: 'a general pattern, with exceptions' },
          { k: 'red', term: 'the + comparative, the + comparative', text: `«{{the warmer}} the day, {{the more}} people visit»`, note: 'one half drives the other' }],
        tip: ['Trap:', ` «strong» and «weak» describe the SPREAD of the dots, not how much the numbers change. A steep line with scattered dots is only a moderate correlation.`] },

      { type: 'vocab', section: 'Language', title: 'Quoting Numbers from the Axes', sub: 'RANGES, NOT LISTS: SIX WAYS TO BE PRECISE WITHOUT BEING EXACT', grid: true,
        rows: [
          { k: 'blue', term: 'roughly / around / about', text: `«{{around 41,000}} visitors»`, note: 'dots rarely sit on a gridline' },
          { k: 'green', term: 'just under / just over', text: `«{{just under 9,000}} visitors»`, note: 'when the dot is close to a round number' },
          { k: 'gold', term: 'from about … to …', text: `«{{from about 3,000 to 9,000}} visitors»`, note: 'a range for a group of dots: the heart of body 1' },
          { k: 'red', term: 'between … and …', text: `«{{between 10 and 37}} cyclists per hour»`, note: 'not «from 10 till 37», not «10–37 cyclists» in the sentence start' },
          { k: 'blue', term: 'at 25–30°C / above 100 mm', text: `«{{at 25–30°C}}», «{{above 100 mm}}»`, note: 'name the position on the x-axis first' },
          { k: 'green', term: 'the highest / lowest figure', text: `«the highest figure on the graph»`, note: 'the extreme, reported with its position' }],
        tip: ['Trap:', ` don't list dots: «at 9°C 3,200, at 10°C 7,500, at 12°C 7,500…». One range replaces five dots.`] },

      { type: 'dual', cls: 'sm', section: 'Language', title: 'Report the Relationship, Not the Reason', sub: 'A SCATTER GRAPH SHOWS THAT TWO THINGS MOVE TOGETHER — NOT WHY',
        cols: [
          { k: 'red', head: '✗ CAUSE (Band 5)', items: [`✗ Warm weather causes more people to visit.`, `✗ People come because they like the sun.`, `✗ Hot days lead to higher spending.`, `✗ Cold cities pay more since heating is needed.`] },
          { k: 'green', head: '✓ RELATIONSHIP (Band 7+)', items: [`✓ Visitor numbers tend to rise as the temperature increases.`, `✓ Higher temperatures are associated with more visitors.`, `✓ The warmer the day, the more people visit.`, `✓ Bills are higher in colder cities.`] }],
        note: `You are a reporter, not a scientist. The prompt says «summarise the information»: nothing about reasons. {{Cause}} sounds clever but is Task Achievement lost.` },

      { type: 'mapview', section: 'Language', title: 'The Outlier — Report It, Don\'t Explain It', sub: 'ONE DOT FAR FROM THE PATTERN DESERVES ITS OWN SENTENCE',
        notes: [
          { k: 'red', head: 'one [[clear outlier]]', text: `in the overview: «there is one clear outlier, a cold day with an unusually high number of visitors».`, hl: { out: true } },
          { k: 'gold', head: '{{the exception}} is a day at 11°C', text: `in body 2: where it is (11°C) and how big it is (around 41,000).`, hl: { out: true, labels: false } },
          { k: 'blue', head: '{{far above}} the other days', text: `compare the outlier with the days around it: «far above the other days at similar temperatures».`, hl: { out: true, zone: { x: [9, 13], y: [0, 10000], t: 'other days at 9–13°C' } } },
          { k: 'green', head: '{{Excluding}} this point', text: `then continue the trend: «excluding this point, no day exceeds roughly 31,000 visitors».`, hl: { fit: true } }] },

      { type: 'mapview', section: 'Language', title: 'Two Groups on One Graph', sub: 'DIFFERENT SHAPES AND COLOURS = DIFFERENT GROUPS: COMPARE THEM AT THE SAME LEVEL',
        chart: ECON,
        notes: [
          { k: 'blue', head: 'in {{both groups}}', text: `the overview names what the groups share: «in both groups, the higher the income, the lower the share spent on food».`, hl: { fit: 'eu' } },
          { k: 'green', head: '{{clustered}} on the right-hand side', text: `a group of dots close together: «the European countries are clustered on the right-hand side».`, hl: { g: ['eu'], fit: 'eu' } },
          { k: 'gold', head: 'a {{much wider range}}', text: `a group spread over a longer stretch of an axis: «the Asian countries cover a much wider range of incomes».`, hl: { g: ['as'], fit: 'as' } },
          { k: 'red', head: 'at {{comparable}} income levels', text: `the comparison, at the same x-value: «Asian households spend 22–26%, compared with 17–19% in Europe».`, hl: { zone: { x: [24, 31], y: [15, 28], t: 'comparable income' } } }] },

      { type: 'quad', section: 'Language', title: 'Which Tense for a Scatter Graph?', sub: 'THE RULE DEPENDS ON THE DATES — AND MOST SCATTER GRAPHS HAVE NONE',
        boxes: [
          { k: 'green', head: 'NO DATE ON THE GRAPH', items: [`present simple: the graph shows a pattern, not an event.`, `There %%is%% a strong positive correlation…`, `The resort %%receives%% about 3,000 visitors…`, `Most common in IELTS`] },
          { k: 'blue', head: 'DATED DATA (e.g. «in 2023»)', items: [`past simple: the data describes what happened.`, `Visitor numbers %%rose%% as it %%got%% warmer.`, `The study %%covered%% 20 days in 2023.`, `Use ONE tense for the whole answer`] },
          { k: 'gold', head: 'CAUTIOUS VERBS', items: [`tend to · appear to · seem to`, `Cyclist numbers @@tend to@@ fall as rainfall increases.`, `Not «always», not «will»: a trend has exceptions`, `Never: «this proves that…»`] },
          { k: 'red', head: 'DO NOT PREDICT', items: [`✗ If it gets hotter, there will be more visitors.`, `✓ Higher temperatures are associated with more visitors.`, `The graph covers the past and present only`, `No «in the future», no «will»`] }] },

      { type: 'end2', section: 'Practice', title: 'Scatter Lab — Move the Dots', sub: 'AN INTERACTIVE: DRAG DOTS UNTIL THE GRAPH MATCHES THE SENTENCE, THEN CHOOSE THE ACCURATE SENTENCE FOR A GRAPH',
        rows: [
          ['Level 1 · build the correlation', 'strong positive, strong negative, no clear, weak, one outlier: drag the dots until the line and the label match the sentence.'],
          ['Level 2 · choose the sentence', 'Five graphs, four sentences each. Traps: reversed direction, a cause instead of a relationship, wrong scale, swapped ranges.'],
          ['What to watch', 'The label «Зараз: …» shows the correlation you have just built, in the exact words you will use in the exam.'],
          ['How it works', 'Drag with the mouse or a finger. The dashed line is the trend, recalculated from your dots after every move.']],
        nextLabel: 'OPEN IN A NEW TAB', next: [['Scatter Lab', 'Живий інтерактив для уроку: 12 завдань, два рівні'], ['Для студентів', 'Те саме посилання в Kwiga: «Лабораторія» у меню модуля']],
        links: [{ label: 'Відкрити Scatter Lab →', url: '../scatter-lab/index.html?t=lab-1', blank: true }] },

      /* ---------- МОДЕЛЬ A ---------- */
      { type: 'model', section: 'Model', title: 'Model Anatomy — §1 Introduction', k: 'blue', label: '§1  INTRODUCTION', chart: TEMP,
        segs: [{ t: A1, hl: { legend: true },
          chips: [['the relationship between … and …', 'The frame for every scatter answer. Not «the graph shows temperature and visitors».'], ['on 20 days', 'What a dot is: one day. Without it the reader doesn\'t know what the 20 dots mean.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §2 Overview', k: 'green', label: '§2  OVERVIEW', chart: TEMP,
        segs: [
          { t: A2a, hl: { fit: true, r: true },
            chips: [['a strong positive correlation', 'Direction + strength in one noun phrase. This is what examiners look for in the first sentence of the overview.'], ['the warmer the day, the more people tend to visit', 'The comparative pair + a cautious verb: the pattern in plain English, no cause.']] },
          { t: A2b, hl: { out: true },
            chips: [['one clear outlier, a cold day', 'The exception is announced in the overview, then described in body 2. «a cold day» = a position without a number.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §3 Body 1: the Main Trend', k: 'gold', label: '§3  BODY 1 — THE MAIN TREND', chart: TEMP,
        segs: [
          { t: A3a, hl: { zone: { x: [9, 13], y: [0, 10000], t: '9–13°C' } },
            chips: [['On days with a maximum temperature of 9–13°C', 'The low end of the x-axis first: the position, then the value.'], ['about 3,000 to 9,000', 'A range replaces four dots. The highest dot in this zone excluding the outlier is 8,600: «about 9,000».']] },
          { t: A3b, hl: { zone: { x: [25, 30], y: [20000, 35000], t: '25–30°C' } },
            chips: [['As the temperature rises, … generally increase', 'Links the low end to the high end. generally = the trend has small dips, so not «steadily».'], ['reaching roughly 24,000 to 31,000 at 25–30°C', 'The high end: range + position. Checked against the data: 24,400 to 31,300.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §4 Body 2: the Outlier', k: 'red', label: '§4  BODY 2 — THE OUTLIER', chart: TEMP,
        segs: [
          { t: A4a, hl: { out: true },
            chips: [['The exception is a day at 11°C', 'Position first. Then the value: around 41,000.'], ['the highest figure on the graph and far above…', 'Two comparisons: with the whole graph and with the days at similar temperatures.']] },
          { t: A4b, hl: { fit: true, ref: { y: 31300, t: 'next highest: 31,300' } },
            chips: [['Excluding this point', 'Returns to the main trend and closes the answer: the next highest value, 31,300 at 27°C.']] }] },

      { type: 'full', withChart: true, section: 'Model', title: 'The Band 8 Model Answer', sub: '~' + AW + ' WORDS · ONE GROUP + AN OUTLIER — DATA IN ORANGE, CORRELATION IN PINK, THE EXCEPTION IN GOLD' },

      /* ---------- МОДЕЛЬ B ---------- */
      { type: 'model', section: 'Groups', title: 'Model B — §1 Introduction + §2 Overview', k: 'blue', label: '§1 + §2  INTRODUCTION AND OVERVIEW', chart: ECON, grp: 'econ',
        segs: [
          { t: B1, hl: { legend: true },
            chips: [['compares national income with the share … that goes on food', 'Two variables + the right quantity: a SHARE (%), not the amount spent.'], ['nine European and nine Asian countries', 'What the dots are, and what the two groups are.']] },
          { t: B2a, hl: { fit: 'eu' },
            chips: [['the higher …, the lower …', 'The comparative pair for a negative correlation.']] },
          { t: B2b, hl: { zone: { x: [24, 31], y: [15, 28], t: 'comparable income' } },
            chips: [['At comparable income levels, however', 'The group comparison: same x-value, different y-values. A scatter-specific overview move.']] }] },

      { type: 'model', section: 'Groups', title: 'Model B — §3 Body 1: the European Group', k: 'gold', label: '§3  BODY 1 — EUROPE', chart: ECON, grp: 'econ',
        segs: [{ t: B3, hl: { g: ['eu'], fit: 'eu' },
          chips: [['clustered on the right-hand side', 'The shape of the group: close together and to the right.'], ['roughly US$26,000 to US$53,000', 'The range of the group on the x-axis.'], ['falls steadily from about 19% to 9%', 'The trend within the group, with the two ends of the y-axis range. «steadily»: the points lie almost on a line.']] }] },

      { type: 'model', section: 'Groups', title: 'Model B — §4 Body 2: the Asian Group', k: 'red', label: '§4  BODY 2 — ASIA', chart: ECON, grp: 'econ',
        segs: [{ t: B4, hl: { g: ['as'], fit: 'as', zone: { x: [24, 31], y: [15, 28], t: 'comparable income' } },
          chips: [['a much wider range of incomes', 'The contrast with body 1: Asia spreads over a longer stretch of the x-axis.'], ['Between US$24,000 and US$30,000, for example', 'The comparison point. Checked: Asia 26% and 22%, Europe 19% and 17%.'], ['compared with 17% to 19% in Europe', 'The final comparison closes the answer on the key difference.']] }] },

      { type: 'full', withChart: true, section: 'Groups', title: 'Model B — Two Groups', grp: 'econ', chart: ECON, sub: '~' + BW + ' WORDS · TWO GROUPS — COMPARE AT THE SAME LEVEL OF THE x-AXIS' },

      { type: 'matrix', section: 'Groups', title: 'One Group + Outlier vs Two Groups', sub: 'SAME FOUR PARAGRAPHS, DIFFERENT BODY 2',
        head: ['One series, with an outlier', 'Two groups'],
        rows: [
          { k: 'blue', label: 'Overview', cells: [`one correlation + «one clear outlier»`, `the correlation both groups share + «at comparable levels, however…»`] },
          { k: 'green', label: 'Body 1', cells: [`the main trend, low end → high end`, `the first group: shape, range, trend`] },
          { k: 'gold', label: 'Body 2', cells: [`the outlier: position + value + comparison`, `the second group: range, trend, comparison with body 1`] },
          { k: 'red', label: 'Key phrases', cells: [`one clear outlier · the exception · excluding this point`, `clustered · a much wider range · compared with · in both groups`] },
          { k: 'blue', label: 'Do not', cells: [`explain why the outlier exists`, `say one group is «better»`] }] },

      /* ---------- ПІДГОТОВКА ДО ПИСЬМА ---------- */
      { type: 'vocab', section: 'Writing', title: 'Overview Language for Scatter Graphs', sub: 'ONE SENTENCE FOR DIRECTION AND STRENGTH, ONE FOR THE EXCEPTION OR THE GROUPS',
        top: { label: 'THE OVERVIEW FORMULA', text: `Overall, there is a @@strong positive correlation@@ between X and Y: the [comparative] X, the [comparative] Y. There is, however, [[one clear outlier]] / At comparable levels, group A … than group B.` },
        rows: [
          { k: 'green', term: 'there is a strong positive correlation between X and Y', text: `«{{there is a strong positive correlation}} between temperature and visitors»`, note: 'direction + strength' },
          { k: 'red', term: 'the higher …, the lower …', text: `«{{the higher}} the income, {{the lower}} the food share»`, note: 'a negative correlation, in one sentence' },
          { k: 'gold', term: 'with one clear outlier / apart from one exception', text: `«{{apart from one exception}}, …»`, note: 'flags the exception' },
          { k: 'blue', term: 'in both groups / by contrast', text: `«{{in both groups}}, … whereas A … {{by contrast}}»`, note: 'for two series' }],
        tip: ['Never in the overview:', ` individual numbers («at 11°C, 41,000»). Those belong in body 1 and body 2.`] },

      { type: 'quad', section: 'Writing', title: 'Four Grammar Traps in Scatter Answers', sub: 'THE MISTAKES THAT HOLD GRAMMAR AT BAND 5–6',
        boxes: [
          { k: 'red', head: '1  the + comparative, the + comparative', items: [`✗ The more warmer, the more visitors`, `✓ The %%warmer%% the day, the %%more%% visitors`, `✗ The temperature is higher, the visitors are more`, `Two comparatives, two «the», no «is»`] },
          { k: 'gold', head: '2  data is / are, number of', items: [`✓ The number of visitors %%is%% …`, `✓ Visitor numbers %%tend%% to rise`, `✗ A number of visitors is…`, `The figures / the data: plural in IELTS`] },
          { k: 'blue', head: '3  between … and … / from … to …', items: [`✓ between 10 %%and%% 37 cyclists`, `✓ from about 3,000 %%to%% 9,000 visitors`, `✗ between 10 to 37`, `✗ from 3,000 and 9,000`] },
          { k: 'green', head: '4  correlation between / with', items: [`✓ a correlation %%between%% X %%and%% Y`, `✓ X is correlated %%with%% Y`, `✗ a correlation of X and Y`, `✗ X is correlated to Y`] }] },

      { type: 'rewrite', section: 'Writing', title: 'Upgrade Challenge — Band 6 → Band 8', sub: 'FIX THE CAUSE, THE DATA AND THE OUTLIER',
        html: `<b style="color:#C0392B">BAND 6:</b><br>«When the temperature is high, many people go to the beach because it is hot. The number is bigger. One day is different, it is very big.»<br><br><b style="color:#1A7A4A">BAND 8:</b><br>«There is a @@strong positive correlation@@ between temperature and visitor numbers: {{the warmer the day, the more people}} @@tend to visit@@ the resort. [[One cold day is a clear outlier]], with {{around 41,000 visitors}}.»`,
        label: 'FIVE UPGRADES', items: [['because it is hot', 'delete the reason: report the link, not the cause'], ['when the temperature is high, many people go', 'the warmer the day, the more people tend to visit'], ['The number is bigger', 'strong positive correlation (name the correlation)'], ['One day is different, it is very big', 'One cold day is a clear outlier, with around 41,000'], ['very big', 'around 41,000: a number from the axis']] },

      { type: 'task', section: 'Practice', title: 'Your Turn — Rainfall and Cycling', sub: 'MONTHLY RAINFALL AND CYCLISTS ON A CITY BIKE ROUTE  ·  20 min  ·  150+ words  ·  a scatter graph',
        chart: RAIN,
        prompt: `The scatter graph below shows the relationship between the amount of rainfall in a month and the average number of cyclists per hour on a city bike route. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'BEFORE YOU WRITE:  ① x = rainfall (mm), y = cyclists per hour  ·  ② Direction: negative  ·  ③ Strength: look at the spread, not the slope  ·  ④ No outlier here: body 2 describes the other end of the x-axis  ·  ⑤ Present simple.' },

      { type: 'check', section: 'Practice', title: 'Self-Check Before You Open the Sample', sub: 'EIGHT QUESTIONS AN EXAMINER WOULD ASK',
        items: [
          ['01', 'Does the introduction name BOTH variables and what a dot is?', 'the relationship between … and … on 20 days.'],
          ['02', 'Does the overview have direction AND strength?', 'a moderate negative correlation.'],
          ['03', 'Did I use the comparative pair or «tend to»?', 'the higher …, the lower … / tend to fall.'],
          ['04', 'Are all numbers ranges from the axes, not a list of dots?', 'roughly 40 to 92; about 10 to 37.'],
          ['05', 'Did I report the outlier or the two groups?', 'And did I only describe it, never explain it?'],
          ['06', 'Is every verb present simple (no dates)?', 'there is · the route has · the figure falls.'],
          ['07', 'No «causes», no «because», no prediction?', 'Only what the axes show.'],
          ['08', 'At least 150 words, exactly 4 paragraphs?', 'Count them.']] },

      { type: 'model', section: 'Sample', title: 'Sample Answer — §1 Introduction', k: 'blue', label: '§1  INTRODUCTION', chart: RAIN, grp: 'rain',
        segs: [{ t: C1, hl: { legend: true } }] },
      { type: 'model', section: 'Sample', title: 'Sample Answer — §2 Overview', k: 'green', label: '§2  OVERVIEW', chart: RAIN, grp: 'rain',
        segs: [{ t: C2, hl: { fit: true, r: true } }] },
      { type: 'model', section: 'Sample', title: 'Sample Answer — §3 Body 1: the Dry End', k: 'gold', label: '§3  BODY 1', chart: RAIN, grp: 'rain',
        segs: [{ t: C3, hl: { zone: { x: [0, 40], y: [0, 100], t: 'under 40 mm' } } }] },
      { type: 'model', section: 'Sample', title: 'Sample Answer — §4 Body 2: the Wet End', k: 'red', label: '§4  BODY 2', chart: RAIN, grp: 'rain',
        segs: [{ t: C4, hl: { zone: { x: [100, 120], y: [0, 100], t: '100 mm +' } } }] },

      { type: 'full', withChart: true, section: 'Sample', title: 'The Sample Answer — Rainfall and Cycling', grp: 'rain', chart: RAIN, sub: '~' + CW + ' WORDS · A MODERATE CORRELATION, NO OUTLIER' },

      { type: 'end2', section: 'Summary', title: 'Module 7 — Summary', sub: 'THE WHOLE MODULE ON ONE SCREEN',
        rows: [
          ['Read', 'Two variables, one dot = one case, direction, strength, outlier or groups.'],
          ['Correlate', 'a strong positive / negative correlation · no clear correlation · the higher …, the lower … · tend to.'],
          ['Quantify', 'roughly · from about … to … · between … and … · the highest figure. Ranges, not lists.'],
          ['Report', 'Relationship, not reason. The outlier gets its own sentence; groups are compared at the same level.'],
          ['Shape', '§1 two variables · §2 direction + strength + exception · §3 main trend · §4 outlier or second group.']],
        nextLabel: 'NEXT STEP', next: [['Writing Studio', 'Write your own scatter answer with the 4-paragraph tool'], ['Module 8', 'Mixed Graphs — Two Charts, One Answer']],
        links: [{ label: 'Пишемо разом →', url: '../index.html?t=scatter-1' }, { label: 'Диктант →', url: '../dictation/index.html?t=scatter-1' }, { label: 'Scatter Lab →', url: '../scatter-lab/index.html?t=lab-1' }] }
    ]
  };
})();
