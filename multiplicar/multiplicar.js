// requireds
//son todos los paquetes que vamos a importar

const fs = require('fs');
var colors = require('colors');
//const fs = require('express');    es un package ya creado que podemos hacer uso de sus funciones
//const fs = require('./fs'); asi se definen las url para funciones que estan dentro de archivos que nosotros mismos creamos

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
            //si  el callback recibe un error mostrara el error
                reject(err)
            else
            //si no hay error mostrara el mensaje
                resolve(`tabla-${base}-al-${limite}.txt`)

        });
    });
}

// se crea una funcion para listar tabla de multiplicar, se envian dos parametros (base, limite), se valida que los valores sean numeros, se ejecuta el ciclo para la impresion de la tabla de multiplicar
let listarTabla = (base, limite = 10) => {

    console.log('============================================='.green);
    console.log(`           Tabla de ${base}`.green);
    console.log('============================================='.green);

    if (!Number(base)) {
        reject(`${base} no es un numero`);
        return;
    }

    if (!Number(limite)) {
        reject(`${limite} no es un numero`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} X ${i} = ${base * i}`);
    }
}

//herramienta modulo para exportaciones, al agregar dentro de esta las fucniones se hacen globales y las podemos llamar de cualquier archivo de nuestra app
module.exports = {
    crearArchivo,
    listarTabla
}