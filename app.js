const { guardarDB, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerImput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');




const main = async () => {
    let opt = '';
    const infoBaseDeDatos = leerDb();
    const tareas = new Tareas(infoBaseDeDatos? infoBaseDeDatos: []);

    do {
        opt = await inquirerMenu();

        switch(opt) {
            // crear tarea
            case '1':
                const desc = await leerImput('Descripción:');
                tareas.crearTareas(desc);

                break;

            // listar tareas
            case '2':
                tareas.listadoCompleto();
                break;
            
            // listar tareas completadas
            case '3':
                tareas.listarTareasConFiltro(true);

                break;

            // listar tareas pendientes 
            case '4':
                tareas.listarTareasConFiltro(false);

                break;
            
            // Completar tarea(s)'
            case '5':

                break;
            
            // borrar tarea
            case '6':

                break;

            case '0':

            break;
            
        }

        guardarDB(tareas.listadoArr);



        if(opt !== '0') await pausa();
    }while(opt !== '0');

}



main();