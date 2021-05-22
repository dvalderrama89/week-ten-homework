const Employee = require("../lib/Employee");

describe("Employee", () => {
    let employee = new Employee("3", "Employee Test", "employee@test.com");
    it("getRole returns Employee type", () => {
        let expected = "Employee";
        let actual = employee.getRole();
        expect(actual).toEqual(expected);
    });
});