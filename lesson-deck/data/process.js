/* Module 5 · Process Diagrams. Тексти слайдів з презентації Олени (IELTS_Task_1__Process___Module_5_Redesigned.pptx).
   Правки точності (див. супровідне повідомлення):
   «the fry hatch» → «the eggs hatch» (хатчаться яйця, не мальки);
   «80% / 95% of your sentences» (нічим не підтверджені відсотки) → «most»;
   посилання «Example 3 in the PDF pack» / «salmon and silkworm examples in the PDF pack» → у пакеті таких прикладів немає, замінено на слайди колоди;
   слайд 16 «is ground ≠ is ground» (тавтологія) → ✗ grinded / ✓ ground; «Один рік — фотографія» (це зі слайдів про графіки) → правило present simple для процесів;
   reveal: «eight sentences became four» → nine; пропущені conche/temper (правило «кожен етап») додано; «120°C» → «approximately 120°C» (на діаграмі ≈);
   «Is every verb passive?» (суперечить change-of-state: sets, oxidise) → «process verbs»;
   план часу: 5+5+10+15+15+20 = 70 хв, а не «≈ 60»; «two of them share one grammar point» → three (як у висновку слайда);
   §3 «3–4 sentences» → 2–3, §4 слова → за моделлю; цитата prompt на слайді 8 узгоджена зі слайдом 5;
   «Perfect passive logic» у «Once the beans reach the factory» (там present simple) → «once + present simple»;
   «without a single then» (у тому ж реченні є «then») → уточнено; «DO count the stages» → рахуємо один раз (§1);
   «this whole module runs on the passive» → natural cycles = active; Maps: «remove the timeline» → дві дати, past simple. */
