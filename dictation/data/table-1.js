/* Диктант · Tables 1. Чотири міста, п’ять видів транспорту, модель Band 7.
   [[ ... ]] у тексті = множники й розриви (підсвічуються після перевірки).
   Аудіо: audio/table-1/01.mp3 ... 10.mp3. Якщо файлу немає, читає синтезатор мови. */
window.DICT = {
  id: 'table-1',
  title: 'Диктант · Tables',
  audioDir: 'audio/table-1/',
  apxLabel: 'множники й порівняння',
  note: '≈ Таблиця показує один рік, тому в моделі <b>немає trend-дієслів</b>: лише відбір клітинок, <b>respectively</b>, множники (<b>more than six times</b>) і виняток.',
  links: { theory: '../lesson-deck/index.html?m=tables', studio: '../index.html?t=table-1' },
  prompt: 'The table below shows the percentage of employees who used five modes of transport to travel to work in four cities in 2022.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  chart: {
    type: 'table',
    title: 'How employees travelled to work, 2022 (%)',
    corner: 'Mode of transport · %', suf: '%',
    cols: ['Leeds', 'Utrecht', 'Lyon', 'Houston'],
    rows: [
      { label: 'Car', data: [52, 21, 40, 82] },
      { label: 'Bus', data: [18, 9, 14, 4] },
      { label: 'Train', data: [14, 12, 22, 3] },
      { label: 'Cycling', data: [6, 38, 9, 1] },
      { label: 'Walking', data: [10, 20, 15, 10] }
    ]
  },
  sections: {
    intro:    { label: 'Introduction', color: '#2C6E8A', bg: '#D6E8F5' },
    overview: { label: 'Overview',     color: '#2C7A5A', bg: '#D6EDE4' },
    body1:    { label: 'Body 1',       color: '#9A7020', bg: '#FFF0CC' },
    body2:    { label: 'Body 2',       color: '#E1512E', bg: '#FDDDD8' }
  },
  sentences: [
    { sec: 'intro',    text: 'The table compares the percentage of employees who used five modes of transport to travel to work in four cities in 2022.', uk: 'Intro: перефразована умова. compares = «порівнює», modes of transport = «види транспорту», to travel to work = «діставатися на роботу».', hl: {} },
    { sec: 'overview', text: 'Overall, the car was the most popular way to commute in most of the cities, particularly in Houston.', uk: 'Overview: головний патерн, без цифр. the most popular way = «найпопулярніший спосіб», to commute = «їздити на роботу», particularly = «особливо».', hl: { r: [0] } },
    { sec: 'overview', text: 'However, Utrecht stood out as a striking exception, where cycling, rather than driving, was the leading choice.', uk: 'Overview: виняток. stood out as = «вирізнявся», a striking exception = «разючий виняток», rather than = «а не», the leading choice = «головний вибір».', hl: { cells: [[3, 1], [0, 1]] } },
    { sec: 'body1',    text: 'Houston was the most car-dependent city, with 82% of employees driving to work.', uk: 'Body 1: починаємо з найбільшої клітинки таблиці. car-dependent = «залежний від авто», with 82% = «із 82%».', hl: { cells: [[0, 3]] } },
    { sec: 'body1',    text: 'This was [[nearly four times]] the Utrecht figure of 21%.', uk: 'Множник: 82 ÷ 21 = 3,9, тому nearly four times. Не «four times more»!', hl: { cells: [[0, 3], [0, 1]] } },
    { sec: 'body1',    text: 'Leeds and Lyon recorded intermediate figures of 52% and 40% respectively.', uk: 'intermediate figures = «проміжні значення». respectively: 52% відповідає Leeds, 40% відповідає Lyon, порядок той самий.', hl: { cells: [[0, 0], [0, 2]] } },
    { sec: 'body2',    text: 'In contrast, 38% of Utrecht commuters cycled, [[more than six times]] the Leeds figure of 6%.', uk: 'In contrast = «навпаки», відкриває Body 2. 38 ÷ 6 = 6,3, тому more than six times. commuters = «ті, хто їздить на роботу».', hl: { cells: [[3, 1], [3, 0]] } },
    { sec: 'body2',    text: 'Cycling was negligible in Houston, at just 1%.', uk: 'negligible = «мізерний», just 1% = «лише 1%». Найменша клітинка рядка.', hl: { cells: [[3, 3]] } },
    { sec: 'body2',    text: 'Train use was highest in Lyon, at 22%, [[more than seven times]] the Houston figure of 3%.', uk: 'was highest = «був найвищим». 22 ÷ 3 = 7,3, тому more than seven times. Не «seven times more»!', hl: { cells: [[2, 2], [2, 3]] } },
    { sec: 'body2',    text: 'Finally, buses carried fewer than one in five commuters in every city, ranging from 4% in Houston to 18% in Leeds.', uk: 'Finally = «насамкінець». fewer than one in five = «менше ніж кожен п’ятий» (усі значення нижчі за 20%). ranging from … to … = «від … до …».', hl: { r: [1] } }
  ]
};
