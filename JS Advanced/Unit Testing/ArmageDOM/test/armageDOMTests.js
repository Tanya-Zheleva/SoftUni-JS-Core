let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let nuke = require('../armageDOM').nuke;

describe('ArmageDOM tests', function () {
    let targetHtml;

    beforeEach(() => {
        document.body.innerHTML = `<body>
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
</body>`;
    targetHtml = $('#target')});

    before(()=> global.$ = $);

    it('with valid and invalid selectors', function () {
       let selector1 = $('.inside');
       let selector2 = 2;
       let oldHtml = targetHtml.html();
       nuke(selector1, selector2);
       expect(targetHtml.html()).to.be.equal(oldHtml);
    });
    it('with two equal selectors', function () {
        let beforeNuke = $('body').html();
        nuke('#target', '#target');
        let afterNuke = $('body').html();
        expect(beforeNuke).to.equal(afterNuke);
    });
    it('with two valid selectors', function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.not.equal(oldHtml);
    });
    it('with two valid selectors (should not remove anything)', function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml);
    });
});