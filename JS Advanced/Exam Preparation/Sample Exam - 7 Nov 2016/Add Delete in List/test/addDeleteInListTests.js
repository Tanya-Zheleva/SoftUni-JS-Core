let list = require('../addDeleteInList').list;
let expect = require('chai').expect;

describe('Add / Delete in List Tests', function () {
    it('should have all functions', function () {
        expect(list.hasOwnProperty('add')).to.equal(true, 'Missing add function!');
        expect(list.hasOwnProperty('delete')).to.equal(true, 'Missing delete function!');
        expect(list.hasOwnProperty('toString')).to.equal(true, 'Missing toString function!');
    });
    it('should be empty', function () {
        expect(list.toString()).to.equal('');
    });
    it('should add any item type', function () {
        list.add(5);
        list.add('Test');
        list.add(true);
        expect(list.toString()).to.equal('5, Test, true');
    });
    it('should return undefined when deleting with an invalid index', function () {
        expect(list.delete(-1)).to.be.undefined;
        expect(list.delete(113)).to.be.undefined;
        expect(list.toString()).to.equal('5, Test, true');
    });
    it('should not delete with floating-point index', function () {
        expect(list.delete(5.5)).to.be.undefined;
        expect(list.toString()).to.equal('5, Test, true');
    });
    it('should not delete with text index', function () {
        expect(list.delete('Index')).to.be.undefined;
        expect(list.toString()).to.equal('5, Test, true');
    });
    it('delete should return item', function () {
        expect(list.delete(1)).to.equal('Test');
    });
    it('data should not change when deleting with invalid index', function () {
        list.delete(0);
        expect(list.toString()).to.equal('true');
    });
    it('toString should work', function () {
        list.add(4);
        list.add(5);
        list.add('Info');
        expect(list.toString()).to.equal('true, 4, 5, Info');
    });
});