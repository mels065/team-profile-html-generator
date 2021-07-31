const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an instance of Intern', () => {
        const result = new Intern(
            'Dave',
            '12345',
            'dave@gmail.com',
            'School of Rock'
        );
        expect(result).toHaveProperty('name');
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('email');
        expect(result).toHaveProperty('school');
    })
});
