const convertToRomanNumber = require('../convertToRomanNumber')

describe('Roman Number Converter', () => {
    it.each`
    number | expected
    ${1} | ${'I'}
    ${2} | ${'II'}
    ${3} | ${'III'}
    ${4} | ${'IV'}
    ${5} | ${'V'}
    ${6} | ${'VI'}
    ${7} | ${'VII'}
    ${8} | ${'VIII'}
    ${9} | ${'IX'}
    ${10} | ${'X'}
    `('converts $number to $expected', ({number, expected}) => {
        expect(convertToRomanNumber(number)).toBe(expected)
    })

})