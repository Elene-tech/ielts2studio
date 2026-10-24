/* Диктант · Bar Charts 1. Дві групи (школи), шість предметів, модель Band 7.
   [[ ... ]] у тексті = множники й розриви (підсвічуються після перевірки).
   Аудіо: audio/bar-1/01.mp3 ... 10.mp3. Якщо файлу немає, читає синтезатор мови. */
window.DICT = {
  id: 'bar-1',
  title: 'Диктант · Bar Charts',
  audioDir: 'audio/bar-1/',
  apxLabel: 'множники й порівняння',
  note: '≈ Діаграма показує один момент часу, тому в моделі <b>немає trend-дієслів</b>: лише порівняння груп і множники (<b>more than twice, twice as much, whereas</b>).',
  links: { theory: '../lesson-deck/index.html?m=bar-charts', studio: '../index.html?t=bar-1' },
  prompt: 'The bar chart below shows the average number of hours per week that students at two schools, Ashford and Brookvale, spent studying six subjects.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  chart: {
    type: 'bar',
    title: 'Weekly study time by subject (hours)',
    yTitle: 'Hours per week', yMax: 8, yStep: 2,
    cats: ['Maths', 'Science', 'English', 'History', 'Languages', 'Art'],
    series: [
      { id: 'ash', name: 'Ashford',   color: '#2C6E8A', data: [8, 5, 4, 2, 3, 1] },
      { id: 'bro', name: 'Brookvale', color: '#E1512E', data: [3, 5, 6, 4, 7, 2] }
    ]
  },
  sections: {
    intro:    { label: 'Introduction', color: '#2C6E8A', bg: '#D6E8F5' },
    overview: { label: 'Overview',     color: '#2C7A5A', bg: '#D6EDE4' },
    body1:    { label: 'Body 1',       color: '#9A7020', bg: '#FFF0CC' },
    body2:    { label: 'Body 2',       color: '#E1512E', bg: '#FDDDD8' }
  },
  sentences: [
    { sec: 'intro',    text: 'The bar chart compares how much time students at Ashford and Brookvale devoted to six school subjects each week.', uk: 'Intro: перефразована умова. compares = «порівнює», devoted … to = «приділяли».', hl: {} },
    { sec: 'overview', text: 'Overall, Ashford students devoted considerably more time to maths, whereas their Brookvale counterparts spent longer on languages and English.', uk: 'Overview: хто в чому лідирує, без цифр. considerably more = «значно більше», whereas = «тоді як», counterparts = «їхні відповідники» (учні іншої школи), longer on = «довше на».', hl: { c: [0, 2, 4] } },
    { sec: 'overview', text: 'However, the two schools were remarkably alike in science, where the time allocated was identical.', uk: 'Overview: контраст зі схожістю. However = «проте», remarkably alike = «напрочуд схожі», the time allocated = «виділений час», identical = «однаковий».', hl: { c: [1] } },
    { sec: 'body1',    text: 'Maths took up the most time in Ashford, at eight hours a week.', uk: 'Body 1: починаємо з найбільшого стовпчика. took up = «займала», at eight hours = «у розмірі восьми годин».', hl: { c: [0], s: ['ash'] } },
    { sec: 'body1',    text: 'This was [[more than two and a half times]] the Brookvale figure of three hours.', uk: 'Множник: 8 ÷ 3 = 2,67, тому more than two and a half times. Не «two times more»!', hl: { c: [0] } },
    { sec: 'body1',    text: 'Science, at five hours, was identical in both schools.', uk: 'Однакові цифри: identical in both schools. Одне коротке речення, без повторення цифри двічі.', hl: { c: [1] } },
    { sec: 'body2',    text: 'In contrast, languages occupied the most time in Brookvale, at seven hours a week, [[more than twice]] the Ashford figure of three.', uk: 'In contrast = «навпаки», відкриває Body 2. occupied the most time = «займали найбільше часу». 7 ÷ 3 = 2,33, тому more than twice.', hl: { c: [4] } },
    { sec: 'body2',    text: 'English also took up [[considerably more]] time there, at six hours compared with four in Ashford.', uk: 'also … there = «також там». considerably more = «значно більше» (6 проти 4, різниця 50%). compared with = «порівняно з».', hl: { c: [2] } },
    { sec: 'body2',    text: 'Similarly, history was allocated four hours in Brookvale, which was exactly [[twice as much]] as in Ashford.', uk: 'Similarly = «так само» (та сама тенденція). was allocated = «було виділено». 4 ÷ 2 = 2, тому exactly twice as much as. Не «two times more»!', hl: { c: [3] } },
    { sec: 'body2',    text: 'Finally, art was the least studied subject in both schools, at just one hour in Ashford and two in Brookvale.', uk: 'Finally = «насамкінець». the least studied = «найменш вивчуваний». just one hour = «лише одна година». Закінчуємо найменшим.', hl: { c: [5] } }
  ]
};
