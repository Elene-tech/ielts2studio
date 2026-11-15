/* Пишемо разом · Scatter 1 (погода: одна група + викид)
   Екзаменне завдання: зимова температура й рахунки за опалення у 16 містах. Без дат: present simple.
   Мова: loc = цифри з осей (діапазони), chg = кореляція й тренд, kept = викид/виняток. Причини не пишемо. */
window.TASK = {
  id: 'scatter-1',
  kicker: 'Пишемо разом · Scatter · одна група + викид',
  prompt: 'The scatter graph below shows the relationship between the average winter temperature and the average monthly heating bill in 16 cities.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=scatter', dict: 'dictation/index.html?t=scatter-1', place: 'scatter-lab/index.html?t=lab-1' },

  chart: window.SCSC.HEAT,

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Графік',   tip: 'Читаємо графік: дві змінні (температура, рахунок), одна точка = одне місто. Дат немає, отже present simple.' },
    { n: 2, label: 'Тренд',    tip: 'Тренд: точки йдуть вниз праворуч: negative correlation. Вони щільно біля лінії: strong. Одна точка далеко від лінії: викид.' },
    { n: 3, label: 'Intro',    tip: 'Introduction: перефразуємо умову, називаємо ОБИДВІ змінні й що таке точка.' },
    { n: 4, label: 'Overview', tip: 'Overview: напрям + сила кореляції, пара «the colder…, the higher…» і згадка про викид. Без цифр.' },
    { n: 5, label: 'Body 1',   tip: 'Body 1: головний тренд: холодний кінець осі x, потім теплий. Діапазони, а не список точок.' },
    { n: 6, label: 'Body 2',   tip: 'Body 2: викид: позиція + значення + порівняння з іншими. Потім повертаємось до тренду.' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: strong negative, діапазони, викид, жодних «causes» і «because».' }
  ],

  beats: [
    { step: 1, cap: 'Читаємо графік: x = середня зимова температура, y = місячний рахунок за опалення. Одна точка = одне місто, їх 16. Дат немає, тож пишемо в present simple.', hl: { legend: true } },
    { step: 2, cap: 'Тренд: що холодніше місто, то вищий рахунок. Точки лягають близько до лінії, тож кореляція strong negative.', hl: { fit: true, r: true } },
    { step: 2, cap: 'Одна точка (−1°C, ≈£38) далеко від лінії: це викид. Знайди його ДО того, як почнеш писати.', hl: { out: true } },

    { step: 3, sec: 'intro', cap: 'Introduction: show → illustrate, the relationship between … and …. Називаємо обидві змінні та кількість міст: що означає одна точка.',
      text: 'The scatter graph illustrates the relationship between the average winter temperature and the monthly heating bill in 16 cities.', hl: { legend: true } },

    { step: 4, sec: 'overview', cap: 'Overview, речення 1: strong negative correlation = напрям + сила. the colder …, the higher … = порівняльна пара. tend to be = обережне дієслово: тенденція має винятки. Без цифр.',
      text: 'Overall, there is a strong negative correlation between the two variables: the colder a city is in winter, the higher its residents\' heating bills tend to be.', hl: { fit: true, r: true } },
    { step: 4, sec: 'overview', cap: 'Overview, речення 2: викид. one clear outlier = один явний виняток; a cold city = де він (без цифр). Описуємо, але не пояснюємо чому.',
      text: 'There is, however, one clear outlier, a cold city with an unusually low bill.', hl: { out: true } },

    { step: 5, sec: 'body1', cap: 'Body 1, холодний кінець: In the coldest cities = позиція на осі x. mostly between … and … = діапазон замість списку точок (−3: £145, −2: £150, 0: £123).',
      text: 'In the coldest cities, with average winter temperatures of −3°C to 0°C, monthly bills are mostly between £120 and £150.',
      hl: { zone: { x: [-3, 0], y: [115, 155], t: '−3°C to 0°C' } } },
    { step: 5, sec: 'body1', cap: 'Body 1, теплий кінець: As the temperature rises = перехід від одного кінця осі до іншого. generally fall = є невеликі коливання. roughly … to … = діапазон при 5–7°C; at 10°C = крайнє значення.',
      text: 'As the temperature rises, bills generally fall, to roughly £65 to £80 at 5–7°C and just over £30 at 10°C, the lowest bill on the graph.',
      hl: { zone: { x: [5, 10], y: [25, 85], t: '5–10°C' } } },

    { step: 6, sec: 'body2', cap: 'Body 2: The exception is … at −1°C = позиція викиду. only around £38 = його значення. far below the other cities = порівняння з містами при схожій температурі (£120–150).',
      text: 'The exception is a city at −1°C, where the monthly bill is only around £38, far below the other cities at similar temperatures, which pay roughly £120 to £150.',
      hl: { out: true, zone: { x: [-3, 0], y: [115, 155], t: 'other cold cities' } } },
    { step: 6, sec: 'body2', cap: 'Закриваємо: Excluding this city = повертаємось до тренду. the highest bill, £150, at −2°C = крайня точка графіка. Жодних причин: лише що видно.',
      text: 'Excluding this city, the highest bill, £150, is paid at −2°C, in the second coldest city, which confirms the overall pattern.', hl: { ref: { y: 150, t: '£150' } } },

    { step: 7, check: true, cap: 'Перевіряємо: strong negative, діапазони, викид, нічого про причини.', hl: {} }
  ],

  lang: {
    loc:  { label: 'Цифри з осей: діапазони',
      list: ['−3°C to 0°C', 'mostly between £120 and £150', 'roughly £65 to £80', 'at 5–7°C', 'just over £30', 'at 10°C', 'only around £38', 'roughly £120 to £150', '£150', 'at −2°C', 'at −1°C', 'the highest bill', 'the lowest bill on the graph'] },
    chg:  { label: 'Кореляція й тренд',
      list: ['strong negative correlation', 'the colder a city is in winter, the higher its residents\' heating bills tend to be', 'generally fall', 'As the temperature rises'] },
    kept: { label: 'Викид і виняток',
      list: ['one clear outlier', 'unusually low bill', 'The exception is', 'far below the other cities', 'Excluding this city', 'which confirms the overall pattern'] },
    seq:  { label: 'Рамка і зв’язки',
      list: ['Overall', 'however', 'In the coldest cities', 'As the temperature rises', 'where'] }
  },

  linking: ['overall', 'however', 'as', 'whereas', 'where', 'excluding', 'far below', 'mostly', 'the exception is', 'in contrast']
};
