const fib = (n, cache = {}) => {

    if (n in cache) {
        return cache[n];
    }
    if (n <= 2) {
        return 1;
    }

    cache[n] = fib(n - 1, cache) + fib(n - 2, cache);

    return cache[n];
}

let output = fib(100);
console.log(output);