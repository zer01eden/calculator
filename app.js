'use strict';

function add(a, b) {
	return a + b;
}
// console.log(add(1, 5));
// console.log(add(11, 56));

var userNum1 = Number(prompt('add first number', 'write only number'));
var userNum2 = Number(prompt('add your second number', 'write only number'));

var sum = add(userNum1, userNum2);

if (sum) {
	alert(`your result is: ${sum}`);
} else {
	if (sum === 0) {
		alert(`your result is: ${sum}`);
	} else {
		alert(`you add wrong data, try again`);
	}
}