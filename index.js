const prompts = require("./src/prompts");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");

// execute
console.log("Welcome!");
prompts
   .manager()
   .then((managerOutput) => {
      const manager = new Manager(
         managerOutput.name,
         managerOutput.id,
         managerOutput.email,
         managerOutput.officeNumber
      );
      console.log(generateHTML.employeeHTML(manager));
   })
   .then(() => prompts.engineer())
   .then((engineerOutput) => console.log(engineerOutput))
   .then(() => prompts.intern())
   .then((internOutput) => console.log(internOutput));
