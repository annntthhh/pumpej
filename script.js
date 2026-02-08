// 1. Fuegos artificiales y confeti al entrar a la página
window.onload = () => {
    lanzarFuegosArtificiales();
};

function lanzarFuegosArtificiales() {
    const duracion = 5 * 1000;
    const fin = Date.now() + duracion;

    (function frame() {
        // Explosión izquierda
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: ['#ff4d6d', '#ff85a1', '#ffffff']
        });
        // Explosión derecha
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: ['#ff4d6d', '#ff85a1', '#ffffff']
        });

        if (Date.now() < fin) {
            requestAnimationFrame(frame);
        }
    }());
}

// 2. Función para abrir la carta
function abrirCarta() {
    const sobre = document.querySelector('.sobre-contenedor');
    sobre.classList.toggle('abierto');

    // Confeti de corazones al abrir
    if (sobre.classList.contains('abierto')) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            scalar: 1.2,
            shapes: ['circle'], // Simula pétalos o burbujas
            colors: ['#ff0000', '#ff4d6d', '#ff85a1']
        });
    }
}
