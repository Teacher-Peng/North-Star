# 五上獨立審查包

請先解題再展開答案。逐題檢查條件、多解、圖文、先備、提示與互動；記下具體理由，AI 不可代簽真人或孩子實測。

## charts-1

版本：77799098bbd7dc59599dd08f01c8e8217a140c615b26c502feb4a41130018af5

題目：週二借出幾本書？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：讀圖計算

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/1

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "25",
  "hint": "找週二上方的點，再讀縱軸。",
  "explain": "週二的點對應25本。"
}
```

</details>

## charts-2

版本：19fab9c6cb8374106e40d4ff86230dd71a3e397a9c7cc4409998b2b6b6582a0e

題目：週三到週四增加幾本？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：讀圖計算

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/2

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "15",
  "hint": "用週四的數量減掉週三。",
  "explain": "30−15＝15本。"
}
```

</details>

## charts-3

版本：c36d1de0dc3063f5e289bb6749f684b20111fa9ada07c0448f9eb3ce1ddffd1b

題目：週一和週二共借出幾本？先讀圖再相加。

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：分步推理

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/3

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "20＋25＝45本。"
}
```

</details>

## charts-4

版本：abd46a5f5319b7bd3ae7d6484de0bfaffef3615da0ee87ffc9852300409e78d9

題目：哪一段時間的借閱量下降？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：辨認與比較

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/4

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "週一到週二",
    "週二到週三",
    "週三到週四"
  ],
  "answer": "週二到週三",
  "hint": "看哪一段線往下走。",
  "explain": "25本下降到15本。"
}
```

</details>

## charts-5

版本：1fa3f600111fce8a4005a9af00fb0bae5426187e20bb2c89163eed10458dc0d6

題目：小光把縱軸每格5本看成1本，說週二是5本。正確是多少？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：找錯

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/5

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "25",
  "hint": "格數還要乘每格代表的量。",
  "explain": "5格×每格5本＝25本。"
}
```

</details>

## charts-6

版本：0a20df7e8edb3fec4e4e22d8049e0bef35b44f05aa650876b862cdfd7e715dbd

題目：四天中最多與最少相差幾本？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：讀圖計算

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/6

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "15",
  "hint": "先找最高點與最低點。",
  "explain": "30−15＝15本。"
}
```

</details>

## charts-7

版本：52f7e7fe0a5cbebb0fdf12b36b076c5e05e262eec89eab652ca25c7851ed9c1e

題目：想看一週每天氣溫的變化，哪種圖最適合？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：辨認與比較

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/7

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "折線圖",
    "圓餅圖",
    "只有一個總數"
  ],
  "answer": "折線圖",
  "hint": "需要依時間順序看增減。",
  "explain": "折線圖適合呈現隨時間變化的資料。"
}
```

</details>

## charts-8

版本：7a92eda87028037a36227f9c81ee6305900de6c7db8fadcbb8551a5d898e2617

題目：四天一共借出幾本？週五再借出幾本，五天合計就到 100 本？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：分步推理

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/8

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "20＋25＋15＋30＝90；100−90＝10 本。"
}
```

</details>

## charts-game-1

版本：35e922ae3b4f63a612ed97c695621bb9b8d7aaff8e80ea3a9a3a7e03336d19d3

題目：週一到週四分別借出 20、25、15、30 本書。幫小光把四個點放到正確高度，連成折線圖。

課綱：1-2；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：描點繪圖

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/9

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先選一天，沿著刻度找它的數量。每一格代表 5。",
  "explain": "四個點按日期連起來，就能看到上升、下降或不變。"
}
```

</details>

## charts-game-2

版本：a9cb839a45e385f76b95b1af8025113c51f68a78173f897b80313874f8222cb8

題目：週一到週四分別跳了 15、20、30、25 下。幫小光把四個點放到正確高度，連成折線圖。

課綱：1-2；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：描點繪圖

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/10

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先選一天，沿著刻度找它的數量。每一格代表 5。",
  "explain": "四個點按日期連起來，就能看到上升、下降或不變。"
}
```

</details>

## charts-game-3

版本：16b01116332cba867c9c34bfc8e71f50557e2b3892f0775f24005bc3dfa3ff61

題目：第 1～4 天的小苗高度是 10、20、20、30 毫米。幫小光把四個點放到正確高度，連成折線圖。

課綱：1-2；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：描點繪圖

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/11

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先選一天，沿著刻度找它的數量。每一格代表 5。",
  "explain": "四個點按日期連起來，就能看到上升、下降或不變。"
}
```

</details>

## charts-review-1

版本：45d875ad25e4b5d2e7d79b4a831a0c8dce25ebca2dae18f2f3a7a6989cb370f0

題目：看圖例找五乙：哪一天五乙比五甲少借書？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：辨認與比較

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/12

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "週一",
    "週二",
    "週三"
  ],
  "answer": "週二",
  "hint": "同一天的兩根長條是一組，再比高度。",
  "explain": "週二五甲 20 本、五乙 10 本，五乙較少。"
}
```

</details>

## charts-review-2

版本：41240538fe293377faefd48cff7ae5bd0a5e009148198362e168596e2b9981b2

題目：週三兩班共借出幾本書？

課綱：1-1；先備：認識橫軸、縱軸與每格刻度、整數加減；策略：數值推理

自查：讀圖題取消圖說逐日答案及點旁數字，需沿刻度讀值；複雜長條圖補上圖例。

畫面：http://127.0.0.1:5175/#practice/charts/13

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "35",
  "hint": "先按圖例讀出兩班的數量，再相加。",
  "explain": "五甲 15 本，五乙 20 本，合計 35 本。"
}
```

</details>

## factors-1

版本：3c1993127fbba3e8f678582445a7eec032c955b29a870dfa420c748e0ef5c23a

題目：哪一個數是 18 的因數？

課綱：2-2；先備：乘法表、整數除法與餘數；策略：辨認與比較

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/1

```json
{
  "kind": "groups",
  "total": 18,
  "cols": 4,
  "solutionCols": 6,
  "description": "哪一個數是 18 的因數？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "4",
    "5",
    "6",
    "7"
  ],
  "answer": "6",
  "hint": "試試看用 18 除以每個選項，哪一個沒有餘數？",
  "explain": "18 ÷ 6 = 3，沒有餘數，所以 6 是 18 的因數。"
}
```

</details>

## factors-2

版本：cc856b19d15eea6b5f400f49f5aa1c41b4062725878693ada755bed3fc64517f

題目：20 的因數共有幾個？

課綱：2-2；先備：乘法表、整數除法與餘數；策略：數值推理

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/2

```json
{
  "kind": "groups",
  "total": 20,
  "cols": 3,
  "solutionCols": 4,
  "description": "20 的因數共有幾個？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "6",
  "hint": "成對找找看：1 × 20、2 × 10，還有哪一對？",
  "explain": "20 = 1 × 20 = 2 × 10 = 4 × 5。因數是 1、2、4、5、10、20，共 6 個。"
}
```

</details>

## factors-3

版本：6dc23761484e83ef811c156fd5ade01f9548aca4206c57e5537845a98b96108c

題目：有 24 顆珠子，每串要一樣多且沒有剩下。每串可以有幾顆？

課綱：2-2；先備：乘法表、整數除法與餘數；策略：辨認與比較

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/3

```json
{
  "kind": "groups",
  "total": 24,
  "cols": 5,
  "solutionCols": 8,
  "description": "有 24 顆珠子，每串要一樣多且沒有剩下。每串可以有幾顆？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "5 顆",
    "7 顆",
    "8 顆",
    "9 顆"
  ],
  "answer": "8 顆",
  "hint": "把「每串的顆數 × 串數 = 24」想成一個乘法問題。",
  "explain": "8 × 3 = 24，所以每串 8 顆，可以串成 3 串。"
}
```

</details>

## factors-4

版本：b1869113bf02dc601526523ec32078befb1b47335322f61d3a6eef98d6973578

題目：15 顆糖果，每袋裝 3 顆，可以剛好裝成幾袋？

課綱：2-1；先備：乘法表、整數除法與餘數；策略：辨認與比較

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/4

```json
{
  "kind": "groups",
  "total": 15,
  "cols": 3,
  "solutionCols": 3,
  "description": "15 顆糖果，每袋裝 3 顆，可以剛好裝成幾袋？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "3 袋",
    "4 袋",
    "5 袋",
    "6 袋"
  ],
  "answer": "5 袋",
  "hint": "把 15 個圓點，每 3 個圈成一組。",
  "explain": "15 ÷ 3 = 5，剛好裝成 5 袋。"
}
```

</details>

## factors-5

版本：dc549e69b5e33506cfb273407281a5cab5cdf36072b62371b3be9dda9b6d9afb

題目：16 的因數共有幾個？

課綱：2-2；先備：乘法表、整數除法與餘數；策略：數值推理

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/5

```json
{
  "kind": "groups",
  "total": 16,
  "cols": 3,
  "solutionCols": 4,
  "description": "16 的因數共有幾個？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "5",
  "hint": "成對找：1 × 16、2 × 8，再找找正方形的排法。",
  "explain": "因數是 1、2、4、8、16，共 5 個。4 × 4 中的 4 只算一次。"
}
```

</details>

## factors-6

版本：11e2013ae3bf7235da01c992290dff85c8cfa74d35322cb515edea215c9970f2

題目：哪一個數不是 12 的因數？

課綱：2-2；先備：乘法表、整數除法與餘數；策略：辨認與比較

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/6

```json
{
  "kind": "cards",
  "items": [
    "12 個物品",
    "每組個數要能整除 12"
  ],
  "description": "檢查選項能否把 12 個物品剛好分完。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "2",
    "3",
    "5",
    "6"
  ],
  "answer": "5",
  "hint": "留意最後一排有沒有排滿。",
  "explain": "12 ÷ 5 = 2 餘 2，不能整除，所以 5 不是 12 的因數。"
}
```

</details>

## factors-7

版本：14d610998d6b2c5ee316055f8afaa913aa59c6b85bbc366812e1fae406d46b41

題目：30 顆珠子，每串 6 顆，可以剛好串成幾串？

課綱：2-1；先備：乘法表、整數除法與餘數；策略：辨認與比較

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/7

```json
{
  "kind": "groups",
  "total": 30,
  "cols": 6,
  "solutionCols": 6,
  "description": "30 顆珠子，每串 6 顆，可以剛好串成幾串？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "4 串",
    "5 串",
    "6 串",
    "7 串"
  ],
  "answer": "5 串",
  "hint": "每排放 6 顆，數數看排了幾排。",
  "explain": "30 ÷ 6 = 5，所以可以串成 5 串。"
}
```

</details>

## factors-8

版本：aee14305361f2519118245a61088ba2a00e56b950cc2dd3057751d9d3b77f01f

題目：哪一個數是 28 的因數？

課綱：2-2；先備：乘法表、整數除法與餘數；策略：辨認與比較

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/8

```json
{
  "kind": "groups",
  "total": 28,
  "cols": 5,
  "solutionCols": 7,
  "description": "哪一個數是 28 的因數？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "3",
    "5",
    "7",
    "9"
  ],
  "answer": "7",
  "hint": "把每個選項當成每串顆數，用除法檢查會不會剩下。",
  "explain": "28 = 7 × 4，所以 7 是 28 的因數。"
}
```

</details>

## factors-9

版本：1f714ff394a2b483033f279867f14367dc410577024be9af5ae5621771d9e0d2

題目：18 顆珠子，每串 4 顆，最多做成幾串完整的手鍊？

課綱：2-1；先備：乘法表、整數除法與餘數；策略：數值推理

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/9

```json
{
  "kind": "groups",
  "total": 18,
  "cols": 4,
  "solutionCols": 4,
  "description": "18 顆珠子，每串 4 顆，最多做成幾串完整的手鍊？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "4",
  "hint": "最後不滿 4 顆的一排，不能算成一串完整的手鍊。",
  "explain": "18 ÷ 4 = 4 餘 2，所以能做 4 串，剩下 2 顆。"
}
```

</details>

## factors-10

版本：f09b236ab76d023e53d1a70eefe8aa17406f304ac67c20a125cfdfb07818be82

題目：哪一組完整列出了 10 的所有因數？

課綱：2-2；先備：乘法表、整數除法與餘數；策略：辨認與比較

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/10

```json
{
  "kind": "groups",
  "total": 10,
  "cols": 3,
  "solutionCols": 5,
  "description": "哪一組完整列出了 10 的所有因數？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "1、2、5、10",
    "2、5、10",
    "1、2、3、5、10",
    "1、5、10"
  ],
  "answer": "1、2、5、10",
  "hint": "從 1 × 10 開始，再找另一組乘積是 10 的數。",
  "explain": "10 = 1 × 10 = 2 × 5，所以所有因數是 1、2、5、10。"
}
```

</details>

## factors-11

版本：c953c4724cc80bf32d9b1a73453422249317330f52cc6cc60cc1590b0c5c087e

題目：18和24的最大公因數是多少？

課綱：2-3；先備：乘法表、整數除法與餘數；策略：數值推理

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/11

```json
{
  "kind": "cards",
  "description": "比較18與24的因數。",
  "items": [
    "18",
    "24"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "6",
  "hint": "列出兩個數的因數，找共同且最大的。",
  "explain": "共同因數有1、2、3、6，最大是6。"
}
```

</details>

## factors-12

版本：e1c211ca48cf1c4580be4cd88d0c21a41d90ffd390fbdd90766908bac13d24e6

題目：4和6的最小公倍數是多少？

課綱：2-4 / 2-5；先備：乘法表、整數除法與餘數；策略：數值推理

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/12

```json
{
  "kind": "cards",
  "description": "比較4與6的倍數。",
  "items": [
    "4、8、12…",
    "6、12、18…"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "12",
  "hint": "列出4與6的正倍數。",
  "explain": "4的倍數4、8、12；6的倍數6、12，最小公倍數是12。"
}
```

</details>

## factors-13

版本：c868c0305302e379959cb027e73b17ac89a489cba358bada6cf467e40f5f0bc5

題目：24個積木，每排6個。

課綱：2-1；先備：乘法表、整數除法與餘數；策略：分步推理

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/13

```json
{
  "kind": "groups",
  "description": "24個圓點，每排6個。",
  "total": 24,
  "cols": 6,
  "solutionCols": 6
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "24÷6＝4，餘數0。"
}
```

</details>

## factors-14

版本：d51352fb1f86500bac544d72d6f45f0cecad877d619407706dedbede38ea69a5

題目：小光說「5是18的因數」。算出18÷5的餘數，檢查他的說法。

課綱：2-1；先備：乘法表、整數除法與餘數；策略：找錯

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/14

```json
{
  "kind": "cards",
  "description": "18個物品，每組5個。",
  "items": [
    "18 ÷ 5",
    "有沒有剩下？"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3",
  "hint": "因數必須整除，不能有餘數。",
  "explain": "18÷5＝3餘3，所以5不是18的因數。"
}
```

</details>

## factors-game-1

版本：2b26fea4698764fceca8d43bce0d8dd6e7753692decb856e0b6575d2c440c8ce

題目：有 12 個小物，每袋要一樣多，而且不能剩下。試試分袋機，收集所有能剛好分完的「每袋個數」。

課綱：2-2；先備：乘法表、整數除法與餘數；策略：因數探索

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/15

```json
{
  "kind": "groups",
  "total": 12
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "每袋個數 × 袋數，要剛好等於總數。1 個一袋也可以喔。",
  "explain": "12 的因數，就是所有能把 12 個物品剛好分完的每袋個數。"
}
```

</details>

## factors-game-2

版本：2fd3ca59e1bc546ab69c8ccb7087e038f3cea928d07868656155a6fcb6a42817

題目：有 18 個小物，每袋要一樣多，而且不能剩下。試試分袋機，收集所有能剛好分完的「每袋個數」。

課綱：2-2；先備：乘法表、整數除法與餘數；策略：因數探索

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/16

```json
{
  "kind": "groups",
  "total": 18
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "每袋個數 × 袋數，要剛好等於總數。1 個一袋也可以喔。",
  "explain": "18 的因數，就是所有能把 18 個物品剛好分完的每袋個數。"
}
```

</details>

## factors-game-3

版本：410b4b772de9beff0b15b8e521a28dfe2f7626ae737da8749c19bdd4a6ec49cd

題目：有 24 個小物，每袋要一樣多，而且不能剩下。試試分袋機，收集所有能剛好分完的「每袋個數」。

課綱：2-2；先備：乘法表、整數除法與餘數；策略：因數探索

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/17

```json
{
  "kind": "groups",
  "total": 24
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "每袋個數 × 袋數，要剛好等於總數。1 個一袋也可以喔。",
  "explain": "24 的因數，就是所有能把 24 個物品剛好分完的每袋個數。"
}
```

</details>

## factors-review-1

版本：e07a13a9cf8381296c4b85ec5080685b9c85016ed35d00ce432c4b5c2ca669e4

題目：145、230、312，哪個數同時是 2、5 和 10 的倍數？

課綱：2-4 / 2-6；先備：乘法表、整數除法與餘數；策略：辨認與比較

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/18

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "145",
    "230",
    "312"
  ],
  "answer": "230",
  "hint": "看看個位數，先想什麼數可以被 10 整除。",
  "explain": "230 個位數為 0，同時可被 2、5、10 整除。"
}
```

</details>

## factors-review-2

版本：4b7c2dfdb9c2339fe83ad74d8c48fb7374655defd731966fb1243c6cb0b736a9

題目：紅燈每 4 秒閃一次，綠燈每 6 秒閃一次。現在一起閃，至少再過幾秒會一起閃？

課綱：2-5；先備：乘法表、整數除法與餘數；策略：數值推理

自查：基本因數練習搭配生活餘數與公因倍數；同策略題標成加強練習。

畫面：http://127.0.0.1:5175/#practice/factors/19

```json
{
  "kind": "cards",
  "items": [
    "紅燈：每 4 秒",
    "綠燈：每 6 秒"
  ],
  "description": "兩燈現在一起閃，找下一次同時閃亮。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "12",
  "hint": "列出兩盞燈接下來閃亮的秒數，找最早相同的一次。",
  "explain": "4 的倍數：4、8、12；6 的倍數：6、12；再過 12 秒。"
}
```

</details>

## angles-1

版本：2d4f9dc5c3172693aaca3cb1d8692d2ef7e8f07eb0919610f7fb3b0a2aab700b

題目：圖中兩個角是 50° 和 60°，神祕角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/1

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "60°",
    "70°",
    "80°",
    "90°"
  ],
  "answer": "70°",
  "hint": "先把已知的兩個角相加，再從 180° 扣掉。",
  "explain": "50° + 60° = 110°；180° − 110° = 70°。"
}
```

</details>

## angles-2

版本：63f628baccb9a9ace0b178e9e7183c94d79e765db4fbd501591cc704f8516f12

題目：兩個內角是 40° 和 80°，剩下的角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/2

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "60",
  "hint": "三個內角合起來是 180°。",
  "explain": "40° + 80° = 120°；180° − 120° = 60°。"
}
```

</details>

## angles-3

版本：653fb4e2760dfe2a28047ec49b1b5d01142eae431812082f0cdf92acd49eca84

題目：這個直角三角形有一個角是 35°，另一個銳角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/3

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "55",
  "hint": "小方框代表 90°。另外兩個角合起來是 90°。",
  "explain": "180° − 90° − 35° = 55°。"
}
```

</details>

## angles-4

版本：8a6675cbb9781593eefb1f070e32b998a5382a1c77105fd8e21694e76e69f4fb

題目：兩個內角分別是 25° 和 45°，未知角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/4

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "70°",
    "90°",
    "100°",
    "110°"
  ],
  "answer": "110°",
  "hint": "未知角可以比 90° 大。先算已知角的總和。",
  "explain": "25° + 45° = 70°；180° − 70° = 110°，這是一個鈍角。"
}
```

