'use strict';

//i try use IIFE

(function () {
	var numbersAmount = 3;

	function add(a, b) {
		return a + b;
	}
	function showResult() {
		if (sum) {
			alert(`your result is: ${sum}`);
		} else {
			if (sum === 0) {
				alert(`your result is: ${sum}`);
			} else {
				alert(`you add wrong data, try again`);
			}
		}
	}

	var userNum1 = Number(prompt('add first number', 'write only number'));
	var userNum2 = Number(prompt('add your second number', 'write only number'));

	var sum = add(userNum1, userNum2);

	showResult();
})();
