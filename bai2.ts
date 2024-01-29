function myMap<T, K>(array: T[], callback: (value: T) => K): K[] {
  const result: K[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

const numbers: Array<number> = [1, 2, 3, 4, 5];
const doubleNumbers = myMap<number, number>(numbers, (number) => number * 2);

console.log(doubleNumbers);
