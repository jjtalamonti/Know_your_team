const Intern = require('../lib/intern');
const intern = new Intern("Martha Stewart", 3, "Thuglife@cellblockB.com", "Streets University");

describe('Intern', () => {
    it('should input intern info as an object', () => {
        expect(intern.name).toBe("Martha Stewart")
        expect(intern.id).toBe(3)
        expect(intern.email).toBe("Thuglife@cellblockB.com")
        expect(intern.school).toBe("Streets University")
    });

    it('should get intern name from getName()', () => {
        expect(intern.getName()).toBe("Martha Stewart")
    });

    it('should get intern id from getId()', () => {
        expect(intern.getId()).toBe(3)
    });

    it('should get intern email from getEmail()', () => {
        expect(intern.getEmail()).toBe("Thuglife@cellblockB.com")
    });

    it('should get intern school from getSchool()', () => {
        expect(intern.getSchool()).toBe("Streets University")
    });

    it('should get intern role from getRole()', () => {
        expect(intern.getRole()).toBe("Intern")
    });
})