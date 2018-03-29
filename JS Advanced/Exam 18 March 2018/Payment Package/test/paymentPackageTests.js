let PaymentPackage = require('../paymentPackage').PaymentPackage;
let expect = require('chai').expect;

describe('Payment Package Tests', function () {
    it('should throw error when name is not a string', function () {
        expect(() => new PaymentPackage([], 5)).to.throw(Error);
        expect(() => new PaymentPackage('', 4)).to.throw(Error);
    });
    it('should throw error if value is not a valid number', function () {
        expect(() => new PaymentPackage('Test', {})).to.throw(Error);
        expect(() => new PaymentPackage('Test', -1)).to.throw(Error);
        expect(() => new PaymentPackage('Test', 'number')).to.throw(Error);
        expect(() => new PaymentPackage('Test')).to.throw(Error);
    });
    it('VAT should by 20 by default', function () {
        expect(new PaymentPackage('Test', 5).VAT).to.equal(20);
    });
    it('active should be true by default', function () {
        expect(new PaymentPackage('Test', 8).active).to.equal(true);
    });
    it('should not be able to set active to non-boolean', function () {
        expect(() => new PaymentPackage('Book', 1500).active = null).to.throw(Error);
        expect(() => new PaymentPackage('Book', 1000).active = '').to.throw(Error);
        expect(() => new PaymentPackage('Boook', 500).active = []).to.throw(Error);
    });
    it('should not change name when an invalid parameter is passed', function () {
        expect(() => new PaymentPackage('Test', 1000).name = []).to.throw(Error);
        expect(() => new PaymentPackage('Test', 1000).name = '').to.throw(Error);
    });
    it('should not change value when invalid parameter is passed', function () {
        expect(() => new PaymentPackage('Test', 1000).value = -1).to.throw(Error);
        expect(() => new PaymentPackage('Info', 2000).value = {}).to.throw(Error);
    });
    it('should not change VAT when invalid parameter is passed', function () {
        expect(() => new PaymentPackage('Test', 2000).VAT = -1).to.throw(Error);
        expect(() => new PaymentPackage('Info', 3000).VAT = 'number').to.throw(Error);
    });
    it('name should change correctly', function () {
        let p = new PaymentPackage('Test', 1000);
        p.name = 'Other';
        expect(p.name).to.equal('Other');
    });
    it('value should change correctly', function () {
        let p = new PaymentPackage('Test', 1000);
        p.value = 2000;
        expect(p.value).to.equal(2000);
    });
    it('VAT should change correctly', function () {
        let p = new PaymentPackage('Test', 1000);
        p.VAT = 30;
        expect(p.VAT).to.equal(30);
    });
    it('active should change correctly', function () {
        let p = new PaymentPackage('Test', 1000);
        p.active = false;
        expect(p.active).to.equal(false);
    });
    it('should work correctly with value 0', function () {
        let p = new PaymentPackage('Test', 0);
        p.value = 0;
        expect(p.value).to.equal(0);
    });
    it('toString should work', function () {
        let expectedString = 'Package: Book\n';
        expectedString += '- Value (excl. VAT): 1500\n';
        expectedString += '- Value (VAT 20%): 1800';

        expect(new PaymentPackage('Book', 1500).toString()).to.equal(expectedString);
    });
    it('VAT should change the result', function () {
        let p = new PaymentPackage('Book', 1000);
        p.VAT = 30;
        p.active = false;

        let expectedString = 'Package: Book (inactive)\n';
        expectedString += '- Value (excl. VAT): 1000\n';
        expectedString += '- Value (VAT 30%): 1300';

        expect(p.toString()).to.equal(expectedString);
    });
});