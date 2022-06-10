const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generatehtml');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
//push all employee objects into this array
const employees = [];

const team = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "What is the Employee's role?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role",
        },
        {
            type: "input",
            message: "What is the Employee's name?",
            name: "name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Employee's name must be entered to proceed!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the employee's employee ID?",
            name: "id",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Employee ID must be entered to proceed!")
                    return false;
                }
            }

        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Employee's email must be entered to proceed!")
                    return false;
                }
            }

        }])
        .then(function ({ role, name, id, email }) {
            let roleInfo = "";
            let roleKey = "";
            if (role === "Manager") {
                roleInfo = "Office number"
                roleKey = "officeNum"
            } else if (role === "Engineer") {
                roleInfo = "Github username"
                roleKey = "github"
            } else {
                roleInfo = "school name"
                roleKey = "school"
            }
            inquirer.prompt([{
                type: "input",
                message: `What is Employee's ${roleInfo}?`,
                name: `${roleKey}`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(`Employee's ${roleInfo} must be entered to proceed!`)
                        return false;
                    }
                }
            },
            {
                type: "list",
                message: "Would you like to add another Employee to the team?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "addMember"
            }])
                .then(function ({ roleKey, addMember }) {
                    let newMember;
                    if (role === "Manager") {
                        newMember = new Manager(name, id, email, `${roleKey}`);
                    } else if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, `${roleKey}`);
                    } else {
                        newMember = new Intern(name, id, email, `${roleKey}`)
                    }
                    // console.log(newMember)
                    employees.push(newMember)
                    // console.log(employees)

                    if (addMember === "yes") {
                        team(employees);
                    } else {
                        generateHtml(employees);
                        return employees;
                    }

                });
        });
}

const generateFile = response => {
    fs.writeFile('./dist/index.html', response, err => {
        if (err) {
            confirm.log(err);
            return;
        } else {
            console.log("Your team index.html has been created in the dist folder!")
        }

    })
}
team()
    // .then(employees => {
    //     return generateHtml(employees);
    // })
    .then(htmlFin => {
        // return generateFile(htmlFin);
    })
    .catch(err => {
        console.log(err);
    });

