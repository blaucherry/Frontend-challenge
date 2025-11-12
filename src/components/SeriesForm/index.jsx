import { useState } from 'react'

export default function SeriesForm({ onSubmit }) {
  const [value, setValue] = useState('')

  // Validación: solo acepta enteros positivos
  const isValid = /^\d+$/.test(value) && parseInt(value || '0', 10) > 0

  const helper =
    value === ''
      ? 'Ingresa un entero mayor que 0'
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
        <span style={styles.labelText}>Número <strong>n</strong> (entero &gt; 0)</span>
        <input
          style={{
            ...styles.input,
            borderColor: isValid ? '#4a90e2' : '#ccc',
            outlineColor: isValid ? '#4a90e2' : '#e74c3c'
          }}
          type="text"
          inputMode="numeric"
          placeholder="Ej. 7"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-describedby="n-helper"
          aria-invalid={!isValid && value !== ''}
        />
      </label>

      <small
        id="n-helper"
        style={{
          ...styles.helper,
          color: isValid ? '#2c7' : '#e74c3c'
        }}
      >
        {helper}
      </small>

      <button
        style={{
          ...styles.button,
          background: isValid ? '#4a90e2' : '#b0c9eb',
          cursor: isValid ? 'pointer' : 'not-allowed'
        }}
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
  form: {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-end',
    marginBottom: 20,
    flexWrap: 'wrap'
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    minWidth: 220
  },
  labelText: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4
  },
  input: {
    padding: '10px 12px',
    border: '2px solid #ccc',
    borderRadius: 6,
    fontSize: 16,
    transition: 'border-color 0.3s, outline-color 0.3s'
  },
  helper: {
    fontSize: 13,
    marginTop: 4,
    minHeight: 18
  },
  button: {
    padding: '10px 18px',
    fontSize: 16,
    border: 'none',
    color: 'white',
    borderRadius: 6,
    transition: 'all 0.3s ease-in-out'
  }
}
