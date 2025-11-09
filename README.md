<h1 align="center">Sngular × BBVA — Frontend Trainee 💙</h1>
<p align="center">Aplicación minimal para calcular una serie numérica con validación clara y respuesta inmediata.</p>

---

## Visión general 🔵
La aplicación recibe un número natural `n` y entrega el valor de la serie definida a continuación. El enfoque es precisión, accesibilidad base y comunicación de estados.

## Fórmula 📘
serie(n) = fibonacci(n+1) − 2·triangular(n) + primo(n+1)

**Definiciones operativas:**
- `fibonacci(k)`: k-ésimo número de Fibonacci (F0=0, F1=1).
- `triangular(n)`: suma 1..n.
- `primo(k)`: k-ésimo número primo (2, 3, 5, 7…).

## Flujo de uso 🧩
1. Ingresar un **entero ≥ 0** en el campo `n`.  
2. Seleccionar **Calcular**.  
3. La interfaz valida la entrada y muestra el **resultado** o un **mensaje de error**.

**Estados de interfaz:** listo → validando/calculando → resultado | error.

## Validaciones ✅
- Solo números **enteros** (sin decimales).  
- Solo valores **≥ 0**.  
- En caso de incumplimiento, se informa el motivo y no se ejecuta el cálculo.

## Salida esperada 📊
- Valor numérico de **`serie(n)`**.  
- Mensajería breve y directa para errores de entrada.

## Tabla oráculo (n = 0..9) 🔷
Complete la tabla y utilícela como referencia en pruebas.

| n | fibonacci(n+1) | triangular(n) | primo(n+1) | **serie(n)** |
|---:|---------------:|--------------:|-----------:|-------------:|
| 0 |                 |               |            |              |
| 1 |                 |               |            |              |
| 2 |                 |               |            |              |
| 3 |                 |               |            |              |
| 4 |                 |               |            |              |
| 5 |                 |               |            |              |
| 6 |                 |               |            |              |
| 7 |                 |               |            |              |
| 8 |                 |               |            |              |
| 9 |                 |               |            |              |

## Alcance 📘
- No persiste datos ni realiza llamadas externas.  
- Centrado en claridad del cálculo, validación de entrada y estados visibles.

## Nota de precisión 🔹
`primo(k)` se interpreta como **k-ésimo número primo**. Se documenta para evitar ambigüedades durante la revisión.
