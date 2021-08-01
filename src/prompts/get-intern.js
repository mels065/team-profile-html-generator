const inquirer = require('inquirer');

const { validateEmail, validateName, validateId } = require('../utils');

const Intern = require('../../lib/Intern');

async function getIntern() {
    const internData = await inquirer.prompt([
        {
            name: "name",
            message: "What is the intern's name?",
            validate: validateName
        },
        {
            name: "id",
            message: "What is the employee id for the intern?",
            validate: validateId
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
