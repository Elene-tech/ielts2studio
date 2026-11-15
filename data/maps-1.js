/* Пишемо разом · Maps 1 (карта з компасом)
   Екзаменне завдання: Kestrel Island, 1995 → 2020 (два минулі роки: past simple + past perfect passive).
   Мова: місце (loc) = compass + anchors; зміна (chg) = точні дієслова; kept = що не змінилось. Без причин. */
window.TASK = {
  id: 'maps-1',
  kicker: 'Пишемо разом · Maps · карта з компасом',
  prompt: 'The maps below show Kestrel Island in 1995 and in 2020.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=maps', dict: 'dictation/index.html?t=maps-1', place: 'place/index.html?t=place-1' },

  chart: window.MAPSC.ISLAND,

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Карта',    tip: 'Читаємо карту: є стрілка N, отже compass. Два роки в минулому: 1995 і 2020. Що не змінилось, а що змінилось?' },
    { n: 2, label: 'Якорі',    tip: 'Якорі: маяк і пляж на місці. Групуємо за ЗОНАМИ: захід острова (хатини, пірс, дорога) і центр з півночі та півдня.' },
    { n: 3, label: 'Intro',    tip: 'Introduction: перефразуємо умову, називаємо острів і роки.' },
    { n: 4, label: 'Overview', tip: 'Overview: загальна картина змін і що лишилось. Без позицій та дрібниць.' },
    { n: 5, label: 'Body 1',   tip: 'Body 1: захід острова. Місце → 1995 → 2020 для кожного об’єкта. Past simple для 1995, past perfect passive для змін.' },
    { n: 6, label: 'Body 2',   tip: 'Body 2: центр, північ і південь. Різні дієслова зміни: converted, reduced, built. Закінчуємо тим, що лишилось.' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: overview, позиції біля кожної зміни, past perfect, різні дієслова, нічого про причини.' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо карту: стрілка N, отже пишемо north, west, in the north-east. Обидва роки в минулому, тож усе в минулому часі.', hl: { legend: true } },
    { step: 2, cap: 'Якорі: маяк у північному сході та пляж на півдні не змінились. Їх ми згадаємо в overview як те, що лишилось.', hl: { ids: ['light', 'beach'], same: true } },
    { step: 2, cap: 'Захід острова: хатини, пірс і стежка: це Body 1.', hl: { ids: ['w', 'jetty', 'track'], diff: true } },
    { step: 2, cap: 'Центр, північ і південь: ферма, ліс, центр для відвідувачів і кафе: це Body 2.', hl: { ids: ['c', 'n', 'visit', 'cafe'], diff: true } },

    { step: 3, sec: 'intro', cap: 'Introduction: show → illustrate, how … changed + both years. Не копіюємо умову: «show the maps» → «illustrate how Kestrel Island changed».',
      text: 'The maps illustrate how Kestrel Island changed between 1995 and 2020.', hl: { legend: true } },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: загальна картина. became far more developed = стала значно забудованішою; replaced by … facilities = те, що змінилось. Без позицій.',
      text: 'Overall, the island became far more developed for visitors, as the fishing huts, the farmland and part of the woodland were replaced by tourist and leisure facilities.',
      hl: { diff: true } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: що лишилось. stayed the same: два об’єкти, які не змінились. Це половина overview.',
      text: 'Only the lighthouse and the beach stayed the same.', hl: { ids: ['light', 'beach'], same: true } },

    { step: 5, sec: 'body1', cap: 'Body 1, 1995: on the west coast = на західному узбережжі, beside = поруч. Past simple для старого стану: stood, led. across the island = через острів.',
      text: 'In 1995, a cluster of fishing huts stood on the west coast, beside a small jetty, and a track led across the island to the lighthouse in the north-east.',
      hl: { ids: ['w', 'jetty', 'track', 'light'], panel: 0, tags: [{ id: 'w', t: 'on the west coast', p: 0 }] } },
    { step: 5, sec: 'body1', cap: 'Body 1, 2020: past perfect passive для змін: had been replaced, had been upgraded. Різні дієслова: replaced / become / upgraded. By 2020 = до другої дати.',
      text: 'By 2020, the huts had been replaced by a beach hotel, the jetty had become a ferry pier, and the track had been upgraded into a paved road.',
      hl: { ids: ['w', 'jetty', 'track'], diff: true, panel: 1 } },

    { step: 6, sec: 'body2', cap: 'Body 2: In the centre of the island = зона. converted = та сама земля, нова функція (ферма → поле для гольфу). reduced = менше (ліс). to make room for = звільнили місце під новий об’єкт.',
      text: 'In the centre of the island, the farmland had been converted into a golf course, and the woodland in the north had been reduced to make room for a new visitor centre.',
      hl: { ids: ['c', 'n', 'visit'], diff: true } },
    { step: 6, sec: 'body2', cap: 'Закриваємо: a café had been built = новий об’єкт; at the beach = де. remained unchanged = повертаємось до того, що лишилось. Причину («for tourists») не пишемо.',
      text: 'A café had also been built on the south coast, at the beach, while the beach itself and the lighthouse remained unchanged.',
      hl: { ids: ['cafe', 'beach', 'light'], diff: true, same: true } },

    { step: 7, check: true, cap: 'Перевіряємо: overview, позиції, past perfect, різні дієслова зміни, дві незмінні речі.', hl: {} }
  ],

  lang: {
    loc:  { label: 'Місце: де це?',
      list: ['on the west coast', 'beside a small jetty', 'across the island', 'in the north-east', 'in the centre of the island', 'in the north', 'on the south coast', 'at the beach'] },
    chg:  { label: 'Зміна: що сталося',
      list: ['were replaced by', 'had been replaced by', 'had become', 'had been upgraded into', 'had been converted into', 'had been reduced', 'had also been built', 'to make room for', 'changed'] },
    kept: { label: 'Що лишилось',
      list: ['stayed the same', 'remained unchanged', 'Only the lighthouse and the beach'] },
    seq:  { label: 'Рамка і зв’язки',
      list: ['Overall', 'In 1995', 'By 2020', 'between 1995 and 2020', 'while'] }
  },

  linking: ['overall', 'by 2020', 'in 1995', 'while', 'also', 'to make room for', 'whereas', 'meanwhile', 'remained unchanged', 'as a result']
};
