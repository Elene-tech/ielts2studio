/* Пишемо разом · Line Graph 1
   Екзаменне завдання: чотири лінії, пік, коливання, перетин ліній.
   На графіку НЕМАЄ підписаних цифр: значення оцінюємо за сіткою (як на іспиті).
   Модель відповіді: Band 7.0–7.5, British English, мова наближення,
   порівняння й дієприкметникові звороти. */
window.TASK = {
  id: 'line-1',
  kicker: 'Пишемо разом · Line Graph',
  prompt: 'The graph below shows how much time teenagers in a European country spent on four leisure activities each week from 1995 to 2020.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,

  chart: {
    type: 'line',
    title: 'Weekly time spent on leisure activities by teenagers',
    yTitle: 'Hours per week',
    xTitle: 'Year',
    xLabels: ['1995', '2000', '2005', '2010', '2015', '2020'],
    yMax: 20, yStep: 5,
    series: [
      { id: 'tv',     name: 'Watching television',  color: '#1A3A2D', marker: 'circle',   data: [18, 19.5, 18.5, 14.5, 10, 7.5] },
      { id: 'social', name: 'Using social media',   color: '#E8530F', marker: 'diamond',  data: [0, 0, 2, 9, 15, 17.5] },
      { id: 'games',  name: 'Playing video games',  color: '#A9811F', marker: 'triangle', data: [3.5, 5, 8.5, 12, 13, 13] },
      { id: 'read',   name: 'Reading for pleasure', color: '#4F7A8C', marker: 'square',   data: [6, 7, 5, 4, 4, 4.5] }
    ]
  },

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Графік',      tip: 'Читаємо графік: осі, одиниці, період, кількість ліній. Точних цифр немає, значення оцінюємо за сіткою.' },
    { n: 2, label: 'Дані',        tip: 'Відбираємо головне: тренди, найвищі точки, перетини. Значення округлюємо: roughly, just over, just under.' },
    { n: 3, label: 'Intro',       tip: 'Introduction: перефразуємо умову своїми словами, одним реченням.' },
    { n: 4, label: 'Overview',    tip: 'Overview: 2 головні тенденції без цифр. Без нього бал не піднімається.' },
    { n: 5, label: 'Body 1',      tip: 'Body 1: перша група ліній з приблизними даними й порівняннями.' },
    { n: 6, label: 'Body 2',      tip: 'Body 2: друга група ліній, а також зв’язок з першою.' },
    { n: 7, label: 'Перевірка',   tip: 'Перевіряємо: слова, структура, лексика, помилки.' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо графік: осі, одиниці, період, лінії. Точних цифр немає, оцінюємо за сіткою.',
      hl: { axes: true } },
    { step: 2, cap: 'Шукаємо тренди. Що спадає або коливається?',
      hl: { s: ['tv', 'read'] } },
    { step: 2, cap: 'А що зростає?',
      hl: { s: ['social', 'games'] } },
    { step: 2, cap: 'Відбираємо головне: пік, перетин ліній, найвища точка в кінці. Читаємо значення за сіткою.',
      hl: { pts: { tv: [1], social: [5] },
            tags: [ { x: 1,    y: 19.5, t: 'пік',      dx: 0,  dy: -24 },
                    { x: 3.52, y: 12.2, t: 'перетин',  dx: 0,  dy: -58 },
                    { x: 5,    y: 17.5, t: 'максимум', dx: -8, dy: -26 } ] } },

    { step: 3, sec: 'intro', cap: 'Introduction: перефразуємо умову й не копіюємо її.',
      text: 'The line graph compares how many hours per week adolescents in one European nation dedicated to four pastimes between 1995 and 2020.',
      hl: {} },

    { step: 4, sec: 'overview', cap: 'Overview: дві головні тенденції без цифр.',
      text: 'Overall, the time devoted to television and reading declined, whereas social media and video games became far more popular.',
      hl: {} },
    { step: 4, sec: 'overview',
      text: 'By 2020, social media had become the most time-consuming activity, having started from virtually nothing.',
      hl: { s: ['social', 'tv'] } },

    { step: 5, sec: 'body1', cap: 'Body 1: телебачення й читання, тобто спад і коливання.',
      text: 'Television was the dominant pastime, accounting for roughly 18 hours in 1995 and peaking at just under 20 hours in 2000.',
      hl: { s: ['tv'], pts: { tv: [0, 1] } } },
    { step: 5, sec: 'body1',
      text: 'It then fell steadily, dropping to around 10 hours by 2015 and to just over 7 hours in 2020.',
      hl: { s: ['tv'], pts: { tv: [4, 5] } } },
    { step: 5, sec: 'body1',
      text: 'Reading for pleasure, by contrast, was far less popular than television, fluctuating between roughly 4 and 7 hours.',
      hl: { s: ['read', 'tv'], pts: { read: [1, 3, 4] } } },

    { step: 6, sec: 'body2', cap: 'Body 2: соцмережі й відеоігри, тобто зростання.',
      text: 'Social media, which barely existed before 2005, then expanded dramatically, climbing from around 2 hours to approximately 9 by 2010.',
      hl: { s: ['social'], pts: { social: [2, 3] } } },
    { step: 6, sec: 'body2',
      text: 'It overtook television by 2015, going on to reach just over 17 hours in 2020, more than twice as much as television.',
      hl: { s: ['social', 'tv'], pts: { social: [5], tv: [5] }, band: [3, 4] } },
    { step: 6, sec: 'body2',
      text: 'Video games followed a similar pattern, rising from just over 3 hours to roughly 12 by 2010, before levelling off at around 13.',
      hl: { s: ['games'], pts: { games: [0, 3, 4, 5] } } },

    { step: 7, check: true, cap: 'Перевіряємо за чеклистом: обсяг, структура, зв’язки.',
      hl: {} }
  ],

  /* мова, яку підсвічує кнопка «Мова» */
  lang: {
    approx: { label: 'Наближення',
      list: ['just under', 'just over', 'roughly', 'approximately', 'around', 'barely', 'virtually nothing'] },
    comp:   { label: 'Порівняння',
      list: ['far more popular', 'far less popular than', 'more than twice as much as', 'the most time-consuming', 'a similar pattern'] },
    part:   { label: 'Дієприкметники',
      list: ['devoted to', 'having started', 'accounting for', 'peaking at', 'dropping to', 'fluctuating between', 'climbing from', 'going on to reach', 'rising from', 'levelling off'] }
  },

  linking: ['whereas', 'while', 'by contrast', 'in contrast', 'however', 'overall', 'then', 'before', 'although', 'similarly', 'meanwhile', 'in comparison', 'compared with', 'despite']
};
