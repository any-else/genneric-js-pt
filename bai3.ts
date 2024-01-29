function myFilter<T>(array: T[], callback: (item: T) => boolean): T[] {
  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

const listNumber = [1, 2, 3, 4, 5, 6];

const evenNumber = myFilter<number>(listNumber, (item) => item % 2 == 0);

console.log("evenNumber", evenNumber);
