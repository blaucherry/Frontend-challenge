/**
 * Calcula F(k) (k-ésimo Fibonacci) con iteración.
 * Sucesión: 0, 1, 1, 2, 3, 5, ...
 * Índices:  0, 1, 2, 3, 4, 5, ...
 */
export default class Fibonacci {
  getFibonacci(k) {
    // Casos base
    if (k === 0) return 0
    if (k === 1) return 1

    // Iteración: acumulamos los dos anteriores
    let a = 0
    let b = 1
    for (let i = 2; i <= k; i++) {
      const next = a + b
      a = b
      b = next
    }
    return b
  }
}
