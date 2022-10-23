// Integer Sum
// inputに入力データ全体が入る
function Main(input) {
	input = input.split("\n");
	let total = Number(input[0].split(" ")[0]);
  let numCount = Number(input[0].split(" ")[1]);
	let numArray = input[1].split(" ");
  let result = false;

  while(result != true) {
    for (let i = 0; i < numArray.length; i++) {
      if (String(total).indexOf(numArray[i]) !== -1) {
        result = false;
        break;
      } else {
        result = true;
      }
    }

    if (!result) {
      total++;
    }
  }

  console.log(total);

  
  
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("1000 8\n1 3 4 5 6 7 8 9");
