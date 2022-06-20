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


