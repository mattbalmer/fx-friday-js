export function occursIn(needle, haystack) {
    if(haystack.length < 1)
        return false;

    if(haystack[0] == needle)
        return true;

    return occursIn(needle, haystack.slice(1))
}