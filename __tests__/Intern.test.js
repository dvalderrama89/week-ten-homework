const Intern = require("../lib/Intern");

describe("Intern", () => {
    const intern = new Intern("2", "Intern Test", "intern@test.com", "UC Test")
    it("getRole should return Intern", () => {
        const expected = "Intern";
        const actual = intern.getRole();
        expect(actual).toEqual(expected);
    });
    
    it("getSchool should return UC Test", () => {
        const expected = "UC Test";
        const actual = intern.getSchool();
        expect(actual).toEqual(expected);
    });

    it("getId should return id=2", () => {
        const expected = "2";
        const actual = intern.getId();
        expect(actual).toEqual(expected);
    });

    it("getName should return 'Intern Test'", () => {
        const expected = "Intern Test";
        const actual = intern.getName();
        expect(actual).toEqual(expected);
    });

    it("getEmail should return 'intern@test.com'", () => {
        const expected = "intern@test.com";
        const actual = intern.getEmail();
        expect(actual).toEqual(expected);
    });
});