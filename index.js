// Función para dibujar la carrera
function drawRace(posiciones, longitud) {
    // Cantidad de espacios blancos antes de empezar a dibujar el carril.
    let espaciosBlancos;

    // Iteramos la lista de posiciones.
    for (let i = 0; i < posiciones.length; i++) {
        // Calculamos los espacios en blanco antes del carril.
        // Aquí estoy tomando en cuenta que el último carril no lleva espacios en blanco.
        espaciosBlancos = posiciones.length - i - 1;
        if (posiciones[i] === 0) { // Caso con carril vacío.
            /**
             * Imprimimos los espacios en blanco, luego repetimos la virgulilla "longitud" veces.
             */
            console.log(`${" ".repeat(espaciosBlancos)}${"~".repeat(longitud)} /${i + 1}`);
        }
        if (posiciones[i] > 0) { // Caso posición positiva.
            /**
             * Imprimimos los espacios en blanco, luego repetimos la virgulilla hasta una posición
             * antes que la del corredor, después imprimimos al corredor (la "r") y luego las virgulillas
             * que faltaron, esta últimas se calculan restándole la posición del corredor a la longitud
             * de la pista. Al final se imprime el número del carril.
             */
            console.log(`${" ".repeat(espaciosBlancos)}${"~".repeat(posiciones[i] - 1)}r${"~".repeat(longitud - posiciones[i])} /${i + 1}`);
        }
        if (posiciones[i] < 0) {
            /**
             * Imprimimos los espacios en blanco, luego aquí hacemos casi lo mismo que en el if anterior pero invertido,
             * ahora para las primeras virgulillas sumamos la posición a la longitud, ya que la posición es negativa.
             * Para las otras virgulillas le restamos lo que haya avanzado el corredor a la longitud -1 para considerar
             * lo que haya avanzado el fantasmita.
             */
            console.log(`${" ".repeat(espaciosBlancos)}${"~".repeat(longitud + posiciones[i])}r${"~".repeat(longitud - (longitud + posiciones[i]) - 1)} /${i + 1}`);
        }
    }
}

// PRUEBAS
drawRace([0, 5, -3], 10);
console.log();

drawRace([2, -1, 0, 5], 8);
console.log();

drawRace([3, 7, -2], 12);