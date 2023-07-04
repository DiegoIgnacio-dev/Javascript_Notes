'use strict';
//capturando id de html
let div1 = document.getElementById('div1');

//modificando un elemento con js desde su id 
div1.innerHTML= "Texto cambiado con js";


//capturando la clase
let parrafo1 = document.getElementsByClassName('parrafo1');
//modificando elementos de una clase desde su indice sabiendo que hay 3 elementos con la clase parrafo
parrafo1[1].innerHTML = "Modificando elemento class con Js"

//modificando su etilo desde js
parrafo1[2].style.fontSize='25px';

console.log(div1);
console.log(parrafo1);