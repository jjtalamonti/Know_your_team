const Employee = require('../lib/employee');
const employee = new Employee("Martha Stewart", 3, "Thuglife@cellblockB.com");

describe('Employee', () => {
    it('should input employee info as an object', () => {
        expect(employee.name).toBe("Martha Stewart")
        expect(employee.id).toBe(3)
        expect(employee.email).toBe("Thuglife@cellblockB.com")
    });

    it('should get employee name from getName()', () => {
        expect(employee.getName()).toBe("Martha Stewart")
    });

    it('should get employee id from getId()', () => {
        expect(employee.getId()).toBe(3)
    });

    it('should get employee email from getEmail()', () => {
        expect(employee.getEmail()).toBe("Thuglife@cellblockB.com")
    });

    it('should get employee role from getRole()', () => {
        expect(employee.getRole()).toBe("Employee")
    });
})