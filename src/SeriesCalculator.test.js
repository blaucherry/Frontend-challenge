import SeriesCalculator from './core/series/SeriesCalculator'

describe('SeriesCalculator', () => {
  const calculator = new SeriesCalculator()

  const testCases = [
    { n: 0, expected: 3 },
    { n: 1, expected: 2 },
    { n: 2, expected: 1 },
    { n: 3, expected: -2 },
    { n: 4, expected: -4 },
    { n: 5, expected: -9 },
    { n: 6, expected: -12 },
    { n: 7, expected: -16 },
    { n: 8, expected: -15 },
    { n: 9, expected: -6 },
  ]

  testCases.forEach(({ n, expected }) => {
    test(`serie(${n}) should return ${expected}`, () => {
      expect(calculator.calculate(n)).toBe(expected)
    })
  })
})
