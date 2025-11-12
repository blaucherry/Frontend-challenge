import { useSeries } from './hooks/useSeries'
import SeriesForm from './components/SeriesForm'
import SeriesResult from './components/SeriesResult'

export default function App() {
  const { status, result, error, compute } = useSeries()

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 640,
        margin: '0 auto',
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.6
      }}
    >
      <h1 style={{ marginBottom: 4, fontSize: '2rem', color: '#0a2e5d' }}>
        Calculadora de Serie Compuesta
      </h1>
      <p style={{ fontSize: '1rem', marginTop: 0, color: '#333' }}>
        Fórmula:&nbsp;
        <code style={{ background: '#f0f4ff', padding: '2px 4px', borderRadius: 4 }}>
          serie(n) = F(n+1) - 2·T(n) + P(n+1)
        </code>
      </p>

      <SeriesForm onSubmit={compute} />

      <div style={{ marginTop: 20 }}>
        <SeriesResult status={status} result={result} error={error} />
      </div>
    </main>
  )
}
