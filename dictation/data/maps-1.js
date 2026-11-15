/* Диктант · Maps 1. Карта-план без компаса: університетський кампус Hartwell, 1998 → 2022 (past simple + past perfect passive).
   [[ ... ]] у тексті = мова місця (location), підсвічується золотим після перевірки.
   Аудіо: audio/maps-1/01.mp3 ... 10.mp3. Якщо файлу немає, читає синтезатор мови. */
window.DICT = {
  id: 'maps-1',
  title: 'Диктант · Maps',
  audioDir: 'audio/maps-1/',
  apxLabel: 'мова місця: де саме',
  note: '≈ Це <b>план кампуса без компаса</b>. Місце тут описуємо від головних воріт і алеї: <b>on the left of</b>, <b>at the back</b>, <b>to the left of</b>. Фрази місця підсвітяться золотим.',
  links: { theory: '../lesson-deck/index.html?m=maps', studio: '../index.html?t=maps-1', place: '../place/index.html?t=place-1' },
  prompt: 'The plans below show Hartwell University campus in 1998 and in 2022.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  chart: window.MAPSC.CAMPUS,
  sections: {
    intro:    { label: 'Introduction', color: '#2C6E8A', bg: '#D6E8F5' },
    overview: { label: 'Overview',     color: '#2C7A5A', bg: '#D6EDE4' },
    body1:    { label: 'Body 1',       color: '#9A7020', bg: '#FFF0CC' },
    body2:    { label: 'Body 2',       color: '#E1512E', bg: '#FDDDD8' }
  },
  sentences: [
    { sec: 'intro',    text: 'The plans illustrate how Hartwell University campus changed between 1998 and 2022.', uk: 'Intro: illustrate how … changed = перефраз «show the plans». between 1998 and 2022 = обидві дати в одній фразі.', hl: { legend: true } },
    { sec: 'overview', text: 'Overall, the campus was developed considerably, as the car park and the playing field were replaced by new buildings.', uk: 'Overview: загальна картина змін. was developed considerably = «значно розбудований». Без позицій: їх залишаємо для body.', hl: { ids: ['cp', 'field'], diff: true } },
    { sec: 'overview', text: 'Only the library and the central quad stayed the same.', uk: 'stayed the same = що лишилось. Завжди називаємо «вцілілих». the central quad = «центральний сквер/двір».', hl: { ids: ['lib', 'quad'], same: true } },
    { sec: 'body1',    text: 'In 1998, the main avenue led from the gate straight to the quad, with a car park [[on its left]] and a playing field [[on its right]].', uk: 'Body 1, 1998: past simple (led). on its left / on its right = ліворуч і праворуч від алеї (дивимось від воріт). with + noun = «з…»: одна фраза замість двох речень.', hl: { ids: ['avenue', 'cp', 'field'], panel: 0 } },
    { sec: 'body1',    text: 'By 2022, the car park had been replaced by a sports hall, and the playing field had been developed into halls of residence.', uk: 'By 2022 + past perfect passive: had been replaced, had been developed into. Два різні дієслова зміни. Агента (the university) не пишемо.', hl: { ids: ['cp', 'field'], diff: true, panel: 1 } },
    { sec: 'body1',    text: 'The avenue had also been converted into a pedestrian street.', uk: 'converted into = та сама ділянка, нова функція (дорога → пішохідна вулиця). also додає ще одну зміну в тому ж абзаці.', hl: { ids: ['avenue'], diff: true } },
    { sec: 'body2',    text: '[[On the left of the quad]], the science block had been considerably enlarged.', uk: 'Body 2: On the left of the quad = ліворуч від сквера (якір: quad). considerably enlarged = «значно збільшений»: порівняння всередині зміни.', hl: { ids: ['sci', 'quad'], diff: true } },
    { sec: 'body2',    text: '[[On the right of the quad]], the administration building had been converted into a student centre.', uk: 'Дзеркальна фраза: ліворуч → праворуч. converted into = нова функція тієї самої будівлі.', hl: { ids: ['adm', 'quad'], diff: true } },
    { sec: 'body2',    text: 'Finally, a new café had been built [[at the back]], [[to the left of the library]].', uk: 'Finally закриває перелік змін. at the back = далеко від воріт; to the left of the library = якір: бібліотека. Нова будівля: had been built.', hl: { ids: ['cafe', 'lib'], diff: true } },
    { sec: 'body2',    text: 'The library, [[at the back of the quad]], remained unchanged.', uk: 'Закриваємо тим, що лишилось: remained unchanged. at the back of the quad = біля задньої межі сквера.', hl: { ids: ['lib'], same: true } }
  ]
};
