import SeriesCalculator from '../core/series/SeriesCalculator'

describe('SeriesCalculator', () => {
  const calculator = new SeriesCalculator()

  test('calcula correctamente los primeros 10 valores esperados', () => {
    const esperados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let n = 0; n < esperados.length; n++) {
      const resultado = calculator.calculate(n)
      expect(resultado).toBe(esperados[n])
    }
  })

  test('lanza error si n no es un entero', () => {
    expect(() => calculator.calculate(3.5)).toThrow()
    expect(() => calculator.calculate('hola')).toThrow()
  })

  test('lanza error si n es mayor a 77', () => {
    expect(() => calculator.calculate(78)).toThrow()
  })
})
