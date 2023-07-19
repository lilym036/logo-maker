const shape = require('./shape');

class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    };

render() {
    return `
    <svg height="200" width="200">
    <circle cx="120" cy="100" r="40" fill= ${this.shapeColor} />
    <text x="120" y="100" font-size="15" text-anchor="middle" fill= ${this.textColor}>${this.text}</text>
  </svg>
    `
};
}
// <svg height="100" width="100">
//  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
// </svg>
// r= radius, cx= x position of center of circle, cy= y position of the center of circle

module.exports = Circle;