
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function () {
  colorBtn.classList.toggle("red");
});


const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", function () {
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  alert(greeting);
});


const calcBtn = document.getElementById("calcBtn");
calcBtn.addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value) || 0;
  const num2 = parseFloat(document.getElementById("num2").value) || 0;
  const sum = num1 + num2;
  document.getElementById("result").innerText = "Result: " + sum;
});
