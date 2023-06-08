const isPalindrome = require("../is-palindrome");

describe("#isPalindrome", function(){
    it("returns true if palindrome", function(){
        expect(isPalindrome("tacocat")).toBe(true)
        expect(isPalindrome("tacodog")).toBe(false)
        expect(isPalindrome("racecar")).toBe(true)
        expect(isPalindrome("banana")).toBe(false)
    })
})