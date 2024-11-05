// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the project's title?",
        validate: Input => {
            if (Input === '') {
                console.log("Please enter project's title!");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please type the project's description.",
        validate: Input => {
            if (Input === '') {
                console.log("Please enter project's description!");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide installation instructions for the project.",
        validate: Input => {
            if (Input === '') {
                console.log("Please enter project's installation instructions!");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please explain usage information for your project.",
        validate: Input => {
            if (Input === '') {
                console.log("Please enter project's usage information!");
                return false;
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please provide contribution guidelines for the project.",
        validate: Input => {
            if (Input === '') {
                console.log("Please enter project's contribution information!");
                return false;
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'tests',
        message: "Please explain test information for your project.",
        validate: Input => {
            if (Input === '') {
                console.log("Please enter project's test information!");
                return false;
            }
            return true;
        }

    },
    {
        type: 'list',
        name: 'license',
        message: "Please pick the project's license.",
        choices: ['MIT', 'GNU GPLv3.0', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: "Please type your GitHub username.",
        validate: Input => {
            if (Input === '') {
                console.log("Please enter GitHub username!");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please type your email address.",
        validate: Input => {
            if (Input === '') {
                console.log("Please enter email address!");
                return false;
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('The README file has been created successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    // Prompt the user with questions
    inquirer.prompt(questions)
        // Promise to write the README file
        .then(data => {
            writeToFile('./dist/README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();
