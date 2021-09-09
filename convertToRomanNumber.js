function convertToRomanNumber(number) {
    if (number < 4) {
        return 'I'.repeat(number)
    } else if (number === 4) {
        return 'IV'
    } else if (number >= 5 && number < 9) {
        return 'V' + convertToRomanNumber(number % 5)
    } else if (number === 9) {
        return 'IX'
    } else if (number === 10) {
        return 'X'
    }

    // 1 , 5 , 10 , 50 , 100 , 500 , 1000
    // I , V , X  , L  , C   , D   , M
}

module.exports = convertToRomanNumber