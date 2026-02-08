window.onload = () => {
    // Confeti y fuegos artificiales al inicio
    const end = Date.now() + 5000;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            colors: ['#ff4d6d', '#ffd166', '#ffffff']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            colors: ['#ff4d6d', '#ffd166', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};

function abrirCarta() {
    const envelope = document.querySelector('.sobre-wrapper');
    envelope.classList.toggle('open');

    if (envelope.classList.contains('open')) {
        // Lluvia masiva de confeti al abrir
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ffccd5', '#ffffff', '#ffb3c1']
        });
    }
}
