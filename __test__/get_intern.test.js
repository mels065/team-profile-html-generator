const inquirer = require('inquirer');

const Intern = require('../lib/Intern');

const getIntern = require('../src/prompts/get-intern');

jest.mock('inquirer');

describe('getIntern()', () => {
    it("returns a new Intern object", async () => {
        const data = {
            name: 'Dave',
            id: '12345',
            email: 'dave@gmail.com',
            school: 'School of Rock'
        };
        inquirer.prompt.mockReturnValue(
            new Promise((resolve) => {
                resolve(data)
            })
        );
        const intern = await getIntern();

        expect(intern instanceof Intern).toBe(true);
        expect(intern.getName()).toEqual(data.name);
        expect(intern.getId()).toEqual(data.id);
        expect(intern.getEmail()).toEqual(data.email);
        expect(intern.getSchool()).toEqual(data.school);
    });
});
