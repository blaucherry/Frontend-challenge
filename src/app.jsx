import { useSeries } from './hooks/useSeries'
import SeriesForm from './components/SeriesForm'
import SeriesResult from './components/SeriesResult'

export default function App() {
  const { status, result, error, compute } = useSeries()

  return (
    <main style={{ padding: 16, maxWidth: 560, margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: 6 }}>Calculadora de Serie Compuesta</h1>
      <p style={{ marginTop: 0 }}>
        Fórmula:&nbsp;
        <code>serie(n) = F(n+1) - 2·T(n) + P(n+1)</code>
      </p>

      <SeriesForm onSubmit={compute} />

      <div style={{ marginTop: 12 }}>
        <SeriesResult status={status} result={result} error={error} />
      </div>
    </main>
  )
}
