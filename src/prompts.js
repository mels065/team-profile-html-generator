const inquirer = require("inquirer");

const getManager = require("./get-manager");

async function getPrompts() {
    try {
        return {
            manager: (await getManager())
        }
    } catch(err) {
        throw err;
    }
}

module.exports = getPrompts;
