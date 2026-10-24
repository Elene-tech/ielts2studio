/* Пишемо разом · Pie Charts 1
   Екзаменне завдання: дві кругові діаграми (два міста), шість категорій, 100% у кожній.
   Діаграми показують один момент часу: мова порівняння й часток, а не трендів.
   Модель відповіді: Band 7.5, British English. */
window.TASK = {
  id: 'pie-1',
  kicker: 'Пишемо разом · Pie Charts',
  prompt: 'The pie charts below show how people travelled to work in two cities, Glenford and Marlow, in 2023.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=pie-charts', dict: 'dictation/index.html?t=pie-1' },

  chart: {
    type: 'pie',
    title: 'Main means of transport used to travel to work (%)',
    charts: [
      { id: 'glen', name: 'Glenford', slices: [
        { id: 'car',   label: 'Car',     value: 38, color: '#1E5C45' },
        { id: 'bus',   label: 'Bus',     value: 21, color: '#C0942E' },
        { id: 'train', label: 'Train',   value: 14, color: '#4F7A8C' },
        { id: 'cycle', label: 'Cycling', value: 12, color: '#BE3A24' },
        { id: 'walk',  label: 'Walking', value: 10, color: '#8E8E8E' },
        { id: 'other', label: 'Other',   value: 5,  color: '#C9C9C9', txt: '#333' } ] },
      { id: 'marl', name: 'Marlow', slices: [
        { id: 'car',   label: 'Car',     value: 16, color: '#1E5C45' },
        { id: 'bus',   label: 'Bus',     value: 24, color: '#C0942E' },
        { id: 'train', label: 'Train',   value: 9,  color: '#4F7A8C' },
        { id: 'cycle', label: 'Cycling', value: 31, color: '#BE3A24' },
        { id: 'walk',  label: 'Walking', value: 15, color: '#8E8E8E' },
        { id: 'other', label: 'Other',   value: 5,  color: '#C9C9C9', txt: '#333' } ] }
    ]
  },

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Діаграми',  tip: 'Читаємо діаграми: що вимірюємо, одиниці (%), скільки діаграм, рік, категорії. Це один момент часу, не динаміка.' },
    { n: 2, label: 'Дані',      tip: 'Відбираємо головне: найбільша частка в кожній діаграмі, що схоже, де найбільша різниця. Цифри округлюємо: just under, well over, nearly.' },
    { n: 3, label: 'Intro',     tip: 'Introduction: перефразуємо умову своїми словами, одним реченням.' },
    { n: 4, label: 'Overview',  tip: 'Overview: 2 головні висновки без цифр. Без нього бал не піднімається.' },
    { n: 5, label: 'Body 1',    tip: 'Body 1: перша діаграма, категорії за рангом, з цифрами.' },
    { n: 6, label: 'Body 2',    tip: 'Body 2: друга діаграма й порівняння з першою (compared with, whereas).' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: слова, структура, лексика, помилки.' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо діаграми: що вимірюємо, одиниці (%), два міста, рік 2023, шість категорій. Це один момент часу.',
      hl: { legend: true } },
    { step: 2, cap: 'Дві діаграми про один рік. Порівнюємо міста між собою, а не рік з роком. Тренд-дієслова тут не підходять.',
      hl: { sl: { glen: 'all', marl: 'all' } } },
    { step: 2, cap: 'Шукаємо найбільшу частку в кожному місті.',
      hl: { sl: { glen: ['car'], marl: ['cycle'] } } },
    { step: 2, cap: 'Що схоже в обох містах? Громадський транспорт і Other.',
      hl: { sl: { glen: ['bus', 'train', 'other'], marl: ['bus', 'train', 'other'] } } },
    { step: 2, cap: 'А де найбільша різниця? Автомобіль і велосипед.',
      hl: { sl: { glen: ['car', 'cycle'], marl: ['car', 'cycle'] } } },

    { step: 3, sec: 'intro', cap: 'Introduction: перефразуємо умову й не копіюємо її.',
      text: 'The pie charts illustrate the proportion of commuters who used six different means of transport for their daily journey to work in 2023, comparing the cities of Glenford and Marlow.',
      hl: { sl: { glen: 'all', marl: 'all' } } },

    { step: 4, sec: 'overview', cap: 'Overview: два головні висновки без цифр.',
      text: 'Overall, private cars dominated commuting in Glenford, whereas cycling was the single most common choice in Marlow.',
      hl: { sl: { glen: ['car'], marl: ['cycle'] } } },
    { step: 4, sec: 'overview',
      text: 'Public transport, however, was used by a broadly similar proportion of workers in both cities.',
      hl: { sl: { glen: ['bus', 'train'], marl: ['bus', 'train'] } } },

    { step: 5, sec: 'body1', cap: 'Body 1: Glenford, категорії за рангом від найбільшої до найменшої.',
      text: 'In Glenford, 38% of commuters drove to work, making the car the dominant choice by a considerable margin.',
      hl: { sl: { glen: ['car'] } } },
    { step: 5, sec: 'body1',
      text: 'Buses came second at 21%, followed by trains at 14%, while cycling and walking accounted for 12% and 10% respectively.',
      hl: { sl: { glen: ['bus', 'train', 'cycle', 'walk'] } } },
    { step: 5, sec: 'body1',
      text: 'Only 5% of people relied on other means.',
      hl: { sl: { glen: ['other'] } } },

    { step: 6, sec: 'body2', cap: 'Body 2: Marlow і порівняння з Glenford.',
      text: 'By contrast, cycling was the most popular option in Marlow, making up 31% of journeys, which was more than double the Glenford figure of 12%.',
      hl: { sl: { glen: ['cycle'], marl: ['cycle'] } } },
    { step: 6, sec: 'body2',
      text: 'Buses accounted for just under a quarter of trips, at 24%, whereas the car represented a mere 16%, less than half the proportion seen in Glenford.',
      hl: { sl: { glen: ['car'], marl: ['bus', 'car'] } } },
    { step: 6, sec: 'body2',
      text: 'Walking stood at 15%, trains were used by only 9%, and other means, at 5%, matched the Glenford figure.',
      hl: { sl: { glen: ['other'], marl: ['walk', 'train', 'other'] } } },

    { step: 7, check: true, cap: 'Перевіряємо за чеклистом: обсяг, структура, зв’язки.',
      hl: {} }
  ],

  /* мова, яку підсвічує кнопка «Мова» */
  lang: {
    approx: { label: 'Частки й дроби',
      list: ['just under a quarter', 'more than double', 'less than half', 'a mere', 'only', 'by a considerable margin', 'the proportion of'] },
    comp:   { label: 'Порівняння',
      list: ['dominated', 'the dominant choice', 'the single most common choice', 'the most popular option', 'a broadly similar proportion', 'by contrast', 'whereas', 'matched', 'however'] },
    part:   { label: 'Структури',
      list: ['making the car', 'making up', 'followed by', 'accounted for', 'represented', 'respectively', 'came second', 'stood at', 'relied on'] }
  },

  linking: ['whereas', 'while', 'by contrast', 'in contrast', 'however', 'overall', 'compared with', 'in comparison', 'unlike', 'similarly', 'meanwhile', 'although', 'respectively']
};
