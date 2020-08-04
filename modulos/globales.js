let i = 0;
let interval = setInterval(() => {
    if(i === 3){
        clearInterval(interval);
    }
    i++
    console.log('Hola');
}, 1000);


setImmediate(function(){
    console.log('Hola immediate');
    
})