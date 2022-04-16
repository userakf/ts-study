// const flag:boolean = true // 布尔
// const flag:number = 1 // 数字
// const flag:string = 'hello' // 字符串

// 普通枚举 初始值默认为 0 其余的成员会会按顺序自动增长 可以理解为数组下标
// enum Color {
//     RED = 10,
//     PINK,
//     BLUE
// }

// const pink:Color = Color.PINK

// 数组
// const flag1:number[] = [1,2,3]
// const flag2:Array<number> = [1,2,3]

// 元组类型
// const flag:[string,number] = ['hello',1]

// Symbol
// 我们在使用 Symbol 的时候，必须添加 es6 的编译辅助库 需要在 tsconfig.json 的 libs 字段加上ES2015 Symbol 的值是唯一不变的
// const sym1 = Symbol('hello')
// const sym2 = Symbol('hello')

// console.log(Symbol('hello') === Symbol('hello'));

// 任意类型 any
// const flag:any = document.getElementById('root')

// null 和 undefined
// let u:undefined = undefined
// let n:null = null

// Unknown类型
// unknown 和 any 的主要区别是 unknown 类型会更加严格 在对 unknown 类型的值执行大多数操作之前 我们必须进行某种形式的检查 而在对 any 类型的值执行操作之前 我们不必进行任何检查
// 所有类型都可以被归为 unknown 但unknown类型只能被赋值给 any 类型和 unknown 类型本身 而 any 啥都能分配和被分配

// let value:unknown

// value = true; // OK
// value = 42; // OK
// value = "Hello World"; // OK
// value = []; // OK
// value = {}; // OK

// let value1: unknown = value; // OK
// let value2: any = value; // OK
// let value3: boolean = value; // Error
// let value4: number = value; // Error
// let value5: string = value; // Error
// let value6: object = value; // Error

// void 类型
// void 表示没有任何类型 当一个函数没有返回值时 TS 会认为它的返回值是 void 类型。
// function hello(name: string): void {

// }
// never 类型
// never 一般表示用户无法达到的类型 例如never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

// function neverReach(): never {
//     throw new Error('an error')
// }

// BigInt 大数类型

// object, Object 和 {} 类型

// let objectCase:object;
// 大 Object 代表所有拥有 toString、hasOwnProperty 方法的类型 所以所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)
// let simpleCase: {};
// {} 空对象类型和大 Object 一样 也是表示原始类型和非原始类型的集合

// 类型推论
// 指编程语言中能够自动推导出值的类型的能力 它是一些强静态类型语言中出现的特性 定义时未赋值就会推论成 any 类型 如果定义的时候就赋值就能利用到类型推论
// let flag; //推断为any
// let count = 123; //为number类型
// let hello = "hello"; //为string类型

// 联合类型
// let name: string | number;

// 类型断言
// 尖括号 语法
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;

// // as 语法
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;

// 非空断言 在上下文中当类型检查器无法断定类型时 一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型

let flag: null | undefined | string;
flag!.toString(); // ok
flag.toString(); // error

// 字面量类型
let flag1: "hello" = "hello";
let flag2: 1 = 1;
let flag3: true = true;

// 类型别名
type flag = string | number;

function hello(value: flag) { }

// 交叉类型 交叉类型是将多个类型合并为一个类型。通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性
// type Flag1 = { x: number };
// type Flag2 = Flag1 & { y: string };

// let flag3: Flag2 = {
//   x: 1,
//   y: "hello",
//   henb,
// };

// 类型保护 类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型 其主要思想是尝试检测属性、方法或原型，以确定如何处理值

function double(input: string | number | boolean) {
    if (typeof input === "string") {
        return input + input;
    } else {
        if (typeof input === "number") {
            return input * 2;
        } else {
            return !input;
        }
    }
}

// in 关键字
interface Bird {
    fly: number;
}

interface Dog {
    leg: number;
}

function getNumber(value: Bird | Dog) {
    if ("fly" in value) {
        return value.fly;
    }
    return value.leg;
}
// instanceof 类型保护
class Animal {
    name!: string;
}
class Bird extends Animal {
    fly!: number;
}
function getName(animal: Animal) {
    if (animal instanceof Bird) {
        console.log(animal.fly);
    } else {
        console.log(animal.name);
    }
}
// 自定义类型保护 通过 type is xxx这样的类型谓词来进行类型保护
// 例如下面的例子 value is object就会认为如果函数返回 true 那么定义的 value 就是 object 类型
function isObject(value: unknown): value is object {
    return typeof value === "object" && value !== null;
}

function fn(x: string | object) {
    if (isObject(x)) {
        // ....
    } else {
        // .....
    }
}
// 使用 BigInt 可以安全地存储和操作大整数
// 我们在使用 BigInt 的时候 必须添加 ESNext 的编译辅助库 需要在 tsconfig.json 的 libs 字段加上ESNext
// 要使用1n需要 "target": "ESNext"
// number 和 BigInt 类型不一样 不兼容

// 泛型
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
// function createArray(length:number,value:any){
//     let result = []
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
// console.log(createArray(3,'x'));

// function createArray<T>(length:number,value:T):Array<T>{
//     let result:T[] = []
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
// console.log(createArray<string>(3,'x'));
// 多个类型参数
// function swap<T,U>(tuple: [T, U]):[U,T]{
//     return [tuple[1], tuple[0]];
// }

// console.log(swap([7,'seven']));

// 泛型约束
// interface Lengthwise {
//     length:number
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);
//     return arg
// }

// 泛型接口
