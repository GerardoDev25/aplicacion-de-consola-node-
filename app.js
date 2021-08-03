require("colors");

const { inquirerMunu } = require("./helpers/inquirer");

console.clear();

const main = async (e) => {
   let opt = "";

   do {
      opt = await inquirerMunu();
      console.log({ opt });
    //   await pausa();
   } while (opt !== "0");
};

main();
