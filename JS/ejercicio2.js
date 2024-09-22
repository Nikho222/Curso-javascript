const notaingresada1 = parseFloat(prompt("Ingrese su primera nota equivalente al 40%:"));
const notaingresada2 = parseFloat(prompt("Ingrese su segunda nota equivalente al 30%:"));
const notaingresada3 = parseFloat(prompt("Ingrese su tercera nota equivalente al 30%:"));

const promedio = (notaingresada1 * 0.4) + (notaingresada2 * 0.3) + (notaingresada3 * 0.3);

if (promedio < 3.95) {

    alert(`Su promedio corresponde a ${promedio}, ha reprobado la asignatura.`);

} else if (promedio >= 3.95 && promedio < 4.95) {

    alert(`Su promedio corresponde a ${promedio}, debe ir a examen.`);

} else if (promedio >= 4.95 && promedio <= 7.00) {

    alert(`Su promedio corresponde a ${promedio}, ha aprobado la asignatura.`);
}
