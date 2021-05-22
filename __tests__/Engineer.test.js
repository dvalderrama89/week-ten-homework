const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    let engineer = new Engineer("4", "Engineer Test", "engineer@test.com");

    it("getRole should return Engineer", () => {
        let expected = "Engineer";
        let actual = engineer.getRole();
        expect(actual).toEqual(expected);
    });
});