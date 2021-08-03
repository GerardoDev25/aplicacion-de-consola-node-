require("colors");

const { inquirerMunu, pause } = require("./helpers/inquirer");

// const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

// console.clear();

const main = async (e) => {
   let opt = "";

   do {
      console.clear();
      opt = await inquirerMunu();
      console.log({ opt });

      await pause();
   } while (opt !== "0");
};

main();
