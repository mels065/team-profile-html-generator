const getPrompts = require('./src/prompts');

async function init() {
    const data = await getPrompts();
}

init();
