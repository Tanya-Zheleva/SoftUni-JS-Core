let rgbToHexColor = require('../rgbToHex').rgbToHexColor;
let expect = require('chai').expect;

describe('rgbToHexColor(red, blue, green)', function () {
    it('should return undefined for "red", 5, 10', function () {
        expect(rgbToHexColor('red', 5, 10)).to.be.equal(undefined);
    });
    it('should return undefined for 5, "blue", 10', function () {
        expect(rgbToHexColor(5, 'blue', 10)).to.be.equal(undefined);
    });
    it('should return undefined for 2, 3, 5.5', function () {
        expect(rgbToHexColor(2, 3, 5.5)).to.be.equal(undefined);
    });
    it('should return undefined for 2, 3, 0', function () {
        expect(rgbToHexColor(2, 3, -1)).to.be.equal(undefined);
    });
    it('should return undefined for 2, 256, 0', function () {
        expect(rgbToHexColor(2, 256, 0)).to.be.equal(undefined);
    });
    it('should return #000000 for 0, 0, 0', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('should return #FFFFFF for 255, 255, 255', function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
});