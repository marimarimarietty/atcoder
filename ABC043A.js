// キャンディーとN人の子供イージー
// inputに入力データ全体が入る
function Main(input) {
  input = Number(input);
  let count = 0;

  for (let i = 1; i <= input; i++) {
    count += i;
  }

  console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("3");
