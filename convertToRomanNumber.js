const NUMBER_NUMERAL_PAIRS = new Map([
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I'],
    [0, '']
]);

function romanNumeralConverter({remainder, numeral}, higherNumber) {
    if (higherNumber === 0) {
        return {remainder, numeral}
    }

    let lowerNumber
    if (higherNumber === 1) {
        lowerNumber = 0
    } else if (firstDigit(higherNumber)===1) {
        lowerNumber = higherNumber / 10
    } else if (firstDigit(higherNumber)===5) {
        lowerNumber = higherNumber / 5
    }

    while (remainder >= higherNumber) {
        numeral = numeral.concat(NUMBER_NUMERAL_PAIRS.get(higherNumber));
        remainder -= higherNumber;
    }
    if (remainder >= higherNumber - lowerNumber) {
        numeral = numeral.concat(NUMBER_NUMERAL_PAIRS.get(lowerNumber) + NUMBER_NUMERAL_PAIRS.get(higherNumber));
        remainder -= (higherNumber - lowerNumber);
    }
    return {remainder, numeral};
}

function firstDigit(number) {
    let first = number
    while(first >= 10)
    {
        first = Math.floor(first / 10);
    }
    return first
}

function convertToRomanNumber(number) {
    let numeral = '';
    let remainder = number;
    let remNumTup = {remainder, numeral};

    for (let key of NUMBER_NUMERAL_PAIRS.keys()) {
        remNumTup = romanNumeralConverter(remNumTup, key);
    }

    return remNumTup.numeral;
}

module.exports = {
    convertToRomanNumber,
    firstDigit
}