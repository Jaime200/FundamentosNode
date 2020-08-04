console.log('Algo');
console.info('Informacion')
console.error('Error')
console.warn('Warn')

var tabla = [ 
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Y'
    }
]

console.table(tabla)

console.group('Conversacion');
console.log('Hola');
console.log('Blablabla');
console.log('Adios');
console.groupEnd('Conversacion');
console.log('otra cosa de funcion');


function funcion1(){
    console.group('funcion 1')
    console.log('Esto es de la funcion 1 ');
    console.log('Esto tambien es la funcion 1 ');
    funcion2();
    console.log('Volvimos a la funcion 1 ');
    console.groupEnd('funcion 1')
}

function funcion2(){
    console.group('funcion 2');
    console.log('Ahora estamos en la funcion 2 !!!!');
    console.groupEnd('funcion 2');
}

funcion1();