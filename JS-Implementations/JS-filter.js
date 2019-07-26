'use strict';

Array.prototype.myFilter = function(callback, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr
}
