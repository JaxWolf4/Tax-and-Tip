var billEle = document.body.querySelector(".bill");

var num1 = Number(prompt("What is your total bill?"));

var sum = ((num1)*1.07)*1.05;

sum = parseFloat(sum).toFixed(2);

billEle.innerHTML = sum;