var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

console.log(go());   // 3
console.log(foo.baz.bar());    // 1

// go will lose this reference to baz and refer to global,
// to solve this problem var go = foo.baz.bar.bind(foo.baz);
// if using let x = 3, it will return undefined since var hoist to window