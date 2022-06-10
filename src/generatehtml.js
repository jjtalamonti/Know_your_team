const generateManager = manager => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">
        <h2>${manager.name}</h2>
        <h3>Manager</h3><i class="bi bi-cup"></i>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNum}</li>
        </ul>
    </div>
    </div>
    `
}

const generateEngineer = engineer => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3><i class="bi bi-cup"></i>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github Username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
    </div>
    `
}

const generateIntern = intern => {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">
        <h2>${intern.name}</h2>
        <h3>Intern</h3><i class="bi bi-cup"></i>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    </div>
    `
}



generateTeam = (input) => {
    console.log(input)
    cardArray = [];

    for (let i = 0; i < input.length; i++) {
        const card = input[i];
        const employeeRole = card.getRole();

        if (employeeRole === 'Manager') {
            const managerInput = generateManager(card)
            cardArray.push(managerInput)
        }
        if (employeeRole === 'Intern') {
            const internInput = generateIntern(card)
            cardArray.push(internInput)
        }
        if (employeeRole === 'Engineer') {
            const engineerInput = generateEngineer(card)
            cardArray.push(engineerInput)
        }
    }
    const employeeCards = cardArray.join('');
    const generateEmployees = generateHtml(employeeCards);
    return generateEmployees;
}


const generateHtml = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css" />
        <title>Know Your Team</title>
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">MY Team</h1>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${generateTeam(employeeCards)}
                </div>
            </div>   
        </main>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css" />
    </body>
    </html>
    `
}

module.exports = generateHtml;