function log(message) {
    var args = Array.prototype.slice.call(arguments, 1), i = -1;

    message = message.replace(/%s/g, function(match) {
        i++;
        return typeof args[i] != 'undefined'
            ? args[i]
            : match;
    });

    console.log(message);
}