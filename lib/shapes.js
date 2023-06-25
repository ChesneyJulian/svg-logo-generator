// create array of objects containing code data for each shape and for the text's dimensions within each shape
const shapes = [
    {
        "circle": `<circle cx="120" cy="100" r="95"`,
        "text": `<text x="120" y="120" font-size="60" text-anchor="middle"` 
    },
    {
        "square": `<rect x="20" y = "10" width="200" height="200"`,
        "text": `<text x="120" y="120" font-size="60" text-anchor="middle"`
    },
    {
        "triangle": `<polygon points="200,10 350,300 50,300"`,
        "text": `<text x="200" y="160" font-size="60" text-anchor="middle"`
    }
]

// create function to renderShape 
function renderShape(shape) {
    // use if statements to check what the shape is and return shape information from shapes array for each corresponding shape
    if (shape === 'Circle') {
        return shapes[0].circle ;
    } else if (shape === 'Square') {
        return shapes[1].square 
    } else if (shape === 'Triangle') {
        return shapes[2].triangle;
    }
}

// create function to renderText dimensions
function renderText(shape) {
    // use if statements to check what the shape is and return text dimensions information from shapes array for each corresponding shape
    if (shape === 'Circle') {
        return shapes[0].text ;
    } else if (shape === 'Square') {
        return shapes[1].text 
    } else if (shape === 'Triangle') {
        return shapes[2].text;
    }
}

// create function to render total logo using template literals with data from the answers of the promptModule and the functions above
function renderLogo(answers) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${renderShape(answers.shape)} fill="${answers.shapeColor}"/>${renderText(answers.shape)} fill="${answers.textColor}">${answers.text}</text></svg>`
}


// export functions for index.js to use and for shapes.test.js to use
module.exports = {
    renderLogo,
    renderShape, 
    renderText
};
