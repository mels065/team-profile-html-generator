const inquirer = require('inquirer');

const Manager = require('../lib/Manager');

const getManager = require('../src/prompts/get-manager');

jest.mock('inquirer');

describe('getManager()', () => {
    it("returns a new Manager object", async () => {
        const data = {
            name: 'Dave',
            id: '12345',
            email: 'dave@gmail.com',
            officeNumber: 'A1'
        };
        inquirer.prompt.mockReturnValue(
            new Promise((resolve) => {
                resolve(data)
            })
        );
        const manager = await getManager();

        expect(manager instanceof Manager).toBe(true);
        expect(manager.getName()).toEqual(data.name);
        expect(manager.getId()).toEqual(data.id);
        expect(manager.getEmail()).toEqual(data.email);
        expect(manager.getOfficeNumber()).toEqual(data.officeNumber);


    });
});
