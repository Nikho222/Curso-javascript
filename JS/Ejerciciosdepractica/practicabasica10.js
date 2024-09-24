//Crea una función que retorne la longitud de una cadena dada.

let texto = prompt("Escriba una frase:");

longitud = texto.replace(/\s+/g, '').length; //replace(/\s+/g,'') para eliminar espacios en la longitud de la frase.

alert(`La longitud de la cadena es de: ${longitud}`);