// Kagami Mochi
// Card Game for Two
function Main(input) {
	input = input.split("\n");
  input.pop()
  let count = 0;

  const newArr = [];
  for (let i = 1; i < input.length; i++) {
    newArr.push(Number(input[i]));
  }

  const sortedArr = newArr.sort((a, b) => {
    return (a > b ? -1 : 1);
  })

  for (let j = 0; j < sortedArr.length; j++) {
    if (j === 0) {
      count++;
      prevVal = sortedArr[j];
    } else {
      if (sortedArr[j] < prevVal) {
        count++;
        prevVal = sortedArr[j];
      }
    }
  }
  
  console.log(count);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("4\n10\n8\n8\n6");
