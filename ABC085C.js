// Otoshidama
// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ");
  let N = Number(input[0]);
  let Yen = Number(input[1]);

  for (let x = 0; x <= N; x++) {
    for (let y = 0; y <= N - x; y++) {
      let z = N - x - y;
      if (x*10000 + y*5000 + z*1000 === Yen) {
        console.log(`${x} ${y} ${z}`);
        return;
      }
    }
  }
  
  console.log("-1 -1 -1");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("9 45000");
Main("20 196000");