</details>

## angles-5

版本：fcaa476d49f61d6818a60d8a1700ab9f091755f4637fc1ea3bd055fcfc9a5358

題目：等腰三角形的頂角是 40°，每一個底角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/5

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "70",
  "hint": "兩條同樣長的邊，對面的兩個底角也相等。扣掉頂角後，平均分成兩份。",
  "explain": "180° − 40° = 140°；140° ÷ 2 = 70°。"
}
```

</details>

## angles-6

版本：6c532c6af4446b49f25344401e25c5d191a9e81120142542d897b6d23f314c3f

題目：等腰三角形的一個底角是 50°，頂角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/6

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "80",
  "hint": "另一個底角也等於 50°。",
  "explain": "180° − 50° − 50° = 80°。"
}
```

</details>

## angles-7

版本：d207aec4c11b3c253002e69cea1261ef2d9aca33f25b8ecf41e0de7310610ab9

題目：正三角形的三個角相等，每一個角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/7

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "45°",
    "60°",
    "90°",
    "180°"
  ],
  "answer": "60°",
  "hint": "把 180° 平均分給三個角。",
  "explain": "180° ÷ 3 = 60°。"
}
```

</details>

## angles-8

版本：7fdb42ae8395b0442baec27fcb2db41edbb213a0aec467940f2c12a6e25f024c

題目：兩個角是 65° 和 55°，神祕角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/8

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "60",
  "hint": "先算 65° + 55°。",
  "explain": "65° + 55° = 120°；180° − 120° = 60°。"
}
```

</details>

## angles-9

版本：4a96cbee885ff369c46a2b5ec88e9c19c159b6a17f5893e7e7f5b058b12219de

題目：等腰直角三角形的兩個銳角相等，每個銳角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/9

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "45",
  "hint": "扣掉 90° 後，剩下的角度平均分成兩份。",
  "explain": "(180° − 90°) ÷ 2 = 45°。"
}
```

</details>

## angles-10

版本：b4d550b20f949dea7827b02d179b49ea6ec717264097dbd8a55846fc0ee9368f

題目：三角形的一個角是 100°，另一個是 30°，最後一個角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/10

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "30°",
    "40°",
    "50°",
    "60°"
  ],
  "answer": "50°",
  "hint": "即使有一個鈍角，三個內角的總和仍是 180°。",
  "explain": "180° − 100° − 30° = 50°。"
}
```

</details>

## angles-11

版本：49715238a6fac28cc43726ad518e0a52ea1b383c75faed782a3b7251f52f2240

題目：四邊形的三個內角是80°、90°、100°，第四個角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/11

```json
{
  "kind": "cards",
  "description": "四邊形四個角依序標記80°、90°、100°和問號。",
  "items": [
    "80°",
    "90°",
    "100°",
    "?"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "90",
  "hint": "四邊形內角和是360°。",
  "explain": "360−80−90−100＝90°。"
}
```

</details>

## angles-12

版本：dab1f403507c5137225ecc2d2bc789a9cd8e3acaa087172b23c96adc9eed4f74

題目：哪組邊長可以圍成三角形？

課綱：3-3；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/12

```json
{
  "kind": "cards",
  "description": "比較三組線段長度。",
  "items": [
    "2、3、6",
    "3、4、5",
    "2、3、5"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "2、3、6公分",
    "3、4、5公分",
    "2、3、5公分"
  ],
  "answer": "3、4、5公分",
  "hint": "最短兩邊相加，必須大於最長邊。",
  "explain": "3＋4＞5；另兩組的短邊和不大於最長邊。"
}
```

</details>

## angles-13

版本：80449c79a874fd234856339fdb6683ddc651ace167aa5e6a583e04ff3fec09d9

題目：正三角形每個內角都相等。

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：分步推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/13

```json
{
  "kind": "angles",
  "description": "三條邊有相同記號，三個內角均標問號。",
  "values": [
    60,
    60,
    60
  ],
  "unknown": 0,
  "equilateral": true
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "180÷3＝60°。"
}
```

</details>

## angles-14

版本：7fa402757c5d10bc5872e3a81dbdd87f3291096b8a2ce5aaf2721c45440dbcd0

題目：小光說三角形已知50°和60°，第三角是110°。改成正確答案。

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：找錯

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/14

```json
{
  "kind": "angles",
  "description": "左下50°、右下60°、頂角問號。",
  "values": [
    50,
    60,
    70
  ],
  "unknown": 2
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "70",
  "hint": "110是兩個已知角的合計。",
  "explain": "還要用180−110＝70°。"
}
```

</details>

## angles-15

版本：561598d8c00df63c1d5626dea6bf91caba6644e4d1da28eb9520efdd20dd93ae

題目：圖中的多邊形有幾條邊？

課綱：3-1；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/15

```json
{
  "kind": "polygon",
  "sides": 5,
  "diagonals": false,
  "description": "沿著圖形外框觀察直線段與相接的頂點。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "5",
  "hint": "沿著外框走一圈，每條直線段只數一次。",
  "explain": "外框共有5條邊，所以是五邊形。"
}
```

</details>

## angles-16

版本：f85a3e644f80fac41688505554c68c26dc14cea4cd66192d32f81751e292e3a4

題目：圖中的多邊形有幾個頂點？

課綱：3-1；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/16

```json
{
  "kind": "polygon",
  "sides": 6,
  "diagonals": false,
  "description": "沿著圖形外框觀察直線段與相接的頂點。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "6",
  "hint": "兩條相鄰邊相接的地方就是頂點。",
  "explain": "六邊形有6條邊，也有6個頂點。"
}
```

</details>

## angles-17

版本：db1b2d631a15c9cc35adda437f96068a16acf24a30f915f279b9ea4dd1695557

題目：怎樣才能確定一個圖形是「正多邊形」？

課綱：3-2；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/17

```json
{
  "kind": "polygon",
  "sides": 5,
  "diagonals": false,
  "description": "5條直線段首尾相接圍成圖形。圖形大小與方向不影響邊數。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "每條邊等長，且每個內角相等",
    "只有每條邊等長",
    "只有每個內角相等"
  ],
  "answer": "每條邊等長，且每個內角相等",
  "hint": "「正」多邊形同時要求邊與角。",
  "explain": "正多邊形必須等邊且等角；只有其中一個條件還不夠。"
}
```

</details>

## angles-18

版本：53d83475b2f3428ee880c3cc22ef6aae9089aea51cdf0fadfda618c3f78040bb

題目：長6公分、寬3公分的長方形，是正多邊形嗎？

課綱：3-2；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/18

```json
{
  "kind": "cards",
  "items": [
    "長方形",
    "長 6 公分",
    "寬 3 公分",
    "四個角都是直角"
  ],
  "description": "長方形；長 6 公分；寬 3 公分；四個角都是直角"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "是，四個角相等就可以",
    "不是，四條邊並非全等長"
  ],
  "answer": "不是，四條邊並非全等長",
  "hint": "檢查邊長與內角兩個條件。",
  "explain": "四個角都是直角，但6公分與3公分不相等，所以不是正多邊形。"
}
```

</details>

## angles-19

版本：c88116bbe74782cd06d4886c46acebea3a29b870fa1e09d7c5ece214bda83c72

題目：三根棒子長2、3、5公分，能圍成三角形嗎？

課綱：3-3；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/19

```json
{
  "kind": "cards",
  "items": [
    "2 公分",
    "3 公分",
    "5 公分"
  ],
  "description": "2 公分；3 公分；5 公分"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "能",
    "不能"
  ],
  "answer": "不能",
  "hint": "較短兩邊的和，必須大於最長邊。",
  "explain": "2＋3＝5，等於最長邊，只會攤平，不能圍成三角形。"
}
```

</details>

## angles-20

版本：f35b8381db2867ce2983bc84d246e599d4ca439a1ea37b64dc58b6f35db791c6

題目：兩邊長4、7公分，第三邊選哪個長度才能圍成三角形？

課綱：3-3；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/20

```json
{
  "kind": "cards",
  "items": [
    "已知邊長 4 公分",
    "已知邊長 7 公分",
    "第三邊？"
  ],
  "description": "已知邊長 4 公分；已知邊長 7 公分；第三邊？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "3公分",
    "8公分",
    "11公分",
    "12公分"
  ],
  "answer": "8公分",
  "hint": "把每個選項當第三邊，檢查任意兩邊和是否大於另一邊。",
  "explain": "4＋7＞8、4＋8＞7、7＋8＞4；3和11會攤平，12太長。"
}
```

</details>

## angles-21

版本：5b6229cfd25d2af93d90345c3d584919f5ba1194e7686c9752b605eb5ffc5a5b

題目：小光說3、4、8公分能圍成三角形。他漏算的較短兩邊合計是多少？

課綱：3-3；先備：直角90度、平角180度、三角形與四邊形；策略：找錯

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/21

```json
{
  "kind": "cards",
  "items": [
    "3 公分",
    "4 公分",
    "8 公分"
  ],
  "description": "3 公分；4 公分；8 公分"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "7",
  "hint": "還要檢查3＋4是否大於8。",
  "explain": "3＋4＝7，小於8，不能圍成；不能只檢查其中一組。"
}
```

</details>

## angles-22

版本：dfe2161b32ac306b8a3da6121aada5e93b114efe26b35aacbfcadfbb4b2b13db

題目：直角三角形的另外兩個內角合計是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/22

```json
{
  "kind": "angles",
  "values": [
    30,
    60,
    90
  ],
  "unknown": 0
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "45°",
    "90°",
    "180°"
  ],
  "answer": "90°",
  "hint": "先從內角和扣掉直角。",
  "explain": "180°−90°＝90°。"
}
```

</details>

## angles-23

版本：4d5b8a399c77d2e3ef89d9e8b0c6b361ded6c360f3fa12725b11f4fba3b738b5

題目：兩個角是48°和67°，第三個角是多少？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/23

```json
{
  "kind": "angles",
  "values": [
    48,
    67,
    65
  ],
  "unknown": 2
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "65",
  "hint": "先加已知角，再用180°減掉它們。",
  "explain": "48＋67＝115；180−115＝65°。"
}
```

</details>

## angles-24

版本：aafa4f2abdeb2bbc9b9f769f237a38786ec4c61269fef6649c71dcc0191bd77e

題目：三角形兩個角是72°和38°，分兩步求第三個角。

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：分步推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/24

```json
{
  "kind": "angles",
  "values": [
    72,
    38,
    70
  ],
  "unknown": 2
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "72＋38＝110；180−110＝70°。"
}
```

</details>

## angles-25

版本：cf8c74350edd4fc5bfd43faed610b025f706d9c94e2e7bcd768a1d28034c1e17

題目：三角形可以有兩個直角嗎？

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/25

```json
{
  "kind": "cards",
  "items": [
    "直角 90°",
    "直角 90°",
    "第三角必須大於 0°"
  ],
  "description": "直角 90°；直角 90°；第三角必須大於 0°"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "可以",
    "不可以"
  ],
  "answer": "不可以",
  "hint": "兩個直角相加後，還能留下第三個角嗎？",
  "explain": "90＋90＝180，第三個角將是0°，無法形成三角形。"
}
```

</details>

## angles-26

版本：44a42a965f241686fb438ff777b13ef625513aa18303ccfa0a9b8b284e524184

題目：某三角形的角是30°、40°、110°，按角來分是哪一種？

課綱：3-1；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/26

```json
{
  "kind": "angles",
  "values": [
    30,
    40,
    110
  ],
  "unknown": null
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "銳角三角形",
    "直角三角形",
    "鈍角三角形"
  ],
  "answer": "鈍角三角形",
  "hint": "看最大的角與90°相比如何。",
  "explain": "110°大於90°，所以是鈍角三角形。"
}
```

</details>

## angles-27

版本：7adaddd026e4b12d3300195abb768f42703bad9d42a2907511f73e3a512e3255

題目：等腰三角形的頂角是100°，每個底角是多少？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/27

```json
{
  "kind": "angles",
  "values": [
    40,
    40,
    100
  ],
  "unknown": 0,
  "isosceles": true
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "40",
  "hint": "先扣掉頂角，再把剩餘角度平分。",
  "explain": "(180−100)÷2＝40°。"
}
```

</details>

## angles-28

版本：7b948c0200e8717b34511f252103c2bdc0a512aedc38ba7aa6b7d8f6a653aff8

題目：等腰三角形頂角是36°，求每一個底角。

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：分步推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/28

```json
{
  "kind": "angles",
  "values": [
    72,
    72,
    36
  ],
  "unknown": 0,
  "isosceles": true
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "180−36＝144；144÷2＝72°。"
}
```

</details>

## angles-29

版本：0c21f6ede676eed9656c47228c9510b8df8e051801437486aaf4c1cd0ac22970

題目：等腰三角形的一個底角是65°，頂角是多少？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/29

