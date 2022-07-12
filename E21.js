//First block code
var foo = "hello";
(function () {
    var bar = "World";
    alert(foo + bar); //helloWorld 
})();
alert(foo + bar);//bar is not defined

//Second block code
if ([]) console.log('array is true'); //array is true
if ([] == true) console.log('array == true'); //[] == true results false since JS starts comparing [] == 1, "" == 1, and 0 == 1

//Third block code
for (let i = 0; i < 5; ++i) {
    setTimeout(function () {
        console.log("counter: ", i);//counter: 0, counter: 1, counter: 2, counter: 3, counter: 4
    }, 100);
}

//Fourth block code
var obj = {
    prop: {}
}

delete obj.prop;
console.log(obj.prop); //undefined