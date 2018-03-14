let Sumator = require('../sumator').Sumator;
let expect = require('chai').expect;

describe('sumator Tests', function () {
    let sumator;

    beforeEach(() => {
        sumator = new Sumator();
    });

    it('has all properties', function () {
        expect(sumator.hasOwnProperty('data')).to.equal(true, "Missing data property");
    });
    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('sumNums')).to.equal(true, "Missing sumNums function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('removeByFilter')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });
    it('should initialize data with an empty array', function () {
        expect(sumator.data.length).to.be.equal(0);
    });
    it('add should increase length', function () {
        sumator.add(4);
        expect(sumator.data.length).to.be.equal(1);
    });
    it('add should work properly', function () {
        sumator.add(4);
        expect(sumator.toString()).to.be.equal('4');
    });
    it('should sum only numbers', function () {
        sumator.add(5);
        sumator.add('Test');
        sumator.add(8);
        expect(sumator.sumNums()).to.be.equal(13);
    });
    it('should return 0 for sum if no numbers are present', function () {
        sumator.add('Test');
        expect(sumator.sumNums()).to.be.equal(0);
    });
    it('should print toString more than 0 items properly', function () {
        sumator.add(2);
        sumator.add('Test');
        sumator.add(8);
        expect(sumator.toString()).to.be.equal('2, Test, 8');
    });
    it('should filter by given func properly', function () {
        sumator.add(2);
        sumator.add(3);
        sumator.add(5);
        sumator.add(7);
        sumator.removeByFilter(x => x % 2 !== 0);
        expect(sumator.toString()).to.be.equal('2');
    });
    it('should not filter if no match is found', function () {
        sumator.add(5);
        sumator.add(7);
        sumator.removeByFilter(x => x < 3);
        expect(sumator.toString()).to.be.equal('5, 7')
    });
    it('should return (empty) if no items are found', function () {
        sumator.add(2);
        sumator.removeByFilter(x => x % 2 === 0);
        expect(sumator.toString()).to.be.equal('(empty)');
    });
});