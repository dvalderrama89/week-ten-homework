const Employee = require("../lib/Employee");

describe("Employee", () => {
    const employee = new Employee("3", "Employee Test", "employee@test.com");
    it("getRole returns Employee type", () => {
        const expected = "Employee";
        const actual = employee.getRole();
        expect(actual).toEqual(expected);
    });
});