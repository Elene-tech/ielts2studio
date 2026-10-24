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

    { step: 3, sec: 'intro', cap: 'Introduction: перефразуємо умову. show → compare, travelled to work → got to work. Умову не копіюємо.',
      text: 'The pie charts compare the ways in which people in Glenford and Marlow got to work in 2023.',
      hl: { sl: { glen: 'all', marl: 'all' } } },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: називаємо найбільшу категорію в кожному місті. Без цифр. while = «тоді як», показує контраст.',
      text: 'Overall, the car was the most common way of getting to work in Glenford, while cycling was the most popular choice in Marlow.',
      hl: { sl: { glen: ['car'], marl: ['cycle'] } } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: що схоже в обох містах. a similar number of = «приблизно однакова кількість», about a third = «приблизно третина».',
      text: 'Public transport was used by a similar number of people in both cities, with buses and trains together making up about a third of journeys.',
      hl: { sl: { glen: ['bus', 'train'], marl: ['bus', 'train'] } } },

    { step: 5, sec: 'body1', cap: 'Body 1: Glenford. Починаємо з найбільшої частки: цифра + хто/що. the highest figure = «найвищий показник».',
      text: 'In Glenford, 38% of workers drove, which was the highest figure.',
      hl: { sl: { glen: ['car'] } } },
    { step: 5, sec: 'body1', cap: 'Ранжуємо далі за порядком: came second = «на другому місці», followed by = «за ним іде». Не просто «and».',
      text: 'Buses came second at 21%, followed by trains at 14%.',
      hl: { sl: { glen: ['bus', 'train'] } } },
    { step: 5, sec: 'body1', cap: 'respectively = «відповідно»: дві цифри для двох категорій у тому ж порядку. Найменшу частку ставимо в кінець.',
      text: 'Cycling and walking were used by 12% and 10% respectively, and only 5% chose other ways.',
      hl: { sl: { glen: ['cycle', 'walk', 'other'] } } },

    { step: 6, sec: 'body2', cap: 'Body 2: Marlow. by contrast = «навпаки». more than double = «більш ніж удвічі»: порівнюємо з Glenford (31 проти 12).',
      text: 'In Marlow, by contrast, cycling was the most popular option at 31%, which was more than double the figure for Glenford.',
      hl: { sl: { glen: ['cycle'], marl: ['cycle'] } } },
    { step: 6, sec: 'body2', cap: 'accounted for 24% = «склали 24%». less than half = «менше половини» (16 проти 38). Порівнюємо, а не просто перелічуємо.',
      text: 'Buses accounted for 24%, while only 16% of people used a car, which was less than half the Glenford figure.',
      hl: { sl: { glen: ['car'], marl: ['bus', 'car'] } } },
    { step: 6, sec: 'body2', cap: 'Решту категорій коротко: stood at = «становив». Усі категорії названо, нічого не пропущено.',
      text: 'Walking stood at 15%, trains at 9% and other means at 5%.',
      hl: { sl: { marl: ['walk', 'train', 'other'] } } },

    { step: 7, check: true, cap: 'Перевіряємо за чеклистом: обсяг, структура, зв’язки.',
      hl: {} }
  ],

  /* мова, яку підсвічує кнопка «Мова» */
  lang: {
    approx: { label: 'Частки й дроби',
      list: ['more than double', 'less than half', 'only', 'a similar number of', 'about a third', 'the highest figure'] },
    comp:   { label: 'Порівняння',
      list: ['the most common way', 'the most popular choice', 'the most popular option', 'by contrast', 'while', 'which was'] },
    part:   { label: 'Структури',
      list: ['came second', 'followed by', 'accounted for', 'respectively', 'stood at', 'used by', 'chose'] }
  },

  linking: ['whereas', 'while', 'by contrast', 'in contrast', 'however', 'overall', 'compared with', 'in comparison', 'unlike', 'similarly', 'meanwhile', 'although', 'respectively']
};
