let numberOne = 4;
let operand = "";
let numberTwo = 3;
let result = ""


function add(numberOne, operand, numberTwo) {
  if (operand === "+") {
    result = numberOne + numberTwo;
    console.log(result)
    return result;
  }
  else if (operand === "-"){
    result = numberOne - numberTwo;
    console.log(result)
    return result;
  }
  else if (operand === "x"){
    result = numberOne * numberTwo;
    console.log(result)
    return result;
  }
  else {
    result = numberOne / numberTwo;
    console.log(result)
    return result;
  }
}

add(numberOne, operand, numberTwo)