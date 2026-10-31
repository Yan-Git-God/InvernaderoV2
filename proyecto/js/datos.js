const CLAVE_DATOS = "invernadero_datos";

function crearLecturas(sensor, valores) {
    return valores.map(function (valor, i) {
        return {
            fecha: "2026-10-" + String(25 + i).padStart(2, "0"),
            sensor: sensor,
            valor: valor
        };
    });
}

const datosIniciales = {
    usuarios: [
        {
            id: 1,
            usuario: "admin",
            password: "admin123",
            nombre: "Administrador",
            rol: "admin",
            cultivos: [],
            sensores: [],
            lecturas: []
        },
        {
            id: 2,
            usuario: "juan",
            password: "juan123",
            nombre: "Juan Pérez",
            rol: "usuario",
            cultivos: [
                { id: 1, nombre: "Tomate", tipo: "Alimentario", fecha: "2026-03-01", estacional: true },
                { id: 2, nombre: "Rosa", tipo: "Flor", fecha: "2026-04-15", estacional: false },
                { id: 3, nombre: "Albahaca", tipo: "Hierba", fecha: "2026-06-10", estacional: true }
            ],
            sensores: [
                { id: 1, nombre: "Temperatura Sector A", descripcion: "Temperatura ambiente del sector A", unidad: "°C" },
                { id: 2, nombre: "Humedad Sector A", descripcion: "Humedad relativa del sector A", unidad: "%" }
            ],
            lecturas: [].concat(
                crearLecturas("Temperatura Sector A", [18, 20, 22, 21, 23, 24, 22]),
                crearLecturas("Humedad Sector A", [60, 62, 58, 65, 63, 61, 64])
            )
        },
        {
            id: 3,
            usuario: "maria",
            password: "maria123",
            nombre: "María López",
            rol: "usuario",
            cultivos: [
                { id: 1, nombre: "Lechuga", tipo: "Alimentario", fecha: "2026-05-20", estacional: true },
                { id: 2, nombre: "Girasol", tipo: "Flor", fecha: "2026-06-01", estacional: false },
                { id: 3, nombre: "Maíz", tipo: "Alimentario", fecha: "2026-02-10", estacional: true }
            ],
            sensores: [
                { id: 1, nombre: "Humedad Sector B", descripcion: "Humedad del suelo del sector B", unidad: "%" },
                { id: 2, nombre: "Riego Sector B", descripcion: "Agua usada en el riego del sector B", unidad: "m³" }
            ],
            lecturas: [].concat(
                crearLecturas("Humedad Sector B", [55, 57, 54, 59, 61, 58, 60]),
                crearLecturas("Riego Sector B", [5, 6, 4, 7, 5, 6, 5])
            )
        },
        {
            id: 4,
            usuario: "pedro",
            password: "pedro123",
            nombre: "Pedro Gómez",
            rol: "usuario",
            cultivos: [],
            sensores: [],
            lecturas: []
        }
    ]
};

function cargarDatos() {
    try {
        const guardado = localStorage.getItem(CLAVE_DATOS);
        if (guardado) {
            return JSON.parse(guardado);
        }
    } catch (error) {
        console.error("no se pudo leer localStorage, se usan los datos iniciales", error);
    }
    return JSON.parse(JSON.stringify(datosIniciales));
}

function guardarDatos(datos) {
    try {
        localStorage.setItem(CLAVE_DATOS, JSON.stringify(datos));
    } catch (error) {
        console.error("no se pudieron guardar los datos", error);
    }
}

function reiniciarDatos() {
    localStorage.removeItem(CLAVE_DATOS);
    location.reload();
}

function siguienteId(lista) {
    if (lista.length === 0) {
        return 1;
    }
    return Math.max(...lista.map(function (elemento) { return elemento.id; })) + 1;
}