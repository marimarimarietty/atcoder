function Main(input) {
  input = input.split(" ");
  result = input[0] * input[1];
  result % 2 === 0 ? console.log("Even") : console.log("Odd");
}

Main("1 1");
Main("1 22");
