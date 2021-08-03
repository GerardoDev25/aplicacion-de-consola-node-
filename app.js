require("colors");

const { showMenu, pausa } = require("./helpers/messages");

console.clear();

const main = async (e) => {
   let opt = "";

   do {

      opt = await showMenu();
      console.log({ opt });
      await pausa();
      
   } while (opt !== "0");

};

main();
