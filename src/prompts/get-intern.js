const inquirer = require('inquirer');

const validateEmail = require('../utils/validate-email');

const Intern = require('../../lib/Intern');

async function getIntern() {
    const internData = await inquirer.prompt([
        {
            name: "name",
            message: "What is the intern's name?"
        },
        {
            name: "id",
            message: "What is the employee id for the intern?"
        },
        {
            name: "email",
            message: "What is the intern's email?",
            validate: validateEmail
        },
        {
            name: "school",
            message: "What school does the intern attend?"
        }
    ]);

    const {
        name,
        id,
        email,
        school
    } = internData;
    return new Intern(name, id, email, school);
}

module.exports = getIntern;
