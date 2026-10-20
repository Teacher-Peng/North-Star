// Original exercises; interactive missions share this data with the tutor server.
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
          "description": "圖書角週一到週四借閱量。橫軸是日期，縱軸單位是本，每格 5 本。",
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
        "id": "charts-1",
        "practiceRole": "core"
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
          "description": "圖書角週一到週四借閱量。橫軸是日期，縱軸單位是本，每格 5 本。",
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
        "id": "charts-2",
        "practiceRole": "core"
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
        "hint": "先沿著週一的點讀出本數，再加上週二的本數。",
        "explain": "20＋25＝45本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角週一到週四借閱量。橫軸是日期，縱軸單位是本，每格 5 本。",
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
        "id": "charts-3",
        "practiceRole": "core"
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
          "description": "圖書角週一到週四借閱量。橫軸是日期，縱軸單位是本，每格 5 本。",
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
        "id": "charts-4",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光把縱軸每格5本看成1本，說週二是5本。正確是多少？",
        "answer": "25",
        "unit": "本",
        "hint": "格數還要乘每格代表的量。",
        "explain": "5格×每格5本＝25本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角週一到週四借閱量。橫軸是日期，縱軸單位是本，每格 5 本。",
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
        "id": "charts-5",
        "practiceRole": "core"
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
          "description": "圖書角週一到週四借閱量。橫軸是日期，縱軸單位是本，每格 5 本。",
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
        "id": "charts-6",
        "practiceRole": "core"
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
        "id": "charts-7",
        "practiceRole": "core"
      },
      {
        "type": "steps",
        "prompt": "四天一共借出幾本？週五再借出幾本，五天合計就到 100 本？",
        "fields": [
          {
            "label": "四天合計",
            "answer": "90",
            "unit": "本"
          },
          {
            "label": "週五還需要",
            "answer": "10",
            "unit": "本"
          }
        ],
        "hint": "先加總四天，再和目標 100 本比較。",
        "explain": "20＋25＋15＋30＝90；100−90＝10 本。",
        "diagram": {
          "kind": "chart",
          "description": "圖書角週一到週四借閱量。橫軸是日期，縱軸單位是本，每格 5 本。",
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
        "id": "charts-8",
        "practiceRole": "core"
      },
      {
        "id": "charts-game-1",
        "type": "game",
        "title": "圖書館的新紀錄",
        "prompt": "週一到週四分別借出 20、25、15、30 本書。幫小光把四個點放到正確高度，連成折線圖。",
        "game": {
          "kind": "chart",
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
          "step": 5,
          "max": 30,
          "unit": "本"
        },
        "hint": "先選一天，沿著刻度找它的數量。每一格代表 5。",
        "explain": "四個點按日期連起來，就能看到上升、下降或不變。",
        "practiceRole": "guided"
      },
      {
        "id": "charts-game-2",
        "type": "game",
        "title": "小光的跳繩紀錄",
        "prompt": "週一到週四分別跳了 15、20、30、25 下。幫小光把四個點放到正確高度，連成折線圖。",
        "game": {
          "kind": "chart",
          "labels": [
            "週一",
            "週二",
            "週三",
            "週四"
          ],
          "values": [
            15,
            20,
            30,
            25
          ],
          "step": 5,
          "max": 30,
          "unit": "下"
        },
        "hint": "先選一天，沿著刻度找它的數量。每一格代表 5。",
        "explain": "四個點按日期連起來，就能看到上升、下降或不變。",
        "practiceRole": "guided"
      },
      {
        "id": "charts-game-3",
        "type": "game",
        "title": "種子觀察日記",
        "prompt": "第 1～4 天的小苗高度是 10、20、20、30 毫米。幫小光把四個點放到正確高度，連成折線圖。",
        "game": {
          "kind": "chart",
          "labels": [
            "第1天",
            "第2天",
            "第3天",
            "第4天"
          ],
          "values": [
            10,
            20,
            20,
            30
          ],
          "step": 5,
          "max": 30,
          "unit": "毫米"
        },
        "hint": "先選一天，沿著刻度找它的數量。每一格代表 5。",
        "explain": "四個點按日期連起來，就能看到上升、下降或不變。",
        "practiceRole": "guided"
      },
      {
        "id": "charts-review-1",
        "type": "choice",
        "prompt": "看圖例找五乙：哪一天五乙比五甲少借書？",
        "hint": "同一天的兩根長條是一組，再比高度。",
        "explain": "週二五甲 20 本、五乙 10 本，五乙較少。",
        "answer": "週二",
        "diagram": {
          "kind": "grouped-chart",
          "labels": [
            "週一",
            "週二",
            "週三"
          ],
          "series": [
            {
              "label": "五甲",
              "values": [
                10,
                20,
                15
              ]
            },
            {
              "label": "五乙",
              "values": [
                15,
                10,
                20
              ]
            }
          ],
          "step": 5,
          "unit": "本",
          "description": "兩班借閱量的複雜長條圖，每格 5 本。先看圖例，再找日期。"
        },
        "choices": [
          "週一",
          "週二",
          "週三"
        ],
        "practiceRole": "core"
      },
      {
        "id": "charts-review-2",
        "type": "number",
        "prompt": "週三兩班共借出幾本書？",
        "hint": "先按圖例讀出兩班的數量，再相加。",
        "explain": "五甲 15 本，五乙 20 本，合計 35 本。",
        "answer": "35",
        "diagram": {
          "kind": "grouped-chart",
          "labels": [
            "週一",
            "週二",
            "週三"
          ],
          "series": [
            {
              "label": "五甲",
              "values": [
                10,
                20,
                15
              ]
            },
            {
              "label": "五乙",
              "values": [
                15,
                10,
                20
              ]
            }
          ],
          "step": 5,
          "unit": "本",
          "description": "兩班借閱量的複雜長條圖，每格 5 本。先看圖例，再找日期。"
        },
        "unit": "本",
        "practiceRole": "core"
      }
    ],
    "duration": 15,
    "revision": 3,
    "gameTitle": "小小資料記錄員"
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
        "id": "factors-1",
        "practiceRole": "core"
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
        "id": "factors-2",
        "practiceRole": "core"
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
        ],
        "practiceRole": "core"
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
        "id": "factors-4",
        "practiceRole": "core"
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
        "id": "factors-5",
        "practiceRole": "reinforcement"
      },
      {
        "prompt": "哪一個數不是 12 的因數？",
        "answer": "5",
        "hint": "留意最後一排有沒有排滿。",
        "explain": "12 ÷ 5 = 2 餘 2，不能整除，所以 5 不是 12 的因數。",
        "diagram": {
          "kind": "cards",
          "items": [
            "12 個物品",
            "每組個數要能整除 12"
          ],
          "description": "檢查選項能否把 12 個物品剛好分完。"
        },
        "type": "choice",
        "unit": "",
        "id": "factors-6",
        "choices": [
          "2",
          "3",
          "5",
          "6"
        ],
        "practiceRole": "core"
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
        "id": "factors-7",
        "practiceRole": "reinforcement"
      },
      {
        "prompt": "哪一個數是 28 的因數？",
        "answer": "7",
        "hint": "把每個選項當成每串顆數，用除法檢查會不會剩下。",
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
        ],
        "practiceRole": "reinforcement"
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
        "id": "factors-9",
        "practiceRole": "core"
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
        "id": "factors-10",
        "practiceRole": "core"
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
        "id": "factors-11",
        "practiceRole": "core"
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
        "id": "factors-12",
        "practiceRole": "core"
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
        "id": "factors-13",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光說「5是18的因數」。算出18÷5的餘數，檢查他的說法。",
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
        "id": "factors-14",
        "practiceRole": "core"
      },
      {
        "id": "factors-game-1",
        "type": "game",
        "title": "分裝餅乾",
        "prompt": "有 12 個小物，每袋要一樣多，而且不能剩下。試試分袋機，收集所有能剛好分完的「每袋個數」。",
        "game": {
          "kind": "groups",
          "total": 12
        },
        "hint": "每袋個數 × 袋數，要剛好等於總數。1 個一袋也可以喔。",
        "explain": "12 的因數，就是所有能把 12 個物品剛好分完的每袋個數。",
        "practiceRole": "guided"
      },
      {
        "id": "factors-game-2",
        "type": "game",
        "title": "串珠小工坊",
        "prompt": "有 18 個小物，每袋要一樣多，而且不能剩下。試試分袋機，收集所有能剛好分完的「每袋個數」。",
        "game": {
          "kind": "groups",
          "total": 18
        },
        "hint": "每袋個數 × 袋數，要剛好等於總數。1 個一袋也可以喔。",
        "explain": "18 的因數，就是所有能把 18 個物品剛好分完的每袋個數。",
        "practiceRole": "guided"
      },
      {
        "id": "factors-game-3",
        "type": "game",
        "title": "積木收納員",
        "prompt": "有 24 個小物，每袋要一樣多，而且不能剩下。試試分袋機，收集所有能剛好分完的「每袋個數」。",
        "game": {
          "kind": "groups",
          "total": 24
        },
        "hint": "每袋個數 × 袋數，要剛好等於總數。1 個一袋也可以喔。",
        "explain": "24 的因數，就是所有能把 24 個物品剛好分完的每袋個數。",
        "practiceRole": "guided"
      },
      {
        "id": "factors-review-1",
        "type": "choice",
        "prompt": "145、230、312，哪個數同時是 2、5 和 10 的倍數？",
        "hint": "看看個位數，先想什麼數可以被 10 整除。",
        "explain": "230 個位數為 0，同時可被 2、5、10 整除。",
        "answer": "230",
        "choices": [
          "145",
          "230",
          "312"
        ],
        "practiceRole": "core"
      },
      {
        "id": "factors-review-2",
        "type": "number",
        "prompt": "紅燈每 4 秒閃一次，綠燈每 6 秒閃一次。現在一起閃，至少再過幾秒會一起閃？",
        "hint": "列出兩盞燈接下來閃亮的秒數，找最早相同的一次。",
        "explain": "4 的倍數：4、8、12；6 的倍數：6、12；再過 12 秒。",
        "answer": "12",
        "diagram": {
          "kind": "cards",
          "items": [
            "紅燈：每 4 秒",
            "綠燈：每 6 秒"
          ],
          "description": "兩燈現在一起閃，找下一次同時閃亮。"
        },
        "unit": "秒",
        "practiceRole": "core"
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
    "revision": 3,
    "gameTitle": "點心分袋工坊"
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
        "id": "angles-1",
        "practiceRole": "core"
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
        "id": "angles-2",
        "practiceRole": "core"
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
        "id": "angles-3",
        "practiceRole": "core"
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
        "id": "angles-4",
        "practiceRole": "core"
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
        "id": "angles-5",
        "practiceRole": "core"
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
        "id": "angles-6",
        "practiceRole": "core"
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
        "id": "angles-7",
        "practiceRole": "core"
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
        "id": "angles-8",
        "practiceRole": "reinforcement"
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
        "id": "angles-9",
        "practiceRole": "core"
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
        "id": "angles-10",
        "practiceRole": "reinforcement"
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
        "id": "angles-11",
        "practiceRole": "core"
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
        "id": "angles-12",
        "practiceRole": "core"
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
        "id": "angles-13",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光說三角形已知50°和60°，第三角是110°。改成正確答案。",
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
        "id": "angles-14",
        "practiceRole": "core"
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
          "description": "沿著圖形外框觀察直線段與相接的頂點。"
        },
        "unit": "條",
        "id": "angles-15",
        "practiceRole": "core"
      },
      {
        "type": "number",
        "prompt": "圖中的多邊形有幾個頂點？",
        "answer": "6",
        "hint": "兩條相鄰邊相接的地方就是頂點。",
        "explain": "六邊形有6條邊，也有6個頂點。",
        "diagram": {
          "kind": "polygon",
          "sides": 6,
          "diagonals": false,
          "description": "沿著圖形外框觀察直線段與相接的頂點。"
        },
        "unit": "個",
        "id": "angles-16",
        "practiceRole": "core"
      },
      {
        "type": "choice",
        "prompt": "怎樣才能確定一個圖形是「正多邊形」？",
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
        "id": "angles-17",
        "practiceRole": "core"
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
        "id": "angles-18",
        "practiceRole": "core"
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
        "id": "angles-19",
        "practiceRole": "core"
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
        "id": "angles-20",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光說3、4、8公分能圍成三角形。他漏算的較短兩邊合計是多少？",
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
        "id": "angles-21",
        "practiceRole": "core"
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
        "id": "angles-22",
        "practiceRole": "core"
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
        "id": "angles-23",
        "practiceRole": "reinforcement"
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
        "id": "angles-24",
        "practiceRole": "reinforcement"
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
        "id": "angles-25",
        "practiceRole": "core"
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
        "id": "angles-26",
        "practiceRole": "core"
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
        "id": "angles-27",
        "practiceRole": "reinforcement"
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
        "id": "angles-28",
        "practiceRole": "reinforcement"
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
        "id": "angles-29",
        "practiceRole": "reinforcement"
      },
      {
        "type": "error",
        "prompt": "小光計算等腰三角形的底角。正確的每個底角是多少？",
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
        "id": "angles-30",
        "practiceRole": "core"
      },
      {
        "type": "choice",
        "prompt": "等腰三角形有一個 100° 的角。為什麼它不可能是底角？",
        "choices": [
          "另一個底角也會是 100°，兩角已超過 180°",
          "所有三角形的底角都必須是 60°",
          "底角一定比頂角小"
        ],
        "answer": "另一個底角也會是 100°，兩角已超過 180°",
        "hint": "如果底角是100°，另一個底角也會是100°。",
        "explain": "兩個100°已超過180°，所以100°只能是頂角。",
        "id": "angles-31",
        "practiceRole": "core"
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
        "id": "angles-32",
        "practiceRole": "reinforcement"
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
        "id": "angles-33",
        "practiceRole": "reinforcement"
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
        "id": "angles-34",
        "practiceRole": "core"
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
        "id": "angles-35",
        "practiceRole": "core"
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
        "id": "angles-36",
        "practiceRole": "reinforcement"
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
        "id": "angles-37",
        "practiceRole": "reinforcement"
      },
      {
        "type": "error",
        "prompt": "小光求四邊形的第四角，應改成多少度？",
        "answer": "110",
        "hint": "小光用錯了哪種圖形的內角和？",
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
        "id": "angles-38",
        "practiceRole": "core"
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
        "id": "angles-39",
        "practiceRole": "core"
      },
      {
        "type": "steps",
        "prompt": "兩個風箏都少了角度標籤！三角形已知 40°、60°；四邊形已知 80°、90°、100°。各補上缺少的角度。",
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
        "id": "angles-40",
        "practiceRole": "core"
      },
      {
        "id": "angles-game-1",
        "type": "game",
        "title": "拼出平角",
        "prompt": "選出三片角度拼圖，放進三個空位。讓它們剛好拼成 180° 的平角。",
        "game": {
          "kind": "angles",
          "pieces": [
            50,
            60,
            70,
            90
          ],
          "count": 3,
          "target": 180
        },
        "hint": "看拼圖下方的角度合計。超過 180° 時，可以換一片比較小的。",
        "explain": "三片角不重疊地拼成平角，就是三角形內角和 180° 的意思。",
        "practiceRole": "guided"
      },
      {
        "id": "angles-game-2",
        "type": "game",
        "title": "直角三角形工坊",
        "prompt": "選出三片角度拼圖，放進三個空位。讓它們剛好拼成 180° 的平角。",
        "game": {
          "kind": "angles",
          "pieces": [
            45,
            45,
            90,
            60
          ],
          "count": 3,
          "target": 180
        },
        "hint": "看拼圖下方的角度合計。超過 180° 時，可以換一片比較小的。",
        "explain": "三片角不重疊地拼成平角，就是三角形內角和 180° 的意思。",
        "practiceRole": "guided"
      },
      {
        "id": "angles-game-3",
        "type": "game",
        "title": "角度偵探",
        "prompt": "選出三片角度拼圖，放進三個空位。讓它們剛好拼成 180° 的平角。",
        "game": {
          "kind": "angles",
          "pieces": [
            40,
            60,
            80,
            100
          ],
          "count": 3,
          "target": 180
        },
        "hint": "看拼圖下方的角度合計。超過 180° 時，可以換一片比較小的。",
        "explain": "三片角不重疊地拼成平角，就是三角形內角和 180° 的意思。",
        "practiceRole": "guided"
      },
      {
        "id": "angles-review-1",
        "type": "steps",
        "prompt": "從同一頂點畫對角線，把這個5邊形分成三角形。內角和是多少？",
        "hint": "數出分成幾個三角形，每個三角形內角和是 180°。",
        "explain": "分成 3 個三角形，3×180＝540°。",
        "fields": [
          {
            "label": "三角形數量",
            "answer": "3",
            "unit": "個"
          },
          {
            "label": "內角和",
            "answer": "540",
            "unit": "度"
          }
        ],
        "diagram": {
          "kind": "polygon",
          "sides": 5,
          "diagonals": true,
          "description": "從同一頂點畫出不相交的對角線，數一數三角形區塊。"
        },
        "practiceRole": "core"
      },
      {
        "id": "angles-review-2",
        "type": "steps",
        "prompt": "從同一頂點畫對角線，把這個6邊形分成三角形。內角和是多少？",
        "hint": "數出分成幾個三角形，每個三角形內角和是 180°。",
        "explain": "分成 4 個三角形，4×180＝720°。",
        "fields": [
          {
            "label": "三角形數量",
            "answer": "4",
            "unit": "個"
          },
          {
            "label": "內角和",
            "answer": "720",
            "unit": "度"
          }
        ],
        "diagram": {
          "kind": "polygon",
          "sides": 6,
          "diagonals": true,
          "description": "從同一頂點畫出不相交的對角線，數一數三角形區塊。"
        },
        "practiceRole": "core"
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
    "revision": 4,
    "gameTitle": "角度拼拼樂"
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
        "hint": "把每一份再切成相同的小份，總份量會變嗎？",
        "explain": "1 × 2 = 2，2 × 2 = 4，所以 1/2 = 2/4。",
        "diagram": {
          "kind": "fraction",
          "numerator": 1,
          "denominator": 2,
          "targetDenominator": 4,
          "description": "哪一個分數和 1/2 一樣大？"
        },
        "type": "choice",
        "id": "fractions-1",
        "practiceRole": "core"
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
        "id": "fractions-2",
        "practiceRole": "core"
      },
      {
        "prompt": "6/8 的分子和分母都除以 2，得到哪一個分數？",
        "answer": "3/4",
        "hint": "分子、分母都除以 2，兩個位置都要改。",
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
        "exactFraction": true,
        "practiceRole": "core"
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
        "id": "fractions-4",
        "practiceRole": "reinforcement"
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
        "id": "fractions-5",
        "practiceRole": "reinforcement"
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
        "exactFraction": true,
        "practiceRole": "core"
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
        "id": "fractions-7",
        "practiceRole": "core"
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
        "exactFraction": true,
        "practiceRole": "reinforcement"
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
        "id": "fractions-9",
        "practiceRole": "reinforcement"
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
        "id": "fractions-10",
        "practiceRole": "core"
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
        "id": "fractions-11",
        "practiceRole": "reinforcement"
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
        "id": "fractions-12",
        "practiceRole": "core"
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
        "id": "fractions-13",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光把2/3擴分成4/3。若分子變4，正確分母是多少？",
        "answer": "6",
        "unit": "",
        "hint": "分子乘2，分母也要乘2。",
        "explain": "3×2＝6，所以2/3＝4/6。",
        "diagram": {
          "kind": "fraction",
          "description": "一個整體分成 3 等份，著色 2 份。要改成分子為 4 的等值分數。",
          "numerator": 2,
          "denominator": 3,
          "targetDenominator": 6
        },
        "work": "2/3＝4/3",
        "id": "fractions-14",
        "practiceRole": "core"
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
        "id": "fractions-15",
        "practiceRole": "reinforcement"
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
        "id": "fractions-16",
        "practiceRole": "core"
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
        "id": "fractions-17",
        "practiceRole": "reinforcement"
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
        "id": "fractions-18",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光的擴分錯了。若要變成分母12，正確分子是多少？",
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
        "id": "fractions-19",
        "practiceRole": "core"
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
        "id": "fractions-20",
        "practiceRole": "core"
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
        "id": "fractions-21",
        "practiceRole": "reinforcement"
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
        "id": "fractions-22",
        "practiceRole": "reinforcement"
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
        "hint": "找一個能同時整除 20 和 30 的數，再檢查能不能繼續約分。",
        "explain": "20÷10＝2，30÷10＝3，得到2/3。",
        "diagram": {
          "kind": "fraction",
          "numerator": 20,
          "denominator": 30,
          "targetDenominator": 3
        },
        "id": "fractions-23",
        "practiceRole": "core"
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
        "id": "fractions-24",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光只改分子。若分子約成3，正確分母是多少？",
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
        "id": "fractions-25",
        "practiceRole": "core"
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
        "id": "fractions-26",
        "practiceRole": "core"
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
        "id": "fractions-27",
        "practiceRole": "core"
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
        "id": "fractions-28",
        "practiceRole": "reinforcement"
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
        "hint": "先看原本的分母各要乘幾，才會變成 24。",
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
        "id": "fractions-29",
        "practiceRole": "reinforcement"
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
        "id": "fractions-30",
        "practiceRole": "core"
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
        "id": "fractions-31",
        "practiceRole": "core"
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
        "id": "fractions-32",
        "practiceRole": "core"
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
        "id": "fractions-33",
        "practiceRole": "reinforcement"
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
        "id": "fractions-34",
        "practiceRole": "core"
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
        "id": "fractions-35",
        "practiceRole": "core"
      },
      {
        "type": "choice",
        "prompt": "兩個大小不同的披薩，各取 1/2，實際份量會一樣嗎？",
        "choices": [
          "一樣，因為都是 1/2",
          "不一樣，大披薩的一半比較多"
        ],
        "answer": "不一樣，大披薩的一半比較多",
        "hint": "分數相同，也要確認「一個整體」是否一樣大。",
        "explain": "同樣取一半，整個披薩較大的那份，實際份量也較多。",
        "diagram": {
          "kind": "cards",
          "items": [
            "大披薩取一半",
            "小披薩取一半",
            "整體大小不同"
          ],
          "description": "大披薩取一半；小披薩取一半；整體大小不同"
        },
        "id": "fractions-36",
        "practiceRole": "core"
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
        "id": "fractions-37",
        "practiceRole": "core"
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
        "id": "fractions-38",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光比較分數時出錯了。把3/4通分成分母20，分子應是多少？",
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
        "id": "fractions-39",
        "practiceRole": "core"
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
        "id": "fractions-40",
        "practiceRole": "core"
      },
      {
        "id": "fractions-game-1",
        "type": "game",
        "title": "半條能量棒",
        "prompt": "上面塗了 1/2，下面是同樣大的整體。請在 8 格裡塗出一樣大的份量。",
        "game": {
          "kind": "paint",
          "cells": 8,
          "target": 4,
          "reference": [
            1,
            2
          ],
          "label": "塗色格"
        },
        "hint": "上下兩條一樣長。試著讓塗色的總長度一樣。",
        "explain": "1/2 和 4/8 一樣大；只是每一份切得更小。",
        "practiceRole": "guided"
      },
      {
        "id": "fractions-game-2",
        "type": "game",
        "title": "三分之二的緞帶",
        "prompt": "上面塗了 2/3，下面是同樣大的整體。請在 12 格裡塗出一樣大的份量。",
        "game": {
          "kind": "paint",
          "cells": 12,
          "target": 8,
          "reference": [
            2,
            3
          ],
          "label": "塗色格"
        },
        "hint": "上下兩條一樣長。試著讓塗色的總長度一樣。",
        "explain": "2/3 和 8/12 一樣大；只是每一份切得更小。",
        "practiceRole": "guided"
      },
      {
        "id": "fractions-game-3",
        "type": "game",
        "title": "四分之三的畫布",
        "prompt": "上面塗了 3/4，下面是同樣大的整體。請在 12 格裡塗出一樣大的份量。",
        "game": {
          "kind": "paint",
          "cells": 12,
          "target": 9,
          "reference": [
            3,
            4
          ],
          "label": "塗色格"
        },
        "hint": "上下兩條一樣長。試著讓塗色的總長度一樣。",
        "explain": "3/4 和 9/12 一樣大；只是每一份切得更小。",
        "practiceRole": "guided"
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
    "revision": 4,
    "gameTitle": "分數調色盤"
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
        "section": "5-2",
        "practiceRole": "core"
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
        "section": "5-2",
        "practiceRole": "core"
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
        "section": "5-2",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
      },
      {
        "type": "number",
        "prompt": "正方形有幾條對稱軸？",
        "answer": "4",
        "unit": "條",
        "hint": "試試橫著、直著和沿斜線對摺，哪些能完全重合？",
        "explain": "共4條。",
        "diagram": {
          "kind": "square",
          "description": "正方形，四邊等長、四角直角。"
        },
        "id": "symmetry-5",
        "section": "5-1",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光把距離軸3格的點，畫在另一側5格處。正確應距離軸幾格？",
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
        "section": "5-3",
        "practiceRole": "reinforcement"
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
        "section": "5-2",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
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
        "section": "5-1",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光漏數了正方形的對稱軸。正確共有幾條？",
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
        "section": "5-1",
        "practiceRole": "reinforcement"
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
        "section": "5-2",
        "practiceRole": "core"
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
        "section": "5-2",
        "practiceRole": "core"
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
        "section": "5-2",
        "practiceRole": "core"
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
        "section": "5-2",
        "practiceRole": "core"
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
        "section": "5-2",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光說對稱角是原角的兩倍。原角48°，正確對稱角是多少？",
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
        "section": "5-2",
        "practiceRole": "reinforcement"
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
        "section": "5-2",
        "practiceRole": "reinforcement"
      },
      {
        "type": "choice",
        "prompt": "對稱點只要離虛線一樣遠，就一定畫對了嗎？",
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
        "section": "5-2",
        "practiceRole": "core"
      },
      {
        "type": "steps",
        "prompt": "把 A 照鏡子：虛線在第 4 欄，A 在第 1 欄、第 2 列。A′ 應在哪裡？",
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
        "section": "5-3",
        "practiceRole": "core"
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
        "section": "5-3",
        "practiceRole": "reinforcement"
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
        "section": "5-3",
        "practiceRole": "reinforcement"
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
        "section": "5-3",
        "practiceRole": "core"
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
        "section": "5-3",
        "practiceRole": "core"
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
        "section": "5-3",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "以第4欄為軸，A在第1欄第3列。小光畫錯了，A′正確的列數是多少？",
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
        "section": "5-3",
        "practiceRole": "core"
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
        "section": "5-3",
        "practiceRole": "core"
      },
      {
        "type": "choice",
        "prompt": "紙對摺一次，兩層重合一起剪出圖形。展開後，原來的摺線有什麼作用？",
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
        "section": "5-4",
        "practiceRole": "core"
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
        "section": "5-4",
        "practiceRole": "core"
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
          "description": "紙向右對摺一次。橘色虛線是要剪去的等腰三角形缺口，缺口的底在摺線上；展開後觀察洞口。"
        },
        "id": "symmetry-35",
        "section": "5-4",
        "practiceRole": "core"
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
        "section": "5-4",
        "practiceRole": "core"
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
        "section": "5-4",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光說對摺一次、在離摺線2公分處打一個孔，展開只有一個孔。實際共有幾個？",
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
        "section": "5-4",
        "practiceRole": "reinforcement"
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
        "section": "5-4",
        "practiceRole": "reinforcement"
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
        "section": "5-4",
        "practiceRole": "core"
      },
      {
        "id": "symmetry-game-1",
        "type": "game",
        "title": "找回另一半",
        "prompt": "藍色點是原圖。請點出虛線另一側的三個對稱點，再按「摺一摺」比對。",
        "game": {
          "kind": "mirror",
          "size": 7,
          "axis": "vertical",
          "points": [
            8,
            16,
            29
          ]
        },
        "hint": "先找一個點：數它到虛線幾格，在另一側數一樣多格。",
        "explain": "每一對對稱點到軸的距離相等，連線也與軸垂直。",
        "practiceRole": "guided"
      },
      {
        "id": "symmetry-game-2",
        "type": "game",
        "title": "星座鏡像",
        "prompt": "藍色點是原圖。請點出虛線另一側的三個對稱點，再按「摺一摺」比對。",
        "game": {
          "kind": "mirror",
          "size": 7,
          "axis": "vertical",
          "points": [
            9,
            15,
            36
          ]
        },
        "hint": "先找一個點：數它到虛線幾格，在另一側數一樣多格。",
        "explain": "每一對對稱點到軸的距離相等，連線也與軸垂直。",
        "practiceRole": "guided"
      },
      {
        "id": "symmetry-game-3",
        "type": "game",
        "title": "上下翻翻看",
        "prompt": "藍色點是原圖。請點出虛線另一側的三個對稱點，再按「摺一摺」比對。",
        "game": {
          "kind": "mirror",
          "size": 7,
          "axis": "horizontal",
          "points": [
            9,
            17,
            12
          ]
        },
        "hint": "先找一個點：數它到虛線幾格，在另一側數一樣多格。",
        "explain": "每一對對稱點到軸的距離相等，連線也與軸垂直。",
        "practiceRole": "guided"
      }
    ],
    "duration": 45,
    "revision": 4,
    "gameTitle": "鏡子畫家"
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
        "id": "fraction-sums-1",
        "practiceRole": "core"
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
        "id": "fraction-sums-2",
        "practiceRole": "core"
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
        "id": "fraction-sums-3",
        "practiceRole": "reinforcement"
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
        "id": "fraction-sums-4",
        "practiceRole": "core"
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
        "hint": "半個整體，在分成四份時占幾份？",
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
        "id": "fraction-sums-5",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光算1/2＋1/3＝2/5，請填正確答案。",
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
        "id": "fraction-sums-6",
        "practiceRole": "core"
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
        "id": "fraction-sums-7",
        "practiceRole": "core"
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
        "id": "fraction-sums-8",
        "practiceRole": "core"
      },
      {
        "id": "fraction-sums-game-1",
        "type": "game",
        "title": "點心合起來",
        "prompt": "把 1/2 + 1/3 的結果塗在下方。整條分成 6 格，每格一樣大。",
        "game": {
          "kind": "paint",
          "cells": 6,
          "target": 5,
          "operands": [
            [
              1,
              2
            ],
            [
              1,
              3
            ]
          ],
          "operator": "+",
          "label": "結果格"
        },
        "hint": "先看每一種份量在下面占幾小格，再決定要合起來還是拿掉。",
        "explain": "1/2 + 1/3 ＝ 5/6。每格大小一致，才可以直接數格子。",
        "practiceRole": "guided"
      },
      {
        "id": "fraction-sums-game-2",
        "type": "game",
        "title": "吃掉一些點心",
        "prompt": "把 3/4 − 1/2 的結果塗在下方。整條分成 8 格，每格一樣大。",
        "game": {
          "kind": "paint",
          "cells": 8,
          "target": 2,
          "operands": [
            [
              3,
              4
            ],
            [
              1,
              2
            ]
          ],
          "operator": "−",
          "label": "結果格"
        },
        "hint": "先看每一種份量在下面占幾小格，再決定要合起來還是拿掉。",
        "explain": "3/4 − 1/2 ＝ 2/8。每格大小一致，才可以直接數格子。",
        "practiceRole": "guided"
      },
      {
        "id": "fraction-sums-game-3",
        "type": "game",
        "title": "補充能量",
        "prompt": "把 2/3 + 1/6 的結果塗在下方。整條分成 12 格，每格一樣大。",
        "game": {
          "kind": "paint",
          "cells": 12,
          "target": 10,
          "operands": [
            [
              2,
              3
            ],
            [
              1,
              6
            ]
          ],
          "operator": "+",
          "label": "結果格"
        },
        "hint": "先看每一種份量在下面占幾小格，再決定要合起來還是拿掉。",
        "explain": "2/3 + 1/6 ＝ 10/12。每格大小一致，才可以直接數格子。",
        "practiceRole": "guided"
      },
      {
        "id": "fraction-sums-review-1",
        "type": "number",
        "prompt": "1 又 1/2 公尺的緞帶，加上 2/3 公尺，共幾公尺？（可填假分數或帶分數）",
        "hint": "可以先把帶分數變成假分數，再通分。",
        "explain": "3/2＋2/3＝9/6＋4/6＝13/6，也就是 2 又 1/6 公尺。",
        "answer": "13/6",
        "unit": "公尺",
        "practiceRole": "core"
      },
      {
        "id": "fraction-sums-review-2",
        "type": "number",
        "prompt": "2 又 1/4 公升的果汁，倒出 5/6 公升，剩下幾公升？",
        "hint": "先把 2 又 1/4 寫成假分數，再找共同分母。",
        "explain": "9/4−5/6＝27/12−10/12＝17/12，也就是 1 又 5/12 公升。",
        "answer": "17/12",
        "unit": "公升",
        "practiceRole": "core"
      }
    ],
    "duration": 15,
    "revision": 3,
    "gameTitle": "分數點心店"
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
        "id": "operations-1",
        "practiceRole": "core"
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
        "id": "operations-2",
        "practiceRole": "core"
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
        "id": "operations-3",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光計算48÷4×2＝6，請改正。",
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
        "id": "operations-4",
        "practiceRole": "core"
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
        "id": "operations-5",
        "practiceRole": "core"
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
        "id": "operations-6",
        "practiceRole": "core"
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
        "id": "operations-7",
        "practiceRole": "core"
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
        "id": "operations-8",
        "practiceRole": "core"
      },
      {
        "id": "operations-game-1",
        "type": "game",
        "title": "算式修理員",
        "prompt": "24 ＋ 6 × 3，應該先做哪一步？把步驟排好。",
        "game": {
          "kind": "order",
          "sequence": [
            "6 × 3 ＝ 18",
            "24 ＋ 18 ＝ 42"
          ],
          "tiles": [
            "24 ＋ 18 ＝ 42",
            "6 × 3 ＝ 18"
          ],
          "illustration": null
        },
        "hint": "先找乘法，再做加法。",
        "explain": "一步接一步，說說看：為什麼這一步要先做？6 × 3 ＝ 18 → 24 ＋ 18 ＝ 42",
        "practiceRole": "guided"
      },
      {
        "id": "operations-game-2",
        "type": "game",
        "title": "括號優先通行",
        "prompt": "(24 ＋ 6) × 3 的步驟亂掉了。幫它排回來。",
        "game": {
          "kind": "order",
          "sequence": [
            "24 ＋ 6 ＝ 30",
            "30 × 3 ＝ 90"
          ],
          "tiles": [
            "30 × 3 ＝ 90",
            "24 ＋ 6 ＝ 30"
          ],
          "illustration": null
        },
        "hint": "括號像一間小房間，先把裡面的計算完成。",
        "explain": "一步接一步，說說看：為什麼這一步要先做？24 ＋ 6 ＝ 30 → 30 × 3 ＝ 90",
        "practiceRole": "guided"
      },
      {
        "id": "operations-game-3",
        "type": "game",
        "title": "園遊會找零",
        "prompt": "每本筆記本 25 元，買 4 本，付 200 元。排出找零步驟。",
        "game": {
          "kind": "order",
          "sequence": [
            "25 × 4 ＝ 100",
            "200 − 100 ＝ 100"
          ],
          "tiles": [
            "200 − 100 ＝ 100",
            "25 × 4 ＝ 100"
          ],
          "illustration": null
        },
        "hint": "先知道要付多少錢，才能算找回多少。",
        "explain": "一步接一步，說說看：為什麼這一步要先做？25 × 4 ＝ 100 → 200 − 100 ＝ 100",
        "practiceRole": "guided"
      },
      {
        "id": "operations-review-1",
        "type": "choice",
        "prompt": "要算 25 × 12，哪個拆法會得到相同結果？",
        "hint": "把 12 分成兩部分，每部分都要乘以 25。",
        "explain": "25×(10＋2)＝25×10＋25×2，這是分配律。",
        "answer": "25 × 10 ＋ 25 × 2",
        "choices": [
          "25 × 10 ＋ 2",
          "25 × 10 ＋ 25 × 2",
          "25 ＋ 10 ＋ 2"
        ],
        "practiceRole": "core"
      },
      {
        "id": "operations-review-2",
        "type": "steps",
        "prompt": "用簡便方法算 99 × 6。先把 99 想成 100 少 1。",
        "hint": "先算 100 個 6，再扣掉多算的那一個 6。",
        "explain": "100×6＝600；600−6＝594。",
        "fields": [
          {
            "label": "100 × 6",
            "answer": "600",
            "unit": ""
          },
          {
            "label": "99 × 6",
            "answer": "594",
            "unit": ""
          }
        ],
        "practiceRole": "core"
      },
      {
        "id": "operations-review-3",
        "type": "choice",
        "prompt": "32 × 25，先把 32 拆成 8 × 4，怎麼分組比較好算？",
        "hint": "找找哪兩個數相乘能湊成 100。",
        "explain": "(8×4)×25＝8×(4×25)＝8×100＝800。",
        "answer": "8 × (4 × 25)",
        "choices": [
          "8 × (4 × 25)",
          "8 ＋ (4 × 25)",
          "(8 ＋ 4) × 25"
        ],
        "practiceRole": "core"
      }
    ],
    "duration": 15,
    "revision": 3,
    "gameTitle": "算式修理站"
  },
  {
    "id": "area",
    "title": "剪一剪、拼一拼，算出面積",
    "concept": "平行四邊形、三角形和梯形的面積",
    "description": "找高度、比大小、抓錯誤，再幫小光完成面積任務。",
    "icon": "△",
    "color": "purple",
    "duration": 15,
    "goal": "我能找出對應的底和高，計算平行四邊形、三角形與梯形面積。",
    "explanation": "把一個長方形沿對角線切開，會得到兩個一樣大的三角形。每一個三角形的面積，都是這個長方形的一半。高是從頂點到對邊的垂直距離。",
    "example": "長方形：6 × 4 = 24 平方公分\n三角形：6 × 4 ÷ 2 = 12 平方公分",
    "visual": "area",
    "questions": [
      {
        "id": "area-v2-1",
        "type": "choice",
        "focus": "辨認底與高",
        "prompt": "底邊已塗成橘色。A、B 哪一條線是對應的高？",
        "hint": "找找哪條線和橘色底邊形成直角。",
        "explain": "B 線和底邊垂直，是這條底邊對應的高；A 是斜邊。",
        "answer": "B 線",
        "choices": [
          "A 線",
          "B 線",
          "兩條都是"
        ],
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "找出橘色底邊對應的高",
              "shape": "height",
              "base": "8",
              "height": "?"
            }
          ],
          "description": "橘色線是底邊。請觀察 A、B 線與圖中的直角記號。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-2",
        "type": "choice",
        "focus": "比較與說理",
        "prompt": "甲、乙的頂點位置不同。不必算出面積，哪個說法正確？",
        "hint": "比較兩張圖標示的底和高，不要只看斜邊。",
        "explain": "兩個三角形都底 8、高 4，面積相同。頂點左右移動，只要高不變，面積就不變。",
        "answer": "一樣大，因為底和高都相同",
        "choices": [
          "乙比較大，因為斜邊比較長",
          "一樣大，因為底和高都相同",
          "甲比較大，因為比較端正"
        ],
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "甲",
              "shape": "triangle",
              "base": "8",
              "height": "4"
            },
            {
              "title": "乙",
              "shape": "lean-triangle",
              "base": "8",
              "height": "4"
            }
          ],
          "description": "甲：三角形，底 8 公分，高 4 公分；乙：三角形（頂點在右側），底 8 公分，高 4 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-3",
        "type": "number",
        "focus": "面積守恆",
        "prompt": "一張面積 24 平方公分的紙，剪開後拼成另一個圖形，沒有重疊也沒有空隙。拼好後的面積是多少？",
        "hint": "想想有沒有增加或丟掉任何一片紙。",
        "explain": "只移動紙片，沒有增減紙片，所以面積仍是 24 平方公分。",
        "answer": "24",
        "unit": "平方公分",
        "practiceRole": "core"
      },
      {
        "id": "area-v2-4",
        "type": "number",
        "focus": "基本計算",
        "prompt": "幫小光算這面三角旗需要多少平方公分的布。",
        "hint": "可以先想兩面一樣的旗子合起來有多大。",
        "explain": "8 × 5 ÷ 2 = 20 平方公分。",
        "answer": "20",
        "unit": "平方公分",
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "三角旗",
              "shape": "triangle",
              "base": "8",
              "height": "5"
            }
          ],
          "description": "三角旗：三角形，底 8 公分，高 5 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-5",
        "type": "choice",
        "focus": "辨認錯誤",
        "prompt": "小光說：「底是 8，斜邊是 5，所以面積是 8 × 5 = 40。」錯在哪裡？",
        "hint": "面積公式裡的兩個長度，有什麼方向關係？",
        "explain": "平行四邊形要用底 × 對應的高，因此是 8 × 4 = 32 平方公分。",
        "answer": "應該用垂直的高 4，不是斜邊 5",
        "choices": [
          "應該用垂直的高 4，不是斜邊 5",
          "乘法應該改成加法",
          "平行四邊形都要再除以 2"
        ],
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "斜邊 5 公分",
              "shape": "parallelogram",
              "base": "8",
              "height": "4"
            }
          ],
          "description": "斜邊 5 公分：平行四邊形，底 8 公分，高 4 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-6",
        "type": "number",
        "focus": "逆推高度",
        "prompt": "三角形面積是 24 平方公分，底是 8 公分。高是多少公分？",
        "hint": "先想兩個這樣的三角形拼起來，面積會是多少。",
        "explain": "24 × 2 ÷ 8 = 6 公分。",
        "answer": "6",
        "unit": "公分",
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "面積 24 平方公分",
              "shape": "triangle",
              "base": "8",
              "height": "?"
            }
          ],
          "description": "面積 24 平方公分：三角形，底 8 公分，高 ? 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-7",
        "type": "choice",
        "focus": "變化規律",
        "prompt": "三角形的底不變，高變成原來的 2 倍。面積會怎樣？",
        "hint": "把底 × 高 ÷ 2 中改變的部分找出來。",
        "explain": "底不變、高乘以 2，算出的面積也乘以 2。",
        "answer": "變成原來的 2 倍",
        "choices": [
          "不變",
          "變成原來的 2 倍",
          "變成原來的 4 倍"
        ],
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "原來",
              "shape": "triangle",
              "base": "6",
              "height": "3"
            },
            {
              "title": "改變後",
              "shape": "triangle",
              "base": "6",
              "height": "6"
            }
          ],
          "description": "原來：三角形，底 6 公分，高 3 公分；改變後：三角形，底 6 公分，高 6 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-8",
        "type": "number",
        "focus": "梯形計算",
        "prompt": "這塊梯形貼紙的面積是多少？",
        "hint": "兩張相同梯形可以拼成一個平行四邊形。",
        "explain": "(4 + 8) × 5 ÷ 2 = 30 平方公分。",
        "answer": "30",
        "unit": "平方公分",
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "梯形貼紙",
              "shape": "trapezoid",
              "base": "8",
              "height": "5",
              "top": "4"
            }
          ],
          "description": "梯形貼紙：梯形，底 8 公分，高 5 公分，上底 4 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-9",
        "type": "choice",
        "focus": "判斷資料是否足夠",
        "prompt": "只知道三角形的底是 8 公分，就能確定面積嗎？",
        "hint": "同樣的底，頂點可以在不同高度嗎？",
        "explain": "底一樣但高不同，面積會不同。只有底的資料不夠。",
        "answer": "不能，還需要這條底邊對應的高",
        "choices": [
          "可以，8 ÷ 2 就好",
          "不能，還需要這條底邊對應的高",
          "可以，所有底是 8 的三角形都一樣大"
        ],
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "只有底已知",
              "shape": "triangle",
              "base": "8",
              "height": "?"
            }
          ],
          "description": "只有底已知：三角形，底 8 公分，高 ? 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-10",
        "type": "number",
        "focus": "組合圖形",
        "prompt": "長方形紙板長 10、寬 6 公分，剪掉右上角底 4、高 3 公分的三角形。剩下的面積是多少？",
        "hint": "先算整張紙，再扣掉剪走的部分。",
        "explain": "整張 10 × 6 = 60；剪掉 4 × 3 ÷ 2 = 6；剩下 54 平方公分。",
        "answer": "54",
        "unit": "平方公分",
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "虛線角落剪掉：底 4、高 3",
              "shape": "cutout",
              "base": "10",
              "height": "6",
              "cutBase": "4",
              "cutHeight": "3"
            }
          ],
          "description": "虛線角落剪掉：底 4、高 3：長方形剪去右上角三角形，底 10 公分，高 6 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-11",
        "type": "steps",
        "focus": "自主設計",
        "prompt": "設計一面面積 12 平方公分的三角旗！底和高都用 1～12 的整數公分。填出你自己的設計。",
        "hint": "試選一個底，想想要配上多高，才會得到指定面積。",
        "explain": "你的底 × 高 ÷ 2 = 12，符合設計條件！這題有不同的正確設計，你可以在手寫區畫出自己的三角旗。",
        "fields": [
          {
            "label": "我設計的底",
            "unit": "公分"
          },
          {
            "label": "我設計的高",
            "unit": "公分"
          }
        ],
        "constraint": {
          "kind": "triangle-design",
          "area": 12,
          "min": 1,
          "max": 12
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-12",
        "type": "number",
        "focus": "逆推梯形",
        "prompt": "梯形面積 30 平方公分，上底 4、下底 8 公分。高是多少？",
        "hint": "先把兩個相同梯形合起來的面積找出來。",
        "explain": "30 × 2 ÷ (4 + 8) = 5 公分。",
        "answer": "5",
        "unit": "公分",
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "面積 30 平方公分",
              "shape": "trapezoid",
              "base": "8",
              "height": "?",
              "top": "4"
            }
          ],
          "description": "面積 30 平方公分：梯形，底 8 公分，高 ? 公分，上底 4 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-13",
        "type": "steps",
        "focus": "生活應用",
        "prompt": "小光要用色紙貼滿平行四邊形卡片。每張色紙可覆蓋 6 平方公分，可剪拼、不重疊。至少需要幾張？",
        "hint": "先算卡片面積，再想每張色紙能覆蓋多少。",
        "explain": "卡片 9 × 4 = 36 平方公分；36 ÷ 6 = 6 張。",
        "fields": [
          {
            "label": "卡片面積",
            "answer": "36",
            "unit": "平方公分"
          },
          {
            "label": "需要色紙",
            "answer": "6",
            "unit": "張"
          }
        ],
        "diagram": {
          "kind": "area-panels",
          "panels": [
            {
              "title": "卡片",
              "shape": "parallelogram",
              "base": "9",
              "height": "4"
            }
          ],
          "description": "卡片：平行四邊形，底 9 公分，高 4 公分。示意圖，以標示數值為準。"
        },
        "practiceRole": "core"
      },
      {
        "id": "area-v2-14",
        "type": "choice",
        "focus": "解釋公式",
        "prompt": "兩個全等三角形拼成底 8、高 5 的平行四邊形。求一個三角形的面積，為什麼要除以 2？",
        "hint": "底乘高得到的是一片，還是兩片的面積？",
        "explain": "兩個全等三角形面積相同。底 × 高算出合起來的面積，所以一個要取一半。",
        "answer": "底乘高算的是兩個三角形合起來的面積",
        "choices": [
          "因為三角形有兩條斜邊",
          "底乘高算的是兩個三角形合起來的面積",
          "因為所有圖形的面積都要除以 2"
        ],
        "practiceRole": "core"
      },
      {
        "id": "area-game-1",
        "type": "game",
        "title": "三角形變身",
        "prompt": "兩片相同三角形，底 8、高 5 公分。排出拼圖求面積的步驟。",
        "game": {
          "kind": "order",
          "sequence": [
            "兩片拼成平行四邊形",
            "8 × 5 ＝ 40 平方公分",
            "40 ÷ 2 ＝ 20 平方公分"
          ],
          "tiles": [
            "40 ÷ 2 ＝ 20 平方公分",
            "8 × 5 ＝ 40 平方公分",
            "兩片拼成平行四邊形"
          ],
          "illustration": "triangle"
        },
        "hint": "先求兩片合起來的面積，再分回一片。",
        "explain": "一步接一步，說說看：為什麼這一步要先做？兩片拼成平行四邊形 → 8 × 5 ＝ 40 平方公分 → 40 ÷ 2 ＝ 20 平方公分",
        "practiceRole": "guided"
      },
      {
        "id": "area-game-2",
        "type": "game",
        "title": "平行四邊形搬家",
        "prompt": "底 6、高 4 公分。剪下左邊的三角形，搬到右邊。排出求面積的步驟。",
        "game": {
          "kind": "order",
          "sequence": [
            "剪開再平移，拼成長方形",
            "6 × 4 ＝ 24 平方公分"
          ],
          "tiles": [
            "6 × 4 ＝ 24 平方公分",
            "剪開再平移，拼成長方形"
          ],
          "illustration": "parallelogram"
        },
        "hint": "搬家後面積沒有增加，也沒有減少。",
        "explain": "一步接一步，說說看：為什麼這一步要先做？剪開再平移，拼成長方形 → 6 × 4 ＝ 24 平方公分",
        "practiceRole": "guided"
      },
      {
        "id": "area-game-3",
        "type": "game",
        "title": "梯形雙胞胎",
        "prompt": "兩個相同梯形，上底 4、下底 8、高 5 公分。排好拼圖步驟。",
        "game": {
          "kind": "order",
          "sequence": [
            "兩片拼成平行四邊形",
            "(4 ＋ 8) × 5 ＝ 60 平方公分",
            "60 ÷ 2 ＝ 30 平方公分"
          ],
          "tiles": [
            "60 ÷ 2 ＝ 30 平方公分",
            "(4 ＋ 8) × 5 ＝ 60 平方公分",
            "兩片拼成平行四邊形"
          ],
          "illustration": "trapezoid"
        },
        "hint": "拼起來的底，是原本上底加下底。",
        "explain": "一步接一步，說說看：為什麼這一步要先做？兩片拼成平行四邊形 → (4 ＋ 8) × 5 ＝ 60 平方公分 → 60 ÷ 2 ＝ 30 平方公分",
        "practiceRole": "guided"
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
    "revision": 3,
    "gameTitle": "面積拼圖隊",
    "contentRevision": "area-diversity-v2"
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
        "id": "time-1",
        "practiceRole": "core"
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
        "id": "time-2",
        "practiceRole": "core"
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
        "id": "time-3",
        "practiceRole": "core"
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
        "id": "time-4",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光說1分鐘40秒等於140秒，正確是多少秒？",
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
        "id": "time-5",
        "practiceRole": "core"
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
        "id": "time-6",
        "practiceRole": "core"
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
        "id": "time-7",
        "practiceRole": "core"
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
        "id": "time-8",
        "practiceRole": "core"
      },
      {
        "id": "time-game-1",
        "type": "game",
        "title": "三場表演",
        "prompt": "每場表演 45 分鐘，共 3 場。調整時間盒，裝出總共花的時間。",
        "game": {
          "kind": "time",
          "minutes": 45,
          "n": 3,
          "total": 135,
          "operation": "multiply"
        },
        "hint": "一個小時盒等於 60 分鐘。先把時間都換成分鐘，再計算。",
        "explain": "45 × 3 ＝ 135 分鐘，也就是 2 小時 15 分鐘。",
        "practiceRole": "guided"
      },
      {
        "id": "time-game-2",
        "type": "game",
        "title": "四段閱讀時間",
        "prompt": "每段閱讀 30 分鐘，共 4 段。調整時間盒，裝出總共花的時間。",
        "game": {
          "kind": "time",
          "minutes": 30,
          "n": 4,
          "total": 120,
          "operation": "multiply"
        },
        "hint": "一個小時盒等於 60 分鐘。先把時間都換成分鐘，再計算。",
        "explain": "30 × 4 ＝ 120 分鐘，也就是 2 小時 0 分鐘。",
        "practiceRole": "guided"
      },
      {
        "id": "time-game-3",
        "type": "game",
        "title": "活動平均分",
        "prompt": "活動共 2 小時 30 分鐘，平均分成 5 段。每段多久？調整時間盒，裝出一段的時間。",
        "game": {
          "kind": "time",
          "minutes": 150,
          "n": 5,
          "total": 30,
          "operation": "divide"
        },
        "hint": "一個小時盒等於 60 分鐘。先把時間都換成分鐘，再計算。",
        "explain": "150 ÷ 5 ＝ 30 分鐘，也就是 0 小時 30 分鐘。",
        "practiceRole": "guided"
      }
    ],
    "duration": 15,
    "revision": 3,
    "gameTitle": "時間任務站"
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
          "description": "正方體透視示意圖，前方為正方形，虛線表示被遮住的邊。",
          "shape": "cube"
        },
        "id": "solids-1",
        "practiceRole": "core"
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
        "id": "solids-2",
        "practiceRole": "core"
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
          "description": "正方體透視示意圖，前方為正方形，虛線表示被遮住的邊。",
          "shape": "cube"
        },
        "id": "solids-3",
        "practiceRole": "core"
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
        "id": "solids-4",
        "practiceRole": "core"
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
        "id": "solids-5",
        "practiceRole": "core"
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
        "id": "solids-6",
        "practiceRole": "core"
      },
      {
        "type": "error",
        "prompt": "小光只數出圖上可見的3個面，就說長方體有3個面。實際有幾個？",
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
        "id": "solids-7",
        "practiceRole": "core"
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
          "description": "正方體透視示意圖，前方為正方形，虛線表示被遮住的邊。",
          "shape": "cube"
        },
        "id": "solids-8",
        "practiceRole": "core"
      },
      {
        "id": "solids-game-1",
        "type": "game",
        "title": "找出對面的紙片",
        "prompt": "這是正方體的展開圖。摺成盒子後，選出與 A 面相對的那一面。",
        "game": {
          "kind": "net",
          "face": "A",
          "relation": "opposite"
        },
        "hint": "沿著相連的邊想像摺起來；相對的面不會共用一條邊。",
        "explain": "正方體有三組相對的面：A 和 F、B 和 D、C 和 E。相鄰的面互相垂直。",
        "practiceRole": "guided"
      },
      {
        "id": "solids-game-2",
        "type": "game",
        "title": "紙盒的鄰居",
        "prompt": "這是正方體的展開圖。摺成盒子後，選出與 C 面相鄰的所有面。",
        "game": {
          "kind": "net",
          "face": "C",
          "relation": "adjacent"
        },
        "hint": "沿著相連的邊想像摺起來；相對的面不會共用一條邊。",
        "explain": "正方體有三組相對的面：A 和 F、B 和 D、C 和 E。相鄰的面互相垂直。",
        "practiceRole": "guided"
      },
      {
        "id": "solids-game-3",
        "type": "game",
        "title": "再找一組對面",
        "prompt": "這是正方體的展開圖。摺成盒子後，選出與 B 面相對的那一面。",
        "game": {
          "kind": "net",
          "face": "B",
          "relation": "opposite"
        },
        "hint": "沿著相連的邊想像摺起來；相對的面不會共用一條邊。",
        "explain": "正方體有三組相對的面：A 和 F、B 和 D、C 和 E。相鄰的面互相垂直。",
        "practiceRole": "guided"
      },
      {
        "id": "solids-review-1",
        "type": "choice",
        "prompt": "看前面 ABCD，哪一條邊和 AB 平行？",
        "hint": "平行的兩邊，延長後也不相交。",
        "explain": "AB 與 DC 是長方形相對的兩條邊，互相平行。",
        "answer": "DC",
        "diagram": {
          "kind": "solid",
          "shape": "cuboid",
          "vertices": true,
          "description": "前面四個頂點依左下、右下、右上、左上標成 A、B、C、D；後面對應頂點為 E、F、G、H。"
        },
        "choices": [
          "AD",
          "BC",
          "DC"
        ],
        "practiceRole": "core"
      },
      {
        "id": "solids-review-2",
        "type": "choice",
        "prompt": "看前面 ABCD，AB 和 AD 有什麼關係？",
        "hint": "兩邊在 A 點相交，形成什麼角？",
        "explain": "長方形在 A 的角是直角，所以 AB 和 AD 垂直。",
        "answer": "互相垂直",
        "diagram": {
          "kind": "solid",
          "shape": "cuboid",
          "vertices": true,
          "description": "前面四個頂點依左下、右下、右上、左上標成 A、B、C、D；後面對應頂點為 E、F、G、H。"
        },
        "choices": [
          "互相平行",
          "互相垂直",
          "同一條邊"
        ],
        "practiceRole": "core"
      },
      {
        "id": "solids-review-3",
        "type": "number",
        "prompt": "邊長 3 公分的正方體，六個面的總面積是多少？",
        "hint": "先算一個正方形面，再想有幾個相同的面。",
        "explain": "3×3＝9；9×6＝54 平方公分。",
        "answer": "54",
        "diagram": {
          "kind": "solid",
          "shape": "cube",
          "edgeLength": 3,
          "description": "正方體每條邊都是 3 公分。"
        },
        "unit": "平方公分",
        "practiceRole": "core"
      },
      {
        "id": "solids-review-4",
        "type": "number",
        "prompt": "長方體長 4、寬 3、高 2 公分，表面積是多少？",
        "hint": "三種面各有兩個：長乘寬、長乘高、寬乘高。",
        "explain": "(4×3＋4×2＋3×2)×2＝(12＋8＋6)×2＝52 平方公分。",
        "answer": "52",
        "diagram": {
          "kind": "solid",
          "shape": "cuboid",
          "dimensions": [
            4,
            3,
            2
          ],
          "description": "長方體長 4 公分、寬 3 公分、高 2 公分。"
        },
        "unit": "平方公分",
        "practiceRole": "core"
      },
      {
        "id": "solids-review-5",
        "type": "number",
        "prompt": "邊長 2 公分的正方體盒子沒有蓋子，只算外面的五個面，共幾平方公分？",
        "hint": "完整正方體有六個面，拿掉蓋子後還有幾個？",
        "explain": "2×2＝4；4×5＝20 平方公分。",
        "answer": "20",
        "diagram": {
          "kind": "cards",
          "items": [
            "邊長 2 公分",
            "沒有蓋子",
            "只算外表面，忽略厚度"
          ],
          "description": "無蓋正方體盒，計算五個外表面。"
        },
        "unit": "平方公分",
        "practiceRole": "core"
      }
    ],
    "duration": 15,
    "revision": 3,
    "gameTitle": "紙盒探險家"
  }
]);
