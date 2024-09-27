// Solicita al usuario que ingrese su primera nota (equivalente al 40% del total) y la convierte a número decimal
const notaingresada1 = parseFloat(prompt("Ingrese su primera nota equivalente al 40%:"));

// Solicita al usuario que ingrese su segunda nota (equivalente al 30% del total) y la convierte a número decimal
const notaingresada2 = parseFloat(prompt("Ingrese su segunda nota equivalente al 30%:"));

// Solicita al usuario que ingrese su tercera nota (equivalente al 30% del total) y la convierte a número decimal
const notaingresada3 = parseFloat(prompt("Ingrese su tercera nota equivalente al 30%:"));

// Verifica si alguna de las notas ingresadas no es un número
if (isNaN(notaingresada1) || isNaN(notaingresada2) || isNaN(notaingresada3)) {
    alert("Uno de los valores ingresados no es válido"); // Muestra un mensaje de error si hay un valor no válido
} else {
    // Calcula el promedio ponderado de las notas ingresadas
    const promedio = (notaingresada1 * 0.4) + (notaingresada2 * 0.3) + (notaingresada3 * 0.3);

    // Verifica si alguna de las notas ingresadas está fuera del rango válido (0 a 7)
    if (notaingresada1 < 0 || notaingresada1 > 7.0 ||  notaingresada2 < 0 || notaingresada2 > 7.0 || notaingresada3 < 0 || notaingresada3 > 7.0) {
        alert("Uno de los valores ingresados es menor que 0 o mayor que 7"); // Mensaje de error si alguna nota es inválida
    } else if (promedio < 3.95) {
        // Verifica si el promedio es menor a 3.95
        alert(`Su promedio es ${promedio}, ha reprobado la asignatura.`); // Mensaje indicando que ha reprobado
    } else if (promedio >= 3.95 && promedio < 4.95) {
        // Verifica si el promedio está entre 3.95 y 4.95
        alert(`Su promedio es ${promedio}, debe ir a examen.`); // Mensaje indicando que debe ir a examen
    } else if (promedio >= 4.95 && promedio <= 7.00) {
        // Verifica si el promedio está entre 4.95 y 7.00
        alert(`Su promedio es ${promedio}, ha aprobado la asignatura.`); // Mensaje indicando que ha aprobado
    }
}
