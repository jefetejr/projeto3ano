const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i =0; i < botoes.length; i++){
  botoes [i].onclick = function (){
    for (let j = 0; j < botoes.length; j++){
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-11-20T23:59:59");
const tempoObjetivo2 = new Date("2024-10-15T23:59:59");
const tempoObjetivo3 = new Date("2024-09-10T23:59:59");
const tempoObjetivo4 = new Date("2024-08-05T23:59:59");
const tempoObjetivo5 = new Date("2024-07-25T23:59:59");

const tempos = [
  tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4, tempoObjetivo5
]

for (let i=0; i< contadores.length; i++){
  contadores[i].textContent = calculaTempo(tempos[i]);
}
contadores[0].textContent = calculaTempo(tempoObjetivo);

function calculaTempo(tempoObjetivo){
  let tempoAtual = new Date();
  let tempofinal = tempoObjetivo1 - tempoAtual;
  let segundos = Math.floor(tempofinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

      segundos %= 60;
      minutos %= 60;
      horas %= 24;
  
  return dias + "dias"
          + horas + "horas"
          + minutos + "minutos"
          + segundos + "segundos"


}
  