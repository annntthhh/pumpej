// Lanzar fuegos artificiales al cargar la página
window.onload = () => {
    const end = Date.now() + (5 * 1000);
    const colors = ['#ff4d6d', '#ff758f', '#c9184a'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

function abrirCarta() {
    const wrapper = document.querySelector('.envelope-wrapper');
    wrapper.classList.toggle('open');

    if (wrapper.classList.contains('open')) {
        // Confeti extra al abrir
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ffffff', '#ff0000']
        });
    }
}
