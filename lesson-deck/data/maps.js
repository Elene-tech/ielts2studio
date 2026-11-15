/* Module 6 · Maps. Тексти слайдів з презентації Олени (IELTS_Maps_Module6 + A4 Map + Worked Examples), перероблені.
   Правки точності (їх перелік у супровідному повідомленні):
   · у слайдах про Greenfield сторони світу не збігалися з картою (NE/SE переплутані) → усе звірено з намальованою картою;
   · «the bridge was built / expanded» не було на карті → міст тепер намальований і розширений разом з дорогою;
   · «expanding in all directions» (суперечить переліку змін) → прибрано;
   · спекулятивні коментарі («reflecting commercial growth», «to attract tourists») → видалені: на іспиті причини не пишемо;
   · підрахунки слів у моделях перераховані кодом (wc), а не «на око»;
   · додано карту-ПЛАН (школа, вокзал, кампус): там немає compass, інша мова місця (front/back, left-hand side, next to…);
   · додано майбутній час (present → proposed: will be / is going to be);
   · приклади-відповіді переписані: географічний розподіл, точні NE/NW/SE/SW, нейтральний overview, без причин. */
(function () {
  function wc(t) { return String(t).replace(/%%|@@|\{\{|\}\}|\[\[|\]\]/g, '').trim().split(/\s+/).length; }
  var SC = window.MAPSC, GF = SC.GF, SCH = SC.SCH, LIN = SC.LINDEN;

  /* ---------- модель 1: Greenfield (компас, 1990 → 2025, past) ---------- */
  var G1 = `The maps {{illustrate}} how the town of Greenfield @@changed@@ over a period of 35 years, from 1990 to 2025.`;
  var G2a = `Overall, Greenfield was @@transformed@@ from a small market town surrounded by open land into a far more developed settlement, as all of the forest, farmland and fields were @@built on@@.`;
  var G2b = `Only the River Lea, the main road and the park [[survived]], and the last two were @@enlarged@@.`;
  var G3a = `In 1990, {{the north bank}} of the river was occupied by a railway station {{in the north-west}}, a forest {{in the north-east}} and a small market {{in the centre}}.`;
  var G3b = `By 2025, the station had been @@replaced@@ by a car park, and the forest had been @@cleared@@ to make way for a housing estate, while the market had given way to a considerably larger shopping centre, {{just north of the river}}.`;
  var G4a = `{{On the south bank}}, the changes were equally dramatic: the open fields {{in the south-west}} had become a school with sports facilities, and the farmland {{in the south-east}} had been @@developed@@ into an industrial park.`;
  var G4b = `The small park, by contrast, had been @@extended@@ {{eastwards}}, and the road and its bridge had been considerably @@widened@@.`;
  var GWORDS = [G1, G2a, G2b, G3a, G3b, G4a, G4b].reduce(function (n, t) { return n + wc(t); }, 0);

  /* ---------- модель 2: Meadowbank School (план, 2008 → 2024, past) ---------- */
  var P1 = `The plans {{illustrate}} how the ground floor of Meadowbank School was @@reorganised@@ between 2008 and 2024.`;
  var P2 = `Overall, the building underwent a substantial internal redesign: the library and the canteen were @@enlarged@@, while the assembly hall and one of the classrooms were @@converted@@ into specialist facilities. The main entrance and the reception [[stayed where they were]], although a second entrance was @@added@@.`;
  var P3a = `In 2008, {{the back of the building}} contained the library {{on the left}}, followed by three classrooms {{in a row}}.`;
  var P3b = `By 2024, the library had been @@extended@@ {{to the right}}, taking over the space of the first classroom, which no longer existed. Classroom 2 [[remained in the same place]], but the classroom {{at the far right-hand end}} had been @@converted@@ into a computer suite.`;
  var P4a = `{{At the front}}, the assembly hall {{on the left}} had been @@divided@@ into a gym and a drama studio, and the canteen {{on the right}} had been @@enlarged@@ to include a café.`;
  var P4b = `The reception, {{between them and facing the main entrance}}, was [[unchanged]]. In addition, a new side entrance had been @@built@@ {{at the end of the corridor, on the right-hand side}}.`;
  var PWORDS = [P1, P2, P3a, P3b, P4a, P4b].reduce(function (n, t) { return n + wc(t); }, 0);

  /* ---------- зразок 3: Linden Lake (компас, 1975 → 2020, past) ---------- */
  var L1 = `The maps compare the village of Linden Lake in 1975 with its appearance in 2020.`;
  var L2 = `Overall, the village became far more built-up: the farmland and the meadow disappeared under a housing estate and a hotel, and the woodland shrank. Only the church, the lake and the main road [[stayed the same]].`;
  var L3 = `{{To the north of}} the main road, the farmland {{in the north-west}} had been @@replaced@@ by a housing estate. The church {{in the centre}} [[remained]], but the small jetty {{on the shore of the lake}} had been @@developed@@ into a much larger marina.`;
  var L4 = `{{South of}} the main road, the woodland {{in the south-west}} had been @@reduced@@ in size, and the meadow {{in the centre}} had been @@converted@@ into a country hotel. {{In the south-east}}, the cottages had been @@turned@@ into holiday lodges, and a new cycle path had been @@laid@@ {{just south of the main road}} in the east.`;
  var LWORDS = [L1, L2, L3, L4].reduce(function (n, t) { return n + wc(t); }, 0);

  window.DECK = {
    meta: {
      docTitle: 'Module 6 · Maps · презентація',
      brandSub: 'Write It Right · Module 6: Maps',
      credit: 'Elena Kurilets  ·  @english_rrs  ·  @ielts_ukrainians  ·  englishkurilets.com',
      where: 'IELTS Writing Task 1  ·  Module 6: Maps',
      next: { label: 'Пишемо разом →', url: '../index.html?t=maps-1' },
      dict: '../dictation/index.html?t=maps-1'
    },
    chart: GF,
    slides: [
      { type: 'title', module: 'MODULE 6', kicker: 'IELTS Writing Task 1', title: 'Maps',
        sub: 'Describing how a place changed — the language of location, change verbs and the right tense, for town maps AND building plans',
        items: ['01  Two kinds of map — compass or plan', '02  The 60-second map reading', '03  The language of location', '04  Change verbs and tenses', '05  Band 8 models — annotated', '06  Practice task + self-check'] },

      { type: 'stack', cls: 'tight', section: 'Roadmap', title: 'How This Module Works', sub: 'SIX STOPS, ABOUT 75 MINUTES — KNOW WHERE YOU ARE AT EVERY STEP',
        rows: [
          { k: 'blue',  tag: '1', head: 'Diagnose  ·  5 MIN', text: `Read a real Band 5 answer: right facts, wrong tense, no positions, no overview.` },
          { k: 'green', tag: '2', head: 'Read the map  ·  10 MIN', text: `Compass or plan? What is the anchor? What changed — and what stayed? Five questions in sixty seconds.` },
          { k: 'gold',  tag: '3', head: 'Language of location  ·  20 MIN', text: `The heart of the module. Compass maps use north / south-east; building plans use front / back / left-hand side. Then drag objects into place from a description.` },
          { k: 'red',   tag: '4', head: 'Change language  ·  10 MIN', text: `Built, demolished, replaced, expanded, converted, relocated: eight change types, and which tense each situation needs.` },
          { k: 'blue',  tag: '5', head: 'Study two models  ·  15 MIN', text: `A Band 8 answer for a town map and one for a building plan, every location phrase traced back to the map.` },
          { k: 'green', tag: '6', head: 'Write & check  ·  15 MIN', text: `One village map, twenty minutes, then an 8-question self-check before you open the sample.` }],
        footnote: 'Two rules: {{where}} = anchor + direction.  @@What happened@@ = the right change verb in the right tense.' },

      { type: 'example', section: 'Diagnose', title: 'What a Band 5 Answer Looks Like', sub: 'CAN YOU SPOT THE FOUR PROBLEMS BEFORE YOU READ THE FLAGS?',
        lines: [`In 1990 Greenfield has a station, forest, market, park, fields and farmland. In 2025 it has a car park, housing, shopping centre, bigger park, school and industrial park.`, `The town has changed a lot. The road is bigger. The forest is now houses. The station is now a car park. The park is bigger too.`],
        label: 'A TYPICAL BAND 5 ANSWER — THE FOUR PROBLEMS',
        reasons: [
          ['✗  Wrong tense  ·  GRAMMAR', `«has», «is bigger», «is now» — both dates are in the past, so the verbs must be past: «had», «was», «had been replaced».`],
          ['✗  No locations  ·  TASK ACHIEVEMENT', `Two lists of buildings, but nowhere is there a «where». The reader cannot see the map: in the north-west? by the river? Positions ARE the task.`],
          ['✗  Empty overview  ·  COHERENCE', `«The town has changed a lot» says nothing. A real overview names the pattern: farmland and forest → built-up; what survived.`],
          ['✗  Flat change language  ·  LEXICAL RESOURCE', `«is now», «is bigger», «has»: the map gives precise verbs: replaced, cleared, extended, widened, converted.`]],
        footnote: 'Головний інсайт: усі факти тут правильні, і все одно Band 5. Мапи оцінюють за тим, ДЕ ти це помістила і ЯК назвала зміну.' },

      { type: 'dual', cls: 'sm', section: 'Diagnose', title: 'How Examiners Score Map Answers', sub: 'FOUR CRITERIA, 25% EACH — FOR MAPS, LOCATION LANGUAGE CARRIES TWO OF THEM',
        cols: [
          { k: 'gold', head: 'Task Achievement  ·  25%', items: [`Band 7+ requires:`, `· an overview: the overall pattern of change`, `· the key changes, each with its position`, `· what stayed the same (anchors and unchanged features)`, `· no reasons, no opinions: report, never explain`] },
          { k: 'blue', head: 'Coherence & Cohesion  ·  25%', items: [`Band 7+ requires:`, `· exactly 4 paragraphs`, `· body paragraphs grouped by AREA (north bank / south bank, back / front), not by date`, `· a consistent order: always the same direction of travel`] },
          { k: 'red', head: 'Lexical Resource  ·  25%', items: [`Band 7+ requires:`, `· precise location language: {{on the north bank of}}, {{directly opposite}}`, `· varied change verbs: replaced, cleared, extended, converted`, `«in the left» or «is bigger» = Band 5`] },
          { k: 'green', head: 'Grammar Range & Accuracy  ·  25%', items: [`Band 7+ requires:`, `· past perfect passive: the station %%had been replaced%%`, `· past simple for what stayed: the church @@remained@@`, `· the right preposition: {{in}} the north-west, {{to the north of}}, {{on}} the left`] }],
        footnote: 'One skill, two criteria: precise location language raises Task Achievement (the reader can SEE the map) and Lexical Resource (varied, accurate phrases).' },

      { type: 'task', section: 'The Task', title: 'The Task', sub: 'THE TOWN OF GREENFIELD, 1990 AND 2025  ·  20 min  ·  150+ words  ·  a compass map',
        prompt: `The maps below show the town of Greenfield in 1990 and in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'READ THE MAP LIKE AN EXAMINER:  ① Compass: the N arrow tells us to use north / south…  ·  ② Anchors: the river and the main road run through both maps  ·  ③ Two past dates → past tenses  ·  ④ Two banks → two body paragraphs.' },

      { type: 'questions', cls: 'five', section: 'The Task', title: 'How to Read a Map in 60 Seconds', sub: 'FIVE QUESTIONS TO ANSWER BEFORE YOU WRITE A SINGLE WORD',
        items: [
          { n: '01', q: 'Compass or plan?', uk: `A town map with an N arrow: use north / south-east. A building plan has no compass: use front / back / left / right (next slides).`, hl: { legend: true } },
          { n: '02', q: 'What are the anchors?', uk: `The river and the main road are in both maps. Everything else is described FROM them: «on the north bank», «to the east of the road».`, hl: { ids: ['river', 'road'], same: true } },
          { n: '03', q: 'What changed, and how?', uk: `Five features were replaced, and the park and the road were enlarged. Each change has a type: replaced, expanded, built, demolished…`, hl: { diff: true } },
          { n: '04', q: 'What stayed the same?', uk: `River, road and park survived. Always mention what did not change: it is half of the overview.`, hl: { same: true } },
          { n: '05', q: 'Which tense?', uk: `1990 and 2025: both dates are past, so the whole answer is in the past. If a date is now or the future, the tense changes (slide 19).`, hl: { diff: true } }] },

      { type: 'stack', cls: 'tight', section: 'Method', title: 'The 4-Paragraph Framework', sub: 'EVERY MAP ANSWER — ALWAYS EXACTLY THIS SHAPE',
        rows: [
          { k: 'blue',  tag: '§1', head: 'INTRODUCTION  ·  1 sentence  ·  ~20 words', text: `Paraphrase the prompt: name the place and the dates. «The maps illustrate how the town of Greenfield changed…»` },
          { k: 'green', tag: '§2', head: 'OVERVIEW  ·  2 sentences  ·  ~45 words  ·  most important', text: `The overall pattern (open land → built-up) AND what stayed the same. NO individual positions, NO small details.` },
          { k: 'gold',  tag: '§3', head: 'BODY 1  ·  2 sentences  ·  ~60 words', text: `One area: the north bank. Location first, then 1990 → 2025 for each feature.` },
          { k: 'red',   tag: '§4', head: 'BODY 2  ·  2 sentences  ·  ~60 words', text: `The other area: the south bank. Same order as §3, then the features that stayed or grew.` }],
        footnote: 'Group by AREA, not by date: never «In 1990… In 2025…» as two separate paragraphs. The reader wants to compare the same corner before and after.' },

      /* ---------- ЛОКАЦІЯ: компас ---------- */
      { type: 'mapview', section: 'Location', title: 'Location 1 — The Compass Grid', sub: 'NINE ZONES: WHERE IS EACH FEATURE? NORTH-WEST, NORTH, NORTH-EAST…',
        notes: [
          { k: 'blue', head: 'in the {{north-west}} / {{north-east}}', text: `a CORNER of the map: the station was {{in the north-west}} of the town.`, hl: { zones: true, panel: 0, ids: ['nw', 'ne'] } },
          { k: 'green', head: 'in the {{centre}} / {{middle}}', text: `the market was {{in the centre}} of the town, north of the river.`, hl: { zones: true, panel: 0, ids: ['centre'] } },
          { k: 'gold', head: 'in the {{south-west}} / {{south-east}}', text: `the fields were {{in the south-west}}; the farmland {{in the south-east}}.`, hl: { zones: true, panel: 0, ids: ['sw', 'se'] } },
          { k: 'red', head: 'in / on / to the…', text: `IN the north-west (inside) · ON the north bank (a surface) · TO THE NORTH OF the road (outside, next to it).`, hl: { zones: true, panel: 1, ids: ['nw', 'ne', 'sw', 'se'] } }] },

      { type: 'mapview', section: 'Location', title: 'Location 2 — Describe From an Anchor', sub: 'THE EXAMINER WANTS TO SEE THE MAP: START FROM WHAT DOES NOT MOVE',
        notes: [
          { k: 'blue', head: 'on the {{north bank}} of the river', text: `the river divides the map: everything above it is on the north bank, below it the south bank.`, hl: { ids: ['river', 'ne', 'nw', 'centre'], panel: 0, tags: [{ id: 'ne', t: 'on the north bank', p: 0 }] } },
          { k: 'green', head: '{{to the east of}} the road', text: `a feature NEXT to the road, on the right-hand side of the map.`, hl: { ids: ['road', 'ne'], panel: 0, tags: [{ id: 'ne', t: 'to the east of the road', p: 0 }] } },
          { k: 'gold', head: '{{directly across the river from}}', text: `facing each other over the river: the market and the park.`, hl: { ids: ['river', 'centre', 'park'], panel: 0, rel: [{ a: 'centre', b: 'park', t: 'across the river', p: 0 }] } },
          { k: 'red', head: '{{just north of}} / {{close to}} the river', text: `the shopping centre stood {{just north of the river}}, close to the bridge.`, hl: { ids: ['river', 'centre'], panel: 1, tags: [{ id: 'centre', t: 'just north of the river', p: 1 }] } }] },

      { type: 'vocab', section: 'Location', title: 'Compass Maps — Location Phrases', grid: true, sub: 'FOUR WAYS TO SAY «WHERE» WITHOUT REPEATING YOURSELF',
        rows: [
          { k: 'blue', term: 'in the north-west of…', text: `«a railway station {{in the north-west}} of the town»`, note: 'a zone of the whole map (IN)' },
          { k: 'green', term: 'on the north / south bank of…', text: `«a forest {{on the north bank of}} the River Lea»`, note: 'for rivers: ON the bank, not «in the north of the river»' },
          { k: 'gold', term: 'to the east / west of… ', text: `«the market stood {{to the east of}} the main road»`, note: 'next to a feature, outside it (TO THE)' },
          { k: 'red', term: 'just north of… / close to… / beside…', text: `«a car park {{just north of}} the station»`, note: 'precise distance: just / directly / immediately' },
          { k: 'blue', term: 'opposite… / across the river from…', text: `«the park lay {{directly opposite}} the market»`, note: 'facing each other, usually over a river or road' },
          { k: 'green', term: 'along… / alongside… / by the shore', text: `«a cycle path {{ran along}} the lake»`, note: 'a line feature: road, path, river, coast' }],
        tip: ['Trap:', ` «in the north of the river» ✗  →  «{{on the north bank of}} the river» ✓.  «at the left» ✗  →  «{{on the left}}» ✓.  One preposition per phrase, no extras.`] },

      { type: 'dual', cls: 'sm', section: 'Location', title: 'Two Kinds of Map — Two Kinds of Language', sub: 'LOOK AT THE MAP FIRST: IS THERE A COMPASS?',
        cols: [
          { k: 'blue', head: 'TOWN MAP · COMPASS', items: [`Towns, islands, villages, coasts.`, `Tool: north, south-east, the north bank, along the coast.`, `Anchors: river, main road, coast, railway.`, `Group by AREA: north bank / south bank, or north / south of the road.`] },
          { k: 'red', head: 'BUILDING PLAN · NO COMPASS', items: [`Schools, stations, campuses, floors.`, `Tool: at the front / at the back, on the left-hand side, next to, between, opposite.`, `Anchors: the main entrance, the corridor, the central hall.`, `Group by ZONE: back of the building / front, left / right.`] }],
        note: `A plan is seen from the {{main entrance}}: «at the front» = near the entrance, «at the back» = far from it, «on the left» = the left as you walk in.` },

      { type: 'task', section: 'Plans', title: 'A Plan Task', sub: 'MEADOWBANK SCHOOL, GROUND FLOOR, 2008 AND 2024  ·  20 min  ·  150+ words  ·  no compass',
        chart: SCH,
        prompt: `The plans below show the ground floor of Meadowbank School in 2008 and in 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'THERE IS NO COMPASS:  ① Find the anchor: the {{main entrance}} at the bottom  ·  ② The corridor splits the floor into back and front  ·  ③ Left and right are YOUR left and right as you walk in.' },

      { type: 'mapview', section: 'Plans', title: 'Location 3 — Language of a Plan', sub: 'STAND AT THE MAIN ENTRANCE: THE FRONT IS NEAR YOU, THE BACK IS FAR',
        chart: SCH,
        notes: [
          { k: 'blue', head: '{{at the front}} / {{at the back}}', text: `the canteen is at the front (near the entrance); the library is at the back.`, hl: { zones: true, panel: 0 } },
          { k: 'green', head: '{{on the left}} / {{right-hand side}}', text: `the assembly hall was {{on the left}}; the canteen {{on the right-hand side}}.`, hl: { ids: ['hall', 'can'], panel: 0, tags: [{ id: 'hall', t: 'on the left', p: 0 }, { id: 'can', t: 'on the right', p: 0 }] } },
          { k: 'gold', head: '{{between}} … and … / {{opposite}}', text: `the reception was {{between}} the hall and the canteen, {{facing}} the main entrance.`, hl: { ids: ['hall', 'rec', 'can'], panel: 0, rel: [{ a: 'hall', b: 'can', t: 'between', p: 0 }] } },
          { k: 'red', head: '{{at the end of the corridor}}', text: `a new side entrance was built {{at the end of the corridor}}, on the right-hand side.`, hl: { ids: ['corr', 'ent2'], panel: 1, tags: [{ id: 'ent2', t: 'end of the corridor', p: 1 }] } }] },

      { type: 'vocab', section: 'Plans', title: 'Building Plans — Location Phrases', grid: true, sub: 'NO COMPASS: FRONT, BACK, LEFT, RIGHT — ALL SEEN FROM THE MAIN ENTRANCE',
        rows: [
          { k: 'blue', term: 'at the front / at the back of…', text: `«the canteen was {{at the front}} of the building»`, note: 'the entrance side vs the far side' },
          { k: 'green', term: 'on the left / right-hand side', text: `«the library was {{on the left-hand side}}»`, note: 'ON the side, not «at the left»' },
          { k: 'gold', term: 'next to… / beside… / adjacent to…', text: `«the café was {{next to}} the newsagent»`, note: 'side by side: adjacent is the formal word' },
          { k: 'red', term: 'between… and… / in the middle of…', text: `«the reception was {{between}} the hall and the canteen»`, note: 'two neighbours, one on each side' },
          { k: 'blue', term: 'opposite… / facing…', text: `«the information desk was {{opposite}} the main entrance»`, note: 'across the open space, in a straight line' },
          { k: 'green', term: 'at the end of… / along… / near the entrance', text: `«toilets {{at the end of}} the corridor»`, note: 'for corridors, walls and paths' }],
        tip: ['Trap:', ` don't use north / south on a plan: nobody told you where north is. And «the back» is part of the building, not a wall: «{{at the back of}} the building».`] },

      { type: 'end2', section: 'Practice', title: 'Put It in the Right Place', sub: 'AN INTERACTIVE: DRAG THE OBJECT TO THE PLACE THAT THE SENTENCE DESCRIBES',
        rows: [
          ['Level 1 · compass map', 'The hospital stands in the north-east corner, to the east of the Town Hall. Drag it there.'],
          ['Level 2 · station plan', 'No compass: at the front, on the left-hand side, between, opposite the main entrance.'],
          ['Level 3 · campus', 'Mixed: avenue, quad, library. Choose the PRECISE description of the highlighted building.'],
          ['How it works', 'Drag the icon (or tap it, then tap the place). Three tries, then the answer appears. At the end: a phrase bank.']],
        nextLabel: 'OPEN IN A NEW TAB', next: [['«Місце»', 'Живий інтерактив для уроку: 23 завдання, три рівні'], ['Для студентів', 'Те саме посилання в Kwiga: «Місце» у меню модуля']],
        links: [{ label: 'Відкрити «Місце» →', url: '../place/index.html?t=place-1', blank: true }] },

      /* ---------- ЗМІНИ ---------- */
      { type: 'quad', section: 'Change', title: 'Change Language — Things That Appear and Disappear', sub: 'SIX VERBS FOR «NEW» AND «GONE» — USE EACH ONCE',
        boxes: [
          { k: 'green', head: 'NEW — something appeared', items: [`a hotel was @@built@@ / @@constructed@@`, `a cycle path was @@laid@@ along the lake`, `a new entrance was @@added@@ / @@created@@`, `Safe: «appeared» only for the overview`] },
          { k: 'red', head: 'GONE — something disappeared', items: [`the station was @@demolished@@`, `the forest was @@cleared@@`, `the farmland was @@built on@@`, `Never: «was destroyed» (it sounds like a disaster)`] },
          { k: 'gold', head: 'REPLACED — one thing instead of another', items: [`the station was @@replaced@@ by a car park`, `the fields @@gave way to@@ a school`, `the farmland @@was developed into@@ an industrial park`, `the market @@became@@ a shopping centre`] },
          { k: 'blue', head: 'CONVERTED — same building, new use', items: [`the hall was @@converted@@ into a gym`, `the cottages were @@turned into@@ lodges`, `the room was @@divided@@ into two`, `Watch: converted = the walls stay, the function changes`] }] },

      { type: 'quad', section: 'Change', title: 'Change Language — Bigger, Smaller, Moved, Unchanged', sub: 'THE FOUR OTHER CHANGE TYPES — AND WHAT NOT TO FORGET',
        boxes: [
          { k: 'green', head: 'EXPANDED — bigger', items: [`the park was @@extended@@ / @@enlarged@@`, `the road was @@widened@@`, `the library @@doubled in size@@`, `Pair with a direction: extended {{eastwards}}`] },
          { k: 'red', head: 'REDUCED — smaller', items: [`the woodland was @@reduced@@ / @@cut back@@`, `the car park @@shrank@@`, `the lake @@lost@@ part of its shore`, `Active: «shrank» (nobody shrinks it)`] },
          { k: 'gold', head: 'RELOCATED — moved', items: [`the café was @@relocated@@ to the opposite side`, `the café and the newsagent @@swapped places@@`, `the entrance was @@moved@@ to the east`, `Always give the new position`] },
          { k: 'blue', head: 'UNCHANGED — stayed', items: [`the church [[remained]] in the centre`, `the road [[stayed the same]]`, `the reception [[was unchanged]]`, `Use at least two in every answer`] }] },

      { type: 'mapview', section: 'Change', title: 'Change Types on One Plan', sub: 'LOOK AT THE COLOURED BADGES: EACH ONE IS A TYPE OF CHANGE',
        chart: SCH,
        notes: [
          { k: 'green', head: '@@expanded@@', text: `the library and the canteen got bigger.`, hl: { diff: true, ch: ['expanded'] } },
          { k: 'gold', head: '@@converted@@', text: `the hall → gym + drama studio; classroom 3 → computer suite.`, hl: { diff: true, ch: ['converted'] } },
          { k: 'red', head: '@@demolished@@ / @@built@@', text: `classroom 1 no longer exists; a side entrance was added.`, hl: { diff: true, ch: ['gone', 'built'] } },
          { k: 'blue', head: '[[unchanged]]', text: `classroom 2, reception, main entrance.`, hl: { same: true } }] },

      { type: 'matrix', section: 'Change', title: 'Which Tense? Three Situations', sub: 'LOOK AT THE DATES ON THE MAPS BEFORE YOU WRITE THE FIRST VERB',
        head: ['Tense', 'Example'],
        rows: [
          { k: 'blue', label: 'Two past dates<br>1990 → 2025', cells: [`past simple for each state; past perfect for the change`, `In 1990 the station %%stood%% in the north-west. By 2025 it %%had been replaced%% by a car park.`] },
          { k: 'gold', label: 'Past → now<br>1998 → today', cells: [`present perfect for a change that still holds today`, `The car park %%has been replaced%% by a sports hall. The library @@has not changed@@.`] },
          { k: 'red', label: 'Now → future<br>current → proposed', cells: [`will be / is going to be + past participle`, `The ticket office %%will be replaced%% by ticket machines. The platforms @@will remain@@ unchanged.`] }],
        footnote: 'Test: «proposed», «planned», «will» on the map = future. One tense for the whole answer, except for the earlier-than-the-date states («had been»).' },

      /* ---------- МОДЕЛЬ 1: компас ---------- */
      { type: 'model', section: 'Model', title: 'Model Anatomy — §1 Introduction', k: 'blue', label: '§1  INTRODUCTION', chart: GF,
        segs: [{ t: G1, hl: { diff: true },
          chips: [['illustrate how … changed', 'Not «show the changes»: «how + changed» paraphrases the task with a Band 8 verb.'], ['over a period of 35 years', 'Both dates and the gap in one phrase: «from 1990 to 2025» is the frame for the whole answer.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §2 Overview', k: 'green', label: '§2  OVERVIEW', chart: GF,
        segs: [
          { t: G2a, hl: { diff: true },
            chips: [['was transformed from… into…', 'Beginning and end in one passive verb: small town in, developed settlement out. No positions yet.'], ['all of the forest, farmland and fields', 'The pattern: every OPEN feature was built on. Examiners look for a generalisation, not a list.']] },
          { t: G2b, hl: { ids: ['river', 'road', 'park'], same: true },
            chips: [['survived … the last two were enlarged', 'What stayed AND what grew in one sentence: river and road in both maps, park and road bigger.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §3 Body 1: the North Bank', k: 'gold', label: '§3  BODY 1 — THE NORTH BANK', chart: GF,
        segs: [
          { t: G3a, hl: { ids: ['nw', 'ne', 'centre'], panel: 0 },
            chips: [['on the north bank of the river', 'The area opener: it tells the reader the whole paragraph is about the north side. The paragraph split follows the river.'], ['in the north-west / north-east / in the centre', 'The three zones in reading order: left to right. Always the same order, in both paragraphs.']] },
          { t: G3b, hl: { ids: ['nw', 'ne', 'centre'], diff: true, panel: 1 },
            chips: [['had been replaced / cleared', 'Past perfect passive: the change happened BEFORE the second date. Two different verbs, no repeated «replaced».'], ['a considerably larger shopping centre', 'Comparison inside the change: the market is now bigger. Examiners reward comparing.']] }] },

      { type: 'model', section: 'Model', title: 'Model Anatomy — §4 Body 2: the South Bank', k: 'red', label: '§4  BODY 2 — THE SOUTH BANK', chart: GF,
        segs: [
          { t: G4a, hl: { ids: ['sw', 'se'], diff: true },
            chips: [['On the south bank, the changes were equally dramatic', 'The area opener mirrors §3 and links the paragraphs («equally» = comparison with the north).'], ['had become / had been developed into', 'Two different change verbs for two features. Never «replaced» three times in a row.']] },
          { t: G4b, hl: { ids: ['park', 'road'], diff: true },
            chips: [['by contrast', 'Contrast marker: everything else was replaced, the park was only enlarged. Cohesion and comparison in two words.'], ['extended eastwards', 'The direction of the change. «Bigger» alone is Band 5; «eastwards» is the map in one word.']] }] },

      { type: 'full', withChart: true, section: 'Model', title: 'The Band 8 Model Answer', sub: '~' + GWORDS + ' WORDS · TOWN MAP — LOCATION IN ORANGE, CHANGE IN PINK, WHAT STAYED IN GOLD' },

      /* ---------- МОДЕЛЬ 2: план ---------- */
      { type: 'model', section: 'Plans', title: 'Plan Model — §1 Introduction + §2 Overview', k: 'blue', label: '§1 + §2  INTRODUCTION AND OVERVIEW', chart: SCH, grp: 'plan',
        segs: [
          { t: P1, hl: { diff: true },
            chips: [['reorganised', 'Not «changed» again: an internal redesign = reorganised / redesigned. A plan answer needs its own verb.']] },
          { t: P2, hl: { diff: true, legend: true },
            chips: [['underwent a substantial internal redesign', 'The pattern: the walls stayed, the rooms inside changed. No positions in the overview.'], ['stayed where they were … although', 'Anchors AND a contrast in one sentence: entrance and reception unchanged, a second entrance added.']] }] },

      { type: 'model', section: 'Plans', title: 'Plan Model — §3 The Back of the Building', k: 'gold', label: '§3  BODY 1 — THE BACK', chart: SCH, grp: 'plan',
        segs: [
          { t: P3a, hl: { zones: true, panel: 0, ids: ['lib', 'c1', 'c2', 'c3'] },
            chips: [['the back of the building', 'The zone opener: the row of rooms far from the entrance. No compass needed.'], ['on the left, followed by … in a row', 'Left to right: the order of the rooms. Same direction in both years.']] },
          { t: P3b, hl: { ids: ['lib', 'c1', 'c3', 'comp'], diff: true, panel: 1 },
            chips: [['extended to the right, taking over the space of…', 'Direction + what disappeared: classroom 1 is not «demolished», its space was absorbed.'], ['at the far right-hand end', 'The extreme position, without any compass: far + the side.']] }] },

      { type: 'model', section: 'Plans', title: 'Plan Model — §4 The Front of the Building', k: 'red', label: '§4  BODY 2 — THE FRONT', chart: SCH, grp: 'plan',
        segs: [
          { t: P4a, hl: { ids: ['hall', 'can'], diff: true },
            chips: [['At the front, the assembly hall on the left', 'A new zone, the same order (left to right) as the back row.'], ['divided into / enlarged to include', 'The hall became TWO rooms and the canteen got a new function: dividing and including are plan verbs.']] },
          { t: P4b, hl: { ids: ['rec', 'corr', 'ent2'], same: true, diff: true },
            chips: [['between them and facing the main entrance', 'Two location tools in a row: between + facing. The reader can see the reception.'], ['at the end of the corridor, on the right-hand side', 'The new feature closes the answer: a position without a compass.']] }] },

      { type: 'full', withChart: true, section: 'Plans', title: 'The Plan Model Answer', grp: 'plan', chart: SCH, sub: '~' + PWORDS + ' WORDS · BUILDING PLAN — NO COMPASS, LOCATION FROM THE MAIN ENTRANCE' },

      { type: 'matrix', section: 'Plans', title: 'Town Map vs Plan — What Changes in Your Answer', sub: 'SAME FOUR PARAGRAPHS, DIFFERENT TOOLS',
        head: ['Town map · compass', 'Building plan · no compass'],
        rows: [
          { k: 'blue', label: 'Anchor', cells: [`the river, the main road`, `the main entrance, the corridor`] },
          { k: 'green', label: 'Zones', cells: [`{{in the north-west}}, {{in the centre}}`, `{{at the front}}, {{at the back}}`] },
          { k: 'gold', label: 'Sides', cells: [`{{on the north bank}}, {{to the east of}} the road`, `{{on the left-hand side}}, {{at the far right-hand end}}`] },
          { k: 'red', label: 'Body split', cells: [`north bank / south bank`, `back row / front row`] },
          { k: 'blue', label: 'Typical verbs', cells: [`replaced, cleared, built on, extended`, `converted, divided, enlarged, relocated`] }] },

      /* ---------- ПІДГОТОВКА ДО ПИСЬМА ---------- */
      { type: 'vocab', section: 'Writing', title: 'Overview Language for Maps', sub: 'ONE SENTENCE FOR THE PATTERN, ONE FOR WHAT STAYED',
        top: { label: 'THE OVERVIEW FORMULA', text: `Overall, X was @@transformed@@ from … into …, as [the open features] were @@built on@@. Only [anchors] [[survived]] / [[remained unchanged]].` },
        rows: [
          { k: 'blue', term: 'became far more built-up / developed', text: `«the village became {{far more built-up}}»`, note: 'the standard pattern for towns' },
          { k: 'green', term: 'underwent a substantial redesign', text: `«the school {{underwent a substantial redesign}}»`, note: 'for plans: the inside changed' },
          { k: 'gold', term: 'was transformed from… into…', text: `«the site was {{transformed from}} a car park {{into}} a campus»`, note: 'start state → end state' },
          { k: 'red', term: 'only … survived / remained unchanged', text: `«only the church and the lake [[remained unchanged]]»`, note: 'always name the survivors' }],
        tip: ['Never in the overview:', ` positions («in the north-west»), small details, numbers of rooms. Those belong in §3 and §4.`] },

      { type: 'quad', section: 'Writing', title: 'Four Grammar Traps in Map Answers', sub: 'THE MISTAKES THAT HOLD GRAMMAR AT BAND 5–6',
        boxes: [
          { k: 'red', head: '1  there was / there were', items: [`✗ There was a forest and farmland`, `✓ There %%were%% a forest and farmland`, `✓ Better: «the north-east %%was occupied by%% a forest»`, `Agree the verb with the NEAREST noun, or avoid «there was»`] },
          { k: 'gold', head: '2  in / on / to the north of', items: [`✓ {{in}} the north-west (a zone)`, `✓ {{on}} the north bank (a river side)`, `✓ {{to the north of}} the road (outside, next to)`, `✗ in the north of the river · ✗ at the left`] },
          { k: 'blue', head: '3  irregular V3', items: [`built / built (not builded)`, `rebuilt · laid · cut · shrunk · become`, `The park %%had been extended%% (regular)`, `The forest %%had been cleared%% (regular)`] },
          { k: 'green', head: '4  passive: delete the agent', items: [`✗ The council replaced the station`, `✓ The station %%was replaced%% by a car park`, `Nobody on the map did it: the agent adds no information`, `Active only for self-changing: the lake @@shrank@@`] }] },

      { type: 'rewrite', section: 'Writing', title: 'Upgrade Challenge — Band 6 → Band 8', sub: 'FIX THE POSITION, THE TENSE AND THE VERB',
        html: `<b style="color:#C0392B">BAND 6:</b><br>«In 1990 the forest is in the right top and the fields is in the right bottom. In 2025 the forest is houses and the fields is a factory.»<br><br><b style="color:#1A7A4A">BAND 8:</b><br>«In 1990, {{the north-east}} was occupied by a forest and {{the south-east}} by farmland. By 2025, the forest had been @@cleared@@ for housing, and the farmland had been @@developed@@ into an industrial park.»`,
        label: 'FIVE UPGRADES', items: [['right top / right bottom', 'north-east / south-east'], ['is → was', 'both dates are past'], ['the fields is', 'agreement + «the north-east was occupied by»'], ['is houses', 'had been cleared for housing'], ['is a factory', 'had been developed into an industrial park']] },

      { type: 'task', section: 'Practice', title: 'Your Turn — Linden Lake', sub: 'THE VILLAGE OF LINDEN LAKE, 1975 AND 2020  ·  20 min  ·  150+ words  ·  a compass map',
        chart: LIN,
        prompt: `The maps below show the village of Linden Lake in 1975 and in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
        footnote: 'BEFORE YOU WRITE:  ① The anchors: the lake, the main road, the church  ·  ② Two areas: north of the road / south of the road  ·  ③ Past tenses  ·  ④ Eight changes, one overview. Then open the self-check.' },

      { type: 'check', section: 'Practice', title: 'Self-Check Before You Open the Sample', sub: 'EIGHT QUESTIONS AN EXAMINER WOULD ASK',
        items: [
          ['01', 'Is there an overview with a pattern AND what stayed?', 'Two sentences, no positions, no numbers of features.'],
          ['02', 'Does every change have a position?', 'in the north-west · on the north bank · to the east of · at the front.'],
          ['03', 'Are all verbs past (and past perfect for the change)?', 'By 2020 the farmland had been replaced.'],
          ['04', 'Are the paragraphs grouped by AREA, not by date?', 'North of the road / south of the road.'],
          ['05', 'Did I mention at least two unchanged features?', 'The church remained; the road stayed the same.'],
          ['06', 'Did I vary the change verbs?', 'replaced, cleared, converted, extended, reduced — not «replaced» four times.'],
          ['07', 'Is every preposition right?', 'in the north-west · on the bank · to the north of the road.'],
          ['08', 'Is there no reason, no opinion, no «to attract tourists»?', 'Only what the map shows.']] },

      { type: 'model', section: 'Sample', title: 'Sample Answer — §1 Introduction', k: 'blue', label: '§1  INTRODUCTION', chart: LIN, grp: 'linden',
        segs: [{ t: L1, hl: { diff: true } }] },
      { type: 'model', section: 'Sample', title: 'Sample Answer — §2 Overview', k: 'green', label: '§2  OVERVIEW', chart: LIN, grp: 'linden',
        segs: [{ t: L2, hl: { ids: ['church', 'lake', 'road'], same: true } }] },
      { type: 'model', section: 'Sample', title: 'Sample Answer — §3 North of the Road', k: 'gold', label: '§3  BODY 1', chart: LIN, grp: 'linden',
        segs: [{ t: L3, hl: { ids: ['nw', 'jetty', 'church'], diff: true } }] },
      { type: 'model', section: 'Sample', title: 'Sample Answer — §4 South of the Road', k: 'red', label: '§4  BODY 2', chart: LIN, grp: 'linden',
        segs: [{ t: L4, hl: { ids: ['sw', 'sc', 'se'], diff: true } }] },

      { type: 'full', withChart: true, section: 'Sample', title: 'The Sample Answer — Linden Lake', grp: 'linden', chart: LIN, sub: '~' + LWORDS + ' WORDS · A COMPASS MAP, THE SAME TOOLS AS GREENFIELD' },

      { type: 'end2', section: 'Summary', title: 'Module 6 — Summary', sub: 'THE WHOLE MODULE ON ONE SCREEN',
        rows: [
          ['Read', 'Compass or plan? Anchors, changes, survivors, tense.'],
          ['Locate', 'Compass: in the north-west · on the north bank · to the east of. Plan: at the front · on the left-hand side · between.'],
          ['Change', 'built · demolished · replaced · extended · reduced · converted · relocated · unchanged.'],
          ['Tense', 'Two past dates → past simple + past perfect. Now → future: will be.'],
          ['Shape', '§1 paraphrase · §2 pattern + survivors · §3, §4 by area.']],
        nextLabel: 'NEXT STEP', next: [['Writing Studio', 'Write your own answer with the 4-paragraph tool and a new map'], ['Module 7', 'Mixed Tasks — Choosing Your Strategy']],
        links: [{ label: 'Пишемо разом →', url: '../index.html?t=maps-1' }, { label: 'Диктант →', url: '../dictation/index.html?t=maps-1' }, { label: 'Місце →', url: '../place/index.html?t=place-1' }] }
    ]
  };
})();
