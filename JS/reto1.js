let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

let palabraingresada = prompt("Escriba un texto:");


palabraingresada = palabraingresada.toLowerCase();

for (let j = 0; j < palabraingresada.length; j++) {
    const vocal = palabraingresada[j];

    if (vocal === 'a') a++;

    else if (vocal === 'e') e++;

    else if (vocal === 'i') i++;

    else if (vocal === 'o') o++;

    else if (vocal === 'u') u++;
}

sumavocales = a + e + i + o + u; 

// Mostrar los resultados
console.log(`La cantidad de a en el texto es de: ${a}`);

console.log(`La cantidad de e en el texto es de: ${e}`);

console.log(`La cantidad de i en el texto es de: ${i}`);

console.log(`La cantidad de o en el texto es de: ${o}`);

console.log(`La cantidad de u en el texto es de: ${u}`);

console.log(`La cantidad de vocales en el texto es de: ${sumavocales}`);
