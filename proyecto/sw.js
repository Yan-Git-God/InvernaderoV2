const CACHE = "invernadero-v1";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./css/styles.css",
    "./js/datos.js",
    "./js/sesion.js",
    "./js/pwa.js",
    "./js/vendor/alpine.min.js",
    "./js/vendor/chart.umd.js",
    "./img/icon-192.png",
    "./img/icon-512.png",
    "./usuario/inicio.html",
    "./usuario/invernadero.html",
    "./usuario/creacion.html",
    "./usuario/datos.html",
    "./admin/inicio.html",
    "./admin/usuarios.html",
    "./admin/invernaderos.html"
];

self.addEventListener("install", (evento) => {
    evento.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (evento) => {
    evento.waitUntil(
        caches.keys().then((nombres) =>
            Promise.all(
                nombres
                    .filter((nombre) => nombre !== CACHE)
                    .map((nombre) => caches.delete(nombre))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener("fetch", (evento) => {
    const peticion = evento.request;

    if (peticion.method !== "GET" || new URL(peticion.url).origin !== self.location.origin) {
        return;
    }

    evento.respondWith(
        fetch(peticion)
            .then((respuesta) => {
                if (respuesta.ok) {
                    const copia = respuesta.clone();
                    caches.open(CACHE).then((cache) => cache.put(peticion, copia));
                }
                return respuesta;
            })
            .catch(() =>
                caches.match(peticion, { ignoreSearch: true }).then((guardada) => {
                    if (guardada) {
                        return guardada;
                    }
                    if (peticion.mode === "navigate") {
                        return caches.match("./index.html");
                    }
                })
            )
    );
});