const CLAVE_SESION = "invernadero_sesion";

function iniciarSesion(usuario, password) {
    const datos = cargarDatos();
    const encontrado = datos.usuarios.find(function (u) {
        return u.usuario === usuario.toLowerCase() && u.password === password;
    });
    if (!encontrado) {
        return null;
    }
    sessionStorage.setItem(CLAVE_SESION, String(encontrado.id));
    return encontrado;
}

function usuarioActual() {
    const id = sessionStorage.getItem(CLAVE_SESION);
    if (!id) {
        return null;
    }
    const datos = cargarDatos();
    const encontrado = datos.usuarios.find(function (u) {
        return u.id === Number(id);
    });
    return encontrado || null;
}

function cerrarSesion() {
    sessionStorage.removeItem(CLAVE_SESION);
}

function rutaPanel(usuario, prefijo) {
    return prefijo + usuario.rol + "/inicio.html";
}

function exigirRol(rol) {
    const actual = usuarioActual();
    if (!actual) {
        location.replace("../index.html");
        return;
    }
    if (actual.rol !== rol) {
        location.replace(rutaPanel(actual, "../"));
    }
}