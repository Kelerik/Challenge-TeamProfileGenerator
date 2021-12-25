const prompts = require("./utils/prompts");
const generateHtml = require("./utils/generateHtml");
const writeHtml = require("./utils/writeHtml");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let managerHtml = "";
let engineerHtml = "";
let internHtml = "";

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
      managerHtml = generateHtml.employee(manager);
   })
   .then(() => prompts.engineer())
   .then((engineerOutput) => {
      const engineer = new Engineer(
         engineerOutput.name,
         engineerOutput.id,
         engineerOutput.email,
         engineerOutput.github
      );
      engineerHtml = generateHtml.employee(engineer);
   })
   .then(() => prompts.intern())
   .then((internOutput) => {
      const intern = new Intern(
         internOutput.name,
         internOutput.id,
         internOutput.email,
         internOutput.school
      );
      internHtml = generateHtml.employee(intern);
   })
   .then(() => {
      writeHtml(generateHtml.final(managerHtml, engineerHtml, internHtml));
   });
