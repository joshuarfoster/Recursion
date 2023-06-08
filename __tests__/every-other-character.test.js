const everyOtherCharacter = require("../every-other-character");

describe("#everyOtherCharacter", function(){
    it("returns a string of every other character", function(){
        expect(everyOtherCharacter("hello")).toBe("hlo")
        expect(everyOtherCharacter("animal")).toBe("aia")
        expect(everyOtherCharacter("sun")).toBe("sn")
        expect(everyOtherCharacter("bananas")).toBe("bnns")
    })
})