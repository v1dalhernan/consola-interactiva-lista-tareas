const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green } Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green } Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green } Salir`
            },

        ]
    }
];

const inquirerMenu = async () => {
    console.clear();

    console.log('===================================='.green);
    console.log('       Seleccione una opción        '.white);
    console.log('====================================\n'.green);

    const { option } = await inquirer.prompt(menuOptions);

    return option;
}


const pausa = async () => {
    
    console.log('\n');
    const { value } = await inquirer.prompt([
        {
            type: 'input',
            name: 'value',
            message: `Presiona ${'ENTER'.green} para continuar`,
        }
    ]);

    return value;
}


const leerImput = async (mensaje) => {
    const question  =  [
        {
            type: 'input',
            name: 'description',
            mensaje,
            validate (value) {
                if(value.length === 0){
                    return 'por facor ingreso un valor'
                }
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);

    return description;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerImput,
}