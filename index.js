const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Begins the prompt to add members to the team starting with Manager
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
  ])
  .then((data) => {
    genManagerHTML(new Manager(data.id, data.managerName, data.email, data.officeNumber));
    addMembers();
});

function addMembers() {
    inquirer
    .prompt(
    {
        type: 'list',
        message: 'Which type of team member would you like to add? (Use arrow keys)',
        name: 'memberType',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
    })
    .then((data) => {
        console.log(data);
        switch(data.memberType) {
            case 'Engineer': addEngineer(data); break;
            case 'Intern': addIntern(data); break;
            default: genPageHTML(); break;
        }
    });
}

function addEngineer(data) {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineer\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineer\'s email?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your engineer\'s GitHub username?',
        },
    ])
    .then((data) => {
        genEngineerHTML(new Engineer(data.id, data.engineerName, data.email, data.githubUsername));
        addMembers();
    });
}

function addIntern(data) {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your intern\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your intern\'s email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your intern\'s school?',
        },
    ])
    .then((data) => {
        genInternHTML(new Intern(data.id, data.internName, data.email, data.school));
        addMembers();
    });
}

var bodyHTML = '';
function genManagerHTML(manager) {
    bodyHTML +=
        `
        <div>${manager.getName()}</div>
        `;
}

function genEngineerHTML(engineer) {
    bodyHTML +=
        `
        <div>${engineer.getName()}</div>
        `;
}

function genInternHTML(intern) {
    bodyHTML +=
        `
        <div>${intern.getName()}</div>
        `;
}

function genPageHTML() {
    let pageHTML = 
`
<!DOCTYPE html>
<html>
    <head>
        <title>Team organization</title>
    </head>
    <body>
        ${bodyHTML}
    </body>
</html>
`;
    writeHTML(pageHTML);
}

function writeHTML(data) {
    fs.appendFile(`${__dirname}/dist/rendered.html`, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}