```json
{
  "kind": "angles",
  "values": [
    65,
    65,
    50
  ],
  "unknown": 2,
  "isosceles": true
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "50",
  "hint": "另一個底角也是65°。",
  "explain": "180−65×2＝50°。"
}
```

</details>

## angles-30

版本：9df2d8a1068cefc06e1d4238af9f5a26c10cd40780862edf2d2a4ea0b446bd6e

題目：小光計算等腰三角形的底角。正確的每個底角是多少？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：找錯

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/30

```json
{
  "kind": "angles",
  "values": [
    50,
    50,
    80
  ],
  "unknown": 0,
  "isosceles": true
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "50",
  "hint": "100°是兩個底角的總和，還要平分。",
  "explain": "(180−80)÷2＝50°。"
}
```

</details>

## angles-31

版本：84cc14bcc987a6810dc6f67312b12d73638480c7ce476d4372957b6bd4d708e1

題目：等腰三角形有一個 100° 的角。為什麼它不可能是底角？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/31

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "另一個底角也會是 100°，兩角已超過 180°",
    "所有三角形的底角都必須是 60°",
    "底角一定比頂角小"
  ],
  "answer": "另一個底角也會是 100°，兩角已超過 180°",
  "hint": "如果底角是100°，另一個底角也會是100°。",
  "explain": "兩個100°已超過180°，所以100°只能是頂角。"
}
```

</details>

## angles-32

版本：dd86614ebd85903d7d58efed1ff996b5b7caba788b4011bf1a672f185f82ecf3

題目：直角三角形的一個銳角是28°，另一個銳角是多少？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/32

```json
{
  "kind": "angles",
  "values": [
    90,
    28,
    62
  ],
  "unknown": 2
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "62",
  "hint": "兩個銳角合計90°。",
  "explain": "90−28＝62°。"
}
```

</details>

## angles-33

版本：fd7e3c4bd1ab10b01113910a7556735e906def77b2a0855de7afd3ea3eb452cd

題目：三角形彩旗有兩個角各為55°，第三個角是多少？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/33

```json
{
  "kind": "angles",
  "values": [
    55,
    55,
    70
  ],
  "unknown": 2,
  "isosceles": true
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "70",
  "hint": "相等的兩個角都要扣掉。",
  "explain": "180−55−55＝70°。"
}
```

</details>

## angles-34

版本：173aaa2eff627767cbb8838640e1050e6e1b2c3f584a6224577b92cb2e76b153

題目：沿圖中的對角線，四邊形被分成幾個三角形？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/34

```json
{
  "kind": "polygon",
  "sides": 4,
  "diagonals": true,
  "description": "4條直線段首尾相接圍成圖形。從同一頂點畫出對角線。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "2",
  "hint": "數一數對角線兩側的區塊。",
  "explain": "一條對角線把四邊形分成2個三角形。"
}
```

</details>

## angles-35

版本：405b702fca40918593e3902aa78aa7befffe42a1ea9188a95ec4b3d58fe67c31

題目：用切成三角形的方法，求四邊形的內角和。

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：分步推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/35

```json
{
  "kind": "polygon",
  "sides": 4,
  "diagonals": true,
  "description": "4條直線段首尾相接圍成圖形。從同一頂點畫出對角線。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "四邊形分成2個三角形，180×2＝360°。"
}
```

</details>

## angles-36

版本：40b7fda233e247707a0e4f515e7b89ef37f9310ddaff92cbc49a1fb1a4ebf00b

題目：四邊形的三個內角是75°、85°、110°，第四個是多少？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/36

```json
{
  "kind": "cards",
  "items": [
    "四邊形",
    "75°",
    "85°",
    "110°",
    "？"
  ],
  "description": "四邊形；75°；85°；110°；？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "90",
  "hint": "四邊形內角和是360°。",
  "explain": "75＋85＋110＝270；360−270＝90°。"
}
```

</details>

## angles-37

版本：d130483ccd6d037a0d8529c3b9b816ec72fcfa9a3a5063cdb793e2dad3459ea6

題目：四邊形有三個直角，第四個角是多少？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：數值推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/37

```json
{
  "kind": "cards",
  "items": [
    "四邊形",
    "90°",
    "90°",
    "90°",
    "？"
  ],
  "description": "四邊形；90°；90°；90°；？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "90",
  "hint": "先算三個直角一共幾度。",
  "explain": "360−90×3＝90°。"
}
```

</details>

## angles-38

版本：e42e2211ecb444a9e9022ab3c8a5ea641e31f27ab5a7d6be7c6955bfe6dc2eec

題目：小光求四邊形的第四角，應改成多少度？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：找錯

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/38

```json
{
  "kind": "cards",
  "items": [
    "四邊形",
    "70°",
    "80°",
    "100°",
    "？"
  ],
  "description": "四邊形；70°；80°；100°；？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "110",
  "hint": "小光用錯了哪種圖形的內角和？",
  "explain": "應用四邊形的360°：360−70−80−100＝110°。"
}
```

</details>

## angles-39

版本：1597bee491d4acee042e9c73510e412b1e03457d770a1faed99a24e44f30a731

題目：把三角形旋轉方向或放大，內角和會改變嗎？

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：辨認與比較

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/39

```json
{
  "kind": "angles",
  "values": [
    50,
    60,
    70
  ],
  "unknown": null
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "會，圖形越大內角和越大",
    "不會，仍然是180°"
  ],
  "answer": "不會，仍然是180°",
  "hint": "邊的方向和長短改變，不會改變三角形的內角和。",
  "explain": "所有三角形內角和都是180°，與大小和放置方向無關。"
}
```

</details>

## angles-40

版本：735566a91565415811e3ea16e610278d8e6a41b6fd733cf38576532fb6f12df7

題目：兩個風箏都少了角度標籤！三角形已知 40°、60°；四邊形已知 80°、90°、100°。各補上缺少的角度。

課綱：3-5；先備：直角90度、平角180度、三角形與四邊形；策略：分步推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/40

```json
{
  "kind": "cards",
  "items": [
    "三角形：40°、60°、？",
    "四邊形：80°、90°、100°、？"
  ],
  "description": "三角形：40°、60°、？；四邊形：80°、90°、100°、？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "三角形：180−40−60＝80°；四邊形：360−80−90−100＝90°。"
}
```

</details>

## angles-game-1

版本：caab94eeaf2ce2f393043c201086c53a29b3fc5a9aac745aa891df79c30f3c9c

題目：選出三片角度拼圖，放進三個空位。讓它們剛好拼成 180° 的平角。

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：角度組合

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/41

```json
{
  "kind": "angles",
  "pieces": [
    50,
    60,
    70,
    90
  ],
  "count": 3,
  "target": 180
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "看拼圖下方的角度合計。超過 180° 時，可以換一片比較小的。",
  "explain": "三片角不重疊地拼成平角，就是三角形內角和 180° 的意思。"
}
```

</details>

## angles-game-2

版本：b5ca337932a3611a18dc9be26610affa7b321419e88c5924143dd3798b11dfff

題目：選出三片角度拼圖，放進三個空位。讓它們剛好拼成 180° 的平角。

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：角度組合

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/42

```json
{
  "kind": "angles",
  "pieces": [
    45,
    45,
    90,
    60
  ],
  "count": 3,
  "target": 180
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "看拼圖下方的角度合計。超過 180° 時，可以換一片比較小的。",
  "explain": "三片角不重疊地拼成平角，就是三角形內角和 180° 的意思。"
}
```

</details>

## angles-game-3

版本：8ac025d43cb6b29456d3a4a74ed8d0e0c6b55716c09d9f3a8c7f53d9258d208d

題目：選出三片角度拼圖，放進三個空位。讓它們剛好拼成 180° 的平角。

課綱：3-4；先備：直角90度、平角180度、三角形與四邊形；策略：角度組合

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/43

```json
{
  "kind": "angles",
  "pieces": [
    40,
    60,
    80,
    100
  ],
  "count": 3,
  "target": 180
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "看拼圖下方的角度合計。超過 180° 時，可以換一片比較小的。",
  "explain": "三片角不重疊地拼成平角，就是三角形內角和 180° 的意思。"
}
```

</details>

## angles-review-1

版本：90e777c1aec78634aa0c8598010bea8e5afd9e8bd125c33c2acb9de7fdb9c259

題目：從同一頂點畫對角線，把這個5邊形分成三角形。內角和是多少？

課綱：3-4 / 3-5；先備：直角90度、平角180度、三角形與四邊形；策略：分步推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/44

```json
{
  "kind": "polygon",
  "sides": 5,
  "diagonals": true,
  "description": "從同一頂點畫出不相交的對角線，數一數三角形區塊。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "hint": "數出分成幾個三角形，每個三角形內角和是 180°。",
  "explain": "分成 3 個三角形，3×180＝540°。"
}
```

</details>

## angles-review-2

版本：43292c654bfd9f649b1db6fd5e7cdabaa53dc2e87266ab543c039c436341d8b5

題目：從同一頂點畫對角線，把這個6邊形分成三角形。內角和是多少？

課綱：3-4 / 3-5；先備：直角90度、平角180度、三角形與四邊形；策略：分步推理

自查：簡單內角計算屬基本練習；等腰、逆推、五六邊形內角和應在理解分割後進行。

畫面：http://127.0.0.1:5175/#practice/angles/45

```json
{
  "kind": "polygon",
  "sides": 6,
  "diagonals": true,
  "description": "從同一頂點畫出不相交的對角線，數一數三角形區塊。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "hint": "數出分成幾個三角形，每個三角形內角和是 180°。",
  "explain": "分成 4 個三角形，4×180＝720°。"
}
```

</details>

## fractions-1

版本：2872ce2e833a5ddf0763d3d41e3e80c07a1a84a024434548cf68f8d89239a34c

題目：哪一個分數和 1/2 一樣大？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/1

```json
{
  "kind": "fraction",
  "numerator": 1,
  "denominator": 2,
  "targetDenominator": 4,
  "description": "哪一個分數和 1/2 一樣大？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "1/4",
    "2/4",
    "3/4",
    "2/3"
  ],
  "answer": "2/4",
  "hint": "把每一份再切成相同的小份，總份量會變嗎？",
  "explain": "1 × 2 = 2，2 × 2 = 4，所以 1/2 = 2/4。"
}
```

</details>

## fractions-2

版本：5d14fd78d4340b494216f47a132f42a11a04fb2229dd48518a1accc77150a877

題目：2/3 擴分成分母是 12 的分數，分子是多少？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/2

```json
{
  "kind": "fraction",
  "numerator": 2,
  "denominator": 3,
  "targetDenominator": 12,
  "description": "2/3 擴分成分母是 12 的分數，分子是多少？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "8",
  "hint": "3 要乘幾才是 12？分子也要乘相同的數。",
  "explain": "3 × 4 = 12，2 × 4 = 8，所以 2/3 = 8/12。"
}
```

</details>

## fractions-3

版本：61288c8fb932fb815844887ec500caecfce1a7b92c2f8b2f5bb804a4e83dd189

題目：6/8 的分子和分母都除以 2，得到哪一個分數？

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/3

```json
{
  "kind": "fraction",
  "numerator": 6,
  "denominator": 8,
  "targetDenominator": 4,
  "description": "6/8 的分子和分母都除以 2，得到哪一個分數？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3/4",
  "hint": "分子、分母都除以 2，兩個位置都要改。",
  "explain": "6 ÷ 2 = 3，8 ÷ 2 = 4，所以 6/8 = 3/4，大小不變。"
}
```

</details>

## fractions-4

版本：f25e88e71f94e1ac6413edc8d1ac65b4a8b61c45619db45d9fd2cc163dd89ac2

題目：哪一個分數與 3/4 一樣大？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/4

```json
{
  "kind": "fraction",
  "numerator": 3,
  "denominator": 4,
  "targetDenominator": 8,
  "description": "哪一個分數與 3/4 一樣大？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "3/8",
    "6/8",
    "4/8",
    "7/8"
  ],
  "answer": "6/8",
  "hint": "每一格再切成兩份，分子和分母都乘上 2。",
  "explain": "3/4 = (3 × 2)/(4 × 2) = 6/8。"
}
```

</details>

## fractions-5

版本：1661480ab98043ddf76a4073285dc27f40c9491d987d338e31bd4e33a52c4b54

題目：1/3 擴分成分母是 9 的分數，分子是多少？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/5

```json
{
  "kind": "fraction",
  "numerator": 1,
  "denominator": 3,
  "targetDenominator": 9,
  "description": "1/3 擴分成分母是 9 的分數，分子是多少？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3",
  "hint": "3 × 幾 = 9？分子也要乘上同樣的數。",
  "explain": "分子、分母同乘 3，所以 1/3 = 3/9。"
}
```

</details>

## fractions-6

版本：467789cef6534b4c21d45aba8b72a3757c7fe868528d5a702930aabcab98d47b

題目：4/6 約成分母是 3 的分數，會得到什麼？

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/6

```json
{
  "kind": "fraction",
  "numerator": 4,
  "denominator": 6,
  "targetDenominator": 3,
  "description": "4/6 約成分母是 3 的分數，會得到什麼？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "2/3",
  "hint": "每兩小格合成一大格，分子和分母都除以 2。",
  "explain": "4 ÷ 2 = 2，6 ÷ 2 = 3，所以 4/6 = 2/3。"
}
```

</details>

## fractions-7

版本：e24d68ff6351415e156b51fd6cbe86a414363c7b5c09dfca3c48aa2ae155eecb

題目：2/5 擴分成分母是 10 的分數，分子是多少？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/7

```json
{
  "kind": "fraction",
  "numerator": 2,
  "denominator": 5,
  "targetDenominator": 10,
  "description": "2/5 擴分成分母是 10 的分數，分子是多少？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "2",
    "3",
    "4",
    "5"
  ],
  "answer": "4",
  "hint": "一個五分之一，可以分成兩個十分之一。",
  "explain": "分子、分母同乘 2，2/5 = 4/10。"
}
```

</details>

## fractions-8

版本：ebb7c5eaada7db6fc4977d2ef8481c413311cbd5910d0f4234031005ce074603

題目：9/12 約成分母是 4 的分數，會得到什麼？

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/8

```json
{
  "kind": "fraction",
  "numerator": 9,
  "denominator": 12,
  "targetDenominator": 4,
  "description": "9/12 約成分母是 4 的分數，會得到什麼？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3/4",
  "hint": "每三小格合成一大格。",
  "explain": "9 ÷ 3 = 3，12 ÷ 3 = 4，所以 9/12 = 3/4。"
}
```

</details>

## fractions-9

版本：51337766937271bfb18772f7371c18c3d514ad055ce1833146c86fd27b9718b4

題目：3/5 擴分成分母是 15 的分數，分子是多少？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/9

```json
{
  "kind": "fraction",
  "numerator": 3,
  "denominator": 5,
  "targetDenominator": 15,
  "description": "3/5 擴分成分母是 15 的分數，分子是多少？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "9",
  "hint": "5 × 3 = 15，分子也要乘 3。",
  "explain": "3 × 3 = 9，所以 3/5 = 9/15。"
}
```

</details>

## fractions-10

版本：68e6f4059d3ca964fbf0be0397b296c94697bc1c03961a7c4a3ca0925ce702ec

題目：5/10 約成分母是 2 的分數，會得到什麼？

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/10

```json
{
  "kind": "fraction",
  "numerator": 5,
  "denominator": 10,
  "targetDenominator": 2,
  "description": "5/10 約成分母是 2 的分數，會得到什麼？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "1/2",
    "2/2",
    "3/2",
    "5/2"
  ],
  "answer": "1/2",
  "hint": "把五個小格合成一大格。",
  "explain": "5 ÷ 5 = 1，10 ÷ 5 = 2，所以 5/10 = 1/2。"
}
```

</details>

## fractions-11

版本：b72ec1b0ea846b5175e6c395105a4e0992ec7ddd143e0f681bb03a7cd03f211c

題目：把6/8約分成分母為4的分數，分子是多少？

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/11

```json
{
  "kind": "fraction",
  "description": "8等份著色6份，改為4等份。",
  "numerator": 6,
  "denominator": 8,
  "targetDenominator": 4
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3",
  "hint": "分母8÷2＝4，分子也要÷2。",
  "explain": "6÷2＝3，所以6/8＝3/4。"
}
```

</details>

## fractions-12

版本：8c26fa48fdcf56ab16ef1163438f7b886d0f9c7697d227a361901e2dc7b2044c

題目：將1/2與1/3通分成分母6。

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：分步推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/12

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "1/2＝3/6；1/3＝2/6。"
}
```

