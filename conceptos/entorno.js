
//NOMBRE=JAIME WEB=jaime.com node conceptos/entorno.js
let nombre = process.env.NOMBRE || 'Invitado'
let web = process.env.WEB || 'Sin web'
console.log('Hola '+ nombre);
console.log('Mi web es ' + web);
