// inputに入力データ全体が入る
function Main(input) {
	// input = input.split("\n");
	// tmp = input[1].split(" ");
  input = input.split(" ");
  let count = 0;
	
  const divideTwo = (arr) => {
    const result = [];
    for (const elm of arr) {
      if (parseInt(elm, 10) % 2 !== 0) {
        return;
      } else {
        result.push(elm / 2);
      }
    }

    count++;
    divideTwo(result);
  }

  divideTwo(input);
  console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("8 12 40");
