"use strict";
var jsdom = require('jsdom').jsdom;
var assert;
var bubbleMatch;
global.document = jsdom(undefined, {});
global.window = document.defaultView;
global.Element = global.window.Element;
assert = require('assert');
bubbleMatch = require('../index');
describe("bubble-match", function () {
    var parent;
    var child;
    var bar;
    beforeEach(function () {
        parent = document.createElement('div');
        parent.innerHTML = '<div class="foo"><div class="bar"><div class="baz"></div></div></div>';
        child = parent.querySelector('.baz');
        bar = parent.querySelector('.bar');
        assert(child);
        assert(bar);
    });
    it("should return the first element that matches options.filter when tracking parents from options.el to options.parent", function () {
        assert.equal(bubbleMatch({
            el: child,
            parent: parent,
            filter: '.bar'
        }), bar);
    });
    it("should return undefined when options.filter does not match any elements", function () {
        assert.equal(bubbleMatch({
            el: child,
            parent: parent,
            filter: '.doesnotmatch'
        }), undefined);
    });
    it("should handle the case where options.parent is not actually an ancestor of options.el", function () {
        assert.equal(bubbleMatch({
            parent: child,
            el: parent,
            filter: '.doesnotmatch'
        }), undefined);
    });
});
