const inquirer = require('inquirer');
const fs = require('fs');
const Triangle= require('./lib/triangle');
const Square= require('./lib/square');
const Circle= require('./lib/circle');


// function questions() {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Please choose up to three characters.',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter a text color, a hexadecimal number is also accepted.',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Please choose a shape from the options listed?',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'Enter the shape color, a hexadecimal number is also accepted.',
            name: 'shapeColor',
        },
    
    ])
    // }

    // function writeFile(data) {
    //     fs.writeFile('logo.svg', data,  (err) => 
    //     err ? console.log(err) : console.log('Generated logo.svg')
    //       );
    // }

// questions() 
.then((response) => {
    console.log(response);
    if (response.shape === "Circle") {
        let shape= new Circle(response.shapeColor, response.textColor, response.text)
        fs.writeFileSync("./shape.svg", shape.render())
    }
    if (response.shape === "Square") {
        let shape= new Square(response.shapeColor, response.textColor, response.text)
        fs.writeFileSync("./shape.svg", shape.render())
    }
    if (response.shape === "Triangle") {
        let shape= new Triangle(response.shapeColor, response.textColor, response.text)
        fs.writeFileSync("./shape.svg", shape.render())
    }
})
// .then ((response) => {
//     return writeFile(response);
// })
.catch (err => {
     console.log(err)
})