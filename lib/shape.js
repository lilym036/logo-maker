// parent class Shape
class Shape {
    constructor (shapeColor, textColor, text) {
        this.shapeColor= shapeColor;
        this.textColor= textColor;
        this.text= text;
    }
    render() {};
}

module.exports = Shape;