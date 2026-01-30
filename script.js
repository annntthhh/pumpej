// --- LÓGICA DEL JUEGO RPG ---
const canvas = document.getElementById('rpgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400; canvas.height = 400;

let player = { x: 200, y: 200, icon: "🙋🏾‍♂️" }; 
let items = [
    { x: 50, y: 50, icon: "📚", msg: "Feliz cumpleaños negro, espero este sea el primero de muchos que vamos a pasar juntos. Te amo inmensamente, y apesar de todo me haces muy feliz. Gracias por dejarme ser tu luz en la oscuridad. Mua." },
    { x: 320, y: 60, icon: "🛍️", msg: "¡Bienvenido al Centro Comercial de nuestro amor!" },
    { x: 100, y: 320, icon: "🍿", msg: "Vale por una ida al cine eterna conmigo." }
];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar Tiendas/Objetos
    ctx.font = "30px Arial";
    items.forEach(item => {
        ctx.fillText(item.icon, item.x, item.y);
    });

    // Dibujar Novio
    ctx.font = "40px Arial";
    ctx.fillText(player.icon, player.x, player.y);
}

function move(dir) {
    const step = 20;
    if(dir === 'up') player.y -= step;
    if(dir === 'down') player.y += step;
    if(dir === 'left') player.x -= step;
    if(dir === 'right') player.x += step;

    // Check Colisión
    items.forEach(item => {
        let dist = Math.hypot(player.x - item.x, player.y - item.y);
        if(dist < 30) {
            document.getElementById('dialogo').innerHTML = `<strong style="color: #ff4081">Encontraste algo:</strong> <br> ${item.msg}`;
            confetti({ particleCount: 50, spread: 60 });
        }
    });
    draw();
}
draw();

// --- FILTRO Y CÁMARA ---
const video = document.getElementById('video');
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    video.srcObject = stream;
}).catch(() => {
    document.querySelector('.video-container').innerHTML = "<p>Activa la cámara para el filtro</p>";
});

function explotar() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#ffeb3b', '#2196f3']
    });
}

// --- QR ---
new QRCode(document.getElementById("qrcode"), {
    text: "ERES LO MEJOR QUE ME HA PASADO EN LA VIDA. CÓDIGO VÁLIDO POR UN BESO INFINITO.",
    width: 150,
    height: 150,
    colorDark : "#1a1a2e",
    colorLight : "#ffffff"
});
