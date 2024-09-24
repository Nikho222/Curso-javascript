//Crea un programa que permita al usuario ingresar nombres de estudiantes y los almacene en un arreglo. 
//Cuando el usuario decida dejar de ingresar nombres (puedes usar un prompt que le pregunte si quiere continuar),
// muestra la lista completa de nombres ingresados.

const estudiantes = [];

let continuar = true;

while (continuar) {

    const nombre = prompt("Ingresa el nombre de un estudiante");
    estudiantes.push(nombre); 
    
    continuar = confirm ("¿Quieres ingresar otro nombre?");
}

console.log("Lista de estudiantes:");

for (let i = 0; i < estudiantes.length; i++) {

    console.log(estudiantes[i]);
    
}

