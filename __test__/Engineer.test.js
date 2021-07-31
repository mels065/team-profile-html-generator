const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('initialization', () => {
        it('should create an instance of Engineer', () => {
            const result = new Engineer(
                'Dave',
                '12345',
                'dave@gmail.com',
                'dave25'
            );
            expect(result).toHaveProperty('name');
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('email');
            expect(result).toHaveProperty('github');
        });
    });
});
