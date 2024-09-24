// Tarifas
const tarifas = {
    diurno: {
        normal: 12000,
        domingo: 14000 // 12000 + 2000
    },
    nocturno: {
        normal: 16000,
        domingo: 19000 // 16000 + 3000
    }
};

// Empleados
const empleados = [
    {
        nombre: "Empleado 1",
        horarios: {
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
        horarios: {
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
        horarios: {
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

// Función para calcular pagos
function calcularPagos(empleados) {
    empleados.forEach(empleado => {
        let totalSemanal = 0;
        let pagosDiarios = {};

        for (let dia in empleado.horarios) {
            const turno = empleado.horarios[dia];
            let pagoDiario = 0;

            if (turno === "diurno") {
                pagoDiario = dia === "Domingo" ? tarifas.diurno.domingo : tarifas.diurno.normal;
            } else if (turno === "nocturno") {
                pagoDiario = dia === "Domingo" ? tarifas.nocturno.domingo : tarifas.nocturno.normal;
            }

            if (pagoDiario > 0) {
                pagosDiarios[dia] = pagoDiario;
                totalSemanal += pagoDiario * 10; // 10 horas
            }
        }

        empleado.pagosDiarios = pagosDiarios;
        empleado.totalSemanal = totalSemanal;
    });
}

// Calcular los pagos
calcularPagos(empleados);

// Mostrar resultados
empleados.forEach(empleado => {
    console.log(`--- ${empleado.nombre} ---`);
    for (let dia in empleado.pagosDiarios) {
        console.log(`${dia}: ${empleado.pagosDiarios[dia]} CLP`);
    }
    console.log(`Total Semanal: ${empleado.totalSemanal} CLP\n`);
});
