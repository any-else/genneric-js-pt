function search(array, target) {
    for (var i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i;
        }
    }
    return -1;
}
var numberList = [2, 4, 5, 5];
var index = search(numberList, 4342);
console.log(index);
var stringList = ["ba", "na", "ca"];
var indexString = search(stringList, "quang smart");
console.log(indexString);
