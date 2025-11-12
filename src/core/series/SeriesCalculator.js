import Fibonacci from './fibonacci.js';
import Triangular from './triangular.js';
import Primo from './primo.js';
/**
 * Clase que calcula la serie:
 * S = Fibonacci(n+1) - (2 * Triangular(n)) + Primo(n+1)
 */
class SeriesCalculator {

    /**
     * Método principal que calcula el valor de la serie para un 'n' dado.
     */
    calculate(n) {
        
        // 1. Calcular el valor de Fibonacci para (n+1)
        const fibValue = Fibonacci().getFibonacci(n);
        
        // 2. Calcular el valor Triangular para (n)
        const triValue = Triangular().getTriangular(n);

        // 3. Calcular el valor Primo para (n+1)
        const primeValue = Primo().getPrimo(n);

        // 4. Aplicar la fórmula y devolver el resultado
        return fibValue - (2 * triValue) + primeValue;
    }


}