</details>

## fractions-13

版本：143cd68707480f6543b6243a6fedae0d871122f522dee85786080f2c58ae3563

題目：3/4與2/3，哪個較大？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/13

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "3/4",
    "2/3",
    "一樣大"
  ],
  "answer": "3/4",
  "hint": "通分成十二分之幾。",
  "explain": "3/4＝9/12，2/3＝8/12，所以3/4較大。"
}
```

</details>

## fractions-14

版本：b69a8f5b3e9806b2cbf6ee0394762d7d3afa2f22e098e30851b6b3f0d9a26f64

題目：小光把2/3擴分成4/3。若分子變4，正確分母是多少？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：找錯

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/14

```json
{
  "kind": "fraction",
  "description": "一個整體分成 3 等份，著色 2 份。要改成分子為 4 的等值分數。",
  "numerator": 2,
  "denominator": 3,
  "targetDenominator": 6
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "6",
  "hint": "分子乘2，分母也要乘2。",
  "explain": "3×2＝6，所以2/3＝4/6。"
}
```

</details>

## fractions-15

版本：5a7d5da778cd409b2c99e04a4ba67f0af95d9a880d21c3c8dbf23794ce1fc489

題目：3/7擴分成分母21，分子是多少？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/15

```json
{
  "kind": "fraction",
  "numerator": 3,
  "denominator": 7,
  "targetDenominator": 21
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "9",
  "hint": "7乘幾會變21？分子也乘同一個數。",
  "explain": "21÷7＝3；3×3＝9，所以是9/21。"
}
```

</details>

## fractions-16

版本：fe84c270d9930b11d69da5f291485e35774926ae7f858027aa7399c97205503f

題目：把4/5擴分成分母20。

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：分步推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/16

```json
{
  "kind": "fraction",
  "numerator": 4,
  "denominator": 5,
  "targetDenominator": 20
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "分子分母同乘4，得到16/20。"
}
```

</details>

## fractions-17

版本：a79885f6c0023ff66aa9a530ff96e6ef9033375c3b1bfdfcb7744171deeac0a0

題目：5/8擴分後的分子是15，分母是多少？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/17

```json
{
  "kind": "fraction",
  "numerator": 5,
  "denominator": 8,
  "targetDenominator": 24
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "24",
  "hint": "分子從5到15乘了幾倍？",
  "explain": "15÷5＝3；8×3＝24，所以是15/24。"
}
```

</details>

## fractions-18

版本：87c421e9beed05a577864d26eb06e0e3c57c1f813653cb9b3b12e681da22e974

題目：哪一個變化保持2/5的大小不變？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/18

```json
{
  "kind": "fraction",
  "numerator": 2,
  "denominator": 5,
  "targetDenominator": 15
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "分子分母都加2",
    "分子分母都乘3",
    "只有分母乘3"
  ],
  "answer": "分子分母都乘3",
  "hint": "擴分需要分子和分母同乘一個非零整數。",
  "explain": "2/5＝6/15；同加或只改一項通常會改變大小。"
}
```

</details>

## fractions-19

版本：eb343de76c8cfb361475ac180a4f4f0c5f46ab6cf6358b5c3ba6df83a35cec0a

題目：小光的擴分錯了。若要變成分母12，正確分子是多少？

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：找錯

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/19

```json
{
  "kind": "fraction",
  "numerator": 3,
  "denominator": 4,
  "targetDenominator": 12
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "9",
  "hint": "擴分應該乘同一個數，不能同加。",
  "explain": "4×3＝12，3×3＝9，正確是9/12。"
}
```

</details>

## fractions-20

版本：43de94b4286431bdcdd988dfd650fa140f5ee9f2676faed31d01327ba508fde5

題目：把12/18約成最簡分數。

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/20

```json
{
  "kind": "fraction",
  "numerator": 12,
  "denominator": 18,
  "targetDenominator": 3
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "2/3",
  "hint": "找12與18最大的公因數。",
  "explain": "12與18同除以6，得到2/3；2與3只剩公因數1。"
}
```

</details>

## fractions-21

版本：6507d78375dd1a37f35babf6f4e7f2db268219dee64496033d67b9bd9059f082

題目：把15/25約成最簡分數。

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/21

```json
{
  "kind": "fraction",
  "numerator": 15,
  "denominator": 25,
  "targetDenominator": 5
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3/5",
  "hint": "分子分母都能除以5。",
  "explain": "15÷5＝3，25÷5＝5，得到3/5。"
}
```

</details>

## fractions-22

版本：d763c9a632cc7d696c1f06572c6a74417abbc4a743c09c75ad965255d1686107

題目：把18/24約成最簡分數。

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：數值推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/22

```json
{
  "kind": "fraction",
  "numerator": 18,
  "denominator": 24,
  "targetDenominator": 4
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3/4",
  "hint": "可以一次除以最大公因數6。",
  "explain": "18與24同除以6，得到3/4。"
}
```

</details>

## fractions-23

版本：407f02c6efca125f254642761050d06f00b5f853e7a4d48a9b094ac02199a6fb

題目：把20/30約成最簡分數，分開填分子與分母。

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：分步推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/23

```json
{
  "kind": "fraction",
  "numerator": 20,
  "denominator": 30,
  "targetDenominator": 3
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "20÷10＝2，30÷10＝3，得到2/3。"
}
```

</details>

## fractions-24

版本：dccfe10e30564b94f9da3ded76e9f91318bb9d526d045b9ebe3dbdbb0dde1fd7

題目：哪個分數已經是最簡分數？

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/24

```json
{
  "kind": "cards",
  "items": [
    "4/6",
    "5/7",
    "6/9",
    "8/12"
  ],
  "description": "4/6；5/7；6/9；8/12"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "4/6",
    "5/7",
    "6/9",
    "8/12"
  ],
  "answer": "5/7",
  "hint": "檢查分子與分母是否還有大於1的公因數。",
  "explain": "5與7只有公因數1；其他選項都還能約分。"
}
```

</details>

## fractions-25

版本：cc97065788a90575d727077da493cb72256e4937f3596b2ae630f96d958183af

題目：小光只改分子。若分子約成3，正確分母是多少？

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：找錯

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/25

```json
{
  "kind": "fraction",
  "numerator": 9,
  "denominator": 12,
  "targetDenominator": 4
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "4",
  "hint": "分子除以3，分母也要除以3。",
  "explain": "12÷3＝4，正確為3/4。"
}
```

</details>

## fractions-26

版本：9151c0eae94aaa45573e6d95d85d4f6bd06c14a01d15e193456dfe59128802f0

題目：8/12先約成4/6，還能再約分嗎？

課綱：4-2；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/26

```json
{
  "kind": "fraction",
  "numerator": 4,
  "denominator": 6,
  "targetDenominator": 3
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "能，再約成2/3",
    "不能，約分只能做一次"
  ],
  "answer": "能，再約成2/3",
  "hint": "4和6是否還有共同的因數？",
  "explain": "4與6還能同除以2，得到2/3；約分可以分次進行。"
}
```

</details>

## fractions-27

版本：7a204b7e052eb9fcd3b5ce23d1cbff0bc3827679d6ba7730ab4ee152c7ca1fa3

題目：把2/3和3/4通分成分母12。

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：分步推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/27

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "2/3＝8/12；3/4＝9/12。"
}
```

</details>

## fractions-28

版本：566952e4d865feafdbfd4560da583be33ebc0413a360eb7bd62d4ca6808bdddc

題目：把3/5和7/10通分成分母10。

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：分步推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/28

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "3/5＝6/10；7/10保持不變。"
}
```

</details>

## fractions-29

版本：ab290a89a92d7eb9551aefe2773aaca8fc4e9e0ef7f01c3f7d3749d3f9c773e9

題目：把5/6和3/8通分成最小的共同分母24。

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：分步推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/29

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "5/6＝20/24；3/8＝9/24。"
}
```

</details>

## fractions-30

版本：da5dfefc393924d3cc84543dcb51819ff71a21ecda5823f9b2af40d7046701df

題目：1/4與1/6通分，可以共同使用哪個分母？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/30

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "8",
    "10",
    "12"
  ],
  "answer": "12",
  "hint": "共同分母必須是4和6的公倍數。",
  "explain": "12是4和6的公倍數，可通分成3/12與2/12。"
}
```

</details>

## fractions-31

版本：cb717e4acb889a1267b7058d95dfd89850fa66ac75fb8296d086123e29c41dfb

題目：2/3與1/4通分成分母24，可以嗎？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/31

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "可以，共同分母不一定要最小",
    "不可以，只能用12"
  ],
  "answer": "可以，共同分母不一定要最小",
  "hint": "24是不是3和4的公倍數？",
  "explain": "可以：2/3＝16/24，1/4＝6/24；用12通常較省事，但24也正確。"
}
```

</details>

## fractions-32

版本：b686000ee6abf26d8e2861e5ca29835496b7fabaf5d53a1259c5b482709e7802

題目：3/5和5/8，哪個較大？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/32

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "3/5",
    "5/8",
    "一樣大"
  ],
  "answer": "5/8",
  "hint": "通分成40後比較分子。",
  "explain": "3/5＝24/40；5/8＝25/40，所以5/8較大。"
}
```

</details>

## fractions-33

版本：8bf5f018f6bd3ff677dc6fbd6a3bd08be3e3a502ab6c4738f6592a68f7a2a157

題目：5/6和7/9，哪個較大？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/33

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "5/6",
    "7/9",
    "一樣大"
  ],
  "answer": "5/6",
  "hint": "可以通分成18。",
  "explain": "5/6＝15/18；7/9＝14/18，所以5/6較大。"
}
```

</details>

## fractions-34

版本：28b3b15f8c35b514a05bf958547d19ea5636f4bbf9f9cfcd73d51e0c82646eeb

題目：4/6和6/9，哪個較大？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/34

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "4/6",
    "6/9",
    "一樣大"
  ],
  "answer": "一樣大",
  "hint": "試著把兩個分數都約分。",
  "explain": "4/6與6/9都等於2/3，所以一樣大。"
}
```

</details>

## fractions-35

版本：3d79bd044fa53d6400036116088f007a66203e090e931ea01d48407b07feffdb

題目：兩條一樣長的緞帶，取第一條的3/4、第二條的5/8，哪一段較長？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/35

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "第一條的3/4",
    "第二條的5/8",
    "一樣長"
  ],
  "answer": "第一條的3/4",
  "hint": "先把3/4變成分母8。",
  "explain": "3/4＝6/8，大於5/8，所以第一段較長。"
}
```

</details>

## fractions-36

版本：ab8ec38635e05a2b52f17c59a60df379bf2c21430f675559add59e676748a10e

題目：兩個大小不同的披薩，各取 1/2，實際份量會一樣嗎？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/36

```json
{
  "kind": "cards",
  "items": [
    "大披薩取一半",
    "小披薩取一半",
    "整體大小不同"
  ],
  "description": "大披薩取一半；小披薩取一半；整體大小不同"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "一樣，因為都是 1/2",
    "不一樣，大披薩的一半比較多"
  ],
  "answer": "不一樣，大披薩的一半比較多",
  "hint": "分數相同，也要確認「一個整體」是否一樣大。",
  "explain": "同樣取一半，整個披薩較大的那份，實際份量也較多。"
}
```

</details>

## fractions-37

版本：5e76760a9ba30d9799caef3ea2213d117cafe937c4a89df0b59da85ef3f2a445

題目：兩個相同容量的水瓶，甲裝2/3、乙裝5/6。通分成分母6再比較。

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：分步推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/37

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "甲為4/6、乙為5/6，所以乙裝得較多。"
}
```

</details>

## fractions-38

版本：0ef69adb7eb97cb2718823788063a723f6d16c9ff4fa8636f00f657a1e5dbf9b

題目：把1/2、2/3、3/4由小到大排列，哪個正確？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：辨認與比較

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/38

```json
{
  "kind": "cards",
  "items": [
    "1/2",
    "2/3",
    "3/4"
  ],
  "description": "1/2；2/3；3/4"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "1/2 ＜ 2/3 ＜ 3/4",
    "3/4 ＜ 2/3 ＜ 1/2",
    "2/3 ＜ 1/2 ＜ 3/4"
  ],
  "answer": "1/2 ＜ 2/3 ＜ 3/4",
  "hint": "通分成12，分子分別是多少？",
  "explain": "1/2＝6/12，2/3＝8/12，3/4＝9/12。"
}
```

</details>

## fractions-39

版本：12ee6f36c3dd857ee7904c147dfde8ba1b1db8b59bb48f2fb7730ddb42b19664

題目：小光比較分數時出錯了。把3/4通分成分母20，分子應是多少？

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：找錯

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/39

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "15",
  "hint": "答案碰巧對，也要用相同分母來說明。",
  "explain": "3/4＝15/20，4/5＝16/20；要同分母後才能直接比較分子。"
}
```

</details>

## fractions-40

版本：4000b783c9605dd6575fea7d8e7aab8191bb93ea56caa33b939c022e7b6e9fd7

題目：24格巧克力吃了16格。先約分，再改成分母12。

課綱：4-3；先備：分子分母與等份、乘除法和公因數；策略：分步推理

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/40

```json
{
  "kind": "fraction",
  "numerator": 16,
  "denominator": 24,
  "targetDenominator": 12
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "16/24＝2/3＝8/12，吃掉的份量沒有變。"
}
```

</details>

## fractions-game-1

版本：645ddedb7a676ca139fe756c0ca1d5840ad35133191125e61be0024ee44f47e3

題目：上面塗了 1/2，下面是同樣大的整體。請在 8 格裡塗出一樣大的份量。

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：等份塗色

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/41

```json
{
  "kind": "paint",
  "cells": 8,
  "target": 4,
  "reference": [
    1,
    2
  ],
  "label": "塗色格"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "上下兩條一樣長。試著讓塗色的總長度一樣。",
  "explain": "1/2 和 4/8 一樣大；只是每一份切得更小。"
}
```

</details>

## fractions-game-2

版本：f8b00a55b5d621ab022b0ab399a0e75bed736d6464a81c7efecd24e6b96b7956

題目：上面塗了 2/3，下面是同樣大的整體。請在 12 格裡塗出一樣大的份量。

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：等份塗色

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/42

```json
{
  "kind": "paint",
  "cells": 12,
  "target": 8,
  "reference": [
    2,
    3
  ],
  "label": "塗色格"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "上下兩條一樣長。試著讓塗色的總長度一樣。",
  "explain": "2/3 和 8/12 一樣大；只是每一份切得更小。"
}
```

</details>

## fractions-game-3

版本：a8e56d25a5b9734504b1f58036cf5f3424e318892d8e3b1a03713bf5f2f7fb59

題目：上面塗了 3/4，下面是同樣大的整體。請在 12 格裡塗出一樣大的份量。

課綱：4-1；先備：分子分母與等份、乘除法和公因數；策略：等份塗色

自查：指明分母或最簡形式時檢查形式；等值數量問題仍接受等值分數。

畫面：http://127.0.0.1:5175/#practice/fractions/43

```json
{
  "kind": "paint",
  "cells": 12,
  "target": 9,
  "reference": [
    3,
    4
  ],
  "label": "塗色格"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "上下兩條一樣長。試著讓塗色的總長度一樣。",
  "explain": "3/4 和 9/12 一樣大；只是每一份切得更小。"
}
```

</details>

## symmetry-1

版本：2965f5810cfa85cb4fc30d93ad73e5cb6702d558624f8228a6b827d63935076e

題目：A距離對稱軸3格，對稱點A′距離軸幾格？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：鏡射定位

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/1

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3",
  "hint": "對稱點到軸的距離相等。",
  "explain": "左右各3格。"
}
```

</details>

## symmetry-2

版本：6eb78970581eb53116b1b11d53bb8b3df766e922769f71341860c8de4a696b5b

題目：A和A′各距離對稱軸4公分，兩點相距幾公分？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/2

```json
{
  "kind": "symmetry",
  "description": "A與A′在對稱軸兩側、同高，各距離軸4公分。",
  "distance": 4,
  "unit": "公分"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "8",
  "hint": "把軸兩側的距離相加。",
  "explain": "4＋4＝8公分。"
}
```

</details>

## symmetry-3

版本：2e9e63d46211bf74e30e4a6f4682d6ddb01dbab67ff2fa3b3f34d5c4ecd4827c

題目：點P距離對稱軸2格。

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/3

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "兩側各2格，合計4格。"
}
```

