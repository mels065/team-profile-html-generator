const getPrompts = require('./src/prompts/get-prompts');
const renderData = require('./src/render/render-data');

async function init() {
    try {
        const data = await getPrompts();
        renderData(data);
    } catch(err) {
        throw err;
    }
}

init();
