const Employee = require("../lib/Employee");

describe("Employee", () => {
    const employee = new Employee("3", "Employee Test", "employee@test.com");
    it("getRole returns Employee type", () => {
        const expected = "Employee";
        const actual = employee.getRole();
        expect(actual).toEqual(expected);
    });

    it("getId should return id=3", () => {
        const expected = "3";
        const actual = employee.getId();
        expect(actual).toEqual(expected);
    });

    it("getName should return 'Employee Test'", () => {
        const expected = "Employee Test";
        const actual = employee.getName();
        expect(actual).toEqual(expected);
    });

    it("getEmail should return 'employee@test.com'", () => {
        const expected = "employee@test.com";
        const actual = employee.getEmail();
        expect(actual).toEqual(expected);
    });

});