</details>

## symmetry-4

版本：e046c1c8fe043f1611be9aa62e6f4b2da177f837b7ed45339d2371caa1a85430

題目：哪個條件能確認一條直線是對稱軸？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/4

```json
{
  "kind": "symmetry",
  "description": "A與A′在垂直對稱軸兩側、同高，各距離軸3格。",
  "distance": 3
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "兩邊面積相等就好",
    "沿線對摺能完全重合",
    "直線一定要垂直"
  ],
  "answer": "沿線對摺能完全重合",
  "hint": "線對稱的重點是完全重合。",
  "explain": "分成等面積不一定能重合。"
}
```

</details>

## symmetry-5

版本：b215cd67cca7079b214c1af9fca8e8de260fbe41c474bdf8e5373b3901961e94

題目：正方形有幾條對稱軸？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/5

```json
{
  "kind": "square",
  "description": "正方形，四邊等長、四角直角。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "4",
  "hint": "試試橫著、直著和沿斜線對摺，哪些能完全重合？",
  "explain": "共4條。"
}
```

</details>

## symmetry-6

版本：727fd833dc70ffe40c8350be03e7174d497054e794f3a8c4843f8810b91476e5

題目：長6公分、寬4公分的長方形有幾條對稱軸？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/6

```json
{
  "kind": "symmetry-shape",
  "shape": "rectangle",
  "description": "長6公分、寬4公分的長方形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "2",
  "hint": "非正方形的長方形，沿對角線不能完全重合。",
  "explain": "只有通過中心的水平與垂直線，共2條。"
}
```

</details>

## symmetry-7

版本：6eba9510dfd7ccaa8fe7339c76dbb1dec281c736ca150a072130d7a042e81ac7

題目：小光把距離軸3格的點，畫在另一側5格處。正確應距離軸幾格？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：找錯

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/7

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3",
  "hint": "兩側的距離必須一樣。",
  "explain": "應在另一側3格。"
}
```

</details>

## symmetry-8

版本：62ec43e412a4775b562144c723af13dc2ceaefb170349534ed8a4e6a445b3b40

題目：一條邊長7公分，它的對稱邊長幾公分？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/8

```json
{
  "kind": "cards",
  "description": "對稱軸兩側的兩條邊互相對應。",
  "items": [
    "這側 7 公分",
    "另一側 ? 公分"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "7",
  "hint": "對稱邊能重合。",
  "explain": "對稱邊長相等，都是7公分。"
}
```

</details>

## symmetry-9

版本：3f89647f3d63fcead162ff94c94f1ce21d2bdae442ab518be2d985d26a176329

題目：把圖形分成面積相等的兩半，就一定是對稱軸嗎？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/9

```json
{
  "kind": "symmetry-shape",
  "shape": "parallelogram",
  "description": "非長方形、非菱形的一般平行四邊形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "一定是",
    "不一定，還要對摺後完全重合"
  ],
  "answer": "不一定，還要對摺後完全重合",
  "hint": "想想兩半形狀是否也必須相同。",
  "explain": "對稱軸兩側要能完全重合；只有面積相等還不夠。"
}
```

</details>

## symmetry-10

版本：0b4dab56e39a045d86668a21dea5ec44d344b3cc53286e47559355970d74148c

題目：正三角形有幾條對稱軸？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/10

```json
{
  "kind": "symmetry-shape",
  "shape": "equilateral",
  "description": "三邊等長的正三角形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3",
  "hint": "試著從每個頂點連向對邊中點。",
  "explain": "每個頂點到對邊中點各有一條，共3條。"
}
```

</details>

## symmetry-11

版本：5c4fba838ede467499576638070412c75f73961a512738887f6eb933ef484dd7

題目：圖中等腰三角形的底邊與腰長不同，它有幾條對稱軸？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/11

```json
{
  "kind": "symmetry-shape",
  "shape": "isosceles",
  "description": "兩腰等長、底邊與腰長不同的等腰三角形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "1",
  "hint": "沿頂角和底邊中點的連線對摺。",
  "explain": "只有頂角到底邊中點的直線能讓兩腰重合，共1條。"
}
```

</details>

## symmetry-12

版本：a02b919587cb94f143c8b9f7bc49d2f42556c4bfa4c77211ed6b65d78c013b85

題目：長與寬不同的長方形，對角線是對稱軸嗎？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/12

```json
{
  "kind": "symmetry-shape",
  "shape": "rectangle",
  "description": "長與寬不同的長方形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "是",
    "不是"
  ],
  "answer": "不是",
  "hint": "對摺後長邊與短邊能完全重合嗎？",
  "explain": "長邊和短邊不同長，沿對角線摺不能完全重合。"
}
```

</details>

## symmetry-13

版本：a8feb03313e00aa4dbc867b9d4d9b7a5d62e3abe76dd3fb90506c07ab0ae0a0a

題目：一般平行四邊形（不是長方形，也不是菱形）是線對稱圖形嗎？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/13

```json
{
  "kind": "symmetry-shape",
  "shape": "parallelogram",
  "description": "非長方形、非菱形的一般平行四邊形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "是",
    "不是"
  ],
  "answer": "不是",
  "hint": "試著找一條能對摺後完全重合的直線。",
  "explain": "這種平行四邊形沒有對稱軸；旋轉後重合不等於線對稱。"
}
```

</details>

## symmetry-14

版本：fa202a3317e473b174fcafd952a0673ae9347f912c1303c50b27849616f28f29

題目：圓的哪一種直線是對稱軸？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/14

```json
{
  "kind": "symmetry-shape",
  "shape": "circle",
  "description": "圓形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "任何通過圓心的直線",
    "只碰到圓邊的直線",
    "只有垂直通過圓心的一條"
  ],
  "answer": "任何通過圓心的直線",
  "hint": "沿直徑對摺，兩個半圓會怎樣？",
  "explain": "任何通過圓心的直線都能讓兩半圓完全重合。"
}
```

</details>

## symmetry-15

版本：c54d568c429745a5c7c70e839e57b7802ba7200192a130eecc7941d0d1bfbc7f

題目：把線對稱圖形斜著放，它還是線對稱圖形嗎？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/15

```json
{
  "kind": "symmetry-shape",
  "shape": "square",
  "description": "正方形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "是，對稱軸跟著轉動",
    "不是，對稱軸只能直立"
  ],
  "answer": "是，對稱軸跟著轉動",
  "hint": "判斷條件是完全重合，不是擺放方向。",
  "explain": "旋轉圖形不改變線對稱性；對稱軸可以是水平、垂直或斜線。"
}
```

</details>

## symmetry-16

版本：401a37809e8c58f41cf74914a1f64c04347c208d49eb7d812c273d766068dd60

題目：小光漏數了正方形的對稱軸。正確共有幾條？

課綱：5-1；先備：對摺重合、格線的欄與列及距離；策略：找錯

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/16

```json
{
  "kind": "symmetry-shape",
  "shape": "square",
  "description": "正方形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "4",
  "hint": "兩條對角線對摺後能不能重合？",
  "explain": "水平、垂直和兩條對角線，共4條。"
}
```

</details>

## symmetry-17

版本：4a18cd3251941d86d8b1607adc7314684964921a5b654d65ab8c83054cc65dfd

題目：點P恰好在對稱軸上，它的對稱點在哪裡？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/17

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "仍在P的位置",
    "一定在左側",
    "一定在右側"
  ],
  "answer": "仍在P的位置",
  "hint": "軸上的點對摺時位置會變嗎？",
  "explain": "軸上的點不移動，對稱點就是自己。"
}
```

</details>

## symmetry-18

版本：8123e4bfc7ffc8e60a1d4a977c321def9bbc6f8b2164b408d04e7411ad38c981

題目：一對對稱點相距10公分，對稱軸在正中間。每點距離軸幾公分？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/18

```json
{
  "kind": "cards",
  "items": [
    "A —— 對稱軸 —— A′",
    "A到A′合計10公分"
  ],
  "description": "A —— 對稱軸 —— A′；A到A′合計10公分"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "5",
  "hint": "兩側距離相等，把總距離平分。",
  "explain": "10÷2＝5公分。"
}
```

</details>

## symmetry-19

版本：62b4d16a9d64a40a2f2aa3596374210842e92ef0d9262c3a1cea97b5302bf01e

題目：一個角是65°，它的對稱角是多少度？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/19

```json
{
  "kind": "cards",
  "items": [
    "角A：65°",
    "對稱角A′：？"
  ],
  "description": "角A：65°；對稱角A′：？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "65",
  "hint": "對稱角摺起來會完全重合。",
  "explain": "對稱角相等，所以也是65°。"
}
```

</details>

## symmetry-20

版本：875bf9a874e96e50e57e4678ef9867ba522c85aef7f5076a322a22bdfdb3a5ad

題目：對稱圖形左側兩段邊長分別為4公分、6公分。右側對應兩段各是多少？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/20

```json
{
  "kind": "cards",
  "items": [
    "左側 AB＝4公分",
    "左側 BC＝6公分",
    "右側 A′B′＝？",
    "右側 B′C′＝？"
  ],
  "description": "左側 AB＝4公分；左側 BC＝6公分；右側 A′B′＝？；右側 B′C′＝？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "對稱邊分別為4公分與6公分，不能交換對應關係。"
}
```

</details>

## symmetry-21

版本：48a11cc781bc795d6302513f2dc0bb54476ed177c3fb9b39b7b99b23f441f609

題目：連接一對不在軸上的對稱點，連線與對稱軸有什麼關係？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/21

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "互相垂直，而且被軸平分",
    "互相平行",
    "可以任意斜交"
  ],
  "answer": "互相垂直，而且被軸平分",
  "hint": "觀察左右對應點到軸的最短距離。",
  "explain": "對稱點連線垂直於對稱軸，軸通過連線中點。"
}
```

</details>

## symmetry-22

版本：e885a3d4f6b98bd7016a89c75c582ba8f9129cbf048c77b827461ac2dd853490

題目：小光說對稱角是原角的兩倍。原角48°，正確對稱角是多少？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：找錯

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/22

```json
{
  "kind": "cards",
  "items": [
    "角A：48°",
    "角A′：待求"
  ],
  "description": "角A：48°；角A′：待求"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "48",
  "hint": "對摺能重合的角，大小應該相同。",
  "explain": "對稱角相等，仍然是48°，不必乘2。"
}
```

</details>

## symmetry-23

版本：26c5053582a19a0f3d4b86c7b5a26ef7884cbc4a374c12b48f9ad12c8be4c329

題目：A與A′互為對稱點，A距軸6公分。

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/23

```json
{
  "kind": "cards",
  "items": [
    "A到軸：6公分",
    "軸到A′：？",
    "A到A′：？"
  ],
  "description": "A到軸：6公分；軸到A′：？；A到A′：？"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "A′距軸6公分；A到A′共6＋6＝12公分。"
}
```

</details>

## symmetry-24

版本：a849bfa0342191b5915fccd9dfdce7cd656b08badd841d083ef2a7b8df2da6c2

題目：對稱點只要離虛線一樣遠，就一定畫對了嗎？

課綱：5-2；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/24

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "一定",
    "不一定，還要在同一條垂線的另一側"
  ],
  "answer": "不一定，還要在同一條垂線的另一側",
  "hint": "只有距離一樣，但點往上移，摺起來會重合嗎？",
  "explain": "對稱點要位於另一側同一條垂線上，不能任意上下移動。"
}
```

</details>

## symmetry-25

版本：469b8e3336e3071a7dc77ab8cda553638f3818f866fa161e46b04f5d33090c0d

題目：把 A 照鏡子：虛線在第 4 欄，A 在第 1 欄、第 2 列。A′ 應在哪裡？

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/25

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "第4欄往右3格是第7欄，高度不變，仍在第2列。"
}
```

</details>

## symmetry-26

版本：34de559537491fae6c86b15cc9e18644790db4e0431e6f492604201208107305

題目：B在第3欄第6列，以第4欄為對稱軸，B′的位置是？

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/26

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "右側1格是第5欄，仍在第6列。"
}
```

</details>

## symmetry-27

版本：ae780cec57dab04e956eea95e49dc539c2bd48d18ef6c46201ef556a0b2c4edc

題目：C在第6欄第3列，以第4欄為對稱軸，C′的位置是？

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/27

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "C在右側2格，C′在左側2格，即第2欄第3列。"
}
```

</details>

## symmetry-28

版本：22c18b92965d5d03e02ee0c5c97a63cd2ae8ad364ae1c6efdb7f791d71637681

題目：對稱軸改成水平的第4列。D在第2欄第1列，D′的位置是？

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/28

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "第1列在軸下3格，對稱點在軸上3格，即第2欄第7列。"
}
```

</details>

## symmetry-29

版本：a7b3f6752a156cbed7f2b9c921f06119e86657b091683eed17372780425cabcd

題目：以第4欄為軸，A在第2欄第2列，B在第1欄第5列。先找對稱點所在的欄。

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/29

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "A′在第6欄第2列，B′在第7欄第5列；把A′和B′連起來就是對稱線段。"
}
```

</details>

## symmetry-30

版本：fba3983c6e8fcd319cdfef604a3a79126939223aecd8c8c96fc4fc9282dfcadf

題目：補畫圖形時，找好A′、B′、C′後，應該怎麼連線？

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/30

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "按照原圖A、B、C的連接順序",
    "照距離遠近隨便連",
    "只連到對稱軸就好"
  ],
  "answer": "按照原圖A、B、C的連接順序",
  "hint": "對稱後相鄰的頂點仍然互相對應。",
  "explain": "依原圖順序連A′B′、B′C′，才能保留圖形的邊與形狀。"
}
```

</details>

## symmetry-31

版本：b1e9e7fe150268e335f5c61f80ee0f84240b7ff68085aa8b9e06198f051a28b2

題目：以第4欄為軸，A在第1欄第3列。小光畫錯了，A′正確的列數是多少？

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：找錯

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/31

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "3",
  "hint": "垂直對稱軸兩側的對稱點要同高。",
  "explain": "A′應在第7欄第3列，不能改變列數。"
}
```

</details>

## symmetry-32

版本：7290e0f51438fc152b5b8d2a4535935e2fef9216d3a25210ee220260dabc62dc

題目：線段A到B都在第2欄，A在第2列、B在第6列。以第4欄為軸補畫。

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/32

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "對稱線段在第6欄，第2列到第6列長4格，與原線段等長。"
}
```

</details>

## symmetry-33

版本：749c1adfdf79a1fd1191f02f0545f2afcf0416fa2b6b443bb5669e4ed0f6b647

題目：紙對摺一次，兩層重合一起剪出圖形。展開後，原來的摺線有什麼作用？

課綱：5-4；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/33

```json
{
  "kind": "paper-fold",
  "cut": "diamond",
  "description": "紙沿中間垂直虛線對摺，藍色為保留的右半張，橘色虛線為剪線。從摺線上方沿斜線剪到右側，再沿斜線剪回摺線下方，保留靠摺線的三角形部分。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "剪出圖形的一條對稱軸",
    "一定是圖形的一條外邊",
    "一定不是對稱軸"
  ],
  "answer": "剪出圖形的一條對稱軸",
  "hint": "剪刀同時剪過兩層，兩側的剪線會怎樣？",
  "explain": "在兩層重合一起剪的條件下，展開的兩側相同，摺線是一條對稱軸。"
}
```

</details>

## symmetry-34

版本：1553897bbf5bc809b2901e74ebcc88ff80b218e33192c1985136250845205f60

題目：依圖對摺後，保留靠摺線的三角形紙片，展開會得到什麼？

課綱：5-4；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/34

```json
{
  "kind": "paper-fold",
  "cut": "diamond",
  "description": "紙沿中間垂直虛線對摺，藍色為保留的右半張，橘色虛線為剪線。從摺線上方沿斜線剪到右側，再沿斜線剪回摺線下方，保留靠摺線的三角形部分。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "菱形",
    "圓形",
    "只有原來的一個三角形"
  ],
  "answer": "菱形",
  "hint": "把右半的三角形在左側畫出鏡像。",
  "explain": "左右兩個全等三角形沿摺線相接，形成菱形。"
}
```

</details>

## symmetry-35

版本：c6ca2d237870a1a4b585c4ea37c3aa0a287dfdf1046e30246ed27fbdc5dccf17

