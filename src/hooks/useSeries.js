// Hook NO-visual: valida, gestiona estados y llama al core.
import { useState, useCallback } from 'react'
import SeriesCalculator from '../core/series/SeriesCalculator'

const calculator = new SeriesCalculator()

export function useSeries() {
  const [status, setStatus] = useState('idle')      // 'idle' | 'loading' | 'success' | 'error'
  const [result, setResult] = useState(null)        // número final
  const [error, setError] = useState(null)          // mensaje de error

  const compute = useCallback((raw) => {
    try {
      setError(null)
      setResult(null)

      // Validación temprana (string del input)
      const s = String(raw).trim()
      const onlyDigits = /^\d+$/.test(s)           // solo dígitos
      if (!onlyDigits) throw new Error('Ingresa solo enteros positivos')
      const n = parseInt(s, 10)
      if (!Number.isInteger(n) || n <= 0) throw new Error('Ingresa un entero mayor que 0')

      setStatus('loading')

      // Cálculo (sincrónico). Si quisieras async, podrías envolver en un setTimeout/Promise.
      const value = calculator.calculate(n)

      setResult(value)
      setStatus('success')
    } catch (e) {
      setStatus('error')
      setError(e.message || 'Error al calcular la serie')
    }
  }, [])

  return { status, result, error, compute }
}
