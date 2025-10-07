const Tarea = require("./tarea");



class Tareas {
    _listado = {};

    constructor(tareas = []) {
        this._listado = {};
        this.cargarTareasFromArray(tareas);
        
    }

    crearTareas(descripcion = '') {

        const tarea = new Tarea(descripcion);

        this._listado[tarea.id] = tarea;
        

    }

    borrarTarea(id = '') {
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;

    }

    listadoCompleto() {
        
        const listado = this.listadoArr;
        this.imprimirTarea(listado);

    }

    imprimirTarea(listado = [], isFilter = false) {
        console.log();
        let tareasString = '';
        listado.forEach((tareas, i) => {
            const estado = tareas.completadoEn? (isFilter ? `${tareas.completadoEn}`.green : 'Completado'.white): 'Pendiente'.red;
            tareasString += `${i + 1}`.green + `. ${tareas.descripcion} :: ${estado}\n`;
        })
        
        console.log(tareasString);
    }


    listarTareasConFiltro(completadas = true){
        
        const listado = this.listadoArr.filter(lista => (completadas ? lista.completadoEn !== null : lista.completadoEn === null) );
        this.imprimirTarea(listado, true);

    }




    cargarTareasFromArray (tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }


    toggleCompletadas(ids = []){

        ids.forEach((id) => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });


        this.listadoArr.forEach(t => {
            if(!ids.includes(t.id)){
                 this._listado[t.id].completadoEn = null;
            }
        });
    }
}


module.exports = Tareas;