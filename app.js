require("colors");

const { guardarDB, leerDB } = require("./db/guardarArchivo");
const {
   inquirerMunu,
   pause,
   leerInput,
   listadoTareasBorrar,
   confirmar,
   MostrarTareasCheckList,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {
   let opt = "";
   const tareas = new Tareas();
   const tareasDB = leerDB();

   // * si exiten tareas cargarlas
   if (tareasDB) {
      tareas.cargarTareasDesdeArray(tareasDB);
   }

   do {
      console.clear();

      // * imprimir el menu
      opt = await inquirerMunu();

      switch (opt) {
         case "1":
            //* crear tarea
            const desc = await leerInput("Descripcion: ");
            tareas.crearTarea(desc);
            break;

         case "2":
            // * listar tareas
            tareas.listadoCompleto();
            break;

         case "3":
            // * listar  tareas completadas
            tareas.listadoCompletoPendientes(true);
            break;

         case "4":
            // * listar tareas pendientes
            tareas.listadoCompletoPendientes(false);
            break;

         case "5":
            // * marcar tareas como completadoas 
            const ids = await MostrarTareasCheckList(tareas.listadoArr)

            tareas.toggleCompletadas(ids)
            
            // console.log(ids);
            break;

         case "6":
            // * borrar tareas
            const id = await listadoTareasBorrar(
               tareas.listadoArr
            );
            if (id !== '0') {
               const ok = await confirmar(
                  "Esta segura de borrar la tarea?"
               );
               ok && tareas.borrarTarea(id);
            }
            break;
      }

      // * guardar las tareas en un archivos
      guardarDB(tareas.listadoArr);

      await pause();
   } while (opt !== "0");
};

// ? funcion principal
main();
