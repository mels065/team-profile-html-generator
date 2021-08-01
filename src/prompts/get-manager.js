const inquirer = require('inquirer');

const validateEmail = require('../utils/validate-email');

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
                validate: validateEmail
            },
            {
                name: "officeNumber",
                message: "What is the office number of the manager?"
            }
        ]);
    
        const {
            name,
            id,
            email,
            officeNumber
        } = managerData;
        return new Manager(
            name,
            id,
            email,
            officeNumber
        )
    } catch(err) {
        throw err;
    }
}

module.exports = getManager;
