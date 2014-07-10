import { occursIn } from './occursIn.js'

export function _toSet(list, newSet = []) {
    if(list.length < 1)
        return newSet;

    if(!occursIn(list[0], newSet))
        newSet.push(list[0]);

    return _toSet(list.slice(1), newSet)
}

export function toSet(list) {
    return list.filter(function(elem, i) {
        return list.indexOf(elem) == list.lastIndexOf(elem) || list.indexOf(elem) == i;
    });
}