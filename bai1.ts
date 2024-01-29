class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(6);
console.log("value của box 1: ", typeof numberBox.getValue());

const stringBox = new Box<string>("Chính chicken");
console.log("value của box số 2 : ", typeof stringBox.getValue());
