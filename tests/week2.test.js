import { occursIn } from '../src/occursIn.js'
import { allOccursIn } from '../src/allOccursIn.js'
import { sameElements } from '../src/sameElements.js'
import { numOccurrences } from '../src/numOccurrences.js'
import { toSet } from '../src/toSet.js'
import { toVersionArr, compareVersions } from '../src/versions.js'
var haystack;

describe('week 2', function() {
    beforeEach(function() {
        haystack = [ 1, 2, 4 ];
    });

    describe('occursIn', function() {
        it('does not occur', function() {
            var needle = 3;

            expect( occursIn(needle, haystack) ).toBe(false);
        });

        it('does occur', function() {
            var needle = 2;

            expect( occursIn(needle, haystack) ).toBe(true);
        })
    });

    describe('allOccursIn', function() {
        it('does not occur', function() {
            var needle = [1, 3];

            expect( allOccursIn(needle, haystack) ).toBe(false);
        });

        it('does occur', function() {
            var needle = [2, 1];

            expect( allOccursIn(needle, haystack) ).toBe(true);
        });

        describe('lists', function() {
            beforeEach(function() {
                haystack = [ 1, 2, 4, 2 ];
            });

            it('does not occur', function() {
                var needle = [1, 3];

                expect( allOccursIn(needle, haystack) ).toBe(false);
            });

            it('does occur', function() {
                var needle = [ 2, 1, 1 ];

                expect( allOccursIn(needle, haystack) ).toBe(true);
            });
        });
    });

    describe('sameElements', function() {
        it('are not same', function() {
            var needle = [1, 2, 2];

            expect( sameElements(needle, haystack) ).toBe(false);
        });

        it('are same', function() {
            var needle = [4, 2, 1];

            expect( sameElements(needle, haystack) ).toBe(true);
        });
    });

    describe('numOccurrences', function() {
        it('0', function() {
            var needle = 3;

            expect( numOccurrences(needle, haystack) ).toBe(0);
        });

        it('3', function() {
            var needle = 2
                , haystack = [ 1, 2, 4, 2, 3, 2 ];

            expect( numOccurrences(needle, haystack) ).toBe(3);
        });
    });

    describe('toSet', function() {
        it('should succeed', function() {
            var list = [ 1, 2, 3, 2, 4, 3 ]
                , set = [ 1, 2, 3, 4 ];

            expect( toSet(list) ).toEqual(set);
        });
    });

    describe('toVersionArr', function() {
        it('1.1.1', function() {
            var v = '1.1.1';

            expect( toVersionArr(v) ).toEqual( [1,1,1] );
        });

        it('1.1', function() {
            var v = '1.1';

            expect( toVersionArr(v) ).toEqual( [1,1,0] );
        });

        it('1', function() {
            var v = '1';

            expect( toVersionArr(v) ).toEqual( [1,0,0] );
        });

        it('1.12.14', function() {
            var v = '1.12.14';

            expect( toVersionArr(v) ).toEqual( [1,12,14] );
        });
    });

    describe('compareVersions', function() {
        describe('a > b', function() {
            it('3 - 3', function() {
                var a = '0.1.1',
                    b = '0.1.0';

                expect( compareVersions(a, b) ).toBe(1);
            });

            it('2 - 3', function() {
                var a = '0.1.1',
                    b = '0.1';

                expect( compareVersions(a, b) ).toBe(1);
            });

            it('1 - 3', function() {
                var a = '1.1.1',
                    b = '1';

                expect( compareVersions(a, b) ).toBe(1);
            });
        });

        describe('a < b', function() {
            it('3 - 3', function() {
                var a = '0.0.9',
                    b = '0.1.0';

                expect( compareVersions(a, b) ).toBe(-1);
            });

            it('2 - 3', function() {
                var a = '0.1',
                    b = '0.1.1';

                expect( compareVersions(a, b) ).toBe(-1);
            });

            it('1 - 3', function() {
                var a = '1',
                    b = '1.1.1';

                expect( compareVersions(a, b) ).toBe(-1);
            });
        });

        describe('a == b', function() {
            it('3 - 3', function() {
                var a = '0.1.1',
                    b = '0.1.1';

                expect( compareVersions(a, b) ).toBe(0);
            });

            it('2 - 3', function() {
                var a = '0.1',
                    b = '0.1.0';

                expect( compareVersions(a, b) ).toBe(0);
            });

            it('1 - 3', function() {
                var a = '1',
                    b = '1.0.0';

                expect( compareVersions(a, b) ).toBe(0);
            });
        })
    });
});