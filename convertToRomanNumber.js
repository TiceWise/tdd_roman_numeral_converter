function romanNumeralConverter({remainder, numeral}, higherNumber, lowerNumber, higherNumeral, lowerNumeral) {
    while (remainder >= higherNumber) {
        numeral = numeral.concat(higherNumeral);
        remainder -= higherNumber;
    }
    if (remainder >= higherNumber - lowerNumber) {
        numeral = numeral.concat(lowerNumeral + higherNumeral);
        remainder -= (higherNumber - lowerNumber);
    }
    return {remainder, numeral};
}

function convertToRomanNumber(number) {
    let numeral = '';
    let remainder = number;
    let remNumTup = {remainder, numeral};
    remNumTup = romanNumeralConverter(remNumTup, 1000, 100, "M", "C");
    remNumTup = romanNumeralConverter(remNumTup, 500, 100, "D", "C");
    remNumTup = romanNumeralConverter(remNumTup, 100, 10, "C", "X");
    remNumTup = romanNumeralConverter(remNumTup, 50, 10, "L", "X");
    remNumTup = romanNumeralConverter(remNumTup, 10, 1, "X", "I");
    remNumTup = romanNumeralConverter(remNumTup, 5, 1, "V", "I");
    remNumTup = romanNumeralConverter(remNumTup, 1, 0, "I", "");

    return remNumTup.numeral;
}

module.exports = convertToRomanNumber