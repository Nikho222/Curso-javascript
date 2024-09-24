const notaingresada1 = parseFloat(prompt("Ingrese su primera nota equivalente al 40%:"));
const notaingresada2 = parseFloat(prompt("Ingrese su segunda nota equivalente al 30%:"));
const notaingresada3 = parseFloat(prompt("Ingrese su tercera nota equivalente al 30%:"));

if (isNaN(notaingresada1) || isNaN(notaingresada2) || isNaN(notaingresada3)) {
    alert("Uno de los valores ingresados no es válido");

} else {
    
    const promedio = (notaingresada1 * 0.4) + (notaingresada2 * 0.3) + (notaingresada3 * 0.3);

    if (notaingresada1 < 0 || notaingresada1 > 7.0 ||  notaingresada2 < 0 || notaingresada2 > 7.0 || notaingresada3 < 0 || notaingresada3 > 7.0) {
        
        alert("Uno de los valores ingresados es menor que 0 o mayor que 7");

    } else if (promedio < 3.95) {

        alert(`Su promedio es ${promedio}, ha reprobado la asignatura.`);

    } else if (promedio >= 3.95 && promedio < 4.95) {

        alert(`Su promedio es ${promedio}, debe ir a examen.`);
    
    } else if (promedio >= 4.95 && promedio <= 7.00) {

        alert(`Su promedio es ${promedio}, ha aprobado la asignatura.`);
    }
}