
//multiplos de 3 = fizz
//multiplos de 5 = buzz

//multiplos ded 3 y 5 FIZZBUZZ
let i= 0
for(i=1; i<100; i++){
    console.log(i);
    if(i % 3 === 0 && i%5=== 0){
        console.log(`${i} bizzbuzz`)
    }
    if(i % 3 === 0){
        console.log(`${i} Fizz`)
    }
    if(i % 5 === 0){
        console.log(`${i} Buzz`)
    }
    
}

//while
let j=1;
while(j<100){
    if(j % 3 === 0 && j%5=== 0){
        console.log(`${j} bizzbuzz`)
    }
    if(j % 3 === 0){
        console.log(`${j} Fizz`)
    }
    if(j % 5 === 0){
        console.log(`${j} Buzz`)
    }
    j++;
}


//ForEach
const Pendientes=['Tarea','comer','Estudiar Javascript'];

Pendientes.forEach(Tareas  =>{ console.log(Tareas) });//una sola linea

Pendientes.forEach((Pendiente,index)=>{
    console.log(Pendiente,index)
})

const carrito=[
    {nombre:'Papas Fritas',precio:200},
    {nombre:'Bebida',precio:2200},
    {nombre:'Dulces',precio:500},
    {nombre:'Verduras',precio:800},
    {nombre:'Berlines',precio:100},
    {nombre:'Jamon',precio:3300},
    {nombre:'Cecina',precio:5200}
];

carrito.forEach((Product)=>{
    console.log(Product.nombre)
})

const ListaProducto=carrito.map(producto => producto.nombre)

console.log(ListaProducto)

//Forof

const ListaPendientes=['Tarea','comer','Estudiar Javascript'];
//for( of ) asignara los elementos de un arreglo una variable hasta que no quede ninguno mas

for(let pendiente of ListaPendientes){
    console.log(pendiente);
}

for(let articulo of carrito){
    console.log(articulo.nombre)
}

//for in esta echo para iterar sobre objetos
//por lo que solo mostrara los indices del arreglo
const ListaTareas=['Tarea','comer','Estudiar Javascript'];
