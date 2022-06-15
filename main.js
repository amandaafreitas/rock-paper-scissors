const papel = document.querySelector("#paper");
const pedra = document.querySelector("#rock");
const tesoura = document.querySelector("#scissors");

papel.addEventListener("click", () => validaJogada("papel"));
pedra.addEventListener("click", () => validaJogada("pedra"));
tesoura.addEventListener("click", () => validaJogada("tesoura"));

const ganhou = () => {
  let pontoJogador = document.querySelector("#pontos-jogador");
  let musicaVitoria = document.getElementById("win");
  musicaVitoria.play();

  pontoJogador.innerHTML = Number(pontoJogador.innerHTML) + 1;
};

const perdeu = () => {
  let pontoPc = document.querySelector("#pontos-pc");
  let musicaDerrota = document.getElementById("lose");
  musicaDerrota.play();
  pontoPc.innerHTML = Number(pontoPc.innerHTML) + 1;
};

function jogadaPC() {
  const adversario = ["pedra", "papel", "tesoura"];
  const aleatorio = Math.floor(Math.random() * adversario.length);
  let jogadaComputador = adversario[aleatorio];
  return jogadaComputador;
}

function validaJogada(jogada) {
  let jogadaComputador = jogadaPC();

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
