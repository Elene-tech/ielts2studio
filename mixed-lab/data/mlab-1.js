/* Mixed Lab · 2 рівні. L1: до якого графіка належить речення (sort). L2: обери точне речення для пари графіків (read).
   Усі цифри звірені з mixed-scenes.js (EV, BT). Причини («because», «proves») у відповідях IELTS не пишемо. */
(function () {
  var S3 = [
    { t: 'Chart 1 only (line graph)', k: 'a' },
    { t: 'Chart 2 only (pie chart)', k: 'b' },
    { t: 'Both charts: a linking sentence', k: 'ab' }];
  function sort(say, ans, whys, reveal, bank) {
    return { type: 'read', fixed: true, scene: 'EV', say: say, q: 'Which chart does this sentence use?', hl: {}, reveal: reveal, bank: bank,
      opts: S3.map(function (o) { return { t: o.t, ok: o.k === ans, why: whys[o.k] }; }) };
  }
  var W = { a: 'Роки й кількість продажів є лише на лінійному графіку.', b: 'Частки брендів є лише на колі.', ab: 'Тут поєднано дані з обох графіків: це речення-зв’язок.' };
  window.LAB = { id: 'mlab-1', levels: [
    { id: 'L1', title: 'Рівень 1 · Який це графік?', intro: 'Кожне речення використовує дані з першого графіка, з другого або з обох. Обери, а потім перевір, які саме дані підсвітились.',
      tasks: [
        sort('Electric car sales in Europe rose from 50,000 in 2015 to 800,000 in 2022.', 'a', { a: 'роки й кількість продажів є лише на лінійному графіку.', b: 'На колі немає ні років, ні кількості продажів: лише частки брендів.', ab: 'Речення бере дані тільки з лінійного графіка, зв’язку з колом немає.' }, { a: { s: ['ev'], pts: { ev: [0, 7] } } }, ['rose from … to …', 'in Europe between 2015 and 2022']),
        sort('Tesla held the largest share of the market in 2022, at 35%.', 'b', { a: 'На лінійному графіку немає брендів.', b: 'частки брендів є лише на колі.', ab: 'Речення бере дані тільки з кола.' }, { b: { sl: { y22: ['tes'] } } }, ['held the largest share', 'at 35%']),
        sort('In 2022, the year sales peaked at 800,000, Tesla and Volkswagen together held 60% of the market.', 'ab', { a: 'Є і 800,000 (лінійний графік), і 60% (коло).', b: 'Є 60% (коло), але й 800,000 з лінійного графіка.', ab: 'спільний рік 2022 з’єднує обидва графіки. Це і є речення-зв’язок.' }, { a: { pts: { ev: [7] } }, b: { sl: { y22: ['tes', 'vw'] } }, link: '2022' }, ['In 2022, the year sales peaked at …', 'together held 60%']),
        sort('Sales more than doubled between 2020 and 2022.', 'a', { a: '380 → 800 тисяч, це лише лінійний графік.', b: 'Динаміки у колі немає: воно показує лише 2022.', ab: 'Речення використовує лише лінійний графік.' }, { a: { s: ['ev'], pts: { ev: [5, 7] }, band: [5, 7] } }, ['more than doubled between … and …']),
        sort('Renault accounted for 15%, while the remaining brands together made up 25%.', 'b', { a: 'У лінійному графіку немає брендів.', b: 'два сектори кола в одному реченні.', ab: 'Обидві частки з кола: зв’язку з лінійним графіком немає.' }, { b: { sl: { y22: ['ren', 'oth'] } } }, ['accounted for 15%', 'made up 25%']),
        sort('While sales climbed steadily, one brand alone held more than a third of the market.', 'ab', { a: 'Є «climbed steadily» (лінія), але й «a third of the market» (коло).', b: 'Є частка бренду (коло), але й зростання продажів (лінія).', ab: 'while зіставляє тренд лінії та частку з кола. Це контраст між графіками.' }, { a: { s: ['ev'], band: [0, 7] }, b: { sl: { y22: ['tes'] } }, link: 'while' }, ['While sales climbed …, one brand alone held …'])
      ] },
    { id: 'L2', title: 'Рівень 2 · Обери точне речення', intro: 'Пара графіків про туризм: стовпчики й таблиця. Обери речення, яке точно описує дані, зв’язує графіки й не містить причин.',
      tasks: [
        { type: 'read', scene: 'BT', hl: { a: {}, b: {} }, reveal: { a: { s: ['y12', 'y22'], vals: false }, b: { r: [0, 1], c: [1] }, link: 'the city' }, q: 'Which **overview** covers BOTH charts?', bank: ['Overall, visitor numbers rose in three of the four regions', 'the most popular region … also had the highest daily spend'],
          opts: [
            { t: 'Overall, visitor numbers rose in three of the four regions, and the most popular region, the city, also had the highest daily spend.', ok: true, why: 'Обидва графіки в одному overview: тренд стовпчиків і факт таблиці.' },
            { t: 'Overall, visitor numbers rose in most regions between 2012 and 2022.', why: 'Лише графік 1: таблиці в overview немає.' },
            { t: 'Overall, city visitors spent the most per day, at £135.', why: 'Лише таблиця, і з цифрою (в overview цифри не потрібні).' },
            { t: 'In 2012, 18 million people visited the coast and 22 million the city.', why: 'Це деталь для Body 1, а не overview.' }] },
        { type: 'read', scene: 'BT', hl: { a: {}, b: {} }, reveal: { a: { s: ['y22'], c: [1] }, b: { r: [0], c: [1] }, link: 'the city' }, q: 'Which sentence **links** the two charts?', bank: ['the city attracted the most visitors … yet …', 'stayed the shortest time'],
          opts: [
            { t: 'The city attracted the most visitors in 2022, yet its visitors stayed the shortest time, at 3.2 nights on average.', ok: true, why: 'Один регіон у двох графіках: найбільше відвідувачів (бар) і найкоротший побут (таблиця).' },
            { t: 'The city attracted the fewest visitors but its visitors spent the most.', why: 'Неправда: місто мало найбільше відвідувачів (31 млн).' },
            { t: 'Mountain visitors stayed the longest because the mountains are quiet.', why: 'Причина, і факт неправильний: найдовше залишались на узбережжі (6.1 ночі).' },
            { t: 'The countryside rose to 9 million visitors, and its visitors stayed 4.5 nights.', why: 'У сільській місцевості було 9 → 8 млн: вона єдина впала.' }] },
        { type: 'read', scene: 'BT', hl: { a: { s: ['y12', 'y22'], vals: true } }, reveal: { a: { c: [3], vals: true } }, q: 'Which sentence about the **bar chart** is accurate?', bank: ['the only region where visitor numbers fell', 'from 9 million to 8 million'],
          opts: [
            { t: 'The countryside was the only region where visitor numbers fell, from 9 million to 8 million.', ok: true, why: 'Правильно: 9 → 8 млн, усі інші регіони зросли.' },
            { t: 'Mountain visitors doubled, from 6 million to 12 million.', why: 'Масштаб: у горах було 6 → 9 млн, не 12.' },
            { t: 'By 2022 the coast had overtaken the city.', why: 'Місто лишилось попереду: 31 проти 24 млн.' },
            { t: 'All four regions attracted more visitors in 2022.', why: 'Сільська місцевість впала з 9 до 8 млн.' }] },
        { type: 'read', scene: 'BT', hl: { b: { r: [0, 1] } }, reveal: { b: { r: [0, 1], c: [0, 1] } }, q: 'Which sentence about the **table** is accurate?', bank: ['stayed longest, at 6.1 nights', 'spent less per day … £78 compared with £135'],
          opts: [
            { t: 'Coast visitors stayed longest, at 6.1 nights, but spent less per day than city visitors: £78 compared with £135.', ok: true, why: 'Обидва факти з таблиці правильні й порівняні: 6.1 ночі і £78 проти £135.' },
            { t: 'Mountain visitors spent the most per day, at £92.', why: 'Найбільше витрачали в місті (£135).' },
            { t: 'Countryside visitors spent £94 a day.', why: 'Неправильна цифра: £64.' },
            { t: 'City visitors stayed longest, at 3.2 nights.', why: '3.2 ночі це найкоротший побут, не найдовший.' }] },
        { type: 'read', scene: 'BT', hl: {}, reveal: { a: {}, b: {}, link: 'Body 1 → Body 2' }, q: 'Which **body plan** gives both charts equal space and links them?', bank: ['Body 1 = chart 1', 'Body 2 = chart 2 + a linking sentence'],
          opts: [
            { t: 'Body 1: the bar chart. Body 2: the table, then a sentence that links it to the bar chart.', ok: true, why: 'Plan A: один графік у кожному абзаці й зв’язок у кінці.' },
            { t: 'Body 1: the bar chart in 120 words. Body 2: the table in 20 words.', why: 'Дисбаланс: 80% слів на одному графіку.' },
            { t: 'Body 1: both charts in detail. Body 2: a conclusion with your opinion.', why: 'Немає окремого абзацу для другого графіка, а думка в Task 1 не потрібна.' },
            { t: 'Body 1: only the table. Body 2: only the bar chart, with no link.', why: 'Баланс є, але немає речення-зв’язку.' }] },
        { type: 'read', scene: 'BT', hl: { a: {}, b: {} }, reveal: { a: { s: ['y22'] }, b: { r: [0] }, link: 'taken together' }, q: 'Which **final sentence** is based on both charts and avoids a reason?', bank: ['Taken together, the charts suggest that …', 'do not always have'],
          opts: [
            { t: 'Taken together, the charts suggest that the regions with the most visitors do not always have the longest stays.', ok: true, why: 'Обидва графіки, обережне suggest, жодної причини. Перевірено: місто має найбільше відвідувачів і найкоротший побут.' },
            { t: 'Taken together, the charts prove that cities are better than the coast.', why: '«Prove» і оцінка: графіки лише показують дані.' },
            { t: 'The city has many visitors because cities are exciting.', why: 'Причина, якої немає на графіках.' },
            { t: 'Visitor numbers will keep rising, so stays will become shorter.', why: 'Прогноз: у Task 1 не пишемо про майбутнє.' }] }
      ] }
  ] };
})();
