export function toVersionArr(v) {
    if(Array.isArray(v)) {
        if(v.length == 3)
            return v;

        v.push(0);
        return toVersionArr(v);
    }

    return toVersionArr( v.split(/\./g) ).map(function(d){
        return parseInt(d);
    });
}

export function compareVersions(a, b, aI = 0, bI = 0) {
    a = toVersionArr(a);
    b = toVersionArr(b);

    if(aI >= a.length || bI >= b.length )
        return 0;

    if(a[aI] == b[bI])
        return compareVersions(a, b, ++aI, ++bI);

    if(a[aI] < b[bI])
        return -1;
    else
        return 1;
}