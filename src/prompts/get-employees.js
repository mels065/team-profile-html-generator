const inquirer = require('inquirer');

const getEngineer = require('./get-engineer');
const getIntern = require('./get-intern');

async function getEmployees() {
    const employees = {
        engineers: [],
        interns: [],
    };
    while (await willAddEmployee()) {
        const { employeeType } = await inquirer.prompt([
            {
                name: "employeeType",
                type: "list",
                choices: ["Engineer", "Intern"],
                message: "What kind of employee are they?"
            }
        ]);

        switch(employeeType) {
            case "Engineer": {
                employees.engineers.push(await getEngineer());
                break;
            }
            case "Intern": {
                employees.interns.push(await getIntern());
                break;
            }
            default: {
                console.log("Invalid input");
            }
        }
    }

    return employees;
}

async function willAddEmployee() {
    const { willAddEmployee } = await inquirer.prompt([
        {
            name: "willAddEmployee",
            type: "confirm",
            message: "Add another employee?"
        }
    ]);
    return willAddEmployee;
}

module.exports = getEmployees;
