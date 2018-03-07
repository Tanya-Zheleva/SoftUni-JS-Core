let isOddOrEven = require('../evenOrOdd').isOddOrEven;
let expect = require('chai').expect;

describe('isOddOrEven(string)', function () {
    it('should should return undefined for {}', function () {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('should should return undefined for []', function () {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('should should return even for an empty string', function () {
        expect(isOddOrEven('')).to.be.equal('even');
    });
    it('should should return even for orange', function () {
        expect(isOddOrEven('orange')).to.be.equal('even');
    });
    it('should should return odd for apple', function () {
        expect(isOddOrEven('apple')).to.be.equal('odd');
    });
});