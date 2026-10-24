/* Module 1 · Line Graphs. Тексти слайдів дослівно з презентації Олени (Module1_LineGraphs_Lesson.pptx). */
window.DECK = {
  meta: {
    docTitle: 'Module 1 · Line Graphs · презентація',
    brandSub: 'Write It Right · Module 1: Line Graphs',
    credit: 'Elena Kurilets  ·  @english_rrs  ·  englishkurilets.com',
    where: 'IELTS Writing Task 1  ·  Module 1: Line Graphs',
    next: { label: 'Пишемо разом →', url: '../index.html?t=line-1' }
  },
  chart: {
    title: 'Monthly Revenue of Jewellery & Co.',
    yTitle: 'Thousands of euros', xTitle: 'Month', yMax: 90, yStep: 10,
    xLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      { id: 's1', name: 'Shop 1', color: '#3a5fcd', marker: 'circle',   data: [17, 16, 24, 28, 38, 40, 40, 38, 42, 46, 50, 50] },
      { id: 's2', name: 'Shop 2', color: '#D6559C', marker: 'diamond',  data: [33, 33, 32, 35, 38, 38, 45, 48, 52, 58, 58, 62] },
      { id: 's3', name: 'Shop 3', color: '#E58A1F', marker: 'triangle', data: [72, 60, 52, 42, 40, 40, 45, 55, 62, 68, 72, 79] },
      { id: 's4', name: 'Shop 4', color: '#2E9B5F', marker: 'square',   data: [30, 28, 28, 30, 32, 32, 20, 20, 22, 28, 30, 32] }
    ]
  },
  slides: [
    { type: 'title', module: 'MODULE 1', kicker: 'IELTS Writing Task 1', title: 'Line Graphs',
      sub: 'How to describe trends with precision and reach Band 7+ vocabulary',
      items: ['→  The Task & 4-Paragraph Structure', '→  How to write Introduction & Overview', '→  Language of trends, speed & time', '→  Band 7 Model Answer — annotated', '→  Upgrade Challenge'] },

    { type: 'section', num: '1', title: 'The Problem', sub: 'Why most students stay stuck at Band 5–6', section: 'The Problem' },

    { type: 'example', section: 'The Problem', title: 'What a Band 5 Answer Looks Like', sub: 'Can you spot what is wrong?',
      lines: ['Shop 3 started at 72,000 euros. It then went down to 40,000 euros.', 'After that it went up again and got to 79,000 euros in December.', 'Shop 2 also went up slowly from 33,000 to 62,000 euros.', 'Shop 1 went up from 17,000 to 50,000 euros.'],
      label: 'WHY THIS IS BAND 5:',
      reasons: [['✗  Vocabulary', '«went up/down» 5 times — zero lexical range'], ['✗  Adverbs', 'No speed words — examiner can\'t see gradation'], ['✗  Structure', 'No Overview paragraph — instant Band 5 ceiling'], ['✗  Precision', '«a bit», «a little» — vague, informal']] },

    { type: 'bands', section: 'The Problem', title: 'What the Examiner Is Actually Looking For',
      label: 'EXAMINER MARKING CRITERIA — LEXICAL RESOURCE (25% of your score)',
      quote: '"Uses a wide range of vocabulary with very natural and sophisticated control of lexical features."',
      cols: [
        { band: 'Band 5', k: 'bad',   items: ['went up', 'increased a lot', 'was high'] },
        { band: 'Band 6', k: 'gold',  items: ['increased significantly', 'remained stable', 'showed a rise'] },
        { band: 'Band 7', k: 'blue',  items: ['rose steadily', 'fell sharply', 'fluctuated slightly'] },
        { band: 'Band 8', k: 'green', items: ['surged dramatically', 'bottomed out at', 'mirroring the trajectory'] }] },

    { type: 'section', num: '2', title: 'The Task', sub: 'Jewellery & Co. — Monthly Revenue 2008', section: 'The Task' },

    { type: 'task', section: 'The Task', title: 'The Task',
      prompt: 'The line graph below shows the monthly revenue in 2008 of four shops that belong to a jewellery company. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.' },

    { type: 'questions', section: 'The Task', title: 'How to Read a Line Graph in 60 Seconds', sub: 'Чотири питання — перш ніж написати перше слово',
      items: [
        { n: '01', q: 'Who / what are the subjects?', uk: 'Що / хто зображений на графіку?', hl: { legend: true } },
        { n: '02', q: 'What does the y-axis show?', uk: 'Що вимірюється і в яких одиницях?', hl: { axes: 'y' } },
        { n: '03', q: 'What is the time period?', uk: 'Який часовий проміжок охоплює графік?', hl: { axes: 'x' } },
        { n: '04', q: 'What are the TWO biggest trends?', uk: 'Найбільше зростання? Найбільше падіння?', hl: { s: ['s3', 's1'], pts: { s3: [0, 3, 11], s1: [0, 11] } } }] },

    { type: 'section', num: '3', title: 'The 4-Paragraph Structure', sub: 'The foundation of every Band 7+ answer', section: '4-Paragraph Structure' },

    { type: 'stack', section: '4-Paragraph Structure', title: 'The 4-Paragraph Framework', sub: 'Every Task 1 answer — always exactly this shape',
      rows: [
        { k: 'blue',  tag: '§1', head: 'INTRODUCTION', meta: '2 sentences · ~35 words', text: 'Paraphrase the prompt. Never copy the question.' },
        { k: 'green', tag: '§2', head: 'OVERVIEW', meta: '2–3 sentences · ~45 words · MOST IMPORTANT', text: 'The 2–3 biggest trends. No specific numbers.' },
        { k: 'gold',  tag: '§3', head: 'BODY 1', meta: '3–4 sentences · ~60 words', text: 'Detailed description. Specific data for Group A.' },
        { k: 'red',   tag: '§4', head: 'BODY 2', meta: '3–4 sentences · ~60 words', text: 'Detailed description. Specific data for Group B.' }] },

    { type: 'stack', section: '4-Paragraph Structure', title: '§1  Introduction — Paraphrase, Never Copy', sub: '2 sentences  ·  approximately 35 words  ·  always the same task',
      rows: [
        { k: 'bad',  head: '✗  WRONG — COPIED', text: '"The line graph below shows the monthly revenue in 2008 of four shops that belong to a jewellery company."' },
        { k: 'good', head: '✓  CORRECT — PARAPHRASED', text: '"The line graph illustrates the monthly revenue of four shops belonging to a jewellery company throughout 2008, with figures measured in thousands of euros."' }],
      waysLabel: 'THREE WAYS TO PARAPHRASE:',
      ways: [['Change the main verb  —', 'shows → illustrates · depicts · presents · demonstrates'], ['Change the subject  —', 'The graph → The data · The chart · The diagram'], ['Restructure the sentence  —', '"shows X doing Y"  →  "provides information about how X changed"']] },

    { type: 'stack', section: '4-Paragraph Structure', title: '§2  Overview — The Most Important Paragraph', sub: '2–3 sentences  ·  no data, no numbers  ·  the widest view of the whole graph',
      rows: [
        { k: 'star', head: '★  If you miss the Overview, you CANNOT score above Band 5 for Task Achievement.' },
        { k: 'good', head: '✓  DO: Name the dominant trend', text: '"Overall, Shop 3 consistently generated the highest revenue throughout the period..."' },
        { k: 'good', head: '✓  DO: Name the contrasting trend', text: '"...while Shop 4 recorded the lowest figures throughout."' },
        { k: 'bad',  head: '✗  DO NOT: Include specific numbers', text: '"Overall, Shop 3 started at 72,000 euros..."  ←  This is BODY detail, not overview.' }] },

    { type: 'section', num: '4', title: 'Language of Trends', sub: 'The words that move you from Band 5 to Band 7', section: 'Vocabulary of Trends' },

    { type: 'cols', section: 'Vocabulary of Trends', title: 'Trend Verbs — Up, Down, Stable', sub: 'Дієслова для опису тенденцій — використовуй їх замість «went up / went down»',
      cols: [
        { k: 'good', head: '↑  UPWARD', items: ['rose', 'increased', 'grew', 'climbed', 'went up', 'surged', 'soared', 'jumped'] },
        { k: 'bad',  head: '↓  DOWNWARD', items: ['fell', 'decreased', 'dropped', 'declined', 'went down', 'plummeted', 'dipped', 'sank'] },
        { k: 'blue', head: '→  STABLE', items: ['remained stable', 'levelled off', 'plateaued', 'stayed constant', 'fluctuated', 'showed little change'] }] },

    { type: 'levels', section: 'Vocabulary of Trends', title: 'Speed of Change — Adverbs & Adjectives', sub: 'Прислівники та прикметники для опису швидкості зміни',
      rows: [
        { k: 'dark',  level: 'EXTREME',  verb: 'dramatically / steeply',     noun: 'dramatic / steep' },
        { k: 'red',   level: 'STRONG',   verb: 'sharply / significantly',    noun: 'sharp / significant' },
        { k: 'gold',  level: 'MODERATE', verb: 'considerably / noticeably',  noun: 'considerable / notable' },
        { k: 'green', level: 'GENTLE',   verb: 'steadily / gradually',       noun: 'steady / gradual' },
        { k: 'blue',  level: 'SLIGHT',   verb: 'slightly / marginally',      noun: 'slight / marginal' }] },

    { type: 'patterns', section: 'Vocabulary of Trends', title: 'Two Ways to Write the Same Idea', sub: 'Два типи речень — чергуй їх, щоб уникнути повторення',
      cards: [
        { k: 'blue',  head: 'PATTERN A  —  Subject + Verb + Adverb', html: 'Sales <u>rose</u> <u>sharply</u> between January and March.', notes: ['subject', 'verb', 'adverb'] },
        { k: 'green', head: 'PATTERN B  —  There was + Article + Adjective + Noun + in + Subject', html: 'There was <u>a sharp rise</u> in sales between January and March.' }],
      note: '★  Чергуй Pattern A і Pattern B — це одразу підвищує Grammatical Range & Accuracy' },

    { type: 'cols', bullets: true, section: 'Vocabulary of Trends', title: 'Language of Time', sub: 'Мова часу — як прив\'язати дані до часового проміжку',
      cols: [
        { k: 'blue',  head: 'FROM … TO …  /  BETWEEN … AND …', items: ['from 1990 to 2020', 'between January and June', 'from the beginning to the end of the period'] },
        { k: 'green', head: 'OVER THE PERIOD  /  THROUGHOUT', items: ['over the period shown', 'throughout the year', 'across the entire time frame'] },
        { k: 'gold',  head: 'BY + YEAR  /  IN + YEAR', items: ['by 2020  (= at the end of 2020)', 'in 2010  (= during 2010)', 'by December  /  by the end of the period'] },
        { k: 'red',   head: 'AFTER + POINT  /  FOLLOWING + NOUN', items: ['after reaching a peak in June', 'following a sharp rise in Q1', 'after remaining stable for two years'] }] },

    { type: 'section', num: '5', title: 'The Model Answer', sub: 'Band 7 response — annotated and explained', section: 'Model Answer' },

    { type: 'model', section: 'Model Answer', title: '§1 — Introduction', sub: 'Читай разом з Оленою — помічай виділені слова', k: 'blue', label: '§1  INTRODUCTION',
      segs: [{ t: 'The line graph {{illustrates}} the monthly revenue of four shops belonging to a jewellery company throughout 2008, with figures measured in thousands of euros.', hl: {}, chips: [['illustrates', '= professional alt. to «shows»']] }] },

    { type: 'model', section: 'Model Answer', title: '§2 — Overview', sub: 'Читай разом з Оленою — помічай виділені слова', k: 'green', label: '§2  OVERVIEW',
      segs: [
        { t: 'Overall, Shop 3 {{consistently}} generated the highest revenue across the period, while Shop 4 recorded the lowest figures throughout.', hl: { s: ['s3', 's4'] }, chips: [['consistently', '= avoids «was always»']] },
        { t: 'Notably, three of the four shops followed a clear {{upward trajectory}} by December, whereas Shop 4\'s performance remained {{broadly flat}}.', hl: { s: ['s1', 's2', 's3', 's4'], pts: { s1: [11], s2: [11], s3: [11], s4: [11] } }, chips: [['upward trajectory', '= avoids «went up»'], ['broadly flat', '= Band 7 phrasing']] }] },

    { type: 'model', section: 'Model Answer', title: '§3 — Body 1', sub: 'Тут — конкретні дані, цифри, порівняння', k: 'gold', label: '§3  BODY 1  —  Shop 3 & Shop 1',
      segs: [
        { t: 'Shop 3 began the year as the top performer, opening at approximately 72,000 euros in January', hl: { s: ['s3'], pts: { s3: [0] } } },
        { t: 'before falling sharply to around 42,000 euros by April.', hl: { s: ['s3'], pts: { s3: [0, 3] } } },
        { t: 'It subsequently surged dramatically, climbing back to peak at roughly 79,000 euros in December.', hl: { s: ['s3'], pts: { s3: [3, 11] } } },
        { t: 'Shop 1, by contrast, showed a steady upward trend throughout, rising from just 17,000 euros to approximately 50,000 euros by year end.', hl: { s: ['s1'], pts: { s1: [0, 11] } } }] },

    { type: 'model', section: 'Model Answer', title: '§4 — Body 2', sub: 'Тут — конкретні дані, цифри, порівняння', k: 'red', label: '§4  BODY 2  —  Shop 2 & Shop 4',
      segs: [
        { t: 'Shop 2 rose steadily from 33,000 euros in January to 62,000 euros in December,', hl: { s: ['s2'], pts: { s2: [0, 11] } } },
        { t: 'with only minor fluctuations along the way.', hl: { s: ['s2'], pts: { s2: [0, 11] } } },
        { t: 'Shop 4, however, demonstrated a markedly different pattern:', hl: { s: ['s4'] } },
        { t: 'after declining from 30,000 to 20,000 euros mid-year,', hl: { s: ['s4'], pts: { s4: [0, 6] } } },
        { t: 'it recovered only marginally, finishing at around 32,000 euros — the lowest of all four outlets.', hl: { pts: { s1: [11], s2: [11], s3: [11], s4: [11] } } }] },

    { type: 'section', num: '6', title: 'Upgrade Challenge', sub: 'Band 5 → Band 7: rewrite these sentences', section: 'Upgrade Challenge' },

    { type: 'rewrite', section: 'Upgrade Challenge', title: 'PAUSE  ⏸  — Rewrite These Phrases', sub: 'Заміни виділені слова на vocabulary Band 7 — відповіді на наступному слайді',
      html: 'Shop 3 started at 72,000 euros in January, and then <u>went down</u> to about 40,000 euros. After that, it <u>went back up</u> and <u>reached</u> 79,000 euros by December. Shop 2 <u>went up slowly</u> from 33,000 to 62,000 euros. It <u>didn\'t change much</u> along the way.',
      label: 'REPLACE THESE 5 PHRASES:',
      items: [['went down', 'fell ___ / ___ out'], ['went back up', '___ dramatically'], ['reached', '___ at'], ['went up slowly', 'rose ___'], ['didn\'t change much', 'with only minor ___']] },

    { type: 'answers', section: 'Upgrade Challenge', title: 'Upgrade Challenge — Answers', sub: 'Ось як звучить та сама відповідь на Band 7',
      rows: [['✗  went down', '✓  fell sharply / bottomed out', '← sharply = adverb of speed'], ['✗  went back up', '✓  surged dramatically', '← surged = sudden powerful rise'], ['✗  reached', '✓  peaked at', '← peaked at = hit the highest point'], ['✗  went up slowly', '✓  rose steadily / gradually', '← steadily = slow consistent change'], ['✗  didn\'t change much', '✓  with only minor fluctuations', '← fluctuations = small irregular changes']] },

    { type: 'check', section: 'Upgrade Challenge', title: 'Self-Check Before You Submit', sub: 'Перевір свою відповідь за цим чеклистом перед тим як здавати',
      items: [['§1', 'Introduction — ', 'Did I paraphrase — not copy — the task?'], ['§2', 'Overview — ', 'Do I have 2 main trends WITHOUT specific numbers?'], ['§3', 'Body 1 — ', 'Did I use adverbs AND specific data?'], ['§4', 'Body 2 — ', 'Did I compare groups or contrast trends?'], ['V', 'Vocabulary — ', 'Did I avoid repeating «went up / went down» more than once?'], ['G', 'Grammar — ', 'Did I use both Pattern A (verb+adverb) AND Pattern B (noun phrase)?'], ['W', 'Word count — ', 'Is my response at least 150 words?']] },

    { type: 'end', title: 'Module 1 complete.', text: 'Now listen to the audio dictation, write the model answer, and check yourself.', dl: 'Download your PDF phrase sheet →  Task1_Module1_LineGraph_Phrases.pdf' }
  ]
};
