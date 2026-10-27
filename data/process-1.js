/* Пишемо разом · Process 1 (man-made)
   Екзаменне завдання: лінійний виробничий процес, 8 етапів, 2 фази: how olive oil is produced.
   Voice: матеріал — підмет, дієслова в present simple passive; діючих осіб на діаграмі немає. */
window.TASK = {
  id: 'process-1',
  kicker: 'Пишемо разом · Process · man-made',
  prompt: 'The diagram below shows the process by which olive oil is produced.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=process', dict: 'dictation/index.html?t=process-1' },

  chart: {
    type: 'process', layout: 'flow', perRow: 3,
    title: 'How olive oil is produced',
    phases: [{ id: 'prep', label: 'Phase 1 · from grove to paste (1–4)', color: '#2C7A5A' }, { id: 'oil', label: 'Phase 2 · from paste to bottle (5–8)', color: '#E1512E' }],
    nodes: [
      { n: 1, t: 'Harvest', sub: 'ripe olives, by hand or machine', icon: '🌳', phase: 'prep', v: 'p', verb: 'are picked' },
      { n: 2, t: 'Wash', sub: 'leaves and dirt removed', icon: '💧', phase: 'prep', v: 'p', verb: 'are washed' },
      { n: 3, t: 'Crush', sub: 'olives ground into a paste', icon: '🔨', phase: 'prep', v: 'p', verb: 'are crushed' },
      { n: 4, t: 'Mix', sub: 'paste mixed slowly, about 30 minutes', icon: '🥣', phase: 'prep', v: 'p', verb: 'is mixed' },
      { n: 5, t: 'Spin', sub: 'centrifuge separates oil from water', icon: '🌀', phase: 'oil', v: 'p', verb: 'is spun' },
      { n: 6, t: 'Filter', sub: 'tiny particles removed', icon: '🧪', phase: 'oil', v: 'p', verb: 'is filtered' },
      { n: 7, t: 'Store', sub: 'oil kept in steel tanks', icon: '🛢️', phase: 'oil', v: 'p', verb: 'is stored' },
      { n: 8, t: 'Bottle', sub: 'poured into dark glass bottles, ready for sale', icon: '🍾', phase: 'oil', v: 'p', verb: 'is poured' }]
  },

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Діаграма',   tip: 'Читаємо діаграму: лінійна чи цикл? Скільки етапів? Де початок і кінець?' },
    { n: 2, label: 'Voice', tip: 'Дві фази = два абзаци. Хто діє? Людей і машин на діаграмі немає, тож підмет — матеріал, а дієслова — passive.' },
    { n: 3, label: 'Intro',      tip: 'Introduction: перефразуємо умову одним реченням і рахуємо етапи.' },
    { n: 4, label: 'Overview',   tip: 'Overview: лінійний процес, дві фази, початок → кінець. Без деталей етапів і без цифр.' },
    { n: 5, label: 'Body 1',     tip: 'Body 1: перша фаза. Етапи зв’язуємо after which, then, before being; 2–3 етапи в реченні.' },
    { n: 6, label: 'Body 2',     tip: 'Body 2: друга фаза. Відкриваємо словом Once або Following this; закінчуємо Finally.' },
    { n: 7, label: 'Перевірка',  tip: 'Перевіряємо: усі 8 етапів є? Пасив скрізь? «then» не двічі поспіль?' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо діаграму: лінійний процес, вісім етапів: від зборів оливок до пляшки. Шукаємо початок і кінець.',
      hl: { legend: true } },
    { step: 2, cap: 'Перша фаза: від гаю до пасти (етапи 1–4). Це буде Body 1.',
      hl: { phase: 'prep' } },
    { step: 2, cap: 'Друга фаза: від пасти до пляшки (етапи 5–8). Це буде Body 2.',
      hl: { phase: 'oil' } },
    { step: 2, cap: 'Хто діє? Збирачі, робітники, машини, але їх на діаграмі немає. Тож підмет — матеріал (оливки, паста, олія), а дієслова — passive. Ось як це виглядає.',
      hl: { voice: true } },

    { step: 3, sec: 'intro', cap: 'Introduction: shows → illustrates, додаємо the eight-stage process, а «produced» → «turned into»: сировина → продукт одним пасивним дієсловом.',
      text: 'The diagram illustrates the eight-stage process by which olives are turned into bottled olive oil.',
      hl: { legend: true, voice: true, steps: [0, 7] } },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: форма (лінійний), дві фази. Жодних дієслів зі стадій, тільки іменники: preparation, extraction.',
      text: 'Overall, the process is linear and falls into two distinct phases: the preparation of the olives, followed by the extraction, storage and bottling of the oil.',
      hl: { phase: 'prep' } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: початок → кінець. begins with… concludes with… плюс іменники (the harvesting, the filling).',
      text: 'It begins with the harvesting of ripe olives and concludes with the filling of dark glass bottles with the finished oil.',
      hl: { steps: [0, 7] } },

    { step: 5, sec: 'body1', cap: 'Body 1: phase opener In the first phase. Матеріал (olives) — підмет, are picked / are washed — passive. by hand or by machine = спосіб, його залишаємо. after which = ланцюжок без «then».',
      text: 'In the first phase, ripe olives are picked by hand or by machine, after which they are washed to remove leaves and dirt.',
      hl: { steps: [0, 1], voice: true } },
    { step: 5, sec: 'body1', cap: 'The clean olives: підмет змінив стан, а ми слідкуємо за матеріалом. which is mixed = relative clause, ще один етап у тому ж реченні. for about half an hour = деталь з діаграми.',
      text: 'The clean olives are then crushed into a paste, which is mixed slowly for about half an hour.',
      hl: { steps: [2, 3], voice: true } },

    { step: 6, sec: 'body2', cap: 'Body 2: Once + perfect passive (has been mixed): етап повністю завершений, перш ніж почнеться наступний. Sequence закодована в граматиці.',
      text: 'Once the paste has been mixed, it is spun in a centrifuge, where the oil is separated from the water and solids.',
      hl: { steps: [3, 4], voice: true } },
    { step: 6, sec: 'body2', cap: 'Following this = ще один sequencer, не «then». to remove tiny particles = мета, яку показує діаграма (tiny particles removed), а не причина з голови.',
      text: 'Following this, the oil is filtered to remove tiny particles.',
      hl: { steps: [5], voice: true } },
    { step: 6, sec: 'body2', cap: 'Finally закриває ланцюжок. before being poured = -ing passive: останній етап прикріплений до попереднього. ready for sale = кінцевий стан.',
      text: 'Finally, it is stored in steel tanks, before being poured into dark glass bottles, ready for sale.',
      hl: { steps: [6, 7], voice: true } },

    { step: 7, check: true, cap: 'Перевіряємо за чеклистом: обсяг, структура, зв’язки. А ще: усі вісім етапів є?',
      hl: {} }
  ],

  lang: {
    pass: { label: 'Passive: is/are + V3',
      list: ['are turned', 'are picked', 'are washed', 'are then crushed', 'is mixed', 'has been mixed', 'is spun', 'is separated', 'is filtered', 'is stored', 'being poured'] },
    seq:  { label: 'Sequencers і рамка',
      list: ['Overall', 'the process is linear', 'falls into two distinct phases', 'It begins with', 'concludes with', 'In the first phase', 'after which', 'Once the', 'Following this', 'Finally', 'before being', 'then'] },
    det:  { label: 'Деталі з діаграми',
      list: ['by hand or by machine', 'to remove leaves and dirt', 'into a paste', 'for about half an hour', 'in a centrifuge', 'to remove tiny particles', 'in steel tanks', 'ready for sale'] }
  },

  linking: ['overall', 'after which', 'once', 'following this', 'finally', 'before being', 'then', 'in the first phase', 'begins with', 'concludes with']
};
