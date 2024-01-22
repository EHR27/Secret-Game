let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Limpiar caja despues de cada valor
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let listaNumeros = [];
    let numeroMaximo = 10;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos los numeros
    if(listaNumeros.length == numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero esta incluido en la lista
        if(listaNumeros.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    let numeroMaximo = 10;
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();