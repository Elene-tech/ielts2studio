/* Module 4 · Tables. Тексти слайдів з презентації Олени (IELTS_Task_1__Tables___Module_4_Redesigned.pptx).
   Правки точності (див. супровідне повідомлення): слайд 10 мав цифри з Bar Charts (£120, £95…) → переписано під цю таблицю;
   «Gen Z's only defeat» / «led every other category» (Gen Z програє ще й на news) → «entertainment category»;
   «1 hour on both TikTok and gaming» (у Boomers 1 і 2) → Gen X 8 hrs on both YouTube and news;
   «Millennials … the only group to top a category besides Gen Z» (Boomers топають news) → «to beat Gen Z in an entertainment category»;
   «Gen Z led in every new-media category» (streaming — ні) → «most online entertainment categories»;
   модель використовує 13 клітинок із 20 (не 11) → 7 пропущено; правило «20 → 10» узгоджене: 10–13 у відповіді, 7–10 поза нею;
   reveal «8 cells became 5» → ті самі 5 клітинок; sample answer: «decline / revival / still / remained» (один рік) прибрано;
   «Next: Module 5 — Tables» → Process Diagrams; «spent × 7» → ×10; вступ = 1 речення, ~25–30 слів; слова в §3 ~90, §4 ~60;
   модель зі слайда 11 і анотована модель — один текст. */
