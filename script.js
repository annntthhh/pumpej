window.onload = () => {
    // Fuegos artificiales al abrir la página
    const end = Date.now() + 5000;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            colors: ['#ff4d6d', '#ff85a1', '#ffffff']
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: ['#ff4d6d', '#ff85a1', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

function abrirCarta() {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.toggle('open');

    if (envelope.classList.contains('open')) {
        // Confeti al abrir
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ffcad4', '#ffffff']
        });
    }
}
