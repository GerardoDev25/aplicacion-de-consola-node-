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

   // ? funcion para eleminar una tarea
   borrarTarea(id = "") {
      this._listado[id] && delete this._listado[id];
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
               )} ${" => ".blue} ${
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
                       )}. ${colors.green(desc)} ${
                          " => ".blue
                       } ${colors.green(completadoEn)}`
                    );
              }
           )
         : this.listadoArr.forEach(
              ({ desc, completadoEn }, index) => {
                 !completadoEn &&
                    console.log(
                       `${colors.blue(
                          index + 1
                       )}. ${colors.green(desc)} ${
                          " => ".blue
                       } ${"Pendiente".red}`
                    );
              }
           );
   }

   toggleCompletadas(ids = []) {
      ids.forEach((id) => {
         const tarea = this._listado[id];
         if (!tarea.completadoEn) {
            tarea.completadoEn = new Date().toISOString();
         }
      });

      this.listadoArr.forEach((tarea) => {
         if (!ids.includes(tarea.id)) {
            this._listado[tarea.id].completadoEn = null;
         }
      });
   }
}

module.exports = Tareas;
