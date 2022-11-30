//---------- 基本類型 ----------

let str: string = "kathy";
let str1: string;
str1 = "kathy";

let num: number = 1000;
let boo: boolean = true;
let n: null = null;
let nu: undefined = undefined;

let test: any = true;

//陣列
let arr: string[] = ["a", "b"];
let arr2: string[][] = [
  ["aa", "bb", "cc"],
  ["dd", "ee"],
];

//元組
let tuple: [number, string, boolean] = [1, "a", true];
let tuple2: [string, string][] = [["a", "b"]];

//---------- Enum 枚舉 ----------

enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
}

const staus = LiveStatus.SUCCESS;
console.log(staus);

//---------- Union ----------

let aaa: number | string;
aaa = 1000;
aaa = "str";

//---------- Type ----------

type A = number | string;
type B = boolean | string;
let a1: A;
a1 = 999;
a1 = "str";

let b1: B;
b1 = true;

//---------- interface ----------

interface User {
  name: string;
  age: number;
}

//---------- object ----------

type Card = {
  name: string;
  desc: string;
};

// type Card = {
//     age: number;
// }

interface Card2 {
  name: string;
  desc: string;
}

interface Card2 {
  age?: number; // 可選
}

const obj: Card2 = {
  name: "kathy",
  desc: "....",
};

//---------- function ----------
// 參數
// function hello(){ }
function hello(a: string, b: string) {
  return a + b;
}

function hello2(a: string, b: string): number {
  console.log(a, b);
  return 999;
}

function hello3(a: number, b: boolean, c: string) {
  return 100;
}

// undefined
function test2(a: number) {
  console.log(a);
}

function hello4(name: string, age?: number) {
  // let a: number;
  // a = age;
  if (age === undefined) return -1;
  test2(age);
  return;
}

//箭頭函式
const func = () => {};

const func2 = () => {
  return 1;
};

//---------- 斷言 unknow ----------
// 通常應用在從後端拿的資料(fetch API)

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as Data;
}

type Beta = {
  name: string;
};
const data1: Data = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};
// 假設 data1 是動態的
const beta = data1 as unknown as Beta;

//---------- class ----------
// private 私有
// public 公開
// protected 受保護

class Live {
  roomName: string; // default 是 public
  private id: string; // private 只有在開發的時候可以避免去改掉(訪問)此值
  protected name: string;

  constructor(roomName1: string, id1: string, name1: string) {
    console.log("建立直播中....");
    this.roomName = roomName1;
    this.id = id1;
    this.name = name1;
  }
  start() {
    this.id;
  }
}

class CarLive extends Live {
  constructor(roomName1: string, id1: string, name1: string) {
    super(roomName1, id1, name1);
  }
  start() {
    super.name;
    //super.id; // 無法訪問
  }
}

const live = new Live("1號", "00001", "Kathy");
//live.id; // 無法訪問
console.log("live", live);
const carLive = new CarLive("car room", "00002", "Kathy2");
//carLive.name; // 無法訪問
console.log("carLive", carLive);

class Live2 {
  #name; // 在 JS 意思是私有變數(不是 typescript 才有的)
  constructor(name: string) {
    this.#name = name;
  }
}

const live2 = new Live2("live2");
//live2.#name // 編譯會直接出錯, 無法存取私有變數
console.log("live2", live2);

// 實作介面(interface) 需要用 implements 關鍵字
interface CarProps {
  name: string;
  age: number;
  start: () => void;
}
class Car implements CarProps {
  //private name: string; interface 是 public 不能改為 private
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  start() {}
}

//---------- 泛型 ----------

function print<T>(data: T) {
  console.log("data", data);
}

function print2<T1, T2, T3>(data1: T1, data2: T2, data3: T3) {
  console.log("data1:", data1, " , data2:", data2, " , data3:", data3);
}

print<number>(999);
print<string>("Kathy");
print<boolean>(true);
print2<number, string, boolean>(33, "Kathy", true);
print2<string, string, string>("Kathy", "Kao", "female");

class Print<T> {
  data: T;
  constructor(d: T) {
    this.data = d;
  }
}

const p = new Print<number>(999);
const p1 = new Print<string>("Kathy");
console.log("p", p);
console.log("p1", p1);

//---------- Utility ----------(typescript 寫好的工具可以直接使用)
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Record
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

// key
// value
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
  //kathy: { age: 16, breed: "British Shorthair" } 只接受定義好的 CatName
};
console.log(cats);

const obj1: Record<string, boolean> = {
  name: true,
  //age: 33
};
console.log("obj1", obj1);

// Pick
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  //description:''
};

// Omit
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//     createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
//     createdAt: 1615544252770,
// };
