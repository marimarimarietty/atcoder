// バイナリハックイージー
// inputに入力データ全体が入る
function Main(input) {
  input = input.split("");
  let msg = "";

  for (const elm of input) {
    if (elm === "B") {
      if (msg !== "") {
        msg = msg.slice(0, -1);
      }
    } else {
      msg += elm;
    }
  }

  console.log(msg);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("01B0");
