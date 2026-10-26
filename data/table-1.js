/* Пишемо разом · Tables 1
   Екзаменне завдання: таблиця, 4 міста × 5 причин поїздки (тисячі відвідувачів), один рік.
   Один рік = past simple без trend-дієслів; мова: відбір клітинок, групування, винятки, множники. */
window.TASK = {
  id: 'table-1',
  kicker: 'Пишемо разом · Tables',
  prompt: 'The table below shows the number of visitors, in thousands, who travelled to four European cities for five different purposes in 2022.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=tables', dict: 'dictation/index.html?t=table-1' },

  chart: {
    type: 'table',
    title: 'Visitors by purpose of visit, four cities, 2022 (thousands)',
    corner: 'Purpose · thousands',
    cols: ['Lisbon', 'Prague', 'Vienna', 'Budapest'],
    rows: [
      { label: 'Leisure', data: [840, 760, 620, 540] },
      { label: 'Business', data: [210, 180, 480, 150] },
      { label: 'Visiting family', data: [320, 140, 160, 260] },
      { label: 'Education', data: [60, 90, 150, 70] },
      { label: 'Medical', data: [25, 15, 40, 120] }
    ]
  },

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Таблиця',   tip: 'Читаємо таблицю: що вимірюємо (тисячі відвідувачів), чотири міста, п’ять причин, один рік. Один рік: нічого не рухається.' },
    { n: 2, label: 'Відбір',    tip: 'Із 20 клітинок беремо 10–13: найбільші, винятки, різкі контрасти. Середні клітинки без історії пропускаємо.' },
    { n: 3, label: 'Intro',     tip: 'Introduction: перефразуємо умову одним реченням.' },
    { n: 4, label: 'Overview',  tip: 'Overview: головний патерн і виняток, без цифр. Без нього бал не піднімається.' },
    { n: 5, label: 'Body 1',    tip: 'Body 1: перша група рядків, міста порівнюємо в одному реченні.' },
    { n: 6, label: 'Body 2',    tip: 'Body 2: де патерн змінюється. Починаємо з In contrast.' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: слова, структура, лексика, помилки.' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо таблицю: тисячі відвідувачів, чотири міста, п’ять причин поїздки, один рік (2022).',
      hl: { legend: true } },
    { step: 2, cap: 'Один рік означає past simple і жодних trend-дієслів. Порівнюємо міста між собою, а не рік з роком.',
      hl: {} },
    { step: 2, cap: 'Що домінує всюди? Відпочинок (leisure): це найбільший рядок у кожному місті.',
      hl: { r: [0] } },
    { step: 2, cap: 'Де патерн ламається? У Відні бізнес-поїздок (480) значно більше, ніж в інших містах (150–210). А в Будапешті незвично багато медичних візитів (120).',
      hl: { cells: [[1, 2], [4, 3]] } },
    { step: 2, cap: 'Що пропускаємо? Середні клітинки без історії: наприклад, освіта в Лісабоні (60) чи бізнес у Будапешті (150).',
      hl: { cells: [[3, 0], [1, 3]] } },

    { step: 3, sec: 'intro', cap: 'Introduction: перефразуємо умову. shows → provides data on, hours/people → number of visitors, purposes of visit → five different purposes.',
      text: 'The table provides data on the number of visitors, in thousands, who travelled to four European cities for five different purposes in 2022.',
      hl: { legend: true } },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: головний патерн, без цифр. the main reason = «головна причина».',
      text: 'Overall, leisure was the main reason for visiting in every city.',
      hl: { r: [0] } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: винятки. stood out as = «вирізнявся». a striking exception = «разючий виняток».',
      text: 'However, Vienna stood out as a striking exception for business travel, while Budapest was unusual for medical visits.',
      hl: { cells: [[1, 2], [4, 3]] } },

    { step: 5, sec: 'body1', cap: 'Body 1: відпочинок. With regard to… = «що стосується…». more than one and a half times: 840 ÷ 540 = 1,56.',
      text: 'With regard to leisure, Lisbon attracted the most visitors, at 840 thousand, more than one and a half times the Budapest figure of 540 thousand.',
      hl: { cells: [[0, 0], [0, 3]] } },
    { step: 5, sec: 'body1', cap: 'respectively: значення йдуть у тому ж порядку, що й міста (Prague 760, Vienna 620). intermediate figures = «проміжні значення».',
      text: 'Prague and Vienna recorded intermediate figures of 760 and 620 thousand respectively.',
      hl: { cells: [[0, 1], [0, 2]] } },
    { step: 5, sec: 'body1', cap: 'told a different story = «розповідав іншу історію». more than two and a half times: 480 ÷ 180 = 2,7.',
      text: 'Business travel told a different story, as Vienna drew 480 thousand business visitors, more than two and a half times the Prague figure of 180 thousand.',
      hl: { cells: [[1, 2], [1, 1]] } },

    { step: 6, sec: 'body2', cap: 'In contrast = «навпаки»: сигнал зміни фокусу. more than twice: 320 ÷ 140 = 2,3.',
      text: 'In contrast, visiting family was most common in Lisbon, at 320 thousand, more than twice the Prague figure of 140 thousand.',
      hl: { cells: [[2, 0], [2, 1]] } },
    { step: 6, sec: 'body2', cap: 'negligible = «мізерний». exactly eight times: 120 ÷ 15 = 8. Рівне число, тому без hedging.',
      text: 'Medical visits were negligible in most cities, at between 15 and 40 thousand, whereas Budapest attracted 120 thousand, eight times the Prague figure.',
      hl: { r: [4] } },
    { step: 6, sec: 'body2', cap: 'ranged from … to … = «коливалися від … до …». Закінчуємо рядком освіти.',
      text: 'Education visitors ranged from 60 thousand in Lisbon to 150 thousand in Vienna.',
      hl: { r: [3] } },

    { step: 7, check: true, cap: 'Перевіряємо за чеклистом: обсяг, структура, зв’язки.',
      hl: {} }
  ],

  lang: {
    approx: { label: 'Множники і розрив',
      list: ['more than one and a half times', 'more than two and a half times', 'more than twice', 'eight times the figure', 'negligible', 'a striking exception'] },
    comp:   { label: 'Порівняння',
      list: ['the main reason', 'the most visitors', 'most common', 'whereas', 'in contrast', 'unusual', 'stood out as'] },
    part:   { label: 'Структури',
      list: ['With regard to', 'respectively', 'intermediate figures of', 'ranged from … to …', 'at between', 'told a different story'] }
  },

  linking: ['whereas', 'while', 'in contrast', 'however', 'overall', 'respectively', 'with regard to', 'meanwhile', 'although', 'by contrast']
};
