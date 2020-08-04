const fs = require('fs');
const util = require('util');

const fsReadAsync = util.promisify(fs.readFile);
const fsWriteAsync = util.promisify(fs.writeFile);
const fsUnlinkAsync = util.promisify(fs.unlink);
async function leer(ruta){
    const fileData = await fsReadAsync(ruta,{
        encoding : 'utf-8'
    });
    console.log(fileData);
}

async function escribir(ruta){
    await fsWriteAsync(ruta,
`Hola mundo,
soy el nuevo archivo el
cual tiene texto
    `)
}



async function borrar(ruta){
 const unlikeFile = await fsUnlinkAsync(ruta);
 
}

leer(`${__dirname}/archivo.txt`);
escribir(`${__dirname}/nuevoArchivo.txt`);
borrar(`${__dirname}/nuevoArchivo.txt`);