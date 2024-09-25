//1. Desarrollar un contador de caracteres, solicitando al usuario que ingrese una palabra u
//oración, para luego contar cuántos caracteres tiene la palabra ingresada por el usuario.
//Mostrar la oración ingresada y el número de caracteres en el navegador.

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i = 0;
let j = 0;
let k = 0;
let l = 0;
let m = 0;
let n = 0;
let o = 0;
let p = 0;
let q = 0;
let r = 0;
let s = 0;
let t = 0;
let u = 0;
let v = 0;
let w = 0;
let x = 0;
let y = 0;
let z = 0;


let textoingresado = prompt ("Por favor ingrese una palabra o oración");


textoingresado = textoingresado.toLowerCase();

for (let j = 0; j < textoingresado.length; j++) {
    const caracteres = textoingresado[j];

    if (caracteres === 'a') a++;

    else if (caracteres === 'b') b++;

    else if (caracteres === 'c') c++;

    else if (caracteres === 'd') d++;

    else if (caracteres === 'e') e++;
    
    else if (caracteres === 'f') f++;

    else if (caracteres === 'g') g++;

    else if (caracteres === 'h') h++;

    else if (caracteres === 'i') i++;

    else if (caracteres === 'j') j++;

    else if (caracteres === 'k') k++;

    else if (caracteres === 'l') l++;

    else if (caracteres === 'm') m++;

    else if (caracteres === 'n') n++;

    else if (caracteres === 'o') o++;

    else if (caracteres === 'p') p++;
    
    else if (caracteres === 'q') q++;

    else if (caracteres === 'r') r++;
    
    else if (caracteres === 's') s++;

    else if (caracteres === 't') t++;

    else if (caracteres === 'u') u++;

    else if (caracteres === 'v') v++;

    else if (caracteres === 'w') w++;

    else if (caracteres === 'x') x++;

    else if (caracteres === 'y') y++;

    else if (caracteres === 'z') z++;

}

sumarcaracteres  = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + r + s + t + u + v + w + x + y + z;

alert(`La cantidad de carácteres totales es de: ${sumarcaracteres}`);