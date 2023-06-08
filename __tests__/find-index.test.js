const findIndex = require("../find-index");

describe("#findIndex", function(){
    it("returns index of string", function(){
        expect(findIndex(["hello", "hi", "hola"], "hi")).toBe(1)
        expect(findIndex(["animal","gill"], "animal")).toBe(0)
        expect(findIndex(["sun","run","tan","at"], "tan")).toBe(2)
        expect(findIndex(["bananas"], "apple")).toBe(-1)
    })
})