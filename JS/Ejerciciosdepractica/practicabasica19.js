//Crea una función que reciba un número del 1 al 7 y devuelva el nombre del día correspondiente.

let ingre = parseFloat(prompt("Ingrese un número del 1 al 7 para determinar el día de la semana:"));

    if (ingre < 1 || ingre >7 || isNaN(ingre)) {

    alert("Uno de los datos ingresados no es valido");

    } else if (ingre === 1) {

    alert("El número ingresado corresponde a Lunes");

    } else if (ingre === 2) {

    alert("El número ingresado corresponde a Martes");

    } else if (ingre === 3) {

    alert("El número ingresado corresponde a Miércoles");

    } else if (ingre === 4) {

    alert("El número ingresado corresponde a Jueves");

    } else if (ingre === 5) {

    alert("El número ingresado corresponde a Viernes");

    } else if (ingre === 6) {

    alert("El número ingresado corresponde a Sábado");

    } else if (ingre === 7) {

    alert("El número ingresado corresponde a Domingo");

    }

    