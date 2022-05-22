//Parametros Y Argumentos en las funciones
/*los parametros sera datos los cuales podran ser utilizados en el ambito ded dicha funcion 
ya sea para la asignacion de variables internas 
*/

//funcion sin parametros 

function Suma() {
    let resultado = 2+2
    console.log(resultado); 
}
Suma();//output = 4

//funcion con parametro
function calculadora(oper,a,b){
  if(oper == 'sumar'){
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

/*Los argumentos son usados cuando llamamos a una funcion con parametros
asignando cada parametro con un argumento de forma ordenada y de esta manera
obtener una salida procesando nuestros argumentos
*/
calculadora('sumar',8,);//output = 10
calculadora('restar',8,2);//output = 6
calculadora('multiplicar',8,2);//output = 16
calculadora('dividir',8,2);

function resta_Dos(a = 0 , b = 0){
  resultado = a-b
  console.log(resultado);
}

resta_Dos(1,);
