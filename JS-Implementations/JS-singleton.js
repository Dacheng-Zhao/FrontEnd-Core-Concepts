// var MyNamespace = {};
// MyNamespace.Singleton = (function() {

//   // Private attribute that holds the single instance
//   var singletonInstance;  

//   // All of the normal code goes here
//   function constructor() {
//     // Private members
//     var privateVar1 = "Nishant";
//     var privateVar2 = [1,2,3,4,5];

//     function privateMethod1() {
//       // code stuff
//     }

//     function privateMethod1() {
//       // code stuff
//     }

//     return {
//       attribute1 : "Nishant",
//       publicMethod: function() {
//         console.log("Nishant");// some code logic
//       }
//     }
//   }

//   return {
//     // public method (Global access point to Singleton object)
//     getInstance: function() {
//       //instance already exist then return  
//       if(!singletonInstance) {
//         singletonInstance = constructor();
//       }
//       return singletonInstance;           
//     }           
//   }

// })();   

// // getting access of publicMethod
// console.log(MyNamespace.Singleton.getInstance().publicMethod());

let MyNamespace = {};
MyNamespace.Singleton = (function() {
    let singletonInstance;

    function constructor() {
        let privateVar1 = 'abc';
        let privateVar2 = [1,2,3];

        function privateMethod1() {
            // code
        }
        function privateMethod2() {
            // code
        }

        return {
            attribute1 : privateVar1,
            publicMethod: function() {
            console.log(privateVar2);// some code logic
            }
        }
    }

    return {
        // public method (Global access point to Singleton object)
        getInstance: function() {
        //instance already exist then return  
        if(!singletonInstance) {
            singletonInstance = constructor();
        }
        return singletonInstance;           
        }           
    }
})(); 

// getting access of publicMethod
console.log(MyNamespace.Singleton.getInstance().publicMethod());
