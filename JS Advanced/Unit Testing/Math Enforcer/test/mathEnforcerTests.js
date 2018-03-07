let mathEnforcer = require('../mathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe('mathEnforcer object', function () {
    it('should return undefined for addFive("3")', function () {
        expect(mathEnforcer.addFive('3')).to.be.undefined;
    });
    it('should return 8.645 for addFive(3.645)', function () {
        expect(mathEnforcer.addFive(3.645)).to.be.equal(8.645);
    });
    it('should return 0 for addFive(-5)', function () {
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    });
    it('should return undefined for subtractTen([])', function () {
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
    });
    it('should return 1 for subtractTen(11)', function () {
        expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
    });
    it('should return -13 for subtractTen(-3)', function () {
        expect(mathEnforcer.subtractTen(-3)).to.be.equal(-13);
    });
    it('should return 3.54 for subtractTen(13.54)', function () {
        expect(mathEnforcer.subtractTen(13.54)).to.be.closeTo(3.54, 0.001);
    });
    it('should return undefined for sum({}, 5)', function () {
        expect(mathEnforcer.sum({}, 5)).to.be.undefined;
    });
    it('should return undefined for sum(5, "3")', function () {
        expect(mathEnforcer.sum(5, '3')).to.be.undefined;
    });
    it('should return 13 for sum(7, 6)', function () {
        expect(mathEnforcer.sum(7, 6)).to.be.equal(13);
    });
    it('should return -10 for sum(-5, -5)', function () {
        expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
    });
    it('should return 4.23 for sum(1.20, 3.03)', function () {
        expect(mathEnforcer.sum(1.20, 3.03)).to.be.closeTo(4.23, 0.001);
    });
});