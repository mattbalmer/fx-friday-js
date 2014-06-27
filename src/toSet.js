import { occursIn } from './occursIn.js'

export function toSet(list, newSet) {
    newSet = newSet || [];

    if(list.length < 1)
        return newSet;

    if(!occursIn(list[0], newSet))
        newSet.push(list[0]);

    return toSet(list.slice(1), newSet)
}