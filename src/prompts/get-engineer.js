const inquirer = require('inquirer');

const validateEmail = require('../utils/validate-email');

const Engineer = require('../../lib/Engineer');

async function getEngineer() {
    const engineerData = await inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the engineer?"
        },
        {
            name: "id",
            message: "What is the employee id of the engineer?"
        },
        {
            name: "email",
            message: "What is the email address of the engineer?",
            validation: validateEmail
        },
        {
            name: "github",
            message: "What is the github username of the engineer?"
        }
    ]);

    const {
        name,
        id,
        email,
        github
    } = engineerData;
    return new Engineer(name, id, email, github);
}

module.exports = getEngineer;
