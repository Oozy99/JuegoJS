const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const GANADOR = 1;
const PERDEDOR = 2;



const piedraBtn =document.getElementById("piedra");
const papelBtn =document.getElementById("papel");
const tijeraBtn =document.getElementById("tijera");
const resultadoTexto = document.getElementById("texto_inicial");
const img_maquina = document.getElementById("img_maquina");

piedraBtn.addEventListener("click", ()=>{
 jugar(PIEDRA);
});

papelBtn.addEventListener("click", ()=>{
    jugar(PAPEL);
});

tijeraBtn.addEventListener("click", ()=>{
    jugar(TIJERA);
});

function jugar (usuariOpcion){
  const machineOption = calMaquina();
  const resultado =calResultado(usuariOpcion,machineOption);
  img_maquina.src = "img/" + machineOption + ".png";


switch (resultado){
    case EMPATE:
        resultadoTexto.innerHTML= " ¡¡¡HAS EMPATADO!!!";
      
        break;
        case GANADOR:
            resultadoTexto.innerHTML= " ¡¡¡HAS GANADO!!!";
        break;
        case PERDEDOR:
            resultadoTexto.innerHTML= " ¡¡¡HAS PERDIDO!!!";
        break;

}

function calMaquina(){
const numero=Math.floor(Math.random() * 3);
switch (numero){
    case 0:
        return PIEDRA;

    case 1:
        return PAPEL;
    case 2:
       return TIJERA;
}

}


}


function calResultado(usuariOpcion, machineOption){
    if(usuariOpcion === machineOption){
        return EMPATE;
    }
    
    else if(usuariOpcion=== PIEDRA ){

    if ( machineOption === PAPEL) return PERDEDOR;
    if (machineOption === TIJERA) return GANADOR;

    }
    
    else if (usuariOpcion === PAPEL){
     
    if( machineOption === TIJERA)return PERDEDOR;
    if (machineOption === PIEDRA) return GANADOR;
    }
    
    else if (usuariOpcion === TIJERA){
     
        if( machineOption === PAPEL)return GANADOR;
        if (machineOption === PIEDRA) return PERDEDOR;
        }
}