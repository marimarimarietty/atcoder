// 白昼夢
// inputに入力データ全体が入る
function Main(input) {
	input = input.split("\n");

  const answer = input[0].match(/^(dream|dreamer|erase|eraser)*$/) ? "YES" : "NO";

  console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("erasedream\n");
