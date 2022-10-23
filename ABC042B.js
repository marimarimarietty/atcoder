// 文字列大好きいろはちゃんイージー
// inputに入力データ全体が入る
function Main(input) {
	input = input.split("\n");
  input.shift();
  input.sort();
  
  let msg = "";
  for (let elm of input) {
    msg += elm;
  }
  console.log(msg);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("3 3\ndxx\naxx\ncxx");
