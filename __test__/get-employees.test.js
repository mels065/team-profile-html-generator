const inquirer = require('inquirer');

const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

const getEmployees = require('../src/prompts/get-employees');

jest.mock('inquirer');

describe('getEmployees', () => {
    it('creates an engineer', async () => {
        const data = {
            name: 'Dave',
            id: '12345',
            email: 'dave@gmail.com',
            github: 'dave25'
        };
        inquirer.prompt
        .mockReturnValueOnce(
            new Promise((resolve) => {
                resolve({ willAddEmployee: true })
            })
        )
        .mockReturnValueOnce(
            new Promise((resolve) => {
                resolve({ employeeType: 'Engineer' });
            })
        )
        .mockReturnValueOnce(
            new Promise((resolve) => {
                resolve(data)
            })
        )
        .mockReturnValueOnce(
            new Promise((resolve) => {
                resolve({ willAddEmployee: false })
            })
        );

        const { engineers } = await getEmployees();
        expect(engineers.length).toBe(1);
        expect(engineers[0] instanceof Engineer).toBe(true);
        expect(engineers[0].name).toEqual(data.name);
        expect(engineers[0].id).toEqual(data.id);
        expect(engineers[0].email).toEqual(data.email);
        expect(engineers[0].github).toEqual(data.github);
    });

    it('creates an intern', async () => {
        const data = {
            name: 'Dave',
            id: '12345',
            email: 'dave@gmail.com',
            school: 'School of Rock'
        };
        inquirer.prompt
        .mockReturnValueOnce(
            new Promise((resolve) => {
                resolve({ willAddEmployee: true })
            })
        )
        .mockReturnValueOnce(
            new Promise((resolve) => {
                resolve({ employeeType: 'Intern' });
            })
        )
        .mockReturnValueOnce(
            new Promise((resolve) => {
                resolve(data)
            })
        )
        .mockReturnValueOnce(
            new Promise((resolve) => {
                resolve({ willAddEmployee: false })
            })
        );

        const { interns } = await getEmployees();
        expect(interns.length).toBe(1);
        expect(interns[0] instanceof Intern).toBe(true);
        expect(interns[0].name).toEqual(data.name);
        expect(interns[0].id).toEqual(data.id);
        expect(interns[0].email).toEqual(data.email);
        expect(interns[0].school).toEqual(data.school);
    });
})
