'use strict';

Array.prototype.myMap = function(callback, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback.call(context, this[i], i, this));   // currentVal, index, arr
    }
    return arr;
}
