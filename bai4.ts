function search<T>(array: T[], target: T): number {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    }
  }
  return -1;
}

const numberList: Array<number> = [2, 4, 5, 5];
const index = search(numberList, 4342);
console.log(index);

const stringList: Array<string> = ["ba", "na", "ca"];
const indexString = search(stringList, "quang smart");
console.log(indexString);
