const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');

// exec('ls -la', (err , stdout, stderr)=>{
//     if(stderr){
//         return console.error(stderr);
//     }else{
//         console.log(stdout);
//     }
// })


// exec('node modulos/consola.js', (err , stdout, stderr)=>{
//     if(stderr){
//         return console.error(stderr);
//     }else{
//         console.log(stdout);
//     }
// })


let proceso = spawn('ls', ['-la'])
// console.log(proceso);

console.log(proceso.connected);

proceso.stdout.on('data', function (dato){
    console.log('¿Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
})


proceso.on('exit', function(){
    console.log('El proceso termino');
    console.log(proceso.killed);
})