window.DECK = {
  meta: {
    docTitle: 'Module 4 · Tables · презентація',
    brandSub: 'Write It Right · Module 4: Tables',
    credit: 'Elena Kurilets  ·  @english_rrs  ·  @ielts_ukrainians  ·  englishkurilets.com',
    where: 'IELTS Writing Task 1  ·  Module 4: Tables',
    next: { label: 'Пишемо разом →', url: '../index.html?t=table-1' },
    dict: '../dictation/index.html?t=table-1'
  },
  chart: {
    type: 'table',
    title: 'Average weekly hours on five online activities, UK 2023',
    corner: 'Activity · hrs/week',
    cols: ['Gen Z\n16–24', 'Millennials\n25–40', 'Gen X\n41–56', 'Boomers\n57–70'],
    rows: [
      { label: 'Short-form video (TikTok, Reels)', data: [12, 8, 4, 1] },
      { label: 'YouTube', data: [14, 10, 8, 5] },
      { label: 'Streaming (Netflix etc.)', data: [10, 12, 9, 6] },
      { label: 'Online gaming', data: [15, 9, 5, 2] },
      { label: 'News websites', data: [3, 5, 8, 11] }
    ]
  },
  slides: [
    { type: 'title', module: 'MODULE 4', kicker: 'IELTS Writing Task 1', title: 'Tables',
      sub: 'Selecting what matters — grouping, exceptions and precise comparisons at Band 7–8',
      items: ['01  The #1 table mistake — transcribing cells', '02  The 60-second table reading + selection', '03  The 4-paragraph method', '04  Band 8 model — annotated', '05  Grouping & exception language', '06  Practice task + self-check'] },

    { type: 'stack', section: 'Roadmap', title: 'How This Module Works', sub: 'SIX STOPS, ABOUT 60 MINUTES — KNOW WHERE YOU ARE AT EVERY STEP',
      rows: [
        { k: 'blue',  tag: '1', head: 'Diagnose  ·  5 MIN', text: `Read a real Band 5 answer that transcribes a table cell by cell — and find out why it stops at Band 5.` },
        { k: 'green', tag: '2', head: 'Understand the score  ·  5 MIN', text: `Four criteria, 25% each — not just vocabulary. Every block in this module names the criterion it trains.` },
        { k: 'gold',  tag: '3', head: 'Read the charts  ·  10 MIN', text: `One table, five activities, four generations, sixty seconds — plus the skill no other chart needs: choosing what to leave out.` },
        { k: 'red',   tag: '4', head: 'Study the model  ·  15 MIN', text: `A Band 8 answer taken apart paragraph by paragraph — every phrase explained, nothing left as magic.` },
        { k: 'blue',  tag: '5', head: 'Build vocabulary  ·  10 MIN', text: `Grouping and exception language instead of five flat lists — plus the grammar traps Ukrainian speakers hit most.` },
        { k: 'green', tag: '6', head: 'Write & check  ·  20 MIN', text: `First an upgrade drill, then a full timed task on a new table — with an examiner-style checklist to score yourself.` }],
      footnote: 'Що знадобиться: ручка, аркуш і таймер. З кроку 6 пишемо повноцінні тексти — не «подумки», а на папері.' },

    { type: 'example', section: 'Diagnose', title: 'What a Band 5 Answer Looks Like', sub: 'READ THIS FIRST — CAN YOU SPOT WHAT IS WRONG?',
      lines: [`Gen Z spent 12 hours on TikTok. Millennials spent 8 hours. Gen X spent 4 hours. Boomers spent 1 hour. Gen Z spent 14 hours on YouTube. Millennials spent 10 hours. Gen X spent 8 hours. Boomers spent 5 hours.`, `Gen Z spent 15 hours on gaming. Millennials spent 9 hours… The table also shows hours for streaming and news websites. Boomers spent more on news websites than the other groups.`],
      label: 'WHY THIS STOPS AT BAND 5',
      reasons: [
        ['✗  Separate sentences  ·  TASK + LEXIS', `One cell per sentence, never two generations in the same clause. The examiner wants «Gen Z devoted three times as much time as Gen X» — in ONE sentence.`],
        ['✗  Overview  ·  TASK ACHIEVEMENT', `The text jumps straight into cells. No overview — which generation dominates, and where does the pattern flip? Task Achievement is capped at Band 5.`],
        ['✗  «spent» × 10  ·  LEXICAL RESOURCE', `The same verb ten times, plus «spent more» — zero grouping or comparative vocabulary. This alone holds Lexical Resource at 5.`],
        ['✗  No grouping  ·  COHERENCE', `Row by row, cell by cell — a guided tour of the whole table. Band 7+ SELECTS: young-led activities vs the flipped ones, mid-range cells left out.`]],
      footnote: 'Головний інсайт модуля: таблиця — це не список для переписування, а дані для відбору. 20 цифр у таблиці — 10–13 у твоїй відповіді. Решта не потрібна екзаменаторові: у нього і так є таблиця.' },

    { type: 'dual', cls: 'sm', section: 'Diagnose', title: 'What the Examiner Actually Scores', sub: 'FOUR CRITERIA — 25% EACH. VOCABULARY IS ONLY ONE OF THEM.',
      cols: [
        { k: 'gold', head: 'Task Achievement  ·  25%', items: [`Band 7+ requires:`, `· a clear overview — the leading group overall + the sharpest contrast`, `· key features selected, not every cell transcribed`, `· data that supports the overview`, `Weakest point of most Band 5 answers.`] },
        { k: 'blue', head: 'Coherence & Cohesion  ·  25%', items: [`Band 7+ requires:`, `· exactly 4 paragraphs with clear roles`, `· categories grouped logically — young-led vs flipped patterns`, `· two groups compared in one sentence: whereas, while, unlike`, `Structure is decided before you start writing.`] },
        { k: 'red', head: 'Lexical Resource  ·  25%', items: [`Band 7+ requires:`, `· grouping language: respectively, intermediate figures, with the exception of`, `· time verbs beyond «spent»: devoted, allocated, recorded, topped`, `· exception language: stood out, bucked the pattern, despite`, `The only criterion most courses teach. We do it in one matrix.`] },
        { k: 'green', head: 'Grammar Range & Accuracy  ·  25%', items: [`Band 7+ requires:`, `· past simple — the table is dated 2023`, `· comparative grammar: more than, as much as, the figure for`, `· correct articles with data phrases`, `Where Ukrainian speakers lose the most «invisible» points — see p.18.`] }],
      footnote: 'Watch for the criterion tags on the following pages — every technique you learn here is mapped to the exact 25% it improves.' },

    { type: 'task', section: 'The Task', title: 'The Task', sub: 'SCREEN TIME BY GENERATION — UNITED KINGDOM, 2023  ·  20 min  ·  150+ words  ·  20 cells → 10–13',
      prompt: `The table below shows the average number of hours per week spent on five online activities by four generations in the UK in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
      footnote: 'Before you read on: look at the table for one minute and answer the five questions on the next page for yourself — including the new one: which cells do you LEAVE OUT?' },

    { type: 'questions', cls: 'five', section: 'The Task', title: 'How to Read a Table in 60 Seconds', sub: 'FIVE QUESTIONS — INCLUDING THE ONE ONLY TABLES NEED: WHAT DO YOU LEAVE OUT?',
      items: [
        { n: '01', q: 'What is being measured?', uk: 'Average weekly hours on five online activities — not money, not percentages. Hours.', hl: { legend: true } },
        { n: '02', q: 'What are the four groups?', uk: 'Gen Z (16–24) · Millennials (25–40) · Gen X (41–56) · Boomers (57–70) — a generational ladder from newest media to oldest.', hl: { c: [0, 1, 2, 3] } },
        { n: '03', q: 'Which generation dominates — and where?', uk: 'Gen Z leads in gaming (15), YouTube (14) and short-form video (12) — the newest media belong to the youngest.', hl: { cells: [[3, 0], [1, 0], [0, 0]] } },
        { n: '04', q: 'Where does the pattern flip?', uk: 'News websites: Boomers lead at 11 hours, Gen Z last at 3. Streaming: Millennials top the table at 12 — the one entertainment category Gen Z does not lead.', hl: { cells: [[4, 3], [4, 0], [2, 1]] } },
        { n: '05', q: 'Which cells do you LEAVE OUT?', uk: 'Mid-range cells with no story: Gen X streaming (9), Millennial news (5). 20 cells in the table — about 10–13 in your answer.', hl: { cells: [[2, 2], [4, 1]] } }] },

    { type: 'stack', cls: 'tight', section: 'Method', title: 'The 4-Paragraph Framework', sub: 'THE SAME SKELETON AS MODULE 1 — ONLY THE VOCABULARY ENGINE CHANGES',
      rows: [
        { k: 'blue',  tag: '§1', head: 'INTRODUCTION  ·  1–2 sentences  ·  ~25–30 words', text: `Paraphrase the prompt — what is measured, which groups, which categories. Never copy it word for word.` },
        { k: 'green', tag: '§2', head: 'OVERVIEW  ·  2–3 sentences  ·  no numbers  ·  most important', text: `The widest view: which generation dominates online entertainment + where the pattern flips — no data, no figures.` },
        { k: 'gold',  tag: '§3', head: 'BODY 1  ·  3–4 sentences  ·  ~80–90 words', text: `Group A — the young-led activities (gaming, TikTok, YouTube). Extremes first, generations compared in one sentence.` },
        { k: 'red',   tag: '§4', head: 'BODY 2  ·  2–4 sentences  ·  ~55–60 words', text: `Group B — the flipped categories (news, streaming). Open with a contrast linker: «In contrast, …».` }],
      waysLabel: 'YOUR 20 MINUTES',
      ways: [['3 min', 'read the charts, answer the 5 questions, plan the groups'], ['15 min', 'write §1 → §2 → §3 → §4, in this order, without pausing'], ['2 min', 'check tenses, articles and prepositions — nothing else']],
      footnote: 'You learned this skeleton in Module 1. Here we only re-tune §2–§4 for group comparisons — the structure never changes.' },

    { type: 'stack', section: 'Method', title: '§1 Introduction — Paraphrase, Never Copy', sub: '1 SENTENCE · ~25–30 WORDS · THE SAME JOB IN EVERY TASK — COHERENCE + LEXICAL RESOURCE',
      rows: [
        { k: 'bad',  head: '✗  WRONG — COPIED', text: `«The table below shows the average number of hours per week spent on five online activities by four generations in the UK in 2023.»` },
        { k: 'good', head: '✓  CORRECT — PARAPHRASED', text: `«The table provides data on the average weekly hours devoted to five online activities by four generations — Gen Z, Millennials, Gen X and Boomers — in the UK in 2023.»` }],
      waysLabel: 'THE 3 MOVES THAT MAKE IT A PARAPHRASE',
      ways: [['Change the main verb', 'show → provides data on · compares · illustrates · outlines — «provides data on» is the most honest verb for a table'], ['Change the noun phrase', 'hours spent → weekly hours devoted to · time allocation · weekly time dedicated to — formal phrases that kill the repeated «spent».'], ['Add what the prompt lacks', '«by four generations» → name them: Gen Z, Millennials, Gen X and Boomers — precision the prompt only implied.']],
      footnote: 'Не аналізуй у вступі. Жодних цифр і висновків у §1 — лише перефразоване завдання. Аналіз починається з §2.' },

    { type: 'stack', section: 'Method', title: '§2 Overview — the Paragraph That Decides Your Band', sub: '2–3 SENTENCES · NO NUMBERS · THE WIDEST VIEW OF THE WHOLE TABLE — TASK ACHIEVEMENT',
      rows: [
        { k: 'star', head: '★  No overview → Task Achievement is capped at Band 5, no matter how good the rest is. This is the cheapest band point you will ever earn.' },
        { k: 'good', head: '✓  DO — 2–3 sentences', text: `1. Name the dominant group overall: «Gen Z led in most online entertainment categories»\n2. Name the flip: «news websites reversed the pattern — Boomers led there»\n3. Optionally, a generational split: «younger and older generations favoured opposite media»` },
        { k: 'bad',  head: '✗  DO NOT', text: `· No numbers — «15 hours vs 2 hours» is body detail, not overview\n· No cell-by-cell narration — save it for §3–§4\n· No opinions or reasons — «because Gen Z grew up with phones» is not data` },
        { k: 'gold', head: 'THE MODEL OVERVIEW — MEMORISE THE SHAPE, NOT THE WORDS', text: `«Overall, Gen Z recorded the highest figures for the newest forms of entertainment — particularly online gaming and short-form video — by a considerable margin. However, news websites displayed a strikingly reversed pattern, with Boomers spending the most time on them.»` }] },

    { type: 'dual', section: 'Method', title: '§3 & §4 Body Paragraphs — Group, Don\'t Narrate', sub: 'GROUP YOUR CATEGORIES LOGICALLY — NEVER GO CELL BY CELL — COHERENCE + TASK ACHIEVEMENT',
      cols: [
        { k: 'gold', head: 'BODY 1 (§3) — where Gen Z leads', items: [`Gaming + Short-form video + YouTube — the activities where the youngest generation leads.`, `Key data points to hit:`, `· gaming — the highest cell in the table: 15 vs 2 hours (Gen Z vs Boomers)`, `· short-form video — the same direction: 12 → 1`, `· YouTube — falling steadily across the generations: 14 → 5`, `All four generations in ONE sentence per activity — never cell by cell.`] },
        { k: 'red', head: 'BODY 2 (§4) — where the pattern flips', items: [`News websites + Streaming — where older generations lead.`, `Key data points to hit:`, `· news — reversed: Boomers 11 hours vs Gen Z 3`, `· streaming — the exception: Millennials top the table at 12, marginally ahead of Gen Z (10)`, `· mid-range cells (Gen X streaming 9, Millennial news 5) — leave out`, `Open with «In contrast, …» — the linker signals the switch of focus.`] }],
      footnote: 'KEY RULE — group by PATTERN, not by row order. Grouping by generation (§3 Gen Z, §4 Boomers) would also work — pick whichever structure makes your two «big stories» easiest to see. And never explain WHY — describe data, not causes.' },


    { type: 'model', section: 'Model', title: 'Model Anatomy — §1 Introduction', k: 'blue', label: '§1  INTRODUCTION',
      segs: [{ t: `The table {{provides data on}} the {{average weekly hours}} that {{four generations}} in the UK {{devoted to}} {{five online activities}} {{in 2023}}.`, hl: { legend: true },
        chips: [['provides data on', 'the most honest verb for a table; «compares» and «illustrates» also work, «shows» is Band 6'], ['average weekly hours … devoted to', 'full paraphrase of «hours per week spent on»: nominalisation is the natural grammar of tables'], ['four generations … five online activities', 'both dimensions of the table named, groups left for the body'], ['in 2023', 'the date is flagged here; the whole answer stays in past simple']] }] },

    { type: 'model', section: 'Model', title: 'Model Anatomy — §2 Overview', k: 'green', label: '§2  OVERVIEW',
      segs: [
        { t: `{{Overall, Gen Z recorded the highest figures}} for the newest forms of entertainment, particularly online gaming and short-form video, {{by a considerable margin}}.`, hl: { cells: [[3, 0], [0, 0], [1, 0]] },
          chips: [['the highest figures for the newest forms', 'the widest pattern first: one generation dominates the new media'], ['zero numbers', 'patterns only. Every hour figure waits for §3–§4']] },
        { t: `However, news websites displayed {{a strikingly reversed pattern}}, {{with Boomers spending the most time}} on them.`, hl: { r: [4] },
          chips: [['However … a strikingly reversed pattern', 'sentence two names the flip: the one row where the oldest win'], ['with Boomers spending the most', 'the with-clause attaches the exception without a new sentence']] }] },

    { type: 'model', section: 'Model', title: 'Model Anatomy — §3 Body 1', k: 'gold', label: '§3  BODY 1 — WHERE GEN Z LEADS',
      segs: [
        { t: `{{With regard to gaming}}, Gen Z spent an average of 15 hours per week — {{more than seven times}} the Boomer figure of {{just}} 2 hours and {{well over one and a half times}} the Millennial figure (9 hrs).`, hl: { cells: [[3, 0], [3, 3], [3, 1]] },
          chips: [['① With regard to…', 'opens with the CATEGORY, not a group name — the analytical opener'], ['② multiplier + «just»', 'the extreme and the gap in one breath: 15 ÷ 2 = 7.5']] },
        { t: `{{A similar pattern held for}} short-form video: Gen Z devoted 12 hours weekly to TikTok and Reels, {{three times}} the Gen X figure (4 hrs), while Boomers recorded {{a negligible single hour}}.`, hl: { cells: [[0, 0], [0, 2], [0, 3]] },
          chips: [['③ A similar pattern held for', 'links two rows without a new structure'], ['④ a negligible single hour', 'one adjective grades the smallest cell']] },
        { t: `YouTube {{told the same story}}, with figures {{falling steadily}} from 14 hours for Gen Z to 5 for Boomers.`, hl: { r: [1] },
          chips: [['⑤ told the same story · falling steadily', 'a row-to-row bridge + a pattern across the generations — not a movement in time']] }] },

    { type: 'model', section: 'Model', title: 'Model Anatomy — §4 Body 2', k: 'red', label: '§4  BODY 2 — WHERE THE PATTERN FLIPS',
      segs: [
        { t: `{{In contrast}}, older generations led elsewhere. News websites revealed {{a flipped pattern}}: Boomers spent 11 hours a week on them, {{noticeably more than}} Gen X (8 hrs) and {{nearly four times}} the Gen Z figure of 3.`, hl: { cells: [[4, 3], [4, 2], [4, 0]] },
          chips: [['① In contrast', 'opens Body 2 — the signal of the focus switch'], ['② a flipped pattern', 'names the reversal in two words; 11 ÷ 3 = 3.7 → «nearly four times»']] },
        { t: `Streaming was {{the one category where}} Millennials {{topped the table}}, at 12 hours — {{marginally ahead of}} Gen Z (10 hrs).`, hl: { cells: [[2, 1], [2, 0]] },
          chips: [['③ the one category where … topped the table', 'exception framing + a Band 8 verb'], ['④ marginally ahead of', 'the adverb matches the 12 vs 10 gap']] }] },

    { type: 'full', withChart: true, section: 'Model', title: 'The Band 8 Model Answer', sub: '~210 WORDS · THE COMPLETE ANSWER — NOW READ IT AS ONE TEXT, WITH THE TABLE IN VIEW' },

    { type: 'matrix', section: 'Vocabulary', title: 'The Selection Matrix — 20 Cells In, 7–10 Cells Out', sub: 'THE SKILL NO OTHER CHART TYPE NEEDS — WHAT TO INCLUDE, WHAT TO LEAVE OUT',
      head: ['THE RULE', 'FROM OUR TABLE'],
      rows: [
        { k: 'good', label: '✓ EXTREMES', cells: [`Highest and lowest cell in each row or column — they anchor your comparisons.`, `Gaming 15 (highest cell in the table) · TikTok for Boomers: 1 hour (lowest)`] },
        { k: 'gold', label: '✓ EXCEPTIONS', cells: [`Any row or group that bucks the general trend — the most interesting story.`, `Boomers lead news websites (11) · Millennials top streaming (12) — the one entertainment category Gen Z does not lead`] },
        { k: 'blue', label: '✓ BIG CONTRASTS', cells: [`Cells where the gap between groups is striking — worth a multiplier sentence.`, `TikTok: Gen Z 12 = three times Gen X (4), twelve times Boomers (1)`] },
        { k: 'bad', label: '✗ MID-RANGE', cells: [`Cells that are neither extreme nor exceptional — including them wastes words.`, `Gen X streaming (9) · Millennial news (5) · Gen X YouTube (8) — no story, leave out`] },
        { k: 'bad', label: '✗ THE OBVIOUS', cells: [`Never explain causes. «Young people like gaming because they grew up with it» is opinion, not data.`, `«Gen Z spent more because they are digital natives» — forbidden. Describe, don't explain.`] }],
      footnote: 'THE SELECTION TEST — for every cell ask: «Does it support my overview or reveal an exception?» If not, leave it out. The examiner already has the table — they are marking your selection, not your transcription.' },

    { type: 'dual', section: 'Vocabulary', title: 'Grouping & Exception Language — Say More with Fewer Words', sub: 'THE PHRASES THAT HANDLE MULTIPLE CELLS IN ONE CLAUSE',
      cols: [
        { k: 'blue', head: 'GROUPING — several cells, one clause', items: [`respectively — links two values to two groups in order: «Gen X and Millennials recorded 8 and 10 hours respectively»`, `recording intermediate figures of — groups mid-range cells without listing them as equals of the extremes`, `across all four groups — one phrase for a universal pattern: «YouTube fell steadily across all four groups»`, `in virtually every category — avoids listing each row`, `both … and … — «Gen X spent 8 hours on both YouTube and news websites»`] },
        { k: 'red', head: 'EXCEPTIONS — tables always hide at least one', items: [`stood out as — «Millennials stood out as the only group to beat Gen Z in an entertainment category»`, `deviated from / bucked the pattern — «news websites bucked the pattern seen elsewhere»`, `the notable exception — «The notable exception was streaming, where Millennials led at 12 hours»`, `despite / in spite of — «despite leading in gaming, YouTube and short-form video»`] }],
      footnote: `Topic openers for body paragraphs: With regard to… · In terms of… · Turning to… · A similar pattern held for… · Notably,…\nGen X spent 8 hours on YouTube. Millennials spent 10 hours on YouTube.  →  Gen X and Millennials recorded intermediate figures of 8 and 10 hours respectively.` },

    { type: 'quad', section: 'Grammar', title: 'Grammar Traps — with a Ukrainian Accent', sub: 'THE «INVISIBLE» POINTS — GRAMMAR RANGE & ACCURACY, 25% OF THE SCORE',
      boxes: [
        { k: 'blue', head: '1 · RESPECTIVELY — order is everything', items: [`Values must follow the group order: «Gen X and Millennials recorded 8 and 10 hours respectively» = Gen X 8, Millennials 10.`, `✗ «8 and 10 hours, respectfully» → ✓ respectively`, `Respectfully = «з повагою». Це різні слова — екзаменатори знають цю помилку напам'ять.`] },
        { k: 'gold', head: '2 · «У ТАБЛИЦІ» — in vs on vs from', items: [`data in the table · the figure for Gen Z · hours devoted to gaming`, `✗ «from the table we can see» → ✓ the table provides data on`, `«Ми бачимо з таблиці» — калька. Англійська таблиця сама «provides data», без «we can see».`] },
        { k: 'green', head: '3 · GROUP NAMES — articles & plurals', items: [`the youngest generation · the figure for Boomers · Millennials (no «the» for named groups)`, `✗ «the Gen Z spent» → ✓ Gen Z spent`, `Назви груп (Gen Z, Millennials) — без «the», як імена. Але «the youngest group» — з «the».`] },
        { k: 'red', head: '4 · TENSE — 2023, still a photograph', items: [`One year → past simple: spent, recorded, devoted.`, `✗ «gaming grew in 2023» → ✓ gaming was highest among Gen Z · figures fell steadily across the generations`, `Один рік — фотографія. Сходинки між групами описувати можна, «рух у часі» — ні.`] }] },

    { type: 'rewrite', section: 'Challenge', title: 'Upgrade Challenge — Band 5 → Band 8', sub: 'REWRITE THIS PARAGRAPH BEFORE YOU LOOK AT THE NEXT PAGE',
      html: `Gen Z <u>spent 15 hours on gaming</u>. This was <u>a lot more than</u> Boomers who spent 2 hours. <u>For TikTok, Gen Z spent 12 hours and Gen X spent 4 hours.</u> Millennials <u>spent the most time on streaming</u> at 12 hours. <u>This was more than the other groups.</u>`,
      label: 'THE 5 PHRASES YOU MUST REPLACE — WRITE YOUR VERSIONS:',
      items: [['spent 15 hours on gaming', '→ ______________'], ['a lot more than', '→ ______________'], ['For TikTok, … and … spent', '→ ______________'], ['spent the most time on streaming', '→ ______________'], ['This was more than the other groups', '→ ______________']],
      footnote: 'Your task: rewrite the paragraph using the selection matrix (p.16) and the grouping language (p.17). Keep every fact — change every phrase. Merge cells into comparing sentences. Не підглядай далі, доки не напишеш свій варіант.\nHint: every replacement already exists on pages 16–17. Count the multipliers honestly: 15 ÷ 2, 12 ÷ 4. Remember: 2023 = past simple, no trend verbs.' },

    { type: 'rewrite', section: 'Challenge', title: 'Upgrade Reveal — the Band 8 Version', sub: 'COMPARE WITH YOUR VERSION — FIVE SENTENCES BECAME THREE',
      html: `Gen Z <u>devoted 15 hours weekly to online gaming</u> — <u>more than seven times the Boomer figure</u> of just 2 hours. <u>A similar pattern held for short-form video</u>, where Gen Z again led at 12 hours, three times the Gen X figure. Millennials <u>topped the table in streaming</u>, recording 12 hours — <u>the one entertainment category where the youngest generation did not lead</u>.`,
      label: 'THE UPGRADE MAP — WEAK → BAND 8:',
      items: [['spent 15 hours on gaming', '↓ devoted 15 hours weekly to online gaming — a time verb with range, not another «spent»'], ['a lot more than', '↓ more than seven times the Boomer figure — an honest multiplier (15 ÷ 2 = 7.5)'], ['For TikTok, … and … spent', '↓ A similar pattern held for short-form video — one opener links two rows, no new structure needed'], ['spent the most time on streaming', '↓ topped the table in streaming — a compact dominance verb made for tables'], ['This was more than the other groups', '↓ the one entertainment category where the youngest generation did not lead — exception framing instead of a vague «more»']],
      footnote: 'Five sentences became three — the same five cells, now inside comparing sentences. Your version differs? Good. Check: multipliers honest, exception framed, zero «spent» left?' },

    { type: 'task', section: 'Practice', title: 'Practice Task — Exam Conditions', sub: 'SAME RULES, NEW TABLE — FIND THE EXCEPTION ROW BEFORE YOU WRITE ANYTHING',
      chart: { type: 'table', title: 'Music listening time by format, five countries, 2023 (%)', corner: 'Format · %', suf: '%',
        cols: ['USA', 'UK', 'Germany', 'Japan', 'Brazil'],
        rows: [{ label: 'Streaming', data: [68, 62, 58, 45, 74] }, { label: 'Radio', data: [15, 18, 24, 20, 14] }, { label: 'Vinyl records', data: [8, 12, 6, 5, 2] }, { label: 'CDs', data: [4, 3, 7, 22, 3] }, { label: 'Downloads', data: [5, 5, 5, 8, 7] }] },
      prompt: `The table below shows how people in five countries divided their music listening time between five formats in 2023 (as a percentage of total listening time). Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`,
      footnote: 'EXAM RULES: Set a 20:00 timer — stop when it rings  ·  3 min: answer the five questions from p.6  ·  Find the dominant row AND the exception country  ·  15 min: write §1 → §2 → §3 → §4  ·  2 min: past simple + respectively order' },

    { type: 'quad', cls: 'chk', section: 'Practice', title: 'Check Yourself Like an Examiner', sub: '8 YES/NO QUESTIONS — ONE PAIR PER CRITERION — SCORE BEFORE YOU PEEK AT THE SAMPLE',
      boxes: [
        { k: 'gold', head: 'TASK ACHIEVEMENT  ·  25%', items: [`☐  Is there an overview with no numbers?`, `☐  Does it name the dominant row (streaming everywhere) AND the exception (Japan)?`] },
        { k: 'blue', head: 'COHERENCE & COHESION  ·  25%', items: [`☐  Exactly 4 paragraphs, each with its own job?`, `☐  Body grouped by format behaviour (universal vs exceptions), not country by country?`] },
        { k: 'red', head: 'LEXICAL RESOURCE  ·  25%', items: [`☐  At least one honest multiplier (five times the US figure)?`, `☐  Grouping language used — respectively, intermediate figures, topped the table?`] },
        { k: 'green', head: 'GRAMMAR  ·  25%', items: [`☐  Past simple throughout (2023) — with zero trend verbs?`, `☐  «respectively» in the right order? Named groups WITHOUT «the» (Gen Z, Japan)?`] }],
      footnote: '7–8 «yes» → Band 7+ material. Any «no» → rewrite that paragraph before you open the sample answer.' },

    { type: 'stack', section: 'Practice', title: 'Sample Band 8 Answer — Compare After Writing', sub: 'COMPARE DECISIONS, NOT WORDS — YOUR VERSION CAN DIFFER AND STILL BE BAND 8',
      rows: [
        { k: 'blue',  tag: '§1', head: 'INTRODUCTION', text: `The table compares how people in five countries — the USA, the UK, Germany, Japan and Brazil — distributed their music listening time across five formats in 2023.` },
        { k: 'green', tag: '§2', head: 'OVERVIEW', text: `Overall, streaming dominated listening habits in all five countries, particularly in Brazil. However, Japan stood out as a striking exception, with CDs accounting for a far larger share than elsewhere, while the UK recorded the highest share for vinyl.` },
        { k: 'gold',  tag: '§3', head: 'BODY 1 — STREAMING, EVERYWHERE', text: `Streaming accounted for the largest share of listening time in every country, ranging from 45% in Japan to 74% in Brazil — the highest figure in the entire table. The USA and the UK recorded broadly similar shares, at 68% and 62% respectively, with Germany slightly behind at 58%.` },
        { k: 'red',   tag: '§4', head: 'BODY 2 — THE PHYSICAL-MEDIA EXCEPTIONS', text: `Japan was the one country where CDs mattered, at 22% — more than five times the US figure of 4%. Vinyl, meanwhile, was strongest in the UK at 12%, double the German figure and six times the Brazilian. Radio was significant everywhere, from 14% to 24%, while downloads recorded intermediate figures of 5–8% across all five countries.` }],
      footnote: 'Compare the decisions: Did you find Japan\'s CDs before writing? How many of the 25 cells did you leave out? Is «respectively» in the right order?' },

    { type: 'end2', section: 'Module 4 Complete', title: 'What You Now Own', sub: 'MODULE 4 COMPLETE  ·  Key vocabulary from this module:',
      rows: [
        ['01', 'The #1 table rule: select, don\'t transcribe — 20 cells in, 10–13 in your answer'],
        ['02', 'Grouping language: respectively, intermediate figures, across all four groups — many cells, one clause'],
        ['03', 'Exception hunting: every table hides a flip — Japan\'s CDs, Boomers\' news — find it before you write'],
        ['●', 'with regard to · in terms of · turning to · notably'],
        ['◐', 'respectively · intermediate figures · across all four groups'],
        ['◔', 'stood out as · bucked the pattern · the notable exception'],
        ['↔', 'topped the table · dominated · the highest single figure']],
      nextLabel: 'NEXT — MODULE 5', next: [['Process Diagrams', 'Process diagrams remove the numbers entirely: life cycles, machines and manufacturing stages. Your comparative toolkit rests — sequencing language and the passive voice take over.'], ['Vocabulary pack PDF', 'englishkurilets.com'], ['Telegram', '@english_rrs · @ielts_ukrainians']],
      links: [{ label: 'Диктант: слухай і друкуй →', url: '../dictation/index.html?t=table-1' }, { label: 'Пишемо разом: відповідь на екзаменній таблиці →', url: '../index.html?t=table-1' }] }
  ]
};
