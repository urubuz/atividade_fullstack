var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function irhome() {
    window.location.href = "1home.html";
  }

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    requestAnimationFrame(desenhar);
}

desenhar();