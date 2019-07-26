// copied code for self learning
// implement a curry from pure javascript like below
// var abc = function(a, b, c) {
//     return [a, b, c];
//   };
   
//   var curried = _.curry(abc);
   
//   curried(1)(2)(3);
//   // => [1, 2, 3]
   
//   curried(1, 2)(3);
//   // => [1, 2, 3]
   
//   curried(1, 2, 3);
//   // => [1, 2, 3]
   
//   // Curried with placeholders.
//   curried(1)(_, 3)(2);
//   // => [1, 2, 3]

// in order to chain arguments, we can chain bind functions like below

let fn = function() {
    console.log(arguments);
    return fn.bind(null, ...arguments);
    // replace null as this also works, but executed immediately
}

// or 

let fn = function() {
    console.log(arguments);
    return Function.prototype.bind.apply(fn, [null].concat(Array.prototype.slice.call(arguments)));
}

let fb = fn(1);
fb = fb(2);
fb = fb(3);
fb = fb(4);

// similar 
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

function mul (x) {
    return function (y) { // anonymous function
      return function (z) { // anonymous function
        return x * y * z;
      };
    };
  }

// function currying example
let multiply = function(a, b) {
    return a * b;
}

// note there can be multiple values for arguments to take as default value of a, b
let multiplyTwo = multiply.bind(this, 2);
console.log(multiplyTwo(4));  // return 8 since a is 2

// curry based on number of arguments

function magician(targetfn) {
    let numOfArgs = targetfn.length;
    return function fn() {
        if (arguments.length < numOfArgs) {
            return fn.bind(null, ...arguments);
            // do not execute immediately
        } else {
            return targetfn.apply(null, arguments);
            // execute immediately when arguments length is enough
        }
    }
}

// without fn function
function magician(targetfn) {
    var numOfArgs = targetfn.length;
    if (arguments.length < numOfArgs) {
      return magician.bind(null, ...arguments);
    } else {
      return targetfn.apply(null, Array.prototype.slice.call(arguments, 1));
    }
  }

  // deal with the case placeHolder '_'

//define placeholder
var _ = '_';

function magician3 (targetfn, ...preset) {
  var numOfArgs = targetfn.length;
  var nextPos = 0; //the index of next valid input location, either a '_', or the end of preset.
  
  //check if there is enough valid arguments
  if (preset.filter(arg=> arg !== _).length === numOfArgs) {
    return targetfn.apply(null, preset);
  } else {
    //return the 'helper' function
    return function (...added) {
      //loop through and put added arguments to the preset arguments
      while(added.length > 0) {
        var a = added.shift();
        //get next placeholder position, either '_' or the end of preset
        while (preset[nextPos] !== _ && nextPos < preset.length) {
          nextPos++
        }
        //update the preset
        preset[nextPos] = a;
        nextPos++;
      }
      //bind with the updated preset
      return magician3.bind(null, targetfn, ...preset);
    }
  }
}

