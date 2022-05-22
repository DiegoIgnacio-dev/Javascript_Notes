
let num =[1,2,3,4,5,6,7];
//Mostrando mis arreglos desde diferentes perspectivas
//Objet.entries devuelve el array en pares con su id y valor
console.log(Object.entries(num));
//[ [ '0', 1 ],
//[ '1', 2 ],
//[ '2', 3 ],
//[ '3', 4 ],
//[ '4', 5 ],
//[ '5', 6 ],
//[ '6', 7 ] ]

//objet.values devuelve solo los valores de mi arreglo
console.log(Object.values(num));
//[ 1, 2, 3, 4, 5, 6, 7 ]

//objet.keys devuelve el indice del arreglo
console.log(Object.keys(num));
//[ '0', '1', '2', '3', '4', '5', '6' ]

console.table(num);//muestra el arreglo ordenado en una tabla

//accediendo a un valor por el indice
console.log(num[2]);


//Recorriendo un array usando un for y length
console.log(num.length);

for(let i = 0 ;i < num.length; i++){
    console.log(num[i]);
}

//recoriendo un array usando un forEach
num.forEach(elemento =>{
    console.log(elemento);
});
//Otros Metodos
const carrito=[
    {nombre:'Papas Fritas',precio:200},
    {nombre:'Bebida',precio:2200},
    {nombre:'Dulces',precio:500},
    {nombre:'Verduras',precio:800},
    {nombre:'Berlines',precio:100},
    {nombre:'Jamon',precio:3300},
    {nombre:'Cecina',precio:5200}
];

console.log(carrito);

for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre}--Precio: ${carrito[i].precio}`)
}
//la diferencia con el for comun es que podemos hacer el recorrido sobre un parameto que
//nosotros queramos de lo contrario tendriamos que renombrar el array original
let nuevoArreglo = carrito.forEach(function(producto){
    return(`${producto.nombre}--Precio: ${producto.precio}`);
})

console.log(nuevoArreglo);

//.map me permite crear un nuevo arreglo apartir del anterior
let nuevoArregloDos=carrito.map(function(producto){
    if(`${producto.precio}`>2000){
        return(`${producto.nombre}--Precio: ${producto.precio}`)
    } 
    //en este caso solo me retornara en el nuevo arreglo aquellos valores mayores a 2000
})
console.log(nuevoArregloDos);

