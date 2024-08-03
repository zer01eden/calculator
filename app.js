'use strict';

//i try use IIFE

(function () {
	var numbersAmount = 3;

	function add(a, b) {
		return a + b;
	}
	function showResult(sum) {
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
	function getNumberFromUser() {
		var userNum = Number(prompt('add number', 'write only number'));
		return userNum;
	}

	var result = 0;

	for (var i = 0; i < numbersAmount; i++) {
		var number = getNumberFromUser();
		result = add(result, number);
	}
	showResult(result);
})();
