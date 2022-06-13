//let jogada;

const papel = document.querySelector("#paper");
const pedra = document.querySelector("#rock");
const tesoura = document.querySelector("#scissors");

papel.addEventListener("click", () => validaJogada("papel"));
pedra.addEventListener("click", () => validaJogada("pedra"));
tesoura.addEventListener("click", () => validaJogada("tesoura"));

const ganhou = () => {
  let pontoJogador = document.querySelector("#pontos-jogador");
  pontoJogador.innerHTML = Number(pontoJogador.innerHTML) + 1;
};

const perdeu = () => {
  let pontoPc = document.querySelector("#pontos-pc");
  pontoPc.innerHTML = Number(pontoPc.innerHTML) + 1;
};

function validaJogada(jogada) {
  const adversario = ["pedra", "papel", "tesoura"];
  const aleatorio = Math.floor(Math.random() * adversario.length);
  let jogadaComputador = adversario[aleatorio];

  if (jogada === "pedra" && jogadaComputador === "tesoura") {
    ganhou();
  } else if (jogada === "pedra" && jogadaComputador === "papel") {
    perdeu();
  } else if (jogada === "papel" && jogadaComputador === "tesoura") {
    perdeu();
  } else if (jogada === "papel" && jogadaComputador === "pedra") {
    ganhou();
  } else if (jogada === "tesoura" && jogadaComputador === "papel") {
    ganhou();
  } else if (jogada === "tesoura" && jogadaComputador === "pedra") {
    perdeu();
  } else {
    console.log("empate");
  }
}
