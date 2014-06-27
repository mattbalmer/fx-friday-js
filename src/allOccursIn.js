export function allOccursIn(listA, listB, bI = 0) {
    if(listA.length < 1)
        return true;

    if(listB.length < bI - 1)
        return false;

    if(listA[0] == listB[bI])
        return allOccursIn(listA.slice(1), listB);

    return allOccursIn(listA, listB, ++bI)
}