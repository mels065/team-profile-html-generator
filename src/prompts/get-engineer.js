const inquirer = require('inquirer');

const { validateEmail, validateName, validateId } = require('../utils');

const Engineer = require('../../lib/Engineer');

async function getEngineer() {
    const engineerData = await inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the engineer?",
            validate: validateName
        },
        {
            name: "id",
            message: "What is the employee id of the engineer?",
            validate: validateId
        },
        {
            name: "email",
            message: "What is the email address of the engineer?",
            validate: validateEmail
        },
        {
            name: "github",
            message: "What is the github username of the engineer?",
            validate: validateId
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
