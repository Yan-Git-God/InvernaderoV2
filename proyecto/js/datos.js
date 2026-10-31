const misCultivos = [
    { nombre: "Tomate", tipo: "Alimentario", fecha: "2026-03-01", estacional: true },
    { nombre: "Rosa", tipo: "Flor", fecha: "2026-04-15", estacional: false },
    { nombre: "Lechuga", tipo: "Alimentario", fecha: "2026-05-20", estacional: true }
];

const misSensores = [
    { nombre: "Sensor Temperatura 1", descripcion: "Temperatura", unidad: "°C" },
    { nombre: "Sensor Humedad 1", descripcion: "Humedad", unidad: "%" },
    { nombre: "Sensor Riego 1", descripcion: "Volumen de agua", unidad: "m³" }
];

const usuarios = [
    {
        nombre: "Juan Pérez",
        cultivos: [
            { nombre: "Tomate", tipo: "Alimentario", fecha: "2026-03-01", estacional: true },
            { nombre: "Rosa", tipo: "Flor", fecha: "2026-04-15", estacional: false }
        ],
        sensores: [
            { nombre: "Sensor Temp 1", descripcion: "Temperatura", unidad: "°C" }
        ]
    },
    {
        nombre: "María López",
        cultivos: [
            { nombre: "Lechuga", tipo: "Alimentario", fecha: "2026-05-20", estacional: true }
        ],
        sensores: [
            { nombre: "Sensor Humedad 1", descripcion: "Humedad", unidad: "%" },
            { nombre: "Sensor Riego 1", descripcion: "Volumen de agua", unidad: "m³" }
        ]
    },
    {
        nombre: "Pedro Gómez",
        cultivos: [
            { nombre: "Maíz", tipo: "Alimentario", fecha: "2026-02-10", estacional: true },
            { nombre: "Girasol", tipo: "Flor", fecha: "2026-06-01", estacional: false }
        ],
        sensores: []
    }
];

function confirmarEliminacion(nombreUsuario) {
    return confirm("¿Eliminar a " + nombreUsuario + " y todos sus registros?");
}