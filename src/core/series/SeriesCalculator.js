
import Fibonacci from './fibonacci'
import Triangular from './triangular'
import Primo from './primo'

function ensureValidN(n) {
  if (!Number.isInteger(n)) {
    throw new Error('Coloca un número entero')
  }

  if (n < 0) {
    throw new Error('El número debe ser mayor o igual a 0')
  }

  if (n > 77) {
    throw new Error('El número es muy grande para calcularlo con precisión')
  }
}

export default class SeriesCalculator {
  constructor() {
    this.fib = new Fibonacci()
    this.tri = new Triangular()
    this.prm = new Primo()
  }

  calculate(n) {
    ensureValidN(n)

    const f = this.fib.getFibonacci(n + 1)  // F(n+1)
    const t = this.tri.getTriangular(n)     // T(n)
    const p = this.prm.getPrimoK(n + 1)     // P(n+1)

    return f - 2 * t + p
  }
}
