const renderEmployee = require("./render-employee");

function renderData(data) {
    const { manager, engineers, interns } = data;
    return `
    <html>
        <head>
            <title>Team Profile</title>
            <link href="./style.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
                <div id="team">
                    ${renderEmployee(manager)}
                    ${engineers.map(engineer => renderEmployee(engineer)).join('\n')}
                    ${interns.map(intern => renderEmployee(intern)).join('\n')}
                </div>
            </main>
        </body>
    </html>
    `
}

module.exports = renderData;
