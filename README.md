# 📘 Calculadora de Serie Compuesta

**Una aplicación web para calcular el valor de una serie matemática especial usando Fibonacci, números triangulares y primos.**  
Esta herramienta permite ingresar un número `n` para calcular el resultado de la fórmula:

serie(n) = F(n+1) - 2·T(n) + P(n+1)


Donde:
- `F(n+1)` es el término (n+1) de la **sucesión de Fibonacci**
- `T(n)` es el término `n` de la **serie triangular**
- `P(n+1)` es el término (n+1) de los **números primos**

---

## ✨ Características

- ✔️ Interfaz sencilla e intuitiva
- 🔢 Validación de entrada para aceptar enteros positivos, negativos y cero
- ⚙️ Cálculo de valores usando una clase separada (`SeriesCalculator`)
- 🧪 Pruebas unitarias para verificar la lógica de la serie
- ⚛️ Componentes React independientes y reutilizables
- 🎨 Estilizado básico con colores azulados y centrado visual limpio

---

## 📦 Instalación y ejecución del proyecto

```bash
# Clona el repositorio
git clone https://github.com/blaucherry/Frontend-challenge.git
cd Frontend-challenge

# Verifica que tienes Node.js y npm instalados
# (Este proyecto requiere Node.js >= 18 y npm >= 9)
node -v
npm -v

# Si no los tienes, instálalos desde: https://nodejs.org

# Instala las dependencias del proyecto
npm install

# Ejecuta la aplicación en modo desarrollo
npm start

# Abre en tu navegador:
# http://localhost:3000

# (Opcional) Ejecuta las pruebas unitarias
npm test
```
