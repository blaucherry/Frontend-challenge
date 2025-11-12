/**
 * Clase que calcula el número triangular (la suma de 1...n).
 */
class Triangular {
    
    /**
     * Método principal: Calcula la suma de todos los enteros
     * desde 1 hasta n.
     *
     * Ejemplo: Si n=4, calcula 1 + 2 + 3 + 4 = 10.
     * */
    getTriangular(n) {

        // Si n es 0.
        if (n === 0) {
            return 0;
        }

        // Variable para almacenar la suma acumulada.
        let total = 0; 

        // Empezamos en i = 1 (el inicio de la suma).
        // Continuamos hasta que lleguemos al 'n' solicitado.
        for (let i = 1; i <= n; i++) {
            // Acumulamos el valor actual de 'i' al total.
            total = total + i;
        }

        //  Resultado:
        return total;
    }
}