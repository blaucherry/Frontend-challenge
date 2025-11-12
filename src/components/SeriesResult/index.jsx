// COMPONENTE VISUAL DONDE SE MUESTRA EL RESULTADO
export default function SeriesResult({ status, result, error }) {
  if (status === 'idle') {
    return <p style={styles.muted}>Ingresa un valor y presiona “Calcular”.</p>
  }
  if (status === 'loading') {
    return <p style={styles.info}>Calculando…</p>
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
  muted: { color: '#666' },
  info: { color: '#036' },
  error: { color: 'crimson', fontWeight: 600 },
  success: { color: '#074', fontWeight: 600 }
}
