<<<<<<< HEAD
<h1 align="center">Calculadora de Serie Compuesta 💙 💙</h1>
=======
<h1 align="center">Calculadora de Serie Compuesta  💙</h1>
>>>>>>> 923391f32de75eabc89e648776f8ecfd38f57841
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

| n | fibonacci(n+1) | triangular(n) | primo(n+1) | **serie(n)** = f(n+1) − 2·t(n) + p(n+1) |
|---:|---------------:|--------------:|-----------:|----------------------------------------:|
| 0 | 1  | 0  | 2  | **3**  |
| 1 | 1  | 1  | 3  | **2**  |
| 2 | 2  | 3  | 5  | **1**  |
| 3 | 3  | 6  | 7  | **−2** |
| 4 | 5  | 10 | 11 | **−4** |
| 5 | 8  | 15 | 13 | **−9** |
| 6 | 13 | 21 | 17 | **−12**|
| 7 | 21 | 28 | 19 | **−16**|
| 8 | 34 | 36 | 23 | **−15**|
| 9 | 55 | 45 | 29 | **−6** |


## Alcance 📘
- No persiste datos ni realiza llamadas externas.  
- Centrado en claridad del cálculo, validación de entrada y estados visibles.

## Nota de precisión 🔹
`primo(k)` se interpreta como **k-ésimo número primo**. Se documenta para evitar ambigüedades durante la revisión.
