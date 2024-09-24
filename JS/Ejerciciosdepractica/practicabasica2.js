// Cual número es mayor

let num1 = parseFloat(prompt("Ingresa un número"));
let num2 = parseFloat(prompt("Ingresa un número"));
let num3 = parseFloat(prompt("Ingresa un número"));

if (num1 > num2 && num1 > num3){

    alert (`El número mayor es: ${num1} primer número ingresado`);

    } else if (num2 > num1 && num2 > num3){

        alert (`El número mayor es: ${num2} segundo número ingresado`);

    } else if (num3 > num1 && num3 > num2){

        alert (`El número mayor es: ${num3} tercer número ingresado`);   
}