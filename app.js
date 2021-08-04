require("colors");

const { guardarDB } = require("./db/guardarArchivo");
const {
   inquirerMunu,
   pause,
   leerInput,
} = require("./helpers/inquirer");

const Tareas = require("./models/tareas");


const main = async (e) => {
   let opt = "";

   const tareas = new Tareas();

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
            console.log(tareas.listadoArr);
            break;

         case "3":
            break;

         case "4":
            break;

         case "5":
            break;

         case "6":
            break;
      }

      // * guardar las tareas en un archivos
      // guardarDB(tareas.listadoArr)

      await pause();
   } while (opt !== "0");
};

// ? funcion principal
main();
