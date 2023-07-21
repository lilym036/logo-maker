const Shape = require('./shape');

// class Square is a child of the class Shape

class Square extends Shape {
constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text)
};
render () {
 return `
 <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="150" height="150" fill= "${this.shapeColor}" />
         <text x="120" y="100" font-size="40" text-anchor="middle" fill= "${this.textColor}">${this.text}</text>
</svg>
 `
}

}


module.exports = Square;