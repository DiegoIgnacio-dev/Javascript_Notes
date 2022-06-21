//Comunicacion entre funciones
//llamando a una funcion desde otra funcion
function inicio_Sesion(){
    console.log("iniciando sesion..");
    procesando_Solicitud();
}

function procesando_Solicitud(){
    console.log("...por favor espere");
    solicitud_Validada();
}

function solicitud_Validada(){
    console.log("Sesion Iniciada");
}

inicio_Sesion();

let totalVenta= 0;
//con esta funcion hacemos que el parametro precio se sume en total venta cada vez llamamos a la funcion

function CarroCompras(precio){
    totalVenta +=  precio;
    return totalVenta;
}

let Total = CarroCompras(100);
Total= CarroCompras(200);
Total= CarroCompras(600);
Total = CarroCompras(1000);

//Funcion que tomara el retorno de la primera funcion y le aplicara un impuesto

function impuesto(Total){
    return Total =Total + Total*0.19;
}

let ImpuestoChileno = impuesto(Total);  

console.log(Total);

console.log(ImpuestoChileno);

//FUNCIONES EN OBJETOS

const usuario={
    nombre:"Diego",
    apellido:"Avila",
    alerta:function(acceso){
        if(acceso == true){
            console.log("Acceso autorizado");
        }else{
            console.log("Acceso Denegado");
        }
        return acceso;
    },
    acceso:function(acceso){
        if(acceso==true){
            console.log("session iniciada")
        }else{
            console.log("No es posible iniciar session");
        }

    },
    mostrarNombre:function(){
        console.log(`${usuario.nombre} ${usuario.apellido}`);
    }

    
}

let autorizacion = true;

usuario.alerta(autorizacion);
usuario.acceso(autorizacion);
usuario.mostrarNombre();



