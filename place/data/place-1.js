/* Language of Location · «Постав на місце».
   Три рівні: 1) карта зі сторонами світу; 2) план вокзалу без компаса (вхід, ліворуч/праворуч, навпроти);
   3) кампус (вісь-алея, квад, «behind / in front of / on either side of»).
   Завдання place: прочитай опис і перетягни значок на правильне місце. Завдання pick: обери речення, яке точно описує підсвічений об'єкт.
   [[фраза]] у тексті підсвічується золотим: це мова місця, яку треба запам'ятати. */
window.PLACE = {
  title: 'Language of Location',
  levels: [
    /* ---------------- 1. КОМПАС ---------------- */
    {
      id: 'L1', name: 'Карта з компасом', short: 'Компас',
      intro: 'На карті зі сторонами світу кожну позицію прив’язуємо до того, що НЕ змінюється: річка, головна дорога, будівля, що стоїть на місці. Перше слово: куди (north, south-west…), друге: від чого.',
      scene: {
        style: 'town', compass: true,
        maps: [{ label: 'BROOKFIELD TOWN', c: '#1A5E45', f: [
          { id: 'river', k: 'water', pts: [[0, 27], [100, 27]], sw: 4, t: 'River Brook', lab: [13, 28.4], fs: 2.8 },
          { id: 'road', k: 'road', pts: [[52, 0], [52, 56]], sw: 3, t: 'Main Road', lab: [49.4, 7], rot: -90, fs: 2.6 },
          { id: 'bridge', k: 'bridge', x: 50.2, y: 24.8, w: 3.6, h: 4.4, lab: false },
          { id: 'townhall', k: 'pub', x: 57, y: 11, w: 17, h: 10, t: 'Town Hall', icon: '🏛️' },
          { id: 'station', k: 'transport', x: 8, y: 31, w: 19, h: 10, t: 'Railway Station', icon: '🚉' }
        ] }]
      },
      slots: [
        { id: 'nw', x: 5, y: 4, w: 19, h: 12 }, { id: 'nc', x: 31, y: 11, w: 17, h: 11 }, { id: 'ne', x: 77, y: 14, w: 19, h: 10 },
        { id: 'sw', x: 5, y: 44, w: 19, h: 9 }, { id: 'sc', x: 57, y: 33, w: 17, h: 11 }, { id: 'se', x: 78, y: 43, w: 17, h: 10 }
      ],
      tasks: [
        { type: 'place', tok: { icon: '🏥', t: 'Hospital' }, slot: 'ne',
          text: 'The hospital stands in [[the north-east corner]] of the map, [[to the east of]] the Town Hall.',
          hint: 'north-east corner = верхній правий кут карти. East of the Town Hall = правіше за ратушу.',
          uk: 'north-east corner: кут карти (діагональ), не просто «north». to the east of + що стоїть на місці (ратуша).' },
        { type: 'place', tok: { icon: '🏫', t: 'School' }, slot: 'nc',
          text: 'The school is on [[the north bank]] of the River Brook, [[immediately to the west of]] the main road.',
          hint: 'north bank = північний берег (над річкою). Immediately to the west of = одразу ліворуч від дороги, впритул.',
          uk: 'the north bank / the south bank: берег річки замість «in the north». immediately to the west of = безпосередньо поруч із дорогою.' },
        { type: 'place', tok: { icon: '🏟️', t: 'Sports centre' }, slot: 'sc',
          text: 'The sports centre is on [[the south bank]], [[directly across the river from]] the Town Hall.',
          hint: 'Across the river from = на іншому березі, просто навпроти ратуші.',
          uk: 'directly across the river from: навпроти через річку. Це точніше, ніж «in the south of the Town Hall».' },
        { type: 'pick', target: 'townhall', q: 'Яке речення точно описує Town Hall?',
          opts: [
            { t: 'It is in the north-east corner of the map.', ok: false, why: 'Кут карти зайнятий іншим місцем. Town Hall стоїть ближче до центру, тому «corner» тут помилка.' },
            { t: 'It lies on the north bank of the river, to the east of the main road.', ok: true, why: 'Дві прив’язки: річка (north bank) і дорога (to the east of the main road). Саме так звучить Band 7.' },
            { t: 'It lies to the west of the main road, south of the river.', ok: false, why: 'Обидві сторони неправильні: ратуша СХІДНІШЕ за дорогу і НА ПІВНІЧНОМУ березі.' }] },
        { type: 'place', tok: { icon: '🛒', t: 'Supermarket' }, slot: 'sw',
          text: 'The supermarket is in [[the south-western corner]] of the map, [[directly to the south of]] the railway station.',
          hint: 'south-western corner = нижній лівий кут. Directly to the south of = просто під вокзалом.',
          uk: 'the south-western corner (кутовий варіант) + directly to the south of (орієнтир: вокзал).' },
        { type: 'place', tok: { icon: '🅿️', t: 'Car park' }, slot: 'se',
          text: 'The car park is in [[the south-east corner]] of the map, [[to the east of]] the main road.',
          hint: 'south-east corner = нижній правий кут карти.',
          uk: 'Кут + сторона від дороги: два рівні точності в одному реченні.' },
        { type: 'place', tok: { icon: '🏭', t: 'Factory' }, slot: 'nw',
          text: 'The factory is in [[the north-western corner]] of the map, on [[the opposite side of the main road from]] the Town Hall.',
          hint: 'North-western corner = верхній лівий кут. The opposite side of the road from the Town Hall = по інший бік дороги.',
          uk: 'on the opposite side of the road from: «навпроти через дорогу», але не обов’язково на одній лінії.' },
        { type: 'pick', target: 'station', q: 'Яке речення точно описує Railway Station?',
          opts: [
            { t: 'It is in the south-west corner of the map.', ok: false, why: 'Кут карти під вокзалом уже зайнятий супермаркетом. Вокзал вище і лише на західній стороні.' },
            { t: 'It is on the south bank of the river, in the western part of the map, to the west of the main road.', ok: true, why: 'Три прив’язки: south bank, the western part, to the west of the main road. Вичерпно й точно.' },
            { t: 'It is directly across the river from the Town Hall.', ok: false, why: 'Across the river from = точно навпроти. Ратуша далеко праворуч, вокзал стоїть західніше.' }] }
      ]
    },
    /* ---------------- 2. ВОКЗАЛ ---------------- */
    {
      id: 'L2', name: 'План вокзалу (без компаса)', short: 'Вокзал',
      intro: 'На плані будівлі сторін світу немає. Спершу домовляємося про орієнтир (вхід внизу плану), далі: ліворуч або праворуч від входу, навпроти, поруч, у глибині (the far end), в кутку.',
      scene: {
        style: 'plan', compass: false,
        maps: [{ label: 'CENTRAL STATION · GROUND FLOOR', c: '#1A3A2D',
          building: { x: 3, y: 2, w: 94, h: 44 },
          ent: [{ x: 50, y: 46, d: 'up', t: 'MAIN ENTRANCE' }],
          f: [
            { id: 'concourse', k: 'floor', x: 5, y: 13, w: 90, h: 31, lab: false },
            { id: 'platforms', k: 'rail', x: 5, y: 4, w: 90, h: 8, t: 'Platforms 1–4', icon: '🚆', fs: 3.6 },
            { id: 'tickets', k: 'pub', x: 6, y: 18, w: 14, h: 15, t: 'Ticket Office', icon: '🎫' }
          ] }]
      },
      slots: [
        { id: 'le', x: 30, y: 34, w: 17, h: 10 }, { id: 're', x: 53, y: 34, w: 17, h: 10 },
        { id: 'back', x: 40, y: 14, w: 20, h: 9 }, { id: 'opp', x: 80, y: 18, w: 14, h: 15 },
        { id: 'flc', x: 6, y: 34, w: 14, h: 10 }, { id: 'frc', x: 80, y: 34, w: 14, h: 10 }
      ],
      tasks: [
        { type: 'place', tok: { icon: '☕', t: 'Café' }, slot: 'le',
          text: 'The café is [[immediately to the left of]] the main entrance.',
          hint: 'Entrance внизу. Стоїш обличчям до плану: ліворуч від входу = лівіше, але впритул до нього.',
          uk: 'immediately to the left of the entrance: орієнтир не компас, а вхід. Слово immediately = «одразу, впритул».' },
        { type: 'place', tok: { icon: '📰', t: 'Newsagent' }, slot: 're',
          text: 'The newsagent’s is [[immediately to the right of]] the main entrance, [[facing]] the café.',
          hint: 'Праворуч від входу, впритул. Він дивиться на кафе через прохід.',
          uk: 'facing / opposite: два об’єкти дивляться один на одного. Для планів це найкращий спосіб без компаса.' },
        { type: 'pick', target: 'platforms', q: 'Яке речення точно описує Platforms 1–4?',
          opts: [
            { t: 'The platforms are next to the main entrance.', ok: false, why: 'Платформи далеко від входу, вони на протилежному боці.' },
            { t: 'The platforms are at the far end of the station, directly opposite the main entrance.', ok: true, why: 'at the far end = у глибині, directly opposite = просто навпроти входу. Дві точні прив’язки.' },
            { t: 'The platforms are in the front left-hand corner.', ok: false, why: 'Front = біля входу. Платформи у глибині (back), а не біля входу.' }] },
        { type: 'place', tok: { icon: 'ℹ️', t: 'Information desk' }, slot: 'back',
          text: 'The information desk is [[at the far end of]] the concourse, [[directly in front of]] the platforms.',
          hint: 'The far end = найдальша від входу частина; in front of the platforms = перед ними.',
          uk: 'at the far end of the concourse: у глибині зали. in front of: перед чимось, а не «before».' },
        { type: 'place', tok: { icon: '🚻', t: 'Toilets' }, slot: 'opp',
          text: 'The toilets are [[directly opposite]] the ticket office, [[on the other side of]] the concourse.',
          hint: 'Ticket office на лівій стіні, тож навпроти = на правій стіні, на тому ж рівні.',
          uk: 'directly opposite + on the other side of: навпроти через простір (зала, дорога, річка).' },
        { type: 'place', tok: { icon: '🧳', t: 'Left luggage' }, slot: 'flc',
          text: 'The left-luggage office is in [[the front left-hand corner]], [[next to]] the ticket office.',
          hint: 'Front = біля входу, left-hand corner = лівий кут. Поруч із касою (під нею).',
          uk: 'the front left-hand corner = передній лівий кут. next to: поруч (для впритул краще immediately next to / adjacent to).' },
        { type: 'pick', target: 'tickets', q: 'Яке речення точно описує Ticket Office?',
          opts: [
            { t: 'The ticket office is on the left-hand side of the concourse, between the platforms and the front-left corner.', ok: true, why: 'on the left-hand side + between …: дві точні прив’язки, і жодного компаса.' },
            { t: 'The ticket office is at the far end of the concourse, in front of the platforms.', ok: false, why: 'Це місце інформаційної стійки, а каса стоїть на лівій стіні.' },
            { t: 'The ticket office is immediately to the right of the main entrance.', ok: false, why: 'Праворуч від входу стоїть газетний кіоск, каса ліворуч і значно далі.' }] },
        { type: 'place', tok: { icon: '🪑', t: 'Waiting room' }, slot: 'frc',
          text: 'The waiting room is in [[the front right-hand corner]] of the concourse, [[opposite]] the left-luggage office.',
          hint: 'Front right-hand corner = передній правий кут.',
          uk: 'the front right-hand corner. opposite: навпроти (як із лівим кутом).' }
      ]
    },
    /* ---------------- 3. КАМПУС ---------------- */
    {
      id: 'L3', name: 'Кампус університету', short: 'Кампус',
      intro: 'Кампус мало схожий на карту з компасом. Тут опорні точки: головна брама, центральна алея, газон-квад і бібліотека. Корисні слова: behind, in front of, on either side of, at the end of, facing each other.',
      scene: {
        style: 'plan', compass: false,
        maps: [{ label: 'HARTWELL UNIVERSITY CAMPUS', c: '#1A5E45',
          ent: [{ x: 50, y: 47, d: 'up', t: 'MAIN GATE' }],
          f: [
            { id: 'avenue', k: 'road', pts: [[50, 56], [50, 36]], sw: 5, t: 'Main Avenue', lab: [41.8, 44], rot: -90, fs: 2.8 },
            { id: 'quad', k: 'green', x: 31, y: 19, w: 38, h: 16, t: 'The Quad', icon: '🌳' },
            { id: 'library', k: 'pub', x: 37, y: 3, w: 26, h: 12, t: 'Library', icon: '📚' }
          ] }]
      },
      slots: [
        { id: 'gl', x: 24, y: 40, w: 19, h: 11 }, { id: 'gr', x: 57, y: 40, w: 19, h: 11 },
        { id: 'ql', x: 8, y: 19, w: 19, h: 16 }, { id: 'qr', x: 73, y: 19, w: 19, h: 16 },
        { id: 'bl', x: 8, y: 3, w: 25, h: 12 }, { id: 'br', x: 67, y: 3, w: 25, h: 12 }
      ],
      tasks: [
        { type: 'place', tok: { icon: '🍽️', t: 'Canteen' }, slot: 'gl',
          text: 'The canteen is [[on the left-hand side of]] the avenue, [[just inside]] the main gate.',
          hint: 'Just inside the main gate = одразу за брамою, ліворуч від алеї.',
          uk: 'on the left-hand side of the avenue: прив’язка до алеї. just inside = одразу за брамою.' },
        { type: 'place', tok: { icon: '🏋️', t: 'Sports hall' }, slot: 'gr',
          text: 'The sports hall is [[on the opposite side of]] the avenue, [[directly across from]] the canteen.',
          hint: 'Навпроти кантини через алею.',
          uk: 'on the opposite side of / directly across from: навпроти через алею.' },
        { type: 'pick', target: 'quad', q: 'Яке речення точно описує The Quad?',
          opts: [
            { t: 'The quad is in the centre of the campus, between the library and the main gate.', ok: true, why: 'in the centre + between X and Y: дві опорні точки. Класика для планів.' },
            { t: 'The quad is behind the library.', ok: false, why: 'Behind = позаду. Бібліотека стоїть позаду квада, а не навпаки.' },
            { t: 'The quad is on the left-hand side of the avenue.', ok: false, why: 'Квад зміщений від алеї: алея закінчується біля його нижнього краю, а не йде вздовж лівої сторони.' }] },
        { type: 'place', tok: { icon: '🎓', t: 'Lecture theatre' }, slot: 'ql',
          text: 'The lecture theatre stands [[to the left of]] the quad, [[facing]] the science block across the grass.',
          hint: 'Ліворуч від квада; science block стоїть навпроти через траву, тобто праворуч.',
          uk: 'to the left of the quad: орієнтир. facing + across the grass: два об’єкти дивляться один на одного.' },
        { type: 'place', tok: { icon: '🔬', t: 'Science block' }, slot: 'qr',
          text: 'The science block is [[to the right of]] the quad, [[on the same level as]] the lecture theatre.',
          hint: 'Праворуч від квада, на тому ж рівні, що й лекційний театр.',
          uk: 'on the same level as: на одній лінії. Корисно, коли об’єкти стоять симетрично.' },
        { type: 'place', tok: { icon: '🏠', t: 'Halls of residence' }, slot: 'br',
          text: 'The halls of residence are [[at the back of the campus]], [[immediately to the right of]] the library.',
          hint: 'At the back = у глибині кампуса (верх плану), праворуч від бібліотеки.',
          uk: 'at the back of the campus = найдальша частина від брами. Орієнтир тут: бібліотека.' },
        { type: 'place', tok: { icon: '🎒', t: 'Student union' }, slot: 'bl',
          text: 'The student union is [[at the back of the campus]], [[immediately to the left of]] the library, [[behind]] the lecture theatre.',
          hint: 'Ліворуч від бібліотеки, позаду лекційного театру (за ним, глибше).',
          uk: 'behind = позаду, глибше від входу, ніж лекційний театр. Не плутати з «after».' }
      ]
    }
  ]
};
