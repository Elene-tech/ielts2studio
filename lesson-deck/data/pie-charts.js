/* Module 2 · Pie Charts. Тексти слайдів дослівно з презентації Олени (IELTS_Module2_PieCharts_solar.pptx).
   Дані діаграм зчитано з її картинки (слайд 8): див. примітку про суму 104% у супровідному повідомленні. */
window.DECK = {
  meta: {
    docTitle: 'Module 2 · Pie Charts · презентація',
    brandSub: 'Write It Right · Module 2: Pie Charts',
    credit: 'Elena Kurilets  ·  @english_rrs  ·  @ielts_ukrainians  ·  englishkurilets.com',
    where: 'IELTS Writing Task 1  ·  Module 2: Pie Charts',
    next: { label: 'Пишемо разом →', url: '../index.html?t=pie-1' },
    dict: '../dictation/index.html?t=pie-1'
  },
  chart: {
    type: 'pie',
    title: 'Household electricity use by purpose',
    charts: [
      { id: 'solar', name: 'With Solar', slices: [
        { id: 'elec',   label: 'Electronics & appliances', value: 24, color: '#C0942E' },
        { id: 'water',  label: 'Water heating',            value: 22, color: '#1E5C45' },
        { id: 'space',  label: 'Space cooling / heating',  value: 18, color: '#3E9E7A' },
        { id: 'fridge', label: 'Refrigeration',            value: 12, color: '#8E8E8E' },
        { id: 'ev',     label: 'EV charging',              value: 15, color: '#BE3A24' },
        { id: 'light',  label: 'Lighting',                 value: 9,  color: '#C9C9C9', txt: '#333' } ] },
      { id: 'non', name: 'Without Solar', slices: [
        { id: 'elec',   label: 'Electronics & appliances', value: 15, color: '#C0942E' },
        { id: 'water',  label: 'Water heating',            value: 31, color: '#1E5C45' },
        { id: 'space',  label: 'Space cooling / heating',  value: 27, color: '#3E9E7A' },
        { id: 'fridge', label: 'Refrigeration',            value: 16, color: '#8E8E8E' },
        { id: 'ev',     label: 'EV charging',              value: 11, color: '#BE3A24' } ] }
    ]
  },
  slides: [
    { type: 'title', module: 'MODULE 2', kicker: 'IELTS Writing Task 1', title: 'Pie Charts',
      sub: 'How to describe proportions with precision and reach Band 7–8 vocabulary',
      items: ['📊  The Task & Charts', '⚠️  The #1 Grammar Mistake', '🏗  4-Paragraph Structure', '✍  Band 8 Model Answer', '📚  25+ Vocabulary Items', '⬆  Band 5 → Band 8 Upgrade'] },

    { type: 'section', num: '1', title: 'The Problem', sub: 'Why most students lose marks on pie charts', section: 'The Problem' },

    { type: 'example', section: 'The Problem', title: 'What a Band 5 Answer Looks Like', sub: 'Can you spot what is wrong?',
      lines: ['Electronics and appliances had 24% in solar homes. It went down to 15% in non-solar homes. Water heating went up from 22% to 31%. Space cooling also went up a lot from 18% to 27%. EV charging decreased from 15% to 11%.'],
      label: 'WHY THIS IS BAND 5:',
      reasons: [['✗  Trend Language', 'Uses "went up", "went down", "got bigger" — WRONG for static pie charts comparing two groups. There is no time axis.'], ['✗  No Overview', 'Jumps straight to data — misses the overview paragraph, which is the highest-scoring element.'], ['✗  No Comparisons', 'Lists figures without comparing groups. Examiners want contrasts: "higher than", "compared to", "considerably more".'], ['✗  Precision', 'No proportion language — "account for", "constitute", "represent" are absent. Reads like a list, not an analysis.']] },

    { type: 'dual', section: 'The Problem', title: 'The #1 Mistake — Using Trend Language', sub: 'This is the most penalised error in pie chart tasks',
      top: { k: 'bad', head: '⚠  CRITICAL RULE', text: 'Pie charts show proportions at a point in time — they do NOT show change over time.\nNEVER use trend verbs: increased, decreased, rose, fell, grew, dropped, went up, went down.' },
      cols: [
        { k: 'bad', head: '✗  WRONG — Never write this', items: ['• Electronics and appliances increased from 15% to 24%.', '• Water heating fell from 31% to 22%.', '• Space cooling dropped dramatically.', '• EV charging rose slightly.'] },
        { k: 'good', head: '✓  CORRECT — Write this instead', items: ['• Electronics and appliances accounted for a higher proportion in solar homes (24%) than in non-solar homes (15%).', '• Water heating represented a larger share in non-solar homes (31%) compared to solar homes (22%).', '• Space cooling constituted only 18% in solar homes, far below the 27% in non-solar homes.'] }] },

    { type: 'dual', section: 'The Problem', title: 'The ONE Exception — When Trend Language IS Allowed', sub: 'Know the difference between two types of pie chart tasks',
      cols: [
        { k: 'bad', head: 'TWO SEPARATE CHARTS (different groups)', items: ['This task — Solar Homes vs Non-Solar Homes', 'Both charts = same time, different categories.', 'No time changes → NO trend language.', 'Use: comparison language only.\n"accounted for more" · "a higher share" · "compared to" · "whereas"'] },
        { k: 'good', head: 'SAME CATEGORY ACROSS TIME (e.g. 2010 vs 2020)', items: ['Example: Energy sources in Country X in 2000 and 2020.', 'Different time points = REAL change over time.', 'Trend language IS appropriate here.', '"Coal\'s share fell from 45% to 20%."\n"Renewables grew from 5% to 35% of total energy."'] }],
      note: 'EXAMINER TIP  —  Always read the task carefully. Ask: are these two charts showing the SAME moment or DIFFERENT moments in time? Your answer determines your vocabulary choices.' },

    { type: 'bands', section: 'The Problem', title: 'What the Examiner Is Actually Looking For',
      label: 'EXAMINER MARKING CRITERIA — LEXICAL RESOURCE (25% of your score)',
      quote: '"Uses a wide range of vocabulary with very natural and sophisticated control of lexical features. Rare minor errors occur only as slips."',
      cols: [
        { band: 'Band 5', k: 'bad',   items: ['went up/down', 'increased a lot', 'was the biggest'] },
        { band: 'Band 6', k: 'gold',  items: ['the largest share', 'more than', 'showed a rise'] },
        { band: 'Band 7', k: 'blue',  items: ['accounted for', 'a higher proportion', 'compared to'] },
        { band: 'Band 8', k: 'green', items: ['constituted over half', 'dwarfed by', 'the dominant category'] }] },

    { type: 'section', num: '2', title: 'The Task', sub: 'Electricity Use: Solar vs Non-Solar Homes', section: 'The Task' },

    { type: 'task', section: 'The Task', title: 'The Task',
      prompt: 'The charts below show household electricity use in a mid-sized coastal town, comparing homes with rooftop solar panels to homes without. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.' },

    { type: 'questions', section: 'The Task', title: 'How to Read Two Pie Charts in 60 Seconds', sub: 'Four questions to answer before you write a single word',
      items: [
        { n: '01', q: 'What do the charts show?', uk: 'Electricity consumption by end use, compared between solar and non-solar homes', hl: { sl: { solar: 'all', non: 'all' }, legend: true } },
        { n: '02', q: 'Are these time-based charts?', uk: 'NO — both charts show the same moment. Use comparison language, NOT trend verbs.', hl: { sl: { solar: 'all', non: 'all' } } },
        { n: '03', q: 'What is the dominant category in each group?', uk: 'Water heating dominant without solar (31%); electronics & appliances dominant with solar (24%)', hl: { sl: { solar: ['elec'], non: ['water'] } } },
        { n: '04', q: 'What are the key differences between groups?', uk: 'Electronics & appliances higher with solar; water heating & space cooling much higher without solar', hl: { sl: { solar: ['elec', 'ev'], non: ['water', 'space'] } } }] },

    { type: 'section', num: '3', title: 'The 4-Paragraph Structure', sub: 'The foundation of every Band 7+ Task 1 answer', section: '4-Paragraph Structure' },

    { type: 'stack', section: '4-Paragraph Structure', title: 'The 4-Paragraph Framework', sub: 'Every Task 1 answer — always exactly this shape',
      rows: [
        { k: 'blue',  tag: '§1', head: 'INTRODUCTION', meta: '2 sentences  ·  ~35 words', text: 'Paraphrase the prompt. Never copy the question.' },
        { k: 'green', tag: '§2', head: 'OVERVIEW', meta: '2–3 sentences  ·  ~45 words  ·  MOST IMPORTANT PARAGRAPH', text: 'The dominant category in each group. Key similarities and differences.' },
        { k: 'gold',  tag: '§3', head: 'BODY 1', meta: '3–4 sentences  ·  ~60 words', text: 'Detailed comparison of top categories. Specific percentages for solar homes.' },
        { k: 'red',   tag: '§4', head: 'BODY 2', meta: '3–4 sentences  ·  ~60 words', text: 'Detailed comparison of smaller categories. Specific percentages for non-solar homes.' }] },

    { type: 'stack', section: '4-Paragraph Structure', title: '§1  Introduction — Paraphrase, Never Copy', sub: '2 sentences  ·  approximately 35 words  ·  always the same task',
      rows: [
        { k: 'bad',  head: '✗  WRONG — COPIED', text: '"The two pie charts below show the breakdown of household electricity consumption in homes with and without solar panels."' },
        { k: 'good', head: '✓  CORRECT — PARAPHRASED', text: '"The two pie charts illustrate the proportion of household electricity devoted to different uses in homes with rooftop solar panels compared to homes without."' }],
      waysLabel: 'THREE WAYS TO PARAPHRASE:',
      ways: [['Change the main verb', 'shows → illustrates  ·  depicts  ·  presents  ·  compares'], ['Change the subject/noun', 'The charts → The data  ·  The diagrams  ·  The figures'], ['Change the structure', '"show the breakdown of electricity use" → "illustrate the distribution of consumption"  ·  "compare how households allocate their energy use"']] },

    { type: 'stack', section: '4-Paragraph Structure', title: '§2  Overview — The Most Important Paragraph', sub: '2–3 sentences  ·  no specific data  ·  the widest view of both charts',
      rows: [
        { k: 'star', head: '⭐  The overview is worth more than any other paragraph. Missing it means you CANNOT score above Band 5 for Task Achievement.' },
        { k: 'good', head: '✓  DO: Name the dominant category on each device', text: '"Overall, water heating and space cooling or heating together accounted for the majority of electricity use in households without solar panels..."' },
        { k: 'good', head: '✓  DO: State the biggest contrast between the two devices', text: '"...homes with solar panels devoted a noticeably larger share of their consumption to electronics and appliances."' },
        { k: 'bad',  head: '✗  DO NOT: Include specific percentages in the overview', text: '"Overall, water heating made up 31% without solar and electronics 24% with solar..."  ←  This belongs in the BODY.' }] },

    { type: 'dual', section: '4-Paragraph Structure', title: '§3 & §4  Body Paragraphs — The Detail', sub: 'One chart per body paragraph — rank the categories, do not just list them',
      cols: [
        { k: 'gold', head: 'BODY 1  (§3)', items: ['• Describe the solar-panel homes chart in full', '• Name the largest category first, then rank the rest', '• Use specific percentages with proportion language', '• Group same-value categories together (e.g. "each consumed...")'] },
        { k: 'red',  head: 'BODY 2  (§4)', items: ['• Describe the non-solar homes chart in full', '• Open with contrast language ("By contrast...")', '• Combine two categories into one synthesis claim', '• Handle any data gaps gracefully, if one appears'] }],
      note: '💡  KEY RULE  —  Since each paragraph covers one full chart, keep the ranking order clear — largest to smallest — so the paragraph reads as an analysis, not a list.' },

    { type: 'section', num: '4', title: 'The Model Answer', sub: 'Band 8 response — annotated and explained', section: 'Model Answer' },

    { type: 'full', section: 'Model Answer', title: 'Full Band 8 Model Answer', sub: '210 words  ·  4 paragraphs  ·  logical structure  ·  Band 8 vocabulary' },

    { type: 'model', section: 'Model Answer', title: '§1 — Introduction: Breakdown', k: 'blue', label: '§1  INTRO',
      segs: [{ t: 'The two pie charts {{compare}} how household electricity {{is consumed}} across different purposes in a mid-sized coastal town, distinguishing between homes equipped with rooftop solar panels and those without.', hl: { sl: { solar: 'all', non: 'all' } }, chips: [['compare how … is consumed', '= paraphrase of "show how … is used"']] }] },

    { type: 'model', section: 'Model Answer', title: '§2 — Overview: Breakdown', k: 'green', label: '§2  OVERVIEW',
      segs: [
        { t: 'Overall, water heating and space cooling or heating together {{accounted for the majority}} of electricity use in households without solar panels.', hl: { sl: { non: ['water', 'space'] } }, chips: [['accounted for the majority', '= Band 8 synthesis phrase, combines two categories into one claim']] },
        { t: 'However, homes with solar panels {{devoted a noticeably larger share}} of their consumption to electronics and appliances, whereas {{properties without solar installations}} {{relied more heavily on}} water heating and climate control.', hl: { sl: { solar: ['elec'], non: ['water', 'space'] } }, chips: [['devoted a noticeably larger share', '= avoids "used more" — sophisticated comparative'], ['relied more heavily on', '= Band 7+ phrase for describing dependence on a category'], ['properties without solar installations', '= precise noun phrase — avoids repeating "homes" for the third time']] }] },

    { type: 'model', section: 'Model Answer', title: '§3 Body 1 — The Solar-Panel Homes: Breakdown', k: 'gold', label: '§3  BODY 1',
      segs: [
        { t: 'In homes with rooftop solar panels, electronics and appliances {{represented}} {{the single largest category}}, at 24%.', hl: { sl: { solar: ['elec'] } }, chips: [['① represented', 'standard proportion verb for the top category'], ['② the single largest category', 'Band 8 phrase for the top-ranked item']] },
        { t: 'Water heating and space cooling or heating were {{the next most significant}} uses, at 22% and 18% {{respectively}}.', hl: { sl: { solar: ['water', 'space'] } }, chips: [['③ the next most significant', 'ranking connector for the second-tier items'], ['④ respectively', 'efficient way to pair two figures with two nouns already named']] },
        { t: 'Refrigeration and EV charging {{consumed}} 12% and 15% of the total, while lighting was {{the smallest contributor}}, at just 9%.', hl: { sl: { solar: ['fridge', 'ev', 'light'] } }, chips: [['⑤ consumed', 'verb variety — avoids repeating "represented" and "made up"'], ['⑥ the smallest contributor', 'Band 8 phrase for the bottom-ranked item']] }] },

    { type: 'model', section: 'Model Answer', title: '§4 Body 2 — The Non-Solar Homes: Breakdown', k: 'red', label: '§4  BODY 2',
      segs: [
        { t: 'By contrast, in households without solar panels, water heating was {{the dominant use}}, {{making up}} 31% of consumption.', hl: { sl: { non: ['water'] } }, chips: [['① was the dominant use', 'Band 8 phrase for the top category in this chart'], ['② making up', 'participle clause — links the category to its figure smoothly']] },
        { t: 'Space cooling or heating {{followed}} at 27%, meaning that these two categories alone {{accounted for over half}} of all electricity.', hl: { sl: { non: ['water', 'space'] } }, chips: [['③ followed', 'ranking verb for the second-place category'], ['④ accounted for over half', 'synthesis phrase — combines two figures into one strong claim']] },
        { t: 'Refrigeration stood at 16%, while electronics and appliances and EV charging {{represented}} 15% and 11% {{respectively}}.', hl: { sl: { non: ['fridge', 'elec', 'ev'] } }, chips: [['⑤ represented … respectively', 'pairs two figures with two categories in one clause']] },
        { t: 'Notably, lighting was absent from this breakdown, {{suggesting}} that it either consumed a negligible amount or was grouped with another category.', hl: { sl: { solar: ['light'], non: 'all' } }, chips: [['⑥ suggesting', 'handles a data gap gracefully — shows analytical maturity']] }] },

    { type: 'section', num: '5', title: 'Vocabulary Deep Dive', sub: '25+ items — with examiner tips and examples', section: 'Vocabulary Deep Dive' },

    { type: 'vocab', section: 'Vocabulary Deep Dive', title: 'accounts for / constitutes / represents',
      top: { label: 'IN THE MODEL ANSWER:', text: '"...electronics and appliances accounted for the largest share of consumption in solar-powered homes at 24%..."' },
      listLabel: 'REPLACE WITH:',
      rows: [
        { k: 'green', term: 'constitutes', text: '"Electronics and appliances constitutes the single largest category at 24% in solar-powered homes."' },
        { k: 'green', term: 'represents', text: '"Water heating represents 31% of consumption in homes without solar panels."' },
        { k: 'green', term: 'makes up', text: '"Space cooling makes up over a quarter of usage in non-solar households."' },
        { k: 'green', term: 'comprises', text: '"EV charging comprises 15% of electricity use in solar-equipped homes."' }],
      tip: ['EXAMINER TIP', 'These verbs ARE required in pie chart answers. Using them signals to the examiner that you understand how to describe proportions — the core skill for Task 1 pie charts.'] },

    { type: 'scale', section: 'Vocabulary Deep Dive', title: 'proportion / share / fraction',
      scale: [{ k: 'blue', head: 'MINOR  (<12%)', text: 'a small share' }, { k: 'gold', head: 'NOTABLE  (12–20%)', text: 'a significant proportion' }, { k: 'red', head: 'CONSIDERABLE  (20–30%)', text: 'a considerable share' }, { k: 'dark', head: 'DOMINANT  (>30%)', text: 'the dominant share' }],
      top: { label: 'IN THE MODEL ANSWER:', text: '"...water heating was the dominant use, making up 31% of consumption..."' },
      fracLabel: 'USEFUL FRACTION EXPRESSIONS:',
      fracs: [['just under a third', '~31%'], ['just over a quarter', '~27%'], ['roughly a quarter', '~24%'], ['just over a fifth', '~22%'], ['just under a fifth', '~18%'], ['roughly one in ten', '~9%']],
      tip: ['EXAMINER TIP', 'Mix fraction expressions with percentages — "just under a third (31%)" is more sophisticated than "31%" alone and demonstrates lexical range.'] },

    { type: 'vocab', section: 'Vocabulary Deep Dive', title: 'compared to / in contrast / whereas',
      top: { cls: 'warn', label: '⚠  KEY REMINDER', text: 'These comparison connectors REPLACE trend language. When you want to say "increased from X to Y" in a static pie chart, replace it with "accounted for a higher proportion in non-solar homes (Y%) compared to solar homes (X%)."' },
      rows: [
        { k: 'gold', term: 'compared to', tag: 'MID-SENTENCE', text: '"Electronics accounted for 24% with solar, compared to only 15% without."', note: 'Places two figures in direct comparison. Most common connector.' },
        { k: 'gold', term: 'whereas', tag: 'MID-SENTENCE', text: '"Non-solar households relied heavily on water heating, whereas solar-equipped homes showed a more even spread."', note: 'Connects two contrasting clauses. No comma before it.' },
        { k: 'gold', term: 'while', tag: 'OPENER / MID', text: '"While water heating dominated non-solar homes, solar-equipped households devoted more electricity to electronics and EV charging."', note: 'Can open a sentence (reversed clause order). Subtle but elegant.' },
        { k: 'gold', term: 'In contrast,', tag: 'SENTENCE OPENER', text: '"In contrast, space cooling made up 27% of consumption in homes without solar panels."', note: 'Opens Body 2. Always followed by a comma.' },
        { k: 'gold', term: 'unlike', tag: 'SENTENCE OPENER', text: '"Unlike non-solar homes, solar homes devoted 15% of usage to EV charging."', note: 'Followed by a noun phrase, not a full clause.' }] },

    { type: 'vocab', grid: true, section: 'Vocabulary Deep Dive', title: 'Comparative Adjectives — The Right Grammar for Pie Charts',
      top: { cls: 'warn', label: '✓  RULE: Comparative forms ARE correct for pie charts', text: 'When comparing two charts or two categories, use comparative adjectives: higher, lower, larger, smaller, greater, more, less. These describe proportion differences, not change over time.' },
      rows: [
        { k: 'green', term: 'a higher proportion than', text: '"Water heating represented a higher proportion of electricity use in non-solar homes than in solar-equipped homes."' },
        { k: 'green', term: 'nearly double', text: '"Refrigeration in non-solar homes (16%) was nearly double the lighting share in solar-equipped homes (9%)."' },
        { k: 'green', term: 'a lower share than', text: '"Electronics and appliances constituted a lower share of usage in non-solar homes than in solar-equipped homes."' },
        { k: 'green', term: 'considerably larger / smaller', text: '"Water heating made up a considerably larger proportion in non-solar homes (31%) than in solar-equipped homes (22%)."' },
        { k: 'green', term: 'more than double', text: '"Water heating in non-solar homes accounted for more than double the electronics-and-appliances figure in the same group — let\'s check: 31/15 ≈ 2.07, so this holds."' },
        { k: 'green', term: 'broadly comparable', text: '"Refrigeration was broadly comparable across both groups, at 16% without solar and 12% with solar."' }] },

    { type: 'vocab', section: 'Vocabulary Deep Dive', title: 'dominant / negligible / broadly comparable',
      top: { label: 'IN THE MODEL ANSWER:', text: '"...water heating was the dominant use, making up 31% of consumption..."   /   "...lighting was absent from this breakdown..."' },
      rows: [
        { k: 'blue', term: 'the dominant category', tag: 'ADVANCED', text: 'For the largest segment — avoids repeating "the biggest"', note: '"Water heating was the dominant category in non-solar homes, accounting for almost a third of all usage."' },
        { k: 'blue', term: 'negligible', tag: 'ADVANCED', text: 'For very small figures (<5%) — shows precision', note: '"Lighting made up a negligible 9% of electricity use in solar-powered homes."' },
        { k: 'blue', term: 'broadly comparable', tag: 'BAND 7+', text: 'For categories that are similar but not identical', note: '"Refrigeration was broadly comparable across both groups, at 16% and 12% respectively."' },
        { k: 'blue', term: 'heavily skewed towards', tag: 'BAND 8', text: 'For extreme imbalance in one direction', note: '"Non-solar electricity use was heavily skewed towards water heating and space cooling, which together made up 58% of the total."' },
        { k: 'blue', term: 'dwarfed by', tag: 'BAND 8', text: 'When one figure is far larger than another', note: '"The lighting share in solar homes (9%) was dwarfed by the water-heating figure in non-solar homes (31%)."' },
        { k: 'blue', term: 'the overwhelming majority', tag: 'ADVANCED', text: 'For proportions above 50%', note: '"Water heating and space cooling together accounted for the overwhelming majority of electricity use in non-solar homes, at 58%."' }] },

    { type: 'vocab', section: 'Vocabulary Deep Dive', title: 'Introduction Phrases — 3 Variations', sub: 'From Elena\'s Vocabulary Pack — never use the same opening twice',
      rows: [
        { k: 'blue', term: 'Variation 1', text: '"The two pie charts illustrate the proportion of household electricity devoted to different uses in homes with rooftop solar panels compared to homes without."', note: '▸  illustrates / depicts / presents / compares → change the verb' },
        { k: 'blue', term: 'Variation 2', text: '"The charts compare how solar-equipped and non-solar households allocate their electricity consumption across a range of categories."', note: '▸  "compare how... allocate" → dynamic verb structure with nominal clause' },
        { k: 'blue', term: 'Variation 3', text: '"The data presented in the two pie charts shows the distribution of electricity use across various categories in homes with and without solar panels."', note: '▸  "distribution of electricity use" → paraphrases "how electricity is used" elegantly' }],
      tip: ['💡  TIP', 'Change both the VERB and the STRUCTURE — not just one word. "The chart shows" is not a real paraphrase of "The diagram shows". The examiner reads thousands of scripts and notices lazy substitutions.'] },

    { type: 'section', num: '6', title: 'Upgrade Challenge', sub: 'Can you rewrite this from Band 5 to Band 8?', section: 'Upgrade Challenge' },

    { type: 'rewrite', section: 'Upgrade Challenge', title: 'UPGRADE CHALLENGE — The Weak Version', sub: '⏸  PAUSE THE VIDEO NOW — rewrite this paragraph using the vocabulary from this lesson. Answers on the next slide.',
      html: 'Electronics and appliances <u>was the biggest</u> in solar homes at 24%. It <u>went down a lot</u> to 15% in homes without solar. Water heating <u>went up</u> from 22% to 31%. Space cooling <u>was high</u> at 18% in solar homes but <u>got a lot bigger</u> at 27% without solar.',
      label: 'REPLACE THESE 5 UNDERLINED PHRASES:',
      items: [['was the biggest', '______ for / ______ the largest ______'], ['went down a lot', 'accounted for a ______ proportion without solar ______ with solar'], ['went up', '______ a higher share without solar ______ with solar'], ['was high', 'made up a ______ proportion / constituted ______ of'], ['got a lot bigger', 'compared to a ______ X% without solar']] },

    { type: 'rewrite', section: 'Upgrade Challenge', title: 'UPGRADE REVEAL — Band 8 Version', sub: '✓  These highlighted words are all from your vocabulary pack — you already have the tools.',
      html: 'Electronics and appliances <u>accounted for the largest share</u> in solar-powered homes, representing just under a quarter of usage (24%), <u>compared to only 15% in homes without solar</u>. Water heating <u>constituted a considerably higher share</u> in non-solar homes (31%) than in solar-equipped homes (22%). Space cooling <u>made up 18% of usage</u> with solar, <u>compared to a noticeably larger 27%</u> without solar.',
      label: '5 UPGRADES MADE:',
      items: [['was the biggest', '↓ accounted for the largest share'], ['went down a lot', '↓ compared to only 15% in homes without solar'], ['went up', '↓ constituted a considerably higher share'], ['was high', '↓ made up 18% of usage with solar'], ['got a lot bigger', '↓ compared to a noticeably larger 27%']] },

    { type: 'end2', title: 'Module 2 Complete', sub: 'Key vocabulary from this lesson:',
      rows: [['Proportion verbs:', 'accounts for  ·  constitutes  ·  represents  ·  makes up'], ['Proportion nouns:', 'share  ·  proportion  ·  fraction  ·  distribution'], ['Comparison:', 'compared to  ·  whereas  ·  in contrast  ·  unlike'], ['Adjectives:', 'dominant  ·  negligible  ·  considerable  ·  broadly comparable'], ['Fractions:', 'just under a third  ·  nearly double  ·  considerably more'], ['Intro:', 'illustrates  ·  depicts  ·  compares  ·  presents']],
      nextLabel: 'WHAT\'S NEXT?',
      next: [['Download Vocabulary Pack PDF', 'All 25+ items in one printable sheet'], ['Ukrainian IELTS Telegram', '@ielts_ukrainians — для студентів'], ['English Tips Telegram', '@english_rrs — daily IELTS tips'], ['Full Course', 'englishkurilets.com — all 7 modules'], ['Next: Module 3', 'Bar Charts — Comparison Language']],
      links: [{ label: 'Диктант: слухай і друкуй →', url: '../dictation/index.html?t=pie-1' }, { label: 'Пишемо разом: відповідь на екзаменних діаграмах →', url: '../index.html?t=pie-1' }] }
  ]
};
