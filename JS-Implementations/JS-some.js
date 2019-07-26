'use strict';

Array.prototype.mySome = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            return true;
    }
    return false;
};