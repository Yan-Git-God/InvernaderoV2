if ("serviceWorker" in navigator) {
    const rutaSw = new URL("../sw.js", document.currentScript.src).href;

    window.addEventListener("load", () => {
        navigator.serviceWorker.register(rutaSw).catch((error) => {
            console.error("no se pudo registrar el service worker", error);
        });
    });
}