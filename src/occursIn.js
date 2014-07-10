export function occursIn(needle, haystack) {
    return haystack.filter(function(elem) {
        return elem == needle;
    }).length > 0;
}

Number.prototype.occursIn = function(array) {
    return occursIn.call(this, this, array);
};