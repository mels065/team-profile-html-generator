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
});
