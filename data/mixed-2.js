/* Пишемо разом · Mixed 2 (line graph + table: два міста). Past simple. Мова: loc = цифри, chg = тренд лінії, kept = порівняння міст і зв’язок. Причини не пишемо. */
window.TASK = {
  id: 'mixed-2',
  kicker: 'Пишемо разом · Mixed · line + table',
  prompt: "The line graph below shows the unemployment rate in two cities, Calder and Merrow, between 2016 and 2022, and the table shows the percentage of workers employed in each sector in 2022.",
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=mixed', dict: 'dictation/index.html?t=mixed-1', place: 'mixed-lab/index.html?t=lab-1' },

  chart: window.MXSC.ST2,

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Графіки',  tip: 'Читаємо два графіки: лінії = безробіття у Calder і Merrow за 2016–2022, таблиця = сектори у 2022. Є роки: past simple.' },
    { n: 2, label: 'Зв’язок',  tip: 'Знаходимо зв’язок: ті самі два міста в обох графіках. Calder має вище безробіття і більший виробничий сектор.' },
    { n: 3, label: 'Intro',    tip: 'Introduction: ОДНЕ речення про ОБИДВА графіки: the … chart compares/illustrates …, while the … shows …' },
    { n: 4, label: 'Overview', tip: 'Overview: по одному реченню про кожен графік. Без цифр. Обидва графіки обов’язково, інакше бал не росте.' },
    { n: 5, label: 'Body 1',   tip: 'Body 1: перший графік: ключові цифри й порівняння, не всі дані.' },
    { n: 6, label: 'Body 2',   tip: 'Body 2: Turning to … : другий графік + речення-зв’язок (Taken together / Meanwhile). Приблизно стільки ж слів, скільки в Body 1.' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: обидва графіки в Overview, речення-зв’язок, баланс слів, нічого про причини.' }
  ],

  beats: [
  {
    "step": 1,
    "cap": "Читаємо два графіки: лінії = безробіття (%) у двох містах за 2016–2022; таблиця = розподіл працівників за секторами у 2022 (%). Є роки, тож past simple.",
    "hl": {
      "a": {
        "legend": true
      },
      "b": {}
    }
  },
  {
    "step": 2,
    "cap": "Графік 1: Calder вище за Merrow у кожному році, обидва мають пік у 2020; різниця зменшується з 3,3 до 0,8 пункта.",
    "hl": {
      "a": {
        "s": [
          "cal",
          "mer"
        ],
        "band": [
          4,
          4
        ]
      }
    }
  },
  {
    "step": 2,
    "cap": "Таблиця: services найбільший сектор в обох містах; manufacturing у Calder 27%, у Merrow 14%. Зв’язок: ті самі два міста в обох графіках.",
    "hl": {
      "a": {
        "s": [
          "cal"
        ]
      },
      "b": {
        "c": [
          0
        ],
        "r": [
          1
        ]
      },
      "link": "Calder"
    }
  },
  {
    "step": 3,
    "sec": "intro",
    "cap": "Introduction: illustrates (лінії) + shows (таблиця). how workers were divided between four sectors = перефраз «workers by sector». Обидва міста названі.",
    "text": "The line graph illustrates how unemployment changed in Calder and Merrow from 2016 to 2022, while the table shows how workers in each city were divided between four sectors in 2022.",
    "hl": {
      "a": {},
      "b": {}
    }
  },
  {
    "step": 4,
    "sec": "overview",
    "cap": "Overview, речення 1 (лінії): higher in Calder than in Merrow throughout = порівняння; the gap narrowed considerably = динаміка різниці.",
    "text": "Overall, unemployment was higher in Calder than in Merrow throughout the period, although the gap narrowed considerably.",
    "hl": {
      "a": {
        "s": [
          "cal",
          "mer"
        ]
      }
    }
  },
  {
    "step": 4,
    "sec": "overview",
    "cap": "Overview, речення 2 (таблиця): services employed most workers in both cities = спільне; manufacturing was far more important in Calder = головна різниця (27% проти 14%).",
    "text": "The table shows that services employed most workers in both cities, but manufacturing was far more important in Calder.",
    "hl": {
      "b": {
        "r": [
          0,
          1
        ]
      }
    }
  },
  {
    "step": 5,
    "sec": "body1",
    "cap": "Body 1, Calder: fell from 8.5% to 6.2% (2016–2019), peaked at 8.8% in 2020, declining to 5.9% in 2022. Три фази в одному реченні.",
    "text": "Calder's rate fell from 8.5% in 2016 to 6.2% in 2019, then peaked at 8.8% in 2020 before declining to 5.9% in 2022.",
    "hl": {
      "a": {
        "s": [
          "cal"
        ],
        "pts": {
          "cal": [
            0,
            3,
            4,
            6
          ]
        }
      }
    }
  },
  {
    "step": 5,
    "sec": "body1",
    "cap": "Merrow: the same pattern at a lower level: 5.2% → 4.5% (2019), peak 6.9%, ending at 5.1%. dropping, peaking, ending = ті самі три фази без повторів.",
    "text": "Merrow's figure followed the same pattern at a lower level, dropping from 5.2% to 4.5% by 2019, peaking at 6.9% and ending at 5.1%.",
    "hl": {
      "a": {
        "s": [
          "mer"
        ],
        "pts": {
          "mer": [
            0,
            3,
            4,
            6
          ]
        }
      }
    }
  },
  {
    "step": 6,
    "sec": "body2",
    "cap": "Body 2: Turning to the table = міст. services: 72% (Merrow) і 58% (Calder); whereas = контраст для manufacturing: 27% проти 14%.",
    "text": "Turning to the table, services accounted for 72% of jobs in Merrow and 58% in Calder, whereas manufacturing employed 27% of Calder's workers compared with 14% in Merrow.",
    "hl": {
      "b": {
        "r": [
          0,
          1
        ]
      }
    }
  },
  {
    "step": 6,
    "sec": "body2",
    "cap": "Речення-зв’язок: Taken together. Calder: вище безробіття в кожному році (графік 1) + більший manufacturing (таблиця). Два факти поруч, без «because».",
    "text": "Taken together, the charts show that Calder, which had higher unemployment in every year, also had the larger manufacturing sector.",
    "hl": {
      "a": {
        "s": [
          "cal"
        ]
      },
      "b": {
        "r": [
          1
        ],
        "c": [
          0
        ]
      },
      "link": "Calder"
    }
  },
  {
    "step": 7,
    "check": true,
    "cap": "Перевіряємо: обидва графіки в Overview, речення-зв’язок, баланс слів, нічого про причини.",
    "hl": {}
  }
],

  lang: {
  "loc": {
    "label": "Цифри з графіків",
    "list": [
      "8.5% in 2016",
      "6.2% in 2019",
      "8.8% in 2020",
      "5.9% in 2022",
      "5.2% to 4.5%",
      "6.9%",
      "5.1%",
      "72%",
      "58%",
      "27%",
      "14%"
    ]
  },
  "chg": {
    "label": "Мова змін",
    "list": [
      "fell from",
      "peaked at",
      "declining to",
      "dropping from",
      "peaking at",
      "ending at",
      "narrowed considerably"
    ]
  },
  "kept": {
    "label": "Зв’язок і порівняння",
    "list": [
      "higher in Calder than in Merrow",
      "whereas",
      "Turning to the table",
      "Taken together",
      "at a lower level"
    ]
  },
  "seq": {
    "label": "Рамка",
    "list": [
      "Overall",
      "throughout the period",
      "in every year"
    ]
  }
},

  linking: ['overall', 'while', 'whereas', 'turning to', 'taken together', 'meanwhile', 'respectively', 'followed by', 'compared with', 'throughout']
};
