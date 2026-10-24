/* Диктант · Pie Charts 1. Дві діаграми (джерела електроенергії), модель Band 7.
   [[ ... ]] у тексті = дроби й наближення (підсвічуються після перевірки).
   Аудіо: audio/pie-1/01.mp3 ... 10.mp3. Якщо файлу немає, читає синтезатор мови. */
window.DICT = {
  id: 'pie-1',
  title: 'Диктант · Pie Charts',
  audioDir: 'audio/pie-1/',
  apxLabel: 'дроби й порівняння часток',
  note: '≈ Діаграми показують один момент часу, тому в моделі <b>немає трендових дієслів</b>: лише частки, дроби й порівняння (<b>just over a third, less than half, respectively</b>).',
  links: { theory: '../lesson-deck/index.html?m=pie-charts', studio: '../index.html?t=pie-1' },
  prompt: 'The pie charts below show the sources of electricity generated in two countries, Norland and Eastmoor, in 2022.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  chart: {
    type: 'pie',
    title: 'Sources of electricity generation (%)',
    charts: [
      { id: 'nor', name: 'Norland', slices: [
        { id: 'gas',     label: 'Gas',     value: 34, color: '#C0942E' },
        { id: 'nuclear', label: 'Nuclear', value: 28, color: '#4F7A8C' },
        { id: 'wind',    label: 'Wind',    value: 14, color: '#3E9E7A' },
        { id: 'hydro',   label: 'Hydro',   value: 12, color: '#1E5C45' },
        { id: 'coal',    label: 'Coal',    value: 8,  color: '#555B58' },
        { id: 'solar',   label: 'Solar',   value: 4,  color: '#BE3A24' } ] },
      { id: 'eas', name: 'Eastmoor', slices: [
        { id: 'gas',     label: 'Gas',     value: 24, color: '#C0942E' },
        { id: 'nuclear', label: 'Nuclear', value: 12, color: '#4F7A8C' },
        { id: 'wind',    label: 'Wind',    value: 8,  color: '#3E9E7A' },
        { id: 'hydro',   label: 'Hydro',   value: 3,  color: '#1E5C45' },
        { id: 'coal',    label: 'Coal',    value: 44, color: '#555B58' },
        { id: 'solar',   label: 'Solar',   value: 9,  color: '#BE3A24' } ] }
    ]
  },
  sections: {
    intro:    { label: 'Introduction', color: '#2C6E8A', bg: '#D6E8F5' },
    overview: { label: 'Overview',     color: '#2C7A5A', bg: '#D6EDE4' },
    body1:    { label: 'Body 1',       color: '#9A7020', bg: '#FFF0CC' },
    body2:    { label: 'Body 2',       color: '#E1512E', bg: '#FDDDD8' }
  },
  sentences: [
    { sec: 'intro',    text: 'The pie charts illustrate how Norland and Eastmoor produced their electricity from six different sources in 2022.', uk: 'Intro: перефразована умова. illustrate = «показують», produced their electricity = «виробляли електроенергію».', hl: { sl: { nor: 'all', eas: 'all' } } },
    { sec: 'overview', text: 'Overall, Norland relied mainly on gas and nuclear power, whereas Eastmoor depended heavily on coal.', uk: 'Overview: найбільша категорія в кожній країні, без цифр. whereas = «тоді як», relied mainly on = «в основному покладалася на».', hl: { sl: { nor: ['gas', 'nuclear'], eas: ['coal'] } } },
    { sec: 'overview', text: 'Renewable sources, by contrast, accounted for a noticeably larger proportion of the total in Norland.', uk: 'Overview: головна різниця. by contrast = «навпаки», a noticeably larger proportion = «помітно більша частка».', hl: { sl: { nor: ['wind', 'hydro', 'solar'], eas: ['wind', 'hydro', 'solar'] } } },
    { sec: 'body1',    text: 'In Norland, gas was the leading source, supplying [[just over a third]] of all electricity, at 34%.', uk: 'Body 1: починаємо з найбільшої частки. just over a third = «трохи більше третини» (34%). Дріб разом з цифрою звучить краще, ніж одна цифра.', hl: { sl: { nor: ['gas'] } } },
    { sec: 'body1',    text: 'Nuclear power came second at 28%, followed by wind and hydro, at 14% and 12% respectively.', uk: 'came second = «на другому місці», followed by = «за ним», respectively = «відповідно»: 14% до wind, 12% до hydro.', hl: { sl: { nor: ['nuclear', 'wind', 'hydro'] } } },
    { sec: 'body1',    text: 'Coal and solar made only small contributions, at 8% and 4%.', uk: 'Найменші частки ставимо в кінець абзацу. only small contributions = «лише невеликий внесок».', hl: { sl: { nor: ['coal', 'solar'] } } },
    { sec: 'body2',    text: 'In Eastmoor, by contrast, coal was the dominant source, making up [[just under half]] of the total, at 44%.', uk: 'Body 2: by contrast = «навпаки». just under half = «трохи менше половини» (44%). making up = «становлячи».', hl: { sl: { eas: ['coal'] } } },
    { sec: 'body2',    text: 'Gas came second at 24%, while nuclear power, at 12%, was [[less than half]] the Norland figure of 28%.', uk: 'less than half = «менше половини»: порівнюємо Eastmoor (12%) з Norland (28%), а не просто перелічуємо цифри.', hl: { sl: { eas: ['gas', 'nuclear'], nor: ['nuclear'] } } },
    { sec: 'body2',    text: 'Solar, wind and hydro supplied 9%, 8% and 3% respectively, so renewables together made up just 20%.', uk: 'Три цифри в одному реченні: respectively зберігає порядок solar, wind, hydro. together made up = «разом склали».', hl: { sl: { eas: ['solar', 'wind', 'hydro'] } } },
    { sec: 'body2',    text: 'Renewables in Norland, by comparison, totalled 30%, which was [[one and a half times]] the Eastmoor figure.', uk: 'Підсумкове порівняння. by comparison = «для порівняння», one and a half times = «в півтора раза».', hl: { sl: { nor: ['wind', 'hydro', 'solar'], eas: ['wind', 'hydro', 'solar'] } } }
  ]
};
