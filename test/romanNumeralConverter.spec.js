const functs = require('../convertToRomanNumber')

describe('Roman Number Converter', () => {
    it.each`
    number | expected
    ${1} | ${'I'}
    ${2} | ${'II'}
    ${3} | ${'III'}
    ${4} | ${'IV'}
    ${5} | ${'V'}
    ${6} | ${'VI'}
    ${9} | ${'IX'}
    ${10} | ${'X'}
    ${11} | ${'XI'}
    ${14} | ${'XIV'}
    ${19} | ${'XIX'}
    ${20} | ${'XX'}
    ${39} | ${'XXXIX'}
    ${40} | ${'XL'}
    ${50} | ${'L'}
    ${80} | ${'LXXX'}
    ${90} | ${'XC'}
    ${99} | ${'XCIX'}
    ${300} | ${'CCC'}
    ${400} | ${'CD'}
    ${900} | ${'CM'}
    ${1000} | ${'M'}
    ${1900} | ${'MCM'}
    ${3999} | ${'MMMCMXCIX'}
    `('converts $number to $expected', ({number, expected}) => {
        expect(functs.convertToRomanNumber(number)).toBe(expected)
    })

    it.each`
    number | expected
    ${1} | ${1}
    ${9} | ${9}
    ${10} | ${1}
    ${99} | ${9}
    ${239482} | ${2}
    ${98239} | ${9}
    `('returns first digit of a number', ({number, expected}) => {
        expect(functs.firstDigit(number)).toBe(expected)
    })
})