function myFilter(array, callback) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
var listNumber = [1, 2, 3, 4, 5, 6];
var evenNumber = myFilter(listNumber, function (item) { return item % 2 == 0; });
console.log("evenNumber", evenNumber);
