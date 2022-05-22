# Javascript_Notes📖
Javascript Helper Notes

**Parametros Y Argumentos en las funciones**
```javascript
//Funcion sin Parametros
function Suma() {
    let resultado = 2+2
    console.log(resultado); 
}
    Suma();//output = 4
```
**Funcion con parametros**

```javascript 
function calculadora( oper ,a ,b ) {
  if( oper == 'sumar' ) {

    let resultado = a + b;
    console.log(resultado);

  }else if(oper == 'restar'){

    let resultado = a - b;
    console.log(resultado);

  }else if(oper == 'multiplicar'){

    let resultado = a * b;
    console.log(resultado);

  }else if(oper == 'dividir'){

    let resultado = a / b;
    console.log(resultado);
  }
}
```
**Los argumentos son usados cuando llamamos a una funcion con parametros,
le asignamos un argumento por cada parametro de forma ordenada y de esta manera
obtendremos un resultado**

```javascript 
'sumar',8,2 son argumentos
calculadora('sumar',8,2);//output = 10
calculadora('restar',8,2);//output = 6
calculadora('multiplicar',8,2);//output = 16
calculadora('dividir',8,2);
```
*En caso de no definir un argumento pueden surgir resultados no deseados*
```javascript 
function resta(a , b){
  resultado = a - b
  console.log(resultado);
}

resta( 1 , );//output = NaN
```
**Para evitar esto podemos definir parametros por default**

```javascript 
function resta_Dos(a = 0 , b = 0){
  resultado = a - b
  console.log(resultado);
}

resta_Dos( 1 , );//output = 1
```
[CODIGO COMPLETO](https://github.com/DiegoIgnacio-dev/Javascript_Notes/blob/main/CODE/Parametros%20Y%20Argumentos%20en%20las%20funciones.js)

# Array_Notes📖
```javascript 
//EJEMPLO BASICO DE UN ARREGLO
'use strict'
const num = [10,20,30,40,50];

console.log(num);//output = 10,20,30,40,50


//indicamos que queremos cambiar el valor con indice 0 a 5
num [0] = 5;
//agregando un nuevo valor a un indice vacio
num[5] = 60;
//si agregamos un valor dejando varios indices sin declarar estos seran declarados como vacio o undefined
num[7]= 80;
//agregadon nuevos elemento con .push()
num.push(90,100);
```
- [Metodos para recorrer un array](https://github.com/DiegoIgnacio-dev/Javascript_Notes/blob/main/CODE/Array_Recorrido.js)
- [Spread Array y Objetos](https://medium.com/@gloriafercu/es6-spread-operator-en-arrays-y-objetos-e46bfc84a0d0)

# SPREAD📖

```javascript
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

let pacienteTresCopy={ ...pacienteTres };

/* Con spread (...)podemos clonar un objeto creando uno nuevo a diferencia de la signacion
el cual toma una referencia de un objeto original lo cual podria causar problemas si
modificamos la variable asignada*/

```
- [Mas ejemplos de Spread con Objetos](https://github.com/DiegoIgnacio-dev/Javascript_Notes/blob/main/CODE/Spread.js)
