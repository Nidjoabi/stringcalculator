// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if (!string_numbers) return 0;

	return string_numbers
		.split(',')                           // Teile an Kommas
		.map(item => parseInt(item, 10))      // Versuche jede Zahl zu parsen
		.filter(num => !isNaN(num))           // Ignoriere nicht-numerische Werte wie "A"
		.reduce((sum, num) => sum + num, 0);  
};
