// いっしょ
// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let N = Number(input[0]);
  tmp = input[1].split(" ");
  let cost = Number.MAX_SAFE_INTEGER;

  const isAllEqual = tmp => tmp.every(value => value === tmp[0]);

  if (!isAllEqual(tmp)) {
    for (let i = -100; i <= 100; i++) {
      let c = 0;
      for (let j = 0; j < N; j++) {
        c += (i - Number(tmp[j]))*(i - Number(tmp[j]));
      }
      cost = cost <= c ? cost : c;
    }
  } else {
    cost = 0;
  }

  console.log(cost);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("3\n4 2 5");
Main("4\n-100 -100 -100 -100");
