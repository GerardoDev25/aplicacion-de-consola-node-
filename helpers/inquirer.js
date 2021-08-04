const inquirer = require("inquirer");
const colors = require("colors");

const preguntas = [
   {
      type: "list",
      name: "option",
      message: "Que desea hacer?",
      choices: [
         {
            value: "1",
            name: `${"1.".green} Crear tarea`,
         },
         {
            value: "2",
            name: `${"2.".green} Listar tareas`,
         },
         {
            value: "3",
            name: `${"3.".green} Listar tareas completadas`,
         },
         {
            value: "4",
            name: `${"4.".green} Listar tareas pendientes`,
         },
         {
            value: "5",
            name: `${"5.".green} Completar tarea(s)`,
         },
         {
            value: "6",
            name: `${"6.".green} Borrar Tarea`,
         },
         {
            value: "0",
            name: `${"0.".green} Salir\n`,
         },
      ],
   },
];

const inquirerMunu = async () => {
   //    console.clear();
   console.log("=============================".green);
   console.log("*** seleccione una opcion ***".white);
   console.log("=============================\n".green);

   const { option } = await inquirer.prompt(preguntas);

   return option;
};

const pause = async () => {
   console.log("\n");
   await inquirer.prompt([
      {
         type: "input",
         name: "enter",
         message: `\nPrecione ${"Enter".green} para continuar\n`,
      },
   ]);
};

// ? funcion que se encarga de leer la obcion
const leerInput = async (message) => {
   const question = [
      {
         type: "input",
         name: "desc",
         message,
         validate(value) {
            if (!value.length)
               return "pro favor ingrese un valor";
            return true;
         },
      },
   ];

   const { desc } = await inquirer.prompt(question);
   return desc;
};

// ? funcion para listar las tarea para borrar
const listadoTareasBorrar = async (tareas = []) => {
   const choices = tareas.map((tarea, index) => {
      const idx = `${index + 1}.`.green;

      return {
         value: tarea.id,
         name: `${idx} ${tarea.desc}`,
      };
   });

   const preguntas = [
      {
         type: "list",
         name: "id",
         message: "Borrar",
         choices,
      },
   ];

   const { id } = await inquirer.prompt(preguntas);

   return id;
};

module.exports = {
   inquirerMunu,
   pause,
   leerInput,
   listadoTareasBorrar,
};
