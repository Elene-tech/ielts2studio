/* Пишемо разом · Line Graph 1
   Нове екзаменне завдання: 4 лінії, пік, коливання, перетин ліній.
   Дані й модель відповіді (Band 7.0–7.5, British English) — оригінальні. */
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
      { id: 'tv',     name: 'Watching television',  color: '#1A3A2D', marker: 'circle',   data: [18, 20, 19, 15, 10, 7] },
      { id: 'social', name: 'Using social media',   color: '#E8530F', marker: 'diamond',  data: [0, 0, 2, 9, 15, 17] },
      { id: 'games',  name: 'Playing video games',  color: '#A9811F', marker: 'triangle', data: [3, 5, 9, 12, 13, 13] },
      { id: 'read',   name: 'Reading for pleasure', color: '#4F7A8C', marker: 'square',   data: [6, 7, 5, 4, 4, 5] }
    ]
  },

  /* розділи відповіді */
  sections: [
    { id: 'intro',    label: 'Introduction', color: '#1A3A2D' },
    { id: 'overview', label: 'Overview',     color: '#C9A84C' },
    { id: 'body1',    label: 'Body 1',       color: '#E8530F' },
    { id: 'body2',    label: 'Body 2',       color: '#4F7A8C' }
  ],

  /* кроки зверху: індекс = номер кроку - 1 */
  steps: [
    { n: 1, label: 'Графік',      tip: 'Читаємо графік: що на осях, які одиниці, який період, скільки ліній.' },
    { n: 2, label: 'Дані',        tip: 'Відбираємо головне: тренди, найвищі точки, перетини. Решту цифр не описуємо.' },
    { n: 3, label: 'Intro',       tip: 'Introduction: перефразуємо умову своїми словами, одним реченням.' },
    { n: 4, label: 'Overview',    tip: 'Overview: 2 головні тенденції без цифр. Без нього бал не піднімається.' },
    { n: 5, label: 'Body 1',      tip: 'Body 1: перша група ліній з точними даними й порівняннями.' },
    { n: 6, label: 'Body 2',      tip: 'Body 2: друга група ліній, а також зв’язок з першою.' },
    { n: 7, label: 'Перевірка',   tip: 'Перевіряємо: слова, структура, лексика, помилки.' }
  ],

  /* бити сценарію: кожен натиск пробілу = один біт */
  beats: [
    { step: 1, cap: 'Читаємо графік: що на осях, які одиниці, який період, скільки ліній.',
      hl: { axes: true } },
    { step: 2, cap: 'Шукаємо тренди. Що спадає або коливається?',
      hl: { s: ['tv', 'read'] } },
    { step: 2, cap: 'А що зростає?',
      hl: { s: ['social', 'games'] } },
    { step: 2, cap: 'Відбираємо головне: пік, перетин ліній, найвища точка в кінці.',
      hl: { pts: { tv: [1], social: [5] },
            tags: [ { x: 1,    y: 20,   t: 'пік',     dx: 0,   dy: -22 },
                    { x: 3.52, y: 12.4, t: 'перетин', dx: 0,   dy: -58 },
                    { x: 5,    y: 17,   t: 'максимум', dx: -8, dy: -26 } ] } },

    { step: 3, sec: 'intro', cap: 'Introduction: перефразуємо умову й не копіюємо її.',
      text: 'The line graph compares how many hours per week adolescents in one European nation dedicated to four different pastimes between 1995 and 2020.',
      hl: {} },

    { step: 4, sec: 'overview', cap: 'Overview: дві головні тенденції без цифр.',
      text: 'Overall, the time devoted to television and reading fell, whereas social media and video games became far more popular.',
      hl: {} },
    { step: 4, sec: 'overview',
      text: 'By the end of the period, social media had overtaken television as the most time-consuming activity.',
      hl: { s: ['social', 'tv'] } },

    { step: 5, sec: 'body1', cap: 'Body 1: телебачення й читання, тобто спад і коливання.',
      text: 'In 1995, teenagers watched television for 18 hours a week, and this figure peaked at 20 hours in 2000.',
      hl: { s: ['tv'], pts: { tv: [0, 1] } } },
    { step: 5, sec: 'body1',
      text: 'It then declined steadily, falling to 15 hours in 2010 and to just 7 hours by 2020.',
      hl: { s: ['tv'], pts: { tv: [1, 3, 5] } } },
    { step: 5, sec: 'body1',
      text: 'Reading for pleasure, by contrast, was far less popular, fluctuating between 4 and 7 hours and ending at 5 hours in 2020.',
      hl: { s: ['read'], pts: { read: [1, 3, 4, 5] } } },

    { step: 6, sec: 'body2', cap: 'Body 2: соцмережі й відеоігри, тобто зростання.',
      text: 'Social media, which recorded no time at all in 1995 and 2000, grew rapidly from 2 hours in 2005 to 9 hours in 2010.',
      hl: { s: ['social'], pts: { social: [0, 1, 2, 3] } } },
    { step: 6, sec: 'body2',
      text: 'It then climbed to 15 hours in 2015, overtaking television, and reached a high of 17 hours in 2020.',
      hl: { s: ['social', 'tv'], pts: { social: [4, 5], tv: [4] }, band: [3, 4] } },
    { step: 6, sec: 'body2',
      text: 'Video games rose from 3 hours in 1995 to 12 in 2010, then levelled off at around 13.',
      hl: { s: ['games'], pts: { games: [0, 3, 4, 5] } } },

    { step: 7, check: true, cap: 'Перевіряємо за чеклистом: обсяг, структура, зв’язки.',
      hl: {} }
  ],

  /* слова-зв’язки для автоперевірки */
  linking: ['whereas', 'while', 'by contrast', 'in contrast', 'however', 'overall', 'then', 'before', 'although', 'similarly', 'meanwhile', 'in comparison', 'compared with', 'despite']
};
