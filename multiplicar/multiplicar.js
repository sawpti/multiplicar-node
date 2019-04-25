const fs = require('fs');
var colors = require('colors');

//let base = 3;

/*const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});*/

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {

            reject('No es un núero el dato ingresado');
            return;
        }
        let data = '';
        for (i = 0; i <= limite; i++) {
            data += ` ${base} * ${i} = ${base * i} \n`;
            //console.log(` ${base} * ${i} = ${base * i}`)
        }
        fs.writeFile(`./tablas/tabla${base}_limit${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else

                resolve(`tablas/tabla${base}_limit${limite}.txt`);
        });

    });
}
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {

            reject('Debes ingresar parámetros númericos');
            return;
        }
        console.log('Tabla de Multipplicar'.yellow);
        for (i = 0; i <= limite; i++) {
            // data += ` ${base} * ${i} = ${base * i} \n`;
            console.log(` ${base} * ${i} = ${base * i}`.blue)
        }
        resolve('Lista generada')


    });
}



module.exports = {
    crearArchivo,
    listarTabla
}