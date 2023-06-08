const gatherStrings = require("../gather-strings");

describe("#gatherStrings", function(){
    it("returns a list of every string value in an object", function(){
        let nestedObj = {
            firstName: "Lester",
            favoriteNumber: 22,
            moreData: {
              lastName: "Testowitz"
            },
            funFacts: {
              moreStuff: {
                anotherNumber: 100,
                deeplyNestedString: {
                  almostThere: {
                    success: "you made it!"
                  }
                }
              },
              favoriteString: "nice!"
            }
          };
        expect(gatherStrings(nestedObj)).toEqual(["Lester", "Testowitz", "you made it!", "nice!"])
    })
})