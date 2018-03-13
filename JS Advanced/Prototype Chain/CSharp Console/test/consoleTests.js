let Console = require('../Console').Console;
let expect = require('chai').expect;

describe('Console Tests', function () {
    describe('writeLine with one parameter Tests', function () {
        it('should return a message if the input is a string', function () {
            expect(Console.writeLine('test')).to.equal('test');
        });
        it('should return a JSON object if the input is an object', function () {
            let obj = {input: 'test'};
            expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj));
        });
        it('should throw error if no arguments are given', function () {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });
    });
    describe('writeLine with two parameter Tests', function () {
        it('should return error if first argument is not a string', function () {
            expect(() => Console.writeLine([], 'test')).to.throw(TypeError);
        });
        it('should throw error if parameters are more', function () {
            expect(() => Console.writeLine('The sum of {0} and {1}', 'one', 'two', 'three')).to.throw(RangeError);
        });
        it('should throw error if parameters are less', function () {
            expect(() => Console.writeLine('The sum of {0} and {1}', 'one')).to.throw(RangeError);
        });
        it('should throw error if parameters are not replaced correctly', function () {
            expect(() => Console.writeLine('To {0} or not to {0}', 'be', 'to')).to.throw(RangeError);
        });
        it('should throw error if not enough paramters are passed to match the placeholder', function () {
            expect(() => Console.writeLine('Some {13}', 'input', 'test')).to.throw(RangeError);
        });
        it('should work properly if parameters are replaced', function () {
            expect(Console.writeLine('This {0} a {1}', 'is', 'test')).to.equal('This is a test');
        });
    });
});