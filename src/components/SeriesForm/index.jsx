import { useState } from 'react'

export default function SeriesForm({ onSubmit }) {
  const [value, setValue] = useState('')

  const isValid = /^\d+$/.test(value) && parseInt(value || '0', 10) > 0
  const helper =
    value === ''
      ? 'Ingresa un entero > 0'
      : isValid
      ? 'Listo para calcular'
      : 'Solo enteros positivos (sin decimales ni signos)'

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(value) 
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form} noValidate>
      <label style={styles.label}>
        Número n (entero > 0)
        <input
          style={styles.input}
          type="text"
          inputMode="numeric"
          placeholder="Ej. 7"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-describedby="n-helper"
          aria-invalid={!isValid && value !== ''}
        />
      </label>

      <small id="n-helper" style={{ ...styles.helper, color: isValid ? '#0a7' : '#b00' }}>
        {helper}
      </small>

      <button
        style={{ ...styles.button, opacity: isValid ? 1 : 0.6 }}
        type="submit"
        disabled={!isValid}
        title={isValid ? 'Calcular' : 'Corrige el valor'}
      >
        Calcular
      </button>
    </form>
  )
}

const styles = {
  form: { display: 'flex', gap: 10, alignItems: 'flex-end', marginBottom: 12, flexWrap: 'wrap' },
  label: { display: 'flex', flexDirection: 'column', gap: 6, minWidth: 220 },
  input: { padding: '8px 10px', border: '1px solid #ccc', borderRadius: 6 },
  helper: { fontSize: 12 },
  button: {
    padding: '8px 14px',
    border: '1px solid #2b6',
    background: '#2b6',
    color: 'white',
    borderRadius: 6,
    cursor: 'pointer'
  }
}
