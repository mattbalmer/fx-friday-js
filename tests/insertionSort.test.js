import insertionSort from '../src/insertionSort.js'

describe('insertionSort', function() {
    function generateArray(size, min, max) {
        var a = [];
        for(var i = 0; i < size; i++) {
            a[i] = Math.ceil( Math.random() * (max-min+1) ) + min - 1;
        }
        return a;
    }

    it('should exist', function() {
        expect(insertionSort).toEqual(jasmine.any(Function));
    });

    it('should sort', function() {
        var array = [0,5,2,8,1,3,4,7,6,9];

        var sorted = insertionSort(array);

        expect(sorted).toEqual([0,1,2,3,4,5,6,7,8,9]);
    });
});