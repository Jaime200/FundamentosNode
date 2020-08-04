function hola (nombre,miCallback){
    setTimeout(() => {
        console.log('Hola ' + nombre);    
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('Bla bla bla bla!');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log('Adios '+ nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre,--veces,function(){
                console.log('Proceso terminado');
            });
        })
    }else{
        adios(nombre,callback);
    }
}





console.log('Iniciando proceso...');
hola('Carlos', function(nombre){
    conversacion(nombre,3,adios)
})


// hola('Jaime', function(){});
// adios('Jaime', function(){});s