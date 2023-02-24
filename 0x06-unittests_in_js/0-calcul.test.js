const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe ("calculateNumber", () => {
    it("should be 1 + 1 = 2", () => {
        assert.equal(calculateNumber(1, 1), 2);
    });
    it("should be 1 + 2 = 3", () => {
        assert.equal(calculateNumber(1, 2), 3);
    });
    it("should be 1 + 3 = 4", () => {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it("should be 1 + 1.1 = 2", () => {
        assert.equal(calculateNumber(1, 1.1), 2);
    });
    it("should be 1.5 + 1.5 = 4", () => {
        assert.equal(calculateNumber(1.5, 1.5), 4);
    });
});
