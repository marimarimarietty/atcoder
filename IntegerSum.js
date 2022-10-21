// Integer Sum
// inputに入力データ全体が入る
function Main(input) {
	input = input.split("\n");
	tmp = input[1].split(" ");
  let count = 0;
	
  for (const elm of tmp) {
    count += Number(elm);
  }
  console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("3\n2 7 2");
