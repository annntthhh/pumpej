window.onload = () => {
    // Fuegos artificiales al inicio
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    (function frame() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return;

        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            colors: ['#ffafbd', '#ffc3a0', '#ff4d6d']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            colors: ['#ffafbd', '#ffc3a0', '#ff4d6d']
        });

        requestAnimationFrame(frame);
    }());
};

function abrirCarta() {
    const wrapper = document.querySelector('.envelope-wrapper');
    wrapper.classList.toggle('open');

    if (wrapper.classList.contains('open')) {
        // Explosión de confeti suave al abrir
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffccd5', '#ff4d6d', '#ffffff']
        });
    }
}
