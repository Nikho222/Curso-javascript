// Solicita al usuario que ingrese un número y lo convierte a número decimal
const numeroingresado = parseFloat(prompt("Ingresa un número:")); 

// Verifica si el valor ingresado no es un número
if (isNaN(numeroingresado)) {
    alert("El valor ingresado no es válido."); // Muestra un mensaje de error si el valor no es válido
} else if (numeroingresado % 2 === 0) {
    // Verifica si el número ingresado es par (el resto de la división entre 2 es 0)
    alert(`${numeroingresado} es número par.`); // Mensaje indicando que el número es par
} else {
    // Si no es par, entonces debe ser impar
    alert(`${numeroingresado} es número impar.`); // Mensaje indicando que el número es impar
}
