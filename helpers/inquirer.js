const inquirer = require("inquirer");
const colors = require("colors");

const preguntas = [
   {
      type: "list",
      name: "option",
      message: "Que desea hacer?",
      choices: ["opt1", "opt2", "opt3"],
   },
];

const inquirerMunu = async () => {
   console.clear();
   console.log("=============================".green);
   console.log("*** seleccione una opcion ***".green);
   console.log("=============================\n".green);

   const opt = await inquirer.prompt(preguntas);

   return opt;
};

module.exports = { inquirerMunu };
