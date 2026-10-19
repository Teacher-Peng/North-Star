const lessons = Object.freeze([
  {
    "id": "charts",
    "unit": 1,
    "concept": "折線圖",
    "title": "把每天的變化連起來",
    "icon": "↗",
    "color": "teal",
    "description": "讀懂資料、比較增減，也學會挑選圖表。",
    "goal": "我能讀折線圖，算出兩個時間點的變化量。",
    "explanation": "折線圖用橫軸表示時間，縱軸表示數量。每個點是一筆資料，連線讓我們看見上升、下降或不變。",
    "example": "週一 20 本、週二 25 本：增加 25 − 20 = 5 本。",
    "notes": [
      [
        "讀圖三步驟",
        "先看標題和單位，再找橫軸時間，最後沿著點讀縱軸數值。"
      ],
      [
        "比較兩組資料",
        "圖例用顏色區分資料。比較同一天時，要看同一個橫軸位置。"
      ],
      [
        "畫折線圖",
        "用相等間距標示時間與刻度，依資料描點，再按時間順序連線。"
      ]
    ],
    "introDiagram": {
      "kind": "chart",
      "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
      "labels": [
        "週一",
        "週二",
        "週三",
        "週四"
      ],
      "values": [
        20,
        25,
        15,
        30
      ],
      "unit": "本",
      "step": 5
    },
    "questions": [
      {
        "type": "number",
        "prompt": "週二借出幾本書？",
        "answer": "25",
        "unit": "本",
        "hint": "找週二上方的點，再讀縱軸。",
        "explain": "週二的點對應25本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            20,
            25,
            15,
            30
          ],
          "unit": "本",
          "step": 5
        },
        "id": "charts-1"
      },
      {
        "type": "number",
        "prompt": "週三到週四增加幾本？",
        "answer": "15",
        "unit": "本",
        "hint": "用週四的數量減掉週三。",
        "explain": "30−15＝15本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            20,
            25,
            15,
            30
          ],
          "unit": "本",
          "step": 5
        },
        "id": "charts-2"
      },
      {
        "type": "steps",
        "prompt": "週一和週二共借出幾本？先讀圖再相加。",
        "fields": [
          {
            "label": "週一",
            "answer": "20",
            "unit": "本"
          },
          {
            "label": "兩天合計",
            "answer": "45",
            "unit": "本"
          }
        ],
        "hint": "週一20本，週二25本。",
        "explain": "20＋25＝45本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            20,
            25,
            15,
            30
          ],
          "unit": "本",
          "step": 5
        },
        "id": "charts-3"
      },
      {
        "type": "choice",
        "prompt": "哪一段時間的借閱量下降？",
        "choices": [
          "週一到週二",
          "週二到週三",
          "週三到週四"
        ],
        "answer": "週二到週三",
        "hint": "看哪一段線往下走。",
        "explain": "25本下降到15本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            20,
            25,
            15,
            30
          ],
          "unit": "本",
          "step": 5
        },
        "id": "charts-4"
      },
      {
        "type": "error",
        "prompt": "小明把縱軸每格5本看成1本，說週二是5本。正確是多少？",
        "answer": "25",
        "unit": "本",
        "hint": "格數還要乘每格代表的量。",
        "explain": "5格×每格5本＝25本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            20,
            25,
            15,
            30
          ],
          "unit": "本",
          "step": 5
        },
        "work": "週二在第5格，所以是5本。",
        "id": "charts-5"
      },
      {
        "type": "number",
        "prompt": "四天中最多與最少相差幾本？",
        "answer": "15",
        "unit": "本",
        "hint": "先找最高點與最低點。",
        "explain": "30−15＝15本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            20,
            25,
            15,
            30
          ],
          "unit": "本",
          "step": 5
        },
        "id": "charts-6"
      },
      {
        "type": "choice",
        "prompt": "想看一週每天氣溫的變化，哪種圖最適合？",
        "choices": [
          "折線圖",
          "圓餅圖",
          "只有一個總數"
        ],
        "answer": "折線圖",
        "hint": "需要依時間順序看增減。",
        "explain": "折線圖適合呈現隨時間變化的資料。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            20,
            25,
            15,
            30
          ],
          "unit": "本",
          "step": 5
        },
        "id": "charts-7"
      },
      {
        "type": "steps",
        "prompt": "四天合計與平均每天借閱量各是多少？",
        "fields": [
          {
            "label": "合計",
            "answer": "90",
            "unit": "本"
          },
          {
            "label": "平均",
            "answer": "22.5",
            "unit": "本"
          }
        ],
        "hint": "先把20、25、15、30相加，再除以4。",
        "explain": "合計90本，平均90÷4＝22.5本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角借閱量：週一20本、週二25本、週三15本、週四30本。縱軸每格5本。",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            20,
            25,
            15,
            30
          ],
          "unit": "本",
          "step": 5
        },
        "id": "charts-8"
      }
    ],
    "duration": 15,
    "revision": 2
  },
  {
    "id": "factors",
    "title": "整齊分組，找出數的關係",
    "concept": "因數和倍數",
    "description": "用排積木的方法，發現因數的祕密。",
    "icon": "▦",
    "color": "orange",
    "duration": 15,
    "goal": "我能找因數、倍數、公因數與公倍數。",
    "explanation": "把 12 個小方塊排成完整的長方形，每一排都要一樣多。如果剛好排完、沒有剩下，每排的個數就是 12 的因數。",
    "example": "12 = 1 × 12 = 2 × 6 = 3 × 4\n所以 12 的因數是 1、2、3、4、6、12。",
    "visual": "factors",
    "questions": [
      {
        "prompt": "哪一個數是 18 的因數？",
        "choices": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": "6",
        "hint": "試試看用 18 除以每個選項，哪一個沒有餘數？",
        "explain": "18 ÷ 6 = 3，沒有餘數，所以 6 是 18 的因數。",
        "diagram": {
          "kind": "groups",
          "total": 18,
          "cols": 4,
          "solutionCols": 6,
          "description": "哪一個數是 18 的因數？"
        },
        "type": "choice",
        "id": "factors-1"
      },
      {
        "prompt": "20 的因數共有幾個？",
        "answer": "6",
        "hint": "成對找找看：1 × 20、2 × 10，還有哪一對？",
        "explain": "20 = 1 × 20 = 2 × 10 = 4 × 5。因數是 1、2、4、5、10、20，共 6 個。",
        "diagram": {
          "kind": "groups",
          "total": 20,
          "cols": 3,
          "solutionCols": 4,
          "description": "20 的因數共有幾個？"
        },
        "type": "number",
        "unit": "個",
        "id": "factors-2"
      },
      {
        "prompt": "有 24 顆珠子，每串要一樣多且沒有剩下。每串可以有幾顆？",
        "answer": "8 顆",
        "hint": "把「每串的顆數 × 串數 = 24」想成一個乘法問題。",
        "explain": "8 × 3 = 24，所以每串 8 顆，可以串成 3 串。",
        "diagram": {
          "kind": "groups",
          "total": 24,
          "cols": 5,
          "solutionCols": 8,
          "description": "有 24 顆珠子，每串要一樣多且沒有剩下。每串可以有幾顆？"
        },
        "type": "choice",
        "unit": "",
        "id": "factors-3",
        "choices": [
          "5 顆",
          "7 顆",
          "8 顆",
          "9 顆"
        ]
      },
      {
        "prompt": "15 顆糖果，每袋裝 3 顆，可以剛好裝成幾袋？",
        "choices": [
          "3 袋",
          "4 袋",
          "5 袋",
          "6 袋"
        ],
        "answer": "5 袋",
        "hint": "把 15 個圓點，每 3 個圈成一組。",
        "explain": "15 ÷ 3 = 5，剛好裝成 5 袋。",
        "diagram": {
          "kind": "groups",
          "total": 15,
          "cols": 3,
          "solutionCols": 3,
          "description": "15 顆糖果，每袋裝 3 顆，可以剛好裝成幾袋？"
        },
        "type": "choice",
        "id": "factors-4"
      },
      {
        "prompt": "16 的因數共有幾個？",
        "answer": "5",
        "hint": "成對找：1 × 16、2 × 8，再找找正方形的排法。",
        "explain": "因數是 1、2、4、8、16，共 5 個。4 × 4 中的 4 只算一次。",
        "diagram": {
          "kind": "groups",
          "total": 16,
          "cols": 3,
          "solutionCols": 4,
          "description": "16 的因數共有幾個？"
        },
        "type": "number",
        "unit": "個",
        "id": "factors-5"
      },
      {
        "prompt": "哪一個數不是 12 的因數？",
        "answer": "5",
        "hint": "留意最後一排有沒有排滿。",
        "explain": "12 ÷ 5 = 2 餘 2，不能整除，所以 5 不是 12 的因數。",
        "diagram": {
          "kind": "groups",
          "total": 12,
          "cols": 5,
          "solutionCols": 5,
          "description": "哪一個數不是 12 的因數？"
        },
        "type": "choice",
        "unit": "",
        "id": "factors-6",
        "choices": [
          "2",
          "3",
          "5",
          "6"
        ]
      },
      {
        "prompt": "30 顆珠子，每串 6 顆，可以剛好串成幾串？",
        "choices": [
          "4 串",
          "5 串",
          "6 串",
          "7 串"
        ],
        "answer": "5 串",
        "hint": "每排放 6 顆，數數看排了幾排。",
        "explain": "30 ÷ 6 = 5，所以可以串成 5 串。",
        "diagram": {
          "kind": "groups",
          "total": 30,
          "cols": 6,
          "solutionCols": 6,
          "description": "30 顆珠子，每串 6 顆，可以剛好串成幾串？"
        },
        "type": "choice",
        "id": "factors-7"
      },
      {
        "prompt": "哪一個數是 28 的因數？",
        "answer": "7",
        "hint": "試著把每排個數調成選項，看看哪個排得剛好。",
        "explain": "28 = 7 × 4，所以 7 是 28 的因數。",
        "diagram": {
          "kind": "groups",
          "total": 28,
          "cols": 5,
          "solutionCols": 7,
          "description": "哪一個數是 28 的因數？"
        },
        "type": "choice",
        "unit": "",
        "id": "factors-8",
        "choices": [
          "3",
          "5",
          "7",
          "9"
        ]
      },
      {
        "prompt": "18 顆珠子，每串 4 顆，最多做成幾串完整的手鍊？",
        "answer": "4",
        "hint": "最後不滿 4 顆的一排，不能算成一串完整的手鍊。",
        "explain": "18 ÷ 4 = 4 餘 2，所以能做 4 串，剩下 2 顆。",
        "diagram": {
          "kind": "groups",
          "total": 18,
          "cols": 4,
          "solutionCols": 4,
          "description": "18 顆珠子，每串 4 顆，最多做成幾串完整的手鍊？"
        },
        "type": "number",
        "unit": "串",
        "id": "factors-9"
      },
      {
        "prompt": "哪一組完整列出了 10 的所有因數？",
        "choices": [
          "1、2、5、10",
          "2、5、10",
          "1、2、3、5、10",
          "1、5、10"
        ],
        "answer": "1、2、5、10",
        "hint": "從 1 × 10 開始，再找另一組乘積是 10 的數。",
        "explain": "10 = 1 × 10 = 2 × 5，所以所有因數是 1、2、5、10。",
        "diagram": {
          "kind": "groups",
          "total": 10,
          "cols": 3,
          "solutionCols": 5,
          "description": "哪一組完整列出了 10 的所有因數？"
        },
        "type": "choice",
        "id": "factors-10"
      },
      {
        "type": "number",
        "prompt": "18和24的最大公因數是多少？",
        "answer": "6",
        "unit": "",
        "hint": "列出兩個數的因數，找共同且最大的。",
        "explain": "共同因數有1、2、3、6，最大是6。",
        "diagram": {
          "kind": "cards",
          "description": "比較18與24的因數。",
          "items": [
            "18",
            "24"
          ]
        },
        "id": "factors-11"
      },
      {
        "type": "number",
        "prompt": "4和6的最小公倍數是多少？",
        "answer": "12",
        "unit": "",
        "hint": "列出4與6的正倍數。",
        "explain": "4的倍數4、8、12；6的倍數6、12，最小公倍數是12。",
        "diagram": {
          "kind": "cards",
          "description": "比較4與6的倍數。",
          "items": [
            "4、8、12…",
            "6、12、18…"
          ]
        },
        "id": "factors-12"
      },
      {
        "type": "steps",
        "prompt": "24個積木，每排6個。",
        "fields": [
          {
            "label": "可以排幾排",
            "answer": "4",
            "unit": "排"
          },
          {
            "label": "剩下幾個",
            "answer": "0",
            "unit": "個"
          }
        ],
        "hint": "用24÷6。",
        "explain": "24÷6＝4，餘數0。",
        "diagram": {
          "kind": "groups",
          "description": "24個圓點，每排6個。",
          "total": 24,
          "cols": 6,
          "solutionCols": 6
        },
        "id": "factors-13"
      },
      {
        "type": "error",
        "prompt": "小明說「5是18的因數」。算出18÷5的餘數，檢查他的說法。",
        "answer": "3",
        "unit": "",
        "hint": "因數必須整除，不能有餘數。",
        "explain": "18÷5＝3餘3，所以5不是18的因數。",
        "diagram": {
          "kind": "cards",
          "description": "18個物品，每組5個。",
          "items": [
            "18 ÷ 5",
            "有沒有剩下？"
          ]
        },
        "work": "18÷5＝3，所以5是18的因數。",
        "id": "factors-14"
      }
    ],
    "unit": 2,
    "notes": [
      [
        "因數與整除",
        "24÷6沒有餘數，6就是24的因數；24也是6的倍數。"
      ],
      [
        "公因數與最大公因數",
        "同時能整除兩個數的數叫公因數，其中最大的叫最大公因數。"
      ],
      [
        "公倍數與最小公倍數",
        "把兩個數的倍數列出來，找相同的數；最小的正公倍數叫最小公倍數。"
      ]
    ],
    "introDiagram": {
      "kind": "groups",
      "description": "12個圓點，每排3個，共4排，沒有剩下。",
      "total": 12,
      "cols": 3,
      "solutionCols": 3
    },
    "revision": 2
  },
  {
    "id": "angles",
    "title": "看懂邊和角，找出圖形規律",
    "concept": "多邊形",
    "description": "跟上現在的課程！看圖找線索，一步一步算出未知角。",
    "icon": "∠",
    "color": "purple",
    "duration": 45,
    "goal": "我能辨認多邊形，檢查三角形邊長，利用內角和求未知角。",
    "explanation": "三角形裡面的三個角，合起來一定是 180°，就像一條直線形成的平角。知道其中兩個角，就能用 180° 減掉它們，找到第三個角。",
    "example": "已知兩個角是 50° 和 60°\n第三個角 = 180° − 50° − 60° = 70°",
    "visual": "angles",
    "questions": [
      {
        "prompt": "圖中兩個角是 50° 和 60°，神祕角是多少？",
        "choices": [
          "60°",
          "70°",
          "80°",
          "90°"
        ],
        "answer": "70°",
        "hint": "先把已知的兩個角相加，再從 180° 扣掉。",
        "explain": "50° + 60° = 110°；180° − 110° = 70°。",
        "diagram": {
          "kind": "angles",
          "values": [
            50,
            60,
            70
          ],
          "unknown": 2,
          "isosceles": false,
          "equilateral": false,
          "description": "圖中兩個角是 50° 和 60°，神祕角是多少？"
        },
        "stage": "找第三個角",
        "type": "choice",
        "id": "angles-1"
      },
      {
        "prompt": "兩個內角是 40° 和 80°，剩下的角是多少？",
        "answer": "60",
        "hint": "三個內角合起來是 180°。",
        "explain": "40° + 80° = 120°；180° − 120° = 60°。",
        "diagram": {
          "kind": "angles",
          "values": [
            40,
            80,
            60
          ],
          "unknown": 2,
          "isosceles": false,
          "equilateral": false,
          "description": "兩個內角是 40° 和 80°，剩下的角是多少？"
        },
        "stage": "找第三個角",
        "type": "number",
        "unit": "度",
        "id": "angles-2"
      },
      {
        "prompt": "這個直角三角形有一個角是 35°，另一個銳角是多少？",
        "answer": "55",
        "hint": "小方框代表 90°。另外兩個角合起來是 90°。",
        "explain": "180° − 90° − 35° = 55°。",
        "diagram": {
          "kind": "angles",
          "values": [
            90,
            35,
            55
          ],
          "unknown": 2,
          "isosceles": false,
          "equilateral": false,
          "description": "這個直角三角形有一個角是 35°，另一個銳角是多少？"
        },
        "stage": "直角三角形",
        "type": "number",
        "unit": "度",
        "id": "angles-3"
      },
      {
        "prompt": "兩個內角分別是 25° 和 45°，未知角是多少？",
        "choices": [
          "70°",
          "90°",
          "100°",
          "110°"
        ],
        "answer": "110°",
        "hint": "未知角可以比 90° 大。先算已知角的總和。",
        "explain": "25° + 45° = 70°；180° − 70° = 110°，這是一個鈍角。",
        "diagram": {
          "kind": "angles",
          "values": [
            25,
            45,
            110
          ],
          "unknown": 2,
          "isosceles": false,
          "equilateral": false,
          "description": "兩個內角分別是 25° 和 45°，未知角是多少？"
        },
        "stage": "辨認鈍角",
        "type": "choice",
        "id": "angles-4"
      },
      {
        "prompt": "等腰三角形的頂角是 40°，每一個底角是多少？",
        "answer": "70",
        "hint": "兩條同樣長的邊，對面的兩個底角也相等。扣掉頂角後，平均分成兩份。",
        "explain": "180° − 40° = 140°；140° ÷ 2 = 70°。",
        "diagram": {
          "kind": "angles",
          "values": [
            70,
            70,
            40
          ],
          "unknown": 0,
          "isosceles": true,
          "equilateral": false,
          "description": "等腰三角形的頂角是 40°，每一個底角是多少？"
        },
        "stage": "等腰三角形",
        "type": "number",
        "unit": "度",
        "id": "angles-5"
      },
      {
        "prompt": "等腰三角形的一個底角是 50°，頂角是多少？",
        "answer": "80",
        "hint": "另一個底角也等於 50°。",
        "explain": "180° − 50° − 50° = 80°。",
        "diagram": {
          "kind": "angles",
          "values": [
            50,
            50,
            80
          ],
          "unknown": 2,
          "isosceles": true,
          "equilateral": false,
          "description": "等腰三角形的一個底角是 50°，頂角是多少？"
        },
        "stage": "等腰三角形",
        "type": "number",
        "unit": "度",
        "id": "angles-6"
      },
      {
        "prompt": "正三角形的三個角相等，每一個角是多少？",
        "choices": [
          "45°",
          "60°",
          "90°",
          "180°"
        ],
        "answer": "60°",
        "hint": "把 180° 平均分給三個角。",
        "explain": "180° ÷ 3 = 60°。",
        "diagram": {
          "kind": "angles",
          "values": [
            60,
            60,
            60
          ],
          "unknown": 2,
          "isosceles": false,
          "equilateral": true,
          "description": "正三角形的三個角相等，每一個角是多少？"
        },
        "stage": "正三角形",
        "type": "choice",
        "id": "angles-7"
      },
      {
        "prompt": "兩個角是 65° 和 55°，神祕角是多少？",
        "answer": "60",
        "hint": "先算 65° + 55°。",
        "explain": "65° + 55° = 120°；180° − 120° = 60°。",
        "diagram": {
          "kind": "angles",
          "values": [
            65,
            55,
            60
          ],
          "unknown": 2,
          "isosceles": false,
          "equilateral": false,
          "description": "兩個角是 65° 和 55°，神祕角是多少？"
        },
        "stage": "混合練習",
        "type": "number",
        "unit": "度",
        "id": "angles-8"
      },
      {
        "prompt": "等腰直角三角形的兩個銳角相等，每個銳角是多少？",
        "answer": "45",
        "hint": "扣掉 90° 後，剩下的角度平均分成兩份。",
        "explain": "(180° − 90°) ÷ 2 = 45°。",
        "diagram": {
          "kind": "angles",
          "values": [
            45,
            45,
            90
          ],
          "unknown": 0,
          "isosceles": true,
          "equilateral": false,
          "description": "等腰直角三角形的兩個銳角相等，每個銳角是多少？"
        },
        "stage": "等腰直角三角形",
        "type": "number",
        "unit": "度",
        "id": "angles-9"
      },
      {
        "prompt": "三角形的一個角是 100°，另一個是 30°，最後一個角是多少？",
        "choices": [
          "30°",
          "40°",
          "50°",
          "60°"
        ],
        "answer": "50°",
        "hint": "即使有一個鈍角，三個內角的總和仍是 180°。",
        "explain": "180° − 100° − 30° = 50°。",
        "diagram": {
          "kind": "angles",
          "values": [
            100,
            30,
            50
          ],
          "unknown": 2,
          "isosceles": false,
          "equilateral": false,
          "description": "三角形的一個角是 100°，另一個是 30°，最後一個角是多少？"
        },
        "stage": "生活挑戰",
        "type": "choice",
        "id": "angles-10"
      },
      {
        "type": "number",
        "prompt": "四邊形的三個內角是80°、90°、100°，第四個角是多少？",
        "answer": "90",
        "unit": "度",
        "hint": "四邊形內角和是360°。",
        "explain": "360−80−90−100＝90°。",
        "diagram": {
          "kind": "cards",
          "description": "四邊形四個角依序標記80°、90°、100°和問號。",
          "items": [
            "80°",
            "90°",
            "100°",
            "?"
          ]
        },
        "id": "angles-11"
      },
      {
        "type": "choice",
        "prompt": "哪組邊長可以圍成三角形？",
        "choices": [
          "2、3、6公分",
          "3、4、5公分",
          "2、3、5公分"
        ],
        "answer": "3、4、5公分",
        "hint": "最短兩邊相加，必須大於最長邊。",
        "explain": "3＋4＞5；另兩組的短邊和不大於最長邊。",
        "diagram": {
          "kind": "cards",
          "description": "比較三組線段長度。",
          "items": [
            "2、3、6",
            "3、4、5",
            "2、3、5"
          ]
        },
        "id": "angles-12"
      },
      {
        "type": "steps",
        "prompt": "正三角形每個內角都相等。",
        "fields": [
          {
            "label": "三個內角合計",
            "answer": "180",
            "unit": "度"
          },
          {
            "label": "每個內角",
            "answer": "60",
            "unit": "度"
          }
        ],
        "hint": "把180平均分成3份。",
        "explain": "180÷3＝60°。",
        "diagram": {
          "kind": "angles",
          "description": "三條邊有相同記號，三個內角均標問號。",
          "values": [
            60,
            60,
            60
          ],
          "unknown": 0,
          "equilateral": true
        },
        "id": "angles-13"
      },
      {
        "type": "error",
        "prompt": "小明說三角形已知50°和60°，第三角是110°。改成正確答案。",
        "answer": "70",
        "unit": "度",
        "hint": "110是兩個已知角的合計。",
        "explain": "還要用180−110＝70°。",
        "diagram": {
          "kind": "angles",
          "description": "左下50°、右下60°、頂角問號。",
          "values": [
            50,
            60,
            70
          ],
          "unknown": 2
        },
        "work": "50＋60＝110，所以第三角是110°。",
        "id": "angles-14"
      },
      {
        "type": "number",
        "prompt": "圖中的多邊形有幾條邊？",
        "answer": "5",
        "hint": "沿著外框走一圈，每條直線段只數一次。",
        "explain": "外框共有5條邊，所以是五邊形。",
        "diagram": {
          "kind": "polygon",
          "sides": 5,
          "diagonals": false,
          "description": "5條直線段首尾相接圍成圖形。圖形大小與方向不影響邊數。"
        },
        "unit": "條",
        "id": "angles-15"
      },
      {
        "type": "number",
        "prompt": "圖中的六邊形有幾個頂點？",
        "answer": "6",
        "hint": "兩條相鄰邊相接的地方就是頂點。",
        "explain": "六邊形有6條邊，也有6個頂點。",
        "diagram": {
          "kind": "polygon",
          "sides": 6,
          "diagonals": false,
          "description": "6條直線段首尾相接圍成圖形。圖形大小與方向不影響邊數。"
        },
        "unit": "個",
        "id": "angles-16"
      },
      {
        "type": "choice",
        "prompt": "哪一個條件足以判斷圖形是正多邊形？",
        "choices": [
          "每條邊等長，且每個內角相等",
          "只有每條邊等長",
          "只有每個內角相等"
        ],
        "answer": "每條邊等長，且每個內角相等",
        "hint": "「正」多邊形同時要求邊與角。",
        "explain": "正多邊形必須等邊且等角；只有其中一個條件還不夠。",
        "diagram": {
          "kind": "polygon",
          "sides": 5,
          "diagonals": false,
          "description": "5條直線段首尾相接圍成圖形。圖形大小與方向不影響邊數。"
        },
        "id": "angles-17"
      },
      {
        "type": "choice",
        "prompt": "長6公分、寬3公分的長方形，是正多邊形嗎？",
        "choices": [
          "是，四個角相等就可以",
          "不是，四條邊並非全等長"
        ],
        "answer": "不是，四條邊並非全等長",
        "hint": "檢查邊長與內角兩個條件。",
        "explain": "四個角都是直角，但6公分與3公分不相等，所以不是正多邊形。",
        "diagram": {
          "kind": "cards",
          "items": [
            "長方形",
            "長 6 公分",
            "寬 3 公分",
            "四個角都是直角"
          ],
          "description": "長方形；長 6 公分；寬 3 公分；四個角都是直角"
        },
        "id": "angles-18"
      },
      {
        "type": "choice",
        "prompt": "三根棒子長2、3、5公分，能圍成三角形嗎？",
        "choices": [
          "能",
          "不能"
        ],
        "answer": "不能",
        "hint": "較短兩邊的和，必須大於最長邊。",
        "explain": "2＋3＝5，等於最長邊，只會攤平，不能圍成三角形。",
        "diagram": {
          "kind": "cards",
          "items": [
            "2 公分",
            "3 公分",
            "5 公分"
          ],
          "description": "2 公分；3 公分；5 公分"
        },
        "id": "angles-19"
      },
      {
        "type": "choice",
        "prompt": "兩邊長4、7公分，第三邊選哪個長度才能圍成三角形？",
        "choices": [
          "3公分",
          "8公分",
          "11公分",
          "12公分"
        ],
        "answer": "8公分",
        "hint": "把每個選項當第三邊，檢查任意兩邊和是否大於另一邊。",
        "explain": "4＋7＞8、4＋8＞7、7＋8＞4；3和11會攤平，12太長。",
        "diagram": {
          "kind": "cards",
          "items": [
            "已知邊長 4 公分",
            "已知邊長 7 公分",
            "第三邊？"
          ],
          "description": "已知邊長 4 公分；已知邊長 7 公分；第三邊？"
        },
        "id": "angles-20"
      },
      {
        "type": "error",
        "prompt": "小明說3、4、8公分能圍成三角形。他漏算的較短兩邊合計是多少？",
        "answer": "7",
        "hint": "還要檢查3＋4是否大於8。",
        "explain": "3＋4＝7，小於8，不能圍成；不能只檢查其中一組。",
        "diagram": {
          "kind": "cards",
          "items": [
            "3 公分",
            "4 公分",
            "8 公分"
          ],
          "description": "3 公分；4 公分；8 公分"
        },
        "unit": "公分",
        "work": "只檢查4＋8＞3，所以能圍成。",
        "id": "angles-21"
      },
      {
        "type": "choice",
        "prompt": "直角三角形的另外兩個內角合計是多少？",
        "choices": [
          "45°",
          "90°",
          "180°"
        ],
        "answer": "90°",
        "hint": "先從內角和扣掉直角。",
        "explain": "180°−90°＝90°。",
        "diagram": {
          "kind": "angles",
          "values": [
            30,
            60,
            90
          ],
          "unknown": 0
        },
        "id": "angles-22"
      },
      {
        "type": "number",
        "prompt": "兩個角是48°和67°，第三個角是多少？",
        "answer": "65",
        "hint": "先加已知角，再用180°減掉它們。",
        "explain": "48＋67＝115；180−115＝65°。",
        "diagram": {
          "kind": "angles",
          "values": [
            48,
            67,
            65
          ],
          "unknown": 2
        },
        "unit": "度",
        "id": "angles-23"
      },
      {
        "type": "steps",
        "prompt": "三角形兩個角是72°和38°，分兩步求第三個角。",
        "fields": [
          {
            "label": "已知兩角合計",
            "answer": "110",
            "unit": "度"
          },
          {
            "label": "第三個角",
            "answer": "70",
            "unit": "度"
          }
        ],
        "hint": "先求72＋38，再求180減掉這個和。",
        "explain": "72＋38＝110；180−110＝70°。",
        "diagram": {
          "kind": "angles",
          "values": [
            72,
            38,
            70
          ],
          "unknown": 2
        },
        "id": "angles-24"
      },
      {
        "type": "choice",
        "prompt": "三角形可以有兩個直角嗎？",
        "choices": [
          "可以",
          "不可以"
        ],
        "answer": "不可以",
        "hint": "兩個直角相加後，還能留下第三個角嗎？",
        "explain": "90＋90＝180，第三個角將是0°，無法形成三角形。",
        "diagram": {
          "kind": "cards",
          "items": [
            "直角 90°",
            "直角 90°",
            "第三角必須大於 0°"
          ],
          "description": "直角 90°；直角 90°；第三角必須大於 0°"
        },
        "id": "angles-25"
      },
      {
        "type": "choice",
        "prompt": "某三角形的角是30°、40°、110°，按角來分是哪一種？",
        "choices": [
          "銳角三角形",
          "直角三角形",
          "鈍角三角形"
        ],
        "answer": "鈍角三角形",
        "hint": "看最大的角與90°相比如何。",
        "explain": "110°大於90°，所以是鈍角三角形。",
        "diagram": {
          "kind": "angles",
          "values": [
            30,
            40,
            110
          ],
          "unknown": null
        },
        "id": "angles-26"
      },
      {
        "type": "number",
        "prompt": "等腰三角形的頂角是100°，每個底角是多少？",
        "answer": "40",
        "hint": "先扣掉頂角，再把剩餘角度平分。",
        "explain": "(180−100)÷2＝40°。",
        "diagram": {
          "kind": "angles",
          "values": [
            40,
            40,
            100
          ],
          "unknown": 0,
          "isosceles": true
        },
        "unit": "度",
        "id": "angles-27"
      },
      {
        "type": "steps",
        "prompt": "等腰三角形頂角是36°，求每一個底角。",
        "fields": [
          {
            "label": "兩個底角合計",
            "answer": "144",
            "unit": "度"
          },
          {
            "label": "每個底角",
            "answer": "72",
            "unit": "度"
          }
        ],
        "hint": "兩個底角一樣大，最後要除以2。",
        "explain": "180−36＝144；144÷2＝72°。",
        "diagram": {
          "kind": "angles",
          "values": [
            72,
            72,
            36
          ],
          "unknown": 0,
          "isosceles": true
        },
        "id": "angles-28"
      },
      {
        "type": "number",
        "prompt": "等腰三角形的一個底角是65°，頂角是多少？",
        "answer": "50",
        "hint": "另一個底角也是65°。",
        "explain": "180−65×2＝50°。",
        "diagram": {
          "kind": "angles",
          "values": [
            65,
            65,
            50
          ],
          "unknown": 2,
          "isosceles": true
        },
        "unit": "度",
        "id": "angles-29"
      },
      {
        "type": "error",
        "prompt": "小美計算等腰三角形的底角。正確的每個底角是多少？",
        "answer": "50",
        "hint": "100°是兩個底角的總和，還要平分。",
        "explain": "(180−80)÷2＝50°。",
        "diagram": {
          "kind": "angles",
          "values": [
            50,
            50,
            80
          ],
          "unknown": 0,
          "isosceles": true
        },
        "unit": "度",
        "work": "頂角80°，所以每個底角是180−80＝100°。",
        "id": "angles-30"
      },
      {
        "type": "choice",
        "prompt": "等腰三角形有一個角是100°，這個角一定在哪裡？",
        "choices": [
          "頂角",
          "底角",
          "無法判斷"
        ],
        "answer": "頂角",
        "hint": "如果底角是100°，另一個底角也會是100°。",
        "explain": "兩個100°已超過180°，所以100°只能是頂角。",
        "diagram": {
          "kind": "angles",
          "values": [
            40,
            40,
            100
          ],
          "unknown": 0,
          "isosceles": true
        },
        "id": "angles-31"
      },
      {
        "type": "number",
        "prompt": "直角三角形的一個銳角是28°，另一個銳角是多少？",
        "answer": "62",
        "hint": "兩個銳角合計90°。",
        "explain": "90−28＝62°。",
        "diagram": {
          "kind": "angles",
          "values": [
            90,
            28,
            62
          ],
          "unknown": 2
        },
        "unit": "度",
        "id": "angles-32"
      },
      {
        "type": "number",
        "prompt": "三角形彩旗有兩個角各為55°，第三個角是多少？",
        "answer": "70",
        "hint": "相等的兩個角都要扣掉。",
        "explain": "180−55−55＝70°。",
        "diagram": {
          "kind": "angles",
          "values": [
            55,
            55,
            70
          ],
          "unknown": 2,
          "isosceles": true
        },
        "unit": "度",
        "id": "angles-33"
      },
      {
        "type": "number",
        "prompt": "沿圖中的對角線，四邊形被分成幾個三角形？",
        "answer": "2",
        "hint": "數一數對角線兩側的區塊。",
        "explain": "一條對角線把四邊形分成2個三角形。",
        "diagram": {
          "kind": "polygon",
          "sides": 4,
          "diagonals": true,
          "description": "4條直線段首尾相接圍成圖形。從同一頂點畫出對角線。"
        },
        "unit": "個",
        "id": "angles-34"
      },
      {
        "type": "steps",
        "prompt": "用切成三角形的方法，求四邊形的內角和。",
        "fields": [
          {
            "label": "分成的三角形數量",
            "answer": "2",
            "unit": "個"
          },
          {
            "label": "四邊形內角和",
            "answer": "360",
            "unit": "度"
          }
        ],
        "hint": "每個三角形的內角和都是180°。",
        "explain": "四邊形分成2個三角形，180×2＝360°。",
        "diagram": {
          "kind": "polygon",
          "sides": 4,
          "diagonals": true,
          "description": "4條直線段首尾相接圍成圖形。從同一頂點畫出對角線。"
        },
        "id": "angles-35"
      },
      {
        "type": "number",
        "prompt": "四邊形的三個內角是75°、85°、110°，第四個是多少？",
        "answer": "90",
        "hint": "四邊形內角和是360°。",
        "explain": "75＋85＋110＝270；360−270＝90°。",
        "diagram": {
          "kind": "cards",
          "items": [
            "四邊形",
            "75°",
            "85°",
            "110°",
            "？"
          ],
          "description": "四邊形；75°；85°；110°；？"
        },
        "unit": "度",
        "id": "angles-36"
      },
      {
        "type": "number",
        "prompt": "四邊形有三個直角，第四個角是多少？",
        "answer": "90",
        "hint": "先算三個直角一共幾度。",
        "explain": "360−90×3＝90°。",
        "diagram": {
          "kind": "cards",
          "items": [
            "四邊形",
            "90°",
            "90°",
            "90°",
            "？"
          ],
          "description": "四邊形；90°；90°；90°；？"
        },
        "unit": "度",
        "id": "angles-37"
      },
      {
        "type": "error",
        "prompt": "小明求四邊形的第四角，應改成多少度？",
        "answer": "110",
        "hint": "小明用錯了哪種圖形的內角和？",
        "explain": "應用四邊形的360°：360−70−80−100＝110°。",
        "diagram": {
          "kind": "cards",
          "items": [
            "四邊形",
            "70°",
            "80°",
            "100°",
            "？"
          ],
          "description": "四邊形；70°；80°；100°；？"
        },
        "unit": "度",
        "work": "已知70°、80°、100°，用180−70−80−100計算。",
        "id": "angles-38"
      },
      {
        "type": "choice",
        "prompt": "把三角形旋轉方向或放大，內角和會改變嗎？",
        "choices": [
          "會，圖形越大內角和越大",
          "不會，仍然是180°"
        ],
        "answer": "不會，仍然是180°",
        "hint": "邊的方向和長短改變，不會改變三角形的內角和。",
        "explain": "所有三角形內角和都是180°，與大小和放置方向無關。",
        "diagram": {
          "kind": "angles",
          "values": [
            50,
            60,
            70
          ],
          "unknown": null
        },
        "id": "angles-39"
      },
      {
        "type": "steps",
        "prompt": "三角形風箏架的角是40°、60°、未知角；旁邊四邊形的角是80°、90°、100°、未知角。分別求出未知角。",
        "fields": [
          {
            "label": "三角形未知角",
            "answer": "80",
            "unit": "度"
          },
          {
            "label": "四邊形未知角",
            "answer": "90",
            "unit": "度"
          }
        ],
        "hint": "先辨認圖形，再選180°或360°。",
        "explain": "三角形：180−40−60＝80°；四邊形：360−80−90−100＝90°。",
        "diagram": {
          "kind": "cards",
          "items": [
            "三角形：40°、60°、？",
            "四邊形：80°、90°、100°、？"
          ],
          "description": "三角形：40°、60°、？；四邊形：80°、90°、100°、？"
        },
        "id": "angles-40"
      }
    ],
    "unit": 3,
    "notes": [
      [
        "多邊形與正多邊形",
        "多邊形由直線段圍成；正多邊形的每條邊等長、每個內角相等。"
      ],
      [
        "三角形邊長",
        "任意兩邊的長度和都要大於第三邊，才能圍成三角形。"
      ],
      [
        "內角和",
        "三角形內角和180°，四邊形可以切成兩個三角形，所以內角和360°。"
      ],
      [
        "判斷三角形的種類",
        "按角分：三個角都小於90°是銳角三角形；有90°是直角三角形；有大於90°的角是鈍角三角形。"
      ],
      [
        "等腰與正三角形",
        "等腰三角形的兩個底角相等，先從180°扣頂角，再除以2。正三角形的每個內角都是60°。"
      ],
      [
        "混合題先辨認圖形",
        "三角形用180°，四邊形用360°。圖形放大或旋轉，內角和都不會改變。"
      ]
    ],
    "introDiagram": {
      "kind": "angles",
      "description": "三角形左下橘色 50°、右下綠色 60°、頂角紫色 70°。下方三色長條表示三個內角相加為 180°。",
      "values": [
        50,
        60,
        70
      ],
      "unknown": 2
    },
    "revision": 3
  },
  {
    "id": "fractions",
    "title": "換個寫法，大小不變",
    "concept": "擴分、約分和通分",
    "description": "把一塊披薩再切一切，份量會改變嗎？",
    "icon": "◒",
    "color": "teal",
    "duration": 45,
    "goal": "我能用擴分、約分與通分表示和比較分數。",
    "explanation": "同一個整體，切成更多等份時，每一份會變小，但拿到的總量可以不變。分子和分母同時乘上相同的非零整數，分數的大小不變。",
    "example": "1/2 = (1 × 2)/(2 × 2) = 2/4\n一半，也可以是四份裡的兩份。",
    "visual": "fractions",
    "questions": [
      {
        "prompt": "哪一個分數和 1/2 一樣大？",
        "choices": [
          "1/4",
          "2/4",
          "3/4",
          "2/3"
        ],
        "answer": "2/4",
        "hint": "把分子 1 和分母 2 都乘上 2。",
        "explain": "1 × 2 = 2，2 × 2 = 4，所以 1/2 = 2/4。",
        "diagram": {
          "kind": "fraction",
          "numerator": 1,
          "denominator": 2,
          "targetDenominator": 4,
          "description": "哪一個分數和 1/2 一樣大？"
        },
        "type": "choice",
        "id": "fractions-1"
      },
      {
        "prompt": "2/3 擴分成分母是 12 的分數，分子是多少？",
        "answer": "8",
        "hint": "3 要乘幾才是 12？分子也要乘相同的數。",
        "explain": "3 × 4 = 12，2 × 4 = 8，所以 2/3 = 8/12。",
        "diagram": {
          "kind": "fraction",
          "numerator": 2,
          "denominator": 3,
          "targetDenominator": 12,
          "description": "2/3 擴分成分母是 12 的分數，分子是多少？"
        },
        "type": "number",
        "unit": "",
        "id": "fractions-2"
      },
      {
        "prompt": "6/8 的分子和分母都除以 2，得到哪一個分數？",
        "answer": "3/4",
        "hint": "分子算 6 ÷ 2，分母算 8 ÷ 2。",
        "explain": "6 ÷ 2 = 3，8 ÷ 2 = 4，所以 6/8 = 3/4，大小不變。",
        "diagram": {
          "kind": "fraction",
          "numerator": 6,
          "denominator": 8,
          "targetDenominator": 4,
          "description": "6/8 的分子和分母都除以 2，得到哪一個分數？"
        },
        "type": "number",
        "unit": "",
        "id": "fractions-3",
        "exactFraction": true
      },
      {
        "prompt": "哪一個分數與 3/4 一樣大？",
        "choices": [
          "3/8",
          "6/8",
          "4/8",
          "7/8"
        ],
        "answer": "6/8",
        "hint": "每一格再切成兩份，分子和分母都乘上 2。",
        "explain": "3/4 = (3 × 2)/(4 × 2) = 6/8。",
        "diagram": {
          "kind": "fraction",
          "numerator": 3,
          "denominator": 4,
          "targetDenominator": 8,
          "description": "哪一個分數與 3/4 一樣大？"
        },
        "type": "choice",
        "id": "fractions-4"
      },
      {
        "prompt": "1/3 擴分成分母是 9 的分數，分子是多少？",
        "answer": "3",
        "hint": "3 × 幾 = 9？分子也要乘上同樣的數。",
        "explain": "分子、分母同乘 3，所以 1/3 = 3/9。",
        "diagram": {
          "kind": "fraction",
          "numerator": 1,
          "denominator": 3,
          "targetDenominator": 9,
          "description": "1/3 擴分成分母是 9 的分數，分子是多少？"
        },
        "type": "number",
        "unit": "",
        "id": "fractions-5"
      },
      {
        "prompt": "4/6 約成分母是 3 的分數，會得到什麼？",
        "answer": "2/3",
        "hint": "每兩小格合成一大格，分子和分母都除以 2。",
        "explain": "4 ÷ 2 = 2，6 ÷ 2 = 3，所以 4/6 = 2/3。",
        "diagram": {
          "kind": "fraction",
          "numerator": 4,
          "denominator": 6,
          "targetDenominator": 3,
          "description": "4/6 約成分母是 3 的分數，會得到什麼？"
        },
        "type": "number",
        "unit": "",
        "id": "fractions-6",
        "exactFraction": true
      },
      {
        "prompt": "2/5 擴分成分母是 10 的分數，分子是多少？",
        "choices": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "4",
        "hint": "一個五分之一，可以分成兩個十分之一。",
        "explain": "分子、分母同乘 2，2/5 = 4/10。",
        "diagram": {
          "kind": "fraction",
          "numerator": 2,
          "denominator": 5,
          "targetDenominator": 10,
          "description": "2/5 擴分成分母是 10 的分數，分子是多少？"
        },
        "type": "choice",
        "id": "fractions-7"
      },
      {
        "prompt": "9/12 約成分母是 4 的分數，會得到什麼？",
        "answer": "3/4",
        "hint": "每三小格合成一大格。",
        "explain": "9 ÷ 3 = 3，12 ÷ 3 = 4，所以 9/12 = 3/4。",
        "diagram": {
          "kind": "fraction",
          "numerator": 9,
          "denominator": 12,
          "targetDenominator": 4,
          "description": "9/12 約成分母是 4 的分數，會得到什麼？"
        },
        "type": "number",
        "unit": "",
        "id": "fractions-8",
        "exactFraction": true
      },
      {
        "prompt": "3/5 擴分成分母是 15 的分數，分子是多少？",
        "answer": "9",
        "hint": "5 × 3 = 15，分子也要乘 3。",
        "explain": "3 × 3 = 9，所以 3/5 = 9/15。",
        "diagram": {
          "kind": "fraction",
          "numerator": 3,
          "denominator": 5,
          "targetDenominator": 15,
          "description": "3/5 擴分成分母是 15 的分數，分子是多少？"
        },
        "type": "number",
        "unit": "",
        "id": "fractions-9"
      },
      {
        "prompt": "5/10 約成分母是 2 的分數，會得到什麼？",
        "choices": [
          "1/2",
          "2/2",
          "3/2",
          "5/2"
        ],
        "answer": "1/2",
        "hint": "把五個小格合成一大格。",
        "explain": "5 ÷ 5 = 1，10 ÷ 5 = 2，所以 5/10 = 1/2。",
        "diagram": {
          "kind": "fraction",
          "numerator": 5,
          "denominator": 10,
          "targetDenominator": 2,
          "description": "5/10 約成分母是 2 的分數，會得到什麼？"
        },
        "type": "choice",
        "id": "fractions-10"
      },
      {
        "type": "number",
        "prompt": "把6/8約分成分母為4的分數，分子是多少？",
        "answer": "3",
        "unit": "",
        "hint": "分母8÷2＝4，分子也要÷2。",
        "explain": "6÷2＝3，所以6/8＝3/4。",
        "diagram": {
          "kind": "fraction",
          "description": "8等份著色6份，改為4等份。",
          "numerator": 6,
          "denominator": 8,
          "targetDenominator": 4
        },
        "id": "fractions-11"
      },
      {
        "type": "steps",
        "prompt": "將1/2與1/3通分成分母6。",
        "fields": [
          {
            "label": "1/2的新分子",
            "answer": "3",
            "unit": ""
          },
          {
            "label": "1/3的新分子",
            "answer": "2",
            "unit": ""
          }
        ],
        "hint": "分母乘幾，分子也乘幾。",
        "explain": "1/2＝3/6；1/3＝2/6。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "同大小長條分別著色1/2與1/3。",
          "a": [
            1,
            2
          ],
          "b": [
            1,
            3
          ]
        },
        "id": "fractions-12"
      },
      {
        "type": "choice",
        "prompt": "3/4與2/3，哪個較大？",
        "choices": [
          "3/4",
          "2/3",
          "一樣大"
        ],
        "answer": "3/4",
        "hint": "通分成十二分之幾。",
        "explain": "3/4＝9/12，2/3＝8/12，所以3/4較大。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "等長長條，上方3/4著色，下方2/3著色。",
          "a": [
            3,
            4
          ],
          "b": [
            2,
            3
          ]
        },
        "id": "fractions-13"
      },
      {
        "type": "error",
        "prompt": "小明把2/3擴分成4/3。若分子變4，正確分母是多少？",
        "answer": "6",
        "unit": "",
        "hint": "分子乘2，分母也要乘2。",
        "explain": "3×2＝6，所以2/3＝4/6。",
        "diagram": {
          "kind": "fraction",
          "description": "3等份著色2份，改為6等份。",
          "numerator": 2,
          "denominator": 3,
          "targetDenominator": 6
        },
        "work": "2/3＝4/3",
        "id": "fractions-14"
      },
      {
        "type": "number",
        "prompt": "3/7擴分成分母21，分子是多少？",
        "answer": "9",
        "hint": "7乘幾會變21？分子也乘同一個數。",
        "explain": "21÷7＝3；3×3＝9，所以是9/21。",
        "diagram": {
          "kind": "fraction",
          "numerator": 3,
          "denominator": 7,
          "targetDenominator": 21
        },
        "unit": "",
        "id": "fractions-15"
      },
      {
        "type": "steps",
        "prompt": "把4/5擴分成分母20。",
        "fields": [
          {
            "label": "分子分母同乘的數",
            "answer": "4",
            "unit": ""
          },
          {
            "label": "新的分子",
            "answer": "16",
            "unit": ""
          }
        ],
        "hint": "先算20÷5。",
        "explain": "分子分母同乘4，得到16/20。",
        "diagram": {
          "kind": "fraction",
          "numerator": 4,
          "denominator": 5,
          "targetDenominator": 20
        },
        "id": "fractions-16"
      },
      {
        "type": "number",
        "prompt": "5/8擴分後的分子是15，分母是多少？",
        "answer": "24",
        "hint": "分子從5到15乘了幾倍？",
        "explain": "15÷5＝3；8×3＝24，所以是15/24。",
        "diagram": {
          "kind": "fraction",
          "numerator": 5,
          "denominator": 8,
          "targetDenominator": 24
        },
        "unit": "",
        "id": "fractions-17"
      },
      {
        "type": "choice",
        "prompt": "哪一個變化保持2/5的大小不變？",
        "choices": [
          "分子分母都加2",
          "分子分母都乘3",
          "只有分母乘3"
        ],
        "answer": "分子分母都乘3",
        "hint": "擴分需要分子和分母同乘一個非零整數。",
        "explain": "2/5＝6/15；同加或只改一項通常會改變大小。",
        "diagram": {
          "kind": "fraction",
          "numerator": 2,
          "denominator": 5,
          "targetDenominator": 15
        },
        "id": "fractions-18"
      },
      {
        "type": "error",
        "prompt": "小明的擴分錯了。若要變成分母12，正確分子是多少？",
        "answer": "9",
        "hint": "擴分應該乘同一個數，不能同加。",
        "explain": "4×3＝12，3×3＝9，正確是9/12。",
        "diagram": {
          "kind": "fraction",
          "numerator": 3,
          "denominator": 4,
          "targetDenominator": 12
        },
        "unit": "",
        "work": "3/4＝(3＋8)/(4＋8)＝11/12。",
        "id": "fractions-19"
      },
      {
        "type": "number",
        "prompt": "把12/18約成最簡分數。",
        "answer": "2/3",
        "hint": "找12與18最大的公因數。",
        "explain": "12與18同除以6，得到2/3；2與3只剩公因數1。",
        "diagram": {
          "kind": "fraction",
          "numerator": 12,
          "denominator": 18,
          "targetDenominator": 3
        },
        "unit": "",
        "exactFraction": true,
        "id": "fractions-20"
      },
      {
        "type": "number",
        "prompt": "把15/25約成最簡分數。",
        "answer": "3/5",
        "hint": "分子分母都能除以5。",
        "explain": "15÷5＝3，25÷5＝5，得到3/5。",
        "diagram": {
          "kind": "fraction",
          "numerator": 15,
          "denominator": 25,
          "targetDenominator": 5
        },
        "unit": "",
        "exactFraction": true,
        "id": "fractions-21"
      },
      {
        "type": "number",
        "prompt": "把18/24約成最簡分數。",
        "answer": "3/4",
        "hint": "可以一次除以最大公因數6。",
        "explain": "18與24同除以6，得到3/4。",
        "diagram": {
          "kind": "fraction",
          "numerator": 18,
          "denominator": 24,
          "targetDenominator": 4
        },
        "unit": "",
        "exactFraction": true,
        "id": "fractions-22"
      },
      {
        "type": "steps",
        "prompt": "把20/30約成最簡分數，分開填分子與分母。",
        "fields": [
          {
            "label": "最簡分數的分子",
            "answer": "2",
            "unit": ""
          },
          {
            "label": "最簡分數的分母",
            "answer": "3",
            "unit": ""
          }
        ],
        "hint": "20和30的最大公因數是10。",
        "explain": "20÷10＝2，30÷10＝3，得到2/3。",
        "diagram": {
          "kind": "fraction",
          "numerator": 20,
          "denominator": 30,
          "targetDenominator": 3
        },
        "id": "fractions-23"
      },
      {
        "type": "choice",
        "prompt": "哪個分數已經是最簡分數？",
        "choices": [
          "4/6",
          "5/7",
          "6/9",
          "8/12"
        ],
        "answer": "5/7",
        "hint": "檢查分子與分母是否還有大於1的公因數。",
        "explain": "5與7只有公因數1；其他選項都還能約分。",
        "diagram": {
          "kind": "cards",
          "items": [
            "4/6",
            "5/7",
            "6/9",
            "8/12"
          ],
          "description": "4/6；5/7；6/9；8/12"
        },
        "id": "fractions-24"
      },
      {
        "type": "error",
        "prompt": "小明只改分子。若分子約成3，正確分母是多少？",
        "answer": "4",
        "hint": "分子除以3，分母也要除以3。",
        "explain": "12÷3＝4，正確為3/4。",
        "diagram": {
          "kind": "fraction",
          "numerator": 9,
          "denominator": 12,
          "targetDenominator": 4
        },
        "unit": "",
        "work": "9/12＝3/12。",
        "id": "fractions-25"
      },
      {
        "type": "choice",
        "prompt": "8/12先約成4/6，還能再約分嗎？",
        "choices": [
          "能，再約成2/3",
          "不能，約分只能做一次"
        ],
        "answer": "能，再約成2/3",
        "hint": "4和6是否還有共同的因數？",
        "explain": "4與6還能同除以2，得到2/3；約分可以分次進行。",
        "diagram": {
          "kind": "fraction",
          "numerator": 4,
          "denominator": 6,
          "targetDenominator": 3
        },
        "id": "fractions-26"
      },
      {
        "type": "steps",
        "prompt": "把2/3和3/4通分成分母12。",
        "fields": [
          {
            "label": "2/3的新分子",
            "answer": "8",
            "unit": ""
          },
          {
            "label": "3/4的新分子",
            "answer": "9",
            "unit": ""
          }
        ],
        "hint": "分母3乘4，分母4乘3；分子也跟著乘。",
        "explain": "2/3＝8/12；3/4＝9/12。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            2,
            3
          ],
          "b": [
            3,
            4
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-27"
      },
      {
        "type": "steps",
        "prompt": "把3/5和7/10通分成分母10。",
        "fields": [
          {
            "label": "3/5的新分子",
            "answer": "6",
            "unit": ""
          },
          {
            "label": "7/10的分子",
            "answer": "7",
            "unit": ""
          }
        ],
        "hint": "第二個分數的分母已經是10，不需要再改。",
        "explain": "3/5＝6/10；7/10保持不變。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            3,
            5
          ],
          "b": [
            7,
            10
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-28"
      },
      {
        "type": "steps",
        "prompt": "把5/6和3/8通分成最小的共同分母24。",
        "fields": [
          {
            "label": "5/6的新分子",
            "answer": "20",
            "unit": ""
          },
          {
            "label": "3/8的新分子",
            "answer": "9",
            "unit": ""
          }
        ],
        "hint": "24÷6＝4；24÷8＝3。",
        "explain": "5/6＝20/24；3/8＝9/24。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            5,
            6
          ],
          "b": [
            3,
            8
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-29"
      },
      {
        "type": "choice",
        "prompt": "1/4與1/6通分，可以共同使用哪個分母？",
        "choices": [
          "8",
          "10",
          "12"
        ],
        "answer": "12",
        "hint": "共同分母必須是4和6的公倍數。",
        "explain": "12是4和6的公倍數，可通分成3/12與2/12。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            1,
            4
          ],
          "b": [
            1,
            6
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-30"
      },
      {
        "type": "choice",
        "prompt": "2/3與1/4通分成分母24，可以嗎？",
        "choices": [
          "可以，共同分母不一定要最小",
          "不可以，只能用12"
        ],
        "answer": "可以，共同分母不一定要最小",
        "hint": "24是不是3和4的公倍數？",
        "explain": "可以：2/3＝16/24，1/4＝6/24；用12通常較省事，但24也正確。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            2,
            3
          ],
          "b": [
            1,
            4
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-31"
      },
      {
        "type": "choice",
        "prompt": "3/5和5/8，哪個較大？",
        "choices": [
          "3/5",
          "5/8",
          "一樣大"
        ],
        "answer": "5/8",
        "hint": "通分成40後比較分子。",
        "explain": "3/5＝24/40；5/8＝25/40，所以5/8較大。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            3,
            5
          ],
          "b": [
            5,
            8
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-32"
      },
      {
        "type": "choice",
        "prompt": "5/6和7/9，哪個較大？",
        "choices": [
          "5/6",
          "7/9",
          "一樣大"
        ],
        "answer": "5/6",
        "hint": "可以通分成18。",
        "explain": "5/6＝15/18；7/9＝14/18，所以5/6較大。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            5,
            6
          ],
          "b": [
            7,
            9
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-33"
      },
      {
        "type": "choice",
        "prompt": "4/6和6/9，哪個較大？",
        "choices": [
          "4/6",
          "6/9",
          "一樣大"
        ],
        "answer": "一樣大",
        "hint": "試著把兩個分數都約分。",
        "explain": "4/6與6/9都等於2/3，所以一樣大。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            4,
            6
          ],
          "b": [
            6,
            9
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-34"
      },
      {
        "type": "choice",
        "prompt": "兩條一樣長的緞帶，取第一條的3/4、第二條的5/8，哪一段較長？",
        "choices": [
          "第一條的3/4",
          "第二條的5/8",
          "一樣長"
        ],
        "answer": "第一條的3/4",
        "hint": "先把3/4變成分母8。",
        "explain": "3/4＝6/8，大於5/8，所以第一段較長。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            3,
            4
          ],
          "b": [
            5,
            8
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-35"
      },
      {
        "type": "choice",
        "prompt": "大披薩的1/2和小披薩的1/2，實際份量一定相同嗎？",
        "choices": [
          "一定相同",
          "不一定，要看整個披薩的大小"
        ],
        "answer": "不一定，要看整個披薩的大小",
        "hint": "分數相同，也要確認「一個整體」是否一樣大。",
        "explain": "整體不同大時，一半的實際份量也可能不同。",
        "diagram": {
          "kind": "cards",
          "items": [
            "大披薩取一半",
            "小披薩取一半",
            "整體大小不同"
          ],
          "description": "大披薩取一半；小披薩取一半；整體大小不同"
        },
        "id": "fractions-36"
      },
      {
        "type": "steps",
        "prompt": "兩個相同容量的水瓶，甲裝2/3、乙裝5/6。通分成分母6再比較。",
        "fields": [
          {
            "label": "甲的新分子",
            "answer": "4",
            "unit": ""
          },
          {
            "label": "乙的分子",
            "answer": "5",
            "unit": ""
          }
        ],
        "hint": "甲的分子分母同乘2。",
        "explain": "甲為4/6、乙為5/6，所以乙裝得較多。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            2,
            3
          ],
          "b": [
            5,
            6
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "id": "fractions-37"
      },
      {
        "type": "choice",
        "prompt": "把1/2、2/3、3/4由小到大排列，哪個正確？",
        "choices": [
          "1/2 ＜ 2/3 ＜ 3/4",
          "3/4 ＜ 2/3 ＜ 1/2",
          "2/3 ＜ 1/2 ＜ 3/4"
        ],
        "answer": "1/2 ＜ 2/3 ＜ 3/4",
        "hint": "通分成12，分子分別是多少？",
        "explain": "1/2＝6/12，2/3＝8/12，3/4＝9/12。",
        "diagram": {
          "kind": "cards",
          "items": [
            "1/2",
            "2/3",
            "3/4"
          ],
          "description": "1/2；2/3；3/4"
        },
        "id": "fractions-38"
      },
      {
        "type": "error",
        "prompt": "小明比較分數時出錯了。把3/4通分成分母20，分子應是多少？",
        "answer": "15",
        "hint": "答案碰巧對，也要用相同分母來說明。",
        "explain": "3/4＝15/20，4/5＝16/20；要同分母後才能直接比較分子。",
        "diagram": {
          "kind": "fraction-pair",
          "a": [
            3,
            4
          ],
          "b": [
            4,
            5
          ],
          "description": "兩條長條各代表同樣大小的一個整體。"
        },
        "unit": "",
        "work": "4/5比3/4大，因為分子4比3大；比較分子就夠了。",
        "id": "fractions-39"
      },
      {
        "type": "steps",
        "prompt": "24格巧克力吃了16格。先約分，再改成分母12。",
        "fields": [
          {
            "label": "最簡分數的分子",
            "answer": "2",
            "unit": ""
          },
          {
            "label": "最簡分數的分母",
            "answer": "3",
            "unit": ""
          },
          {
            "label": "分母12時的分子",
            "answer": "8",
            "unit": ""
          }
        ],
        "hint": "16/24先同除以8，再把分母3乘4。",
        "explain": "16/24＝2/3＝8/12，吃掉的份量沒有變。",
        "diagram": {
          "kind": "fraction",
          "numerator": 16,
          "denominator": 24,
          "targetDenominator": 12
        },
        "id": "fractions-40"
      }
    ],
    "unit": 4,
    "notes": [
      [
        "擴分與約分",
        "分子分母同乘或同除以相同的非零整數，分數大小不變。約分時須能整除。"
      ],
      [
        "通分",
        "把分母變成相同的數，再比較分子的大小。"
      ],
      [
        "比較分數",
        "只有在分母相同時，才能直接比較分子；每個分數代表的整體也要一樣大。"
      ],
      [
        "最簡分數",
        "分子和分母除了1以外沒有其他公因數，就是最簡分數。約分可以分次進行，也可以一次除以最大公因數。"
      ],
      [
        "共同分母怎麼選",
        "共同分母必須是原來分母的公倍數；不一定要最小，但用最小公倍數通常計算較簡單。"
      ],
      [
        "生活中的分數",
        "比較實際份量之前，先確認整體一樣大。同樣是1/2，大披薩的一半與小披薩的一半不一樣多。"
      ]
    ],
    "introDiagram": {
      "kind": "fraction",
      "description": "同樣大的長條，1/2與2/4著色量相等。",
      "numerator": 1,
      "denominator": 2,
      "targetDenominator": 4
    },
    "revision": 3
  },
  {
    "id": "symmetry",
    "unit": 5,
    "concept": "線對稱圖形",
    "title": "沿著摺線，找到另一半",
    "icon": "◇",
    "color": "purple",
    "description": "從找對稱軸到方格補圖，再用摺紙剪圖理解鏡像。",
    "goal": "我能找對稱軸、對稱點邊角，在方格上定位對稱點，並判斷摺紙剪圖的結果。",
    "explanation": "如果沿一條直線對摺，兩側能完全重合，這個圖形就是線對稱圖形，那條直線叫對稱軸。對稱點到對稱軸的垂直距離相等。",
    "example": "左側點距離對稱軸 3 格，右側的對稱點也要距離對稱軸 3 格。",
    "notes": [
      [
        "5-1 認識線對稱圖形和對稱軸",
        "沿一條直線對摺，兩側完全重合才是線對稱。只分成相同面積不夠；對稱軸不限垂直方向。"
      ],
      [
        "常見圖形的對稱軸",
        "正方形4條，長寬不同的長方形2條，正三角形3條，非正三角形的等腰三角形1條。"
      ],
      [
        "5-2 對稱點、對稱邊和對稱角",
        "對稱點的連線垂直於軸且被軸平分；對稱邊等長、對稱角相等。軸上的點對稱後仍在原處。"
      ],
      [
        "5-3 畫出線對稱圖形",
        "逐點數到軸的垂直格數，在另一側標出相同距離的點，再照原圖順序連線。本版以方格位置填答練習定位。"
      ],
      [
        "5-4 剪出線對稱圖形",
        "對摺後一起剪兩層，展開會出現互相對稱的剪線。剪圖時保留摺線上的連接部分；在摺線上剪缺口與在紙片內打孔，結果不同。"
      ],
      [
        "動手試試",
        "拿紙對摺，用筆先畫剪線，再請大人陪同用安全剪刀剪開。展開後找出對稱軸，檢查兩側能否重合。"
      ]
    ],
    "introDiagram": {
      "kind": "symmetry",
      "description": "虛線是垂直對稱軸，A 在左側3格，A′在右側3格，兩點同高。",
      "distance": 3
    },
    "questions": [
      {
        "type": "number",
        "prompt": "A距離對稱軸3格，對稱點A′距離軸幾格？",
        "answer": "3",
        "unit": "格",
        "hint": "對稱點到軸的距離相等。",
        "explain": "左右各3格。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              1,
              4
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "第4欄為垂直對稱軸。A在第1欄第4列，另一側的對稱點待補。"
        },
        "id": "symmetry-1",
        "section": "5-2"
      },
      {
        "type": "number",
        "prompt": "A和A′各距離對稱軸4公分，兩點相距幾公分？",
        "answer": "8",
        "unit": "公分",
        "hint": "把軸兩側的距離相加。",
        "explain": "4＋4＝8公分。",
        "diagram": {
          "kind": "symmetry",
          "description": "A與A′在對稱軸兩側、同高，各距離軸4公分。",
          "distance": 4,
          "unit": "公分"
        },
        "id": "symmetry-2",
        "section": "5-2"
      },
      {
        "type": "steps",
        "prompt": "點P距離對稱軸2格。",
        "fields": [
          {
            "label": "對稱點距離軸",
            "answer": "2",
            "unit": "格"
          },
          {
            "label": "兩點相距",
            "answer": "4",
            "unit": "格"
          }
        ],
        "hint": "對稱軸在兩點正中間。",
        "explain": "兩側各2格，合計4格。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "P",
              2,
              4
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "第4欄為垂直對稱軸。P在第2欄第4列，另一側的對稱點待補。"
        },
        "id": "symmetry-3",
        "section": "5-2"
      },
      {
        "type": "choice",
        "prompt": "哪個條件能確認一條直線是對稱軸？",
        "choices": [
          "兩邊面積相等就好",
          "沿線對摺能完全重合",
          "直線一定要垂直"
        ],
        "answer": "沿線對摺能完全重合",
        "hint": "線對稱的重點是完全重合。",
        "explain": "分成等面積不一定能重合。",
        "diagram": {
          "kind": "symmetry",
          "description": "A與A′在垂直對稱軸兩側、同高，各距離軸3格。",
          "distance": 3
        },
        "id": "symmetry-4",
        "section": "5-1"
      },
      {
        "type": "number",
        "prompt": "正方形有幾條對稱軸？",
        "answer": "4",
        "unit": "條",
        "hint": "有水平、垂直，還有兩條對角線。",
        "explain": "共4條。",
        "diagram": {
          "kind": "square",
          "description": "正方形，四邊等長、四角直角。"
        },
        "id": "symmetry-5",
        "section": "5-1"
      },
      {
        "type": "number",
        "prompt": "長6公分、寬4公分的長方形有幾條對稱軸？",
        "answer": "2",
        "unit": "條",
        "hint": "非正方形的長方形，沿對角線不能完全重合。",
        "explain": "只有通過中心的水平與垂直線，共2條。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "rectangle",
          "description": "長6公分、寬4公分的長方形。"
        },
        "id": "symmetry-6",
        "section": "5-1"
      },
      {
        "type": "error",
        "prompt": "小明把距離軸3格的點，畫在另一側5格處。正確應距離軸幾格？",
        "answer": "3",
        "unit": "格",
        "hint": "兩側的距離必須一樣。",
        "explain": "應在另一側3格。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              1,
              4
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "第4欄為垂直對稱軸。A在第1欄第4列，另一側的對稱點待補。"
        },
        "work": "左側3格 → 右側5格",
        "id": "symmetry-7",
        "section": "5-3"
      },
      {
        "type": "number",
        "prompt": "一條邊長7公分，它的對稱邊長幾公分？",
        "answer": "7",
        "unit": "公分",
        "hint": "對稱邊能重合。",
        "explain": "對稱邊長相等，都是7公分。",
        "diagram": {
          "kind": "cards",
          "description": "對稱軸兩側的兩條邊互相對應。",
          "items": [
            "這側 7 公分",
            "另一側 ? 公分"
          ]
        },
        "id": "symmetry-8",
        "section": "5-2"
      },
      {
        "type": "choice",
        "prompt": "把圖形分成面積相等的兩半，就一定是對稱軸嗎？",
        "choices": [
          "一定是",
          "不一定，還要對摺後完全重合"
        ],
        "answer": "不一定，還要對摺後完全重合",
        "hint": "想想兩半形狀是否也必須相同。",
        "explain": "對稱軸兩側要能完全重合；只有面積相等還不夠。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "parallelogram",
          "description": "非長方形、非菱形的一般平行四邊形。"
        },
        "id": "symmetry-9",
        "section": "5-1"
      },
      {
        "type": "number",
        "prompt": "正三角形有幾條對稱軸？",
        "answer": "3",
        "unit": "條",
        "hint": "試著從每個頂點連向對邊中點。",
        "explain": "每個頂點到對邊中點各有一條，共3條。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "equilateral",
          "description": "三邊等長的正三角形。"
        },
        "id": "symmetry-10",
        "section": "5-1"
      },
      {
        "type": "number",
        "prompt": "圖中等腰三角形的底邊與腰長不同，它有幾條對稱軸？",
        "answer": "1",
        "unit": "條",
        "hint": "沿頂角和底邊中點的連線對摺。",
        "explain": "只有頂角到底邊中點的直線能讓兩腰重合，共1條。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "isosceles",
          "description": "兩腰等長、底邊與腰長不同的等腰三角形。"
        },
        "id": "symmetry-11",
        "section": "5-1"
      },
      {
        "type": "choice",
        "prompt": "長與寬不同的長方形，對角線是對稱軸嗎？",
        "choices": [
          "是",
          "不是"
        ],
        "answer": "不是",
        "hint": "對摺後長邊與短邊能完全重合嗎？",
        "explain": "長邊和短邊不同長，沿對角線摺不能完全重合。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "rectangle",
          "description": "長與寬不同的長方形。"
        },
        "id": "symmetry-12",
        "section": "5-1"
      },
      {
        "type": "choice",
        "prompt": "一般平行四邊形（不是長方形，也不是菱形）是線對稱圖形嗎？",
        "choices": [
          "是",
          "不是"
        ],
        "answer": "不是",
        "hint": "試著找一條能對摺後完全重合的直線。",
        "explain": "這種平行四邊形沒有對稱軸；旋轉後重合不等於線對稱。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "parallelogram",
          "description": "非長方形、非菱形的一般平行四邊形。"
        },
        "id": "symmetry-13",
        "section": "5-1"
      },
      {
        "type": "choice",
        "prompt": "圓的哪一種直線是對稱軸？",
        "choices": [
          "任何通過圓心的直線",
          "只碰到圓邊的直線",
          "只有垂直通過圓心的一條"
        ],
        "answer": "任何通過圓心的直線",
        "hint": "沿直徑對摺，兩個半圓會怎樣？",
        "explain": "任何通過圓心的直線都能讓兩半圓完全重合。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "circle",
          "description": "圓形。"
        },
        "id": "symmetry-14",
        "section": "5-1"
      },
      {
        "type": "choice",
        "prompt": "把線對稱圖形斜著放，它還是線對稱圖形嗎？",
        "choices": [
          "是，對稱軸跟著轉動",
          "不是，對稱軸只能直立"
        ],
        "answer": "是，對稱軸跟著轉動",
        "hint": "判斷條件是完全重合，不是擺放方向。",
        "explain": "旋轉圖形不改變線對稱性；對稱軸可以是水平、垂直或斜線。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "square",
          "description": "正方形。"
        },
        "id": "symmetry-15",
        "section": "5-1"
      },
      {
        "type": "error",
        "prompt": "小明漏數了正方形的對稱軸。正確共有幾條？",
        "answer": "4",
        "unit": "條",
        "hint": "兩條對角線對摺後能不能重合？",
        "explain": "水平、垂直和兩條對角線，共4條。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "square",
          "description": "正方形。"
        },
        "work": "只有水平和垂直兩條，斜線不算。",
        "id": "symmetry-16",
        "section": "5-1"
      },
      {
        "type": "choice",
        "prompt": "點P恰好在對稱軸上，它的對稱點在哪裡？",
        "choices": [
          "仍在P的位置",
          "一定在左側",
          "一定在右側"
        ],
        "answer": "仍在P的位置",
        "hint": "軸上的點對摺時位置會變嗎？",
        "explain": "軸上的點不移動，對稱點就是自己。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "P",
              4,
              6
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：P在第4欄第6列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-17",
        "section": "5-2"
      },
      {
        "type": "number",
        "prompt": "一對對稱點相距10公分，對稱軸在正中間。每點距離軸幾公分？",
        "answer": "5",
        "unit": "公分",
        "hint": "兩側距離相等，把總距離平分。",
        "explain": "10÷2＝5公分。",
        "diagram": {
          "kind": "cards",
          "items": [
            "A —— 對稱軸 —— A′",
            "A到A′合計10公分"
          ],
          "description": "A —— 對稱軸 —— A′；A到A′合計10公分"
        },
        "id": "symmetry-18",
        "section": "5-2"
      },
      {
        "type": "number",
        "prompt": "一個角是65°，它的對稱角是多少度？",
        "answer": "65",
        "unit": "度",
        "hint": "對稱角摺起來會完全重合。",
        "explain": "對稱角相等，所以也是65°。",
        "diagram": {
          "kind": "cards",
          "items": [
            "角A：65°",
            "對稱角A′：？"
          ],
          "description": "角A：65°；對稱角A′：？"
        },
        "id": "symmetry-19",
        "section": "5-2"
      },
      {
        "type": "steps",
        "prompt": "對稱圖形左側兩段邊長分別為4公分、6公分。右側對應兩段各是多少？",
        "fields": [
          {
            "label": "第一段的對稱邊",
            "answer": "4",
            "unit": "公分"
          },
          {
            "label": "第二段的對稱邊",
            "answer": "6",
            "unit": "公分"
          }
        ],
        "hint": "對應的是哪一段，就和那一段等長。",
        "explain": "對稱邊分別為4公分與6公分，不能交換對應關係。",
        "diagram": {
          "kind": "cards",
          "items": [
            "左側 AB＝4公分",
            "左側 BC＝6公分",
            "右側 A′B′＝？",
            "右側 B′C′＝？"
          ],
          "description": "左側 AB＝4公分；左側 BC＝6公分；右側 A′B′＝？；右側 B′C′＝？"
        },
        "id": "symmetry-20",
        "section": "5-2"
      },
      {
        "type": "choice",
        "prompt": "連接一對不在軸上的對稱點，連線與對稱軸有什麼關係？",
        "choices": [
          "互相垂直，而且被軸平分",
          "互相平行",
          "可以任意斜交"
        ],
        "answer": "互相垂直，而且被軸平分",
        "hint": "觀察左右對應點到軸的最短距離。",
        "explain": "對稱點連線垂直於對稱軸，軸通過連線中點。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              1,
              5
            ],
            [
              "A′",
              7,
              5
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：A在第1欄第5列、A′在第7欄第5列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-21",
        "section": "5-2"
      },
      {
        "type": "error",
        "prompt": "小明說對稱角是原角的兩倍。原角48°，正確對稱角是多少？",
        "answer": "48",
        "unit": "度",
        "hint": "對摺能重合的角，大小應該相同。",
        "explain": "對稱角相等，仍然是48°，不必乘2。",
        "diagram": {
          "kind": "cards",
          "items": [
            "角A：48°",
            "角A′：待求"
          ],
          "description": "角A：48°；角A′：待求"
        },
        "work": "48×2＝96°。",
        "id": "symmetry-22",
        "section": "5-2"
      },
      {
        "type": "steps",
        "prompt": "A與A′互為對稱點，A距軸6公分。",
        "fields": [
          {
            "label": "A′距離軸",
            "answer": "6",
            "unit": "公分"
          },
          {
            "label": "A到A′的距離",
            "answer": "12",
            "unit": "公分"
          }
        ],
        "hint": "先找另一側的相等距離，再把兩段相加。",
        "explain": "A′距軸6公分；A到A′共6＋6＝12公分。",
        "diagram": {
          "kind": "cards",
          "items": [
            "A到軸：6公分",
            "軸到A′：？",
            "A到A′：？"
          ],
          "description": "A到軸：6公分；軸到A′：？；A到A′：？"
        },
        "id": "symmetry-23",
        "section": "5-2"
      },
      {
        "type": "choice",
        "prompt": "對稱點距軸相同，就一定找對了嗎？",
        "choices": [
          "一定",
          "不一定，還要在同一條垂線的另一側"
        ],
        "answer": "不一定，還要在同一條垂線的另一側",
        "hint": "只有距離一樣，但點往上移，摺起來會重合嗎？",
        "explain": "對稱點要位於另一側同一條垂線上，不能任意上下移動。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              2,
              5
            ],
            [
              "候選點",
              6,
              6
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：A在第2欄第5列、候選點在第6欄第6列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-24",
        "section": "5-2"
      },
      {
        "type": "steps",
        "prompt": "對稱軸是第4欄。A在第1欄第2列，補畫A′應在哪一欄、哪一列？",
        "fields": [
          {
            "label": "A′的欄",
            "answer": "7",
            "unit": "欄"
          },
          {
            "label": "A′的列",
            "answer": "2",
            "unit": "列"
          }
        ],
        "hint": "A在軸左側3格，另一點要在右側3格且同高。",
        "explain": "第4欄往右3格是第7欄，高度不變，仍在第2列。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              1,
              2
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：A在第1欄第2列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-25",
        "section": "5-3"
      },
      {
        "type": "steps",
        "prompt": "B在第3欄第6列，以第4欄為對稱軸，B′的位置是？",
        "fields": [
          {
            "label": "B′的欄",
            "answer": "5",
            "unit": "欄"
          },
          {
            "label": "B′的列",
            "answer": "6",
            "unit": "列"
          }
        ],
        "hint": "B在軸左側1格。",
        "explain": "右側1格是第5欄，仍在第6列。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "B",
              3,
              6
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：B在第3欄第6列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-26",
        "section": "5-3"
      },
      {
        "type": "steps",
        "prompt": "C在第6欄第3列，以第4欄為對稱軸，C′的位置是？",
        "fields": [
          {
            "label": "C′的欄",
            "answer": "2",
            "unit": "欄"
          },
          {
            "label": "C′的列",
            "answer": "3",
            "unit": "列"
          }
        ],
        "hint": "這次從右側反射到左側。",
        "explain": "C在右側2格，C′在左側2格，即第2欄第3列。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "C",
              6,
              3
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：C在第6欄第3列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-27",
        "section": "5-3"
      },
      {
        "type": "steps",
        "prompt": "對稱軸改成水平的第4列。D在第2欄第1列，D′的位置是？",
        "fields": [
          {
            "label": "D′的欄",
            "answer": "2",
            "unit": "欄"
          },
          {
            "label": "D′的列",
            "answer": "7",
            "unit": "列"
          }
        ],
        "hint": "水平對稱時左右位置不變，上下距離相等。",
        "explain": "第1列在軸下3格，對稱點在軸上3格，即第2欄第7列。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "D",
              2,
              1
            ]
          ],
          "axis": "horizontal",
          "join": false,
          "description": "虛線第4列是水平對稱軸；欄數向右增加、列數向上增加。已知點：D在第2欄第1列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-28",
        "section": "5-3"
      },
      {
        "type": "steps",
        "prompt": "以第4欄為軸，A在第2欄第2列，B在第1欄第5列。先找對稱點所在的欄。",
        "fields": [
          {
            "label": "A′的欄",
            "answer": "6",
            "unit": "欄"
          },
          {
            "label": "B′的欄",
            "answer": "7",
            "unit": "欄"
          }
        ],
        "hint": "每個點分別數到軸的距離，不要一起平移。",
        "explain": "A′在第6欄第2列，B′在第7欄第5列；把A′和B′連起來就是對稱線段。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              2,
              2
            ],
            [
              "B",
              1,
              5
            ]
          ],
          "axis": "vertical",
          "join": true,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：A在第2欄第2列、B在第1欄第5列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-29",
        "section": "5-3"
      },
      {
        "type": "choice",
        "prompt": "補畫圖形時，找好A′、B′、C′後，應該怎麼連線？",
        "choices": [
          "按照原圖A、B、C的連接順序",
          "照距離遠近隨便連",
          "只連到對稱軸就好"
        ],
        "answer": "按照原圖A、B、C的連接順序",
        "hint": "對稱後相鄰的頂點仍然互相對應。",
        "explain": "依原圖順序連A′B′、B′C′，才能保留圖形的邊與形狀。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              3,
              1
            ],
            [
              "B",
              1,
              4
            ],
            [
              "C",
              3,
              7
            ]
          ],
          "axis": "vertical",
          "join": true,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：A在第3欄第1列、B在第1欄第4列、C在第3欄第7列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-30",
        "section": "5-3"
      },
      {
        "type": "error",
        "prompt": "以第4欄為軸，A在第1欄第3列。小明畫錯了，A′正確的列數是多少？",
        "answer": "3",
        "unit": "列",
        "hint": "垂直對稱軸兩側的對稱點要同高。",
        "explain": "A′應在第7欄第3列，不能改變列數。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              1,
              3
            ],
            [
              "錯誤位置",
              7,
              5
            ]
          ],
          "axis": "vertical",
          "join": false,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：A在第1欄第3列、錯誤位置在第7欄第5列。只標出已知點，另一側待補。"
        },
        "work": "畫在第7欄第5列：左右距離對了，高度往上移了。",
        "id": "symmetry-31",
        "section": "5-3"
      },
      {
        "type": "steps",
        "prompt": "線段A到B都在第2欄，A在第2列、B在第6列。以第4欄為軸補畫。",
        "fields": [
          {
            "label": "對稱線段所在欄",
            "answer": "6",
            "unit": "欄"
          },
          {
            "label": "對稱線段長度",
            "answer": "4",
            "unit": "格"
          }
        ],
        "hint": "先找第2欄的鏡射位置，再算6−2。",
        "explain": "對稱線段在第6欄，第2列到第6列長4格，與原線段等長。",
        "diagram": {
          "kind": "mirror-grid",
          "points": [
            [
              "A",
              2,
              2
            ],
            [
              "B",
              2,
              6
            ]
          ],
          "axis": "vertical",
          "join": true,
          "description": "虛線第4欄是垂直對稱軸；欄數向右增加、列數向上增加。已知點：A在第2欄第2列、B在第2欄第6列。只標出已知點，另一側待補。"
        },
        "id": "symmetry-32",
        "section": "5-3"
      },
      {
        "type": "choice",
        "prompt": "只對摺一次的紙，展開後原來的摺線通常扮演什麼角色？",
        "choices": [
          "剪出圖形的一條對稱軸",
          "一定是圖形的一條外邊",
          "一定不是對稱軸"
        ],
        "answer": "剪出圖形的一條對稱軸",
        "hint": "剪刀同時剪過兩層，兩側的剪線會怎樣？",
        "explain": "在兩層重合一起剪的條件下，展開的兩側相同，摺線是一條對稱軸。",
        "diagram": {
          "kind": "paper-fold",
          "cut": "diamond",
          "description": "紙沿中間垂直虛線對摺，藍色為保留的右半張，橘色虛線為剪線。從摺線上方沿斜線剪到右側，再沿斜線剪回摺線下方，保留靠摺線的三角形部分。"
        },
        "id": "symmetry-33",
        "section": "5-4"
      },
      {
        "type": "choice",
        "prompt": "依圖對摺後，保留靠摺線的三角形紙片，展開會得到什麼？",
        "choices": [
          "菱形",
          "圓形",
          "只有原來的一個三角形"
        ],
        "answer": "菱形",
        "hint": "把右半的三角形在左側畫出鏡像。",
        "explain": "左右兩個全等三角形沿摺線相接，形成菱形。",
        "diagram": {
          "kind": "paper-fold",
          "cut": "diamond",
          "description": "紙沿中間垂直虛線對摺，藍色為保留的右半張，橘色虛線為剪線。從摺線上方沿斜線剪到右側，再沿斜線剪回摺線下方，保留靠摺線的三角形部分。"
        },
        "id": "symmetry-34",
        "section": "5-4"
      },
      {
        "type": "choice",
        "prompt": "在對摺紙的摺線邊剪去圖示三角形缺口，展開後中間洞口是什麼形狀？",
        "choices": [
          "菱形洞",
          "圓洞",
          "只有單側的三角形洞"
        ],
        "answer": "菱形洞",
        "hint": "缺口跨過摺線後，另一半會對稱出現。",
        "explain": "兩個對稱三角形缺口合成菱形洞。",
        "diagram": {
          "kind": "paper-fold",
          "cut": "notch",
          "description": "紙沿中間垂直虛線對摺，藍色為保留的右半張，橘色虛線為剪線。從摺線剪下半個菱形的缺口，展開觀察洞口。"
        },
        "id": "symmetry-35",
        "section": "5-4"
      },
      {
        "type": "number",
        "prompt": "對摺一次，兩層紙重合。在不碰摺線的位置打一個孔，展開後有幾個孔？",
        "answer": "2",
        "unit": "個",
        "hint": "每一層各被穿過一次。",
        "explain": "兩層各有一個孔，展開後有2個對稱的孔。",
        "diagram": {
          "kind": "cards",
          "items": [
            "對摺一次 → 2層",
            "打一孔（不碰摺線）",
            "展開 → ？個孔"
          ],
          "description": "對摺一次 → 2層；打一孔（不碰摺線）；展開 → ？個孔"
        },
        "id": "symmetry-36",
        "section": "5-4"
      },
      {
        "type": "choice",
        "prompt": "想剪出左右連在一起的對稱圖形，為什麼不能把整條摺線剪斷？",
        "choices": [
          "可能把左右兩半分開",
          "會讓兩邊長度變成不同",
          "剪刀會失去對稱性"
        ],
        "answer": "可能把左右兩半分開",
        "hint": "摺線上的保留部分是兩半連接的地方。",
        "explain": "若整條連接的摺線都剪斷，展開時會成為分離的兩片。",
        "diagram": {
          "kind": "paper-fold",
          "cut": "diamond",
          "description": "紙沿中間垂直虛線對摺，藍色為保留的右半張，橘色虛線為剪線。從摺線上方沿斜線剪到右側，再沿斜線剪回摺線下方，保留靠摺線的三角形部分。"
        },
        "id": "symmetry-37",
        "section": "5-4"
      },
      {
        "type": "error",
        "prompt": "小明說對摺一次、在離摺線2公分處打一個孔，展開只有一個孔。實際共有幾個？",
        "answer": "2",
        "unit": "個",
        "hint": "展開後，兩層各自的孔會分到軸的兩側。",
        "explain": "會有2個孔，各距離軸2公分，兩孔相距4公分。",
        "diagram": {
          "kind": "cards",
          "items": [
            "對摺一次",
            "穿過兩層",
            "打孔位置離摺線2公分"
          ],
          "description": "對摺一次；穿過兩層；打孔位置離摺線2公分"
        },
        "work": "兩層重合，打一孔，展開也只有1孔。",
        "id": "symmetry-38",
        "section": "5-4"
      },
      {
        "type": "steps",
        "prompt": "對摺一次，在離摺線3公分處打一個孔，展開後兩孔互相對稱。",
        "fields": [
          {
            "label": "另一個孔距離摺線",
            "answer": "3",
            "unit": "公分"
          },
          {
            "label": "兩孔距離",
            "answer": "6",
            "unit": "公分"
          }
        ],
        "hint": "兩孔到摺線距離相同，合計要加兩次。",
        "explain": "各距摺線3公分，兩孔距離3＋3＝6公分。",
        "diagram": {
          "kind": "cards",
          "items": [
            "右側孔到摺線3公分",
            "展開後左側也有孔"
          ],
          "description": "右側孔到摺線3公分；展開後左側也有孔"
        },
        "id": "symmetry-39",
        "section": "5-4"
      },
      {
        "type": "choice",
        "prompt": "只摺一次剪出的圖形，一定只有一條對稱軸嗎？",
        "choices": [
          "不一定，某些圖形有更多條",
          "一定只有一條"
        ],
        "answer": "不一定，某些圖形有更多條",
        "hint": "想想對摺後剪出正方形的情況。",
        "explain": "摺線是一條對稱軸，但圖形可能還有其他對稱軸，例如正方形有4條。",
        "diagram": {
          "kind": "symmetry-shape",
          "shape": "square",
          "description": "正方形。"
        },
        "id": "symmetry-40",
        "section": "5-4"
      }
    ],
    "duration": 45,
    "revision": 3
  },
  {
    "id": "fraction-sums",
    "unit": 6,
    "concept": "異分母分數的加減",
    "title": "分成一樣大，再加減",
    "icon": "＋",
    "color": "orange",
    "description": "從分數圖理解通分，練習加減與生活應用。",
    "goal": "我能先通分，再計算異分母分數的加減。",
    "explanation": "分母不同，表示每一份的大小不同。先通分成一樣大的份，再把分子相加或相減，最後檢查是否可以約分。",
    "example": "1/2 + 1/3 = 3/6 + 2/6 = 5/6。",
    "notes": [
      [
        "加減前先通分",
        "例如 1/2 與 1/3 可以改成六等份：3/6 與 2/6。"
      ],
      [
        "帶分數",
        "可以分開處理整數與分數；不夠減時，把1個整數換成若干等份。"
      ],
      [
        "生活應用",
        "先確認是不是同一個整體、同一個單位，再決定要加還是減。"
      ]
    ],
    "introDiagram": {
      "kind": "fraction-pair",
      "description": "上條著色1/2，下條著色1/3；兩條代表同樣大的整體。通分後是3/6和2/6。",
      "a": [
        1,
        2
      ],
      "b": [
        1,
        3
      ]
    },
    "questions": [
      {
        "type": "number",
        "prompt": "1/2 ＋ 1/3 等於多少？（可填分數，如 3/4）",
        "answer": "5/6",
        "unit": "",
        "hint": "先把分母2和3通分。",
        "explain": "通分後計算，結果是5/6。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "同大小長條分別著色1/2和1/3。",
          "a": [
            1,
            2
          ],
          "b": [
            1,
            3
          ]
        },
        "id": "fraction-sums-1"
      },
      {
        "type": "number",
        "prompt": "3/4 − 1/2 等於多少？（可填分數，如 3/4）",
        "answer": "1/4",
        "unit": "",
        "hint": "先把分母4和2通分。",
        "explain": "通分後計算，結果是1/4。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "同大小長條分別著色3/4和1/2。",
          "a": [
            3,
            4
          ],
          "b": [
            1,
            2
          ]
        },
        "id": "fraction-sums-2"
      },
      {
        "type": "number",
        "prompt": "2/3 ＋ 1/6 等於多少？（可填分數，如 3/4）",
        "answer": "5/6",
        "unit": "",
        "hint": "先把分母3和6通分。",
        "explain": "通分後計算，結果是5/6。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "同大小長條分別著色2/3和1/6。",
          "a": [
            2,
            3
          ],
          "b": [
            1,
            6
          ]
        },
        "id": "fraction-sums-3"
      },
      {
        "type": "number",
        "prompt": "5/6 − 1/3 等於多少？（可填分數，如 3/4）",
        "answer": "1/2",
        "unit": "",
        "hint": "先把分母6和3通分。",
        "explain": "通分後計算，結果是1/2。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "同大小長條分別著色5/6和1/3。",
          "a": [
            5,
            6
          ],
          "b": [
            1,
            3
          ]
        },
        "id": "fraction-sums-4"
      },
      {
        "type": "steps",
        "prompt": "計算1/2＋1/4，先通分再相加。",
        "fields": [
          {
            "label": "1/2＝□/4，填分子",
            "answer": "2",
            "unit": ""
          },
          {
            "label": "相加後的分子（分母4）",
            "answer": "3",
            "unit": ""
          }
        ],
        "hint": "1/2＝2/4。",
        "explain": "2/4＋1/4＝3/4。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "同大小長條分別著色1/2和1/4。",
          "a": [
            1,
            2
          ],
          "b": [
            1,
            4
          ]
        },
        "id": "fraction-sums-5"
      },
      {
        "type": "error",
        "prompt": "小明算1/2＋1/3＝2/5，請填正確答案。",
        "answer": "5/6",
        "unit": "",
        "hint": "分母是份的大小，不能直接相加。",
        "explain": "通分：3/6＋2/6＝5/6。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "同大小長條分別著色1/2和1/3。",
          "a": [
            1,
            2
          ],
          "b": [
            1,
            3
          ]
        },
        "work": "分子相加、分母也相加。",
        "id": "fraction-sums-6"
      },
      {
        "type": "number",
        "prompt": "有2公尺緞帶，用掉3/4公尺，剩幾公尺？（用分數填答）",
        "answer": "5/4",
        "unit": "公尺",
        "hint": "2公尺可以寫成8/4公尺。",
        "explain": "8/4−3/4＝5/4公尺，也就是1又1/4公尺。",
        "diagram": {
          "kind": "cards",
          "description": "緞帶原長2公尺，剪下3/4公尺。",
          "items": [
            "原有 2 公尺",
            "用掉 3/4 公尺"
          ]
        },
        "id": "fraction-sums-7"
      },
      {
        "type": "number",
        "prompt": "上午喝1/3公升水，下午喝1/4公升，共喝幾公升？",
        "answer": "7/12",
        "unit": "公升",
        "hint": "共同分母可以用12。",
        "explain": "4/12＋3/12＝7/12公升。",
        "diagram": {
          "kind": "fraction-pair",
          "description": "上午1/3公升，下午1/4公升；每條長條代表1公升。",
          "a": [
            1,
            3
          ],
          "b": [
            1,
            4
          ]
        },
        "id": "fraction-sums-8"
      }
    ],
    "duration": 15,
    "revision": 2
  },
  {
    "id": "operations",
    "unit": 7,
    "concept": "整數四則計算",
    "title": "先想順序，再動手算",
    "icon": "×",
    "color": "teal",
    "description": "括號、先乘除後加減、平均與多步驟應用。",
    "goal": "我能依正確順序計算，並用算式表示生活問題。",
    "explanation": "有括號先算括號；沒有括號先乘除、後加減。只有乘除或只有加減時，由左往右算。",
    "example": "24 + 6 × 3 = 24 + 18 = 42。",
    "notes": [
      [
        "同級運算",
        "48 ÷ 4 × 2 要由左往右，先算48÷4，再乘2。"
      ],
      [
        "連除",
        "120÷3÷4 可以想成120÷(3×4)，不能把除數任意相減。"
      ],
      [
        "平均",
        "先加總，再除以份數；平均數不一定等於其中某一筆資料。"
      ]
    ],
    "introDiagram": {
      "kind": "cards",
      "description": "算式24＋6×3；第一步6×3＝18，第二步24＋18＝42。",
      "items": [
        "24 + 6 × 3",
        "先算 6 × 3",
        "再算 24 + 18"
      ]
    },
    "questions": [
      {
        "type": "number",
        "prompt": "24＋6×3＝？",
        "answer": "42",
        "unit": "",
        "hint": "先算乘法。",
        "explain": "6×3＝18，24＋18＝42。",
        "diagram": {
          "kind": "cards",
          "description": "先乘後加。",
          "items": [
            "24 + 6 × 3"
          ]
        },
        "id": "operations-1"
      },
      {
        "type": "number",
        "prompt": "(24＋6)×3＝？",
        "answer": "90",
        "unit": "",
        "hint": "先算括號。",
        "explain": "24＋6＝30，30×3＝90。",
        "diagram": {
          "kind": "cards",
          "description": "括號先算。",
          "items": [
            "(24 + 6) × 3"
          ]
        },
        "id": "operations-2"
      },
      {
        "type": "steps",
        "prompt": "算出120÷3÷4。",
        "fields": [
          {
            "label": "120÷3",
            "answer": "40",
            "unit": ""
          },
          {
            "label": "再除以4",
            "answer": "10",
            "unit": ""
          }
        ],
        "hint": "連除由左往右算。",
        "explain": "120÷3＝40，40÷4＝10。",
        "diagram": {
          "kind": "cards",
          "description": "把120先分成3份，再把每份分成4份。",
          "items": [
            "120 ÷ 3 ÷ 4"
          ]
        },
        "id": "operations-3"
      },
      {
        "type": "error",
        "prompt": "小明計算48÷4×2＝6，請改正。",
        "answer": "24",
        "unit": "",
        "hint": "乘除同級，要從左算。",
        "explain": "48÷4＝12，12×2＝24。",
        "diagram": {
          "kind": "cards",
          "description": "沒有括號的算式。",
          "items": [
            "48 ÷ 4 × 2"
          ]
        },
        "work": "48÷(4×2)＝6",
        "id": "operations-4"
      },
      {
        "type": "number",
        "prompt": "三次跳繩次數為40、50、60，平均每次幾下？",
        "answer": "50",
        "unit": "下",
        "hint": "總次數除以3。",
        "explain": "(40＋50＋60)÷3＝50下。",
        "diagram": {
          "kind": "cards",
          "description": "三次跳繩紀錄。",
          "items": [
            "40 下",
            "50 下",
            "60 下"
          ]
        },
        "id": "operations-5"
      },
      {
        "type": "steps",
        "prompt": "每本筆記本25元，買4本，付200元。",
        "fields": [
          {
            "label": "總價",
            "answer": "100",
            "unit": "元"
          },
          {
            "label": "找回",
            "answer": "100",
            "unit": "元"
          }
        ],
        "hint": "先算買4本的錢，再算找零。",
        "explain": "25×4＝100；200−100＝100元。",
        "diagram": {
          "kind": "cards",
          "description": "單價25元、4本、付款200元。",
          "items": [
            "25 元 × 4",
            "付 200 元"
          ]
        },
        "id": "operations-6"
      },
      {
        "type": "number",
        "prompt": "300−(60＋20)×2＝？",
        "answer": "140",
        "unit": "",
        "hint": "括號、乘法、減法。",
        "explain": "60＋20＝80；80×2＝160；300−160＝140。",
        "diagram": {
          "kind": "cards",
          "description": "括號先處理。",
          "items": [
            "300 − (60 + 20) × 2"
          ]
        },
        "id": "operations-7"
      },
      {
        "type": "choice",
        "prompt": "要把「36與24的和平均分成6份」寫成算式，哪個正確？",
        "choices": [
          "36＋24÷6",
          "(36＋24)÷6",
          "36×24÷6"
        ],
        "answer": "(36＋24)÷6",
        "hint": "先求和，再平均分。",
        "explain": "用括號把36＋24放在一起。",
        "diagram": {
          "kind": "cards",
          "description": "兩組數量合起來再平分。",
          "items": [
            "36 + 24",
            "平均分 6 份"
          ]
        },
        "id": "operations-8"
      }
    ],
    "duration": 15,
    "revision": 2
  },
  {
    "id": "area",
    "title": "剪一剪、拼一拼，算出面積",
    "concept": "平行四邊形、三角形和梯形的面積",
    "description": "沿著對角線切開，面積的祕密就出現了。",
    "icon": "△",
    "color": "purple",
    "duration": 15,
    "goal": "我能找出對應的底和高，計算平行四邊形、三角形與梯形面積。",
    "explanation": "把一個長方形沿對角線切開，會得到兩個一樣大的三角形。每一個三角形的面積，都是這個長方形的一半。高是從頂點到對邊的垂直距離。",
    "example": "長方形：6 × 4 = 24 平方公分\n三角形：6 × 4 ÷ 2 = 12 平方公分",
    "visual": "area",
    "questions": [
      {
        "prompt": "三角形的底是 8 公分，高是 5 公分，面積是多少？",
        "choices": [
          "13 平方公分",
          "20 平方公分",
          "40 平方公分",
          "80 平方公分"
        ],
        "answer": "20 平方公分",
        "hint": "先算底 × 高，再取一半。",
        "explain": "8 × 5 ÷ 2 = 20，面積是 20 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 8,
          "height": 5,
          "rectangle": false,
          "description": "三角形的底是 8 公分，高是 5 公分，面積是多少？"
        },
        "type": "choice",
        "id": "area-1"
      },
      {
        "prompt": "三角形的底是 10 公分，高是 6 公分，面積是多少？",
        "answer": "30",
        "hint": "想像先拼成一個底 10、高 6 的平行四邊形，再取一半。",
        "explain": "10 × 6 ÷ 2 = 30，面積是 30 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 10,
          "height": 6,
          "rectangle": false,
          "description": "三角形的底是 10 公分，高是 6 公分，面積是多少？"
        },
        "type": "number",
        "unit": "平方公分",
        "id": "area-2"
      },
      {
        "prompt": "一個長方形面積是 36 平方公分。沿對角線切開後，其中一個三角形面積是多少？",
        "answer": "18",
        "hint": "對角線把長方形分成兩個面積相等的三角形。",
        "explain": "36 ÷ 2 = 18，所以每個三角形是 18 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 9,
          "height": 4,
          "rectangle": true,
          "description": "一個長方形面積是 36 平方公分。沿對角線切開後，其中一個三角形面積是多少？"
        },
        "type": "number",
        "unit": "平方公分",
        "id": "area-3"
      },
      {
        "prompt": "三角形的底是 6 公分，高是 7 公分，面積是多少？",
        "choices": [
          "18 平方公分",
          "21 平方公分",
          "42 平方公分",
          "26 平方公分"
        ],
        "answer": "21 平方公分",
        "hint": "先用底 × 高求出兩個相同三角形拼成的面積，再除以 2。",
        "explain": "6 × 7 = 42；42 ÷ 2 = 21 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 6,
          "height": 7,
          "rectangle": false,
          "description": "三角形的底是 6 公分，高是 7 公分，面積是多少？"
        },
        "type": "choice",
        "id": "area-4"
      },
      {
        "prompt": "三角形的底是 12 公分，高是 5 公分，面積是多少？",
        "answer": "30",
        "hint": "先用底 × 高求出兩個相同三角形拼成的面積，再除以 2。",
        "explain": "12 × 5 = 60；60 ÷ 2 = 30 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 12,
          "height": 5,
          "rectangle": false,
          "description": "三角形的底是 12 公分，高是 5 公分，面積是多少？"
        },
        "type": "number",
        "unit": "平方公分",
        "id": "area-5"
      },
      {
        "prompt": "三角形的底是 9 公分，高是 8 公分，面積是多少？",
        "answer": "36",
        "hint": "先用底 × 高求出兩個相同三角形拼成的面積，再除以 2。",
        "explain": "9 × 8 = 72；72 ÷ 2 = 36 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 9,
          "height": 8,
          "rectangle": false,
          "description": "三角形的底是 9 公分，高是 8 公分，面積是多少？"
        },
        "type": "number",
        "unit": "平方公分",
        "id": "area-6"
      },
      {
        "prompt": "三角形的底是 14 公分，高是 3 公分，面積是多少？",
        "choices": [
          "26 平方公分",
          "18 平方公分",
          "21 平方公分",
          "42 平方公分"
        ],
        "answer": "21 平方公分",
        "hint": "先用底 × 高求出兩個相同三角形拼成的面積，再除以 2。",
        "explain": "14 × 3 = 42；42 ÷ 2 = 21 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 14,
          "height": 3,
          "rectangle": false,
          "description": "三角形的底是 14 公分，高是 3 公分，面積是多少？"
        },
        "type": "choice",
        "id": "area-7"
      },
      {
        "prompt": "三角形的底是 5 公分，高是 4 公分，面積是多少？",
        "answer": "10",
        "hint": "先用底 × 高求出兩個相同三角形拼成的面積，再除以 2。",
        "explain": "5 × 4 = 20；20 ÷ 2 = 10 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 5,
          "height": 4,
          "rectangle": false,
          "description": "三角形的底是 5 公分，高是 4 公分，面積是多少？"
        },
        "type": "number",
        "unit": "平方公分",
        "id": "area-8"
      },
      {
        "prompt": "三角形的底是 16 公分，高是 5 公分，面積是多少？",
        "answer": "40",
        "hint": "先用底 × 高求出兩個相同三角形拼成的面積，再除以 2。",
        "explain": "16 × 5 = 80；80 ÷ 2 = 40 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 16,
          "height": 5,
          "rectangle": false,
          "description": "三角形的底是 16 公分，高是 5 公分，面積是多少？"
        },
        "type": "number",
        "unit": "平方公分",
        "id": "area-9"
      },
      {
        "prompt": "三角形的底是 7 公分，高是 6 公分，面積是多少？",
        "choices": [
          "42 平方公分",
          "26 平方公分",
          "18 平方公分",
          "21 平方公分"
        ],
        "answer": "21 平方公分",
        "hint": "先用底 × 高求出兩個相同三角形拼成的面積，再除以 2。",
        "explain": "7 × 6 = 42；42 ÷ 2 = 21 平方公分。",
        "diagram": {
          "kind": "area",
          "base": 7,
          "height": 6,
          "rectangle": false,
          "description": "三角形的底是 7 公分，高是 6 公分，面積是多少？"
        },
        "type": "choice",
        "id": "area-10"
      },
      {
        "type": "number",
        "prompt": "平行四邊形底8公分、高5公分，面積多少？",
        "answer": "40",
        "unit": "平方公分",
        "hint": "平行四邊形面積＝底×高。",
        "explain": "8×5＝40平方公分。",
        "diagram": {
          "kind": "shape-area",
          "description": "平行四邊形底8公分，虛線垂直高5公分。",
          "shape": "parallelogram",
          "base": 8,
          "height": 5
        },
        "id": "area-11"
      },
      {
        "type": "number",
        "prompt": "梯形上底4公分、下底8公分、高5公分，面積多少？",
        "answer": "30",
        "unit": "平方公分",
        "hint": "先把上底和下底相加。",
        "explain": "(4＋8)×5÷2＝30平方公分。",
        "diagram": {
          "kind": "shape-area",
          "description": "梯形上底4公分、下底8公分、垂直高5公分。",
          "shape": "trapezoid",
          "top": 4,
          "base": 8,
          "height": 5
        },
        "id": "area-12"
      },
      {
        "type": "steps",
        "prompt": "三角形底10公分、高6公分，分兩步算面積。",
        "fields": [
          {
            "label": "底乘高",
            "answer": "60",
            "unit": ""
          },
          {
            "label": "取一半的面積",
            "answer": "30",
            "unit": "平方公分"
          }
        ],
        "hint": "兩個全等三角形可拼成平行四邊形。",
        "explain": "10×6＝60；60÷2＝30平方公分。",
        "diagram": {
          "kind": "area",
          "description": "三角形底10公分、高6公分。",
          "base": 10,
          "height": 6
        },
        "id": "area-13"
      },
      {
        "type": "error",
        "prompt": "小明算梯形面積時忘記除以2。請填正確面積。",
        "answer": "20",
        "unit": "平方公分",
        "hint": "梯形公式最後還要÷2。",
        "explain": "(3＋7)×4÷2＝20平方公分。",
        "diagram": {
          "kind": "shape-area",
          "description": "梯形上底3公分、下底7公分、高4公分。",
          "shape": "trapezoid",
          "top": 3,
          "base": 7,
          "height": 4
        },
        "work": "(上底3＋下底7)×高4＝40平方公分",
        "id": "area-14"
      }
    ],
    "unit": 8,
    "notes": [
      [
        "平行四邊形",
        "沿高剪下一角移到另一側，可拼成長方形。面積＝底×高。"
      ],
      [
        "三角形",
        "兩個全等三角形可拼成平行四邊形。面積＝底×高÷2。"
      ],
      [
        "梯形",
        "兩個全等梯形可拼成平行四邊形。面積＝(上底＋下底)×高÷2；高要和底垂直。"
      ]
    ],
    "introDiagram": {
      "kind": "area",
      "description": "底6公分、高4公分的三角形，占對應長方形的一半，面積12平方公分。",
      "base": 6,
      "height": 4,
      "rectangle": true
    },
    "revision": 2
  },
  {
    "id": "time",
    "unit": 9,
    "concept": "時間的乘除",
    "title": "把時間分配得剛剛好",
    "icon": "◷",
    "color": "orange",
    "description": "時間進位、乘除與跨小時的生活問題。",
    "goal": "我能以60進位處理時、分、秒的乘除。",
    "explanation": "1小時＝60分鐘，1分鐘＝60秒。計算時間時可以先換成較小單位，算完再換回來；不能用100進位。",
    "example": "1小時20分鐘 × 3 = 80分鐘 × 3 = 240分鐘 = 4小時。",
    "notes": [
      [
        "乘法與進位",
        "45分鐘×3＝135分鐘＝2小時15分鐘。"
      ],
      [
        "除法",
        "2小時30分鐘分成5段：先換成150分鐘，再除以5。"
      ],
      [
        "經過時間",
        "分清楚鐘面上的時刻和經過多久。跨小時先算到整點，或統一換成分鐘。"
      ]
    ],
    "introDiagram": {
      "kind": "cards",
      "description": "每段1小時20分鐘，共3段；每段80分鐘，合計240分鐘，也就是4小時。",
      "items": [
        "1 時 20 分",
        "× 3 段",
        "240 分 = 4 時"
      ]
    },
    "questions": [
      {
        "type": "number",
        "prompt": "1小時20分鐘共幾分鐘？",
        "answer": "80",
        "unit": "分鐘",
        "hint": "1小時是60分鐘。",
        "explain": "60＋20＝80分鐘。",
        "diagram": {
          "kind": "cards",
          "description": "時和分換算。",
          "items": [
            "1 小時",
            "20 分鐘"
          ]
        },
        "id": "time-1"
      },
      {
        "type": "number",
        "prompt": "45分鐘×3，合計幾分鐘？",
        "answer": "135",
        "unit": "分鐘",
        "hint": "先算45乘3。",
        "explain": "45×3＝135分鐘。",
        "diagram": {
          "kind": "cards",
          "description": "3段時間，每段45分鐘。",
          "items": [
            "45 分",
            "45 分",
            "45 分"
          ]
        },
        "id": "time-2"
      },
      {
        "type": "steps",
        "prompt": "把135分鐘換成幾小時幾分鐘。",
        "fields": [
          {
            "label": "小時",
            "answer": "2",
            "unit": "小時"
          },
          {
            "label": "剩下分鐘",
            "answer": "15",
            "unit": "分鐘"
          }
        ],
        "hint": "每60分鐘換成1小時。",
        "explain": "135÷60＝2餘15，即2小時15分鐘。",
        "diagram": {
          "kind": "cards",
          "description": "把135分鐘分成每60分鐘一組。",
          "items": [
            "135 分 ÷ 60"
          ]
        },
        "id": "time-3"
      },
      {
        "type": "number",
        "prompt": "2小時30分鐘平均分成5段，每段幾分鐘？",
        "answer": "30",
        "unit": "分鐘",
        "hint": "先全部換成分鐘。",
        "explain": "(120＋30)÷5＝30分鐘。",
        "diagram": {
          "kind": "cards",
          "description": "150分鐘平均分5段。",
          "items": [
            "2 小時 30 分",
            "÷ 5"
          ]
        },
        "id": "time-4"
      },
      {
        "type": "error",
        "prompt": "小明說1分鐘40秒等於140秒，正確是多少秒？",
        "answer": "100",
        "unit": "秒",
        "hint": "1分鐘是60秒。",
        "explain": "60＋40＝100秒。",
        "diagram": {
          "kind": "cards",
          "description": "1分鐘和40秒。",
          "items": [
            "1 分鐘",
            "40 秒"
          ]
        },
        "work": "1分鐘＝100秒，所以合計140秒。",
        "id": "time-5"
      },
      {
        "type": "number",
        "prompt": "從9:40到10:15，經過幾分鐘？",
        "answer": "35",
        "unit": "分鐘",
        "hint": "先算到10:00，再算後面15分鐘。",
        "explain": "20＋15＝35分鐘。",
        "diagram": {
          "kind": "cards",
          "description": "時間線：9:40 → 10:00 → 10:15。",
          "items": [
            "9:40",
            "10:00",
            "10:15"
          ]
        },
        "id": "time-6"
      },
      {
        "type": "steps",
        "prompt": "2分鐘15秒×2。",
        "fields": [
          {
            "label": "先換成秒",
            "answer": "135",
            "unit": "秒"
          },
          {
            "label": "乘2後",
            "answer": "270",
            "unit": "秒"
          }
        ],
        "hint": "2分鐘是120秒。",
        "explain": "120＋15＝135；135×2＝270秒。",
        "diagram": {
          "kind": "cards",
          "description": "每段2分鐘15秒，共2段。",
          "items": [
            "2 分 15 秒",
            "× 2"
          ]
        },
        "id": "time-7"
      },
      {
        "type": "number",
        "prompt": "360秒平均分成3段，每段幾分鐘？",
        "answer": "2",
        "unit": "分鐘",
        "hint": "先除以3，再除以60。",
        "explain": "360÷3＝120秒＝2分鐘。",
        "diagram": {
          "kind": "cards",
          "description": "360秒分3段。",
          "items": [
            "360 秒",
            "÷ 3"
          ]
        },
        "id": "time-8"
      }
    ],
    "duration": 15,
    "revision": 2
  },
  {
    "id": "solids",
    "unit": 10,
    "concept": "正方體和長方體",
    "title": "從平面走進立體",
    "icon": "▧",
    "color": "purple",
    "description": "認識面、邊、頂點，觀察平行與垂直。",
    "goal": "我能指出正方體和長方體的構成要素與面、邊的關係。",
    "explanation": "正方體和長方體都有6個面、12條邊、8個頂點。正方體每個面都是一樣大的正方形；長方體相對的面形狀、大小相同。",
    "example": "長方體的前面與後面互相平行；前面與上面互相垂直。",
    "notes": [
      [
        "邊與面",
        "兩個面相交的地方形成邊，邊相接的角點叫頂點。"
      ],
      [
        "平行與垂直",
        "正方體和長方體相對的面平行，相鄰的面垂直。不要只看透視圖的線條角度。"
      ],
      [
        "展開圖",
        "沿邊展開後是6個面；摺回時不能重疊，也不能缺面。"
      ]
    ],
    "introDiagram": {
      "kind": "solid",
      "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
      "shape": "cuboid"
    },
    "questions": [
      {
        "type": "number",
        "prompt": "正方體有幾個面？",
        "answer": "6",
        "unit": "個",
        "hint": "想一想上、下、前、後、左、右。",
        "explain": "共有6個面。",
        "diagram": {
          "kind": "solid",
          "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
          "shape": "cuboid"
        },
        "id": "solids-1"
      },
      {
        "type": "number",
        "prompt": "長方體有幾條邊？",
        "answer": "12",
        "unit": "條",
        "hint": "上方4條、下方4條、連接上下4條。",
        "explain": "4＋4＋4＝12條。",
        "diagram": {
          "kind": "solid",
          "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
          "shape": "cuboid"
        },
        "id": "solids-2"
      },
      {
        "type": "number",
        "prompt": "正方體有幾個頂點？",
        "answer": "8",
        "unit": "個",
        "hint": "上方4個、下方4個。",
        "explain": "4＋4＝8個。",
        "diagram": {
          "kind": "solid",
          "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
          "shape": "cuboid"
        },
        "id": "solids-3"
      },
      {
        "type": "choice",
        "prompt": "長方體的上面和下面有什麼關係？",
        "choices": [
          "互相平行",
          "互相垂直",
          "一定重合"
        ],
        "answer": "互相平行",
        "hint": "這是相對的兩個面。",
        "explain": "長方體相對的面互相平行。",
        "diagram": {
          "kind": "solid",
          "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
          "shape": "cuboid"
        },
        "id": "solids-4"
      },
      {
        "type": "choice",
        "prompt": "長方體的前面和上面有什麼關係？",
        "choices": [
          "互相平行",
          "互相垂直",
          "沒有共同的邊"
        ],
        "answer": "互相垂直",
        "hint": "這是相鄰的兩個面。",
        "explain": "相鄰的面沿著一條邊相交，互相垂直。",
        "diagram": {
          "kind": "solid",
          "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
          "shape": "cuboid"
        },
        "id": "solids-5"
      },
      {
        "type": "steps",
        "prompt": "數一數長方體的構成要素。",
        "fields": [
          {
            "label": "面數",
            "answer": "6",
            "unit": "個"
          },
          {
            "label": "頂點數",
            "answer": "8",
            "unit": "個"
          }
        ],
        "hint": "分別數平面與角點。",
        "explain": "長方體有6個面、8個頂點。",
        "diagram": {
          "kind": "solid",
          "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
          "shape": "cuboid"
        },
        "id": "solids-6"
      },
      {
        "type": "error",
        "prompt": "小明只數出圖上可見的3個面，就說長方體有3個面。實際有幾個？",
        "answer": "6",
        "unit": "個",
        "hint": "背面還有被遮住的面。",
        "explain": "另外3個面被遮住，合計6個。",
        "diagram": {
          "kind": "solid",
          "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
          "shape": "cuboid"
        },
        "work": "看見3個面，所以全部只有3個面。",
        "id": "solids-7"
      },
      {
        "type": "choice",
        "prompt": "正方體的6個面都具有哪個特徵？",
        "choices": [
          "都是一樣大的正方形",
          "都是三角形",
          "只有相對的面一樣大"
        ],
        "answer": "都是一樣大的正方形",
        "hint": "正方體所有邊都等長。",
        "explain": "每個面都是全等的正方形。",
        "diagram": {
          "kind": "solid",
          "description": "正方體透視示意圖。",
          "shape": "cube"
        },
        "id": "solids-8"
      }
    ],
    "duration": 15,
    "revision": 2
  }
]);
