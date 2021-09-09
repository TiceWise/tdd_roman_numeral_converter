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
    ${11} | ${'XI'}
    ${14} | ${'XIV'}
    ${20} | ${'XX'}
    ${39} | ${'XXXIX'}
    ${40} | ${'XL'}
    ${49} | ${'XLIX'}
    ${50} | ${'L'}
    ${89} | ${'LXXXIX'}
    ${90} | ${'XC'}
    ${100} | ${'C'}
    ${399} | ${'CCCXCIX'}
    ${400} | ${'CD'}
    `('converts $number to $expected', ({number, expected}) => {
        expect(convertToRomanNumber(number)).toBe(expected)
    })

})