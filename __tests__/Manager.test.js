const Manager = require("../lib/Manager");

describe("Manager", () => {
    const manager = new Manager("1", "Manager Test", "test@test.com", "333");
    it("getRole returns Manager", () => {
        const expected = "Manager";
        const actual = manager.getRole();
        expect(actual).toEqual(expected);
    });
});