題目：在對摺紙的摺線邊剪去圖示三角形缺口，展開後中間洞口是什麼形狀？

課綱：5-4；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/35

```json
{
  "kind": "paper-fold",
  "cut": "notch",
  "description": "紙向右對摺一次。橘色虛線是要剪去的等腰三角形缺口，缺口的底在摺線上；展開後觀察洞口。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "菱形洞",
    "圓洞",
    "只有單側的三角形洞"
  ],
  "answer": "菱形洞",
  "hint": "缺口跨過摺線後，另一半會對稱出現。",
  "explain": "兩個對稱三角形缺口合成菱形洞。"
}
```

</details>

## symmetry-36

版本：9d14f11a7d348153b75be965457008e5e8f8538dcbc418b4185e16961358653c

題目：對摺一次，兩層紙重合。在不碰摺線的位置打一個孔，展開後有幾個孔？

課綱：5-4；先備：對摺重合、格線的欄與列及距離；策略：數值推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/36

```json
{
  "kind": "cards",
  "items": [
    "對摺一次 → 2層",
    "打一孔（不碰摺線）",
    "展開 → ？個孔"
  ],
  "description": "對摺一次 → 2層；打一孔（不碰摺線）；展開 → ？個孔"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "2",
  "hint": "每一層各被穿過一次。",
  "explain": "兩層各有一個孔，展開後有2個對稱的孔。"
}
```

</details>

## symmetry-37

版本：cd2907e59505245f6e73f0ca07933d92fb1b2466fa95fdd828769d46af4171cb

題目：想剪出左右連在一起的對稱圖形，為什麼不能把整條摺線剪斷？

課綱：5-4；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/37

```json
{
  "kind": "paper-fold",
  "cut": "diamond",
  "description": "紙沿中間垂直虛線對摺，藍色為保留的右半張，橘色虛線為剪線。從摺線上方沿斜線剪到右側，再沿斜線剪回摺線下方，保留靠摺線的三角形部分。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "可能把左右兩半分開",
    "會讓兩邊長度變成不同",
    "剪刀會失去對稱性"
  ],
  "answer": "可能把左右兩半分開",
  "hint": "摺線上的保留部分是兩半連接的地方。",
  "explain": "若整條連接的摺線都剪斷，展開時會成為分離的兩片。"
}
```

</details>

## symmetry-38

版本：02447888a75d06cb0ae5df24fc05539348b034100b15a8afa05c4cfc9bf962fd

題目：小光說對摺一次、在離摺線2公分處打一個孔，展開只有一個孔。實際共有幾個？

課綱：5-4；先備：對摺重合、格線的欄與列及距離；策略：找錯

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/38

```json
{
  "kind": "cards",
  "items": [
    "對摺一次",
    "穿過兩層",
    "打孔位置離摺線2公分"
  ],
  "description": "對摺一次；穿過兩層；打孔位置離摺線2公分"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "2",
  "hint": "展開後，兩層各自的孔會分到軸的兩側。",
  "explain": "會有2個孔，各距離軸2公分，兩孔相距4公分。"
}
```

</details>

## symmetry-39

版本：f1c08cb93b8c5d6c1bb2fac403b360c8377a3b8a11521c753bd85c1c4e292489

題目：對摺一次，在離摺線3公分處打一個孔，展開後兩孔互相對稱。

課綱：5-4；先備：對摺重合、格線的欄與列及距離；策略：分步推理

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/39

```json
{
  "kind": "cards",
  "items": [
    "右側孔到摺線3公分",
    "展開後左側也有孔"
  ],
  "description": "右側孔到摺線3公分；展開後左側也有孔"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "各距摺線3公分，兩孔距離3＋3＝6公分。"
}
```

</details>

## symmetry-40

版本：cec8a16b237a99f953bf6c468f08a72f73580288f389914b8eba7d3cdfc76e5b

題目：只摺一次剪出的圖形，一定只有一條對稱軸嗎？

課綱：5-4；先備：對摺重合、格線的欄與列及距離；策略：辨認與比較

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/40

```json
{
  "kind": "symmetry-shape",
  "shape": "square",
  "description": "正方形。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "不一定，某些圖形有更多條",
    "一定只有一條"
  ],
  "answer": "不一定，某些圖形有更多條",
  "hint": "想想對摺後剪出正方形的情況。",
  "explain": "摺線是一條對稱軸，但圖形可能還有其他對稱軸，例如正方形有4條。"
}
```

</details>

## symmetry-game-1

版本：ee57c2785f34bf3d21acffaca6d615b66516814e4c0e93c3de3bd64d38181537

題目：藍色點是原圖。請點出虛線另一側的三個對稱點，再按「摺一摺」比對。

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：鏡射定位

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/41

```json
{
  "kind": "mirror",
  "size": 7,
  "axis": "vertical",
  "points": [
    8,
    16,
    29
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先找一個點：數它到虛線幾格，在另一側數一樣多格。",
  "explain": "每一對對稱點到軸的距離相等，連線也與軸垂直。"
}
```

</details>

## symmetry-game-2

版本：a59ea101f248b5049ed2098273a63539a73b48098fa519ef473c65bb893721cb

題目：藍色點是原圖。請點出虛線另一側的三個對稱點，再按「摺一摺」比對。

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：鏡射定位

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/42

```json
{
  "kind": "mirror",
  "size": 7,
  "axis": "vertical",
  "points": [
    9,
    15,
    36
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先找一個點：數它到虛線幾格，在另一側數一樣多格。",
  "explain": "每一對對稱點到軸的距離相等，連線也與軸垂直。"
}
```

</details>

## symmetry-game-3

版本：db443f9ad93bd857e7558467ada862ba13a4768f3469c16cc0c7022044ccd05c

題目：藍色點是原圖。請點出虛線另一側的三個對稱點，再按「摺一摺」比對。

課綱：5-3；先備：對摺重合、格線的欄與列及距離；策略：鏡射定位

自查：使用欄列描述避免要求笛卡兒坐標；紙剪題是示意推理，尚非自由剪紙。

畫面：http://127.0.0.1:5175/#practice/symmetry/43

```json
{
  "kind": "mirror",
  "size": 7,
  "axis": "horizontal",
  "points": [
    9,
    17,
    12
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先找一個點：數它到虛線幾格，在另一側數一樣多格。",
  "explain": "每一對對稱點到軸的距離相等，連線也與軸垂直。"
}
```

</details>

## fraction-sums-1

版本：b449e45f1c02bb30acde28a4a58bd6398ab96ccdfe6ab2605651db4239a8fb21

題目：1/2 ＋ 1/3 等於多少？（可填分數，如 3/4）

課綱：6-1；先備：等值分數與通分、假分數與帶分數；策略：數值推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/1

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "5/6",
  "hint": "先把分母2和3通分。",
  "explain": "通分後計算，結果是5/6。"
}
```

</details>

## fraction-sums-2

版本：c3aebcbcbe9d983479d71465c4eafca6ac0c9ff752925c2da05a3d65e4245e67

題目：3/4 − 1/2 等於多少？（可填分數，如 3/4）

課綱：6-2；先備：等值分數與通分、假分數與帶分數；策略：數值推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/2

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "1/4",
  "hint": "先把分母4和2通分。",
  "explain": "通分後計算，結果是1/4。"
}
```

</details>

## fraction-sums-3

版本：c97162d3ea2d43177ad55635dc9ad8eb84f355ea854339dcd0638d31da9566df

題目：2/3 ＋ 1/6 等於多少？（可填分數，如 3/4）

課綱：6-1；先備：等值分數與通分、假分數與帶分數；策略：數值推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/3

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "5/6",
  "hint": "先把分母3和6通分。",
  "explain": "通分後計算，結果是5/6。"
}
```

</details>

## fraction-sums-4

版本：d96fea6c8dd9b09f979104aae6c51afee7a6417d17b5fc1bec662cae0b6cbd05

題目：5/6 − 1/3 等於多少？（可填分數，如 3/4）

課綱：6-2；先備：等值分數與通分、假分數與帶分數；策略：數值推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/4

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "1/2",
  "hint": "先把分母6和3通分。",
  "explain": "通分後計算，結果是1/2。"
}
```

</details>

## fraction-sums-5

版本：024f2868da2e5c4b07d18a6744ffe6b881662d0be9efe8678f0c79900ad9161e

題目：計算1/2＋1/4，先通分再相加。

課綱：6-1；先備：等值分數與通分、假分數與帶分數；策略：分步推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/5

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "2/4＋1/4＝3/4。"
}
```

</details>

## fraction-sums-6

版本：dfa8a106f0336971b04da042308b929ffdbf9d354b535c002a07d0a50be6b3b1

題目：小光算1/2＋1/3＝2/5，請填正確答案。

課綱：6-1；先備：等值分數與通分、假分數與帶分數；策略：找錯

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/6

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "5/6",
  "hint": "分母是份的大小，不能直接相加。",
  "explain": "通分：3/6＋2/6＝5/6。"
}
```

</details>

## fraction-sums-7

版本：eda1381ba9f9d1db140d9afd3c5885e23545ff3e58248d4388239b30e9951fe7

題目：有2公尺緞帶，用掉3/4公尺，剩幾公尺？（用分數填答）

課綱：6-3；先備：等值分數與通分、假分數與帶分數；策略：數值推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/7

```json
{
  "kind": "cards",
  "description": "緞帶原長2公尺，剪下3/4公尺。",
  "items": [
    "原有 2 公尺",
    "用掉 3/4 公尺"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "5/4",
  "hint": "2公尺可以寫成8/4公尺。",
  "explain": "8/4−3/4＝5/4公尺，也就是1又1/4公尺。"
}
```

</details>

## fraction-sums-8

版本：4ff607c668e6c5afdada9b299b14024037e46b84cfc5bc8f2d77859842619ba2

題目：上午喝1/3公升水，下午喝1/4公升，共喝幾公升？

課綱：6-3；先備：等值分數與通分、假分數與帶分數；策略：數值推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/8

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "7/12",
  "hint": "共同分母可以用12。",
  "explain": "4/12＋3/12＝7/12公升。"
}
```

</details>

## fraction-sums-game-1

版本：80379fd762222f02327475958577eddc3361dd9b2c7c2c68b94a5c291aa6305e

題目：把 1/2 + 1/3 的結果塗在下方。整條分成 6 格，每格一樣大。

課綱：6-1；先備：等值分數與通分、假分數與帶分數；策略：等份塗色

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/9

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先看每一種份量在下面占幾小格，再決定要合起來還是拿掉。",
  "explain": "1/2 + 1/3 ＝ 5/6。每格大小一致，才可以直接數格子。"
}
```

</details>

## fraction-sums-game-2

版本：60d108dc436ae18e21c243fbf677eaa0a3c52cff804f526e155c6b7385934ff2

題目：把 3/4 − 1/2 的結果塗在下方。整條分成 8 格，每格一樣大。

課綱：6-2；先備：等值分數與通分、假分數與帶分數；策略：等份塗色

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/10

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先看每一種份量在下面占幾小格，再決定要合起來還是拿掉。",
  "explain": "3/4 − 1/2 ＝ 2/8。每格大小一致，才可以直接數格子。"
}
```

</details>

## fraction-sums-game-3

版本：02a3261672d38e60aae152e88e8e3f7e5178c97a5081de52bc34cbc26e0eb6c9

題目：把 2/3 + 1/6 的結果塗在下方。整條分成 12 格，每格一樣大。

課綱：6-1；先備：等值分數與通分、假分數與帶分數；策略：等份塗色

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/11

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先看每一種份量在下面占幾小格，再決定要合起來還是拿掉。",
  "explain": "2/3 + 1/6 ＝ 10/12。每格大小一致，才可以直接數格子。"
}
```

</details>

## fraction-sums-review-1

版本：f8794922abc64472ae2858cf8afdd88fb3ed4aafc651f5f67682052341e227ee

題目：1 又 1/2 公尺的緞帶，加上 2/3 公尺，共幾公尺？（可填假分數或帶分數）

課綱：6-3；先備：等值分數與通分、假分數與帶分數；策略：數值推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/12

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "13/6",
  "hint": "可以先把帶分數變成假分數，再通分。",
  "explain": "3/2＋2/3＝9/6＋4/6＝13/6，也就是 2 又 1/6 公尺。"
}
```

</details>

## fraction-sums-review-2

版本：f5b981edd2ccc86f08e3d879d5ca0f02b0a22fef4536be20f6d75d1bd4d3ba08

題目：2 又 1/4 公升的果汁，倒出 5/6 公升，剩下幾公升？

課綱：6-3；先備：等值分數與通分、假分數與帶分數；策略：數值推理

自查：帶分數是本單元延伸，需先複習假分數；支援「1又1/4」和「1 1/4」。

畫面：http://127.0.0.1:5175/#practice/fraction-sums/13

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "17/12",
  "hint": "先把 2 又 1/4 寫成假分數，再找共同分母。",
  "explain": "9/4−5/6＝27/12−10/12＝17/12，也就是 1 又 5/12 公升。"
}
```

</details>

## operations-1

版本：356bfd26b4ba74d6cb043a740764e634835b8d49111c80875503453e526ed5b4

題目：24＋6×3＝？

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：數值推理

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/1

```json
{
  "kind": "cards",
  "description": "先乘後加。",
  "items": [
    "24 + 6 × 3"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "42",
  "hint": "先算乘法。",
  "explain": "6×3＝18，24＋18＝42。"
}
```

</details>

## operations-2

版本：549268ed326517ed5b7395243624f2f6333f62aff2366cf76c910e10804f8b6a

題目：(24＋6)×3＝？

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：數值推理

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/2

```json
{
  "kind": "cards",
  "description": "括號先算。",
  "items": [
    "(24 + 6) × 3"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "90",
  "hint": "先算括號。",
  "explain": "24＋6＝30，30×3＝90。"
}
```

</details>

## operations-3

版本：789ea05c07571a64fb14bf235be5ca6093be0b90b6f61fb8abe06675b3581289

題目：算出120÷3÷4。

課綱：7-1；先備：整數加減乘除、括號和運算順序；策略：分步推理

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/3

```json
{
  "kind": "cards",
  "description": "把120先分成3份，再把每份分成4份。",
  "items": [
    "120 ÷ 3 ÷ 4"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "120÷3＝40，40÷4＝10。"
}
```

</details>

## operations-4

版本：09bc9930dfbc9e0e3498a6663a33bd0fdc95337fa6cce1388ea318b36ef6f92c

題目：小光計算48÷4×2＝6，請改正。

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：找錯

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/4

```json
{
  "kind": "cards",
  "description": "沒有括號的算式。",
  "items": [
    "48 ÷ 4 × 2"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "24",
  "hint": "乘除同級，要從左算。",
  "explain": "48÷4＝12，12×2＝24。"
}
```

</details>

## operations-5

版本：bc427432b6cb3334068b0786159d59a79f8dc11e47e6d4fcfff600846d825d3c

題目：三次跳繩次數為40、50、60，平均每次幾下？

課綱：7-3；先備：整數加減乘除、括號和運算順序；策略：數值推理

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/5

```json
{
  "kind": "cards",
  "description": "三次跳繩紀錄。",
  "items": [
    "40 下",
    "50 下",
    "60 下"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "50",
  "hint": "總次數除以3。",
  "explain": "(40＋50＋60)÷3＝50下。"
}
```

</details>

## operations-6

版本：9af3490ff34bd66865e4bf925a7e32c00f8764e8c5406d6f9724a03b16cc54e1

題目：每本筆記本25元，買4本，付200元。

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：分步推理

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/6

```json
{
  "kind": "cards",
  "description": "單價25元、4本、付款200元。",
  "items": [
    "25 元 × 4",
    "付 200 元"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "25×4＝100；200−100＝100元。"
}
```

</details>

## operations-7

版本：83c422377c8600e5a0d5953c80f2069cbc92c140ba581caa5159ae9b1a3e22b4

題目：300−(60＋20)×2＝？

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：數值推理

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/7

```json
{
  "kind": "cards",
  "description": "括號先處理。",
  "items": [
    "300 − (60 + 20) × 2"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "140",
  "hint": "括號、乘法、減法。",
  "explain": "60＋20＝80；80×2＝160；300−160＝140。"
}
```

</details>

## operations-8

版本：9e59122106244c7ab182b98b0c9cccd689ae8d9bb772e5e63ff18a7e21c142eb

