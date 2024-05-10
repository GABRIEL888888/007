 const botoes = document.querySelectorAll(".botao");
 const textos= document.querySelectorAll(".aba-conteudo");

 for(let i-0;i <botoes.lensght;i++){
   botoes[i].onclick = function(){
       botoes[i].classList.add("ativo");

   
       for(let i=0;i <botoes.length;i++){
         botoes[j].classList.remove("ativo");
   }     botoes[j].classList.remove("ativo");
   
 }      botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
}

const contadores = document.querySelectorAll(".contador"); 
const tempoObjetivo1 = new Date("2020-10-05t000:00:00"); 
const tempoObjetivo2 = new Date("2023-12-05t000:00:00"); 
const tempoObjetivo3 = new Date("2023-12-30t000:00:00"); 
const tempoObjetivo4 = new Date("2024-02-01t000:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


  contadores[i].textContent = calculaTempo(tempos[i])

function atualizaCronometro(){
  for (let i=0; i<contadores.length;i++){
      contadores[i].textContent = calculaTempo(tempos[i]);   
  }
}
 
atualizaCronometro();
setInterval(atualizaCronometro(), 1000);


function calculaTempo(tempoObjetivo) {                                            
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = math.flor (tempoFinal)/ 1000;
  let minutos = math.flor (segundos/60);
  let horas = math.flor (minutos/60);
  let dias = math.flor (horas/24)

  sgundos %= 60;
  minutos %= 60;
  horas %= 24;

  if (tempoFinal > 0){
    return [dias,horas.minutos.segundos]
} else {
    return [0,0,0,0];
}
 
}

function atualizaCronometro(){
  for (let i=0; i<contadores.length;i++){   
    document.getElementById("dias"+i).textcontent = calculaTempo(tempos[0])[0];
    document.getElementById("horas"+i).textcontent = calculaTempo(tempos[0])[1];
    document.getElementById("min"+i).textcontent = calculaTempo(tempos[0])[2];                                       
    document.getElementById("seg"+i).textcontent = calculaTempo(tempos[1])[3];
    
    
  }

}
 
function comecaCronometro(){
  atualizaCronometro();
  setInterval(atualizaCronometro(), 1000);
  
}

começacronometro();
