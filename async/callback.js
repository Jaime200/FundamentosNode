function hola (nombre,miCallback){
    setTimeout(() => {
        console.log('Hola ' + nombre);    
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log('Adios '+ nombre);
        otroCallback();
    }, 1000);
}


console.log('Iniciando proceso...');
hola('Jaime', function(nombre){
    adios(nombre,function(){
        console.log('Terminando Proceso....');
    });
    
});


// hola('Jaime', function(){});
// adios('Jaime', function(){});s