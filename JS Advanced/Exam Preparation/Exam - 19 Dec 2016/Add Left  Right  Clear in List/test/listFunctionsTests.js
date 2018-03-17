let makeList = require('../listFunctions').makeList;
let expect = require('chai').expect;

describe('List functions tests', function () {
    let myList;

    beforeEach(() => {
        myList = makeList();
    });

    it('should have all functions', function () {
        expect(myList.hasOwnProperty('addLeft')).to.equal(true, 'Missing addLeft function!');
        expect(myList.hasOwnProperty('addRight')).to.equal(true, 'Missing addRight function!');
        expect(myList.hasOwnProperty('clear')).to.equal(true, 'Missing clear function!');
        expect(myList.hasOwnProperty('toString')).to.equal(true, 'Missing toString function!');
    });
    it('should return empty string for no items', function () {
        expect(myList.toString()).to.equal('');
    });
    it('addLeft should work', function () {
        myList.addLeft(4);
        myList.addLeft('Test');
        expect(myList.toString()).to.equal('Test, 4');
    });
    it('addRight should work', function () {
        myList.addRight(5);
        myList.addRight('7');
        expect(myList.toString()).to.equal('5, 7');
    });
    it('clear should work', function () {
        myList.addLeft(8);
        myList.clear();
        expect(myList.toString()).to.equal('');
    });
    it('toString should work', function () {
        myList.addLeft(8);
        myList.addLeft(5);
        myList.addRight(13);
        expect(myList.toString()).to.equal('5, 8, 13');
    });
});