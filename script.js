let firstInput;
let secondInput;
let operator = "+";

function input1(val) {
  firstInput = val;
}
function input2(val) {
  secondInput = val;
}
function calculate(val) {
  operator = val;
}
function total() {
  if (firstInput && secondInput) {
    document.getElementsByClassName("output")[0].innerHTML = eval(
      firstInput + operator + secondInput
    );
    document.getElementsByClassName("output")[0].style = "color:black;";
  } else {
    document.getElementsByClassName("output")[0].innerHTML =
      "Please enter a number";
    document.getElementsByClassName("output")[0].style = "color:red;";
  }
}
