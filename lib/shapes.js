const shapes = [
    {
        "circle": `<circle cx="120" cy="100" r="95"`,
        "text": `<text x="120" y="120" font-size="60" text-anchor="middle" ` 
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

function renderShape(shape) {
    if (shape === 'Circle') {
        return shapes[0].circle ;
    } else if (shape === 'Square') {
        return shapes[1].square 
    } else if (shape === 'Triangle') {
        return shapes[2].triangle;
    }
}

function renderText(shape) {
    if (shape === 'Circle') {
        return shapes[0].text ;
    } else if (shape === 'Square') {
        return shapes[1].text 
    } else if (shape === 'Triangle') {
        return shapes[2].text;
    }
}

function renderLogo(answers) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

     ${renderShape(answers.shape)} fill="${answers.shapeColor}"/>

    ${renderText(answers.shape)} fill="${answers.textColor}">${answers.text}</text>
  
  </svg>`
}



module.exports = {
    renderLogo,
};
