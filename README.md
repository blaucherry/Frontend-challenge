# 📘 Calculadora de Serie Compuesta

**Una aplicación web para calcular el valor de una serie matemática especial usando Fibonacci, números triangulares y primos.**  
Esta herramienta permite ingresar un número `n` para calcular el resultado de la fórmula:

serie(n) = F(n+1) - 2·T(n) + P(n+1)


Donde:
- `F(n+1)` es el término (n+1) de la **sucesión de Fibonacci**
- `T(n)` es el término n de la **serie triangular**
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

Sigue estos pasos para instalar el proyecto en cualquier máquina:

### 1. Clonar el repositorio

```bash
git clone https://github.com/blaucherry/Frontend-challenge.git
cd Frontend-challenge
2. Verificar que tienes Node.js y npm instalados
Este proyecto requiere:

Node.js ≥ 18
npm ≥ 9

Verifica tu instalación con:

node -v
npm -v
Si no los tienes, puedes descargar Node.js desde 👉 https://nodejs.org

3. Instalar dependencias
npm install

4. Ejecutar el proyecto localmente

npm start
Esto abrirá automáticamente la aplicación en tu navegador por defecto en:

http://localhost:3000

5. Ejecutar pruebas unitarias

npm test
Esto ejecutará las pruebas de la clase SeriesCalculator usando Jest.

🧠 Estructura del proyecto

frontend-challenge/
│
├── public/               # index.html base
├── src/
│   ├── components/       # Componentes visuales (formulario, resultado)
│   ├── core/series/      # Lógica matemática (Fibonacci, Triangular, Primo)
│   ├── hooks/            # Hook useSeries (gestión de estado)
│   ├── test/             # Pruebas unitarias
│   ├── App.jsx           # Orquestador principal
│   └── index.js          # Punto de entrada
│
├── package.json
└── README.md

🧪 Tecnología utilizada
Tecnología	Rol
React	Librería para UI
JavaScript	Lenguaje principal
Node.js	Entorno de ejecución (runtime)
Jest	Testing (pruebas unitarias)

📧 Entrega
Este proyecto ha sido desarrollado como parte de una entrevista técnica.
Puede ser instalado y ejecutado por cualquier evaluador con Node.js en su entorno.

