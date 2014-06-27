export function numOccurrences(needle, haystack, count = 0) {
    if(haystack.length < 1)
        return count;

    return numOccurrences(needle, haystack.slice(1), count + (haystack[0] == needle ? 1 : 0))
}