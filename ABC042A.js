// 和風いろはちゃんイージー
// inputに入力データ全体が入る
function Main(input) {
	input = input.split(" ");
  let msg = "NO";
  
  if (Number(input[0]) === 5 && Number(input[1]) === 7 && Number(input[2]) === 5) {
    msg = "YES";
  } else if (Number(input[0]) === 5 && Number(input[1]) === 5 && Number(input[2]) === 7) {
    msg = "YES";
  } else if (Number(input[0]) === 7 && Number(input[1]) === 5 && Number(input[2]) === 5) {
    msg = "YES";
  }

  console.log(msg);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("7 5 5");
