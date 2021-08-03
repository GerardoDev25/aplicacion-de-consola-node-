require("colors");

const {
   inquirerMunu,
   pause,
   leerInput,
} = require("./helpers/inquirer");

// const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

// console.clear();

const main = async (e) => {
   let opt = "";

   const tareas = new Tareas();

   do {
      console.clear();

      opt = await inquirerMunu();

      switch (opt) {
         case "1":
            // crear tarea
            const desc = await leerInput("Descripcion: ");
            tareas.crearTarea(desc);
            break;
         case "2":
            console.log(tareas._listado);
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

      await pause();
   } while (opt !== "0");
};

main();
