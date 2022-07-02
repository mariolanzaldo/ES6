function arrayIntersect(a, b) {
    var setB = new Set(b);
    const intersection = a.filter(item => setB.has(item));
    return intersection;
};

const inter = arrayIntersect([2, 3, 5, 3], [3, 4, 3, 5, 3, 6, 8]);
console.log(inter);