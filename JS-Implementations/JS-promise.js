class MyPromise {
    status;
    states = ['pending', 'resovled', 'rejected'];
    returnValue;
  
    constructor(entry) {
      if (typeof entry !== 'function') {
        throw new Error('Input must be a function!');
      }
      this.status = 'pending';
  
      const onResolve = res => {
        if (this.status !== this.states[0]) {
          return;
        }
        this.status = this.states[1];
        this.returnValue = res;
      };
      
      const onReject = err => {
        if (this.status !== this.states[0]) {
          return;
        }
        this.status = this.states[2];
        this.returnValue = err;
      }
  
      try {
        entry(onResolve, onReject);
      } catch (err) {
        onReject(err);
      }
    }
  
    then(onResolve, onReject) {
      return new MyPromise((resolve, reject) => {
        try {
          if (this.status === this.states[1]) {
            var resolveVal = onResolve(this.returnValue);
            resolve(resolveVal instanceof MyPromise ? resolveVal.returnValue : resolveVal);
          } else if (this.status === this.states[2]) {
            var rejectVal = onReject(this.returnValue);
            resolve(rejectVal instanceof MyPromise ? rejectVal.returnValue : rejectVal);
          }
        } catch (err) {
          reject(err);
        }
      });
    }
  }
  
  var testResolvePromise = new MyPromise(function(resolve, reject) {
    resolve(3);
  });
  
  testResolvePromise.then(function(val) {
    console.log(val); // should log 3
  });
  
  var testRejectPromise = new MyPromise(function(resolve, reject) {
    reject(3);
  });
  
  testRejectPromise.then(function(val) {}, function(err) {
    console.log('err');
    console.log(err); // should log 3
  });
  
  var testNestedValuePromise = testResolvePromise.then(function(val) {
    return 4;
  });
  
  testNestedValuePromise.then(function(val) {
    console.log(val); // should log 4
  });
  
  var testNestedPromiseInPromise = testResolvePromise.then(function(val) {
    return new MyPromise(function(resolve, reject) {
        resolve(5);
    });
  });
  
  testNestedPromiseInPromise.then(function(val) {
    console.log(val); // should log 5
  });