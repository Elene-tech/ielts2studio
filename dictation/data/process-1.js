/* Диктант · Process 1. Змішаний процес: як бджоли виробляють мед, а бджоляр його готує до продажу.
   Перша фаза — природна (active), друга — людська (passive). [[ ... ]] у тексті = дієслова процесу (active і passive), підсвічуються після перевірки.
   Аудіо: audio/process-1/01.mp3 ... 10.mp3. Якщо файлу немає, читає синтезатор мови. */
window.DICT = {
  id: 'process-1',
  title: 'Диктант · Process',
  audioDir: 'audio/process-1/',
  apxLabel: 'дієслова процесу: active і passive',
  note: '≈ Це <b>змішаний процес</b>: у вулику бджоли діють самі (<b>active</b>: collect, thickens), а на пасіці все робиться з медом (<b>passive</b>: are removed, is filtered). Дієслова підсвітяться золотим.',
  links: { theory: '../lesson-deck/index.html?m=process', studio: '../index.html?t=process-1' },
  prompt: 'The diagram below shows how honey is produced and packaged.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  chart: {
    type: 'process', layout: 'flow', perRow: 3,
    title: 'How honey is produced and packaged',
    phases: [{ id: 'hive', label: 'Phase 1 · in the hive: the bees (1–4)', color: '#D98E04' }, { id: 'farm', label: 'Phase 2 · on the farm: the beekeeper (5–8)', color: '#E1512E' }],
    nodes: [
      { n: 1, t: 'Collect', sub: 'bees gather nectar from flowers', icon: '🐝', phase: 'hive', v: 'a', verb: 'bees collect' },
      { n: 2, t: 'Store', sub: 'nectar carried to wax cells', icon: '🏠', phase: 'hive', v: 'a', verb: 'bees store' },
      { n: 3, t: 'Thicken', sub: 'water evaporates; nectar becomes honey', icon: '☀️', phase: 'hive', v: 'a', verb: 'it thickens' },
      { n: 4, t: 'Seal', sub: 'cells closed with wax', icon: '🕯️', phase: 'hive', v: 'p', verb: 'are sealed' },
      { n: 5, t: 'Remove', sub: 'frames taken out of the hive', icon: '🧑‍🌾', phase: 'farm', v: 'p', verb: 'are removed' },
      { n: 6, t: 'Spin', sub: 'frames spun in a centrifuge', icon: '🌀', phase: 'farm', v: 'p', verb: 'are spun' },
      { n: 7, t: 'Filter', sub: 'small pieces of wax removed', icon: '🧴', phase: 'farm', v: 'p', verb: 'is filtered' },
      { n: 8, t: 'Jar', sub: 'honey poured into jars', icon: '🍯', phase: 'farm', v: 'p', verb: 'is poured' }]
  },
  sections: {
    intro:    { label: 'Introduction', color: '#2C6E8A', bg: '#D6E8F5' },
    overview: { label: 'Overview',     color: '#2C7A5A', bg: '#D6EDE4' },
    body1:    { label: 'Body 1',       color: '#9A7020', bg: '#FFF0CC' },
    body2:    { label: 'Body 2',       color: '#E1512E', bg: '#FDDDD8' }
  },
  sentences: [
    { sec: 'intro',    text: 'The diagram illustrates the eight-stage process by which honey is produced by bees and prepared for sale.', uk: 'Intro: illustrates = «ілюструє», the eight-stage process by which = «восьмиетапний процес, за яким». is produced by bees: тут by + агент залишаємо, бо саме він ділить процес на фази.', hl: { legend: true } },
    { sec: 'overview', text: 'Overall, the process is linear and falls into two distinct phases: the work of the bees in the hive, followed by the work of the beekeeper.', uk: 'Overview: лінійний, дві фази. falls into two distinct phases = «поділяється на дві чіткі фази», followed by = «за якою йде». Без дієслів зі стадій.', hl: { phase: 'hive' } },
    { sec: 'overview', text: 'It begins with the collection of nectar and concludes with the filling of jars.', uk: 'begins with… concludes with… = рамка «початок → кінець». Іменники collection, filling замість дієслів.', hl: { steps: [0, 7] } },
    { sec: 'body1',    text: 'In the first phase, the bees [[collect]] nectar from flowers and [[store]] it in wax cells in the hive.', uk: 'Body 1, речення 1: бджоли діють самі, тому ACTIVE: collect, store. Це природна фаза, passive тут був би дивним.', hl: { steps: [0, 1], voice: true } },
    { sec: 'body1',    text: 'As water [[evaporates]] from the nectar, it [[thickens]] into honey.', uk: 'evaporates і thickens = зміна стану, active без агента. As = «поки», ще один sequencer замість «then».', hl: { steps: [2], voice: true } },
    { sec: 'body1',    text: 'Once the honey [[has thickened]], the cells [[are sealed]] with wax.', uk: 'Once + perfect active (has thickened): стан завершився. А далі PASSIVE are sealed with wax: клітинки закривають, а подробиці агента не важливі.', hl: { steps: [2, 3], voice: true } },
    { sec: 'body2',    text: 'In the second phase, which is carried out by the beekeeper, the frames [[are removed]] from the hive.', uk: 'Body 2: phase opener. by the beekeeper — єдине місце, де агента залишаємо, бо він визначає фазу. are removed = passive.', hl: { steps: [4], voice: true } },
    { sec: 'body2',    text: 'They [[are then spun]] in a centrifuge, so that the honey [[can be extracted]].', uk: 'are then spun = passive. so that + can be extracted = modal passive, мета з діаграми (honey extracted). in a centrifuge = спосіб, його залишаємо.', hl: { steps: [5], voice: true } },
    { sec: 'body2',    text: 'Following this, the honey [[is filtered]] to remove small pieces of wax.', uk: 'Following this = sequencer замість «then». is filtered = passive, to remove… = мета з діаграми.', hl: { steps: [6], voice: true } },
    { sec: 'body2',    text: 'Finally, it [[is poured]] into jars, ready for sale.', uk: 'Finally закриває ланцюжок. is poured = passive. ready for sale = кінцевий стан продукту.', hl: { steps: [7], voice: true } }
  ]
};
