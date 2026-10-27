/* Пишемо разом · Process 2 (natural)
   Екзаменне завдання: природний цикл, 5 етапів, 2 фази: the water cycle.
   Voice: істота/природа діє сама → active; єдине пасивне речення, де є справжній агент (heated by the sun). */
window.TASK = {
  id: 'process-2',
  kicker: 'Пишемо разом · Process · natural cycle',
  prompt: 'The diagram below shows the natural process known as the water cycle.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=process', dict: 'dictation/index.html?t=process-1' },

  chart: {
    type: 'process', layout: 'cycle',
    title: 'The water cycle',
    phases: [{ id: 'up', label: 'Phase 1 · water rises (1–2)', color: '#D98E04' }, { id: 'down', label: 'Phase 2 · water returns (3–5)', color: '#2C7A5A' }],
    center: { icon: '💧', t: 'The water cycle', sub: 'a natural cycle: no true start or end' },
    nodes: [
      { n: 1, t: 'Evaporation', sub: 'the sun heats the sea; vapour rises', icon: '☀️', phase: 'up', v: 'a', verb: 'evaporates' },
      { n: 2, t: 'Condensation', sub: 'vapour cools and forms clouds', icon: '☁️', phase: 'up', v: 'a', verb: 'condenses' },
      { n: 3, t: 'Precipitation', sub: 'rain and snow fall to the ground', icon: '🌧️', phase: 'down', v: 'a', verb: 'falls' },
      { n: 4, t: 'Run-off', sub: 'water flows into rivers and lakes', icon: '🏞️', phase: 'down', v: 'a', verb: 'flows' },
      { n: 5, t: 'Collection', sub: 'water gathers in the sea', icon: '🌊', phase: 'down', v: 'a', verb: 'collects' }]
  },

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Діаграма',   tip: 'Читаємо діаграму: це цикл (стрілка повертається до початку). Скільки етапів? Хто діє?' },
    { n: 2, label: 'Voice', tip: 'Дві фази = два абзаци. Хто діє? Вода й сонце самі: вода випаровується, конденсується. Тож дієслова active.' },
    { n: 3, label: 'Intro',      tip: 'Introduction: перефразуємо умову, рахуємо етапи, називаємо рух води.' },
    { n: 4, label: 'Overview',   tip: 'Overview: cyclical, без справжнього початку чи кінця, дві фази. Без деталей етапів.' },
    { n: 5, label: 'Body 1',     tip: 'Body 1: перша фаза: вода піднімається. Підмет — вода, дієслова active; єдиний passive — де є агент (heated by the sun).' },
    { n: 6, label: 'Body 2',     tip: 'Body 2: друга фаза: вода повертається. Закриваємо цикл: and the cycle begins again.' },
    { n: 7, label: 'Перевірка',  tip: 'Перевіряємо: усі 5 етапів? Слово cyclical? Active там, де діє природа?' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо діаграму: п’ять етапів, і стрілка від останнього повертається до першого. Отже, це цикл, а не лінійний процес.',
      hl: { legend: true } },
    { step: 2, cap: 'Перша фаза: вода піднімається (1–2). Це буде Body 1.',
      hl: { phase: 'up' } },
    { step: 2, cap: 'Друга фаза: вода повертається (3–5). Це буде Body 2.',
      hl: { phase: 'down' } },
    { step: 2, cap: 'Хто діє? Ніхто не «випаровує» воду, вона випаровується сама. Тест: «evaporates by someone» звучить абсурдно, тож дієслова active.',
      hl: { voice: true } },

    { step: 3, sec: 'intro', cap: 'Introduction: shows → illustrates, the five-stage water cycle, і коротко: вода рухається між морем, повітрям і сушею. «cycle» не перефразовуємо: це термін.',
      text: 'The diagram illustrates the five-stage water cycle, in which water moves continuously between the sea, the air and the land.',
      hl: { legend: true } },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: форма. cyclical = «циклічний», no true start or end point = «немає справжнього початку чи кінця». Діючі істоти й вода діють самі, тому active: evaporates, returns.',
      text: 'Overall, the process is cyclical, with no true start or end point: water that evaporates from the sea eventually returns to it, completing the cycle.',
      hl: { steps: [0, 4] } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: дві фази. the rise of water → followed by its return: іменники замість дієслів зі стадій.',
      text: 'The cycle falls into two phases: the rise of water into the atmosphere, followed by its return to the surface as rain and snow.',
      hl: { phase: 'up' } },

    { step: 5, sec: 'body1', cap: 'Body 1: In the first phase. Тут єдиний passive: is heated by the sun, бо діє справжній агент (сонце) і це важлива інформація. А далі evaporates і rises: active, воду ніхто не підіймає.',
      text: 'In the first phase, water from the sea is heated by the sun and evaporates, forming water vapour that rises into the air.',
      hl: { steps: [0], voice: true } },
    { step: 5, sec: 'body1', cap: 'As the vapour reaches… = «коли пара досягає…». cools і condenses: природа діє сама, active. which gather to form clouds = relative clause, ще один етап у тому ж реченні.',
      text: 'As the vapour reaches colder, higher air, it cools and condenses into tiny water droplets, which gather to form clouds.',
      hl: { steps: [1], voice: true } },

    { step: 6, sec: 'body2', cap: 'Body 2: Once + perfect active (have grown): стан завершився, і лише тоді падіння. Це активний perfect: «grow heavy» змінює стан без агента.',
      text: 'Once the droplets have grown heavy, they fall to the ground as precipitation, in the form of rain or snow.',
      hl: { steps: [2], voice: true } },
    { step: 6, sec: 'body2', cap: 'then = один sequencer; before collecting = -ing active (вода сама збирається). where the cycle begins again = цикл закрито: кінець повертає нас на початок.',
      text: 'The water then flows downhill into rivers and lakes, before collecting in the sea, where the cycle begins again.',
      hl: { steps: [3, 4, 0], voice: true } },

    { step: 7, check: true, cap: 'Перевіряємо: слово cyclical, усі п’ять етапів, active там, де діє природа.',
      hl: {} }
  ],

  lang: {
    act:  { label: 'Active: діє природа',
      list: ['evaporates', 'rises', 'returns', 'reaches', 'cools', 'condenses', 'gather', 'have grown', 'fall', 'flows', 'collecting', 'begins'] },
    pass: { label: 'Passive: є агент',
      list: ['is heated'] },
    seq:  { label: 'Sequencers і рамка',
      list: ['Overall', 'the process is cyclical', 'falls into two phases', 'In the first phase', 'As the vapour', 'Once the', 'then', 'before collecting', 'begins again'] },
    det:  { label: 'Деталі з діаграми',
      list: ['by the sun', 'into the air', 'tiny water droplets', 'as rain and snow', 'in the form of rain or snow', 'downhill into rivers and lakes', 'in the sea'] }
  },

  linking: ['overall', 'once', 'as', 'then', 'before', 'in the first phase', 'whereas', 'followed by', 'begins again', 'at which point']
};
