const shape = require('./shape');

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    };
    render () {
        return `
        <svg height="210" width="500">
            <polygon points="200,70 250,200 160,200" style="fill: ${this.shapeColor}"/>
            <text x="205" y="180" font-size="20" text-anchor="middle" fill= ${this.textColor}>${this.text}</text>
        </svg>
        `
    };
};


// Each point must contain two numbers: an x coordinate and a y coordinate. 
// <polygon points="200,70 250,200 160,200" style="fill:lime;stroke:purple;stroke-width:1" />
// <svg height="210" width="500">
// "fill:lime;stroke:purple;stroke-width:1"


module.exports = Triangle;