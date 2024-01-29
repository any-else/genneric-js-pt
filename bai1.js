var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(6);
console.log("value của box 1: ", typeof numberBox.getValue());
var stringBox = new Box("Chính chicken");
console.log("value của box số 2 : ", typeof stringBox.getValue());
