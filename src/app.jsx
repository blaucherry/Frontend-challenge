import { useSeries } from './hooks/useSeries'
import SeriesForm from './components/SeriesForm'
import SeriesResult from './components/SeriesResult'

export default function App() {
  const { status, result, error, compute } = useSeries()

  return (
    <div style={styles.container}>
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

      <div style={styles.line} />

      <footer style={styles.footer}>
        <img
          src="/cinnamoroll.png" // Asegúrate que este archivo esté en la carpeta public/
          alt="Cinnamoroll"
          style={styles.footerImg}
        />
        <span>© 2025 – Vianey Alcantar | Desafío técnico</span>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#e8f1fc',
    minHeight: '100vh',
    padding: '30px',
    fontFamily: 'system-ui, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    marginBottom: '20px'
  },
  title: {
    fontSize: '26px',
    margin: 0,
    color: '#113264'
  },
  subtitle: {
    marginTop: '6px',
    fontSize: '16px',
    color: '#1c3f5f'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  line: {
    height: '5px',
    backgroundColor: '#a3ccf5',
    margin: '10px 0',
    borderRadius: '2px'
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    color: '#333',
    fontSize: '14px'
  },
  footerImg: {
    height: 30,
    marginRight: 8,
    verticalAlign: 'middle'
  }
}
