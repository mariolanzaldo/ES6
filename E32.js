function myLog() {
    return {
        bar: 'bar',
        foo: 'foo',
        prop: function () {
            var self = this;
            console.log(self.bar); //bar
            console.log(this.foo); //foo
            (function () {
                console.log(self.bar); //bar
                console.log(this.foo); //undefined
            })();
        }
    };
}

var obj = myLog();
obj.prop();

/*The above code is a function named myLog in which most of the console.log statements will be printed
except for console.log(this. foo) inside of the IIFE. This is due to the context of this being referred to as
the global object. However, the self variable is declared at the beginning of the prop method, which serves as a pointer
to the returned object itself. The latter explains why the self variable is still working in the IIFE context.  */