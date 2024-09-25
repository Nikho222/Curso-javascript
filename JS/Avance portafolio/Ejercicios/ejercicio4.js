// Tarifas
let tarifaDiurna = 12000;
let tarifaNocturna = 16000;
let incrementoDomingoDiurno = 2000;
let incrementoDomingoNocturno = 3000;

// Empleados
let empleados = [
    {
        nombre: "Empleado 1",
        dias: {
            Lunes: "nocturno",
            Martes: "nocturno",
            Miércoles: "nocturno",
            Jueves: "diurno",
            Viernes: "diurno",
            Sábado: null,
            Domingo: null
        }
    },
    {
        nombre: "Empleado 2",
        dias: {
            Lunes: null,
            Martes: "nocturno",
            Miércoles: "nocturno",
            Jueves: "nocturno",
            Viernes: null,
            Sábado: null,
            Domingo: "diurno"
        }
    },
    {
        nombre: "Empleado 3",
        dias: {
            Lunes: null,
            Martes: null,
            Miércoles: "diurno",
            Jueves: "diurno",
            Viernes: "diurno",
            Sábado: "nocturno",
            Domingo: "nocturno"
        }
    }
];

// Inicialización de pagos totales
let totalSemanal = 0;

// Cálculo de pagos por empleado
for (let empleado of empleados) {
    let sumaDiaria = 0;
    
    for (let dia in empleado.dias) {
        let turno = empleado.dias[dia];
        let pagoDiario = 0;

        if (turno === "diurno") {
            pagoDiario = dia === "Domingo" ? (tarifaDiurna + incrementoDomingoDiurno) : tarifaDiurna;
        } else if (turno === "nocturno") {
            pagoDiario = dia === "Domingo" ? (tarifaNocturna + incrementoDomingoNocturno) : tarifaNocturna;
        }

        if (pagoDiario > 0) {
            sumaDiaria += pagoDiario * 10; // 10 horas
        }
    }

    totalSemanal += sumaDiaria;
    empleado.totalDiario = sumaDiaria;

    console.log(`--- ${empleado.nombre} ---`);
    console.log(`Total Semanal: ${empleado.totalDiario} CLP\n`);
}

console.log(`La suma total de todos los empleados es: ${totalSemanal} CLP`);
