//Crea un programa que pida al usuario un número y luego imprima todos los números desde 1 hasta ese número. 
//Asegúrate de validar que el número ingresado sea un entero positivo.

let numingre = parseFloat(prompt("Ingrese un número:"));

if ( isNaN(numingre) || numingre <=0) {

    alert("El número ingresado no es valido");
}

for (let i = 1; i <= numingre; i++) {
    
    console.log(i);
}




