// Card Game for Two
function Main(input) {
	input = input.split("\n");
	tmp = input[1].split(" ");
  let n = input[0];

  const sortedTmp = tmp.sort((a, b) => {
    return (Number(a) > Number(b) ? -1 : 1);
  })

  let Alice = 0;
  let Bob = 0;
  
  for (let i = 0; i < sortedTmp.length; i++) {
    if (i % 2 === 0) {
      Alice += Number(sortedTmp[i]);
    } else {
      Bob += Number(sortedTmp[i]);
    }
  }

  console.log(Alice - Bob);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main("4\n20 18 2 18");
