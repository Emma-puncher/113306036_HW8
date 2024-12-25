var selectedWay = document.getElementById("operators");
var btn = document.getElementById("calculate");
selectedWay.addEventListener("change", changeBtn);

function changeBtn() {
	if (selectedWay.value == "+") {
		btn.innerHTML = "add";
	} else if (selectedWay.value == "-") {
		btn.innerHTML = "subtract";
	} else if (selectedWay.value == "*") {
		btn.innerHTML = "multiply";
	} else if (selectedWay.value == "/") {
		btn.innerHTML = "divide";
	} else {
		btn.innerHTML = "none";
	}
}


btn.addEventListener("click", calculate);

function calculate() {

	checkNum();

	var method = document.getElementById("operators").value;
	if (method == "+") {
		add();
	} else if (method == "-") {
		subtract();
	} else if (method == "*") {
		multiply();
	} else if (method == "/") {
		divide();
	} else {
		alert("Please choose an operator!");
	}

}

function add() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);

	var addValue = (num1 + num2).toFixed(2);

	var result = document.getElementById("result");
	result.textContent = `Result = ${addValue}`;
	clearInputs();
}

function subtract() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);

	var subtarctValue = (num1 - num2).toFixed(2);

	var result = document.getElementById("result");
	result.innerHTML = `Result = ${subtarctValue}`;
	clearInputs();
}

function multiply() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);

	var multiplyValue = (num1 * num2).toFixed(2);

	var result = document.getElementById("result");
	result.innerHTML = `Result = ${multiplyValue}`;
	clearInputs();
}

function divide() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);

	if (num2 === 0) {
		alert("Cannot divide by zero!");
		return;
	}

	var divideValue = (num1 / num2).toFixed(2);

	var result = document.getElementById("result");
	result.innerHTML = `Result = ${divideValue}`;
	clearInputs();
}

function checkNum() {
	let num1 = document.getElementById("num1").value;
	let num2 = document.getElementById("num2").value;
	if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
		alert("Please enter valid numbers!");
		return false;
	}
	return true;
}

function clearInputs() {
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
}