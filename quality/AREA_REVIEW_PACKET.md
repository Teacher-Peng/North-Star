# 五上獨立審查包

請先解題再展開答案。逐題檢查條件、多解、圖文、先備、提示與互動；記下具體理由，AI 不可代簽真人或孩子實測。

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
