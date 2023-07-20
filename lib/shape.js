class Shape {
    constructor (shapeColor, textColor, text) {
        this.shapeColor= shapeColor;
        this.textColor= textColor;
        this.text= text;
    }
    // method
    // setColor()
    // method
    render() {
        throw new Error('Child class must implement a render() method.')
    };
}

module.exports = Shape;