/**
 * Clase que calcula el elemento (n+1) de la sucesión de Fibonacci
 * usando un bucle simple (iteración).
 */
class Fibonacci {
    
    /**
     *  Método principal: Calcula el elemento (n+1) de la sucesión.
     * (El elemento n+1 de la sucesión corresponde al índice 'n').
     *
     * Sucesión: 0, 1, 1, 2, 3, 5, 8...
     * Índice n: 0, 1, 2, 3, 4, 5, 6...
     *
     * 
     */
    getFibonacci(n) {

        //  Casos base (los inicios de la sucesión):
        // Si n=0, el valor es 0.
        if (n === 0) {
            return 0;
        }
        // Si n=1, el valor es 1.
        if (n === 1) {
            return 1;
        }

        // Necesitamos rastrear los dos números anteriores en la sucesión.
        // Empezamos la sucesión en el índice 0 y 1.
        let a = 0; // Valor en el índice (k-2)
        let b = 1; // Valor en el índice (k-1)
        
        // current almacenará el resultado de la suma (a + b)
        let current; 

        //  Iteración:
        // Empezamos en i = 2 (porque ya tenemos los casos 0 y 1).
        // Continuamos hasta que lleguemos al índice 'n' solicitado.
        for (let i = 2; i <= n; i++) {
            
            // 4.1. Regla de Fibonacci:
            // El valor actual es la suma de los dos anteriores (a + b).
            current = a + b;

            // Actualización para la siguiente vuelta del bucle:
            // Movemos los números un paso adelante en la sucesión.
            
            // 'a' (que era k-2) toma el valor de 'b' (que era k-1).
            a = b; 
            
            // 'b' (que era k-1) toma el valor de 'current' (que ahora es k).
            b = current;
        }

        // 5. Resultado:
        return b;
    }
}