題目：要把「36與24的和平均分成6份」寫成算式，哪個正確？

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：辨認與比較

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/8

```json
{
  "kind": "cards",
  "description": "兩組數量合起來再平分。",
  "items": [
    "36 + 24",
    "平均分 6 份"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "36＋24÷6",
    "(36＋24)÷6",
    "36×24÷6"
  ],
  "answer": "(36＋24)÷6",
  "hint": "先求和，再平均分。",
  "explain": "用括號把36＋24放在一起。"
}
```

</details>

## operations-game-1

版本：4fa722047f4afcae30c3d5d7259461de84001330c99a749aba6e7de75849a3a3

題目：24 ＋ 6 × 3，應該先做哪一步？把步驟排好。

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：排序推導

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/9

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先找乘法，再做加法。",
  "explain": "一步接一步，說說看：為什麼這一步要先做？6 × 3 ＝ 18 → 24 ＋ 18 ＝ 42"
}
```

</details>

## operations-game-2

版本：5e6213a6cda6c050e0d4382292fb98af8ff5742c0e394369881f74e08fa86e8f

題目：(24 ＋ 6) × 3 的步驟亂掉了。幫它排回來。

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：排序推導

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/10

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "括號像一間小房間，先把裡面的計算完成。",
  "explain": "一步接一步，說說看：為什麼這一步要先做？24 ＋ 6 ＝ 30 → 30 × 3 ＝ 90"
}
```

</details>

## operations-game-3

版本：5969763d538b1326cfd68f9ca159577c2a5612e3568be6a823e64b4f45d626da

題目：每本筆記本 25 元，買 4 本，付 200 元。排出找零步驟。

課綱：7-2；先備：整數加減乘除、括號和運算順序；策略：排序推導

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/11

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先知道要付多少錢，才能算找回多少。",
  "explain": "一步接一步，說說看：為什麼這一步要先做？25 × 4 ＝ 100 → 200 − 100 ＝ 100"
}
```

</details>

## operations-review-1

版本：a5dfeb73710782a44b0430df65131cad1b5dc5d56317f387ff28b14f70497e05

題目：要算 25 × 12，哪個拆法會得到相同結果？

課綱：7-4；先備：整數加減乘除、括號和運算順序；策略：辨認與比較

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/12

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "25 × 10 ＋ 2",
    "25 × 10 ＋ 25 × 2",
    "25 ＋ 10 ＋ 2"
  ],
  "answer": "25 × 10 ＋ 25 × 2",
  "hint": "把 12 分成兩部分，每部分都要乘以 25。",
  "explain": "25×(10＋2)＝25×10＋25×2，這是分配律。"
}
```

</details>

## operations-review-2

版本：1abbb189edb8380040951758b4380eaf31b891c3a8639d0900138ba49d51ce02

題目：用簡便方法算 99 × 6。先把 99 想成 100 少 1。

課綱：7-5；先備：整數加減乘除、括號和運算順序；策略：分步推理

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/13

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "hint": "先算 100 個 6，再扣掉多算的那一個 6。",
  "explain": "100×6＝600；600−6＝594。"
}
```

</details>

## operations-review-3

版本：bacc9b37b1e827b48d2b5722bf7fd4c1084bc230584351f65cc9f318e0896bb8

題目：32 × 25，先把 32 拆成 8 × 4，怎麼分組比較好算？

課綱：7-5；先備：整數加減乘除、括號和運算順序；策略：辨認與比較

自查：基本運算順序後才進入分配律、結合律與簡便計算。

畫面：http://127.0.0.1:5175/#practice/operations/14

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "8 × (4 × 25)",
    "8 ＋ (4 × 25)",
    "(8 ＋ 4) × 25"
  ],
  "answer": "8 × (4 × 25)",
  "hint": "找找哪兩個數相乘能湊成 100。",
  "explain": "(8×4)×25＝8×(4×25)＝8×100＝800。"
}
```

</details>

## area-v2-1

版本：8a9f96922a88bf192d947617e61611753de87ee81debe26236f53f03830bc662

題目：底邊已塗成橘色。A、B 哪一條線是對應的高？

課綱：8-2；先備：直角與垂直；策略：辨認

自查：初始圖說曾直接指出 B 是垂線，已修；仍需孩子確認 A、B 標示可讀。

畫面：http://127.0.0.1:5175/#practice/area/1

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "A 線",
    "B 線",
    "兩條都是"
  ],
  "answer": "B 線",
  "hint": "找找哪條線和橘色底邊形成直角。",
  "explain": "B 線和底邊垂直，是這條底邊對應的高；A 是斜邊。"
}
```

</details>

## area-v2-2

版本：7fece0836a489e3625d892af26ef595e0e64142c62bee5c519000e7dfb121e1a

題目：甲、乙的頂點位置不同。不必算出面積，哪個說法正確？

課綱：8-2；先備：三角形面積；策略：比較

自查：兩圖同尺度與同高，圖示有助比較；正確選項較長，需留意文字猜題。

畫面：http://127.0.0.1:5175/#practice/area/2

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "乙比較大，因為斜邊比較長",
    "一樣大，因為底和高都相同",
    "甲比較大，因為比較端正"
  ],
  "answer": "一樣大，因為底和高都相同",
  "hint": "比較兩張圖標示的底和高，不要只看斜邊。",
  "explain": "兩個三角形都底 8、高 4，面積相同。頂點左右移動，只要高不變，面積就不變。"
}
```

</details>

## area-v2-3

版本：e3f659ca435a99e5fc8ecd3ab52b9b5d279611fba087333b6b79ca33462635e1

題目：一張面積 24 平方公分的紙，剪開後拼成另一個圖形，沒有重疊也沒有空隙。拼好後的面積是多少？

課綱：8-1；先備：面積是覆蓋大小；策略：守恆推理

自查：文字能判斷，但還沒有直接剪拼，後續需補操作驗證。

畫面：http://127.0.0.1:5175/#practice/area/3

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "24",
  "hint": "想想有沒有增加或丟掉任何一片紙。",
  "explain": "只移動紙片，沒有增減紙片，所以面積仍是 24 平方公分。"
}
```

</details>

## area-v2-4

版本：198fa92c14f0f92396694ec4291cdd6f5bf98dfedda3429d3d375623b6c97fbe

題目：幫小光算這面三角旗需要多少平方公分的布。

課綱：8-2；先備：乘除與三角形公式；策略：計算

自查：保留一題基本計算，與其他任務搭配。

畫面：http://127.0.0.1:5175/#practice/area/4

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "20",
  "hint": "可以先想兩面一樣的旗子合起來有多大。",
  "explain": "8 × 5 ÷ 2 = 20 平方公分。"
}
```

</details>

## area-v2-5

版本：9507af915c329a01bb7d0cef8e0ab5dd0b9ba682eac5f48e02a6e286d2601cdb

題目：小光說：「底是 8，斜邊是 5，所以面積是 8 × 5 = 40。」錯在哪裡？

課綱：8-1；先備：垂直高和平行四邊形面積；策略：找錯

自查：圖題資料一致，仍需真人確認錯誤選項是否太容易排除。

畫面：http://127.0.0.1:5175/#practice/area/5

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "應該用垂直的高 4，不是斜邊 5",
    "乘法應該改成加法",
    "平行四邊形都要再除以 2"
  ],
  "answer": "應該用垂直的高 4，不是斜邊 5",
  "hint": "面積公式裡的兩個長度，有什麼方向關係？",
  "explain": "平行四邊形要用底 × 對應的高，因此是 8 × 4 = 32 平方公分。"
}
```

</details>

## area-v2-6

版本：0bae76747b146cd0be70d3e976a759dffa4fa8a8083ef49b50c2a5ad51b78d77

題目：三角形面積是 24 平方公分，底是 8 公分。高是多少公分？

課綱：8-2；先備：三角形公式與除法；策略：逆推

自查：需先理解倍面積；高維持問號不洩答案。

畫面：http://127.0.0.1:5175/#practice/area/6

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "6",
  "hint": "先想兩個這樣的三角形拼起來，面積會是多少。",
  "explain": "24 × 2 ÷ 8 = 6 公分。"
}
```

</details>

## area-v2-7

版本：f4629ceb6ffaeb9feb6e41156963589e2c5267cc01e7ac70f3256d193167df5d

題目：三角形的底不變，高變成原來的 2 倍。面積會怎樣？

課綱：8-2；先備：乘法倍數與三角形公式；策略：規律推理

自查：圖上高度也倍增，需觀察孩子能否說出原因。

畫面：http://127.0.0.1:5175/#practice/area/7

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "不變",
    "變成原來的 2 倍",
    "變成原來的 4 倍"
  ],
  "answer": "變成原來的 2 倍",
  "hint": "把底 × 高 ÷ 2 中改變的部分找出來。",
  "explain": "底不變、高乘以 2，算出的面積也乘以 2。"
}
```

</details>

## area-v2-8

版本：c843eab14489d40f9010d68c3fef664dbcf7ceccb4528c1d3e40ace9309329ba

題目：這塊梯形貼紙的面積是多少？

課綱：8-3；先備：梯形上底下底高；策略：計算

自查：保留梯形基本計算。

畫面：http://127.0.0.1:5175/#practice/area/8

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "30",
  "hint": "兩張相同梯形可以拼成一個平行四邊形。",
  "explain": "(4 + 8) × 5 ÷ 2 = 30 平方公分。"
}
```

</details>

## area-v2-9

版本：1451c6f9f9f00dbb6d097b2c030f3f2a38c6ce232528c5c3817c6b94d9cbdd6e

題目：只知道三角形的底是 8 公分，就能確定面積嗎？

課綱：8-2；先備：面積依賴底和高；策略：資料判斷

自查：問號支援理解未知量；可加同底不同高的反例操作。

畫面：http://127.0.0.1:5175/#practice/area/9

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "可以，8 ÷ 2 就好",
    "不能，還需要這條底邊對應的高",
    "可以，所有底是 8 的三角形都一樣大"
  ],
  "answer": "不能，還需要這條底邊對應的高",
  "hint": "同樣的底，頂點可以在不同高度嗎？",
  "explain": "底一樣但高不同，面積會不同。只有底的資料不夠。"
}
```

</details>

## area-v2-10

版本：abe981073f32f8bee92dd2facadaf69345fe582d6ff3d3419dceed887cf9853c

題目：長方形紙板長 10、寬 6 公分，剪掉右上角底 4、高 3 公分的三角形。剩下的面積是多少？

課綱：8-4；先備：長方形與三角形面積；策略：分解相減

自查：多步驟題；可搭配白板，不以閱讀速度評分。

畫面：http://127.0.0.1:5175/#practice/area/10

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "54",
  "hint": "先算整張紙，再扣掉剪走的部分。",
  "explain": "整張 10 × 6 = 60；剪掉 4 × 3 ÷ 2 = 6；剩下 54 平方公分。"
}
```

</details>

## area-v2-11

版本：ec2ff32b5f7e5b3580ddf7857f742ff7594fbd7426795b7589085b6652004b31

題目：設計一面面積 12 平方公分的三角旗！底和高都用 1～12 的整數公分。填出你自己的設計。

課綱：8-4；先備：三角形面積與整數因數；策略：創作驗證

自查：接受多解，但兩欄聯合錯誤仍共用逐步標示，需改善回饋文案。

畫面：http://127.0.0.1:5175/#practice/area/11

```json
{
  "kind": "triangle-design",
  "area": 12,
  "min": 1,
  "max": 12
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "hint": "試選一個底，想想要配上多高，才會得到指定面積。",
  "explain": "你的底 × 高 ÷ 2 = 12，符合設計條件！這題有不同的正確設計，你可以在手寫區畫出自己的三角旗。"
}
```

</details>

## area-v2-12

版本：b84d00d2bbf15b256e0cb083d273c1945f6a5cd0a157c076c76a4cc7c6b41cb7

題目：梯形面積 30 平方公分，上底 4、下底 8 公分。高是多少？

課綱：8-3；先備：梯形公式與除法；策略：逆推

自查：先備較多，建議基本題成功後再做。

畫面：http://127.0.0.1:5175/#practice/area/12

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "5",
  "hint": "先把兩個相同梯形合起來的面積找出來。",
  "explain": "30 × 2 ÷ (4 + 8) = 5 公分。"
}
```

</details>

## area-v2-13

版本：3e551394ea18a8f1a9239404a9fad32d2fcfacadadfb012a6e4bf768311c537b

題目：小光要用色紙貼滿平行四邊形卡片。每張色紙可覆蓋 6 平方公分，可剪拼、不重疊。至少需要幾張？

課綱：8-4；先備：平行四邊形面積與等分；策略：應用

自查：可剪拼前提避免材料形狀不足；這題沒有無條件捨入問題。

畫面：http://127.0.0.1:5175/#practice/area/13

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "hint": "先算卡片面積，再想每張色紙能覆蓋多少。",
  "explain": "卡片 9 × 4 = 36 平方公分；36 ÷ 6 = 6 張。"
}
```

</details>

## area-v2-14

版本：fa683800b9cf79fec0866dfdf677103ce7ff0dceb9efb3cd6f9a2d739b709c75

題目：兩個全等三角形拼成底 8、高 5 的平行四邊形。求一個三角形的面積，為什麼要除以 2？

課綱：8-2；先備：全等與面積加法；策略：說理

自查：目前是選擇理由，不能證明孩子會獨立口頭解釋。

畫面：http://127.0.0.1:5175/#practice/area/14

```json
{}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "因為三角形有兩條斜邊",
    "底乘高算的是兩個三角形合起來的面積",
    "因為所有圖形的面積都要除以 2"
  ],
  "answer": "底乘高算的是兩個三角形合起來的面積",
  "hint": "底乘高得到的是一片，還是兩片的面積？",
  "explain": "兩個全等三角形面積相同。底 × 高算出合起來的面積，所以一個要取一半。"
}
```

</details>

## area-game-1

版本：960168daf95ea25d3aa5214cb77f68736de5464b960546536bc53cd6abbea1c6

題目：兩片相同三角形，底 8、高 5 公分。排出拼圖求面積的步驟。

課綱：8-2；先備：全等與平行四邊形面積；策略：排序推導

自查：卡片顯示結果，是引導活動，不是獨立計算測驗。

畫面：http://127.0.0.1:5175/#practice/area/15

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "先求兩片合起來的面積，再分回一片。",
  "explain": "一步接一步，說說看：為什麼這一步要先做？兩片拼成平行四邊形 → 8 × 5 ＝ 40 平方公分 → 40 ÷ 2 ＝ 20 平方公分"
}
```

</details>

## area-game-2

版本：93de8c34e4c21ece9e0f2a7e06cf9d4dab07225e73d7778a39bdbe84dcd918b6

題目：底 6、高 4 公分。剪下左邊的三角形，搬到右邊。排出求面積的步驟。

課綱：8-1；先備：長方形面積與守恆；策略：排序推導

自查：僅兩張卡，猜對機率高；後續改為實際移動紙片。

畫面：http://127.0.0.1:5175/#practice/area/16

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "搬家後面積沒有增加，也沒有減少。",
  "explain": "一步接一步，說說看：為什麼這一步要先做？剪開再平移，拼成長方形 → 6 × 4 ＝ 24 平方公分"
}
```

</details>

## area-game-3

版本：fc6dcf6b0675210ab0fb6790a92445fddb0f4c97618acab978b654b62055cf19

題目：兩個相同梯形，上底 4、下底 8、高 5 公分。排好拼圖步驟。

課綱：8-3；先備：平行四邊形與等分；策略：排序推導

自查：第三個排序遊戲重複；建議改成找配對或補缺尺寸。

畫面：http://127.0.0.1:5175/#practice/area/17

```json
{
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
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "拼起來的底，是原本上底加下底。",
  "explain": "一步接一步，說說看：為什麼這一步要先做？兩片拼成平行四邊形 → (4 ＋ 8) × 5 ＝ 60 平方公分 → 60 ÷ 2 ＝ 30 平方公分"
}
```

</details>

## time-1

版本：3fc9e5480d90aa90d4469a28c2b61a9a97d6fb71f3af1be4dbf0a34abc44cce5

題目：1小時20分鐘共幾分鐘？

課綱：9-1；先備：1小時60分、1分60秒、整數乘除；策略：數值推理

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/1

```json
{
  "kind": "cards",
  "description": "時和分換算。",
  "items": [
    "1 小時",
    "20 分鐘"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "80",
  "hint": "1小時是60分鐘。",
  "explain": "60＋20＝80分鐘。"
}
```

