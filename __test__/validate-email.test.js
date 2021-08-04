const validateEmail = require('../src/utils/validate-email');

describe('validateEmail()', () => {
    it('should return true for valid emails', () => {
        const email = "dave@gmail.com";
        expect(validateEmail(email)).toBe(true);
    });
    
    it('should return false for invalid emails', () => {
        const email = "dave@";
        expect(validateEmail(email)).toBe(false);
    });
})
