//2. Crear un programa que solicite al usuario una contraseña y verifique si cumple con ciertos
//criterios de seguridad. La contraseña debe cumplir con los siguientes requisitos para
//considerarse válida: (50 puntos)
//a. Debe tener al menos 8 caracteres de longitud.
//b. Debe contener al menos una letra mayúscula.
//c. Debe contener al menos un número.
//d. Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~\-

let contrasena = prompt("Por favor cree una contraseña");

if (contrasena.length < 8) {

    alert ("La contraseña debe contener al menos 8 caracteres");

  } else  if (contrasena.toLocaleLowerCase() === contrasena) {

    alert ("La contraseña debe contener una letra mayuscula");

    } else  if (!/[0-9]/.test(contrasena)) {

     alert ("La contraseña debe contener al menos un número");

     } else  if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(contrasena)) {

     alert ("La contraseña debe contener al menos un carácter especial");
    
     } else if (contrasena) {

        alert("La contraseña cumple con todos los requisitos");
    }
    
//Ejercicio 2 pero completado con los otros 2 requisitos que faltaban