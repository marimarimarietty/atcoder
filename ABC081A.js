function Main(input) {
  let count = 0;
  
  for (let elm of input) {
    if (elm === "1") {
      count++;
    }
  }
  
  console.log(count);
}

Main("101");
