const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const managerHTML = require("./templates/managerHTML");
const internHTML = require("./templates/internHTML");
const engineerHTML = require("./templates/engineerHTML");

async function init(){
    // prompt user of intial questions
    let data = await inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "Manager - enter the name, id, email, and office number, in order."
        },
        {
            type: "list",
            name: "employee",
            message: "What type of employee would you like to add?",
            choices: ['Engineer', 'Intern']
        }
    ]);
    console.log(data);

    var newManager = (data.manager).split(' ');
    console.log(newManager);
    var mCard = managerHTML(newManager[0], newManager[1], newManager[2], newManager[3]);
    console.log(mCard);


    // if (data.employee === 'Engineer') {
    //     console.log(`You chose: ${data.employee}`);
    //     data += await inquirer.prompt([
    //         {
    //             type: "input",
    //             name: "engineer",
    //             message: "Engineer - enter the name, id, email, and GitHub username, in order."
    //         }
    //     ]);
    // }
    // else if (data.employee === 'Intern') {
    //     console.log(`You chose: ${data.employee}`);
    //     data += await inquirer.prompt([
    //         {
    //             type: "input",
    //             name: "intern",
    //             message: "Intern - enter the name, id, email, and school, in order."
    //         }
    //     ]);
    // }
    // else {
    //     console.log(`Error: ${data.employee}`);
    // }
}
init();