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

    //} else  if (contrasena == 0 || contrasena == 1 || contrasena == 2 || contrasena == 3 || contrasena == 4 || contrasena == 5 || contrasena == 6 || contrasena == 7 || contrasena == 8 || contrasena == 9) {

     //alert ("La contraseña debe contener al menos un número");

     //} else  if (contraseña) {

     //alert ("La contraseña debe contener al menos un carácter especial");
    
     //Solo comprueba dos requisitos

     } else if (contrasena) {

        alert("La contraseña cumple con todos los requisitos");
    }
    
