function soyAsincrona (miCallback){
    setTimeout(() => {
        console.log('Hola Soy una funcion asincrona');    
        miCallback();
    }, 1000);
}
console.log('Iniciando proceso...');
soyAsincrona(
    function () {
        console.log('Terminando proceso');
    }
);


