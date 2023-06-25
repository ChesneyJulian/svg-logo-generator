const {renderLogo, renderShape, renderText} = require('./shapes.js');

describe ('renderShape', () => {
    it('should return svg code for a circle', () => {
        const shape = 'Circle';
        expect(renderShape(shape)).toEqual('<circle cx="120" cy="100" r="95"');
    });
    it('should return svg code for a square', () => {
        const shape = 'Square';
        expect(renderShape(shape)).toEqual('<rect x="20" y = "10" width="200" height="200"');
    });
    it('should return svg code for a triangle', () => {
        const shape = 'Triangle';
        expect(renderShape(shape)).toEqual('<polygon points="200,10 350,300 50,300"');
    });
})

describe('renderText', () => {
    it('should return svg code for text to fit in the proper dimensions of a triangle', () => {
        const shape = 'Triangle';
        expect(renderText(shape)).toEqual('<text x="200" y="160" font-size="60" text-anchor="middle"');
    });
    it('should return svg code for text to fit in the proper dimensions of a circle', () => {
        const shape = 'Circle';
        expect(renderText(shape)).toEqual('<text x="120" y="120" font-size="60" text-anchor="middle"');
    });
    it('should return svg code for text to fit in the proper dimensions of a square', () => {
        const shape = 'Square';
        expect(renderText(shape)).toEqual('<text x="120" y="120" font-size="60" text-anchor="middle"');
    });
})

describe('renderLogo', () => {
    it('should return a block of code rendering an svg logo with shape, text and colors matching input data', () => {
        const answers = {
            text: 'SVG',
            textColor: 'blue',
            shape: 'Triangle',
            shapeColor: 'white'
          };
        expect(renderLogo(answers)).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 350,300 50,300" fill="white"/><text x="200" y="160" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>');  
    });
    it('should return a block of code rendering an svg logo with shape, text and colors matching input data', () => {
        const answers = {
            text: 'SVG',
            textColor: 'blue',
            shape: 'Circle',
            shapeColor: 'yellow'
          };
          expect(renderLogo(answers)).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="100" r="95" fill="yellow"/><text x="120" y="120" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>');
    });
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