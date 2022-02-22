let estrutura = {
  botao: document.querySelector("#botao"),
  circulo: document.querySelector("#circulo"),
  modalResultado: document.querySelector("#modalResultado"),
  tempo: 0
};

let timeout;
let interval;

function iniciar() {
  resetar();
  let tempo = Math.round(Math.random() * 10000);
  console.log(tempo);
  if (tempo <= 1000) {
    tempo += 1500
  }
  trocaCorCirculo(estrutura.circulo, tempo);
};

function trocaCorCirculo(circulo, tempo) {
  let cores = ["red", "yellow", "greenyellow"];

  timeout = setTimeout(() => {
    circulo.style.backgroundColor =
      cores[Math.floor(Math.random() * cores.length)];

    let tempoInicial = Date.now();

    interval = setInterval(() => {
      let tempoDecorrido = Date.now() - tempoInicial;
      let contador = (tempoDecorrido / 1000).toFixed(3);
      estrutura.tempo = contador;
      console.log(tempoInicial, tempoDecorrido, contador)
    }, 100);

  }, tempo);
};

function clicou() {
  let tempoHTML = document.querySelector("#tempo");
  circulo.style.display = "none";
  modalResultado.style.display = "flex";
  clearTimeout(timeout);
  if (circulo.style.backgroundColor == "") {
    tempoHTML.innerHTML = `Espere o círculo mudar de cor!`; 
  } else {
    let tempo = estrutura.tempo;
    tempoHTML.innerHTML = `O seu tempo foi de ${tempo} segundos`; 
  };
};

function resetar() {
  botao.style.display = "none";
  modalResultado.style.display = "none";
  circulo.style.backgroundColor = "";
  estrutura.tempo = 0;
  clearInterval(interval);
  
  setTimeout(() => {
    circulo.style.display = "block";
  }, 100);
};
