import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'

test('renderiza el título principal', () => {
  render(<App />)
  const heading = screen.getByText(/Calculadora de Serie Compuesta/i)
  expect(heading).toBeInTheDocument()
})

test('renderiza el formulario con placeholder', () => {
  render(<App />)
  const input = screen.getByPlaceholderText(/Ej. 7/i)
  expect(input).toBeInTheDocument()
})

test('renderiza el botón Calcular', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /Calcular/i })
  expect(button).toBeInTheDocument()
})
