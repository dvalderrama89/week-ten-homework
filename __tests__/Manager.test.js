const { it } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    const manager = new Manager("1", "Manager Test", "manager@test.com", "333");
    it("getRole returns Manager", () => {
        const expected = "Manager";
        const actual = manager.getRole();
        expect(actual).toEqual(expected);
    });

    it("getId should return id=1", () => {
        const expected = "1";
        const actual = manager.getId();
        expect(actual).toEqual(expected);
    });

    it("getName should return 'Manager Test'", () => {
        const expected = "Manager Test";
        const actual = manager.getName();
        expect(actual).toEqual(expected);
    });

    it("getEmail should return 'manager@test.com'", () => {
        const expected = "manager@test.com";
        const actual = manager.getEmail();
        expect(actual).toEqual(expected);
    });
});