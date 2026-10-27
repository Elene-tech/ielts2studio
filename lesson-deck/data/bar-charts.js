/* Module 3 · Bar Charts. Тексти слайдів з презентації Олени (IELTS_Task_1__Bar_Charts___Module_3_Redesigned.pptx).
   Правки точності (див. супровідне повідомлення): overview (18–30 найбільші за сумою, 31–50 лише eating out),
   streaming «broadly similar» лише для двох молодших груп, cinema не «the one category»,
   прислівники за драбинкою (26% = noticeably, 76% = far), «eight times as much», overview у practice (women не лідирують у socialising).
   Анотована модель (слайди 12–13 PPTX) використана як єдина модель, щоб слайд 11 і розбір збігалися. */
window.DECK = {
  meta: {
    docTitle: 'Module 3 · Bar Charts · презентація',
    brandSub: 'Write It Right · Module 3: Bar Charts',
    credit: 'Elena Kurilets  ·  @english_rrs  ·  @ielts_ukrainians  ·  englishkurilets.com',
    where: 'IELTS Writing Task 1  ·  Module 3: Bar Charts',
    next: { label: 'Пишемо разом →', url: '../index.html?t=bar-1' },
    dict: '../dictation/index.html?t=bar-1'
  },
  chart: {
    type: 'bar', approx: true, fmt: 'approx',
    title: 'Average monthly spending on entertainment, UK 2022 (£)',
    yTitle: '£ per month', yMax: 140, yStep: 20, pre: '£',
    cats: ['Eating out', 'Video games', 'Sports & fitness', 'Books & music', 'Cinema & theatre', 'Streaming'],
    series: [
      { id: 'a', name: '18–30 year olds', color: '#2C6E8A', data: [95, 62, 55, 14, 28, 42] },
      { id: 'b', name: '31–50 year olds', color: '#E1512E', data: [120, 18, 45, 22, 22, 38] },
      { id: 'c', name: '51–70 year olds', color: '#2C7A5A', data: [68, 8, 30, 38, 35, 22] }
    ]
  },
  slides: [
    { type: 'title', module: 'MODULE 3', kicker: 'IELTS Writing Task 1', title: 'Bar Charts',
      sub: 'Comparing groups with precision — comparative structures, multipliers and the 4-paragraph method',
      items: ['01  The #1 bar-chart mistake', '02  The 60-second chart reading', '03  The 4-paragraph method', '04  Band 8 model — annotated', '05  Comparative structures toolkit', '06  Two practice tasks + self-check'] },

    { type: 'stack', section: 'Roadmap', title: 'How This Module Works', sub: 'SIX STOPS, ABOUT 60 MINUTES — KNOW WHERE YOU ARE AT EVERY STEP',
      rows: [
        { k: 'blue',  tag: '1', head: 'Diagnose  ·  5 MIN', text: `Read a real Band 5 answer that lists bars one by one — and find out why it stops at Band 5.` },
        { k: 'green', tag: '2', head: 'Understand the score  ·  5 MIN', text: `Four criteria, 25% each — not just vocabulary. Every block in this module names the criterion it trains.` },
        { k: 'gold',  tag: '3', head: 'Read the charts  ·  10 MIN', text: `One bar chart, six categories, three age groups, sixty seconds — the routine that decides what you write before you write it.` },
        { k: 'red',   tag: '4', head: 'Study the model  ·  15 MIN', text: `A Band 8 answer taken apart paragraph by paragraph — every phrase explained, nothing left as magic.` },
        { k: 'blue',  tag: '5', head: 'Build vocabulary  ·  10 MIN', text: `Three comparative structures instead of five flat lists — plus the grammar traps Ukrainian speakers hit most.` },
        { k: 'green', tag: '6', head: 'Write & check  ·  20 MIN', text: `First an upgrade drill, then a full timed task on two new charts — with an examiner-style checklist to score yourself.` }],
      footnote: 'Що знадобиться: ручка, аркуш і таймер. З кроку 6 пишемо повноцінні тексти — не «подумки», а на папері.' },

    { type: 'example', section: 'Diagnose', title: 'What a Band 5 Answer Looks Like', sub: 'READ THIS FIRST — CAN YOU SPOT WHAT IS WRONG?',
      lines: [`18–30 year olds spent £95 on eating out. 31–50 year olds spent £120 on eating out. 51–70 year olds spent £68 on eating out. 18–30 spent £62 on video games.`, `31–50 spent £18 on video games. 51–70 spent £8 on video games. 18–30 spent more on sports than the other groups. Books were popular with 51–70 year olds.`],
      label: 'WHY THIS STOPS AT BAND 5',
      reasons: [
        ['✗  Separate sentences  ·  TASK + LEXIS', `One bar per sentence, never two groups in the same clause. The examiner wants «18–30 spent considerably more than 51–70» — in ONE sentence.`],
        ['✗  Overview  ·  TASK ACHIEVEMENT', `The text jumps straight into numbers. No overview — which group dominates overall? Task Achievement is capped at Band 5.`],
        ['✗  «spent» × 7  ·  LEXICAL RESOURCE', `The same verb seven times, plus «spent more» and «were popular» — zero comparative vocabulary. This alone holds Lexical Resource at 5.`],
        ['✗  No grouping  ·  COHERENCE', `Category by category, group by group — a guided tour of every bar. Band 7+ groups data: high-spending categories vs reversed patterns.`]],
      footnote: 'Головний інсайт модуля: стовпчикова діаграма — це змагання груп, а не список чисел. Порівнюй групи в одному реченні — це і є навик модуля.' },

    { type: 'dual', cls: 'sm', section: 'Diagnose', title: 'What the Examiner Actually Scores', sub: 'FOUR CRITERIA — 25% EACH. VOCABULARY IS ONLY ONE OF THEM.',
      cols: [
        { k: 'gold', head: 'Task Achievement  ·  25%', items: [`Band 7+ requires:`, `· a clear overview — the leading group overall + the sharpest contrast`, `· key features selected, not every bar described`, `· data that supports the overview`, `Weakest point of most Band 5 answers.`] },
        { k: 'blue', head: 'Coherence & Cohesion  ·  25%', items: [`Band 7+ requires:`, `· exactly 4 paragraphs with clear roles`, `· categories grouped logically — high-spending vs reversed patterns`, `· two groups compared in one sentence: whereas, while, unlike`, `Structure is decided before you start writing.`] },
        { k: 'red', head: 'Lexical Resource  ·  25%', items: [`Band 7+ requires:`, `· comparative structures: considerably more than, twice as much as`, `· spending verbs beyond «spent»: allocated, outspent, recorded`, `· intensity adverbs matched to the gap: slightly → markedly`, `The only criterion most courses teach. We do it in one matrix.`] },
        { k: 'green', head: 'Grammar Range & Accuracy  ·  25%', items: [`Band 7+ requires:`, `· past simple — the chart is dated 2022`, `· comparative grammar: more than, as much as, the figure for`, `· correct articles with data phrases`, `Where Ukrainian speakers lose the most «invisible» points — see p.18.`] }],
      footnote: 'Watch for the criterion tags on the following pages — every technique you learn here is mapped to the exact 25% it improves.' },

    { type: 'task', section: 'The Task', title: 'The Task', sub: 'ENTERTAINMENT SPENDING BY AGE GROUP — UNITED KINGDOM, 2022  ·  20 min  ·  150+ words  ·  4 paragraphs',
      prompt: `The bar chart below shows the average monthly spending on six entertainment categories by three age groups in the UK in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
      footnote: 'Before you read on: look at the chart for one minute and answer the four questions on the next page for yourself. Your answers become the plan of your answer. На іспиті біля стовпчиків немає цифр: значення зчитуємо по осі, тому на діаграмі вони позначені ≈.' },

    { type: 'questions', section: 'The Task', title: 'How to Read a Bar Chart in 60 Seconds', sub: 'FOUR QUESTIONS TO ANSWER BEFORE YOU WRITE A SINGLE WORD',
      items: [
        { n: '01', q: 'What do the charts show?', uk: 'Monthly spending by three age groups across six entertainment categories — groups to compare, not a timeline to narrate.', hl: { legend: true } },
        { n: '02', q: 'What is being measured?', uk: 'Pounds per month (£) for each age group — absolute values, not shares. The gap between the bars is your story.', hl: { vals: true } },
        { n: '03', q: 'Is there a time frame?', uk: 'One date: 2022. That locks your grammar: past simple — but NO trend verbs, because a single year never moves. (Bars with several years are a different animal.)', hl: {} },
        { n: '04', q: 'What are the two biggest stories? — this becomes your overview', hl0: {}, steps: [
          { t: '18–30 year olds spend the most overall,', hl: { s: ['a'], vals: false } },
          { t: 'while 31–50 lead only on eating out (≈£120);', hl: { c: [0] } },
          { t: 'the sharpest gaps are video games (≈£62 vs ≈£8)', hl: { c: [1] } },
          { t: 'and books (≈£14 vs ≈£38) — in opposite directions.', hl: { c: [3] } }] }] },

    { type: 'stack', cls: 'tight', section: 'Method', title: 'The 4-Paragraph Framework', sub: 'THE SAME SKELETON AS MODULE 1 — ONLY THE VOCABULARY ENGINE CHANGES',
      rows: [
        { k: 'blue',  tag: '§1', head: 'INTRODUCTION  ·  2 sentences  ·  ~35 words', text: `Paraphrase the prompt — what is measured, which groups, which categories. Never copy it word for word.` },
        { k: 'green', tag: '§2', head: 'OVERVIEW  ·  2–3 sentences  ·  no numbers  ·  most important', text: `The widest view: which group spends most overall + where the groups contrast most — no data, no figures.` },
        { k: 'gold',  tag: '§3', head: 'BODY 1  ·  3–4 sentences  ·  ~60 words', text: `Group A — the high-spending categories. Compare all three groups inside one sentence, with £-figures.` },
        { k: 'red',   tag: '§4', head: 'BODY 2  ·  3–4 sentences  ·  ~55 words', text: `Group B — the lower-spending + reversed categories. Open with a contrast linker: «In contrast, …».` }],
      waysLabel: 'YOUR 20 MINUTES',
      ways: [['3 min', 'read the charts, answer the 4 questions, plan the groups'], ['15 min', 'write §1 → §2 → §3 → §4, in this order, without pausing'], ['2 min', 'check tenses, articles and prepositions — nothing else']],
      footnote: 'You learned this skeleton in Module 1. Here we only re-tune §2–§4 for group comparisons — the structure never changes.' },

    { type: 'stack', section: 'Method', title: '§1 Introduction — Paraphrase, Never Copy', sub: '2 SENTENCES · ~35 WORDS · THE SAME JOB IN EVERY TASK — COHERENCE + LEXICAL RESOURCE',
      rows: [
        { k: 'bad',  head: '✗  WRONG — COPIED', text: `«The bar chart below shows the average monthly spending on six entertainment categories by three age groups in the UK in 2022.»` },
        { k: 'good', head: '✓  CORRECT — PARAPHRASED', text: `«The bar chart compares the average monthly expenditure of three age groups — 18–30, 31–50 and 51–70 year olds — across six entertainment categories in the UK in 2022.»` }],
      waysLabel: 'THE 3 MOVES THAT MAKE IT A PARAPHRASE',
      ways: [['Change the main verb', 'show → compare · illustrate · present · outline — «compare» is the most honest verb for a bar chart'], ['Change the noun phrase', 'spending → expenditure · outlay · the amount allocated to — formal synonyms that kill the repeated «spending».'], ['Add what the prompt lacks', '«by three age groups» → name them: 18–30, 31–50 and 51–70 year olds — precision the prompt only implied.']],
      footnote: 'Не аналізуй у вступі. Жодних цифр і висновків у §1 — лише перефразоване завдання. Аналіз починається з §2.' },

    { type: 'stack', section: 'Method', title: '§2 Overview — the Paragraph That Decides Your Band', sub: '2–3 SENTENCES · NO NUMBERS · THE WIDEST VIEW OF BOTH CHARTS — TASK ACHIEVEMENT',
      rows: [
        { k: 'star', head: '★  No overview → Task Achievement is capped at Band 5, no matter how good the rest is. This is the cheapest band point you will ever earn.' },
        { k: 'good', head: '✓  DO — 2–3 sentences', text: `1. Name the leading group overall: «18–30 year olds were the biggest spenders»\n2. Name the sharpest contrast: «spending patterns diverged most on video games and books»\n3. Optionally, a pattern: «younger and older groups showed opposite tendencies»` },
        { k: 'bad',  head: '✗  DO NOT', text: `· No numbers — «£120 vs £68» is body detail, not overview\n· No bar-by-bar narration — save it for §3–§4\n· No opinions or reasons — «because young people like games» is not data` },
        { k: 'gold', head: 'THE MODEL OVERVIEW — MEMORISE THE SHAPE, NOT THE WORDS', text: `«Overall, 18–30 year olds were the biggest spenders, whereas 31–50 year olds led only on eating out. However, spending patterns diverged most sharply on video games and books, where the youngest and oldest groups displayed strikingly opposite tendencies.»` }] },

    { type: 'dual', section: 'Method', title: '§3 & §4 Body Paragraphs — Group, Don\'t Narrate', sub: 'GROUP YOUR CATEGORIES LOGICALLY — NEVER GO CATEGORY BY CATEGORY — COHERENCE + TASK ACHIEVEMENT',
      cols: [
        { k: 'gold', head: 'BODY 1 (§3) — the young-spending categories', items: [`Eating out + Video games + Sports — where the under-50s lead.`, `Key data points to hit:`, `· eating out — the top category overall: around £120 / £95 / just under £70`, `· video games — the starkest gap: just over £60 vs under £20 vs under £10`, `· sports — same downward direction: about £55 → £30`, `All three groups in ONE sentence per category — never bar by bar.`] },
        { k: 'red', head: 'BODY 2 (§4) — the reversed + similar categories', items: [`Books + Cinema + Streaming — where the pattern flips.`, `Key data points to hit:`, `· books & music — reversed: the oldest lead, almost £40 vs roughly £15`, `· cinema & theatre — the oldest outspend again: about £35`, `· streaming — the exception: «broadly similar» for the two younger groups, roughly £40 each`, `Open with «In contrast, …» — the linker signals the switch of focus.`] }],
      footnote: 'ЦИФРИ — наближені: на іспиті біля стовпчиків їх немає, тому кожна цифра йде зі словом наближення (around, roughly, just over, just under, almost).\nKEY RULE — group by BEHAVIOUR, not by position on the x-axis. Grouping by age group (§3 the 18–30s, §4 the 51–70s) would also work — pick whichever structure makes your two «big stories» easiest to see.' },


    { type: 'model', section: 'Model', title: 'Model Anatomy — §1 Introduction', k: 'blue', label: '§1  INTRODUCTION',
      segs: [{ t: `The bar chart {{compares}} the {{average monthly expenditure}} of {{three age groups}} — 18–30, 31–50 and 51–70 year olds — across {{six entertainment categories}} in the UK {{in 2022}}.`, hl: { vals: false, c: [0, 1, 2, 3, 4, 5] },
        chips: [['compares', 'neutral and accurate; not «shows», not «demonstrates»'], ['average monthly expenditure', 'full paraphrase of «spending»: the examiner\'s first signal of range'], ['three age groups … six categories', 'both dimensions of the chart named in one breath'], ['in 2022', 'the date is flagged here, and the whole answer stays in past simple']] }] },

    { type: 'model', section: 'Model', title: 'Model Anatomy — §2 Overview', k: 'green', label: '§2  OVERVIEW',
      segs: [
        { t: `{{Overall, 18–30 year olds were the biggest spenders}}, whereas {{31–50 year olds led only on eating out}}.`, hl: { s: ['a'], vals: false },
          chips: [['the biggest spenders', 'the widest pattern first: one group leads overall'], ['led only on eating out', 'the main exception, named in the same sentence']] },
        { t: `However, spending patterns {{diverged most sharply}} on video games and books, where the youngest and oldest groups displayed {{strikingly opposite tendencies}}.`, hl: { c: [1, 3], vals: false },
          chips: [['diverged most sharply', 'sentence two names the contrast: where the groups disagree'], ['strikingly opposite tendencies', 'contrast IS the story; the where-clause previews the two body paragraphs'], ['zero numbers', 'patterns only. Every £ figure waits for §3–§4']] }] },

    { type: 'model', section: 'Model', title: 'Model Anatomy — §3 Body 1', k: 'gold', label: '§3  BODY 1 — WHERE THE YOUNG LEAD',
      segs: [
        { t: `Eating out attracted the highest expenditure {{across all groups}}, peaking at {{around}} £120 among 31–50 year olds — {{noticeably more than}} the {{roughly}} £95 of 18–30 year olds and {{far more than}} the {{just under}} £70 recorded by the oldest group.`, hl: { c: [0] },
          chips: [['① across all groups', 'all three bars inside ONE sentence: the #1 skill of this module'], ['② around · roughly · just under', 'the exam chart shows no exact numbers, so every figure gets an approximation word'], ['③ noticeably … far more than', 'two adverbs matched to two gaps: about a quarter and about three quarters']] },
        { t: `The starkest contrast appeared in video games: {{just over}} £60 for the youngest, {{more than three times}} the 31–50 figure, {{dwarfing}} the {{negligible}} {{under}} £10 of the oldest.`, hl: { c: [1] },
          chips: [['④ multiplier + dwarfing + negligible', 'drama vocabulary for a gap of six times and more']] }] },

    { type: 'model', section: 'Model', title: 'Model Anatomy — §4 Body 2', k: 'red', label: '§4  BODY 2 — THE PATTERN FLIPS',
      segs: [
        { t: `{{In contrast}}, books and music showed {{a reversed pattern}}: the 51–70 group spent {{almost}} £40, {{markedly higher than}} the {{roughly}} £15 recorded by 18–30 year olds.`, hl: { c: [3] },
          chips: [['① In contrast', 'opens Body 2 — the signal of the focus switch'], ['② a reversed pattern', 'names the flip in one phrase; «markedly» matches a >60% gap']] },
        { t: `Cinema followed the same direction, with the oldest group again {{outspending}} both others, while streaming was {{broadly similar}} for the two younger groups, at {{roughly}} £40 each.`, hl: { c: [4, 5] },
          chips: [['③ outspending', 'a Band 8 verb: the comparison lives inside the verb'], ['④ broadly similar … roughly £40 each', 'how to report a near-tie: one approximate figure for both']] }] },

    { type: 'full', withChart: true, section: 'Model', title: 'The Band 8 Model Answer', sub: '~180 WORDS · THE COMPLETE ANSWER — NOW READ IT AS ONE TEXT, WITH THE CHART IN VIEW' },

    { type: 'matrix', section: 'Vocabulary', title: 'The Comparative Toolkit — Size of Gap × Structure', sub: 'PICK THE CELL THAT MATCHES THE GAP — GAP SIZE × PHRASE TYPE — LEXICAL RESOURCE',
      head: ['ADVERB + COMPARATIVE', 'MULTIPLIERS', 'CONTRAST CONNECTORS'],
      rows: [
        { k: 'red', label: '● HUGE >60%', cells: [`far higher than · markedly more than · substantially greater`, `nearly double · twice as much · three times the figure for…`, `X dwarfed Y · a negligible £8 · strikingly opposite`] },
        { k: 'gold', label: '◐ LARGE 30–60%', cells: [`considerably higher · significantly more than`, `more than twice as much (only if ratio ≥ 2×)`, `whereas · while · in contrast to · unlike X`] },
        { k: 'green', label: '◔ MODERATE 15–30%', cells: [`noticeably higher · somewhat more than`, `avoid multipliers — say «a third higher»`, `compared to · compared with`] },
        { k: 'blue', label: '○ SMALL <15%', cells: [`slightly / marginally higher than`, `no multiplier — too small to dramatise`, `broadly similar · almost identical · ranging from X to Y`] }],
      footnote: 'RULE OF THUMB — gap under 2× → adverb + comparative; gap 2× or more → multiplier. And never «two times more»: English says twice as much. One sentence, both bars, honest rounding.' },

    { type: 'dual', section: 'Vocabulary', title: 'Precision — Match the Word to the Gap', sub: 'TWO HABITS THAT INSTANTLY LIFT LEXICAL RESOURCE A FULL BAND',
      cols: [
        { k: 'blue', head: 'THE ADVERB LADDER — the adverb must match the gap', items: [`under 15% → slightly / marginally\n«streaming was slightly higher among the youngest» (£42 vs £38)`, `15–30% → noticeably / somewhat\n«eating out was noticeably higher for 31–50s» (£120 vs £95)`, `30–60% → considerably / significantly\n«cinema was considerably higher among the oldest» (£35 vs £22)`, `over 60% → substantially / markedly / far\n«£38 on books — markedly higher than the £14…»`, `A wrong adverb = an inaccurate report = lower TA.`] },
        { k: 'gold', head: 'THE MULTIPLIER TABLE — ratio → phrase', items: [`1.8–2.2× → nearly double / about twice as much`, `2.2–2.6× → more than twice as much`, `2.7–3.2× → nearly three times as high`, `3.4–3.6× → nearly three and a half times`, `4× and more → four / five times the figure for…`] }],
      footnote: `Hedge honestly: nearly · about · roughly · approximately · just over / just under. 62 ÷ 8 = 7.75 → «nearly eight times», not «eight times».\n18–30 spent a lot more on video games (£62) than 51–70 (£8).  →  18–30 year olds spent nearly eight times as much on video games as the oldest group — £62 compared to a negligible £8.` },

    { type: 'quad', section: 'Grammar', title: 'Grammar Traps — with a Ukrainian Accent', sub: 'THE «INVISIBLE» POINTS — GRAMMAR RANGE & ACCURACY, 25% OF THE SCORE',
      boxes: [
        { k: 'blue', head: '1 · TENSE — past, but NO trends', items: [`2022 on the chart → past simple: spent, was, recorded.`, `But one year = nothing moves: ✗ «spending rose with age» → ✓ spending was higher among older groups`, `Рік є — минулий час є. Але rose / fell / grew — це для багатьох років. Один рік не рухається.`] },
        { k: 'gold', head: '2 · CALQUES — «у два рази більше»', items: [`✗ «in two times bigger» → ✓ twice as high / nearly double`, `✗ «two times more» → ✓ twice as much`, `Українське «у два рази» не перекладається «in times» — англійська має окреме слово: twice.`] },
        { k: 'green', head: '3 · COMPARATIVES — one marker only', items: [`✗ «more bigger» · «more higher» → ✓ far higher · considerably bigger`, `✗ «the most biggest amount» → ✓ the largest amount / the highest figure`, `Англійська терпить лише один маркер порівняння: або -er, або more — не обидва разом.`] },
        { k: 'red', head: '4 · PREPOSITIONS — the bar set', items: [`spent £62 on games · expenditure on eating out · the figure for the oldest group · compared to / with`, `✗ «spent for video games» → ✓ spent on video games`, `Прийменник — частина дієслова: «spend» без «on» — це вже інше слово.`] }] },

    { type: 'rewrite', section: 'Challenge', title: 'Upgrade Challenge — Band 5 → Band 8', sub: 'REWRITE THIS PARAGRAPH BEFORE YOU LOOK AT THE NEXT PAGE',
      html: `18–30 year olds <u>spent a lot more</u> on video games than 51–70 year olds. <u>They spent £62</u> and 51–70 spent <u>only £8</u>. 31–50 year olds spent <u>the biggest amount</u> on eating out at £120. <u>This was more than the other groups.</u>`,
      label: 'THE 5 PHRASES YOU MUST REPLACE — WRITE YOUR VERSIONS:',
      items: [['spent a lot more', '→ ______________'], ['They spent £62 … (new sentence)', '→ ______________'], ['only £8', '→ ______________'], ['the biggest amount', '→ ______________'], ['This was more than the other groups', '→ ______________']],
      footnote: 'Your task: rewrite the paragraph using the comparative toolkit (p.16) and the precision table (p.17). Keep every fact — change every phrase. And merge the separate sentences: compare inside one sentence. Не підглядай далі, доки не напишеш свій варіант.\nHint: every replacement already exists on pages 16–17. You are not inventing vocabulary — you are spending it. Remember: 2022 = past simple, but zero trend verbs.' },

    { type: 'rewrite', section: 'Challenge', title: 'Upgrade Reveal — the Band 8 Version', sub: 'COMPARE WITH YOUR VERSION — FOUR SENTENCES BECAME TWO',
      html: `18–30 year olds spent <u>nearly eight times as much</u> on video games as 51–70 year olds, <u>recording £62</u> compared to <u>a negligible £8</u>. Meanwhile, 31–50 year olds <u>dominated eating out expenditure</u> across all groups at £120 per month — <u>noticeably more than</u> the 18–30s (£95) and <u>far more than</u> the 51–70s (£68).`,
      label: 'THE UPGRADE MAP — WEAK → BAND 8:',
      items: [['spent a lot more', '↓ nearly eight times as much — an honest multiplier (62 ÷ 8 = 7.75) replaces «a lot»'], ['They spent £62 (new sentence)', '↓ recording £62 — a participle pulls the figure inside ONE comparing sentence'], ['only £8', '↓ a negligible £8 — one Band 8 adjective grades the size of the bar'], ['the biggest amount', '↓ dominated eating out expenditure — a verb with real meaning + paraphrase of «spending»'], ['This was more than the other groups', '↓ noticeably more than … and far more than … — adverbs matched to each gap, both rivals named']],
      footnote: 'Four sentences became two — and every comparison now lives inside one sentence. Your version differs? Good. Check: multiplier honest, adverbs matched to gaps?' },

    { type: 'task', section: 'Practice', title: 'Practice Task 2 — Exam Conditions', sub: 'SAME RULES, NEW CHART — GROUP BY WHO LEADS, NOT ACTIVITY BY ACTIVITY',
      chart: { type: 'bar', approx: true, fmt: 'approx', title: 'Weekly leisure hours by gender, UK 2022', yTitle: 'hours per week', yMax: 18, yStep: 2, cats: ['Watching TV', 'Reading', 'Sport', 'Socialising', 'Gaming'],
        series: [{ id: 'm', name: 'Men', color: '#2C6E8A', data: [15, 4, 8, 9, 10] }, { id: 'w', name: 'Women', color: '#B8527E', data: [13, 7, 4, 8, 3] }] },
      prompt: `The bar chart below shows the average number of hours per week that men and women in the UK spent on five leisure activities in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
      footnote: 'EXAM RULES: Set a 20:00 timer — stop when it rings  ·  3 min: answer the four questions from p.6  ·  Group by behaviour: where men lead vs where the pattern flips  ·  15 min: write §1 → §2 → §3 → §4  ·  2 min: past simple + zero trend verbs' },

    { type: 'quad', cls: 'chk', section: 'Practice', title: 'Check Yourself Like an Examiner', sub: '8 YES/NO QUESTIONS — ONE PAIR PER CRITERION — SCORE BEFORE YOU PEEK AT THE SAMPLE',
      boxes: [
        { k: 'gold', head: 'TASK ACHIEVEMENT  ·  25%', items: [`☐  Is there an overview with no numbers?`, `☐  Does it name the biggest pattern AND the sharpest contrast (gaming)?`] },
        { k: 'blue', head: 'COHERENCE & COHESION  ·  25%', items: [`☐  Exactly 4 paragraphs, each with its own job?`, `☐  Body grouped by behaviour (where men lead vs the flip), not activity by activity?`] },
        { k: 'red', head: 'LEXICAL RESOURCE  ·  25%', items: [`☐  At least one honest multiplier (twice as much, three times higher)?`, `☐  Adverbs matched to gap size — no «slightly» for a 7-hour gap?`] },
        { k: 'green', head: 'GRAMMAR  ·  25%', items: [`☐  Past simple throughout (2022) — with zero trend verbs?`, `☐  «twice as much», never «two times more»? Comparatives with ONE marker?`] }],
      footnote: '7–8 «yes» → Band 7+ material. Any «no» → rewrite that paragraph before you open the sample answer.' },

    { type: 'stack', section: 'Practice', title: 'Sample Band 8 Answer — Compare After Writing', sub: 'COMPARE DECISIONS, NOT WORDS — YOUR VERSION CAN DIFFER AND STILL BE BAND 8',
      rows: [
        { k: 'blue',  tag: '§1', head: 'INTRODUCTION', text: `The bar chart compares the average number of hours per week that men and women in the UK devoted to five leisure activities in 2022.` },
        { k: 'green', tag: '§2', head: 'OVERVIEW', text: `Overall, men spent more time on most activities, with women leading only in reading. The sharpest contrast appeared in gaming, where the male figure was more than three times higher.` },
        { k: 'gold',  tag: '§3', head: 'BODY 1 — WHERE MEN LEAD', text: `Watching TV was the most popular activity for both sexes, at 15 hours for men and 13 for women. The biggest gap, however, appeared in gaming: men devoted 10 hours a week to it, more than three times the female figure of just 3 hours. Men also spent twice as much time on sport — 8 hours compared to 4 — making gaming and sport the most gender-skewed activities.` },
        { k: 'red',   tag: '§4', head: 'BODY 2 — WHERE THE PATTERN FLIPS', text: `Reading showed a reversed pattern, with women spending 7 hours a week on it, nearly double the male figure of 4. Socialising was the one broadly similar category: 9 hours for men against 8 for women.` }],
      footnote: 'Compare the decisions: Did you group by who leads, not activity by activity? Is there at least one multiplier? Past simple everywhere — with zero trend verbs?' },

    { type: 'end2', section: 'Module 3 Complete', title: 'What You Now Own', sub: 'MODULE 3 COMPLETE  ·  Key vocabulary from this module:',
      rows: [
        ['01', 'The #1 bar-chart rule: compare inside one sentence — a sentence per bar is Band 5'],
        ['02', 'The comparative toolkit: adverb + comparative matched to the gap, honest multipliers, contrast connectors'],
        ['03', 'The dated-bar nuance: 2022 gives you past simple, but one year means nothing moves — no trend verbs'],
        ['●', 'slightly · noticeably · considerably · markedly more than'],
        ['◐', 'twice as much · nearly double · three times the figure for'],
        ['◔', 'whereas · while · in contrast · compared to'],
        ['↔', 'dominated · outspent · a negligible £8 · broadly similar']],
      nextLabel: 'NEXT — MODULE 4', next: [['Tables', 'Tables are bar charts in disguise: the same comparisons, but no picture to guide your eye — you must find the pattern in raw numbers. Your comparative toolkit does all the heavy lifting.'], ['Vocabulary pack PDF', 'englishkurilets.com'], ['Telegram', '@english_rrs · @ielts_ukrainians']],
      links: [{ label: 'Диктант: слухай і друкуй →', url: '../dictation/index.html?t=bar-1' }, { label: 'Пишемо разом: відповідь на екзаменних діаграмах →', url: '../index.html?t=bar-1' }] }
  ]
};
