'use strict';

Array.prototype.myEvery = function(callback, context) {
    for (let i = 0; i < this.length; i++) {
        if (!callback.call(context, this[i], i, this)) {
            return false
        }
    }
    return true
}
