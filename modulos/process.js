//const process = require('process');
process.on('beforeExit', ()=>{
    console.log('El proceso terminará');
})


process.on('exit', ()=>{
    console.log('Saliendo del programa');
    setTimeout(() => {
        console.log('Esto no se ejecutara');
    }, 0);
})



process.on('uncaughtException',(err,origen)=>{
    console.error('Capturando el error');
    console.error(err);
    console.error(origen);
});
// process.on('uncaughtRejection');

// funcionNoExiste();