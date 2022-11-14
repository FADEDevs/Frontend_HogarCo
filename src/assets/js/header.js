'use strict'
const titulo = document.querySelector('.headerTitle');
const boton = document.querySelector('.headerLink');
const parrafo = document.querySelector('.headerParagraph');

function cambiarTexto() {
    // parrafo.innerHTML = '<b>Soy la Visión</b>';
    if(parrafo.classList.contains('mision')){
        //Como el parrafo contiene el texto de misión entonces lo cambiamos por el de visión
        parrafo.innerHTML = '<b>Soy la Visión</b> lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto rem natus, voluptate iure aliquam. Magnam quaerat nostrum nulla tempore explicabo aspernatur a nam error! Eum natus unde maxime molestiae officia soluta omnis nemo quam tenetur tempora? Expedita adipisci aut deserunt magnam, at, reprehenderit harum saepe odit voluptatibus dolor et';
        parrafo.classList.remove('mision');
        parrafo.classList.add('vision');
        //Por ultimo cambiamos el texto del link y del título
        boton.innerHTML = "Misión";
        titulo.innerHTML = "Visión";
    }else if(parrafo.classList.contains('vision')){
        parrafo.innerHTML = '<b>Soy la Misión</b> lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maxime?';
        parrafo.classList.remove('vision');
        parrafo.classList.add('mision');
        //Por ultimo cambiamos el texto del link y del título
        boton.innerHTML = "Visión";
        titulo.innerHTML = "Misión";
    }
}