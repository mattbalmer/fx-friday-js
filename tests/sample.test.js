import { occursIn } from '../src/occursIn.js'

describe('occursIn', function() {
    var haystack = [ 1, 2, 4 ];

    it('does not occur', function() {
        var result = occursIn(3, haystack);

        expect(result).toBe(false);
    });

    it('does occur', function() {
        var result = occursIn(2, haystack);

        expect(result).toBe(true);
    })
});