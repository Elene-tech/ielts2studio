/* Module 8 · Mixed Graphs. Два графіки в одному завданні: останній модуль курсу, матеріали створено з нуля в єдиному стилі.
   Принципи:
   · Overview охоплює ОБИДВА графіки (по одному реченню); Body 1 = графік 1; Body 2 = графік 2 + речення-зв'язок; рівний розподіл слів;
   · хоча б одне речення-зв'язок (Meanwhile / Taken together / This is reflected in): без причин, лише зіставлення;
   · кожен графік має свою мову (line: тренди; bar: порівняння; pie: частки; table: точні значення), а час один для всієї відповіді;
   · розмітка: {{...}} = дані (помаранчевий), @@...@@ = тренд / напрям (рожевий), [[...]] = зв'язок і синтез (золотий), %%...%% = граматика (синій);
   · усі цифри в моделях звірені з mixed-scenes.js. Мова слайдів: пояснення українською, приклади британською англійською. */
(function () {
  function wc(t) { return String(t).replace(/%%|@@|\{\{|\}\}|\[\[|\]\]/g, '').trim().split(/\s+/).length; }
  var SC = window.MXSC, EV = SC.EV, BT = SC.BT, ST1 = SC.ST1;
  var HA = function (a, link) { return { a: a, link: link }; };

  /* ---------- модель A: EV (line + pie) ---------- */
  var A1 = `The line graph {{illustrates}} how many electric cars were sold in Europe between 2015 and 2022, while the pie chart {{shows}} the share of 2022 sales held by each brand.`;
  var A2a = `Overall, electric car sales @@rose throughout the period@@, with @@the steepest growth@@ in the final two years.`;
  var A2b = `The pie chart shows that the 2022 market was {{led by Tesla}}, with {{Volkswagen}} in second place.`;
  var A3a = `In 2015, only {{50,000}} electric cars were sold. Sales then @@grew gradually@@ to {{180,000}} in 2018 and {{380,000}} in 2020.`;
  var A3b = `They @@climbed sharply@@ to {{590,000}} in 2021 and {{800,000}} in 2022, {{more than double}} the 2020 figure.`;
  var A4a = `Turning to the pie chart, {{Tesla}} held the largest share of the 2022 market, at {{35%}}, followed by {{Volkswagen}} with {{25%}}.`;
  var A4b = `{{Renault}} accounted for {{15%}}, while all the other brands together made up {{25%}}.`;
  var A4c = `[[Taken together]], the charts show that in 2022, the year sales peaked at {{800,000}}, just two brands sold {{60%}} of all electric cars, {{roughly 480,000}} vehicles.`;
  var AW = [A1, A2a, A2b, A3a, A3b, A4a, A4b, A4c].reduce(function (n, t) { return n + wc(t); }, 0);

  /* ---------- модель B: BT (bar + table) ---------- */
  var B1 = `The bar chart {{compares}} the number of visitors to four types of region in 2012 and 2022, while the table gives the average length of stay and daily spending in each region in 2022.`;
  var B2a = `Overall, visitor numbers @@increased@@ in three of the four regions, [[the countryside being the only exception]].`;
  var B2b = `The table shows that the most popular region, the city, combined {{the shortest stay}} with {{the highest daily spending}}.`;
  var B3 = `The city attracted {{22 million}} visitors in 2012, rising to {{31 million}} in 2022, the highest figure on the chart. The coast also @@grew@@, from {{18 to 24 million}}, and the mountains from {{6 to 9 million}}, whereas the countryside @@fell slightly@@ from {{9 to 8 million}}.`;
  var B4 = `In the table, city visitors stayed just {{3.2 nights}} on average but spent {{£135}} a day, compared with {{£78}} on the coast, where the stay was longest, at {{6.1 nights}}. [[Meanwhile]], the countryside, the only region to lose visitors, also recorded the lowest daily spend, at {{£64}}.`;
  var BW = [B1, B2a, B2b, B3, B4].reduce(function (n, t) { return n + wc(t); }, 0);

  window.DECK = {
    meta: {
      docTitle: 'Module 8 · Mixed Graphs · презентація',
      brandSub: 'Write It Right · Module 8: Mixed Graphs',
      credit: 'Elena Kurilets  ·  @english_rrs  ·  @ielts_ukrainians  ·  englishkurilets.com',
      where: 'IELTS Writing Task 1  ·  Module 8: Mixed Graphs',
      next: { label: 'Пишемо разом →', url: '../index.html?t=mixed-1' },
      dict: '../dictation/index.html?t=mixed-1'
    },
    chart: EV,
    slides: [
      { type: 'title', module: 'MODULE 8', kicker: 'IELTS Writing Task 1', title: 'Mixed Graphs',
        sub: 'Two different charts, one connected answer: how to describe a line graph and a pie chart, or a bar chart and a table, as one story',
        items: ['01  What a mixed task really tests', '02  The 60-second reading of two charts', '03  One structure for two graphs', '04  Linking and synthesis language', '05  Band 8 models — annotated', '06  Practice task + self-check'] },

      { type: 'stack', cls: 'tight', section: 'Roadmap', title: 'How This Module Works', sub: 'SIX STOPS, ABOUT 75 MINUTES — AND ONE LAB WHERE YOU SORT SENTENCES BY CHART',
        rows: [
          { k: 'blue',  tag: '1', head: 'Diagnose  ·  5 MIN', text: `Read a Band 5 mixed answer: two separate mini-essays with nothing between them.` },
          { k: 'green', tag: '2', head: 'Read two charts  ·  10 MIN', text: `What each chart does, what they share, and the one point where they meet.` },
          { k: 'gold',  tag: '3', head: 'Structure  ·  15 MIN', text: `Overview for BOTH charts, Body 1 = chart 1, Body 2 = chart 2 + a link, and an equal share of words.` },
          { k: 'red',   tag: '4', head: 'Linking language  ·  15 MIN', text: `Meanwhile, this is reflected in, taken together: the sentences that join two charts. Plus the Mixed Lab.` },
          { k: 'blue',  tag: '5', head: 'Study two models  ·  20 MIN', text: `Line + pie, then bar + table: every phrase traced to the data.` },
          { k: 'green', tag: '6', head: 'Write & check  ·  10 MIN', text: `A new pair of charts, twenty minutes, and an 8-question self-check.` }],
        footnote: 'One rule for this module: @@two charts = one answer@@. The examiner reads the Overview first: if it covers only one chart, the band stops at 5.' },

      { type: 'example', section: 'Diagnose', title: 'What a Band 5 Mixed Answer Looks Like', sub: 'CAN YOU SPOT THE FOUR PROBLEMS BEFORE YOU READ THE FLAGS?',
        lines: [`The line graph shows electric car sales. Sales go up every year. The pie chart shows brands. Tesla is the biggest. I think people like Tesla because it is a good car.`],
        label: 'A TYPICAL BAND 5 ANSWER — THE FOUR PROBLEMS',
        reasons: [
          ['✗  Two separate mini-essays  ·  COHERENCE', `Chart 1, then chart 2, with nothing between them. The examiner wants at least one sentence that connects the two.`],
          ['✗  No overview of BOTH charts  ·  TASK ACHIEVEMENT', `There is no summary of the whole task. An overview must say what each chart shows in general terms.`],
          ['✗  An opinion and a reason  ·  TASK ACHIEVEMENT', `«I think people like Tesla because…»: the charts give no reasons and the task never asks for an opinion.`],
          ['✗  No data  ·  LEXICAL RESOURCE', `«go up every year», «the biggest»: how many, from when, how much? Each chart needs its own key figures.`]],
        footnote: 'Головний інсайт: у mixed task студенти пишуть два окремих твори. Екзаменатор шукає ОДНУ відповідь, у якій обидва графіки зв’язані.' },

      { type: 'dual', cls: 'sm', section: 'Diagnose', title: 'How Examiners Score a Mixed Task', sub: 'FOUR CRITERIA, 25% EACH — THE LINK BETWEEN THE CHARTS CARRIES TWO OF THEM',
        cols: [
          { k: 'gold', head: 'Task Achievement  ·  25%', items: [`Band 7+ requires:`, `· an overview that covers BOTH charts`, `· key figures from each chart, not everything`, `· at least one sentence that links the two`, `· no reasons and no opinions`] },
          { k: 'blue', head: 'Coherence & Cohesion  ·  25%', items: [`Band 7+ requires:`, `· exactly 4 paragraphs`, `· Body 1 = chart 1; Body 2 = chart 2 + the link`, `· transitions: turning to…, meanwhile…`, `· both charts get about the same space`] },
          { k: 'red', head: 'Lexical Resource  ·  25%', items: [`Band 7+ requires:`, `· TWO vocabularies in one answer: trends for a line graph, shares for a pie chart`, `· precise numbers and units`, `«sales go up» + «Tesla is big» = Band 5`] },
          { k: 'green', head: 'Grammar Range & Accuracy  ·  25%', items: [`Band 7+ requires:`, `· one consistent tense family`, `· while / whereas clauses that join two facts`, `· comparatives and passives: %%were sold%%, %%was led by%%`] }],
        footnote: 'One skill, two criteria: a good linking sentence raises Task Achievement (the charts are related) and Coherence (the answer is one piece).' },

      { type: 'task', section: 'The Task', title: 'The Task', sub: 'ELECTRIC CARS IN EUROPE  ·  20 min  ·  150+ words  ·  a line graph + a pie chart',
        prompt: `The line graph below shows the number of electric cars sold in Europe between 2015 and 2022, and the pie chart shows the share of sales held by each brand in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'READ THE TASK LIKE AN EXAMINER:  ① Two charts, one topic  ·  ② Chart 1 = change over time  ·  ③ Chart 2 = shares at one moment  ·  ④ Both mention 2022: that is the bridge  ·  ⑤ Dated data, so past simple.' },

      { type: 'questions', cls: 'five', section: 'The Task', title: 'How to Read Two Charts in 60 Seconds', sub: 'FIVE QUESTIONS TO ANSWER BEFORE YOU WRITE A SINGLE WORD',
        items: [
          { n: '01', q: 'What does each chart show?', uk: `Chart 1 (line): electric car sales over time. Chart 2 (pie): brand shares in one year. Name both in the introduction.`, hl: { a: {}, b: {} } },
          { n: '02', q: 'What kind of data is each?', uk: `Line = change (trend verbs). Pie = proportion (share language). Different charts, different vocabulary.`, hl: { a: { axes: 'both' }, b: { sl: { y22: 'all' } } } },
          { n: '03', q: 'What do they share?', uk: `Both are about 2022. This is the bridge between them: look for the year, the category or the group that appears twice.`, hl: { a: { s: ['ev'], pts: { ev: [7] } }, b: { sl: { y22: 'all' } }, link: '2022' } },
          { n: '04', q: 'What is the main message of each?', uk: `Chart 1: sales rose, fastest in the last two years. Chart 2: Tesla leads, with Volkswagen second.`, hl: { a: { s: ['ev'], band: [5, 7] }, b: { sl: { y22: ['tes', 'vw'] } } } },
          { n: '05', q: 'What is the link sentence?', uk: `In 2022, the year sales peaked at 800,000, two brands sold 60% of all cars. One sentence, both charts.`, hl: { a: { pts: { ev: [7] } }, b: { sl: { y22: ['tes', 'vw'] } }, link: '800,000 → 60%' } }] },

      { type: 'stack', cls: 'tight', section: 'Method', title: 'The 4-Paragraph Framework for Two Charts', sub: 'EVERY MIXED ANSWER — ALWAYS EXACTLY THIS SHAPE',
        rows: [
          { k: 'blue',  tag: '§1', head: 'INTRODUCTION  ·  1 sentence  ·  ~30 words', text: `Paraphrase BOTH charts in one sentence: «The line graph illustrates …, while the pie chart shows …».` },
          { k: 'green', tag: '§2', head: 'OVERVIEW  ·  2 sentences  ·  ~40 words  ·  most important', text: `ONE sentence about chart 1 and ONE sentence about chart 2: the main trend and the main fact. No numbers yet.` },
          { k: 'gold',  tag: '§3', head: 'BODY 1  ·  chart 1  ·  ~50 words', text: `The key figures of the first chart, in order: start, change, end. Ranges and comparisons, not every point.` },
          { k: 'red',   tag: '§4', head: 'BODY 2  ·  chart 2 + the link  ·  ~55 words', text: `Turning to the second chart: key figures, then the linking sentence («Taken together…» / «Meanwhile…»).` }],
        footnote: 'Balance: chart 1 and chart 2 get roughly the same number of words. 80% on one chart is the most common reason for Band 5 in Task Achievement.' },

      /* ---------- ЧИТАННЯ ПАРИ ГРАФІКІВ ---------- */
      { type: 'mapview', section: 'Reading', title: 'A Pair of Charts: What Does Each One Do?', sub: 'THE TWO CHARTS ANSWER TWO DIFFERENT QUESTIONS ABOUT THE SAME TOPIC',
        notes: [
          { k: 'blue', head: 'Chart 1: {{how much, when}}', text: `a line graph answers «how did it change?»: use trend language and dates.`, hl: { a: { s: ['ev'], axes: 'both' } } },
          { k: 'green', head: 'Chart 2: {{who has what share}}', text: `a pie chart answers «how is it divided?»: use share language: the largest share, accounted for.`, hl: { b: { sl: { y22: 'all' } } } },
          { k: 'gold', head: 'The {{bridge}}', text: `look for what appears in both: here, the year 2022. Your linking sentence lives on the bridge.`, hl: { a: { pts: { ev: [7] } }, b: { sl: { y22: 'all' } }, link: '2022' } },
          { k: 'red', head: 'Do not {{merge}} the data', text: `never add numbers from different charts as if they were the same thing. 800,000 cars and 35% belong to different scales.`, hl: { a: {}, b: {} } }] },

      { type: 'matrix', section: 'Reading', title: 'Which Chart Does What?', sub: 'THE SAME FOUR CHART TYPES YOU KNOW: IN A MIXED TASK EACH KEEPS ITS OWN LANGUAGE',
        head: ['What it shows', 'Language to use'],
        rows: [
          { k: 'blue', label: 'Line graph', cells: [`change over time: start, peak, end`, `rose · climbed sharply · peaked at · by 2022`] },
          { k: 'green', label: 'Bar chart', cells: [`comparison between categories or years`, `higher than · twice as many as · the highest · whereas`] },
          { k: 'gold', label: 'Pie chart', cells: [`parts of a whole at one moment`, `accounted for · the largest share · a quarter · made up`] },
          { k: 'red', label: 'Table', cells: [`exact values: select, group, contrast`, `ranged from … to … · the highest figure · compared with`] },
          { k: 'blue', label: 'Together', cells: [`one story about one topic`, `meanwhile · this is reflected in · taken together`] }] },

      { type: 'mapview', section: 'Reading', title: 'Three Ways to Link Two Charts', sub: 'IF YOU CAN FIND ONE OF THESE, YOU HAVE YOUR LINKING SENTENCE',
        notes: [
          { k: 'blue', head: 'Same {{moment}}', text: `both charts contain the same year: «In 2022, when sales peaked at 800,000, Tesla held 35%».`, hl: { a: { pts: { ev: [7] } }, b: { sl: { y22: ['tes'] } }, link: '2022' } },
          { k: 'green', head: 'Same {{subject}}', text: `the same group in both charts: the top brands in the pie are the ones driving the rise in the line.`, hl: { a: { s: ['ev'] }, b: { sl: { y22: ['tes', 'vw'] } }, link: 'the market' } },
          { k: 'gold', head: 'A {{contrast}}', text: `the charts point in different directions: «while sales rose steadily, one brand held more than a third of the market».`, hl: { a: { s: ['ev'], band: [0, 7] }, b: { sl: { y22: ['tes'] } }, link: 'while' } },
          { k: 'red', head: 'A {{synthesis}}', text: `the one sentence that needs both charts: «just two brands sold 60% of the 800,000 cars».`, hl: { a: { pts: { ev: [7] } }, b: { sl: { y22: ['tes', 'vw'] } }, link: 'taken together' } }] },

      { type: 'vocab', section: 'Language', title: 'Linking the Two Charts', sub: 'SIX PHRASES THAT TURN TWO DESCRIPTIONS INTO ONE ANSWER', grid: true,
        rows: [
          { k: 'blue', term: 'Meanwhile, …', text: `«{{Meanwhile}}, the countryside also recorded the lowest daily spend»`, note: 'a second fact on the same subject' },
          { k: 'green', term: 'Correspondingly, …', text: `«{{Correspondingly}}, the city, with the most visitors, had the highest spend»`, note: 'two facts that move together' },
          { k: 'gold', term: 'This is reflected in …', text: `«{{This is reflected in}} the table, where city visitors spent £135»`, note: 'chart 2 confirms chart 1: no cause' },
          { k: 'red', term: 'Similarly, … / In contrast, …', text: `«{{In contrast}}, the countryside lost visitors»`, note: 'the same or the opposite pattern' },
          { k: 'blue', term: 'While the first chart …, the second …', text: `«{{While}} the line graph shows a rise, the pie chart shows one dominant brand»`, note: 'both charts in one sentence' },
          { k: 'green', term: 'at the same time', text: `«{{At the same time}}, two brands sold 60% of all cars»`, note: 'two facts in the same period' }],
        tip: ['Trap:', ` «because» and «so» are not linking words in this task. Link by position and comparison: «Meanwhile», «In contrast». Never by reason.`] },

      { type: 'vocab', section: 'Language', title: 'Moving From One Chart to the Other', sub: 'THE EXAMINER MUST ALWAYS KNOW WHICH CHART YOU ARE DESCRIBING', grid: true,
        rows: [
          { k: 'blue', term: 'Turning to the second chart, …', text: `«{{Turning to the pie chart}}, Tesla held the largest share»`, note: 'the standard bridge between Body 1 and Body 2' },
          { k: 'green', term: 'Regarding the table, …', text: `«{{Regarding the table}}, city visitors stayed 3.2 nights»`, note: 'name the chart type' },
          { k: 'gold', term: 'As shown in the bar chart, …', text: `«{{As shown in the bar chart}}, the city attracted the most visitors»`, note: 'a short reference inside a sentence' },
          { k: 'red', term: 'According to the data in …', text: `«{{According to the data}} in the table, …»`, note: 'avoid repeating «shows»' },
          { k: 'blue', term: 'The line graph / the pie chart', text: `«{{The line graph}} illustrates …, while {{the pie chart}} shows …»`, note: 'two different verbs for two charts' },
          { k: 'green', term: 'In the first / second chart', text: `«In the second chart, the countryside is the only …»`, note: 'when the chart types are the same' }],
        tip: ['Trap:', ` after «Turning to…» use the new chart's vocabulary. Don't carry trend verbs («rose», «fell») into a pie chart: a pie has shares, not trends.`] },

      { type: 'dual', cls: 'sm', section: 'Structure', title: 'Two Ways to Organise the Body', sub: 'PLAN A IS SAFER; PLAN B IS FOR PAIRS WITH THE SAME CATEGORIES',
        cols: [
          { k: 'green', head: 'PLAN A  ·  BY CHART  (RECOMMENDED)', items: [`Body 1 = everything about chart 1`, `Body 2 = everything about chart 2 + the link`, `✓ the examiner always knows where you are`, `✓ easy to balance the words`, `✓ works for any pair: line + pie, bar + table…`] },
          { k: 'blue', head: 'PLAN B  ·  BY THEME  (ADVANCED)', items: [`Body 1 = what both charts say about X`, `Body 2 = what both charts say about Y`, `✓ best when both charts use the same categories`, `✗ easy to lose track of which chart you are on`, `✗ needs a clear sign for each chart every sentence`] }],
        note: `Not sure? Use Plan A. A clear Plan A at Band 7 beats a confused Plan B at Band 5. The link sentence works in both plans.` },

      { type: 'quad', section: 'Structure', title: 'Overview Formulas for Four Pairs', sub: 'ONE SENTENCE FOR EACH CHART, NO NUMBERS',
        boxes: [
          { k: 'blue', head: 'LINE + PIE', items: [`Overall, sales @@rose steadily@@ …`, `The pie chart shows that X was {{led by}} Y.`, `trend + leader`, `Past simple if dated`] },
          { k: 'green', head: 'BAR + TABLE', items: [`Overall, numbers @@increased@@ in most groups …`, `The table shows that X combined A with B.`, `comparison + the table's pattern`, `Table gives exact figures for body 2`] },
          { k: 'gold', head: 'LINE + TABLE', items: [`Overall, X was higher than Y throughout …`, `The table shows that X had the larger Z.`, `two lines + one fact`, `Same groups in both charts`] },
          { k: 'red', head: 'BAR + PIE', items: [`Overall, total sales {{doubled}} …`, `Most orders were placed on {{smartphones}}.`, `change + biggest share`, `The pie is a single year`] }] },

      { type: 'vocab', section: 'Language', title: 'Synthesis: the Sentence That Needs Both Charts', sub: 'ONE SENTENCE NEAR THE END THAT NEITHER CHART CAN GIVE ALONE', grid: true,
        rows: [
          { k: 'blue', term: 'Taken together, the charts show that …', text: `«{{Taken together}}, the charts show that two brands sold 60% of the record 800,000 cars»`, note: 'the standard synthesis' },
          { k: 'green', term: 'Both charts indicate that …', text: `«{{Both charts indicate}} that the city is the most popular region»`, note: 'when both point the same way' },
          { k: 'gold', term: 'The two charts together suggest …', text: `«{{The two charts together suggest}} that popularity and length of stay do not always go together»`, note: 'cautious: suggest, not prove' },
          { k: 'red', term: 'Considering both charts, …', text: `«{{Considering both charts}}, the coast attracts fewer visitors but they stay longer»`, note: 'a contrast between the charts' },
          { k: 'blue', term: 'This pattern is also seen in …', text: `«This pattern {{is also seen in}} the table, …»`, note: 'chart 2 repeats the pattern' },
          { k: 'green', term: 'in the year when …', text: `«in 2022, {{the year when}} sales peaked at 800,000, …»`, note: 'a bridge through a shared year' }],
        tip: ['Trap:', ` «prove», «this means», «as a result»: all of these are reasons. The charts only let us say they SHOW or SUGGEST.`] },

      { type: 'dual', cls: 'sm', section: 'Structure', title: 'The Balance Trap', sub: 'TWO CHARTS = TWO PARTS OF THE MARK: DON\'T SPEND ALL YOUR WORDS ON THE PRETTIER ONE',
        cols: [
          { k: 'red', head: '✗ UNBALANCED  (Band 5)', items: [`Intro: only chart 1`, `Overview: only chart 1`, `Body 1: 110 words about chart 1`, `Body 2: 25 words about chart 2`, `no sentence that links the charts`] },
          { k: 'green', head: '✓ BALANCED  (Band 7+)', items: [`Intro: both charts, ~30 words`, `Overview: 1 + 1 sentences, ~40 words`, `Body 1: chart 1, ~50 words`, `Body 2: chart 2 + link, ~55 words`, `one linking sentence near the end`] }],
        note: `Time: 3 min reading · 2 min plan · 13 min writing · 2 min checking. If you have been on chart 1 for more than 6 of your 13 writing minutes, move to chart 2.` },

      { type: 'quad', section: 'Language', title: 'Tense and Grammar in a Mixed Task', sub: 'TWO CHARTS, ONE TENSE FAMILY: THE MOST COMMON GRAMMAR SLIP IN MODULE 8',
        boxes: [
          { k: 'blue', head: 'DATED DATA → PAST SIMPLE', items: [`Both charts have years: use past simple.`, `Sales %%rose%% to 800,000; Tesla %%held%% 35%.`, `A pie chart «in 2022» is also past simple`, `Never: «Tesla holds 35% in 2022»`] },
          { k: 'green', head: 'NO DATES → PRESENT SIMPLE', items: [`A climate or average chart: present simple.`, `The coastal town %%is%% warmer and drier.`, `Mix only when the dates differ: past for the line, present for a current table`, `Choose once, then stay`] },
          { k: 'gold', head: 'PASSIVES AND «WHILE»', items: [`%%were sold%% (not «sold» without a subject)`, `The market %%was led%% by Tesla.`, `%%While%% sales rose, one brand dominated.`, `while + two facts = one sentence`] },
          { k: 'red', head: 'DO NOT PREDICT', items: [`✗ Sales will reach 1 million in 2025.`, `✓ Sales rose to 800,000 in 2022.`, `The charts cover the past only`, `No «will», no «in the future»`] }] },

      { type: 'dual', cls: 'sm', section: 'Language', title: 'Report the Link, Not the Reason', sub: 'TWO CHARTS SHOW THAT TWO THINGS COINCIDE — NOT WHY',
        cols: [
          { k: 'red', head: '✗ REASON (Band 5)', items: [`✗ Tesla has 35% because it makes good cars.`, `✗ Sales rose so many people changed brands.`, `✗ City visitors spend more since it is expensive.`, `✗ This proves that cities are better.`] },
          { k: 'green', head: '✓ LINK (Band 7+)', items: [`✓ Tesla held 35% of the market in 2022.`, `✓ In 2022, when sales peaked, two brands sold 60%.`, `✓ The city combined the most visitors with the highest spend.`, `✓ The two charts suggest that popularity and stay do not go together.`] }],
        note: `You are a reporter, not an analyst. The prompt says «summarise the information». {{Because}} and {{proves}} sound clever, but both lose Task Achievement.` },

      { type: 'end2', section: 'Practice', title: 'Mixed Lab — Which Chart Is It About?', sub: 'AN INTERACTIVE: SORT SENTENCES BY CHART, THEN CHOOSE THE ACCURATE SENTENCE FOR A PAIR OF CHARTS',
        rows: [
          ['Level 1 · which chart?', 'Six sentences about the electric-car charts. Each one belongs to chart 1, chart 2, or both: a linking sentence. Learn to feel the link.'],
          ['Level 2 · choose the sentence', 'Six tasks about a pair of tourism charts: overview, link, accuracy for a bar chart, accuracy for a table, plan, synthesis.'],
          ['What to watch', 'After each answer the charts light up the data the sentence uses. Check that it really comes from where you thought.'],
          ['How it works', 'Click an option. The wrong ones carry the typical Band 5 traps: only one chart, a reason instead of a link, wrong numbers.']],
        nextLabel: 'OPEN IN A NEW TAB', next: [['Mixed Lab', 'Живий інтерактив для уроку: 12 завдань, два рівні'], ['Для студентів', 'Те саме посилання в Kwiga: «Лабораторія» у меню модуля']],
        links: [{ label: 'Відкрити Mixed Lab →', url: '../mixed-lab/index.html?t=lab-1', blank: true }] },

      /* ---------- МОДЕЛЬ A ---------- */
      { type: 'model', section: 'Model', title: 'Model Anatomy — §1 Introduction', k: 'blue', label: '§1  INTRODUCTION', chart: EV,
        segs: [{ t: A1, hl: { a: {}, b: {} },
          chips: [['The line graph illustrates … while the pie chart shows …', 'BOTH charts in ONE sentence. Two different verbs (illustrates / shows) so the paraphrase is not repetitive.'], ['how many … were sold', 'A nominal clause turns «number of cars sold» into a new structure: not a copy of the prompt.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §2 Overview', k: 'green', label: '§2  OVERVIEW', chart: EV,
        segs: [
          { t: A2a, hl: { a: { s: ['ev'], band: [5, 7] } },
            chips: [['rose throughout the period', 'The overall trend of chart 1 without numbers.'], ['the steepest growth in the final two years', 'Checked: +210 in 2020–21 and +210 in 2021–22, more than any earlier year.']] },
          { t: A2b, hl: { b: { sl: { y22: ['tes', 'vw'] } } },
            chips: [['led by Tesla, with Volkswagen in second place', 'The overview of chart 2: the main fact, no percentages. Both charts are in the overview.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §3 Body 1: the Line Graph', k: 'gold', label: '§3  BODY 1 — CHART 1', chart: EV,
        segs: [
          { t: A3a, hl: { a: { s: ['ev'], pts: { ev: [0, 3, 5] } } },
            chips: [['In 2015, only 50,000 … were sold', 'The starting point with the passive and a date.'], ['grew gradually to 180,000 in 2018 and 380,000 in 2020', 'The first phase: slow growth. gradually = the early points are close together.']] },
          { t: A3b, hl: { a: { s: ['ev'], pts: { ev: [5, 6, 7] }, band: [5, 7] } },
            chips: [['climbed sharply to 590,000 … and 800,000', 'The second phase: a change of speed, a change of verb.'], ['more than double the 2020 figure', 'A comparison inside the line graph: 800 ÷ 380 = 2.1.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §4 Body 2: the Pie Chart and the Link', k: 'red', label: '§4  BODY 2 — CHART 2 + LINK', chart: EV,
        segs: [
          { t: A4a, hl: { b: { sl: { y22: ['tes', 'vw'] } } },
            chips: [['Turning to the pie chart', 'The bridge from Body 1. After it, the vocabulary switches to shares.'], ['held the largest share … at 35%, followed by Volkswagen with 25%', 'Share language: held, at, followed by. No trend verbs.']] },
          { t: A4b, hl: { b: { sl: { y22: ['ren', 'oth'] } } },
            chips: [['accounted for 15%, while all the other brands together made up 25%', 'Two shares in one sentence with while. 35 + 25 + 15 + 25 = 100.']] },
          { t: A4c, hl: { a: { pts: { ev: [7] } }, b: { sl: { y22: ['tes', 'vw'] } }, link: '800,000 → 60%' },
            chips: [['Taken together', 'The synthesis marker that opens the linking sentence.'], ['in 2022, the year sales peaked at 800,000', 'The bridge: the shared year, taken from chart 1.'], ['just two brands sold 60% … roughly 480,000 vehicles', 'The two charts meet: 35% + 25% = 60%; 60% of 800,000 = 480,000.']] }] },

      { type: 'full', withChart: true, section: 'Model', title: 'The Band 8 Model Answer', sub: '~' + AW + ' WORDS · LINE GRAPH + PIE CHART — DATA IN ORANGE, TRENDS IN PINK, THE LINK IN GOLD' },

      /* ---------- МОДЕЛЬ B ---------- */
      { type: 'model', section: 'Pairs', title: 'Model B — §1 Introduction + §2 Overview', k: 'blue', label: '§1 + §2  INTRODUCTION AND OVERVIEW', chart: BT, grp: 'bt',
        segs: [
          { t: B1, hl: { a: {}, b: {} },
            chips: [['compares … while the table gives …', 'A bar chart compares; a table gives. The verbs match the charts.'], ['in 2012 and 2022 / in 2022', 'Different dates are named: the bar chart has two years, the table has one.']] },
          { t: B2a, hl: { a: { s: ['y12', 'y22'], vals: false } },
            chips: [['increased in three of the four regions', 'The main trend in the bar chart: a count, not a list.'], ['the countryside being the only exception', 'The exception is announced in the overview.']] },
          { t: B2b, hl: { b: { r: [0, 1], c: [1] }, link: 'the city' },
            chips: [['combined the shortest stay with the highest daily spending', 'The overview sentence for chart 2 AND the first link: the same region in both charts.']] }] },

      { type: 'model', section: 'Pairs', title: 'Model B — §3 Body 1: the Bar Chart', k: 'gold', label: '§3  BODY 1 — CHART 1', chart: BT, grp: 'bt',
        segs: [{ t: B3, hl: { a: { s: ['y12', 'y22'], vals: true } },
          chips: [['rising to 31 million in 2022, the highest figure on the chart', 'The leader with its change over time.'], ['from 18 to 24 million · from 6 to 9 million', 'Two regions in one clause each: start → end, no repetition of «increased».'], ['whereas the countryside fell slightly from 9 to 8 million', 'whereas introduces the exception. Checked: 9 → 8 is a fall of 1 million, so «slightly».']] }] },

      { type: 'model', section: 'Pairs', title: 'Model B — §4 Body 2: the Table and the Link', k: 'red', label: '§4  BODY 2 — CHART 2 + LINK', chart: BT, grp: 'bt',
        segs: [{ t: B4, hl: { b: { r: [0, 1], c: [1, 0] }, link: 'city vs coast' },
          chips: [['stayed just 3.2 nights … but spent £135 a day', 'but joins two facts about the same group: the table\'s own contrast.'], ['compared with £78 on the coast, where the stay was longest, at 6.1 nights', 'The comparison with the opposite group. Checked against the table: £78 and 6.1 nights.'], ['Meanwhile, the countryside … also recorded the lowest daily spend', 'The link back to chart 1: the only region that lost visitors also has the lowest spend (£64). Two facts, no reason.']] }] },

      { type: 'full', withChart: true, section: 'Pairs', title: 'Model B — Bar Chart + Table', grp: 'bt', chart: BT, sub: '~' + BW + ' WORDS · A TABLE GIVES EXACT FIGURES FOR BODY 2 — THE LINK IS THE CITY AND THE COUNTRYSIDE' },

      { type: 'matrix', section: 'Pairs', title: 'Line + Pie vs Bar + Table', sub: 'SAME FOUR PARAGRAPHS, DIFFERENT BRIDGES',
        head: ['Model A: line graph + pie chart', 'Model B: bar chart + table'],
        rows: [
          { k: 'blue', label: 'Introduction', cells: [`illustrates how many … while … shows the share`, `compares the number … while the table gives …`] },
          { k: 'green', label: 'Overview', cells: [`a trend (rose) + a leader (led by Tesla)`, `a count (three of four increased) + a pattern in the table`] },
          { k: 'gold', label: 'Body 1', cells: [`phases of the line: start → rise → peak`, `leaders and the exception in the bars`] },
          { k: 'red', label: 'Body 2 + link', cells: [`shares, then «Taken together»: 2022, 60% of 800,000`, `exact stay and spend, then «Meanwhile»: the countryside`] },
          { k: 'blue', label: 'The bridge', cells: [`the year 2022`, `the same regions in both charts`] }] },

      /* ---------- ПІДГОТОВКА ДО ПИСЬМА ---------- */
      { type: 'rewrite', section: 'Writing', title: 'Upgrade Challenge — Band 6 → Band 8', sub: 'FIX THE LINK, THE DATA AND THE BALANCE',
        html: `<b style="color:#C0392B">BAND 6:</b><br>«The line graph is about electric cars. They go up from 50 to 800. The pie chart is about brands. Tesla is big. Tesla is 35 percent. The two graphs are different.»<br><br><b style="color:#1A7A4A">BAND 8:</b><br>«@@Electric car sales rose@@ from {{50,000 in 2015 to 800,000 in 2022}}, and in that final year {{Tesla alone}} held {{35%}} of the market. [[Taken together]], the charts show that {{two brands}} sold {{60%}} of the record 800,000 cars.»`,
        label: 'FIVE UPGRADES', items: [['The line graph is about electric cars', 'a real introduction verb + both charts: illustrates … while … shows'], ['They go up from 50 to 800', 'rose from 50,000 in 2015 to 800,000 in 2022: units and years'], ['Tesla is big … Tesla is 35 percent', 'held the largest share … 35%: share language, one sentence'], ['The two graphs are different', 'a linking sentence: Taken together, …'], ['two separate pieces', 'one answer: the shared year 2022 joins the charts']] },

      { type: 'task', section: 'Practice', title: 'Your Turn — Online Shopping', sub: 'ONLINE SALES BY CATEGORY AND THE DEVICES USED TO ORDER  ·  20 min  ·  150+ words  ·  a bar chart + a pie chart',
        chart: ST1,
        prompt: `The bar chart below shows the value of online sales in five product categories in 2015 and 2022, and the pie chart shows the devices used to place online orders in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'BEFORE YOU WRITE:  ① Chart 1 = comparison of 5 categories in 2 years  ·  ② Chart 2 = shares, one year  ·  ③ Find the total in each year  ·  ④ The bridge: both charts are about online shopping  ·  ⑤ Past simple. The model answer is in the Writing Studio.' },

      { type: 'check', section: 'Practice', title: 'Self-Check Before You Open the Sample', sub: 'EIGHT QUESTIONS AN EXAMINER WOULD ASK',
        items: [
          ['01', 'Does the introduction mention BOTH charts?', 'The bar chart compares …, while the pie chart shows …'],
          ['02', 'Does the overview cover BOTH charts, one sentence each?', 'No numbers yet.'],
          ['03', 'Is chart 1 in Body 1 and chart 2 in Body 2?', 'Turning to the pie chart, …'],
          ['04', 'Is there at least one sentence that LINKS the two?', 'Meanwhile … / Taken together …'],
          ['05', 'Do both charts get about the same number of words?', 'Count the two body paragraphs.'],
          ['06', 'Does each chart have its own vocabulary?', 'trends for bars over time · shares for the pie.'],
          ['07', 'One tense family, no reasons, no predictions?', 'Past simple · no «because» · no «will».'],
          ['08', 'At least 150 words, exactly 4 paragraphs?', 'Count them.']] },

      { type: 'end2', section: 'Summary', title: 'Module 8 — Summary', sub: 'THE WHOLE MODULE ON ONE SCREEN',
        rows: [
          ['Read', 'What each chart shows, what kind of data it is, and the bridge they share.'],
          ['Structure', '§1 both charts · §2 one sentence each · §3 chart 1 · §4 chart 2 + link. Equal share of words.'],
          ['Link', 'Meanwhile · this is reflected in · while the first chart … the second … · taken together.'],
          ['Language', 'Each chart keeps its own vocabulary; one tense family for the whole answer.'],
          ['Report', 'The link between the charts, never a reason. Suggest, don\'t prove.']],
        nextLabel: 'NEXT STEP', next: [['Writing Studio', 'Write your own mixed answer with the 4-paragraph tool'], ['Final Task', 'Bar chart + pie chart: the course test, with feedback']],
        links: [{ label: 'Пишемо разом →', url: '../index.html?t=mixed-1' }, { label: 'Диктант →', url: '../dictation/index.html?t=mixed-1' }, { label: 'Mixed Lab →', url: '../mixed-lab/index.html?t=lab-1' }] }
    ]
  };
})();
