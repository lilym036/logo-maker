const shape = require('./shape');

class Square extends Shape {
constructor() {
    super(shapeColor, textColor, text)
};
render () {
 return `
 <svg width="400" height="180">
        <rect x="50" y="20" width="150" height="150"
         style="fill: ${this.shapeColor}" />
         <text x="120" y="100" font-size="15" text-anchor="middle" fill= ${this.textColor}>${this.text}</text>
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