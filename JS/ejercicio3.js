let secuencia1 = 500

let secuencia2 = 456

let sumasecuencia1= 0

let sumasecuencia2= 0

for (let i = 0; i < 30; i++) {

    secuencia1+= 10
    sumasecuencia1 += secuencia1;
    console.log(secuencia1);

    secuencia2-= 2
    sumasecuencia2 += secuencia2;
    console.log(secuencia2);
}

sumatotal = sumasecuencia1 + sumasecuencia2;

console.log(`La suma total de la secuencia de 500 es: ${sumasecuencia1}`);
console.log(`La suma total de la secuencia de 456 es: ${sumasecuencia2}`);
console.log(`La suma de ambos es: ${sumatotal}`);