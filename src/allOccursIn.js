import { occursIn } from './occursIn.js'

export function allOccursIn(query, source) {
    return query.filter(function(q) {
        return q.occursIn(source);
    }).length == query.length;
}
