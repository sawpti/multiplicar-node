const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//const  argv  = require('./config/yargs').argv;
const { argv } = require('./config/yargs');
var colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(`Listo ${resultado}`))
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado en ${archivo}`))
            .catch(e => console.log(e))

        break
    default:
        console.log("El comando ingresado no reconocido");



}

//console.log(argv);



/*let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);


    */