const Manager = require('../lib/manager');
const manager = new Manager("Martha Stewart", 3, "Thuglife@cellblockB.com", 123);

describe('Manager', () => {
    it('should input manager info as an object', () => {
        expect(manager.name).toBe("Martha Stewart")
        expect(manager.id).toBe(3)
        expect(manager.email).toBe("Thuglife@cellblockB.com")
        expect(manager.officeNum).toBe(123)
    });

    it('should get manager name from getName()', () => {
        expect(manager.getName()).toBe("Martha Stewart")
    });

    it('should get manager id from getId()', () => {
        expect(manager.getId()).toBe(3)
    });

    it('should get manager email from getEmail()', () => {
        expect(manager.getEmail()).toBe("Thuglife@cellblockB.com")
    });

    it('should get manager office number from getOfficeNum()', () => {
        expect(manager.getOfficeNum()).toBe(123)
    });

    it('should get manager role from getRole()', () => {
        expect(manager.getRole()).toBe("Manager")
    });
})