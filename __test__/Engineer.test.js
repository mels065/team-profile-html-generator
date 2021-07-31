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

    describe('getGithub', () => {
        it('should return the github for the engineer', () => {
            const github = 'dave25';
            const result = new Engineer(
                'Dave',
                '12345',
                'dave@gmail.com',
                github
            );
            expect(result.getGithub()).toEqual(github);
        })
    });

    describe('getRole', () => {
        it('should not return `Employee`', () => {
            const result = new Engineer(
                'Dave',
                '12345',
                'dave@gmail.com',
                'dave25'
            );
            expect(result.getRole()).not.toEqual('Employee');
        });

        it('should return return `Engineer`', () => {
            const result = new Engineer(
                'Dave',
                '12345',
                'dave@gmail.com',
                'dave25'
            );
            expect(result.getRole()).toEqual('Engineer');
        })
    })
});
