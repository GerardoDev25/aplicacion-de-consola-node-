const colors = require("colors");
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

   // ? funcion para cargar las tareas
   cargarTareasDesdeArray(tareas = []) {
      tareas.forEach((tarea) => {
         this._listado[tarea.id] = tarea;
      });
   }

   // ? funcion para crear nueva tarea
   crearTarea(desc = "") {
      const tarea = new Tarea(desc);
      this._listado[tarea.id] = tarea;
   }

   // ? funcion para listar las tareas
   listadoCompleto() {
      this.listadoArr.forEach(
         ({ desc, completadoEn }, index) => {
            console.log(
               `${colors.blue(index + 1)}. ${colors.green(
                  desc
               )} ${"=>".blue} ${
                  completadoEn
                     ? "Completado".green
                     : "Pendiente".red
               }`
            );
         }
      );
   }

   // ? funcion para listar tareas compleatas y pendientes
   listadoCompletoPendientes(compleatadas) {
      compleatadas
         ? this.listadoArr.forEach(
              ({ desc, completadoEn }, index) => {
                 completadoEn &&
                    console.log(
                       `${colors.blue(
                          index + 1
                       )}. ${colors.green(desc)} ${"=>".blue} ${
                          completadoEn
                             ? "Completado".green
                             : "Pendiente".red
                       }`
                    );
              }
           )
         : this.listadoArr.forEach(
              ({ desc, completadoEn }, index) => {
                 !completadoEn &&
                    console.log(
                       `${colors.blue(
                          index + 1
                       )}. ${colors.green(desc)} ${"=>".blue} ${
                          completadoEn
                             ? "Completado".green
                             : "Pendiente".red
                       }`
                    );
              }
           );
   }
}

module.exports = Tareas;
