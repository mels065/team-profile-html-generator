const fs = require('fs');
const path = require('path');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const renderEmployee = require('../src/render/render-employee')
const renderData = require('../src/render/render-data');

jest.mock('fs');

describe('renderData', () => {
    it('renders html to the html file', async () => {
        const mock = jest.spyOn(fs, 'writeFile');
        mock.mockImplementation((file, d, cb) => {
            cb();
        });
        const data = {
            manager: new Manager('Dave', '12345', 'dave@gmail.com', 'A1'),
            engineers: [
                new Engineer('Jill', '67890', 'jill@gmail.com', 'jill25')
            ],
            interns: [
                new Intern('Steve', '13579', 'steve@gmail.com', 'School of Rock')
            ]
        }
        const html = `
    <html>
        <head>
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link href="./reset.css" rel="stylesheet" type="text/css" />
            <link href="./style.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
            <header id="header">
                <h1>My Team</h1>
            </header>
            <main>
                <div id="team">
                    ${renderEmployee(data.manager)}
                    ${data.engineers.map(engineer => renderEmployee(engineer)).join('\n')}
                    ${data.interns.map(intern => renderEmployee(intern)).join('\n')}
                </div>
            </main>
        </body>
    </html>
    `;
    
    await renderData(data);

    expect(fs.writeFile).lastCalledWith(
        path.join(__dirname, '../dist/index.html'),
        html,
        expect.anything()
    );
    mock.mockRestore();
    });
});
