import { allOccursIn } from './allOccursIn.js'

export function sameElements(listA, listB) {
    return allOccursIn(listA, listB) && allOccursIn(listB, listA);
}