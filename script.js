window.onload = () => {
    // Fuegos artificiales masivos al entrar
    const end = Date.now() + 5000;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 70,
            origin: { x: 0, y: 0.6 },
            colors: ['#ff4d6d', '#ffdb58', '#ffffff', '#00f2ff']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 70,
            origin: { x: 1, y: 0.6 },
            colors: ['#ff4d6d', '#ffdb58', '#ffffff', '#00f2ff']
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
        // Lluvia de confeti de larga duración
        var duration = 6 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 100 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
            }));
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
            }));
        }, 250);
    }
}
