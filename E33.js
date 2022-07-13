function func1() { return { prop: "foo" }; }
function func2() { return { prop: 'foo' }; }

console.log(func1() === func2()); //false
console.log(func1() === func1()); //false
console.log(func1().prop === func2().prop); //true

/* Both objects have a property named prop, whose value is the primitive value: 'foo'.
Nevertheless, the returned objects are stored with a different reference in memory every time any function is invoked.
The latter indicates the reason in which a direct comparison of both objects will be false. 
Moreover, a direct comparison between the returned object by the same function will be false since the function
will return an object with a different reference every time the function is called. Finally, when a direct comparison 
between the inner property(prop) will result true since the primitive value is the same in all cases. */