const inquirer = require('inquirer');

const Manager = require('../../lib/Manager');

async function getManager() {
    try {
        const managerData = await inquirer.prompt([
            {
                name: "name",
                message: "What is the name of the manager?"
            },
            {
                name: "id",
                message: "What is the manager's employee id?"
            },
            {
                name: "email",
                message: "What is the manager's email?",
                validate: input => /\w+@\w+\.(com|edu|gov|org|net|io)/.test(input)
            },
            {
                name: "officeNumber",
                message: "What is the office number of the manager?"
            }
        ]);
    
        return new Manager(
            managerData.name,
            managerData.id,
            managerData.email,
            managerData.officeNumber
        )
    } catch(err) {
        throw err;
    }
}

module.exports = getManager;
