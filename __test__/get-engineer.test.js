const inquirer = require('inquirer');

const Engineer = require('../lib/Engineer');

const getEngineer = require('../src/prompts/get-engineer');

jest.mock('inquirer');

describe('getEngineer()', () => {
    it("returns a new Engineer object", async () => {
        const data = {
            name: 'Dave',
            id: '12345',
            email: 'dave@gmail.com',
            github: 'dave25'
        };
        inquirer.prompt.mockReturnValue(
            new Promise((resolve) => {
                resolve(data)
            })
        );
        const engineer = await getEngineer();

        expect(engineer instanceof Engineer).toBe(true);
        expect(engineer.getName()).toEqual(data.name);
        expect(engineer.getId()).toEqual(data.id);
        expect(engineer.getEmail()).toEqual(data.email);
        expect(engineer.getGithub()).toEqual(data.github);


    });
});
