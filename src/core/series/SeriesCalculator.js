/**
 * Serie(n) = F(n+1) - 2 * T(n) + P(n+1)
 * - F: Fibonacci
 * - T: Triangular
 * - P: k-ésimo primo
 * Validamos: n entero > 0 y un límite alto (≈77) para evitar overflow en JS.
 */
import Fibonacci from './fibonacci'
import Triangular from './triangular'
import Primo from './primo'

function ensureValidN(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('n debe ser un entero mayor que 0')
  }
  if (n > 77) {
    throw new Error('n es muy grande para un cálculo preciso (use n ≤ 77)')
  }
}

export default class SeriesCalculator {
  constructor() {
    // Instanciamos las clases auxiliares una sola vez
    this.fib = new Fibonacci()
    this.tri = new Triangular()
    this.prm = new Primo()
  }

  calculate(n) {
    ensureValidN(n)
    const f = this.fib.getFibonacci(n + 1) // F(n+1)
    const t = this.tri.getTriangular(n)    // T(n)
    const p = this.prm.getPrimoK(n + 1)    // P(n+1)
    return f - 2 * t + p
  }
}
