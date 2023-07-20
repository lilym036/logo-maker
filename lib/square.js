const Shape = require('./shape');

class Square extends Shape {
constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text)
};
render () {
 return `
 <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="150" height="150" fill= "${this.shapeColor}" />
         <text x="120" y="100" font-size="25" text-anchor="middle" fill= "${this.textColor}">${this.text}</text>
</svg>
 `
}

}

// can I do x and y with same values?  <rect x="50" y="20" width="150" height="150">
// <svg width="400" height="180">
//   <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
//   style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
// </svg>

module.exports = Square;