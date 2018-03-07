let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require('../sharedObject').sharedObject;

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

describe('Shared Object Unit Tests', function () {
    before(() => global.$ = $);

    describe('Initial tests', function () {
        it('name property should be null`', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('income property should be null`', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('changeName tests', function () {
        it('name should stay null when passed empty string', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('name should should change when passed valid string', function () {
            sharedObject.changeName('Test');
            expect(sharedObject.name).to.be.equal('Test', 'Name did not change');
        });
    });
    describe('Name input tests', function () {
        it('with empty string name should be null ', function () {
            sharedObject.changeName('Nakov');
            sharedObject.changeName('');
            let nameTxtVal = $('#name');
            expect(nameTxtVal.val()).to.be.equal('Nakov');
        });
        it('with non-empty string name should not be null ', function () {
            sharedObject.changeName('Test');
            let nameTxtVal = $('#name');
            expect(nameTxtVal.val()).to.be.equal('Test');
        });
    });
    describe('changeIncome tests', function () {
        it('with a string should stay null', function () {
            sharedObject.changeIncome('m');
            expect(sharedObject.income).to.be.null;
        });
        it('with a floating-point', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with a negative', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-6);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with zero', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with a valid number ', function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
        });
    });
    describe('Income input tests', function () {
        it('should not change with a string', function () {
            sharedObject.changeIncome(4);
            sharedObject.changeIncome('d');
            let incomeTextBox = $('#income');
            expect(incomeTextBox.val()).to.be.equal('4');
        });
        it('with a positive number', function () {
            sharedObject.changeIncome(4);
            let incomeTextBox = $('#income');
            expect(incomeTextBox.val()).to.be.equal('4');
        });
        it('should not change with a floating-point number', function () {
            sharedObject.changeIncome(2);
            sharedObject.changeIncome(4.5);
            let incomeTextBox = $('#income');
            expect(incomeTextBox.val()).to.be.equal('2');
        });
        it('should not change with a negative number', function () {
            sharedObject.changeIncome(2);
            sharedObject.changeIncome(-4);
            let incomeTextBox = $('#income');
            expect(incomeTextBox.val()).to.be.equal('2');
        });
    });
    describe('updateName tests', function () {
        it('should not change with an empty string', function () {
            sharedObject.changeName('Astoria');
            let name = $('#name');
            name.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Astoria');
        });
        it('should change with an empty string', function () {
            sharedObject.changeName('Astoria');
            let name = $('#name');
            name.val('Katarina');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Katarina');
        });
        describe('updateIncome tests', function () {
            it('should not change with a string', function () {
                sharedObject.changeIncome(3);
                let income = $('#income');
                income.val('test');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.equal(3);
            });
            it('should not change with a negative number', function () {
                sharedObject.changeIncome(3);
                let income = $('#income');
                income.val('-5');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.equal(3);
            });
            it('should not change with a floating-point number', function () {
                sharedObject.changeIncome(3);
                let income = $('#income');
                income.val('3.14');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.equal(3);
            });
            it('should not change with zero', function () {
                sharedObject.changeIncome(3);
                let income = $('#income');
                income.val('0');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.equal(3);
            });
            it('should change with a valid number', function () {
                sharedObject.changeIncome(4);
                let income = $('#income');
                income.val('7');
                sharedObject.updateIncome();
                expect(sharedObject.income).to.be.equal(7);
            });
        });
    });
});