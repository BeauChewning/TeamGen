function newInfo(team) {
    
    console.log("TEAM TO RENDERRRR",team)
    function writeManager(manager) {
        return `
        <div class="card mt-4 m-3 col-4" style="width: 18rem;">
        <img src="../Assets/Screenshot (57).png" class="card-img-top" alt="ANGRY BOI">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <p class="card-text">${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${manager.getId()}</li>
          <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number:${manager.getOfficeNumber()}</li>
        </ul>
      </div>`
    }
    function engineerInfo(engineer) {

      return  `
      <div class="card mt-4 m-3 col-4" style="width: 18rem;">
        <img src="../Assets/dribbble_angry_4x.gif" class="card-img-top" alt="ANGRY BOI">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <p class="card-text">${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
      </div>`
    }


    function internInfo(intern) {

      return  `
      <div class="card mt-4 m-3 col-4" style="width: 18rem;">
      <img src="../Assets/Extra_Mascot_FULL_500x500_yay.png" class="card-img-top" alt="ANGRY BOI">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <p class="card-text">${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${intern.getId()}</li>
          <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">Intern school:${intern.getSchool()}</li>
        </ul>
      </div>`
    }

    const cards = [];

    cards.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => writeManager(manager)))
  
    
    cards.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerInfo(engineer)).join(""))
   

    cards.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => internInfo(intern)).join(""))

    return cards.join("");
  
}

//need to push a team memeber to the cards array
//filtere through team array, map object and create card

module.exports = team =>{
    return  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <title>TeamGen</title>
</head>
<body class='bg-dark'>
<div class="container">
<div class='row justify-content-center g-0'>
    ${newInfo(team)}
     </div> 
     </div>
      
</body>
</html>
`;
};