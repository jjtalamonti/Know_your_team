const Engineer = require('../lib/engineer');
const engineer = new Engineer("Martha Stewart", 3, "Thuglife@cellblockB.com", "MadCoderMartha");

describe('Engineer', () => {
    it('should input engineer info as an object', () => {
        expect(engineer.name).toBe("Martha Stewart")
        expect(engineer.id).toBe(3)
        expect(engineer.email).toBe("Thuglife@cellblockB.com")
        expect(engineer.github).toBe("MadCoderMartha")
    });

    it('should get engineer name from getName()', () => {
        expect(engineer.getName()).toBe("Martha Stewart")
    });

    it('should get engineer id from getId()', () => {
        expect(engineer.getId()).toBe(3)
    });

    it('should get engineer email from getEmail()', () => {
        expect(engineer.getEmail()).toBe("Thuglife@cellblockB.com")
    });

    it('should get engineer github username from getGithub()', () => {
        expect(engineer.getGithub()).toBe("MadCoderMartha")
    });

    it('should get engineer role from getRole()', () => {
        expect(engineer.getRole()).toBe("Engineer")
    });
})