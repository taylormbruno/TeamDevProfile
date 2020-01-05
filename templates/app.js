const inquirer = require("inquirer");
const util = require("util");

// used to generate HTML page
const genCard = require("./templates/genCard");
const generateHTML = require("./templates/generateHTML");

// icons used for each role
const mgrIcon = "<i class='fas fa-mug-hot'></i>";
const intIcon = "<i class='fas fa-user-graduate'></i>";
const engIcon = "<i class='fas fa-glasses'></i>";


async function init(){
    // prompt user for manager
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "Manager - enter the name, id, email, and office number, in order."
        }
    ]);
    console.log("Input = " + JSON.stringify(data));
    // split input
    let newMan = (data.manager).split(' ');
    //create html card
    let mCard = genCard("Manager", mgrIcon, newMan[0], newMan[1], newMan[2], "Office Number", newMan[3]);
    let endQ = await inquirer.prompt([
        {
            type: "list",
            name: "newUser",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ]);
    const end = endQ.newUser;

    // append manager card to html
    generateHTML("Manager", newMan[3], mCard, end);

    if (end === "Yes") {
        generateUser(newMan[3]);
    }
}
init();

async function generateUser(officeNum) {
    const user = await inquirer.prompt([
        {
            type: "list",
            name: "userType",
            message: "What type of employee would you like to add?",
            choices: ["Engineer", "Intern"]
        }
    ]);
    switch(user.userType) {
        case "Engineer":
            genEng(officeNum);
            break;
        case "Intern":
            genInt(officeNum);
            break;
    }
}

async function genEng(officeNum) {
    const eng = await inquirer.prompt([
        {
            type: "input",
            name: "engineer",
            message: "Engineer - enter the name, id, email, and GitHub username, in order."
        }
    ]);

    let newEng = (eng.engineer).split(' ');
    //create html card
    let eCard = genCard("Engineer", engIcon, newEng[0], newEng[1], newEng[2], "GitHub", newEng[3]);
    let endQ = await inquirer.prompt([
        {
            type: "list",
            name: "newUser",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ]);
    const end = endQ.newUser;

    // append engineer card to html
    generateHTML("Engineer", officeNum, eCard, end);

    if (end === "Yes") {
        generateUser(officeNum);
    }
}

async function genInt() {
    const int = await inquirer.prompt([
        {
            type: "input",
            name: "intern",
            message: "Intern - enter the name, id, email, and school, in order."
        }
    ]);

    let newInt = (int.intern).split(' ');
    //create html card
    let iCard = genCard("Intern", intIcon, newInt[0], newInt[1], newInt[2], "GitHub", newInt[3]);
    let endQ = await inquirer.prompt([
        {
            type: "list",
            name: "newUser",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ]);
    const end = endQ.newUser;

    // append engineer card to html
    generateHTML("Intern", officeNum, iCard, end);

    if (end === "Yes") {
        generateUser(officeNum);
    }
}