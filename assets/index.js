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
        choices: ["None","MIT License","Mozilla Public License 2.0", "GNU General Public License v3.0", "Apache license 2.0"],
        name:"license",
    },
    {
        message:"How can users contribute to your project?\n(Press Enter if not applicable)",
        default: "N/A",
        type: "input",
        name:"contributions",
    },
    {
        message:"Are there any commands to test your project?\n(Press Enter if not applicable)",
        type: "input",
        default: "N/A",
        name:"tests",
    },
    {
        message:"What is your Github username?",
        type: "input",
        name:"username",
    },
    {
        message:"What email address can users contact you at?",
        type: "input",
        name:"email",
    }
];


// this function writes the markdown file to the system in the same directory as the index.js file. this function is invoked after the user completes all the questions
function writeToFile(fileName, data) {
    let mdText = expf.generateMarkdown(data);
    fs.writeFile(`Sample${fileName}.md`, mdText, (err) => 
    err ? console.log(err) : console.log('Success!')
    )
}

// the init function will run inquirer and prompt through the questions array above and return an object that is used to dynamically generate the information on the markdown file.
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README',data);
        })
}

// Function call to initialize app
init();
