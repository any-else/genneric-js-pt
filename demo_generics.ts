let fullName: string = "Quang";

let age: number = 18;

let address: undefined = undefined;

let isMarried: boolean = false;

//===============================

type Student = {
  fullName: string;
  age: number;
};

interface IStudent {
  fullName: string;
  age: number;
}

const mrChinh: IStudent = {
  fullName: "Chính đẹp trai",
  age: 18,
};

const listSoNguyen: number[] = [1, 2, 3, 4, 5, 6];

const listStudent: Student[] = [
  {
    fullName: "Quang mập",
    age: 30,
  },
  {
    fullName: "Hiệp sĩ",
    age: 19,
  },
];

// Thì kiểu generic mình hiểu như thế naò

const listString: Array<any> = ["hello", "world", 9, { age: 89 }];

interface ICar<T> {
  name: T;
  power: number;
  modal: T;
}

const mec: ICar<string> = {
  name: "mec",
  power: 100,
  modal: "Đức",
};

const getListTwoNumber = <T, K>(a: T, b: K): [T, K] => {
  return [a, b];
};

console.log(getListTwoNumber<number, number>(2, 3));

function getListTwoNumber2<T, K>(a: T, b: K) {
  return [a, b];
}
console.log(getListTwoNumber2<string, number>("Quang", 6));
