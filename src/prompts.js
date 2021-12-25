const inquirer = require("inquirer");

// prompt manager
const manager = () => {
   return inquirer.prompt([
      {
         type: "input",
         name: "name",
         message: "Please enter the team manager's name",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "id",
         message: "Please enter the team manager's employee ID",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "email",
         message: "Please enter the team manager's email address",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "input",
         name: "officeNumber",
         message: "Please enter the team manager's office phone number",
         validate: (promptInput) => validateInput(promptInput),
      },
   ]);
};

// prompt engineer
const engineer = () => {
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
const intern = () => {
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

module.exports = { manager, engineer, intern };
