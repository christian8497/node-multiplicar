const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



let comando = argv._[0]; //indicamos que vamos a tomar de la primera linea de nuestro arreglo como referencia el guion bajo tomaremos las opciones

//En estas lineas de codigo vamos a crear un switch para seleccion de comandos de acuerdo a las acciones que queramos realizar
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite) //el valor de esta variable se define en argv
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}