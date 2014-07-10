export function numOccurrences(needle, haystack) {
    return haystack.filter(function(elem){
        return elem == needle;
    }).length;
}