// COMPONENTE NO VISUAL QUE CONTIENE LA LÓGICA DE CÁLCULO DE LA SERIE
import { useState, useCallback } from 'react'
import SeriesCalculator from '../core/series/SeriesCalculator'

const calculator = new SeriesCalculator()

export function useSeries() {
  const [status, setStatus] = useState('idle')      
  const [result, setResult] = useState(null)        
  const [error, setError] = useState(null)          

  const compute = useCallback((raw) => {
    try {
      setError(null)
      setResult(null)

      
      const s = String(raw).trim()
      const onlyDigits = /^\d+$/.test(s)           
      if (!onlyDigits) throw new Error('Ingresa solo enteros positivos')
      const n = parseInt(s, 10)
      if (!Number.isInteger(n) || n <= 0) throw new Error('Ingresa un entero mayor que 0')

      setStatus('loading')

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
