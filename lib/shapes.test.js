// require functions from shapes.js file
const {renderLogo, renderShape, renderText} = require('./shapes.js');

// test for renderShape function
describe ('renderShape', () => {
    // test for renderShape to return code for circle
    it('should return svg code for a circle', () => {
        const shape = 'Circle';
        expect(renderShape(shape)).toEqual('<circle cx="120" cy="100" r="95"');
    });
    // test for renderShape to return code for square
    it('should return svg code for a square', () => {
        const shape = 'Square';
        expect(renderShape(shape)).toEqual('<rect x="20" y = "10" width="200" height="200"');
    });
    // test for renderShape to return code for triangle
    it('should return svg code for a triangle', () => {
        const shape = 'Triangle';
        expect(renderShape(shape)).toEqual('<polygon points="200,10 350,300 50,300"');
    });
})

// test for renderText function
describe('renderText', () => {
    // test for renderText to return code for text dimensions of a triangle
    it('should return svg code for text to fit in the proper dimensions of a triangle', () => {
        const shape = 'Triangle';
        expect(renderText(shape)).toEqual('<text x="200" y="160" font-size="60" text-anchor="middle"');
    });
    // test for renderText to return code for text dimensions of a circle
    it('should return svg code for text to fit in the proper dimensions of a circle', () => {
        const shape = 'Circle';
        expect(renderText(shape)).toEqual('<text x="120" y="120" font-size="60" text-anchor="middle"');
    });
    // test for renderText to return code for text dimensions of a square
    it('should return svg code for text to fit in the proper dimensions of a square', () => {
        const shape = 'Square';
        expect(renderText(shape)).toEqual('<text x="120" y="120" font-size="60" text-anchor="middle"');
    });
})

// test for renderLogo function
describe('renderLogo', () => {
    // test for renderLogo to return full code block using data from answers object with shape as triangle, text 'SVG', text color 'blue' and shape color 'white'
    it('should return a block of code rendering an svg logo with shape, text and colors matching input data', () => {
        const answers = {
            text: 'SVG',
            textColor: 'blue',
            shape: 'Triangle',
            shapeColor: 'white'
          };
        expect(renderLogo(answers)).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 350,300 50,300" fill="white"/><text x="200" y="160" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>');  
    });
    // test for renderLogo to return full code block using data from answers object with shape as circle, text 'SVG', text color 'blue' and shape color 'yellow'
    it('should return a block of code rendering an svg logo with shape, text and colors matching input data', () => {
        const answers = {
            text: 'SVG',
            textColor: 'blue',
            shape: 'Circle',
            shapeColor: 'yellow'
          };
          expect(renderLogo(answers)).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="100" r="95" fill="yellow"/><text x="120" y="120" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>');
    });
    // test for renderLogo to return full code block using data from answers object with shape as square, text 'HEY', text color 'yellow' and shape color 'pink'
    it('should return a block of code rendering an svg logo with shape, text and colors matching input data', () => {
        const answers = {
            text: 'HEY',
            textColor: 'yellow',
            shape: 'Square',
            shapeColor: 'pink'
          };
          expect(renderLogo(answers)).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y = "10" width="200" height="200" fill="pink"/><text x="120" y="120" font-size="60" text-anchor="middle" fill="yellow">HEY</text></svg>');
    });
})