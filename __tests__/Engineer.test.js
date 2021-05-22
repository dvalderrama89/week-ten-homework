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
    });

    it("getId should return id=4", () => {
        const expected = "4";
        const actual = engineer.getId();
        expect(actual).toEqual(expected);
    });

    it("getName should return 'Engineer Test'", () => {
        const expected = "Engineer Test";
        const actual = engineer.getName();
        expect(actual).toEqual(expected);
    });

    it("getEmail should return 'engineer@test.com'", () => {
        const expected = "engineer@test.com";
        const actual = engineer.getEmail();
        expect(actual).toEqual(expected);
    });

});