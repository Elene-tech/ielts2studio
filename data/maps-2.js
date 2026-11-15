/* Пишемо разом · Maps 2 (план без компаса, майбутнє)
   Екзаменне завдання: Eastgate Railway Station, current → proposed. Місце: front/back, left-hand side, next to.
   Час: сьогодні = present simple, план = will be + past participle. */
window.TASK = {
  id: 'maps-2',
  kicker: 'Пишемо разом · Maps · план будівлі, майбутнє',
  prompt: 'The plans below show the current layout of Eastgate Railway Station and a proposed redesign of the building.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=maps', dict: 'dictation/index.html?t=maps-1', place: 'place/index.html?t=place-1' },

  chart: window.MAPSC.STN,

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'План',      tip: 'Читаємо план: компаса немає, є «MAIN ENTRANCE» знизу. Це якір. Праворуч «proposed»: майбутнє, тож will.' },
    { n: 2, label: 'Зони',      tip: 'Стоїмо біля головного входу: front = ближче до нас, back = платформи. Ліва й права частини = Body 1 і Body 2.' },
    { n: 3, label: 'Intro',     tip: 'Introduction: перефразуємо умову: current layout + proposed redesign.' },
    { n: 4, label: 'Overview',  tip: 'Overview: що буде змінено й що лишиться. Без позицій.' },
    { n: 5, label: 'Body 1',    tip: 'Body 1: ліва частина. Спершу «at present» (present simple), потім proposed (will be + p.p.).' },
    { n: 6, label: 'Body 2',    tip: 'Body 2: права частина і те, що не змінюється. Закриваємо будівлю.' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: will be + V3, left/right/front/back без compass, нічого про причини.' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо план: стрілки сторін світу немає, є головний вхід унизу. Праворуч «PROPOSED LAYOUT»: це майбутнє, тож буде will be + past participle.', hl: { legend: true } },
    { step: 2, cap: 'Стоїмо біля головного входу: платформи далеко (the back), кафе й газетний кіоск поруч (the front).', hl: { zones: true } },
    { step: 2, cap: 'Ліва частина: квиткова каса, туалети, кафе. Це Body 1.', hl: { ids: ['tix', 'wc', 'cafe', 'news'], diff: true } },
    { step: 2, cap: 'Права частина: зала очікування і новий бічний вхід. Це Body 2.', hl: { ids: ['wait', 'ent2'], diff: true } },

    { step: 3, sec: 'intro', cap: 'Introduction: show → illustrate. current layout = нинішнє планування; proposed redesign = запропонований новий проєкт. Дві частини умови в одному реченні.',
      text: 'The plans illustrate the current layout of Eastgate Railway Station and a proposed redesign of the passenger areas.', hl: { legend: true } },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: will undergo = зазнає (змін), will gain = отримає. Бачимо, що буде, і що лишиться (will remain unchanged).',
      text: 'Overall, the station will undergo a number of internal changes and gain a second entrance, but the platforms, the information desk and the main entrance will remain unchanged.',
      hl: { diff: true, same: true } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: узагальнення. Most of the changes = більшість змін, concourse = головний зал.',
      text: 'Most of the changes will affect the two sides of the main concourse.', hl: { diff: true } },

    { step: 5, sec: 'body1', cap: 'Body 1, зараз: at present + present simple. occupies the left-hand side = зайнята ліва частина. at the front on the left = ближче до входу, ліворуч.',
      text: 'At present, the ticket office occupies the left-hand side of the concourse, with the café at the front on the left.',
      hl: { ids: ['tix', 'cafe'], panel: 0, tags: [{ id: 'tix', t: 'left-hand side', p: 0 }] } },
    { step: 5, sec: 'body1', cap: 'Body 1, проєкт: will be replaced by (пасив: хто замінить, не важливо). next to them = поруч. swap places = міняються місцями: це relocation, і місце кажемо обидва: on the left, on the right.',
      text: 'In the proposed layout, the ticket office will be replaced by ticket machines, and new toilets will be built next to them. The café and the newsagent will also swap places, so the newsagent will be on the left and the café on the right.',
      hl: { ids: ['tix', 'wc', 'cafe', 'news'], diff: true, panel: 1 } },

    { step: 6, sec: 'body2', cap: 'Body 2: On the right-hand side = права частина. will be converted into = та сама кімната, нова функція. will be created beside it = новий вхід поруч.',
      text: 'On the right-hand side, the waiting room will be converted into bicycle storage, and a new side entrance will be created beside it.',
      hl: { ids: ['wait', 'ent2'], diff: true } },
    { step: 6, sec: 'body2', cap: 'Закриваємо: will stay / will not change = що лишиться. in the middle of the concourse, opposite the main entrance = місце БЕЗ compass. at the back = платформи.',
      text: 'The information desk will stay in the middle of the concourse, opposite the main entrance, and the platforms at the back of the building will not change.',
      hl: { ids: ['info', 'plat'], same: true } },

    { step: 7, check: true, cap: 'Перевіряємо: will be + past participle, left / right / front / back замість north / south, дві незмінні речі.', hl: {} }
  ],

  lang: {
    loc:  { label: 'Місце: де це?',
      list: ['on the left-hand side', 'at the front on the left', 'next to them', 'on the right-hand side', 'beside it', 'in the middle of the concourse', 'opposite the main entrance', 'at the back of the building', 'on the left', 'on the right'] },
    chg:  { label: 'Зміна: що буде',
      list: ['will undergo', 'will gain', 'will be replaced by', 'will be built', 'will swap places', 'will be converted into', 'will be created', 'will affect'] },
    kept: { label: 'Що лишиться',
      list: ['will remain unchanged', 'will stay', 'will not change'] },
    seq:  { label: 'Рамка і зв’язки',
      list: ['Overall', 'At present', 'In the proposed layout', 'also', 'so'] }
  },

  linking: ['overall', 'at present', 'in the proposed layout', 'also', 'so', 'but', 'while', 'meanwhile', 'will remain unchanged', 'in addition']
};
