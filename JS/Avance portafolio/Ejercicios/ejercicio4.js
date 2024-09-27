// Tarifas
const tarifadiurna = 12000;
const tarifanocturna = 16000;
const incrementodomingoDiurno = 2000;
const incrementodomingoNocturno = 3000;

// Empleados
const empleados = [
    {
        nombre: "Empleado 1",
        dias: ["nocturno", "nocturno", "nocturno", "diurno", "diurno", null, null]
    },
    {
        nombre: "Empleado 2",
        dias: [null, "nocturno", "nocturno", "nocturno", null, null, "diurno"]
    },
    {
        nombre: "Empleado 3",
        dias: [null, null, "diurno", "diurno", "diurno", "nocturno", "nocturno"]
    }
];

// Inicialización de pagos totales
let totalsemana = 0;

// Cálculo de pagos por empleado
for (let empleado of empleados) {
    let sumadiaria = 0;
    
    // Días de la semana
    const diassemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    
    for (let i = 0; i < empleado.dias.length; i++) {
        const turno = empleado.dias[i];
        let pagodiario = 0;

        // Calcular el pago según el turno y día
        if (turno === "diurno") {
            pagodiario = (diassemana[i] === "Domingo") ? (tarifadiurna + incrementodomingoDiurno) : tarifadiurna;
        } else if (turno === "nocturno") {
            pagodiario = (diassemana[i] === "Domingo") ? (tarifanocturna + incrementodomingoNocturno) : tarifanocturna;
        }

        // Acumular el pago diario
        if (pagodiario > 0) {
            sumadiaria += pagodiario * 10; // 10 horas
        }
    }

    // Total semanal por empleado
    totalsemana += sumadiaria;
    empleado.totaldiario = sumadiaria;

    console.log(`--- ${empleado.nombre} ---`);
    console.log(`Total Semanal: ${empleado.totaldiario} CLP\n`);
}

