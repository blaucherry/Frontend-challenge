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
      const isInteger = /^-?\d+$/.test(s)
        if (!isInteger) throw new Error('Numero no válido: debe ser un entero')
    const n = parseInt(s, 10)

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
