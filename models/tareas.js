const Tarea = require("./tarea");

class Tareas {
   _listado = {};

   // * retornar las tareas en un array
   get listadoArr() {
      const listado = [];

      Object.keys(this._listado).forEach((key) =>
         listado.push(this._listado[key])
      );

      return listado;
   }

   constructor() {
      this._listado = {};
   }

   crearTarea(desc = "") {
      const tarea = new Tarea(desc);
      this._listado[tarea.id] = tarea;
   }
}

module.exports = Tareas;
