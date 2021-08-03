require("colors");

const { inquirerMunu, pause } = require("./helpers/inquirer");

console.clear();

const main = async (e) => {
   let opt = "";

   do {
      console.clear();

      opt = await inquirerMunu();
      //   console.log({ opt });
      await pause();
   } while (opt !== "0");
};

main();
