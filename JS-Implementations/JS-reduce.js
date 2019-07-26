'use strict';

Array.prototype.myReduce = function(callback, initVal) {
    var accumulator = (initVal === undefined) ? 0 : initVal;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator
}
