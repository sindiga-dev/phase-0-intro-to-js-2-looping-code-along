// Code your solutions in this file
function writeCards(names, event) {
	let message = [];
	let i = 0;
	for (i = 0; i < names.length; i++) {
		message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
	}
	return message;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "Surprise"));
function countDown(number) {
	while (number >= 0) {
		console.log(number);
		number--;
	}
}