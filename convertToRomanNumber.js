function convertToRomanNumber(number) {
    // const numeric = [1, 5, 10, 50, 100]
    // const roman = ['I', 'V', 'X', 'L']

    if (number === 0) {
        return ''
    }
    if (number >= 1 && number < 5-1) {
        return 'I'.repeat(number)
    }
    if (number >= 5-1 && number < 5) {
        return 'IV'
    }
    if (number >= 5 && number < 10-1) {
        return 'V' + convertToRomanNumber(number % 5)
    }
    if (number >= 10-1 && number < 10) {
        return 'IX'
    }
    if (number >= 10 && number < 50-10) {
        return 'X'.repeat(Math.floor(number / 10)) + convertToRomanNumber(number % 10)
    }
    if (number >= 50-10 && number < 50) {
        return 'XL' + convertToRomanNumber(number % 10)
    }
    if (number >= 50 && number < 100-10) {
        return 'L' + convertToRomanNumber(number % 50)
    }
    if (number >= 100-10 && number < 100) {
        return 'XC' + convertToRomanNumber(number % 10)
    }
    if (number >= 100 && number < 500-100) {
        return 'C'.repeat(Math.floor(number/100)) +convertToRomanNumber(number % 100)
    }
    if (number >= 500-100 && number < 500) {
        return 'CD' + convertToRomanNumber(number % 100)
    }

    // 1 , 5 , 10 , 50 , 100 , 500 , 1000
    // I , V , X  , L  , C   , D   , M
}

// function convert2(number){
//     let out = ''
//     out = out + 'M'.repeat(Math.floor(number/1000))
//     let remainder = number % 1000
//     1000-100
//     const remainder
// }


module.exports = convertToRomanNumber