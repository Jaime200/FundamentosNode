// const { app, BrowserWindow } = require('electron');
// let ventanaPrincipal;

// app.on('ready', crearVentana);


// function crearVentana() {
//     ventanaPrincipal = new BrowserWindow({
//         width: 800,
//         height: 600,
//     });

//     ventanaPrincipal.loadFile('index.html');
// }


const { app, BrowserWindow } = require('electron');

let mainWindow;


app.on('ready',createWindow);


function createWindow(){
    mainWindow = new BrowserWindow({
        width : 800,
        height : 600
    })

    mainWindow.loadFile('index.html')
}