const inquirer = require("inquirer");

// prompt user
const promptUser = () => {
   console.log("Welcome!");
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
         type: "string",
         name: "managerEmail",
         message: "Please enter the team manager's email address",
         validate: (promptInput) => validateInput(promptInput),
      },
      {
         type: "string",
         name: "managerOfficeNumber",
         message: "Please enter the team manager's office phone number",
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
promptUser().then((promptOutput) => {
   console.log(promptOutput);
});
