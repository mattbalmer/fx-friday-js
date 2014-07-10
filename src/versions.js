Array.prototype.fill = function(val, len) {
    var a = Array.apply(null, new Array(len)).map(Number.prototype.valueOf, val)
        , s = this;

    return a.map(function(v, i) {
        return s[i] || val;
    });
};

function compareNum(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

function toVersionArr(v) {
    return v.split(/\./g).map(Number).fill(0, 3);
}

function compareVersions(a, b) {
    a = toVersionArr(a);
    b = toVersionArr(b);

    return a.map(function(e, i) {
        return compareNum(a[i], b[i]);
    }).reduce(function(prev, curr) {
        return prev == 0 ? curr : prev;
    });
}

export { toVersionArr, compareVersions }