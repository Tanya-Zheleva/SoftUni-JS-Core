let createCalculator = require('../аddSubtract').createCalculator;
let expect = require('chai').expect;

describe('createCalculator()', function () {
    let calculator;

    beforeEach(() => {
        calculator = createCalculator();
    });

    it('add should should increase value', function () {
        calculator.add(2);
        calculator.add(3);
        expect(calculator.get()).to.be.equal(5);
    });
    it('subtract should should decrease value', function () {
        calculator.subtract(3);
        calculator.subtract(4);
        expect(calculator.get()).to.be.equal(-7);
    });
    it('should subtract when adding negative', function () {
        calculator.add(-3);
        expect(calculator.get()).to.be.equal(-3);
    });
    it('should add when subtracting negative', function () {
        calculator.subtract(-3);
        expect(calculator.get()).to.be.equal(3);
    });
    it('get should should return value', function () {
        expect(calculator.get()).to.be.equal(0);
    });
    it('add string should return Nan', function () {
        calculator.add('test');
        expect(calculator.get()).to.be.NaN;
    });
    it('subtract string should return Nan', function () {
        calculator.subtract('test');
        expect(calculator.get()).to.be.NaN;
    });
    it("should return -8 after {subtract 5 add:'-3'}", function() {
        calculator.subtract('5');
        calculator.add('-3');
        expect(calculator.get()).to.be.equal(-8);
    });
});