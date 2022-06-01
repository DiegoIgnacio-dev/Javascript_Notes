/*METODOS CON STRINGS */
const Producto =" Radio Portatil bluetooth";

console.log(Producto);

//conocer la cantidad de letras de un String o cadena de string
console.log(Producto.length);//output=25

//buscar un  string especifico en una cadena de textos

//si existe string en nuestra cadena nos devolvera su posicion
console.log(Producto.indexOf('Portatil'));//output=1

//si no existen similitudes dara un -1
console.log(Producto.indexOf('tablet'));//output= -1

//ademas de indexOf tenemos a .includes

console.log(Producto.includes('radio'));//output= false
console.log(Producto.includes('Portatil'));//output= true
/*en este caso Includes es mas util ya que nos devuelve un boolean lo que nos permitiria
tomar una decision si es que determiando string existe en una cadena*/

/*Concat, + y Template literals */

let palabraUno = "Un";
let palabraDos = "Arbol";
let palabraTres= "Gigante";

//concatenacion tradicional
console.log(palabraUno + palabraDos + palabraTres);//output= UnArbolGigante
//si se desea agregar espacios
console.log(palabraUno +" "+ palabraDos +" "+ palabraTres);//output= Un Arbol Gigante

//cocatenacion por comas ,
console.log(palabraUno,palabraDos,palabraTres);//output= Un Arbol Gigante

//contat
console.log(palabraUno.concat (palabraDos).concat (palabraTres) );//output= UnArbolGigante

//template Literal usar backtick

//recomendada
console.log(`${palabraUno} ${palabraDos} ${palabraTres}`);//output= Un Arbol Gigante


//Formatear espacios en blanco
 const Name = '       Diego';

 console.log(Name.length);//output=12
 
 // tomados como un caracter mas y se cuentan con .length

 //Eliminando el espacio al principio del string
  let NameShort= Name.trimStart();
//con trimStart se elimina todo espacio en blanco al principio del string
 console.log(NameShort.length);//output=5


 // al final 
 let txtFinalLongSpace = 'Text          ';
 console.log(txtFinalLongSpace.length);//output=14

 let shortTxt = txtFinalLongSpace.trimEnd();
 console.log(shortTxt.length);//output=4

//Por ambos lados
 let txtSpace= '                TEXT            ';
 console.log(txtSpace.length)//output=32
 let txtSmallSpc=txtSpace.trim();

 console.log(txtSmallSpc.length);//output=4


 //metodo replace se usar para remplazar un string o parte de este

 let medida = "largo 100cm , ancho 200cm";
 console.log(medida);//output=largo 100cm , ancho 200cm

 console.log(medida.replace("100cm","1 metro"));//output=largo 1 metro , ancho 200cm

 console.log(medida.replace("200cm","2 metros"));//output=largo 100cm , ancho 2 metros

 //metodo .slice se sua para cortar parte de un string
 console.log(medida.slice(0,11));//output=largo 100cm
 console.log(medida.slice(13, 22));//output=ancho 20
 //en caso de usar coordenadas equivocas nos dara como resultado un string vacio
 console.log(medida.slice(10,1))//output=empty string

 //alternativa a .slice
 console.log(medida.substring(0,12));//output=largo 100cm
 //a diferencia de slice,este si nos devolvera un valor y tomara como referencia el primero
 console.log(medida.substring(10,0));//output=argo 100c
/* PREGUNTA DE ENTREVISTA
 diferencia entre .slice y substring es que al pasarle parametros fuera de rango
 como .slice(10,1)*que busque desde pocision 10 a 0*en el caso de slice no retornara nada
 en cambio substring si tomara ccomo referencia el primer valor y contara de forma negativa 
 hasta el valor menor
*/

 //metodo para capturar un caracter de un string
 //Ejemplo Visualizacion de la priemra letra de un nombre en Gmail
 let nombre = "Diego";
 console.log(nombre.charAt(0))//output=D
 console.log(nombre.charAt(1))//output=i

 //metodo para repetir un string
let primerTexto = "Aprender";
//al usar .repeat()->asignaremos la cantidad de veces que queramos que se repita 
let textoVenta = "gratis !! ".repeat(3);
console.log(textoVenta);//output=gratis !! gratis !! gratis !! 
console.log(`${primerTexto} es ${textoVenta}!!!`)//output=Aprender es gratis !! gratis !! gratis !! 

/*Pregusta tecnica,¿Que susede si a .repeat le ingresamos un parametro flotante como 2.6 o 3.4
JS lo redondeara a unj entero predominante por ejemplo de 2,6 a 2 
*/

/* Metodo split se usa para dividir una cadena de texto en diferentes partes pasandole un parametro repetitivo*/

let actividades="cantar,jugar,bailar,pintar,nadar";
console.log(actividades.split(","));
let animal = "gato";
console.log(animal.split(""));

let deletreo = animal.split("");

console.table(deletreo);
console.log(deletreo[0])

//Metodos para pasar string a mayuscula y minuscula
let palabra= "text";
let palabraTest = "TEXT";
//.toUpperCase cambia todos los caracteres de un string a Mayuscula
console.log(palabra.toUpperCase());//output=TEXT

//.toLowerCase cambia todos los caracteres a minuscula
console.log(palabraTest.toLowerCase());

//metodo para pasar un numero a string

let num = 10;
console.log(typeof(num));

let numStr = num.toString();
console.log(`${numStr} `,typeof(numStr))

