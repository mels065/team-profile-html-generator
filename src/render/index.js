const fs = require('fs');
const path = require('path');

const renderEmployee = require("./render-employee");

function renderData(data) {
    const { manager, engineers, interns } = data;
    const html = `
    <html>
        <head>
            <title>Team Profile</title>
            <link href="./reset.css" rel="stylesheet" type="text/css" />
            <link href="./style.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
            <header id="header">
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

    fs.writeFile(path.join(__dirname, '../../dist/index.html'), html, (err) => {
        err ? console.error(err) : console.log("File has been created");
    })
}

module.exports = renderData;
