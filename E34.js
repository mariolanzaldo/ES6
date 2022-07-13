function* bouncingBall() {
    let v0 = 0, //Because is dropped from rest
        h0 = 10,
        t = 0,
        g = 0.00259,
        boundary = 9;

    while (boundary >= 0) {
        let hnew = h0 - (0.5 * g * Math.pow(t, 2)) - (v0 * t);
        if (hnew <= 0) {
            t = 0;
            h0 = boundary;
            v0 = Math.sqrt(2 * g * h0 * t);
            v0 = 0;
            boundary--;
            hnew = 0;
        }
        t++;
        yield hnew;
    }
}

const output = bouncingBall();

while (!output.next().done) {
    console.log(output.next().value);
}