const { inquirerMenu, pausa, leerImput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');




const main = async () => {
    let opt = '';
    const tareas = new Tareas();

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
                console.log(tareas._listado);
                break;
            
            // listar tareas completadas
            case '3':

                break;

            // listar tareas pendientes 
            case '4':

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



        if(opt !== '0') await pausa();
    }while(opt !== '0');

}



main();