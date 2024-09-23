//Crea una función que calcule el factorial de un número utilizando un ciclo for. Por ejemplo, el factorial de 5 (5!)

let ingre = parseFloat(prompt("Ingrese un número para calcular su factorial"));

let resultado = 1;

for (let i=1;i<=ingre;i++) {

    resultado*= i;
}
    console.log(`El factorial del número ingresado es : ${resultado}`);
