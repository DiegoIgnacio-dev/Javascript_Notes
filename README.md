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
