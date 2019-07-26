'use strict';

Array.prototype.testEach = function(sampleFn) {
    for (let i = 0; i < this.length; i++) {
        sampleFn(this[i], i, this);   // currentVal, index, arr
    }
}
