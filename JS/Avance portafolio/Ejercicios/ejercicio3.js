// Inicializamos las variables de las secuencias
let secuencia1 = 500; // Valor inicial de la primera secuencia
let secuencia2 = 456; // Valor inicial de la segunda secuencia

// Inicializamos las variables para almacenar las sumas de cada secuencia
let sumasecuencia1 = 0; // Suma acumulativa de la primera secuencia
let sumasecuencia2 = 0; // Suma acumulativa de la segunda secuencia

// Un bucle que se ejecuta 31 veces
for (let i = 0; i < 31; i++) {
    // Acumulamos el valor actual antes de actualizar la secuencia
    sumasecuencia1 += secuencia1;
    // Actualizamos la primera secuencia, sumando 10 en cada iteración
    secuencia1 += 10;

    // Acumulamos el valor actual antes de actualizar la secuencia
    sumasecuencia2 += secuencia2;
    // Actualizamos la segunda secuencia, restando 2 en cada iteración
    secuencia2 -= 2;
}

// Calculamos la suma total de ambas secuencias
let sumatotal = sumasecuencia1 + sumasecuencia2;

// Mostramos las sumas totales en la consola
console.log(`La suma total de la secuencia de 500 es: ${sumasecuencia1}`); // Suma esperada: 20150
console.log(`La suma total de la secuencia de 456 es: ${sumasecuencia2}`); // Suma esperada: 13206
console.log(`La suma de ambos es: ${sumatotal}`);
