function foo1() {
    var fn = function () {
        console.log(this.foo);
    };
    return { foo: 'bar' };
}

function foo2() {
    var fn = function () {
        console.log(this.foo);
    };
    return { foo: 'baz' };
}

console.log(foo1());
console.log(foo2());

/*When the function foo1 is invoked, it declares a new function, named fn, which will log this.foo.
However, fn is not associated with any callback and the function only returns an object: { foo: 'bar'}.
 
When the function foo2 is invoked, it will behave in a similar manner as foo1, that is creating a new function
(fn), which will log this.foo. Nevertheless, there isn't any callback associated with this inner function and foo2
only returns an object: { foo: 'baz'}.
 
Note that both inner functions (fn) are function-scoped, meaning they cannot be invoked outside the respective functions.*/