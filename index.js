const getPrompts = require('./src/prompts');
const renderData = require('./src/render');

async function init() {
    try {
        const data = await getPrompts();
        console.log(renderData(data));
    } catch(err) {
        throw err;
    }
}

init();
