/**
 * Número triangular T(n) = 1 + 2 + ... + n
 */
export default class Triangular {
  getTriangular(n) {
    if (n === 0) return 0
    let total = 0
    for (let i = 1; i <= n; i++) total += i
    return total
  }
}
