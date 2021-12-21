const inquirer = require("inquirer");

// prompt manager
const promptManager = () => {
   return inquirer.prompt([
      {
         type: "input",
         name: "managerName",
         message: "Please enter the team manager's name",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "managerId",
         message: "Please enter the team manager's employee ID",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "managerEmail",
         message: "Please enter the team manager's email address",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "managerOfficeNumber",
         message: "Please enter the team manager's office phone number",
         validate: (promptInput) => validateInput(promptInput),
      },
   ]);
};

// prompt engineer
const promptEngineer = () => {
   return inquirer.prompt([
      {
         type: "input",
         name: "engineerName",
         message: "Please enter the engineer's name",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "engineerId",
         message: "Please enter the engineer's employee ID",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "engineerEmail",
         message: "Please enter the engineer's email address",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "engineerGithub",
         message: "Please enter the engineer's Github username",
         validate: (promptInput) => validateInput(promptInput),
      },
   ]);
};

// prompt intern
const promptIntern = () => {
   return inquirer.prompt([
      {
         type: "input",
         name: "internName",
         message: "Please enter the intern's name",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "internId",
         message: "Please enter the intern's employee ID",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "internEmail",
         message: "Please enter the intern's email address",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "internSchool",
         message: "Please enter the name of the intern's school",
         validate: (promptInput) => validateInput(promptInput),
      },
   ]);
};

// validate input from prompts
const validateInput = (string) => {
   if (string) {
      return true;
   } else {
      console.log("An answer is required!");
      return false;
   }
};

// execute
console.log("Welcome!");
promptManager()
   .then((managerOutput) => console.log(managerOutput))
   .then(() => promptEngineer())
   .then((engineerOutput) => console.log(engineerOutput))
   .then(() => promptIntern())
   .then((internOutput) => console.log(internOutput));
