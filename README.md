# svg-logo-generator
## Description
 This program generates a logo using user information received via command-line prompts. This project is a Node.js command-line application that utilizes Inquirer.js and Node File System. The prompts gather information regarding the logo's shape, text, shape color, and text color. It then generates an SVG file for the logo in an output directory.  
## Usage
- To run the program, download the lib, index.js, package.json, and package-lock.json files before entering "node index.js" into the terminal from the root directory of the program
- Answer each prompt in the command-line by entering text or choosing an option from a list
- The text of the logo may not exceed three characters or an error will occur
- The color for text and shape may be entered with a keyword or a hexadecimal number
- Once all prompts have been answered, check for an output directory which will contain the logo.svg file 
## Screen Recording
[Watch this](https://drive.google.com/file/d/1w2oRViPHSyFuayhWfc9XWNa0rAseWV-G/view) to see a video of the program in action.
## Sources
- [Node File System](https://nodejs.org/api/fs.html#file-system) to create output directory and logo.svg file
- [Inquirer.js](https://www.npmjs.com/package/inquirer) to run command-line interface prompts.

## Tests
This program utilizes [Jest](https://jestjs.io/) for testing the functionality of the program. The test file is found in the lib directory with the name "shapes.test.js". All tests are currently passing. 