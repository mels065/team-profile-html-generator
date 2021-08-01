const renderEmployee = require("./render-employee");

function renderData(data) {
    const { manager, engineers, interns } = data;
    return renderEmployee(manager);
}

module.exports = renderData;
