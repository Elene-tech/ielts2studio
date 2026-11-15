/* Scatter Lab · 2 рівні. L1: перетягни точки, щоб графік відповідав реченню (build). L2: обери точне речення про графік (read).
   Усі цифри в read-завданнях звірені з scatter-scenes.js. Причини («causes», «because») у відповідях IELTS не пишемо. */
window.LAB = { id: 'lab-1', levels: [
 { id: 'L1', title: 'Рівень 1 · Намалюй кореляцію', intro: 'Перетягуй точки, поки графік не відповідатиме реченню. Прямий зв’язок з лінією тренду показано пунктиром, а внизу сила кореляції словами.', tasks: [
  { type: 'build', say: 'There is a [[strong positive correlation]] between hours of study and exam scores.', ax: { x: 'Hours of study per week', y: 'Exam score (%)', xMax: 10, yMax: 100, xStep: 2, yStep: 20 },
    init: [[1,55],[2,20],[3,80],[4,40],[5,65],[6,30],[8,75],[9,45]], req: { r: [0.8, 1] },
    hint: 'positive = точки йдуть з лівого нижнього кута у правий верхній. strong = вони щільно лежать біля лінії.', uk: 'strong positive correlation: чим більше годин навчання, тим вищі бали, і точки лежать щільно біля лінії. Фраза-модель: «the more … the higher …».', bank: ['strong positive correlation', 'the more … the higher …', 'tend to rise'] },
  { type: 'build', say: 'There is a [[strong negative correlation]]: the higher the temperature, the fewer winter coats are sold.', ax: { x: 'Daily temperature (°C)', y: 'Coats sold per day', xMax: 10, yMax: 100, xStep: 2, yStep: 20 },
    init: [[1,55],[2,20],[3,80],[4,40],[5,65],[6,30],[8,75],[9,45]], req: { r: [-1, -0.8] },
    hint: 'negative = точки йдуть згори-ліворуч донизу-праворуч. Лінія тренду має падати.', uk: 'strong negative correlation: коли одна величина росте, інша падає. Не пиши «temperature causes fewer coats»: графік показує зв’язок, а не причину.', bank: ['strong negative correlation', 'the higher …, the fewer …', 'tend to fall'] },
  { type: 'build', say: 'There is [[no clear correlation]] between shoe size and exam score.', ax: { x: 'Shoe size (EU)', y: 'Exam score (%)', xMax: 10, yMax: 100, xStep: 2, yStep: 20 },
    init: [[1,12],[2,25],[3,33],[4,45],[5,52],[6,66],[8,78],[9,90]], req: { r: [-0.25, 0.25] },
    hint: 'no correlation = хмара без напрямку. Лінія тренду майже горизонтальна, а сила кореляції — «no clear».', uk: 'no clear correlation: точки розкидані, зв’язку немає. Можна також: «there is no obvious relationship», «the dots are scattered randomly».', bank: ['no clear correlation', 'no obvious relationship', 'scattered randomly'] },
  { type: 'build', say: 'There is a [[weak positive correlation]] between family income and the number of books owned.', ax: { x: 'Family income (£ thousands)', y: 'Books owned', xMax: 10, yMax: 100, xStep: 2, yStep: 20 },
    init: [[1,55],[2,20],[3,80],[4,40],[5,65],[6,30],[8,75],[9,45]], req: { r: [0.25, 0.6] },
    hint: 'weak = напрям є, але точки сильно розкидані. Тренд росте, але хмара широка.', uk: 'weak positive correlation: зв’язок є, але слабкий: на однакових значеннях X значення Y дуже різні. Між weak і strong є moderate.', bank: ['weak positive correlation', 'a slight upward trend', 'widely spread'] },
  { type: 'build', say: 'There is a [[strong positive correlation]], with [[one clear outlier]].', ax: { x: 'Hours of practice per week', y: 'Test score (%)', xMax: 10, yMax: 100, xStep: 2, yStep: 20 },
    init: [[1,55],[2,20],[3,80],[4,40],[5,65],[6,30],[8,75],[9,45]], req: { outlier: true },
    hint: 'Сім точок мають лежати по лінії вгору, а одна точка має бути далеко від неї (викид).', uk: 'outlier = точка, яка не вкладається в загальну тенденцію. У тексті про неї пишемо окреме речення: «one notable exception…», «an outlier at …».', bank: ['strong positive correlation', 'one clear outlier', 'one notable exception'] }
 ] },
 { id: 'L2', title: 'Рівень 2 · Обери точне речення', intro: 'Для кожного графіка обери речення, яке точно описує те, що на графіку: напрям, силу, цифри. Пастки: протилежний напрям, причина замість зв’язку, неправильний масштаб.', tasks: [
  { type: 'read', scene: 'TEMP', hl: { fit: true, r: true }, q: 'Which sentence describes the **overall relationship** most accurately?',
    opts: [
      { t: 'Apart from one outlier, there is a strong positive correlation between temperature and the number of visitors.', ok: true, why: 'Напрям (positive), сила (strong) і виняток (outlier): три речі в одному реченні.' },
      { t: 'Warm weather causes more people to visit the resort.', why: 'Причина. Графік показує зв’язок, а не те, що спричиняє що. На іспиті «causes» — помилка.' },
      { t: 'There is a strong negative correlation: visitor numbers fall as the temperature rises.', why: 'Напрям навпаки: точки йдуть вгору.' },
      { t: 'There is no clear relationship between temperature and visitor numbers.', why: 'Тренд очевидний: точки лежать біля висхідної лінії.' }] },
  { type: 'read', scene: 'TEMP', hl: { out: true, labels: false }, q: 'Which sentence reports the **outlier** correctly?',
    opts: [
      { t: 'One day is a clear outlier: at only 11°C, it attracted around 41,000 visitors, far more than other days at similar temperatures.', ok: true, why: 'Точна позиція (11°C, ≈41,000) і порівняння з іншими днями.' },
      { t: 'One day at 30°C had the fewest visitors.', why: 'Викид зовсім в іншому місці: це холодний день із великою кількістю відвідувачів.' },
      { t: 'The outlier shows that cold weather attracts more visitors.', why: 'Узагальнення і причина з однієї точки. Викид — виняток, а не нова закономірність.' },
      { t: 'An outlier at 11°C had about 4,100 visitors.', why: 'Масштаб: це 41,000, не 4,100.' }] },
  { type: 'read', scene: 'ECON', hl: { legend: true }, q: 'What is the **overall pattern** in both groups of countries?',
    opts: [
      { t: 'In both groups, the higher the national income, the lower the share of household spending on food.', ok: true, why: 'Напрям (negative) і правильна величина — частка видатків (share), а не сума.' },
      { t: 'Richer countries spend less money on food.', why: 'Графік показує ЧАСТКУ витрат (%), а не суму. Багаті можуть витрачати більше в грошах.' },
      { t: 'In both groups, richer countries spend a larger share of income on food.', why: 'Напрям навпаки.' },
      { t: 'There is no correlation within either group.', why: 'В обох групах точки лягають майже на пряму лінію.' }] },
  { type: 'read', scene: 'ECON', hl: { g: ['as', 'eu'], zone: { x: [24, 31], y: [15, 28], t: 'similar income' } }, q: 'Compare the two groups at **similar income levels**. Which sentence is accurate?',
    opts: [
      { t: 'At similar income levels, Asian households spent a higher share on food: at around US$25–30 thousand, roughly 22–26% compared with 17–19% in Europe.', ok: true, why: 'Порівняння груп з цифрами: при доході ≈25–30 тис. Азія 22–26%, Європа 17–19%.' },
      { t: 'European countries spent more on food because they are richer.', why: 'Причина й неправильний напрям: європейські країни витрачають меншу частку.' },
      { t: 'Both groups spent exactly the same share at the same income.', why: 'Між групами є різниця: помаранчеві точки вище.' },
      { t: 'Asian countries had a lower share, at about 10% to 12%.', why: 'У тій зоні в Азії 22–26%, не 10–12%.' }] },
  { type: 'read', scene: 'HEAT', hl: { out: true, fit: true }, q: 'Which sentence describes the heating-bill graph best?',
    opts: [
      { t: 'Apart from one city, colder cities tended to have higher bills: at between −3°C and 0°C, bills were mostly £120–150, whereas at 10°C the bill was only about £30.', ok: true, why: 'Тренд + цифри з двох кінців графіка + виняток (apart from one city).' },
      { t: 'The coldest city had the lowest heating bill.', why: 'Найхолодніше місто (−3°C) має один із найвищих рахунків. Низький рахунок має викид при −1°C.' },
      { t: 'Heating bills rise as temperatures rise.', why: 'Напрям навпаки.' },
      { t: 'Cold weather made heating bills very expensive.', why: 'Причинний зв’язок. Пиши: «bills were higher in colder cities».' }] },
  { type: 'read', scene: 'RAIN', hl: { fit: true, r: true }, q: 'How **strong** is the relationship? Choose the best sentence.',
    opts: [
      { t: 'There is a moderate negative correlation: cycling tended to decrease as rainfall increased, although the points are quite spread out.', ok: true, why: 'Точки помітно розкидані, тому moderate, а не strong. Фраза «although …» пояснює, чому.' },
      { t: 'There is a very strong negative correlation between rainfall and cycling.', why: 'Точки далеко від лінії, тож «very strong» перебільшення.' },
      { t: 'There is a moderate positive correlation between rainfall and cycling.', why: 'Лінія падає: correlation negative.' },
      { t: 'There is no relationship between rainfall and cycling.', why: 'Тренд вниз усе ж видно.' }] },
  { type: 'read', scene: 'RAIN', hl: { zone: { x: [0, 40], y: [0, 100], t: 'below 40 mm' } }, q: 'Which sentence uses the **numbers** most precisely?',
    opts: [
      { t: 'In months with less than 40 mm of rain, there were roughly 40 to 92 cyclists per hour, whereas above 100 mm the figure fell to between about 10 and 37.', ok: true, why: 'Два діапазони з однаковими умовами порівняння (до 40 мм і понад 100 мм).' },
      { t: 'The number of cyclists fell steadily from 92 to 10 as rainfall rose.', why: '«Steadily» неправда: точки скачуть, зв’язок не рівний.' },
      { t: 'In dry months there were exactly 70 cyclists per hour.', why: '«Exactly 70»: там діапазон, а не одне число. Використовуй roughly / from about … to …' },
      { t: 'Above 100 mm, there were between 40 and 92 cyclists per hour.', why: 'Діапазони переплутані: 40–92 це сухі місяці.' }] }
 ] }
] };
