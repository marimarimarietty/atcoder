// coins
function Main(input) {
  input = input.split("\n");
  let a = parseInt(input[0], 10);
  let b = parseInt(input[1], 10);
  let c = parseInt(input[2], 10);
  let k = parseInt(input[3], 10);
  let result = 0;
  
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let l = 0; l <= c; l++) {
        if ((500*i + 100*j + 50*l) === k) {
          result++;
        }
      }
    }
  }

  console.log(result);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("2\n2\n2\n100");
Main("5\n1\n0\n150");
Main("30\n40\n50\n6000");
