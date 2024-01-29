function myMap(array, callback) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}
var numbers = [1, 2, 3, 4, 5];
var doubleNumbers = myMap(numbers, function (number) { return number * 2; });
console.log(doubleNumbers);
