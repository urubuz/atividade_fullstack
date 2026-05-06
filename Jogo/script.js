//mudar de telas
function irjogo() {
  window.location.href = "jogo.html"
}
function irdevs() {
  window.location.href = "quemsomos.html"
}
function irinicio() {
  window.location.href = "iniciojogo.html"
}

//não aparece tela de combate
document.getElementById("telacombate").style.display = "none"

let jogador;
let turno = "jogador";

//criação de inimigo
let inimigo = {
  nome: "Goblin",
  vida: 100,
  vidaMax: 100,
  ataque: 10,
  img: "imagens/goblin.png"
};

//quando voce escolhe o personagem
function escolher(tipo) {

  if (tipo === "guerreiro") {
    jogador = {
      nome: "Guerreiro",
      vida: 120,
      vidaMax: 120,
      ataque: 12,
      img: "imagens/guerreiro.png"
    };

  } else if (tipo === "mago") {
    jogador = {
      nome: "Mago",
      vida: 80,
      vidaMax: 80,
      ataque: 18,
      img: "imagens/mago.png"
    };
  }

  //coloca as imagens dos personagens
  document.getElementById("imgjogador").src = jogador.img;
  document.getElementById("imginimigo").src = inimigo.img;

  atualizarVida();

//faz aparecer numero na vida
document.getElementById("vidanumerojogador").textContent = jogador.vida
document.getElementById("vidanumeroinimigo").textContent = inimigo.vida

  //muda as telas
  document.getElementById("telaescolha").style.display = "none";
  document.getElementById("telacombate").style.display = "block";

}

//transforma a % da vida em % do width
function atualizarVida() {

  let pJogador = (jogador.vida / jogador.vidaMax) * 100;
  document.getElementById("barravidajogador").style.width = pJogador + "%";

  let pInimigo = (inimigo.vida / inimigo.vidaMax) * 100;
  document.getElementById("barravidainimigo").style.width = pInimigo + "%";
}

//jogador ataca
function atacar() {

  //caso o turno seja inimigo, o jogador não pode fazer isso
  if (turno !== "jogador") return;

  inimigo.vida -= jogador.ataque;
  if (inimigo.vida < 0) inimigo.vida = 0;

  //efeito de tremer
  document.getElementById("imginimigo").classList.add("dano");

setTimeout(() => {
  document.getElementById("imginimigo").classList.remove("dano");
}, 300);

  atualizarVida();
  document.getElementById("vidanumerojogador").textContent = jogador.vida
  document.getElementById("vidanumeroinimigo").textContent = inimigo.vida

  if (checarFim()) return;

  turno = "inimigo";

  setTimeout(turnoInimigo, 1500);
}

//jogador se cura
function curar() {

  if (turno !== "jogador") return;

  jogador.vida += 10;

  if (jogador.vida > jogador.vidaMax) {
    jogador.vida = jogador.vidaMax;
  }

  //efeito de curar
  document.getElementById("imgjogador").classList.add("cura");

setTimeout(() => {
  document.getElementById("imgjogador").classList.remove("cura");
}, 500);

  atualizarVida();
  document.getElementById("vidanumerojogador").textContent = jogador.vida
document.getElementById("vidanumeroinimigo").textContent = inimigo.vida

  if (checarFim()) return;

  turno = "inimigo";

  setTimeout(turnoInimigo, 1500);
}

function turnoInimigo() {

  let escolha = Math.random();

  if (escolha < 0.7) {
    jogador.vida -= inimigo.ataque;
    document.getElementById("imgjogador").classList.add("dano");

setTimeout(() => {
  document.getElementById("imgjogador").classList.remove("dano");
}, 300);
  } else {
    inimigo.vida += 10;
    document.getElementById("imginimigo").classList.add("cura");

setTimeout(() => {
  document.getElementById("imginimigo").classList.remove("cura");
}, 500);
    if (inimigo.vida > inimigo.vidaMax) {
      inimigo.vida = inimigo.vidaMax;
    }
  }

  if (jogador.vida < 0) jogador.vida = 0;

  atualizarVida();
  document.getElementById("vidanumerojogador").textContent = jogador.vida
document.getElementById("vidanumeroinimigo").textContent = inimigo.vida

  if (checarFim()) return;

  turno = "jogador";
}

function checarFim() {

  if (inimigo.vida <= 0) {
    mostrarFim("VOCÊ VENCEU!", "green");
    return true;
  }

  if (jogador.vida <= 0) {
    mostrarFim("VOCÊ PERDEU SEU BETINHA!", "red");
    return true;
  }

  return false;
}

function mostrarFim(texto, cor) {
  let tela = document.getElementById("resultado");

  tela.style.display = "flex";
  tela.style.color = cor;
  tela.textContent = texto;
}