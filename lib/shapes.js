
 
const shapes=  {
    Circle: `<circle cx="150" cy="100" r="80" `,
    Square: `<rect x="50" y = "50" width="300" height="300"`,
    Triangle: `<polygon points="200,25 300,190 100,190"`
}

//  function renderCircle (answers) {
//     return `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`
// };

// function renderSquare (answers) {
//     return `<rect x="50" y = "50" width="300" height="300" fill="${answers.shapeColor}"/>`
// };

// function renderTriangle(answers){
//     return `<polygon points="200,25 300,190 100,190" fill="${answers.shapeColor}"/>`
// }
 
function renderLogo(answers) {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

    ${shapes[answers.shape]} fill="${answers.shapeColor}"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  
  </svg>`
}

module.exports [
    renderLogo()
];

