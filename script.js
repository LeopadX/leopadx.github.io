
const doom1 = {
  cpu: 1,
  gpu: 1,
};

const csgo = {
  cpu: 2,
  gpu: 1,
};

const fallout4 = {
  cpu: 2,
  gpu: 3,
};

const cyberpunk = {
  cpu: 3,
  gpu: 4,
};

const stringa2oggetto = {  //Creo questo oggetto in modo che traformo ad esempio la stringa doom1 nell'oggetto doom1, in modo da usare dopo doom1.cpu
  doom1: doom1,
  csgo: csgo,
  fallout4: fallout4,
  cyberpunk: cyberpunk
};

function verificaGioco() {
  const CPUscelta = parseInt(document.getElementById("cpu").value);
  const GPUscelta = parseInt(document.getElementById("gpu").value);
  const GiocoScelto = document.getElementById("videogioco").value;

  const VideogiocoScelto = stringa2oggetto[GiocoScelto];
  const output = document.getElementById("risultato");

  if((CPUscelta >=VideogiocoScelto.cpu) && (GPUscelta >=VideogiocoScelto.gpu)){
    output.textContent = "Sì, ci puoi giocare! :)"
  } else{
    output.textContent = "No, il tuo computer non è abbastanza potente :("
  }

}




