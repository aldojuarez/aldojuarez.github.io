const palabras = ['perro', 'gato', 'computadora', 'silla', 'escritorio', 'gomitas', 'galletas', 'proyector', 'javascript', 'aldo'];
let errores=0;
let aciertos=0;
const bnt=document.querySelectorAll('button');
const palabraOculta=document.getElementById('palabraOculta');
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
const cantLetras=palabra.length;
for (let i = 0; i < cantLetras; i++) {
    const span = document.createElement('span');
    span.textContent='_ '
    palabraOculta.appendChild(span);
}
console.log(palabra);

const letra = (lt) => {
    let acierto=false;
    
    let spans=document.querySelectorAll('span')
    for (let i = 0; i < palabra.length; i++) {
        if (lt.value==palabra[i]) {
            spans[i].innerHTML=lt.value;
            aciertos++;
            lt.disabled=true;
            acierto=true;
        }
    }
    if (acierto==false) {
        errores++;
        const source=`ahorcado${errores}.jpg`;
        document.getElementById('ahorcado').src=source;
    }
    if (errores==4) {
        for (let i = 0; i < bnt.length; i++) {
            bnt[i].disabled=true;
        }
        alert('PERDISTE LA PALABRA ES: '+ palabra);
    }else if(aciertos==palabra.length){
        alert('GANASTE FELICIDADES');
    }
}
