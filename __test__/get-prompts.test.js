const inquirer = require("inquirer");

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const getPrompts = require('../src/prompts/get-prompts');

jest.mock('inquirer');

describe('getPrompts()', () => {
    it('returns an object with the manager, engineers, and interns', async () => {
        const managerData = {
            name: 'Dave',
            id: '12345',
            email: 'dave@gmail.com',
            officeNumber: 'A1'
        };
        const engineerData = {
            name: 'Steve',
            id: '6789',
            email: 'steve@gmail.com',
            github: 'steve25'
        };
        const internData = {
            name: 'Jill',
            id: '13579',
            email: 'jill@gmail.com',
            school: 'School of Rock'
        };
        inquirer.prompt
            .mockReturnValueOnce(
                new Promise(resolve => resolve(managerData))
            )
            .mockReturnValueOnce(
                new Promise(resolve => resolve({ willAddEmployee: true }))
            )
            .mockReturnValueOnce(
                new Promise(resolve => resolve({ employeeType: 'Engineer' }))
            )
            .mockReturnValueOnce(
                new Promise(resolve => resolve(engineerData))
            )
            .mockReturnValueOnce(
                new Promise(resolve => resolve({ willAddEmployee: true }))
            )
            .mockReturnValueOnce(
                new Promise(resolve => resolve({ employeeType: 'Intern' }))
            )
            .mockReturnValueOnce(
                new Promise(resolve => resolve(internData))
            )
            .mockReturnValueOnce(
                new Promise(resolve => resolve({ willAddEmployee: false }))
            );
        
        const employees = await getPrompts();
        
        expect(employees.manager instanceof Manager).toBe(true);
        expect(employees.manager.name).toEqual(managerData.name);
        expect(employees.manager.id).toEqual(managerData.id);
        expect(employees.manager.email).toEqual(managerData.email);
        expect(employees.manager.officeNumber).toEqual(managerData.officeNumber);

        expect(employees.engineers[0] instanceof Engineer).toBe(true);
        expect(employees.engineers[0].name).toEqual(engineerData.name);
        expect(employees.engineers[0].id).toEqual(engineerData.id);
        expect(employees.engineers[0].email).toEqual(engineerData.email);
        expect(employees.engineers[0].github).toEqual(engineerData.github);

        expect(employees.interns[0] instanceof Intern).toBe(true);
        expect(employees.interns[0].name).toEqual(internData.name);
        expect(employees.interns[0].id).toEqual(internData.id);
        expect(employees.interns[0].email).toEqual(internData.email);
        expect(employees.interns[0].school).toEqual(internData.school);
    })
})
