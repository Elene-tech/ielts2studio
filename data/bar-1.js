/* Пишемо разом · Bar Charts 1
   Екзаменне завдання: стовпчикова діаграма, 3 країни × 6 категорій (відсоток домогосподарств), один рік.
   Один рік = past simple без trend-дієслів; мова: порівняння груп, множники, прислівники за розривом. */
window.TASK = {
  id: 'bar-1',
  kicker: 'Пишемо разом · Bar Charts',
  prompt: 'The bar chart below shows the percentage of households in three countries that owned six types of technology in 2021.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=bar-charts', dict: 'dictation/index.html?t=bar-1' },

  chart: {
    type: 'bar', noVals: true,
    title: 'Households owning each device, 2021 (%)',
    yTitle: '% of households', yMax: 100, yStep: 20, suf: '%',
    cats: ['Smartphone', 'Laptop', 'Tablet', 'Smart TV', 'Games console', 'Smart speaker'],
    series: [
      { id: 'pl', name: 'Poland', color: '#2C6E8A', data: [94, 76, 44, 62, 21, 9] },
      { id: 'jp', name: 'Japan',  color: '#E1512E', data: [91, 58, 39, 78, 63, 22] },
      { id: 'br', name: 'Brazil', color: '#2C7A5A', data: [82, 49, 52, 71, 24, 12] }
    ]
  },

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Діаграма',  tip: 'Читаємо діаграму: що вимірюємо, одиниці (%), три групи, шість категорій, рік. Один рік: нічого не рухається.' },
    { n: 2, label: 'Дані',      tip: 'Відбираємо головне: що найпоширеніше скрізь, хто лідирує в яких категоріях, де найбільший розрив. Групи порівнюємо в одному реченні.' },
    { n: 3, label: 'Intro',     tip: 'Introduction: перефразуємо умову своїми словами, одним реченням.' },
    { n: 4, label: 'Overview',  tip: 'Overview: 2 головні висновки без цифр. Без нього бал не піднімається.' },
    { n: 5, label: 'Body 1',    tip: 'Body 1: перша група категорій, усі країни в одному реченні.' },
    { n: 6, label: 'Body 2',    tip: 'Body 2: друга група категорій, контраст з першою (by contrast, whereas).' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: слова, структура, лексика, помилки.' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо діаграму: відсоток домогосподарств, три країни, шість пристроїв, один рік (2021).',
      hl: { legend: true } },
    { step: 2, cap: 'Один рік означає past simple і жодних trend-дієслів. Порівнюємо країни між собою, а не рік з роком.',
      hl: {} },
    { step: 2, cap: 'На іспиті біля стовпчиків цифр немає: значення зчитуємо по осі. Тому до кожної цифри додаємо слово наближення: around, roughly, just over, just under, almost.',
      hl: { c: [0] } },
    { step: 2, cap: 'Що найпоширеніше в усіх трьох країнах? Смартфони. А що найрідше? Розумні колонки.',
      hl: { c: [0, 5] } },
    { step: 2, cap: 'Де найбільший розрив між країнами? Ігрові консолі: Японія значно випереджає решту.',
      hl: { c: [4] } },

    { step: 3, sec: 'intro', cap: 'Introduction: перефразуємо умову. shows → compares, percentage of households → how many households, types of technology → devices.',
      text: 'The bar chart compares how many households in Poland, Japan and Brazil owned each of six technological devices in 2021.',
      hl: {} },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: що спільне для всіх країн, без цифр. the most widely owned = «найпоширеніший», whereas = «тоді як».',
      text: 'Overall, smartphones were the most widely owned device in every country, whereas smart speakers were the least common.',
      hl: { c: [0, 5] } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: найбільший контраст. the sharpest contrast = «найрізкіший контраст».',
      text: 'The sharpest contrast appeared in games consoles, which were far more popular in Japan.',
      hl: { c: [4] } },

    { step: 5, sec: 'body1', cap: 'Body 1: найпоширеніші пристрої. ranging from … to … = «від … до …»: діапазон усіх трьох країн в одному реченні. just over = «трохи більше», almost = «майже»: так позначаємо наближену цифру.',
      text: 'Smartphones were the most common device everywhere, ranging from just over 80% in Brazil to almost 95% in Poland.',
      hl: { c: [0] } },
    { step: 5, sec: 'body1', cap: 'Ставимо країни в одне речення. roughly = «приблизно», just under = «трохи менше», around = «близько». compared with = «порівняно з».',
      text: 'Laptop ownership showed a clearer gap, as roughly 75% of Polish households had one, compared with just under 60% in Japan and around 50% in Brazil.',
      hl: { c: [1] } },
    { step: 5, sec: 'body1', cap: 'by contrast = «навпаки»: тут лідирує інша країна. ahead of = «випереджаючи».',
      text: 'Smart TVs, by contrast, were most popular in Japan, at almost 80%, ahead of Brazil (just over 70%) and Poland (roughly 60%).',
      hl: { c: [3] } },

    { step: 6, sec: 'body2', cap: 'Body 2: рідші пристрої. the starkest contrast = «найрізкіша різниця». about three times = «приблизно втричі» (60 ÷ 20 = 3). more than twice = «більш ніж удвічі» (60 ÷ 25 = 2,4). Цифри наближені, тому й множник із about.',
      text: 'Games consoles showed the starkest contrast, as just over 60% of Japanese households owned one, about three times the Polish figure of around 20% and more than twice the Brazilian figure of roughly 25%.',
      hl: { c: [4] } },
    { step: 6, sec: 'body2', cap: 'the only … where = «єдиний … де»: виняток. Тут лідирує Бразилія (52%), а не Японія чи Польща.',
      text: 'Tablets were the only device where Brazil led, at just over 50%, compared with roughly 45% in Poland and just under 40% in Japan.',
      hl: { c: [2] } },
    { step: 6, sec: 'body2', cap: 'the least common = «найрідший». under 10% = «менше 10%». Закінчуємо найменшим.',
      text: 'Smart speakers were the least common in all three countries, ranging from under 10% in Poland to just over 20% in Japan.',
      hl: { c: [5] } },

    { step: 7, check: true, cap: 'Перевіряємо за чеклистом: обсяг, структура, зв’язки.',
      hl: {} }
  ],

  lang: {
    approx: { label: 'Наближення і множники',
      list: ['just over', 'just under', 'roughly', 'around', 'almost', 'about three times', 'more than twice', 'a clearer gap', 'far more popular', 'the sharpest contrast', 'the starkest contrast'] },
    comp:   { label: 'Порівняння',
      list: ['the most widely owned', 'the most common', 'the least common', 'the most popular', 'the only device where', 'ahead of', 'compared with', 'by contrast', 'whereas'] },
    part:   { label: 'Структури',
      list: ['ranging from', 'showed', 'led', 'owned', 'had one'] }
  },

  linking: ['whereas', 'while', 'by contrast', 'in contrast', 'however', 'overall', 'compared with', 'in comparison', 'unlike', 'similarly', 'meanwhile', 'although', 'ahead of']
};
