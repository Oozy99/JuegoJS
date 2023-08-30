const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const GANADOR = 1;
const PERDEDOR = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultadoTexto = document.getElementById("texto_inicial");
const imgMaquina = document.getElementById("img_maquina");
const contadorJugador = document.getElementById("contador-jugador");
const contadorMaquina = document.getElementById("contador-maquina");

let jugadorWins = 0;
let maquinaWins = 0;

piedraBtn.addEventListener("click", () => {
    jugar(PIEDRA);
});

papelBtn.addEventListener("click", () => {
    jugar(PAPEL);
});

tijeraBtn.addEventListener("click", () => {
    jugar(TIJERA);
});

function jugar(usuariOpcion) {
    const machineOption = calMaquina();
    const resultado = calResultado(usuariOpcion, machineOption);
    imgMaquina.src = "img/" + machineOption + ".png";
    mostrarEleccion(usuariOpcion, machineOption);
    switch (resultado) {
        case EMPATE:
            resultadoTexto.innerHTML = "¡¡¡HAS EMPATADO!!!";
            break;
        case GANADOR:
            resultadoTexto.innerHTML = "¡¡¡HAS GANADO!!!";
            jugadorWins++;
            contadorJugador.textContent = jugadorWins;
            break;
        case PERDEDOR:
            resultadoTexto.innerHTML = "¡¡¡HAS PERDIDO!!!";
            maquinaWins++;
            contadorMaquina.textContent = maquinaWins;
            break;
    }
}



function mostrarEleccion(eleccionJugador, eleccionMaquina) {
    const textoJugador = document.getElementById("texto-jugador");
    const textoMaquina = document.getElementById("texto-maquina");

    textoJugador.textContent = eleccionJugador;
    textoMaquina.textContent = eleccionMaquina;
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