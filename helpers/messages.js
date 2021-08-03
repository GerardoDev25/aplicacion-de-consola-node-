require("colors");

const showMenu = () => {
   return new Promise((resolve) => {
      console.clear();
      console.log("=============================".green);
      console.log("*** seleccione una opcion ***".green);
      console.log("=============================\n".green);

      console.log(`${"1.".green} Crear tarea`);
      console.log(`${"2.".green} Listar tareas`);
      console.log(`${"3.".green} Listar tareas completadas`);
      console.log(`${"4.".green} Listar tareas pendientes`);
      console.log(`${"5.".green} Completar tarea(s)`);
      console.log(`${"6.".green} Borrar Tarea`);
      console.log(`${"0.".green} Salir\n`);

      const readLine = require("readline").createInterface({
         input: process.stdin,
         output: process.stdout,
      });

      readLine.question("Seleccione una accion: ", (opt) => {
         resolve(opt);
         readLine.close();
      });
   });
};

// ? funcion de pausa de la apliccion
const pausa = () => {
   return new Promise((res) => {
      const readLine = require("readline").createInterface({
         input: process.stdin,
         output: process.stdout,
      });

      readLine.question(
         `\nPrecione ${"Enter".green} para continuar\n`,
         (opt) => {
            readLine.close();
            res();
         }
      );
   });
};

module.exports = { showMenu, pausa };
