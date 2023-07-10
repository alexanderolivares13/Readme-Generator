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
        message:"Please provide any installation instructions.\n(Press Enter if not applicable)",
        default: "N/A",
        type: "input",
        name:"installation",
    },
    {
        message:"Please provide any usage details.\n(Press Enter if not applicable)",
        default: "N/A",
        type: "input",
        name:"usage",
    },
    {
        message:"Please extend any credits to other developers here.\n(Press Enter if not applicable)",
        default: "N/A",
        type: "input",
        name:"credits",
    },
    {
        message:"Please choose a license.",
        type: "list",
        choices: ["None","MIT","Mozilla Public License 2.0", "GNU General Public License v3.0", "Apache license 2.0"],
        name:"license",
    },
    {
        message:"How can users contribute to your project?",
        default: "N/A",
        type: "input",
        name:"contributions",
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
    // {
    //     message:"",
    //     type: "input",
    //     name:"",
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let mdText = expf.generateMarkdown(data);
    fs.writeFile(`${fileName}.md`, mdText, (err) => 
    err ? console.log(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README',data);
        })
}

// Function call to initialize app
init();
