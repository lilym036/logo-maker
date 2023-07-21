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
            message: 'Please choose a shape from the options listed.',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'Enter the shape color, a hexadecimal number is also accepted.',
            name: 'shapeColor',
        },
    
    ])

// This indicates what to do according to what shape is chosen 
// questions() 
.then((response) => {
    console.log(response);
    if (response.shape === "Circle") {
        let shape= new Circle(response.shapeColor, response.textColor, response.text)
        fs.writeFile("./logo.svg", shape.render(), (err) => 
        err ? console.log(err) : console.log("Generated logo.svg")
        );
    }
    if (response.shape === "Square") {
        let shape= new Square(response.shapeColor, response.textColor, response.text)
        fs.writeFile("./logo.svg", shape.render(), (err) => 
        err ? console.log(err) : console.log("Generated logo.svg")
        );
    }
    if (response.shape === "Triangle") {
        let shape= new Triangle(response.shapeColor, response.textColor, response.text)
        fs.writeFile("./logo.svg", shape.render(), (err) => 
        err ? console.log(err) : console.log("Generated logo.svg")
        );
    }
})
.catch (err => {
     console.log(err)
})