document.addEventListener("DOMContentLoaded", function () {
  const keys = document.querySelector(".keys");
  const display = document.getElementById("display");

  let num1 = "";
  let num2 = "";
  let operator = "";
  let result = "";

  keys.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const key = e.target.textContent;

      if ((key >= "0" && key <= "9") || key === ".") {
        if (operator === "") {
          num1 += key;
          display.value = num1;
        } else {
          num2 += key;
          display.value = num2;
        }
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        if (num1 !== "") {
          operator = key;
          display.value = key; // Display the operator
        }
      } else if (key === "=") {
        if (num1 !== "" && num2 !== "" && operator !== "") {
          result = calculate(parseFloat(num1), parseFloat(num2), operator);
          display.value = result;
          // Reset for next calculation
          num1 = result;
          num2 = "";
          operator = "";
        }
      } else if (key === "C") {
        num1 = "";
        num2 = "";
        operator = "";
        result = "";
        display.value = "";
      }
    }
  });

  function calculate(n1, n2, op) {
    switch (op) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "*":
        return n1 * n2;
      case "/":
        return n2 !== 0 ? n1 / n2 : "Erreur: Div par 0";
      default:
        return "";
    }
  }
});