</details>

## time-2

版本：d25a2af2ab740a5aa2ef5a507baae15615e0d5515a3d501f7165d70228aa5247

題目：45分鐘×3，合計幾分鐘？

課綱：9-1；先備：1小時60分、1分60秒、整數乘除；策略：數值推理

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/2

```json
{
  "kind": "cards",
  "description": "3段時間，每段45分鐘。",
  "items": [
    "45 分",
    "45 分",
    "45 分"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "135",
  "hint": "先算45乘3。",
  "explain": "45×3＝135分鐘。"
}
```

</details>

## time-3

版本：32ed95e7fac1ba303e1c3638d2e59fca8a90a40b88afbc83378296d9e8937f09

題目：把135分鐘換成幾小時幾分鐘。

課綱：9-1；先備：1小時60分、1分60秒、整數乘除；策略：分步推理

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/3

```json
{
  "kind": "cards",
  "description": "把135分鐘分成每60分鐘一組。",
  "items": [
    "135 分 ÷ 60"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "135÷60＝2餘15，即2小時15分鐘。"
}
```

</details>

## time-4

版本：c532c0d39ffad2f6aadd43402edda9e28b8c818a0681dc95fb97c3c7d69eb561

題目：2小時30分鐘平均分成5段，每段幾分鐘？

課綱：9-2；先備：1小時60分、1分60秒、整數乘除；策略：數值推理

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/4

```json
{
  "kind": "cards",
  "description": "150分鐘平均分5段。",
  "items": [
    "2 小時 30 分",
    "÷ 5"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "30",
  "hint": "先全部換成分鐘。",
  "explain": "(120＋30)÷5＝30分鐘。"
}
```

</details>

## time-5

版本：f15a98500fe6d9bbb6dab13a2040cd4009fda8e028219aa72ccca7b2dac1689e

題目：小光說1分鐘40秒等於140秒，正確是多少秒？

課綱：9-1；先備：1小時60分、1分60秒、整數乘除；策略：找錯

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/5

```json
{
  "kind": "cards",
  "description": "1分鐘和40秒。",
  "items": [
    "1 分鐘",
    "40 秒"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "100",
  "hint": "1分鐘是60秒。",
  "explain": "60＋40＝100秒。"
}
```

</details>

## time-6

版本：3a6d1b955b984ecdea642fb384f3b43ef58644347b5ba35d039d4a0cd5e057b5

題目：從9:40到10:15，經過幾分鐘？

課綱：9-3；先備：1小時60分、1分60秒、整數乘除；策略：數值推理

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/6

```json
{
  "kind": "cards",
  "description": "時間線：9:40 → 10:00 → 10:15。",
  "items": [
    "9:40",
    "10:00",
    "10:15"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "35",
  "hint": "先算到10:00，再算後面15分鐘。",
  "explain": "20＋15＝35分鐘。"
}
```

</details>

## time-7

版本：ee98703857d8009c5ecb63660c4afd27398420b7ec898e06f25bdb4cf2b0bf7b

題目：2分鐘15秒×2。

課綱：9-1；先備：1小時60分、1分60秒、整數乘除；策略：分步推理

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/7

```json
{
  "kind": "cards",
  "description": "每段2分鐘15秒，共2段。",
  "items": [
    "2 分 15 秒",
    "× 2"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "120＋15＝135；135×2＝270秒。"
}
```

</details>

## time-8

版本：ef060b16f7ad623964324d2d966051717e3b621cc297401a20a0823383913931

題目：360秒平均分成3段，每段幾分鐘？

課綱：9-2；先備：1小時60分、1分60秒、整數乘除；策略：數值推理

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/8

```json
{
  "kind": "cards",
  "description": "360秒分3段。",
  "items": [
    "360 秒",
    "÷ 3"
  ]
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "2",
  "hint": "先除以3，再除以60。",
  "explain": "360÷3＝120秒＝2分鐘。"
}
```

</details>

## time-game-1

版本：4c443f5b2e6d583060cbd280def412d824aca4731a0ac50815401c2162212da0

題目：每場表演 45 分鐘，共 3 場。調整時間盒，裝出總共花的時間。

課綱：9-1；先備：1小時60分、1分60秒、整數乘除；策略：時間換算

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/9

```json
{
  "kind": "time",
  "minutes": 45,
  "n": 3,
  "total": 135,
  "operation": "multiply"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "一個小時盒等於 60 分鐘。先把時間都換成分鐘，再計算。",
  "explain": "45 × 3 ＝ 135 分鐘，也就是 2 小時 15 分鐘。"
}
```

</details>

## time-game-2

版本：346895e4460307f36711c5f47b30fb691664ff35e132be46c74251403be5f1f7

題目：每段閱讀 30 分鐘，共 4 段。調整時間盒，裝出總共花的時間。

課綱：9-1；先備：1小時60分、1分60秒、整數乘除；策略：時間換算

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/10

```json
{
  "kind": "time",
  "minutes": 30,
  "n": 4,
  "total": 120,
  "operation": "multiply"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "一個小時盒等於 60 分鐘。先把時間都換成分鐘，再計算。",
  "explain": "30 × 4 ＝ 120 分鐘，也就是 2 小時 0 分鐘。"
}
```

</details>

## time-game-3

版本：d247323257efd7d782e4cf193e0e0ce2818ea1a5cefa06759f4d8ceb00daaa21

題目：活動共 2 小時 30 分鐘，平均分成 5 段。每段多久？調整時間盒，裝出一段的時間。

課綱：9-2；先備：1小時60分、1分60秒、整數乘除；策略：時間換算

自查：以60進位，欄位明確要求分鐘或秒；跨時段情境標為應用。

畫面：http://127.0.0.1:5175/#practice/time/11

```json
{
  "kind": "time",
  "minutes": 150,
  "n": 5,
  "total": 30,
  "operation": "divide"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "一個小時盒等於 60 分鐘。先把時間都換成分鐘，再計算。",
  "explain": "150 ÷ 5 ＝ 30 分鐘，也就是 0 小時 30 分鐘。"
}
```

</details>

## solids-1

版本：c35a36422fae3d7e77244cbcedf4a26a35d2096f6d6671e15014a81755550e6d

題目：正方體有幾個面？

課綱：10-1；先備：面、邊、頂點、平行垂直與長方形面積；策略：數值推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/1

```json
{
  "kind": "solid",
  "description": "正方體透視示意圖，前方為正方形，虛線表示被遮住的邊。",
  "shape": "cube"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "6",
  "hint": "想一想上、下、前、後、左、右。",
  "explain": "共有6個面。"
}
```

</details>

## solids-2

版本：10c202ae15f6bbb4175a1c33764212db6307b6da6f20bed7642a8980a4dbae70

題目：長方體有幾條邊？

課綱：10-1；先備：面、邊、頂點、平行垂直與長方形面積；策略：數值推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/2

```json
{
  "kind": "solid",
  "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
  "shape": "cuboid"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "12",
  "hint": "上方4條、下方4條、連接上下4條。",
  "explain": "4＋4＋4＝12條。"
}
```

</details>

## solids-3

版本：e0296eba50b5d3efec0f78e2f3909e192d74edefea1339240787ab6be6c34de0

題目：正方體有幾個頂點？

課綱：10-1；先備：面、邊、頂點、平行垂直與長方形面積；策略：數值推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/3

```json
{
  "kind": "solid",
  "description": "正方體透視示意圖，前方為正方形，虛線表示被遮住的邊。",
  "shape": "cube"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "8",
  "hint": "上方4個、下方4個。",
  "explain": "4＋4＝8個。"
}
```

</details>

## solids-4

版本：c1d147b8039d3c6dfa078da5cb0c55adc1b12689e93f41d30bbb470d7fb7712a

題目：長方體的上面和下面有什麼關係？

課綱：10-3；先備：面、邊、頂點、平行垂直與長方形面積；策略：辨認與比較

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/4

```json
{
  "kind": "solid",
  "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
  "shape": "cuboid"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "互相平行",
    "互相垂直",
    "一定重合"
  ],
  "answer": "互相平行",
  "hint": "這是相對的兩個面。",
  "explain": "長方體相對的面互相平行。"
}
```

</details>

## solids-5

版本：ca3f98109333cdd931d2a0f2e6e5c1a3816924aba89c978e6c1c88a8cf24c940

題目：長方體的前面和上面有什麼關係？

課綱：10-3；先備：面、邊、頂點、平行垂直與長方形面積；策略：辨認與比較

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/5

```json
{
  "kind": "solid",
  "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
  "shape": "cuboid"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "互相平行",
    "互相垂直",
    "沒有共同的邊"
  ],
  "answer": "互相垂直",
  "hint": "這是相鄰的兩個面。",
  "explain": "相鄰的面沿著一條邊相交，互相垂直。"
}
```

</details>

## solids-6

版本：fa8846764a68215399490ffdfec7d2ee11797327177d3101d363933f4c9176a0

題目：數一數長方體的構成要素。

課綱：10-1；先備：面、邊、頂點、平行垂直與長方形面積；策略：分步推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/6

```json
{
  "kind": "solid",
  "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
  "shape": "cuboid"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
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
  "explain": "長方體有6個面、8個頂點。"
}
```

</details>

## solids-7

版本：74c31f78b92423cf85ecc8876caac4b9d8b5c45f8c794c624223b98408989a4a

題目：小光只數出圖上可見的3個面，就說長方體有3個面。實際有幾個？

課綱：10-1；先備：面、邊、頂點、平行垂直與長方形面積；策略：找錯

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/7

```json
{
  "kind": "solid",
  "description": "透視示意圖標出長方體的前面、上面和右面，虛線表示被遮住的邊。線條比例僅示意。",
  "shape": "cuboid"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "6",
  "hint": "背面還有被遮住的面。",
  "explain": "另外3個面被遮住，合計6個。"
}
```

</details>

## solids-8

版本：da71a2115b227e06fcec2da596b15f77b7e772d7124b0de89a323ca4c0310c27

題目：正方體的6個面都具有哪個特徵？

課綱：10-1；先備：面、邊、頂點、平行垂直與長方形面積；策略：辨認與比較

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/8

```json
{
  "kind": "solid",
  "description": "正方體透視示意圖，前方為正方形，虛線表示被遮住的邊。",
  "shape": "cube"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "都是一樣大的正方形",
    "都是三角形",
    "只有相對的面一樣大"
  ],
  "answer": "都是一樣大的正方形",
  "hint": "正方體所有邊都等長。",
  "explain": "每個面都是全等的正方形。"
}
```

</details>

## solids-game-1

版本：8153ecad44a5bfa4020c29d86cbf963b0dd5a1062500cfa17fe9c1c9864a1f56

題目：這是正方體的展開圖。摺成盒子後，選出與 A 面相對的那一面。

課綱：10-4；先備：面、邊、頂點、平行垂直與長方形面積；策略：空間推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/9

```json
{
  "kind": "net",
  "face": "A",
  "relation": "opposite"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "沿著相連的邊想像摺起來；相對的面不會共用一條邊。",
  "explain": "正方體有三組相對的面：A 和 F、B 和 D、C 和 E。相鄰的面互相垂直。"
}
```

</details>

## solids-game-2

版本：67b5aea3d6f3ace4067240b07e6c15b487cae17caddfb1b3a490f04f5d7d753f

題目：這是正方體的展開圖。摺成盒子後，選出與 C 面相鄰的所有面。

課綱：10-4；先備：面、邊、頂點、平行垂直與長方形面積；策略：空間推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/10

```json
{
  "kind": "net",
  "face": "C",
  "relation": "adjacent"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "沿著相連的邊想像摺起來；相對的面不會共用一條邊。",
  "explain": "正方體有三組相對的面：A 和 F、B 和 D、C 和 E。相鄰的面互相垂直。"
}
```

</details>

## solids-game-3

版本：945fd951d9a9b735b34d6d6b3afba392be491e20df8f257105615fefdc13096c

題目：這是正方體的展開圖。摺成盒子後，選出與 B 面相對的那一面。

課綱：10-4；先備：面、邊、頂點、平行垂直與長方形面積；策略：空間推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/11

```json
{
  "kind": "net",
  "face": "B",
  "relation": "opposite"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "hint": "沿著相連的邊想像摺起來；相對的面不會共用一條邊。",
  "explain": "正方體有三組相對的面：A 和 F、B 和 D、C 和 E。相鄰的面互相垂直。"
}
```

</details>

## solids-review-1

版本：481350545c3153f6d602dae27c8dc4782c35042f14ef009fd567d10d6da38cf8

題目：看前面 ABCD，哪一條邊和 AB 平行？

課綱：10-2；先備：面、邊、頂點、平行垂直與長方形面積；策略：辨認與比較

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/12

```json
{
  "kind": "solid",
  "shape": "cuboid",
  "vertices": true,
  "description": "前面四個頂點依左下、右下、右上、左上標成 A、B、C、D；後面對應頂點為 E、F、G、H。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "AD",
    "BC",
    "DC"
  ],
  "answer": "DC",
  "hint": "平行的兩邊，延長後也不相交。",
  "explain": "AB 與 DC 是長方形相對的兩條邊，互相平行。"
}
```

</details>

## solids-review-2

版本：7dc45fd9f64f97944700b90169b76e3a80c3b424e9ba1ec168642c59335e9a54

題目：看前面 ABCD，AB 和 AD 有什麼關係？

課綱：10-2；先備：面、邊、頂點、平行垂直與長方形面積；策略：辨認與比較

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/13

```json
{
  "kind": "solid",
  "shape": "cuboid",
  "vertices": true,
  "description": "前面四個頂點依左下、右下、右上、左上標成 A、B、C、D；後面對應頂點為 E、F、G、H。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "choices": [
    "互相平行",
    "互相垂直",
    "同一條邊"
  ],
  "answer": "互相垂直",
  "hint": "兩邊在 A 點相交，形成什麼角？",
  "explain": "長方形在 A 的角是直角，所以 AB 和 AD 垂直。"
}
```

</details>

## solids-review-3

版本：d60489ebe5dc387cd4483582128d630dfeff21e402384a6a211597e7e6c3e7fb

題目：邊長 3 公分的正方體，六個面的總面積是多少？

課綱：10-5；先備：面、邊、頂點、平行垂直與長方形面積；策略：數值推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/14

```json
{
  "kind": "solid",
  "shape": "cube",
  "edgeLength": 3,
  "description": "正方體每條邊都是 3 公分。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "54",
  "hint": "先算一個正方形面，再想有幾個相同的面。",
  "explain": "3×3＝9；9×6＝54 平方公分。"
}
```

</details>

## solids-review-4

版本：e3dbda663e5b16890e6f45f97a5c3be21da02c4dd2679f5bf1dee3da0070b243

題目：長方體長 4、寬 3、高 2 公分，表面積是多少？

課綱：10-5；先備：面、邊、頂點、平行垂直與長方形面積；策略：數值推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/15

```json
{
  "kind": "solid",
  "shape": "cuboid",
  "dimensions": [
    4,
    3,
    2
  ],
  "description": "長方體長 4 公分、寬 3 公分、高 2 公分。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "52",
  "hint": "三種面各有兩個：長乘寬、長乘高、寬乘高。",
  "explain": "(4×3＋4×2＋3×2)×2＝(12＋8＋6)×2＝52 平方公分。"
}
```

</details>

## solids-review-5

版本：965a0d7cf6baefe4b40a697f635045ee805afd71601b7b72b057257cc22b0766

題目：邊長 2 公分的正方體盒子沒有蓋子，只算外面的五個面，共幾平方公分？

課綱：10-5；先備：面、邊、頂點、平行垂直與長方形面積；策略：數值推理

自查：正方體採正方形前面；線段題標頂點、表面積題明列尺寸。展開圖仍需實際摺合驗證。

畫面：http://127.0.0.1:5175/#practice/solids/16

```json
{
  "kind": "cards",
  "items": [
    "邊長 2 公分",
    "沒有蓋子",
    "只算外表面，忽略厚度"
  ],
  "description": "無蓋正方體盒，計算五個外表面。"
}
```

<details><summary>獨立解題後才核對答案</summary>

```json
{
  "answer": "20",
  "hint": "完整正方體有六個面，拿掉蓋子後還有幾個？",
  "explain": "2×2＝4；4×5＝20 平方公分。"
}
```

</details>
