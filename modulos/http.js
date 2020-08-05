const http = require('http');


function router (req, res){
    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal')
            res.end();
            break;
    
        default:
            res.write('Error 404 : No se lo que quieres');
            res.end();

            break;
    }
}

// function (req,res){
//     console.log('Nueva peticion');
//     console.log(req.url);
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.write(`hola, ya se usar http de NodeJS`)
//     res.end();
// }


const httpServer = http.createServer(router);


httpServer.listen(3000);
console.log('Escuchando en el puerto 3000');