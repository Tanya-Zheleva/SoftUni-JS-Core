let lookupChar = require('../charLookup').lookupChar;
let expect = require('chai').expect;

describe('lookupChar(string, index)', function () {
    it('should return undefined for ({}, 1)', function () {
        expect(lookupChar({}, 1)).to.be.undefined;
    });
    it('should return undefined for (2, 2)', function () {
        expect(lookupChar(2, 2)).to.be.undefined;
    });
    it('should return undefined for ("hello", {})', function () {
        expect(lookupChar('hello', {})).to.be.undefined;
    });
    it('should return undefined for ("hello", [])', function () {
        expect(lookupChar('hello', [])).to.be.undefined;
    });
    it('should return incorrect index for ("test", -1)', function () {
        expect(lookupChar('test', -1)).to.be.equal('Incorrect index');
    });
    it('should return incorrect index for ("test", 4)', function () {
        expect(lookupChar('test', 4)).to.be.equal('Incorrect index');
    });
    it('should return "l" for ("apple", 3)', function () {
        expect(lookupChar('apple', 3)).to.be.equal('l');
    });
    it('should return incorrect index for ("test", 3.13)', function () {
        expect(lookupChar('test', 3.13)).to.be.undefined;
    });
});