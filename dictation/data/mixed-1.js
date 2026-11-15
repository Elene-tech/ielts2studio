/* Диктант · Mixed 1. Клімат двох міст: лінійний графік температури + стовпчики опадів (present simple: середні значення без дат).
   [[ ... ]] у тексті = діапазони й цифри (підсвічуються золотим після перевірки).
   Аудіо: audio/mixed-1/01.mp3 ... 10.mp3. Якщо файлу немає, читає синтезатор мови. */
window.DICT = {
  id: 'mixed-1',
  title: 'Диктант · Mixed',
  audioDir: 'audio/mixed-1/',
  apxLabel: 'діапазони й цифри',
  note: '≈ Це <b>два графіки в одному завданні</b>: температура (лінії) і опади (стовпчики). Кожен має свою мову, а <b>Turning to…</b> і <b>Taken together</b> їх зв’язують. Діапазони й цифри підсвітяться золотим.',
  links: { theory: '../lesson-deck/index.html?m=mixed', studio: '../index.html?t=mixed-1', place: '../mixed-lab/index.html?t=mlab-1' },
  prompt: 'The line graph below shows the average monthly temperature in two towns, and the bar chart shows the average rainfall in each season.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  chart: window.MXSC.CL,
  sections: {
    intro:    { label: 'Introduction', color: '#2C6E8A', bg: '#D6E8F5' },
    overview: { label: 'Overview',     color: '#2C7A5A', bg: '#D6EDE4' },
    body1:    { label: 'Body 1',       color: '#9A7020', bg: '#FFF0CC' },
    body2:    { label: 'Body 2',       color: '#E1512E', bg: '#FDDDD8' }
  },
  sentences: [
    { sec: 'intro', text: 'The charts compare the average monthly temperature and the seasonal rainfall in two towns, one on the coast and one in the mountains.', uk: 'Intro: перефраз двох графіків одним реченням. compare = обидва; the average monthly temperature (лінії) + the seasonal rainfall (стовпчики). Без цифр.', hl: { a: {}, b: {} } },
    { sec: 'overview', text: 'Overall, the coastal town is warmer and drier than the mountain town throughout the year.', uk: 'Overview 1: порівняння по обох графіках у одному реченні: warmer (графік 1) and drier (графік 2). throughout the year = у кожному місяці й сезоні.', hl: { a: { s: ['co', 'mo'] }, b: { s: ['co', 'mo'] } } },
    { sec: 'overview', text: 'The two charts also suggest a link: in both towns, the warmest season is the driest.', uk: 'Overview 2: речення-зв’язок уже в overview. suggest, не prove. in both towns = обидва міста; the warmest … the driest = літо на обох графіках.', hl: { a: { band: [5, 7] }, b: { c: [2] }, link: 'summer' } },
    { sec: 'body1', text: 'Turning to the line graph, temperatures in the coastal town [[range from 9°C in January to a peak of 24°C]] in July and August.', uk: 'Body 1, графік 1: Turning to the line graph = міст. range from … to … a peak of = діапазон + пік. Два піки: July and August.', hl: { a: { s: ['co'], pts: { co: [0, 6, 7] } } } },
    { sec: 'body1', text: 'The mountain town is consistently cooler, with [[a low of 2°C in January and a high of 19°C]] in July.', uk: 'Друге місто: consistently cooler = завжди холодніше. a low of … and a high of … = два краї діапазону.', hl: { a: { s: ['mo'], pts: { mo: [0, 6] } } } },
    { sec: 'body1', text: 'The gap between the two towns stays [[between 5 and 7 degrees]] all year.', uk: 'Різниця між лініями: stays between 5 and 7 degrees (7, 7, 7, 6, 5, 5, 5, 6, 7, 7, 7, 7). Один діапазон замість дванадцяти пар.', hl: { a: { s: ['co', 'mo'], band: [0, 11] } } },
    { sec: 'body2', text: 'Regarding the bar chart, rainfall in the coastal town is [[lowest in summer, at only 40 mm]], and [[highest in winter, at 190 mm]].', uk: 'Body 2, графік 2: Regarding the bar chart = міст. lowest … at only 40 mm; highest … at 190 mm = дві крайні точки.', hl: { b: { s: ['co'], c: [0, 2] } } },
    { sec: 'body2', text: 'The mountain town receives considerably more rain in every season, [[peaking at 260 mm in winter]].', uk: 'Друге місто: considerably more rain in every season = порівняння в усіх сезонах. peaking at = пік.', hl: { b: { s: ['mo'], c: [0] } } },
    { sec: 'body2', text: 'In summer, the coastal town is [[at its warmest and driest, with 24°C and 40 mm]], while the mountain town still receives 130 mm.', uk: 'Зв’язок двох графіків: ті самі два факти про літо (24°C з графіка 1, 40 mm з графіка 2). while + still = контраст з горами (130 mm).', hl: { a: { pts: { co: [6, 7] } }, b: { c: [2] }, link: 'summer' } },
    { sec: 'body2', text: 'Taken together, the charts indicate that the cooler mountain town is also the wetter of the two.', uk: 'Синтез: Taken together = обидва графіки. indicate, не prove: ніякої причини. the cooler … also the wetter = дві риси одного міста.', hl: { a: { s: ['mo'] }, b: { s: ['mo'] }, link: 'taken together' } }
  ]
};
