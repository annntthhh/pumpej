// --- 1. LÓGICA DEL MINI JUEGO RPG ---
const canvas = document.getElementById('rpgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 300;

let jugador = { x: 50, y: 50, w: 30, h: 50, color: "#8d6e63" }; // Trigueño
let libro = { x: 300, y: 200, w: 20, h: 20, activo: true };

function dibujarEscena() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar Suelo C.C. (Baldosas)
    ctx.strokeStyle = "#ccc";
    for(let i=0; i<canvas.width; i+=40) ctx.strokeRect(i, 0, 40, canvas.height);

    // Dibujar Libro
    if(libro.activo) {
        ctx.fillStyle = "gold";
        ctx.fillRect(libro.x, libro.y, libro.w, libro.h);
    }

    // Dibujar Novio (Trigueño, Mullet, Alto)
    ctx.fillStyle = jugador.color; // Piel
    ctx.fillRect(jugador.x, jugador.y, jugador.w, jugador.h);
    ctx.fillStyle = "#2d1b10"; // Pelo café oscuro
    ctx.fillRect(jugador.x, jugador.y - 5, jugador.w, 15); // Mullet básico
    ctx.fillRect(jugador.x + 20, jugador.y + 5, 15, 20); // Parte de atrás mullet
}

window.addEventListener('keydown', (e) => {
    if(e.key === "ArrowUp") jugador.y -= 10;
    if(e.key === "ArrowDown") jugador.y += 10;
    if(e.key === "ArrowLeft") jugador.x -= 10;
    if(e.key === "ArrowRight") jugador.x += 10;
    
    // Colisión con libro
    if(libro.activo && jugador.x < libro.x + libro.w && jugador.x + jugador.w > libro.x && jugador.y < libro.y + libro.h) {
        document.getElementById('dialogo').innerText = 'Libro: "Feliz cumpleaños negro, espero este sea el primero de muchos... Gracias por dejarme ser tu luz en la oscuridad. Mua"';
    }
    dibujarEscena();
});
dibujarEscena();

// --- 2. LÓGICA DEL FILTRO ---
const video = document.getElementById('video');
const filterCanvas = document.getElementById('canvas-filter');
const fCtx = filterCanvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    video.srcObject = stream;
});

function dibujarFiltro() {
    fCtx.clearRect(0, 0, filterCanvas.width, filterCanvas.height);
    // Dibujar gorrito simple (Triángulo) sobre la posición estimada de la cabeza
    fCtx.fillStyle = "red";
    fCtx.beginPath();
    fCtx.moveTo(140, 50);
    fCtx.lineTo(180, 50);
    fCtx.lineTo(160, 10);
    fCtx.fill();
    
    requestAnimationFrame(dibujarFiltro);
}
dibujarFiltro();

document.getElementById('snap').addEventListener('click', () => {
    alert("¡BOOM! 🎊 Confeti virtual para el negro más lindo.");
    // Aquí podrías añadir partículas de colores
});

// --- 3. LÓGICA DEL QR ---
new QRCode(document.getElementById("qrcode"), {
    text: "Eres el amor de mi vida, gracias por existir.",
    width: 128,
    height: 128
});
