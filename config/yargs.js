/*
cuando los comandos configurados en yargs manejan informacion similar se puede optimizar el contenido de los objetos que se incluyen, 
si nos damos cuenta base y limite son lo mismo para listar y crear
entonces vamos a realizar lo siguiente
*/

//declaramos una constante que contiene el objeto con las dos variables que vamos a utilizar en nuestros dos comandos
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de mutliplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

// agregamos esta configuracion de yargs al modulo de exportaciones globales
module.exports = {
    argv
}