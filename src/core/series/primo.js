/**
 * Devuelve P(k): el k-ésimo número primo (2, 3, 5, 7, 11, ...).
 * Para k pequeño, probar primalidad por divisiones hasta sqrt(m) es suficiente.
 */
function isPrime(m) {
  if (m < 2) return false
  if (m === 2) return true
  if (m % 2 === 0) return false
  const limit = Math.floor(Math.sqrt(m))
  for (let d = 3; d <= limit; d += 2) {
    if (m % d === 0) return false
  }
  return true
}

export default class Primo {
  getPrimoK(k) {
    let count = 0
    let candidate = 1
    while (count < k) {
      candidate++
      if (isPrime(candidate)) count++
    }
    return candidate
  }
}
