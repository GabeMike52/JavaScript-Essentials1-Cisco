let frstNumber = prompt('Insert a number');
let scndNumber = prompt('Insert another number');
let result;
if (typeof frstNumber !== 'number' && typeof scndNumber !== 'number') {
	alert('You must insert numbers');
	frstNumber = prompt('Insert a number');
	scndNumber = prompt('Insert another number');
}
let operator = prompt('Insert one of the operations you want to do');
if (operator !== '-' && operator !== '+' && operator !== '*' && operator !== '/') {
	alert('Insert a valid operator');
	operator = ('Insert one of the operations you want to do');
}
switch (operator) {
	case '-':
	result = frstNumber - scndNumber;
	alert(`${frstNumber} - ${scndNumber} = ${result}`);
	break;
	case '+':
	result = frstNumber + scndNumber;
	alert(`${frstNumber} + ${scndNumber} = ${result}`);
	break;
	case '/':
	result = frstNumber / scndNumber;
	alert(`${frstNumber} / ${scndNumber} = ${result}`);
	break;
	case '*':
	result = frstNumber * scndNumber;
	alert(`${frstNumber} * ${scndNumber} = ${result}`);
	break;
}