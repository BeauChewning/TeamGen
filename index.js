const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const fs = require('fs')
const inquirer = require("inquirer");
let engineer;
let manager;
let intern;
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
            manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber)
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
                        ]).then(answer=>{
                            intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.iternSchool)
                            team.push(intern)
                            console.log(team)
                            mainMenu();
                            return;

                        })
                    
                    break;
                    case "I dont want to add anymore members":
                        newInfo();
                        return;

                    default:
                        console.log("firing off render team")
                        // fire off your render team functinon

            }
            


        })
        
    }
    createManager();
    
}
function newInfo(){
fs.writeFile('index.html',`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>TeamGen</title>
</head>
<body>
    <div class="card" style="width: 18rem;">
        <img src="/TeamGen/lib/dribbble_angry_4x.gif" class="card-img-top" alt="ANGRY BOI">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${manager.id}</li>
          <li class="list-group-item">Email:${manager.email}</li>
          <li class="list-group-item">Office number:${manager.officeNumber}</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="/TeamGen/lib/dribbble_angry_4x.gif" class="card-img-top" alt="ANGRY BOI">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${engineer.id}</li>
          <li class="list-group-item">Email:${engineer.email}</li>
          <li class="list-group-item">Github:${engineer.github}</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="/TeamGen/lib/dribbble_angry_4x.gif" class="card-img-top" alt="ANGRY BOI">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${intern.id}</li>
          <li class="list-group-item">Email:${intern.email}</li>
          <li class="list-group-item">Intern school:${intern.school}</li>
        </ul>
      </div>
</body>
</html>
`, (err) =>{
    if (err) {
        throw err;
    };
})
}


init();