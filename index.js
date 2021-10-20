const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const fs = require('fs')
const path = require("path");
const inquirer = require("inquirer");
let engineer;
let manager;
let intern;
const team = [];

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require('./src/template.js')

function init() {

    function createManager() {

        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?"
            },
        ]).then(answer => {
            manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)
            team.push(manager);

            console.log(team);
            mainMenu();
        })
    }



    function mainMenu() {
        inquirer.prompt([
            {
                type: "list",
                name: 'teamMemberChoice',
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I dont want to add anymore members"]
            }
        ]).then(answer => {
            switch (answer.teamMemberChoice) {
                case "Engineer":
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "engineerName",
                            message: "What is the engineer's name?"
                        },
                        {
                            type: "input",
                            name: "engineerId",
                            message: "What is the engineer's ID?"
                        },
                        {
                            type: "input",
                            name: "engineerEmail",
                            message: "What is the engineer's email?"
                        },
                        {
                            type: "input",
                            name: "engineerGithub",
                            message: "What is the engineer's github??"
                        },
                    ]).then(answer => {
                        engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
                        team.push(engineer)
                        console.log(team)
                        mainMenu();
                        return;
                    })



                    break;
                case "Intern":

                    inquirer.prompt([
                        {
                            type: "input",
                            name: "internName",
                            message: "What is the inter's name?"
                        },
                        {
                            type: "input",
                            name: "internId",
                            message: "What is the intern's ID?"
                        },
                        {
                            type: "input",
                            name: "internEmail",
                            message: "What is the intern's email?"
                        },
                        {
                            type: "input",
                            name: "internSchool",
                            message: "What school does the intern attend"
                        },
                    ]).then(answer => {
                        intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool)
                        team.push(intern)
                        console.log(team)
                        mainMenu();
                        return;

                    })

                    break;
                case "I dont want to add anymore members":
                    buildTeam();
                    return;
                // fire off your render team functinon

            }

            function buildTeam(){
                if(!fs.existsSync(OUTPUT_DIR)){
                fs.mkdirSync(OUTPUT_DIR)
                }
                fs.writeFileSync(outputPath, render(team), 'utf-8')
            }



        })

    }
    createManager();

}


init();