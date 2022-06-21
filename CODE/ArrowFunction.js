//Arrow Function

//forma tradicional
const Saludo = function(){
    console.log("saludos");
}
Saludo();

//arrow 
saludo=()=>{
    console.log("Hola");
}
saludo();

//parametros en arrow functions

suma= (a,b) =>{
    return a+b;
}

resulado= suma(2,3);
console.log(resulado);

Calculadora=(operacion,a,b)=>{
    if(operacion=="suma"){
        console.log(a+b);
    }
    else if(operacion=="resta"){
        console.log(a-b); 
    }
    else if(operacion=="multiplicacion"){
        console.log(a*b); 
    }
    else if(operacion=="divicion"){
        console.log(a/b); 
    }
}

Calculadora(`suma`,88,33);
Calculadora(`resta`,88,33);
Calculadora(`multiplicacion`,88,33);
Calculadora(`divicion`,88,33);

//ventajas de las arrow functions
//su sintaxis es mucho mas corta depenediendo de sus aplicaciones
const nombre = function(name,Sname){
    console.log(`mi nombre es ${name} ${Sname}`);
}
nombre("Diego","Avila");

//version Arrow sin ()
Name=name=>{
    console.log(name);
}
Name("Diego");

//Sin (){}
NameTwo= Name => console.log("hola soy "+ Name);
NameTwo("Ignacio")

//usando template string y solo un argumento de salida
nameThree = (name,secondName) =>`${name} ${secondName}`
console.log(nameThree("Diego","Ignacio"));

//Arrow Function + .map y foreach
const carrito=[
    {nombre:'Papas Fritas',precio:200},
    {nombre:'Bebida',precio:2200},
    {nombre:'Dulces',precio:500},
    {nombre:'Verduras',precio:800},
    {nombre:'Berlines',precio:100},
    {nombre:'Jamon',precio:3300},
    {nombre:'Cecina',precio:5200}
];
//forEach
//Forma Tradicional
const mirarCarrito =carrito.forEach(function(Product){
    console.log(`Producto: ${Product.nombre}`)
})

//forma arrow
const VerCarrito = carrito.forEach( (producto)=>{
    console.log( `${producto.nombre} -Precio: ${producto.precio}`)
})

//map

const compra = carrito.map(function(product){
    console.log(`Articulo: ${product.nombre} precio: ${product.precio}`)
})
//map arrow
const compraArr = carrito.map(product=>{
    console.log(`${product.nombre}`);
})

