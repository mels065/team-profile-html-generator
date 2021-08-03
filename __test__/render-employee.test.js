const renderEmployee = require('../src/render/render-employee');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

describe('renderEmployee()', () => {
    it('returns proper rendered HTML for manager', () => {
        const manager = new Manager('Dave', '12345', 'dave@gmail.com', 'A1');
        const result = renderEmployee(manager);
        const expected = `
    <div class="employee-card">
        <header>
            <h2 class="name">${manager.getName()}</h2>
            <p class="role"><i class="fa fa-mug-hot"></i> ${manager.getRole()}</p>
        </header>
        <section class="content">
            <ul class="details">
                <li class="detail-item">ID: ${manager.getId()}</li>
                <li class="detail-item">Email: <a href="mailto:${manager.email}">${manager.getEmail()}</a></li>
                <li class="detail-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </section>
    </div>
    `;

        expect(result).toEqual(expected);
    });

    it('returns proper rendered HTML for engineer', () => {
        const engineer = new Engineer('Dave', '12345', 'dave@gmail.com', 'dave25');
        const result = renderEmployee(engineer);
        const expected = `
    <div class="employee-card">
        <header>
            <h2 class="name">${engineer.getName()}</h2>
            <p class="role"><i class="fa fa-glasses"></i> ${engineer.getRole()}</p>
        </header>
        <section class="content">
            <ul class="details">
                <li class="detail-item">ID: ${engineer.getId()}</li>
                <li class="detail-item">Email: <a href="mailto:${engineer.email}">${engineer.getEmail()}</a></li>
                <li class="detail-item">GitHub: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </section>
    </div>
    `;

        expect(result).toEqual(expected);
    });

    it('returns proper rendered HTML for intern', () => {
        const intern = new Intern('Dave', '12345', 'dave@gmail.com', 'School of Rock');
        const result = renderEmployee(intern);
        const expected = `
    <div class="employee-card">
        <header>
            <h2 class="name">${intern.getName()}</h2>
            <p class="role"><i class="fa fa-user-graduate"></i> ${intern.getRole()}</p>
        </header>
        <section class="content">
            <ul class="details">
                <li class="detail-item">ID: ${intern.getId()}</li>
                <li class="detail-item">Email: <a href="mailto:${intern.email}">${intern.getEmail()}</a></li>
                <li class="detail-item">School: ${intern.getSchool()}</li>
            </ul>
        </section>
    </div>
    `;

        expect(result).toEqual(expected);
    });
});
