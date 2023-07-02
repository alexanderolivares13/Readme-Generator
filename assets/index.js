const expf = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
const questions = [
    {
        message:"Hello, welcome to my Markdown Generator. Answer just a few questions to put the creation of the README file for your next project on the fast track!\n(Press Enter to begin)",
        name: "welcome"
    },
    {
        message:"What is the title of your project?",
        type: "input",
        name:"title",
    },
    {
        message:"Please give a brief description of your project",
        type: "input",
        name:"description",
    },
    {
        message:"Please provide any installation instructions",
        type: "input",
        name:"installation",
    },
    {
        message:"Please provide any usage details",
        type: "input",
        name:"usage",
    },
    {
        message:"Please extend any credits to other developers here",
        type: "input",
        name:"credits",
    },
    {
        message:"Please choose a license",
        type: "list",
        choices: ["None","MIT","Mozilla Public License 2.0","Open Software License 3.0", "GNU General Public License v3.0", "Apache license 2.0"],
        name:"license",
    },
    // {
    //     message:"",
    //     type: "input",
    //     name:"",
    // },
    // {
    //     message:"",
    //     type: "input",
    //     name:"",
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, expf.generateMarkdown(data), (err) => err ? console.log(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
    })
}

// Function call to initialize app
init();
