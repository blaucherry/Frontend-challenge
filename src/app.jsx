import { useSeries } from './hooks/useSeries'
import SeriesForm from './components/SeriesForm'
import SeriesResult from './components/SeriesResult'

export default function App() {
  const { status, result, error, compute } = useSeries()

  return (
    <div style={styles.container}>
      {/* Línea azul superior decorativa */}
      <div style={styles.line} />

      <header style={styles.header}>
        <h1 style={styles.title}>Calculadora de Serie Compuesta</h1>
        <p style={styles.subtitle}>
          Fórmula: <code>serie(n) = F(n+1) - 2·T(n) + P(n+1)</code>
        </p>
      </header>

      <main style={styles.main}>
        <SeriesForm onSubmit={compute} />
        <SeriesResult status={status} result={result} error={error} />
      </main>

      {/* Línea azul inferior decorativa */}
      <div style={{ ...styles.line, marginTop: 40 }} />

      {/* Pie de página opcional */}
      <footer style={styles.footer}>
        <small>© 2025 - Vianey Alcantar | Desafío técnico</small>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#e8f1fc',  
    minHeight: '100vh',
    padding: '30px',
    fontFamily: 'system-ui, sans-serif'
  },
  line: {
    height: 6,
    backgroundColor: '#b3d9ff',
    borderRadius: 2,
    marginBottom: 20
  },
  header: {
    marginBottom: 20
  },
  title: {
    fontSize: 26,
    margin: 0,
    color: '#113264',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: '#1c3f5f'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20
  },
  footer: {
    marginTop: 40,
    textAlign: 'center',
    color: '#444',
    fontSize: 12
  }
}
