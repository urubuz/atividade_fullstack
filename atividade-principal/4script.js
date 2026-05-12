function irhome() {
    window.location.href = "1home.html";
  }

var i = Math.floor(Math.random() * 100) + 1;

function verificar() {
    let input = document.getElementById("input");
    let valor = parseInt(input.value);
    let mensagem = document.getElementById("resultado");

    if (valor === i) {
        input.style.border = "2px solid #6486f7";
        mensagem.innerText = "Você acertou!";
        mensagem.style.color = "#6486f7";
    } 
    else if (valor > i) {
        input.style.border = "2px solid red";
        mensagem.innerText = "O número é menor!";
        mensagem.style.color = "red";
    } 
    else {
        input.style.border = "2px solid red";
        mensagem.innerText = "O número é maior!";
        mensagem.style.color = "red";
    }
}