(function () {
  function wc(t) { return String(t).replace(/%%|@@|\{\{|\}\}|\[\[|\]\]/g, '').trim().split(/\s+/).length; }

  var CHOC = {
    type: 'process', layout: 'flow', perRow: 3, perRowWide: 5,
    title: 'How chocolate is made — from cacao pod to chocolate bar',
    phases: [{ id: 'farm', label: 'Phase 1 · on the farm (stages 1–4)', color: '#2C7A5A' }, { id: 'factory', label: 'Phase 2 · in the factory (stages 5–9)', color: '#E1512E' }],
    nodes: [
      { n: 1, t: 'Harvest', sub: 'ripe cacao pods, by hand', icon: '🧺', phase: 'farm', v: 'p', verb: 'are harvested' },
      { n: 2, t: 'Split & extract', sub: 'pods opened, beans removed', icon: '🥥', phase: 'farm', v: 'p', verb: 'are split & extracted' },
      { n: 3, t: 'Ferment', sub: '6–10 days in boxes', icon: '📦', phase: 'farm', v: 'p', verb: 'are fermented' },
      { n: 4, t: 'Dry', sub: 'spread out in the sun', icon: '☀️', phase: 'farm', v: 'p', verb: 'are spread out to dry' },
      { n: 5, t: 'Roast', sub: 'at ≈ 120°C', icon: '🔥', phase: 'factory', v: 'p', verb: 'are roasted' },
      { n: 6, t: 'Crush & winnow', sub: 'outer shells removed', icon: '🔨', phase: 'factory', v: 'p', verb: 'are crushed & winnowed' },
      { n: 7, t: 'Grind', sub: 'nibs → cocoa liquor', icon: '⚙️', phase: 'factory', v: 'p', verb: 'are ground' },
      { n: 8, t: 'Conche & temper', sub: 'smooth texture develops', icon: '🌀', phase: 'factory', v: 'p', verb: 'is conched & tempered' },
      { n: 9, t: 'Mould', sub: 'liquid sets into bars', icon: '🍫', phase: 'factory', v: 'a', verb: 'it sets' }]
  };
  var TURTLE = {
    type: 'process', layout: 'cycle',
    title: 'The life cycle of the sea turtle',
    phases: [{ id: 'beach', label: 'On the beach', color: '#D98E04' }, { id: 'sea', label: 'At sea', color: '#2C7A5A' }],
    center: { icon: '🐢', t: 'Life cycle of the sea turtle', sub: 'a natural cycle: no true start or end' },
    nodes: [
      { n: 1, t: 'Eggs laid', sub: 'eggs buried in the sand', icon: '🥚', phase: 'beach', v: 'p', verb: 'are laid' },
      { n: 2, t: 'Hatching', sub: 'after about two months', icon: '🐣', phase: 'beach', v: 'a', verb: 'hatch' },
      { n: 3, t: 'Reach the sea', sub: 'hatchlings crawl down the beach', icon: '🌊', phase: 'beach', v: 'a', verb: 'crawl' },
      { n: 4, t: 'Growth', sub: 'juveniles feed in the open ocean', icon: '🐟', phase: 'sea', v: 'a', verb: 'feed & grow' },
      { n: 5, t: 'Maturity', sub: 'adults reach breeding age', icon: '🧭', phase: 'sea', v: 'a', verb: 'reach maturity' },
      { n: 6, t: 'Return', sub: 'females come back to the same beach', icon: '🏖️', phase: 'beach', v: 'a', verb: 'return' }]
  };
  var TEA = {
    type: 'process', layout: 'branch',
    title: 'Four types of tea from one plant',
    trunk: [{ n: 1, t: 'Pluck', sub: 'young leaves, by hand' }, { n: 2, t: 'Wither', sub: 'moisture reduced' }],
    routes: [
      { label: 'WHITE TEA — least processed', color: '#C9A84C', nodes: [{ n: 3, t: 'Dry', sub: 'simply dried, no oxidation' }] },
      { label: 'GREEN TEA — no oxidation', color: '#2C7A5A', nodes: [{ n: 4, t: 'Steam / pan-fire', sub: 'oxidation prevented' }, { n: 5, t: 'Roll', sub: 'leaves shaped' }, { n: 6, t: 'Dry', sub: 'final moisture removed' }] },
      { label: 'OOLONG — partial oxidation', color: '#8B5A2B', nodes: [{ n: 7, t: 'Bruise', sub: 'edges damaged gently' }, { n: 8, t: 'Oxidise', sub: 'partial — 10–70%' }, { n: 9, t: 'Roll', sub: 'leaves shaped' }, { n: 10, t: 'Dry', sub: 'final moisture removed' }] },
      { label: 'BLACK TEA — full oxidation', color: '#1F1F1F', nodes: [{ n: 11, t: 'Crush', sub: 'cells broken open' }, { n: 12, t: 'Oxidise', sub: 'fully — leaves darken' }, { n: 13, t: 'Dry & pack', sub: 'ready for sale' }] }]
  };

  /* модель шоколаду: %%passive%% синім, @@active@@ рожевим */
  var M1 = `The diagram illustrates the nine-stage process by which cacao pods %%are transformed%% into finished chocolate bars.`;
  var M2a = `Overall, the process is linear and falls into two distinct phases: the preparation of the beans on the farm, followed by their processing in the factory.`;
  var M2b = `It begins with the harvesting of ripe pods and concludes with the moulding of liquid chocolate into bars.`;
  var M3a = `In the first phase, ripe cacao pods %%are harvested%% by hand, after which they %%are split open%% and the beans %%are extracted%%.`;
  var M3b = `The beans %%are then fermented%% in boxes for six to ten days, before %%being spread out%% to dry in the sun.`;
  var M4a = `Once the beans reach the factory, they %%are roasted%% at approximately 120°C.`;
  var M4b = `Following this, they %%are crushed and winnowed%% to remove the outer shells, and the resulting nibs %%are ground%% into a thick liquid known as cocoa liquor.`;
  var M4c = `Finally, the liquor %%is conched and tempered%% for a smooth texture, before %%being poured%% into moulds, where it @@sets@@ into bars.`;
  var WORDS = [M1, M2a, M2b, M3a, M3b, M4a, M4b, M4c].reduce(function (n, t) { return n + wc(t); }, 0);

  /* модель черепахи */
  var T1 = `The diagram illustrates the six-stage life cycle of the sea turtle, from the laying of eggs on a beach to the return of the adults.`;
  var T2a = `Overall, the process is cyclical, with no true end point: it @@begins@@ with eggs buried in the sand and @@ends@@ when the adult females @@come back@@ to the same beach, at which point a new generation @@begins@@.`;
  var T2b = `The turtles @@spend@@ the first stages on the beach and most of the cycle at sea.`;
  var T3a = `At the start of the cycle, the eggs %%are laid%% and %%buried%% in the sand, where they @@stay@@ for about two months.`;
  var T3b = `The eggs then @@hatch@@, and the young turtles @@crawl@@ down the beach and @@enter@@ the sea.`;
  var T4a = `Once in the water, the juveniles @@feed@@ and @@grow@@ in the open ocean for many years, until they @@reach@@ maturity.`;
  var T4b = `Finally, the adult females @@return@@ to the same beach, where new eggs %%are laid%% and the cycle @@begins@@ again.`;
  var TWORDS = [T1, T2a, T2b, T3a, T3b, T4a, T4b].reduce(function (n, t) { return n + wc(t); }, 0);

  window.DECK = {
    meta: {
      docTitle: 'Module 5 · Process Diagrams · презентація',
      brandSub: 'Write It Right · Module 5: Process Diagrams',
      credit: 'Elena Kurilets  ·  @english_rrs  ·  @ielts_ukrainians  ·  englishkurilets.com',
      where: 'IELTS Writing Task 1  ·  Module 5: Process Diagrams',
      next: { label: 'Пишемо разом →', url: '../index.html?t=process-1' },
      dict: '../dictation/index.html?t=process-1'
    },
    chart: CHOC,
    slides: [
      { type: 'title', module: 'MODULE 5', kicker: 'IELTS Writing Task 1', title: 'Process Diagrams',
        sub: 'Describing how things are made and how nature works — sequencing and the passive voice at Band 7–8',
        items: ['01  The #1 process mistake — active voice', '02  The 60-second diagram reading', '03  The 4-paragraph method', '04  Band 8 model — annotated', '05  Man-made vs natural — passive vs active', '06  Sequencer bank, practice task + self-check'] },

      { type: 'stack', cls: 'tight', section: 'Roadmap', title: 'How This Module Works', sub: 'SIX STOPS, ABOUT 70 MINUTES — KNOW WHERE YOU ARE AT EVERY STEP',
        rows: [
          { k: 'blue',  tag: '1', head: 'Diagnose  ·  5 MIN', text: `Read a real Band 5 answer built on «workers pick… then they…» — the #1 process mistake.` },
          { k: 'green', tag: '2', head: 'Understand the score  ·  5 MIN', text: `Four criteria, 25% each — and for process diagrams one grammar choice carries three of them at once: the passive voice.` },
          { k: 'gold',  tag: '3', head: 'Read the diagram  ·  10 MIN', text: `One process, nine stages, sixty seconds: linear or cyclical? Where does it start and end? What are the natural phases?` },
          { k: 'red',   tag: '4', head: 'Study the model  ·  15 MIN', text: `A Band 8 answer to the chocolate task — every passive and every sequencer traced back to the diagram.` },
          { k: 'blue',  tag: '5', head: 'Learn the tools  ·  15 MIN', text: `The passive workshop, a natural cycle where ACTIVE is correct, the sequencer bank, branches and cycles.` },
          { k: 'green', tag: '6', head: 'Write & check  ·  20 MIN', text: `One tea task, four tea types, twenty minutes — then an 8-question examiner self-check before you open the sample.` }],
        footnote: 'One rule: man-made process → WHO acts does not matter → %%passive%%.  Natural cycle → the creature acts → @@active@@.' },

      { type: 'example', section: 'Diagnose', title: 'What a Band 5 Answer Looks Like', sub: 'CAN YOU SPOT THE FOUR PROBLEMS BEFORE YOU READ THE FLAGS?',
        lines: [`First, workers harvest the cacao pods. Then they split the pods and take out the beans. Next, they leave the beans in boxes for some days. After that, they dry the beans in the sun.`, `Then machines roast the beans. After this, they crush the beans and remove the shells. Then they grind the beans into a liquid. Finally, they make the liquid into chocolate bars.`],
        label: 'A REAL BAND 5 ANSWER — THE FOUR PROBLEMS',
        reasons: [
          ['✗  Active voice throughout  ·  GRAMMAR', `«Workers harvest… they split… machines roast…» — in a process diagram WHO acts rarely matters. The process is the star: write «the pods are harvested».`],
          ['✗  «Then» chain  ·  COHERENCE', `First / Then / Next / After that / Then / After this / Then / Finally — eight sequencers from one family, three of them «then». Monotony holds Coherence at Band 5.`],
          ['✗  No overview  ·  TASK ACHIEVEMENT', `How many stages? How many phases? Where does the process begin and end? The reader gets none of it — Task Achievement suffers most.`],
          ['✗  Flat verbs  ·  LEXICAL RESOURCE', `«take out», «make into», «leave in boxes» — the diagram gives you precise actions: extract, ferment, mould. Band 8 lives in those verbs.`]],
        footnote: 'Головний інсайт: кожен факт тут правильний — і все одно Band 5. Процеси оцінюють за тим, ЯК ти sequence-иш і КОГО прибираєш із речення, а не за тим, що ти помітила на діаграмі.' },

      { type: 'dual', cls: 'sm', section: 'Diagnose', title: 'How Examiners Score Process Answers', sub: 'FOUR CRITERIA, 25% EACH — FOR PROCESS DIAGRAMS, THREE OF THEM SHARE ONE GRAMMAR POINT',
        cols: [
          { k: 'gold', head: 'Task Achievement  ·  25%', items: [`Band 7+ requires:`, `· overview: the number of stages and the start → end frame`, `· every stage included — unlike tables, you skip NOTHING`, `· no reasons, no opinions, no «why»`] },
          { k: 'blue', head: 'Coherence & Cohesion  ·  25%', items: [`Band 7+ requires:`, `· exactly 4 paragraphs; body split by phase, not step by step`, `· sequencers varied — never «then» twice in a row`, `· 2–3 stages linked per sentence`] },
          { k: 'red', head: 'Lexical Resource  ·  25%', items: [`Band 7+ requires:`, `· precise process verbs: harvested, fermented, roasted, ground, moulded`, `· technical nouns from the diagram: nibs, liquor, pods`, `«take out / make into» = Band 5`] },
          { k: 'green', head: 'Grammar Range & Accuracy  ·  25%', items: [`Band 7+ requires:`, `· present simple passive as the default: %%are harvested%%, %%is poured%%`, `· perfect passive for completed stages: once the beans %%have been dried%%`, `· participles: before %%being poured%%…`] }],
        footnote: 'Notice: the passive voice sits inside Grammar — but it also unlocks Cohesion (sequencers attach to it) and Lexical Range (process verbs need it). One rule, three criteria.' },

      { type: 'task', section: 'The Task', title: 'The Task', sub: 'HOW CHOCOLATE IS MADE — FROM CACAO POD TO CHOCOLATE BAR  ·  20 min  ·  150+ words  ·  9 stages · 2 phases',
        prompt: `The diagram below shows the process by which chocolate is produced from cacao pods. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'READ THE DIAGRAM LIKE AN EXAMINER:  ① Linear — clear start (pods), clear end (bars), no loop  ·  ② Two phases — stages 1–4 on the farm, 5–9 in the factory  ·  ③ Every verb is done TO the beans — the workers are invisible  ·  ④ One phase = one body paragraph.' },

      { type: 'questions', cls: 'five', section: 'The Task', title: 'How to Read a Process Diagram in 60 Seconds', sub: 'FIVE QUESTIONS TO ANSWER BEFORE YOU WRITE A SINGLE WORD',
        items: [
          { n: '01', q: 'Linear or cyclical?', uk: `LINEAR — a clear start (harvesting pods) and a clear end (chocolate bars). If it loops back (turtle, water cycle), your overview must say «cyclical» instead.`, hl: { steps: [0, 8] } },
          { n: '02', q: 'How many stages — and phases?', uk: `Nine stages in two natural phases: on the farm (1–4) and in the factory (5–9). The phases become your two body paragraphs.`, hl: { phase: 'farm' } },
          { n: '03', q: 'Where does it start and end?', uk: `Starts: ripe pods are harvested. Ends: liquid chocolate is moulded into bars. This start → end frame IS your overview sentence.`, hl: { steps: [0, 8] } },
          { n: '04', q: 'WHO does each action?', uk: `Workers, machines, the sun… — the diagram barely names them. When the agent doesn't matter, English deletes it: the passive voice.`, hl: { voice: true, steps: [0, 1, 2, 3, 4, 5, 6, 7] } },
          { n: '05', q: 'What happens to the MATERIAL?', uk: `Track the beans, not the people: pods → beans → nibs → liquor → bars. The material is the subject of almost every sentence you will write.`, hl: { steps: [0, 1, 5, 6, 8] } }] },

      { type: 'stack', cls: 'tight', section: 'Method', title: 'The 4-Paragraph Framework', sub: 'EVERY PROCESS ANSWER — ALWAYS EXACTLY THIS SHAPE',
        rows: [
          { k: 'blue',  tag: '§1', head: 'INTRODUCTION  ·  1 sentence  ·  ~15–20 words', text: `Paraphrase the prompt: name the process and count its stages. «The diagram illustrates the nine-stage process by which…»` },
          { k: 'green', tag: '§2', head: 'OVERVIEW  ·  2 sentences  ·  ~40 words  ·  most important', text: `Linear or cyclical? How many phases? Start point → end point. NO stage details, NO verbs from the diagram.` },
          { k: 'gold',  tag: '§3', head: 'BODY 1  ·  2–3 sentences  ·  ~55–60 words', text: `Phase 1 — on the farm (stages 1–4). Chain the stages with sequencers; 2–3 stages per sentence; passive throughout.` },
          { k: 'red',   tag: '§4', head: 'BODY 2  ·  3 sentences  ·  ~65–70 words', text: `Phase 2 — in the factory (stages 5–9). Open with a phase bridge: «Once the beans reach the factory…»` }],
        footnote: 'The trap: nine stages do NOT mean nine sentences. If every stage gets its own sentence, you are listing, not summarising — Band 5 for Coherence.' },

      { type: 'stack', section: 'Method', title: '§1 Introduction — Paraphrase, Never Copy', sub: 'CHANGE THE VERB, COUNT THE STAGES, NAME THE TRANSFORMATION',
        rows: [
          { k: 'bad',  head: '✗  WRONG — COPIED', text: `«The diagram below shows the process by which chocolate is produced from cacao pods.»` },
          { k: 'good', head: '✓  CORRECT — PARAPHRASED', text: `«The diagram {{illustrates}} the {{nine-stage}} process by which cacao pods %%are transformed%% into finished chocolate bars.»` }],
        waysLabel: 'THE SWAP MAP — THREE MOVES, ONE SENTENCE',
        ways: [['✗ shows → ✓ illustrates / depicts', 'a Band 8 synonym for the diagram verb'], ['✗ the process by which → ✓ the nine-stage process by which…', 'counting the stages in §1 previews your overview'], ['✗ chocolate is produced from pods → ✓ pods are transformed into… bars', 'from → to becomes a passive transformation']],
        footnote: 'Never copy the task. Two swaps and one addition turn it into Band 8.' },

      { type: 'stack', section: 'Method', title: '§2 Overview — the Shape and the Frame', sub: 'LINEAR OR CYCLICAL + PHASES + START → END — AND NOT A SINGLE STAGE DETAIL',
        rows: [
          { k: 'gold', head: 'THE FORMULA', text: `linear / cyclical  +  how many phases  +  starts with X  →  ends with Y` },
          { k: 'star', head: 'THE MODEL OVERVIEW — MEMORISE THE SHAPE, NOT THE WORDS', text: `«Overall, the process is linear and falls into two distinct phases: the preparation of the beans on the farm, followed by their processing in the factory. It begins with the harvesting of ripe pods and concludes with the moulding of liquid chocolate into bars.»` }],
        waysLabel: 'THREE RULES FOR THE OVERVIEW',
        ways: [['NO stage verbs', '«harvested, fermented, roasted» belong in the body — the overview only frames.'], ['COUNT the stages — once', 'Unlike data charts, «nine stages» is gold: the quantity IS the big picture. Put it in §1 (or §2).'], ['NAME the phases', 'Farm vs factory. This one choice decides your paragraph split — say it in the overview.']] },

      { type: 'dual', section: 'Method', title: '§3 + §4 — The Body Paragraphs', sub: 'ONE PHASE = ONE PARAGRAPH  ·  2–3 STAGES PER SENTENCE  ·  PASSIVE THROUGHOUT',
        cols: [
          { k: 'gold', head: '§3 BODY 1 — ON THE FARM (1–4)', items: [`Open with a phase signal: «In the first phase,…»`, `Chain stages: after which · then · before being…`, `Four stages in 2 sentences — harvested, split, extracted, fermented, dried (split + extract = one stage) — with manner and times as evidence: by hand, six to ten days.`] },
          { k: 'red', head: '§4 BODY 2 — IN THE FACTORY (5–9)', items: [`Open with a phase bridge: «Once the beans reach the factory,…»`, `Five stages in 3 sentences — roasted, crushed, winnowed, ground, conched, tempered, moulded.`, `Close the process: «Finally,… where it sets into bars.»`] }],
        footnote: `Include EVERY stage — tables reward selection; processes punish it. A skipped stage = a hole in the chain = lost Task Achievement.\nNever explain WHY — «The beans are fermented so that the flavour develops» is banned: report what happens, not why. (A purpose the diagram itself shows — «to remove the outer shells» — is fine.)\nThe material is the subject: pods → beans → nibs → liquor → bars. Follow the material and the passive voice follows automatically.` },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §1 Introduction', k: 'blue', label: '§1  INTRODUCTION',
        segs: [{ t: M1.replace('The diagram illustrates the nine-stage process by which', '{{The diagram illustrates the nine-stage process by which}}'), hl: { steps: [0, 8], voice: true },
          chips: [['illustrates the nine-stage process by which…', 'Counts the stages inside the introduction — the examiner already trusts your overview before reading it.'], ['are transformed into', 'The whole process in one passive verb: raw material in, product out. «From pod to bar» without the word «from».']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §2 Overview', k: 'green', label: '§2  OVERVIEW',
        segs: [
          { t: `Overall, {{the process is linear}} and {{falls into two distinct phases}}: the preparation of the beans on the farm, followed by their processing in the factory.`, hl: { phase: 'farm' },
            chips: [['Overall, the process is linear', 'Question 1 from the 60-second reading, answered in four words. Linear vs cyclical is the first thing examiners look for.'], ['falls into two distinct phases', 'The phase split is announced here — and becomes the paragraph split in §3/§4. Overview decides structure.']] },
          { t: `It {{begins with}} the harvesting of ripe pods and {{concludes with}} the moulding of liquid chocolate into bars.`, hl: { steps: [0, 8] },
            chips: [['begins with… concludes with…', 'The start → end frame: harvesting pods in, chocolate bars out. Zero stage verbs, zero details — pure big picture.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §3 Body 1', k: 'gold', label: '§3  BODY 1 — ON THE FARM',
        segs: [
          { t: `{{In the first phase}}, ripe cacao pods %%are harvested by hand%%, {{after which}} they %%are split open%% and the beans %%are extracted%%.`, hl: { steps: [0, 1], voice: true },
            chips: [['① In the first phase', 'The phase opener — the signal that Body 1 covers stages 1–4. Body 2 will mirror it.'], ['② are harvested by hand', 'Passive + manner. «By hand» adds information; «by workers» would add nothing. Keep manner, delete agents.'], ['③ after which…', 'A relative-clause chain: three stages (harvested → split → extracted) in ONE sentence, without a single «then».']] },
          { t: `The beans %%are then fermented%% in boxes for six to ten days, {{before being spread out}} to dry in the sun.`, hl: { steps: [2, 3], voice: true },
            chips: [['④ before being spread out', 'The -ing passive attaches stage 4 to stage 3 — two stages, one sentence, no new subject.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §4 Body 2', k: 'red', label: '§4  BODY 2 — IN THE FACTORY',
        segs: [
          { t: `{{Once the beans reach the factory}}, they %%are roasted%% at approximately 120°C.`, hl: { steps: [4], voice: true },
            chips: [['① Once the beans reach the factory', 'The phase bridge: one clause moves the material to a new location and opens Body 2. «Once» + present simple marks the sequence.']] },
          { t: `Following this, they %%are crushed and winnowed%% to remove the outer shells, and {{the resulting nibs}} %%are ground%% into a thick liquid {{known as cocoa liquor}}.`, hl: { steps: [5, 6], voice: true },
            chips: [['② the resulting nibs … known as cocoa liquor', 'The material changes NAME as it changes form — track it: beans → nibs → liquor → bars. Precision examiners reward.']] },
          { t: `Finally, the liquor %%is conched and tempered%% for a smooth texture, {{before being poured}} into moulds, {{where it @@sets@@ into bars}}.`, hl: { steps: [7, 8], voice: true },
            chips: [['③ before being poured into moulds', 'The -ing passive again, closing the chain exactly where the diagram ends.'], ['④ where it sets into bars', 'The ONE active verb: a change of state (chocolate hardens by itself), so nobody can be added with «by».']] }] },

      { type: 'full', withChart: true, section: 'Model', title: 'The Band 8 Model Answer', sub: '~' + WORDS + ' WORDS · MAN-MADE PROCESS — %%PASSIVE%% VERBS IN BLUE, THE ONE @@ACTIVE@@ IN PINK' },

      { type: 'vocab', section: 'Vocabulary', title: 'The Passive Workshop', sub: 'THE CORE RULE: DELETE THE WORKER, PROMOTE THE MATERIAL',
        top: { label: 'ACTIVE → PASSIVE: the object becomes the subject; the agent disappears', text: `ACTIVE: Workers roast the beans.   →   PASSIVE: The beans %%are roasted%%.` },
        rows: [
          { k: 'blue',  term: 'Present simple passive', tag: 'is / are + past participle', text: `«The beans %%are roasted%% at 120°C.»`, note: 'THE DEFAULT — most of your sentences' },
          { k: 'green', term: 'Perfect passive', tag: 'have / has been + p.p.', text: `«Once the beans %%have been dried%%, they are shipped.»`, note: 'a stage fully completed before the next begins' },
          { k: 'gold',  term: '-ing passive', tag: 'being + p.p.', text: `«…before %%being poured%% into moulds.»`, note: 'attaches a stage to the previous sentence — kills «then»' },
          { k: 'red',   term: 'Passive + manner', tag: 'p.p. + by hand / at 120°C / in boxes', text: `«…%%are harvested%% by hand.»`, note: 'keep HOW and WHERE; delete only WHO' }],
        tip: ['The natural-process exception:', ' when NATURE acts (a turtle hatches, leaves fall, water evaporates), the active voice is correct — «the eggs @@hatch@@», «the adults @@grow@@». Passive is for processes done TO materials by people or machines. Slides 17–22 show both.'] },

      { type: 'dual', section: 'Natural', title: 'Two Kinds of Process — Two Kinds of Verb', sub: 'WHO REALLY ACTS? THAT ONE QUESTION DECIDES THE VOICE',
        top: { k: 'gold', head: 'THE TEST — CAN YOU ADD «BY SOMEONE» WITHOUT ABSURDITY?', text: `«The eggs %%are laid%% (by the female)» — possible → passive is fine.   «The eggs @@hatch@@ (by someone)» — absurd: nobody hatches them, they hatch → active.` },
        cols: [
          { k: 'blue', head: 'MAN-MADE — people & machines act on a material', items: [`Chocolate, coffee, tea, silk cloth, honey harvesting`, `The MATERIAL is the subject:`, `The cherries %%are picked%% and %%pulped%%.`, `The beans %%are roasted%% at 120°C.`, `Voice: %%PASSIVE%% — present simple, is / are + V3`] },
          { k: 'red', head: 'NATURAL — a creature or nature acts by itself', items: [`Turtle, salmon, silkworm, frog, water cycle`, `The CREATURE is the subject:`, `The eggs @@hatch@@. The adults @@grow@@. The moth @@emerges@@.`, `Water @@evaporates@@ and @@condenses@@.`, `Voice: @@ACTIVE@@ — present simple, no be + V3`] },
          { k: 'green', head: 'MIXED — match the voice to the phase', items: [`Honey: bees + beekeeper`, `Bees @@collect@@ nectar… the frames %%are removed%%.`, `Natural phase → @@active@@; human phase → %%passive%%.`, `Change-of-state verbs stay active even in man-made processes: the liquor @@sets@@, the honey @@thickens@@.`] }],
        footnote: 'Актив у природі — це не відмова від правил, це те саме правило: підмет — той, хто реально діє. Екзаменатор шукає ОБИДВІ форми, правильно розподілені. Найсильніші відповіді демонструють і актив, і пасив — усвідомлено.' },

      { type: 'task', section: 'Natural', title: 'Natural Process — the Task', sub: 'THE LIFE CYCLE OF THE SEA TURTLE  ·  20 min  ·  150+ words  ·  6 stages · cyclical',
        chart: TURTLE,
        prompt: `The diagram below shows the life cycle of the sea turtle. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'READ IT LIKE AN EXAMINER:  ① Cyclical — stage 6 feeds back into stage 1, so there is no true end point  ·  ② Who acts? The turtle itself — so the verbs are @@active@@  ·  ③ One stage has an agent (the female lays the eggs) → one %%passive%%  ·  ④ Locations: beach vs sea.' },

      { type: 'model', grp: 'nat', chart: TURTLE, section: 'Natural', title: 'Natural Model — §1 Introduction + §2 Overview', k: 'blue', label: '§1 + §2  INTRODUCTION AND OVERVIEW',
        segs: [
          { t: T1, hl: { legend: true },
            chips: [['the six-stage life cycle of…', '«Life cycle» is the diagram’s own term, so it stays. The stage count goes into the introduction, exactly as in the chocolate model.']] },
          { t: T2a.replace('Overall, the process is cyclical', '{{Overall, the process is cyclical}}').replace('with no true end point', '{{with no true end point}}'), hl: { steps: [0, 5] },
            chips: [['Overall, the process is cyclical', 'Question 1 of the 60-second reading answered first: cyclical, not linear. The overview opens with the shape.'], ['no true end point · at which point a new generation begins', 'The language of cycles: the end feeds back into the start. Natural verbs (begins, ends, come back) are active.']] },
          { t: T2b, hl: { phase: 'beach' },
            chips: [['on the beach … at sea', 'The two locations are the natural phases. The turtles are the subject, so the verb is active.']] }] },

      { type: 'model', grp: 'nat', chart: TURTLE, section: 'Natural', title: 'Natural Model — §3 Body 1 + §4 Body 2', k: 'gold', label: '§3 + §4  BODY PARAGRAPHS',
        segs: [
          { t: T3a.replace('%%are laid%% and %%buried%%', '%%are laid and buried%%'), hl: { steps: [0], voice: true },
            chips: [['are laid and buried', 'Done TO the eggs by the female → passive. The one passive of the cycle.']] },
          { t: T3b, hl: { steps: [1, 2], voice: true },
            chips: [['hatch · crawl · enter', 'Nobody hatches the eggs: the turtles do it themselves → active.']] },
          { t: T4a, hl: { steps: [3, 4], voice: true },
            chips: [['Once in the water', 'A phase bridge — the same job as «Once the beans reach the factory».'], ['feed · grow · reach', 'The creature performs every stage itself → active.']] },
          { t: T4b, hl: { steps: [5, 0], voice: true },
            chips: [['where new eggs are laid and the cycle begins again', 'Passive + active in ONE sentence, each for its own reason — the cycle closes.']] }] },

      { type: 'full', grp: 'nat', chart: TURTLE, withChart: true, section: 'Natural', title: 'The Natural Model Answer', sub: '~' + TWORDS + ' WORDS · NATURAL CYCLE — @@ACTIVE@@ VERBS IN PINK, THE ONE %%PASSIVE%% IN BLUE' },

      { type: 'matrix', section: 'Natural', title: 'Side by Side — Man-Made vs Natural', sub: 'THE SAME FOUR PARAGRAPHS — A DIFFERENT ENGINE UNDER THE SENTENCES',
        head: ['MAN-MADE  ·  CHOCOLATE', 'NATURAL  ·  SEA TURTLE'],
        rows: [
          { k: 'blue',  label: 'WHO ACTS?', cells: [`People and machines — but they are unnamed, so they are deleted.`, `The creature itself — nobody else could do it.`] },
          { k: 'gold',  label: 'SUBJECT', cells: [`The material: pods → beans → nibs → liquor → bars.`, `The creature: eggs → hatchlings → juveniles → adults.`] },
          { k: 'red',   label: 'VOICE', cells: [`%%PASSIVE%%: the beans %%are roasted%%, the liquor %%is conched%%.`, `@@ACTIVE@@: the eggs @@hatch@@, the turtles @@crawl@@ and @@feed@@.`] },
          { k: 'green', label: 'THE EXCEPTION', cells: [`One active verb — a change of state: «it @@sets@@ into bars».`, `One passive — a real agent exists: «eggs %%are laid%%».`] },
          { k: 'deep',  label: 'OVERVIEW SHAPE', cells: [`linear · nine stages · two phases · «begins with… concludes with…»`, `cyclical · six stages · no true end point · «a new generation begins»`] }],
        footnote: 'ОДНЕ питання вирішує все: «Хто це робить — і чи важливо це?» Людина/машина невідома → пасив. Істота діє сама → актив. І в обох випадках — present simple, бо дат на діаграмі немає.' },

      { type: 'quad', section: 'Vocabulary', title: 'The Sequencer Bank', sub: 'NEVER «THEN» TWICE IN A ROW — PICK FROM FOUR DRAWERS PLUS TWO SPECIALS',
        boxes: [
          { k: 'blue',  head: 'START', items: [`The process begins with…`, `Initially,…`, `In the first stage,…`, `In the first phase,…`] },
          { k: 'green', head: 'MIDDLE', items: [`…after which…`, `Subsequently,…`, `Following this,…`, `Once X has been…, …`, `…before being…`] },
          { k: 'gold',  head: 'PHASE BRIDGE', items: [`Once the beans reach the factory,…`, `In the second phase,…`, `Turning to the factory stage,…`] },
          { k: 'red',   head: 'END', items: [`Finally,…`, `Ultimately,…`, `The process concludes with…`, `…where it sets into bars.`] }],
        footnote: `BRANCHING — when one material splits into several routes: «At this point, the process divides into four routes» · «depending on how long the leaves are oxidised» · «White tea follows the shortest route» — see the tea practice task, p.27.\nCYCLING — when the end feeds back into the start: «…and the cycle begins again» · «The process is cyclical, with no true end point» · «The adult moth then lays eggs, completing the cycle» — see the sea turtle example, pp.18–21.` },

      { type: 'quad', section: 'Grammar', title: 'Grammar Traps — with a Ukrainian Accent', sub: 'THE «INVISIBLE» POINTS — GRAMMAR RANGE & ACCURACY, 25% OF THE SCORE',
        boxes: [
          { k: 'blue', head: '1 · PAST PARTICIPLE — не «are collect»', items: [`Пасив = is/are + третя форма: are harvested, are roasted, is poured.`, `✗ «the beans are collect» → ✓ the beans are collected`, `Українське «збираються» — одне слово, тому V3 губиться. Англійська вимагає обидві частини.`] },
          { k: 'gold', head: '2 · ДІЄСЛОВО ЧИ ПРИКМЕТНИК? НЕПРАВИЛЬНІ V3', items: [`✓ the beans are dried in the sun — процес. ✗ «are dry in the sun» = вони СУХІ, а не ЇХ СУШАТЬ.`, `✗ «are grinded» → ✓ are ground · ✗ «are spreaded» → ✓ are spread (неправильні дієслова)`, `Так само: is fermented, а не «is ferment».`] },
          { k: 'green', head: '3 · «CONSIST» — БЕЗ ПАСИВУ!', items: [`✗ «the process is consisted of nine stages»`, `✓ the process consists of nine stages — consist завжди активний.`, `Але: is composed of / is divided into — пасив правильний. Калька «складається з» ламає обидва варіанти.`] },
          { k: 'red', head: '4 · «BY» — ТІЛЬКИ ЯКЩО ІНФОРМАТИВНО', items: [`✗ «the beans are roasted by machines» — нуль інформації.`, `✓ are roasted at 120°C · harvested by hand · dried in the sun`, `Агента (by workers) видаляй; спосіб (by hand), температуру (at 120°C), місце (in the sun) — залишай.`] }],
        footnote: 'Процеси завжди в present simple: на діаграмі немає дат, тож немає й минулого часу. ✗ «In 2023, chocolate was produced…» → ✓ Chocolate is produced… Жодного past simple, поки діаграма не дає дату.' },

      { type: 'rewrite', section: 'Challenge', title: 'Upgrade Challenge — Band 5 → Band 8', sub: 'REWRITE THIS PARAGRAPH BEFORE YOU LOOK AT THE NEXT PAGE',
        html: `<u>Workers harvest</u> the cacao pods by hand. Then they split the pods and <u>take out</u> the beans. Next, the beans <u>stay in boxes</u> for six to ten days. After that, workers dry the beans in the sun. Then <u>the beans go to</u> a factory. There, machines roast the beans at 120 degrees. After this, they crush the beans and <u>the shells come off</u>. Then they grind the beans into a thick liquid. Finally, they pour the liquid into moulds and <u>it becomes</u> chocolate bars.`,
        label: 'THE 6 PHRASES YOU MUST REPLACE — WRITE YOUR VERSIONS:',
        items: [['Workers harvest', '→ ______________'], ['take out', '→ ______________'], ['stay in boxes', '→ ______________'], ['the beans go to', '→ ______________'], ['the shells come off', '→ ______________'], ['it becomes bars', '→ ______________']],
        footnote: 'Your task: rewrite the paragraph using the passive workshop (p.16) and the sequencer bank (p.23). Keep every stage — change every verb. Не підглядай далі, доки не напишеш свій варіант.\nHint: every replacement already exists on pages 16 and 23. Nine stages, but NO nine sentences: chain them with «after which», «before being…», «once». The material is the hero; workers and machines stay offstage.' },

      { type: 'rewrite', section: 'Challenge', title: 'Upgrade Reveal — the Band 8 Version', sub: 'COMPARE WITH YOUR VERSION — NINE SENTENCES BECAME FOUR',
        html: `In the first phase, ripe cacao pods <u>are harvested by hand</u>, after which they are split open and the beans <u>are extracted</u>. The beans <u>are then fermented</u> in boxes for six to ten days, before being spread out to dry in the sun. <u>Once the beans reach the factory</u>, they are roasted at approximately 120°C, then crushed and <u>winnowed to remove the outer shells</u>. Finally, the nibs are ground into a thick liquor, which is conched, tempered and poured into moulds, where <u>it sets into bars</u>.`,
        label: 'THE UPGRADE MAP — WEAK → BAND 8:',
        items: [['Workers harvest… by hand', '↓ are harvested by hand — agent deleted, manner kept'], ['take out the beans', '↓ the beans are extracted — one precise verb'], ['stay in boxes', '↓ are fermented — the diagram’s verb, not a vague «stay»'], ['the beans go to a factory', '↓ Once the beans reach the factory — a phase bridge, not a «go»'], ['the shells come off', '↓ winnowed to remove the outer shells — a diagram verb + purpose, not «come off»'], ['it becomes chocolate bars', '↓ it sets into bars — «set» is what chocolate does']],
        footnote: 'Nine sentences became four — and every one of the nine stages is still there (conching and tempering too). Your version differs? Good. Check: every stage present, passive verbs, no «then» twice in a row?' },

      { type: 'task', section: 'Practice', title: 'Practice Task — Exam Conditions', sub: 'ONE LEAF, FOUR TEAS — FIND THE BRANCH POINT, DESCRIBE THE SHARED TRUNK ONCE',
        chart: TEA,
        prompt: `The diagram below shows how four types of tea — white, green, oolong and black — are produced from the leaves of the same plant. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'EXAM RULES: Set a 20:00 timer — stop when it rings  ·  3 min: answer the five questions from p.6  ·  Find the SHARED stages and the BRANCH POINT  ·  15 min: write §1 → §2 → §3 → §4  ·  2 min: hunt for active voice + repeated «then»' },

      { type: 'quad', cls: 'chk', section: 'Practice', title: 'Check Yourself Like an Examiner', sub: '8 YES/NO QUESTIONS — ONE PAIR PER CRITERION — SCORE BEFORE YOU PEEK AT THE SAMPLE',
        boxes: [
          { k: 'gold', head: 'TASK ACHIEVEMENT  ·  25%', items: [`☐  Is there an overview with no stage details?`, `☐  Does it state the branch (one plant → four routes) AND the shared trunk stages?`] },
          { k: 'blue', head: 'COHERENCE & COHESION  ·  25%', items: [`☐  Exactly 4 paragraphs — trunk in §3, branches in §4 (or similar logic)?`, `☐  At least 4 different sequencers — and «then» never twice in a row?`] },
          { k: 'red', head: 'LEXICAL RESOURCE  ·  25%', items: [`☐  Process verbs precise — plucked, withered, oxidised, bruised, crushed?`, `☐  Branching language used — divides into, depending on, the shortest route?`] },
          { k: 'green', head: 'GRAMMAR  ·  25%', items: [`☐  Present simple passive in the process sentences (are plucked, are dried)?`, `☐  At least one perfect passive (once the leaves have been withered) or -ing passive (before being dried)?`] }],
        footnote: '7–8 «yes» → Band 7+ material. Any «no» → rewrite that paragraph before you open the sample answer.' },

      { type: 'stack', section: 'Practice', title: 'Sample Band 8 Answer — Compare After Writing', sub: 'COMPARE DECISIONS, NOT WORDS — YOUR VERSION CAN DIFFER AND STILL BE BAND 8',
        rows: [
          { k: 'blue',  tag: '§1', head: 'INTRODUCTION', text: `The diagram illustrates how four distinct types of tea — white, green, oolong and black — %%are produced%% from the leaves of the same plant.` },
          { k: 'green', tag: '§2', head: 'OVERVIEW', text: `Overall, all four teas share the same initial stages of plucking and withering, after which the process branches into four separate routes, depending on how much the leaves %%are oxidised%%.` },
          { k: 'gold',  tag: '§3', head: 'BODY 1 — THE TRUNK + THE SHORT ROUTES', text: `Initially, the young leaves %%are plucked%% by hand and %%are withered%% to reduce their moisture content. At this point, the process divides. White tea undergoes the least processing: the leaves %%are simply dried%%. Green tea leaves %%are first steamed or pan-fired%% to prevent oxidation, before %%being rolled and dried%%.` },
          { k: 'red',   tag: '§4', head: 'BODY 2 — THE OXIDISED ROUTES', text: `Oolong and black tea follow longer routes. Oolong leaves %%are bruised%% and allowed to oxidise partially — between 10 and 70 per cent — before they %%are rolled and dried%%. Black tea, meanwhile, %%is crushed%% and fully oxidised, which gives the leaves their dark colour; they %%are then dried and packed%%, ready for sale.` }],
        footnote: 'Compare the decisions: did you describe the trunk once, not four times? Is the branch point named in your overview? Are your process verbs passive (the oxidising leaves may be active: they darken)?' },

      { type: 'end2', section: 'Module 5 Complete', title: 'What You Now Own', sub: 'MODULE 5 COMPLETE  ·  Key vocabulary from this module:',
        rows: [
          ['01', 'The passive rule: the process is the star, the workers stay offstage — is/are + past participle'],
          ['02', 'The natural exception: a creature acts by itself — the eggs hatch, the adults grow (active)'],
          ['03', 'The sequencer bank and phase logic: one phase, one paragraph; every stage included, none explained'],
          ['●', 'are harvested · are fermented · are roasted · are ground · is poured'],
          ['◐', 'after which · before being… · once X has been… · the process concludes with'],
          ['◔', 'the process divides into… · the cycle begins again · consists of']],
        nextLabel: 'NEXT — MODULE 6', next: [['Maps', 'Maps compare one place at two points in time: location language and the past simple take over. Your process toolkit rests.'], ['Vocabulary pack PDF', 'englishkurilets.com'], ['Telegram', '@english_rrs · @ielts_ukrainians']],
        links: [{ label: 'Диктант: слухай і друкуй →', url: '../dictation/index.html?t=process-1' }, { label: 'Пишемо разом: man-made процес →', url: '../index.html?t=process-1' }, { label: 'Пишемо разом: природний цикл →', url: '../index.html?t=process-2' }] }
    ]
  };
})();
