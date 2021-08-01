const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('initialization', () => {
        it('creates an instance of a Manager', () => {
            const result = new Manager(
                'Dave',
                '12345',
                'dave@gmail.com',
                '1A'
            );
            expect(result).toHaveProperty('name');
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('email');
            expect(result).toHaveProperty('officeNumber');
        })
    });

    describe('getOfficeNumber', () => {
        it('should return the office number of the manager', () => {
            const officeNumber = "1A";
            const result = new Manager(
                'Dave',
                '12345',
                'dave@gmail.com',
                officeNumber
            );
            expect(result.getOfficeNumber()).toEqual(officeNumber);
        });
    });

    describe('getRole', () => {
        it('should not return `Employee`', () => {
            const result = new Manager(
                'Dave',
                '12345',
                'dave@gmail.com',
                '1A'
            );
            expect(result.getRole()).not.toEqual('Employee');
        });

        it('should return `Manager`', () => {
            const result = new Manager(
                'Dave',
                '12345',
                'dave@gmail.com',
                '1A'
            );
            expect(result.getRole()).toEqual('Manager');
        })
    });
});
