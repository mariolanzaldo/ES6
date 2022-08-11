let foo = (function () {
    const name = `Foo`;
    const secretIdentity = `Captain Random`;

    function secret() {
        console.log(`${name} secret identity is... ${secretIdentity}`);
    }

    function bar() {
        console.log(`${name} likes go to get drunk at some bar`);
    }

    function test() {
        console.log(`${secretIdentity} will save the day`);

    }

    function discoverSecretIdentity() {
        secret();
    }

    return { bar, test, discoverSecretIdentity };
})();
foo.bar();
foo.test();
foo.discoverSecretIdentity();
