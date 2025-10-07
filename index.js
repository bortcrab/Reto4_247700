/**
Recibirás un arreglo de enteros que indica el avance de cada corredor:
    0: el carril está vacío.
    Número positivo: posición del corredor contando desde el inicio del carril.
    Número negativo: posición del corredor contando desde el final del carril.

También recibirás la longitud de cada carril.
Cada carril se representa con nieve ~.
Cada corredor se representa con la letra r.
Los carriles se numeran al final con /1, /2, etc.
La vista es isométrica: los carriles inferiores se desplazan a la derecha.
 */

function drawRace(posiciones, longitud) {
    let espaciosBlancos;

    for (let i = 0; i < posiciones.length; i++) {
        espaciosBlancos = posiciones.length - i + 1;
        if (posiciones[i] === 0) {
            console.log(`${espaciosBlancos}${"~".repeat(longitud)} /${i + 1}`);
        }
        if (posiciones[i] > 0) {
            console.log(`${espaciosBlancos}${"~".repeat(posiciones[i])} /${i + 1}`);
        }
    }
}

// PRUEBAS
drawRace([0, 5, -3], 10);
drawRace([2, -1, 0, 5], 8);
drawRace([3, 7, -2], 12);