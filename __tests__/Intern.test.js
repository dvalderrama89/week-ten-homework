const Intern = require("../lib/Intern");

describe("Intern", () => {
    let intern = new Intern("2", "Intern Test", "intern@test.com", "UC Test")
    it("getRole should return Intern", () => {
        const expected = "Intern";
        const actual = intern.getRole();
        expect(actual).toEqual(expected);
    });
    
    it("getSchool should return UC Test", () => {
        const expected = "UC Test";
        const actual = intern.getSchool();
        expect(actual).toEqual(expected);
    })
});