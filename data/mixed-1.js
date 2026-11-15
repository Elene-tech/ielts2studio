/* Пишемо разом · Mixed 1 (bar chart + pie chart: онлайн-шопінг). Past simple. Мова: loc = цифри з обох графіків, chg = зміни й частки, kept = зв’язок між графіками. Причини не пишемо. */
window.TASK = {
  id: 'mixed-1',
  kicker: 'Пишемо разом · Mixed · bar + pie',
  prompt: "The bar chart below shows the value of online sales in five product categories in 2015 and 2022, and the pie chart shows the devices used to place online orders in 2022.",
  promptTail: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  minWords: 150,
  links: { theory: 'lesson-deck/index.html?m=mixed', dict: 'dictation/index.html?t=mixed-1', place: 'mixed-lab/index.html?t=lab-1' },

  chart: window.MXSC.ST1,

  sections: [
    { id: 'intro',    label: 'Introduction', color: '#2C6E8A' },
    { id: 'overview', label: 'Overview',     color: '#2C7A5A' },
    { id: 'body1',    label: 'Body 1',       color: '#9A7020' },
    { id: 'body2',    label: 'Body 2',       color: '#E1512E' }
  ],

  steps: [
    { n: 1, label: 'Графіки',  tip: 'Читаємо два графіки: стовпчики = продажі за категоріями у 2015 і 2022, коло = пристрої у 2022. Є роки: past simple.' },
    { n: 2, label: 'Зв’язок',  tip: 'Знаходимо зв’язок: обидва про онлайн-покупки й про 2022. Загальна сума подвоїлась, а більше половини замовлень зроблено зі смартфонів.' },
    { n: 3, label: 'Intro',    tip: 'Introduction: ОДНЕ речення про ОБИДВА графіки: the … chart compares/illustrates …, while the … shows …' },
    { n: 4, label: 'Overview', tip: 'Overview: по одному реченню про кожен графік. Без цифр. Обидва графіки обов’язково, інакше бал не росте.' },
    { n: 5, label: 'Body 1',   tip: 'Body 1: перший графік: ключові цифри й порівняння, не всі дані.' },
    { n: 6, label: 'Body 2',   tip: 'Body 2: Turning to … : другий графік + речення-зв’язок (Taken together / Meanwhile). Приблизно стільки ж слів, скільки в Body 1.' },
    { n: 7, label: 'Перевірка', tip: 'Перевіряємо: обидва графіки в Overview, речення-зв’язок, баланс слів, нічого про причини.' }
  ],

  beats: [
  {
    "step": 1,
    "cap": "Читаємо два графіки: стовпчики = вартість онлайн-продажів у 5 категоріях за 2015 і 2022 (£ млрд); коло = пристрої, якими оформлювали замовлення в 2022. Є роки, тож past simple.",
    "hl": {
      "a": {
        "legend": true
      },
      "b": {}
    }
  },
  {
    "step": 2,
    "cap": "Графік 1: сума в 2015 = 33, у 2022 = 66: загальна вартість подвоїлась. Чотири категорії зросли, книги й медіа впали.",
    "hl": {
      "a": {
        "s": [
          "y15",
          "y22"
        ]
      }
    }
  },
  {
    "step": 2,
    "cap": "Графік 2: смартфон 52% (більше половини), laptop/PC 31%, tablet 12%, other 5%. Зв’язок між графіками: обидва про 2022 і про онлайн-покупки.",
    "hl": {
      "a": {
        "s": [
          "y22"
        ]
      },
      "b": {
        "sl": {
          "dev": "all"
        }
      },
      "link": "2022"
    }
  },
  {
    "step": 3,
    "sec": "intro",
    "cap": "Introduction: ОДНЕ речення про ОБИДВА графіки. compares … while … illustrates = два різні дієслова. which devices people used when ordering = перефраз «devices used to place orders». how much was sold online = перефраз «value of online sales».",
    "text": "The bar chart compares how much was sold online across five types of product in 2015 and again in 2022, while the pie chart illustrates which devices people used when ordering in 2022.",
    "hl": {
      "a": {},
      "b": {}
    }
  },
  {
    "step": 4,
    "sec": "overview",
    "cap": "Overview, речення 1 (графік 1): grew in four of the five categories = тренд без цифр. their total value doubled = головний факт.",
    "text": "Overall, online sales grew in four of the five categories, and their total value doubled over the period.",
    "hl": {
      "a": {
        "s": [
          "y15",
          "y22"
        ],
        "vals": false
      }
    }
  },
  {
    "step": 4,
    "sec": "overview",
    "cap": "Overview, речення 2 (графік 2): the most popular device = лідер без відсотків. used for over half of orders = перефраз «52%», але без цифри.",
    "text": "The pie chart shows that smartphones were the most popular device, used for over half of orders.",
    "hl": {
      "b": {
        "sl": {
          "dev": [
            "ph"
          ]
        }
      }
    }
  },
  {
    "step": 5,
    "sec": "body1",
    "cap": "Body 1, графік 1: лідери 2015: electronics £12 млрд, clothing £9 млрд. By 2022 + past perfect: had risen to £21 і £18 млрд. respectively = у тому ж порядку.",
    "text": "In 2015, electronics led at £12 billion, followed by clothing with £9 billion. By 2022, these two categories had risen to £21 billion and £18 billion respectively.",
    "hl": {
      "a": {
        "c": [
          0,
          1
        ],
        "vals": true
      }
    }
  },
  {
    "step": 5,
    "sec": "body1",
    "cap": "Закриваємо графік 1 найбільшими змінами: groceries ×5 (£3 → £15 млрд) і єдине падіння: books and media (£7 → £4 млрд). whereas = контраст в одному реченні.",
    "text": "The biggest change was in groceries, which grew five-fold, from £3 billion to £15 billion, whereas books and media were the only category to fall, from £7 billion to £4 billion.",
    "hl": {
      "a": {
        "c": [
          2,
          3
        ],
        "vals": true
      }
    }
  },
  {
    "step": 6,
    "sec": "body2",
    "cap": "Body 2: Turning to the pie chart = міст до другого графіка. Мова часток: accounted for, followed by, made up. Не пишемо trend-дієслова (rose/fell) для кола.",
    "text": "Turning to the pie chart, smartphones accounted for 52% of online orders in 2022, followed by laptops and PCs with 31%, while tablets made up 12% and other devices just 5%.",
    "hl": {
      "b": {
        "sl": {
          "dev": "all"
        }
      }
    }
  },
  {
    "step": 6,
    "sec": "body2",
    "cap": "Речення-зв’язок: Taken together = синтез. doubled in value (графік 1) + more than half of orders came from smartphones (графік 2). Без причин: не «because».",
    "text": "Taken together, the charts show that online sales doubled in value by 2022, and that more than half of orders came from smartphones.",
    "hl": {
      "a": {
        "s": [
          "y22"
        ]
      },
      "b": {
        "sl": {
          "dev": [
            "ph"
          ]
        }
      },
      "link": "doubled + over half"
    }
  },
  {
    "step": 7,
    "check": true,
    "cap": "Перевіряємо: обидва графіки в Overview, речення-зв’язок є, Body 1 і Body 2 приблизно рівні, нічого про причини.",
    "hl": {}
  }
],

  lang: {
  "loc": {
    "label": "Цифри з графіків",
    "list": [
      "£12 billion",
      "£9 billion",
      "£21 billion",
      "£18 billion",
      "from £3 billion to £15 billion",
      "from £7 billion to £4 billion",
      "52%",
      "31%",
      "12%",
      "5%"
    ]
  },
  "chg": {
    "label": "Мова змін і часток",
    "list": [
      "grew in four of the five categories",
      "doubled",
      "had risen to",
      "grew five-fold",
      "accounted for",
      "followed by",
      "made up"
    ]
  },
  "kept": {
    "label": "Зв’язок між графіками",
    "list": [
      "while",
      "whereas",
      "Turning to the pie chart",
      "Taken together",
      "respectively"
    ]
  },
  "seq": {
    "label": "Рамка",
    "list": [
      "Overall",
      "In 2015",
      "By 2022"
    ]
  }
},

  linking: ['overall', 'while', 'whereas', 'turning to', 'taken together', 'meanwhile', 'respectively', 'followed by', 'compared with', 'throughout']
};
