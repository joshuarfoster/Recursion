const longestWord = require("../longest-word");

describe("#longestWord", function(){
    it("return length of longest word", function(){
        expect(longestWord(["hello", "hi", "hola"])).toBe(5)
        expect(longestWord(["animal","gill"])).toBe(6)
        expect(longestWord(["sun","run","tan","at"])).toBe(3)
        expect(longestWord(["bananas"])).toBe(7)
    })
})