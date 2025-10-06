
const { v7: uuidV7 } = require('uuid');
class Tarea {

    id = '';
    descripcion = '';
    completadoEn = null;


    constructor (descripcion) {
        this.descripcion = descripcion;
        this.id = uuidV7();
        this.completadoEn = null;
    }
}


module.exports = Tarea;