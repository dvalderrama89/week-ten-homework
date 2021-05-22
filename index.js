const inquirer = require("inquirer");

inquirer
  .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the team manager\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number?',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add? (Use arrow keys)',
        name: 'memberType',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
    },
  ])
  .then((data) => {
    console.log(data);
  });