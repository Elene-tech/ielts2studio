/* Пишемо разом · Scatter 2 (економіка: дві групи)
   Екзаменне завдання: рекламний бюджет і місячні продажі у 8 магазинах центру та 8 передмістя. Present simple.
   Мова: loc = цифри з осей, chg = кореляція й тренд, kept = порівняння груп. Причини не пишемо. */
window.TASK = {
  id: 'scatter-2',
  kicker: 'Пишемо разом · Scatter · дві групи',
  prompt: 'The scatter graph below shows the relationship between the annual advertising budget and the monthly sales of eight city-centre shops and eight suburban shops.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=scatter', dict: 'dictation/index.html?t=scatter-1', place: 'scatter-lab/index.html?t=lab-1' },

  chart: window.SCSC.ADV,

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Графік',   tip: 'Читаємо графік: x = рекламний бюджет, y = продажі. Дві групи: кола = центр, трикутники = передмістя. Дат немає: present simple.' },
    { n: 2, label: 'Групи',    tip: 'Дві групи = два body-абзаци. Обидві мають strong positive correlation, але центр продає більше за той самий бюджет.' },
    { n: 3, label: 'Intro',    tip: 'Introduction: перефразуємо умову: обидві змінні й обидві групи.' },
    { n: 4, label: 'Overview', tip: 'Overview: що спільне для груп (strong positive) і головна різниця (за однакового бюджету центр має вищі продажі). Без цифр.' },
    { n: 5, label: 'Body 1',   tip: 'Body 1: перша група (центр): діапазон бюджету і діапазон продажів.' },
    { n: 6, label: 'Body 2',   tip: 'Body 2: друга група (передмістя) і порівняння з першою за однакового бюджету, з цифрами.' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: обидві групи, діапазони, порівняння, нічого про причини.' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо графік: x = річний бюджет на рекламу (£ тис.), y = місячні продажі (£ тис.). Кола = магазини в центрі, трикутники = у передмісті, по 8 штук. Дат немає, тож present simple.', hl: { legend: true } },
    { step: 2, cap: 'Центр (кола): що більший бюджет, то вищі продажі, і точки лежать майже на лінії: strong positive.', hl: { g: ['c'], fit: 'c' } },
    { step: 2, cap: 'Передмістя (трикутники): теж strong positive, але лінія нижча: за той самий бюджет продажі менші.', hl: { g: ['s'], fit: 's' } },

    { step: 3, sec: 'intro', cap: 'Introduction: compares … with … = зіставляє дві змінні. Перефразуємо: advertising budget → spending on promotion, sales → revenue; дві групи: city centres і the suburbs.',
      text: 'The scatter graph compares yearly spending on promotion with monthly revenue in two groups of eight shops: those in city centres and those in the suburbs.', hl: { legend: true } },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: що спільне. strong positive correlation in both groups = напрям і сила для обох. the more …, the higher … = порівняльна пара. tend to be = обережність.',
      text: 'Overall, there is a strong positive correlation in both groups: the more a shop spends on advertising, the higher its sales tend to be.', hl: { fit: 'c' } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: головна різниця. however = контраст. at the same level of advertising = порівнюємо при однаковому x. Без цифр.',
      text: 'City-centre shops, however, achieve higher sales than suburban ones at the same level of advertising, and the gap widens as budgets grow.', hl: { zone: { x: [20, 30], y: [30, 90], t: 'same budget' } } },

    { step: 5, sec: 'body1', cap: 'Body 1, центр: діапазон бюджету (from £5,000 to £40,000) і діапазон продажів (from about £44,000 to £100,000). rise steadily = майже рівний ріст. the highest figure on the graph = крайня точка.',
      text: 'The city-centre shops spend from £5,000 to £40,000 on advertising, and their monthly sales rise steadily from about £44,000 to £100,000, which is the highest figure on the graph. Three of these shops spend £30,000 or more, and all of them sell more than £80,000 per month.',
      hl: { g: ['c'], fit: 'c' } },

    { step: 6, sec: 'body2', cap: 'Body 2, передмістя: a similar range of budgets = схожий діапазон на осі x. but their sales are lower = контраст. increasing from … to … = діапазон y. Потім порівняння при ≈£25,000: центр £79,000, передмістя £47,000.',
      text: 'The suburban shops have a similar range of budgets, from £3,000 to £42,000, but their sales are lower, increasing from around £20,000 to £74,000.',
      hl: { g: ['s'], fit: 's' } },
    { step: 6, sec: 'body2', cap: 'Закриваємо порівнянням з цифрами: At a budget of about £25,000 = точка порівняння; compared with = пряме зіставлення. Дані з графіка: центр ≈ £79,000, передмістя ≈ £47,000.',
      text: 'At a budget of about £25,000, for example, a city-centre shop sells roughly £79,000 per month, compared with about £47,000 in a suburban shop.',
      hl: { zone: { x: [23, 27], y: [40, 85], t: '≈ £25,000' } } },

    { step: 7, check: true, cap: 'Перевіряємо: обидві групи, діапазони, порівняння при однаковому бюджеті, нічого про причини.', hl: {} }
  ],

  lang: {
    loc:  { label: 'Цифри з осей: діапазони',
      list: ['from £5,000 to £40,000', 'from about £44,000 to £100,000', 'from £3,000 to £42,000', 'from around £20,000 to £74,000', 'about £25,000', 'roughly £79,000 per month', 'about £47,000', 'the highest figure on the graph', 'a similar range of budgets', 'the gap widens as budgets grow', 'more than £80,000 per month'] },
    chg:  { label: 'Кореляція й тренд',
      list: ['strong positive correlation in both groups', 'the more a shop spends on advertising, the higher its sales tend to be', 'rise steadily', 'increasing', 'tend to be'] },
    kept: { label: 'Порівняння груп',
      list: ['at the same level of advertising', 'achieve higher sales than suburban ones', 'but their sales are lower', 'compared with', 'for example'] },
    seq:  { label: 'Рамка і зв’язки',
      list: ['Overall', 'however', 'and', 'which is'] }
  },

  linking: ['overall', 'however', 'whereas', 'but', 'compared with', 'for example', 'at the same level', 'in both groups', 'which is', 'by contrast']
};
