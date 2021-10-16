const Manager = require("./lib/manager");
const inquirer = require("inquirer");

const team = [];

function init(){

    function createManager(){

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
            const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)
            team.push(manager);

            console.log(team);
            mainMenu();
        })
    }

    function mainMenu(){
        inquirer.prompt([
            {
                type: "list",
                name:'teamMemberChoice',
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I dont want to add anymore members"]
            }
        ]).then(answer=>{
            switch(answer.teamMemberChoice){
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
                        ]).then(answer=>{
                            const engineer = new engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
                            team.push(engineer)
                           console.log(team)
                           mainMenu();
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
                                name: "internGithub",
                                message: "What is the intern's github??"
                            },
                        ]).then(answer=>{
                            const intern = new intern(answer.internName, answer. internId, answer.internEmail, answer.iternGithub)
                            team.push(intern)
                            console.log(team)
                            mainMenu();
                        })
                    
                    break;
                    default:
                        console.log("firing off render team")
                        // fire off your render team functinon

            }


        })
    }


    createManager();
}

init();