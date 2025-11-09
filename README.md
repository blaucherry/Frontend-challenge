# Frontend-challenge
¿Qué es? 🧩
Una mini-aplicación que calcula el valor de una serie numérica a partir de un número natural n ingresado por la persona usuaria.
¿Cómo funciona? ▶️


Ingresa un entero ≥ 0 en el campo n.


Pulsa Calcular.


La app valida el dato y muestra el resultado de la serie; si hay error, verás un mensaje claro.


La serie ➗
serie(n) = fibonacci(n+1) − 2·triangular(n) + primo(n+1)

Definiciones:


fibonacci(k): k-ésimo número de Fibonacci (F0=0, F1=1…).


triangular(n): suma de 1..n.


primo(k): k-ésimo número primo (2, 3, 5, 7…).


Validaciones ✅


Solo enteros (sin decimales).


Solo valores ≥ 0.


Si no cumple, se muestra error y no se calcula.


Qué verás en pantalla 🖥️


Campo para n y botón Calcular.


Estados: listo, validando/calculando, resultado, error.


Salida: el valor numérico de serie(n).


Alcance 📌


Sin persistencia ni conexiones externas.


Enfoque en claridad del cálculo y respuesta inmediata.

