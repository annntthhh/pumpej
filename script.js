// CONFIGURACIÓN JUEGO
const world = document.getElementById('world');
const player = document.getElementById('player');
const msgBox = document.getElementById('msg-box');

let posX = 150;
let posY = 150;

const items = [
    { x: 50, y: 50, icon: '📖', text: 'Feliz cumpleaños negro... (tu mensaje largo aquí)', found: false },
    { x: 280, y: 50, icon: '🛍️', text: 'Estamos en el C.C. ¡Busca tu regalo!', found: false },
    { x: 150, y: 280, icon: '💎', text: 'Gracias por ser mi luz en la oscuridad. Mua.', found: false }
];

// Crear items en el mundo
items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = item.icon;
    div.style.left = item.x + 'px';
    div.style.top = item.y + 'px';
    world.appendChild(div);
});

function move(dx, dy) {
    posX += dx * 30;
    posY += dy * 30;

    // Límites
    posX = Math.max(0, Math.min(310, posX));
    posY = Math.max(0, Math.min(310, posY));

    player.style.left = posX + 'px';
    player.style.top = posY + 'px';

    // Colisiones
    items.forEach(item => {
        if (!item.found && Math.abs(posX - item.x) < 30 && Math.abs(posY - item.y) < 30) {
            item.found = true;
            msgBox.innerHTML = `<strong>¡ENCONTRADO!</strong><br>${item.text}`;
            lanzarConfeti();
        }
    });
}

// FILTRO Y QR
navigator.mediaDevices.getUserMedia({ video: true }).then(s => document.getElementById('video').srcObject = s);

function lanzarConfeti() {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

new QRCode(document.getElementById("qrcode"), {
    text: "TE AMO NEGRO. ERES EL MEJOR.",
    width: 120, height: 120
});
