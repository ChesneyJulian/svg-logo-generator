const fs = require('fs');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const {renderLogo} = require('./lib/shapes.js')
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

function init () {
    prompt(questions)
        .then((answers) => {
            if (answers.text.length > 3) {
                throw Error('Text may not exceed three characters.');
            } else {
                if (!fs.existsSync('output')) {
                    fs.mkdirSync('output');
                };
                fs.writeFileSync('./output/logo.svg', renderLogo(answers));
            }
            console.log(answers);
        });
};

init();