let palabraAdivinar;
let fallos = 0;
let aciertos = 0;
let parrafo;
let imagen;
let teclado;

const palabras = [
    "COMPUTADORA",
    "MOUSE",
    "TECLADO",
    "LENGUAJE",
    "PROGRAMACION",
    "IRONMAN",
    "BATMAN",
    "TYPESCRIPT",
    "JAVASCRIPT",
    "CIEN",
    "EXAMEN"
];
const cargarRecursos = () => {
    parrafo = document.getElementById("palabraAdivina");
    imagen = document.getElementById("ahorcadoImg");
    teclado = document.querySelectorAll("#letras button");
    gamerOver();
}


const iniciarJuego = (id) => {
    document.getElementById("resultado").innerHTML = "";

    imagen.src = "/imagen/img0.png"
    id.disabled = true;
    fallos = 0;
    aciertos = 0;
    parrafo.innerHTML = '';
    const cant_palabras = palabras.length;
    const indice = Math.floor(Math.random() * cant_palabras);
    palabraAdivinar = palabras[indice];
    console.log(palabraAdivinar);
    const cantidadLetras = palabraAdivinar.length;

    for (let i = 0; i < teclado.length; i++) {
        teclado[i].disabled = false;
    }

    for (let i = 0; i < cantidadLetras; i++) {
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }
}



const letra = (id) => {
    const spans = document.querySelectorAll('#palabraAdivina span');
    const btn = id;
    btn.disabled = true;
    const letra = id.innerHTML;
    const palabraC = palabraAdivinar;
    console.log(letra);
    let acerto = false;
    for (let i = 0; i < palabraC.length; i++) {
        if (letra == palabraC[i]) {
            spans[i].innerHTML = letra;
            aciertos++;
            acerto = true;
        }
    }
    if (acerto == false) {
        fallos++;
        const source = `/imagen/img${fallos}.png`;
        imagen.src = source;
    }

    if (fallos == 7) {
        document.getElementById("resultado").innerHTML = "Perdiste, la palabra era: " + palabraAdivinar;
        gamerOver();
    }
    else if (aciertos == palabraAdivinar.length) {
        document.getElementById("resultado").innerHTML = "GANASTE!!";
        gamerOver();
    }

    console.log("la letra " + letra + " en la palabra " + palabraC + " ¿existe?: " + acerto);
}

const gamerOver = () => {
    for (let i = 0; i < teclado.length; i++) {
        teclado[i].disabled = true;
    }
    document.getElementById("iniciar").disabled = false;
}