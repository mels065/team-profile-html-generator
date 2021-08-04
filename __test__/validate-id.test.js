const validateId = require('../src/utils/validate-id');

describe('validateId()', () => {
    it('should return true for valid identification', () => {
        const id = '12345';
        expect(validateId(id)).toBe(true);
    });

    it('should return false for invalid identification', () => {
        const id = '12@ 345';
        expect(validateId(id)).toBe(false);
    });
});
