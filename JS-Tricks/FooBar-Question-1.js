let foo = 1;
function bar() {
    foo = 10;
    return;
    function foo() {};
}

bar();
console.log(foo);  


// the answer is 1 since there is foo in child scope, function foo(){} will hoist
// it won't touch the global scope foo, so still 1