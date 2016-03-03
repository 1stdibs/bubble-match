'use strict';
var assign = require('lodash.assign');
var matches = require('matches-selector');
module.exports = function (options) {
    var curNode;
    options = assign({
        el : undefined,
        parent: document,
        filter: undefined,
        matchParent: false
    }, options);
    curNode = options.el;
    while (
        curNode &&
        curNode !== document &&
        curNode !== options.parent
    ) {
        if (matches(curNode, options.filter)) {
            return curNode;
        }
        curNode = curNode.parentNode;
    }
    if (options.matchParent && curNode.matches(options.filter)) {
        return curNode;
    }
};
