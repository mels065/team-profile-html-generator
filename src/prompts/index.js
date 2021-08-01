const inquirer = require("inquirer");

const getManager = require("./get-manager");
const getEmployees = require("./get-employees");

async function getPrompts() {
    try {
        return {
            manager: (await getManager()),
            ...(await getEmployees())
        }
    } catch(err) {
        throw err;
    }
}

module.exports = getPrompts;
