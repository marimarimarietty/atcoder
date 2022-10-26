// 高橋君とホテルイージー
// inputに入力データ全体が入る
function Main(input) {
	input = input.split("\n");
	let N = Number(input[0]);
  let K = Number(input[1]);
  let X = Number(input[2]);
  let Y = Number(input[3]);
  let cost = 0;
  let Z = N - K;

  if (Z > 0) {
    cost += K*X + Z*Y;
  } else {
    cost += N*X;
  }
  console.log(cost);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("2\n3\n10000\n9000");
