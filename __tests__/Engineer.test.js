const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const engineer = new Engineer("4", "Engineer Test", "engineer@test.com", "testGithubUser123");

    it("getRole should return Engineer", () => {
        const expected = "Engineer";
        const actual = engineer.getRole();
        expect(actual).toEqual(expected);
    });

    it("getGithub should return testGithubUser123", () => {
        const expected = "testGithubUser123";
        const actual = engineer.getGithub();
        expect(actual).toEqual(expected);
    })
});