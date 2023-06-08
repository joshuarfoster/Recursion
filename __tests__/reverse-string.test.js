const reverseString = require("../reverse-string");

describe("#reverseString", function(){
    it("returns a reversed string", function(){
        expect(reverseString("tacocat")).toBe("tacocat")
        expect(reverseString("porcupine")).toBe("enipucrop")
        expect(reverseString("apple")).toBe("elppa")
        expect(reverseString("bananas")).toBe("sananab")
    })
})