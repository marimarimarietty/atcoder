// Some Sums
function Main(input) {
  input = input.split(" ");
  let n = parseInt(input[0], 10);
  let a = parseInt(input[1], 10);
  let b = parseInt(input[2], 10);
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let s = i.toString().split("").map(elm => parseInt(elm, 10));
    let count = 0;
    
    for (let elm of s) {
      count += elm;
    }

    if (count >= a && count <= b) {
      result += i;
    }
  }
  
  console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("20 2 5");
