'use strict';
var assign = require('lodash.assign');
var matches = require('matches-selector');
module.exports = function (options) {
    var curNode;
    options = assign({
        el : undefined,
        parent: document,
        filter: undefined
    }, options);
    curNode = options.el;
    while(curNode && curNode !== options.parent) {
        if (matches(curNode, options.filter)) {
            return curNode;
        }
        curNode = curNode.parentNode;
    }
};
