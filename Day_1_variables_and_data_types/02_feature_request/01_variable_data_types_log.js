// the primitive data types are:

let num = 10;

console.log(num) // output: 10   
console.log(`the data type of num:`,typeof num) // output: the data type of num: number

let str = "hello";

console.log(str) // output: hello  
console.log(`the data type of str::`,typeof str) // output: the data type of str: string

let boo = true;
console.log(boo) // output: true
console.log(`the data type of boo:`,typeof boo) // output: the data type of boo: boolean

let nul = null;

console.log(nul) // output: null 
console.log(`the data type of null:`,typeof nul) // output: the data type of null: object

let un = undefined;
console.log(un) // output: undefined
console.log(`the data type of un:`,typeof un) // output: the data type of un: undefined

let symbol = Symbol("hello");

console.log(symbol) // output: Symbol(hello)
console.log(`the data type of symbol:`,typeof symbol) // output: the data type of symbol: symbol

let big_int = BigInt(10);

console.log(big_int) // output: 10n
console.log(`the data type of big_int:`,typeof big_int) // output: the data type of big_int: bigint

let obj = { name: "John", age: 30 };

console.log(obj) // output: { name: "John", age: 30 }
console.log(`the data type of obj:`,typeof obj) // output: the data type of obj: object

let arr = [1, 2, 3];
console.log(arr) // output: [1, 2, 3]
console.log(`the data type of arr:`,typeof arr) // output: the data type of arr: object
