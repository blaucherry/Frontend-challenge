/**
 * Clase que encuentra el (n+1)-ésimo número primo.
 */
class Primo {
    
    /**
     * Método principal: Encuentra el (n+1)-ésimo número primo.
     * (El primo n+1 corresponde al índice 'n').
     *
     * Sucesión: 2, 3, 5, 7, 11, 13...
     * Índice n: 0, 1, 2, 3, 4,  5...
     *
     */
    getPrimo(n) {


        // Contador de cuántos primos hemos encontrado.
        let primesFound = 0;
        
        // El número que estamos revisando actualmente (empezamos en 2).
        let currentNum = 2;

        // Almacena el último primo que encontramos.
        let latestPrime = 0;

        // Continuamos hasta que hayamos encontrado (n + 1) primos.
        // (Para obtener el índice 'n', necesitamos el (n+1)-ésimo elemento).
        while (primesFound <= n) {
            
            // Revisar si el número actual es primo
            // (usando nuestro método auxiliar 'esPrimo').
            if (this.esPrimo(currentNum)) {

                // Si es primo, lo guardamos.
                latestPrime = currentNum;
                
                // Incrementamos el contador de primos encontrados.
                primesFound++;
            }
            
            // Pasar al siguiente número para revisarlo.
            currentNum++;
        }

        // Resultado:
        return latestPrime;
    }


    /**
     * Método auxiliar (helper) para determinar si un número es primo.
     */
    esPrimo(num) {
        
        // Los números menores o iguales a 1 no son primos.
        if (num === 1) {
            return false;
        }

        // Solo revisamos hasta la raíz cuadrada del número.
        // Si no encontramos un divisor hasta su raíz, no lo tendrá después.
        for (let i = 2; i <= Math.sqrt(num); i++) {
            
            // Si 'num' es divisible por 'i', significa que tiene un divisor.
            if (num % i === 0) {
                // Por lo tanto, no es primo.
                return false;
            }
        }

        // Si el bucle termina sin encontrar divisores, el número es primo.
        return true;
    }
}