const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('initialization', () => {
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
        });
    });

    describe('getSchool', () => {
        it('should return the name of the school the intern attends', () => {
            const school = 'School of Rock';
            const result = new Intern(
                'Dave',
                '12345',
                'dave@gmail.com',
                school
            );
            expect(result.getSchool()).toEqual(school);
        });
    })
});
