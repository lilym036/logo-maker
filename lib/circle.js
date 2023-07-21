const Shape = require('./shape');

// class Circle is a child of the class Shape
class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    };

render() {
    return `
    <svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill= "${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill= "${this.textColor}">${this.text}</text>
    </svg>
    `
};
}

module.exports = Circle;