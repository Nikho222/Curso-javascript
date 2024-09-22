const numeroingresado = parseFloat(prompt("Ingresa un número:")); 

if (isNaN(numeroingresado)) {
  
    alert("El valor ingresado no es válido.");

    }else if (numeroingresado % 2 === 0) {

        alert(`${numeroingresado} es número par.`);
        
    } else {

        alert(`${numeroingresado} es número impar.`);
    }
