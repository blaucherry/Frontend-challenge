// Componente visual que muestra el estado del cálculo
export default function SeriesResult({ status, result, error }) {
  if (status === 'idle') {
    return <p style={styles.muted}>🔹 Ingresa un valor y presiona “Calcular”.</p>
  }

  if (status === 'loading') {
    return <p style={styles.info}>⏳ Calculando…</p>
  }

  if (status === 'error') {
    return (
      <p role="alert" style={styles.error}>
        {error}
      </p>
    )
  }

  if (status === 'success') {
    return (
      <p style={styles.success}>
        Resultado de <strong>serie(n)</strong>: <strong>{result}</strong>
      </p>
    )
  }

  return null
}

const styles = {
  muted: { color: '#555', fontSize: '16px', marginTop: 8 },
  info: { color: '#3b6edc', fontSize: '16px', marginTop: 8 },
  error: { color: '#e74c3c', fontWeight: 600, fontSize: '16px', marginTop: 8 },
  success: { color: '#2c7', fontWeight: 600, fontSize: '18px', marginTop: 8 }
}
