const Intern = require("../lib/Intern");

describe("Intern", () => {
    let intern = new Intern("2", "Intern Test", "intern@test.com", "UC Test")
    it("getRole returns Intern", () => {
        const expected = "Intern";
        const actual = intern.getRole();
        expect(actual).toEqual(expected);
    });
});