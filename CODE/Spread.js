const atencion =[];

//lista de objetos
const pacienteUno={
    nombre:"Pepe",
    edad:19
}
const pacienteDos={
    nombre:"Juan",
    edad:18
}
const pacienteTres={
    nombre:"Carlos",
    edad:27
}

/*
let a = pacienteTres;

a.nombre="Jose" 
//Al hacer esto estamos modificando el objeto original
console.log(pacienteTres)
ouput:{ nombre: 'Jose',}
        edad: 27
         }
*/
/* Con spread (...)podemos clonar un objeto creando uno nuevo a diferencia de la signacion
el cual toma una referencia de un objeto original lo cual podria causar problemas si
modificamos la variable asignada*/

//clonando un objeto con spread
let pacienteTresCopy={...pacienteTres};

console.log(pacienteTresCopy);


let resultado

resultado = [...atencion,pacienteUno,pacienteTres];

resultado= [...resultado,pacienteDos]
resultado=[pacienteDos, ...resultado]
console.table(resultado);
/* output
┌─────────┬──────────┬──────┐ 
│ (index) │  nombre  │ edad │ 
├─────────┼──────────┼──────┤ 
│    0    │  'Juan'  │  18  │ 
│    1    │  'Pepe'  │  19  │ 
│    2    │ 'Carlos' │  27  │ 
└─────────┴──────────┴──────┘ 

*/
console.log(resultado)
/* output
 [ { nombre: 'Juan', edad: 18 },
  { nombre: 'Pepe', edad: 19 },
  { nombre: 'Carlos', edad: 27 },
  { nombre: 'Juan', edad: 18 } ]

*/

//Eliminar ultimo elemento de un array

resultado.pop();
console.table(resultado);
/* output
┌─────────┬──────────┬──────┐ 
│ (index) │  nombre  │ edad │ 
├─────────┼──────────┼──────┤ 
│    0    │  'Juan'  │  18  │ 
│    1    │  'Pepe'  │  19  │ 
│    2    │ 'Carlos' │  27  │ 
└─────────┴──────────┴──────┘ 
*/

//eliminar del inicio del arreglo
resultado.shift();
console.table(resultado);

/* output
┌─────────┬──────────┬──────┐ 
│ (index) │  nombre  │ edad │ 
├─────────┼──────────┼──────┤ 
│    0    │  'Pepe'  │  19  │ 
│    1    │ 'Carlos' │  27  │ 
└─────────┴──────────┴──────┘ 

*/

//eliminar un elemento por cordenada usando splice
resultado.splice(0,1)

console.table(resultado);
/* output
┌─────────┬──────────┬──────┐ 
│ (index) │  nombre  │ edad │ 
├─────────┼──────────┼──────┤ 
│    0    │ 'Carlos' │  27  │ 
└─────────┴──────────┴──────┘

*/
