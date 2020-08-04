function hola (nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Hola ' + nombre);    
            resolve(nombre);
        }, 1000);
    })
}

function hablar(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Bla bla bla bla!');
            resolve();
        }, 50);
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


async function main(){
  let response = await hola('Jaime');
  await hablar();
  await hablar();
  await hablar();
  await adios(response);
  console.log('Termina el proceso');
}
console.log('Empezamos el proceso');
main();


