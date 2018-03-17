let createList = require('../addSwapShiftLeftRight').createList;
let expect = require('chai').expect;

describe('Add / Swap / Shift Left / Right in List Tests', function () {
    let list;

    beforeEach(() => {
       list = createList();
    });

    it('should have all properties', function () {
        expect(list.hasOwnProperty('add')).to.equal(true);
        expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
        expect(list.hasOwnProperty('shiftRight')).to.equal(true);
        expect(list.hasOwnProperty('swap')).to.equal(true);
        expect(list.hasOwnProperty('toString')).to.equal(true);
    });
    it('should add all types of data', function () {
        list.add(5);
        list.add('Test');
        list.add(true);
        expect(list.toString()).to.equal('5, Test, true');
    });
    it('shiftLeft should not work for 1 item', function () {
        list.add(5);
        list.shiftLeft();
        expect(list.toString()).to.equal('5');
    });
    it('shiftLeft should work', function () {
        list.add(1);
        list.add('Test');
        list.add(false);
        list.shiftLeft();
        expect(list.toString()).to.equal('Test, false, 1');
    });
    it('shiftRight should not work for 1 item', function () {
        list.add(3);
        list.shiftRight();
        expect(list.toString()).to.equal('3');
    });
    it('shiftRight should work', function () {
        list.add(1);
        list.add('Test');
        list.add(false);
        list.shiftRight();
        expect(list.toString()).to.equal('false, 1, Test');
    });
    it('should not work for invalid index', function () {
        list.add(3);
        list.add(6);
        expect(list.swap('Test', 0)).to.equal(false);
        expect(list.swap(0, '')).to.equal(false);
        expect(list.swap(-1, 1)).to.equal(false);
        expect(list.swap(1, 5)).to.equal(false);
    });
    it('should not swap if index is invalid', function () {
        list.add(5);
        list.add(3);
        list.add(7);
        expect(list.swap(1, 3)).to.equal(false);
        expect(list.swap(-5, 1)).to.equal(false);
    });
    it('swap should return true', function () {
        list.add(5);
        list.add(3);
        list.add(7);
        expect(list.swap(1, 2)).to.equal(true);
    });
    it('should swap', function () {
        list.add(5);
        list.add(3);
        list.add(7);
        list.swap(1, 2);
        expect(list.toString()).to.equal('5, 7, 3');
    });
});