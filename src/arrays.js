Array.prototype.add = function(val) {
    this.push(val);
    return this;
};

function expand(arr, size, val) {
    return arr.length >= size ? arr : expand( arr.slice(0).add(val), size, val );
}

function compareAt(a, b, fn, aI, bI) {
    return fn(a[aI], b[bI]);
}

function compare(a, b, fn, i = 0) {
    return i < a.length - 1 ? compare()
}