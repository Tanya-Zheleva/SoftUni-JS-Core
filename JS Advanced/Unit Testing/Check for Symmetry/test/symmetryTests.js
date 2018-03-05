let isSymmetric = require('../symmetry').isSymmetric;
let expect = require('chai').expect;

describe('isSymmetric(arr) - check if an array is symmetric', function () {
    it('should return true for [1, 2, 2, 1]', function () {
        expect(true).to.be.equal(isSymmetric([1, 2, 2, 1]));
    });
    it('should return true for ["a", "b", "c", "b", "a"]', function () {
        expect(true).to.be.equal(isSymmetric(["a", "b", "c", "b", "a"]));
    });
    it('should return true for [new Date(), "a", 1, {}, 1, "a", new Date()]', function () {
        expect(true).to.be.equal(isSymmetric([new Date(), "a", 1, {}, 1, "a", new Date()]));
    });
    it('should return true for []', function () {
        expect(true).to.be.equal(isSymmetric([]));
    });
    it('should return true for [1]', function () {
        expect(true).to.be.equal(isSymmetric([1]));
    });
    it('should return false for [1, 2]', function () {
        expect(false).to.be.equal(isSymmetric([1, 2]));
    });
    it('should return true for [1, 1]', function () {
        expect(true).to.be.equal(isSymmetric([1, 1]));
    });
    it('should return false for {}', function () {
        expect(false).to.be.equal(isSymmetric({}));
    });
});