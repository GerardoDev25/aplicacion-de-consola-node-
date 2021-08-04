require("colors");

const { guardarDB, leerDB } = require("./db/guardarArchivo");
const {
   inquirerMunu,
   pause,
   leerInput,
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
            // console.log(tareas._listado);

            // console.log(tareas.listadoArr);
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
            break;

         case "6":
            break;
      }

      // * guardar las tareas en un archivos
      guardarDB(tareas.listadoArr);

      await pause();
   } while (opt !== "0");
};

// ? funcion principal
main();
