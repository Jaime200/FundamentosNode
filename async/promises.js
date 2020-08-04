function hola (nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Hola ' + nombre);    
            resolve(nombre);
        }, 1000);
    })
}

function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Bla bla bla bla!');
            reject(nombre);
        }, 1000);
    });
}

function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Adios '+ nombre);
            resolve();
        }, 1000);
    })
  
}


console.log('Iniciando el proceso!!');
hola('Jaime')
.then( nombre => hablar(nombre))
.then( nombre => hablar(nombre))
.then( nombre => hablar(nombre))
.then( nombre => hablar(nombre))
.then( nombre => hablar(nombre))
.then( nombre => adios(nombre))
.then( response =>{
        console.log('Termino el proceso');
    } )
.catch(err =>{
    console.error(err);
})
