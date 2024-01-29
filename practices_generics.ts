//tip 1:  dùng basic
// mình muốn kiểu dữ liệu của mình trở lên linh động hơn

type MyGeneric<T> = {
  data: T;
};
// data == string
type Example1 = MyGeneric<string>;

// data == object
type Example2 = MyGeneric<{
  fullName: string;
  age: number;
}>;

// Xác định kiểu dữ liệu cho function khi call API
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodo<T>(url: string): Promise<T> {
  return await fetch(url).then((res) => res.json());
}

fetchTodo<ITodo>("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  console.log("response là:", res);
});
