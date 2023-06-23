

function renderShape(shape) {
    if (shape === 'Circle') {
        return `<circle cx="150" cy="100" r="80" `;
    } else if (shape === 'Square') {
        return `<rect x="50" y = "50" width="300" height="300"`
    } else if (shape === 'Triangle') {
        return  `<polygon points="200,25 300,190 100,190"`;
    }
}

function renderLogo(answers) {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

     ${renderShape(answers.shape)} fill="${answers.shapeColor}"/>

    <text x="175" y="180" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  
  </svg>`
}



module.exports = {
    renderLogo,
};
