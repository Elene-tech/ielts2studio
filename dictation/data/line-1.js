/* Диктант · Line Graph 1. Оригінальний графік (три лінії) і модель Band 7.
   Зроблено для студентів: графік видно як завдання, речення начитуються по одному.
   [[ ... ]] у тексті = мова наближення (підсвічується після перевірки).
   audio: покладіть mp3 у папку audio/ (01.mp3, 02.mp3 ...). Якщо файлу немає, читає синтезатор мови. */
window.DICT = {
  id: 'line-1',
  title: 'Диктант · Line Graph',
  prompt: 'The graph below shows the average number of passengers who used three types of transport in one city each day between 2000 and 2020.',
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  chart: {
    title: 'Daily passengers by type of transport',
    yTitle: 'Passengers per day (thousands)', xTitle: 'Year', yMax: 100, yStep: 20,
    xLabels: ['2000', '2005', '2010', '2015', '2020'],
    series: [
      { id: 'bus',   name: 'Bus',     color: '#E58A1F', marker: 'triangle', data: [80, 74, 62, 50, 41] },
      { id: 'metro', name: 'Metro',   color: '#3a5fcd', marker: 'circle',   data: [52, 58, 66, 78, 90] },
      { id: 'bike',  name: 'Bicycle', color: '#2E9B5F', marker: 'square',   data: [8, 8, 12, 24, 27] }
    ]
  },
  sections: {
    intro:    { label: 'Introduction', color: '#2C6E8A', bg: '#D6E8F5' },
    overview: { label: 'Overview',     color: '#2C7A5A', bg: '#D6EDE4' },
    body1:    { label: 'Body 1',       color: '#9A7020', bg: '#FFF0CC' },
    body2:    { label: 'Body 2',       color: '#E1512E', bg: '#FDDDD8' }
  },
  sentences: [
    { sec: 'intro',    text: 'The line graph compares how many people used three types of transport in one city every day between 2000 and 2020.', hl: {} },
    { sec: 'overview', text: 'Overall, bus travel declined steadily, whereas the metro and cycling both became far more popular.', hl: { s: ['bus', 'metro', 'bike'] } },
    { sec: 'overview', text: 'By 2020, the metro had become the most widely used option, having started well behind the bus.', hl: { s: ['metro', 'bus'] } },
    { sec: 'body1',    text: 'At the start of the period, the bus was by far the most popular choice, carrying [[roughly 80,000]] passengers a day.', hl: { s: ['bus'] } },
    { sec: 'body1',    text: 'Its use then fell gradually, dropping to [[around 62,000]] by 2010 and to [[just over 40,000]] in 2020.', hl: { s: ['bus'] } },
    { sec: 'body1',    text: 'The metro, by contrast, started at [[just over 50,000]] passengers and overtook the bus [[around 2009]], when both stood at [[roughly 64,000]].', hl: { s: ['metro', 'bus'] } },
    { sec: 'body1',    text: 'It went on to reach [[approximately 90,000]] in 2020, more than twice the figure for the bus.', hl: { s: ['metro', 'bus'] } },
    { sec: 'body2',    text: 'Cycling, meanwhile, remained a minority choice, hovering at [[around 8,000]] until 2005.', hl: { s: ['bike'] } },
    { sec: 'body2',    text: 'It then climbed sharply, doubling to [[roughly 24,000]] between 2010 and 2015.', hl: { s: ['bike'] } },
    { sec: 'body2',    text: 'Even so, cycling levelled off at [[just over 25,000]], which made it the least popular option throughout the period.', hl: { s: ['bike'] } }
  ]
};
