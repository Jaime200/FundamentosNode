console.time('todo');

let suma = 0;

console.time('bucle');
for (let index = 0; index < 1000000000; index++) {
   suma += 1;    
}

console.log(suma);
console.timeEnd('bucle');

console.time('bucle 2');
for (let index = 0; index < 1000000000; index++) {
   suma += 1;    
}
console.timeEnd('bucle 2');

console.time('asincrono');
asincrona()
.then(() => {
    console.timeEnd('asincrono');
});


console.timeEnd('todo');

function asincrona(){
    return new Promise( (resolve, reject )=>{
        setTimeout(() => {
           console.log('Termina el proceso asincrono'); 
           resolve();
        }, 2000);
    } )
}