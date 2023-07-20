const Shape = require('./shape');

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
// <svg height="100" width="100">
//  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
// </svg>
// r= radius, cx= x position of center of circle, cy= y position of the center of circle

module.exports = Circle;