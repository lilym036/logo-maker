const inquirer = require('inquirer');
const fs = require('fs');


function questions() {
    return inquirer.prompt ([
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
            type: 'checkbox',
            message: 'Please choose a shape from the options listed?',
            name: 'shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            message: 'Enter the shape color, a hexadecimal number is also accepted.',
            name: 'shapeColor',
        },
    
    ]);
    }

    // function writeFile(data) {
    //     fs.writeFile('./sample/README.md', data,  (err) => 
    //     err ? console.log(err) : console.log('Success!')
    //       );
    // }

questions() 
.then((data) => {
    console.log(data);
    // return generateResponses(response);
})
.then ((response) => {
    return writeFile(response);
})
.catch (err => {
     console.log(err)
})