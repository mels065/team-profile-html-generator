const validateName = require('../src/utils/validate-name');

describe('validateName()', () => {
    it('returns true when passed valid name', () => {
        const name = 'Dave';
        expect(validateName(name)).toBe(true);
    });

    it('returns false when passed invalid name', () => {
        const name = '521';
        expect(validateName(name)).toBe(false);
    });
})
