Array.prototype.swap = function(a, b) {
    var t = this.splice(b, 1)[0];
    this.splice(a, 0, t);
    return this;
};
Array.prototype.until = function(callback) {
    var evaluate = function(arr, i = 0) {
        var result = callback(arr[i], i, arr);

        if(result === true) {
            return i;
        } else if(i < arr.length - 1) {
            return evaluate(arr, ++i);
        } else {
            return -1;
        }
    };

    return evaluate(this);
};
Array.prototype.untilRight = function(callback) {
    var evaluate = function(arr, i = arr.length - 1) {
        var result = callback(arr[i], i, arr);

        if(result === true) {
            return i;
        } else if(i > 0) {
            return evaluate(arr, --i);
        } else {
            return -1;
        }
    };

    return evaluate(this);
};

export default function insertionSort(array, i = 0) {
    if(i >= array.length - 1) return array;

    var ri = array.slice(i).until(function(ue) {
        return ue < array[i];
    });

    if(ri > -1) {
        ri += i;

        var li = 1 + array.slice(0, ri).untilRight(function(ue) {
            return ue <= array[ri];
        });

        array.swap(li, ri);
    }

    return insertionSort(array, ++i);
}