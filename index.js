// require fs from node library
const fs = require('fs');
// require inquirer from node library
const inquirer = require('inquirer');
// create prompt variable which runs inquirer.createPromptModule()
const prompt = inquirer.createPromptModule();
// require renderLogo from ./lib/shapes.js in file system
const {renderLogo} = require('./lib/shapes.js')
// create array of objects for questions to pass through prompt()
const questions = [
    {
        message: "What is the text for your logo? (Can contain no more than three characters)",
        name: "text",
        default: "SVG",
    },
    {
        message: "What would you like the text color to be? (Color may be keyword or hexadecimal number)",
        name: "textColor",
        default: "white",
    },
    {
        message: "Choose a shape for your logo:",
        name: "shape",
        default: "circle",
        type: "list",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        message: "What would you like the shape's color to be? (Color may be keyword or hexadecimal number)",
        name: "shapeColor",
        default: "blue",
    },
]

// create initialization function to run prompt and handle the answers
function init () {
    prompt(questions)
        .then((answers) => {
            // add conditional to throw error if answers.text exceeds three characters
            if (answers.text.length > 3) {
                throw Error('Text may not exceed three characters.');
            } else {
                // conditional to check if output exists, if it doesn't exist, use fs to create output directory
                if (!fs.existsSync('output')) {
                    fs.mkdirSync('output');
                };
                // if all requirements are met, run fs writeFileSync to create logo.svg file within output directory
                // content is derived from renderLogo(answers)
                fs.writeFileSync('./output/logo.svg', renderLogo(answers));
            }
            // send success message to console at end
            console.log('Generated logo.svg');
        });
    }

// call init function to begin program 
init();