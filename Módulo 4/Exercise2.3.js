let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
for (const number of numbers) {
	console.log(number);
}

for (const number of numbers) {
	if (number % 2 === 0) {
		console.log(number);
	}
} 

for (const number of numbers) {
	if (number > 10 && number < 60) {
		console.log(number);
	}
} 