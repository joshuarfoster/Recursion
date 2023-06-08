const productOfNumbers = require("../product-of-nums");

describe("#productOfNumbers", function(){
    it("return product of numbers", function(){
        expect(productOfNumbers([1,2,3])).toBe(6)
        expect(productOfNumbers([1,2])).toBe(2)
        expect(productOfNumbers([4,-2,7])).toBe(-56)
        expect(productOfNumbers([-1,2,-3,7])).toBe(42)
    })
})