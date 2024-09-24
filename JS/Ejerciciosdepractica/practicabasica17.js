//Escribe un programa que pida un número al usuario y luego muestre la tabla de multiplicar de ese número del 1 al 10.

let ingre = parseFloat(prompt("Ingrese un número para mostrar su tabla de multiplicación"));

tabla = 1

for (let i=1;i<=10;i++) {
   
    tabla*= ingre;

    console.log(tabla);
}