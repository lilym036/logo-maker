const Shape = require('./shape');

// class Triangle is a child of the class Shape
class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    };
    render () {
        return `
        <svg  version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="200,70 250,200 160,200" fill= "${this.shapeColor}"/>
            <text x="205" y="180" font-size="25" text-anchor="middle" fill= "${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};



module.exports = Triangle;