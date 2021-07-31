const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('initialization', () => {
        it('creates an instance of employee', () => {
            const result = new Employee('Dave', '12345', 'dave@gmail.com');
            expect(result).toHaveProperty('name');
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('email');
        });
    });

    describe('getName', () => {
        it('should return the name of the employee', () => {
            const name = 'Dave';
            const result = new Employee(name, '12345', 'dave@gmail.com');
            expect(result.getName()).toEqual(name);
        });
    });

    describe('getId', () => {
        it('should return the id of the employee', () => {
            const id = '12345';
            const result = new Employee('Dave', id, 'dave@gmail.com');
            expect(result.getId()).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const email = 'dave@gmail.com';
            const result = new Employee('Dave', '12345', email);
            expect(result.getEmail()).toEqual(email);
        });
    });
});
