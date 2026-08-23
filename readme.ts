//  let age=22;
//  age="twenty two";
//  console.log(age);


//  this can lead to hard debugging
// this problem is solved by type script

// typescript is father of js
// typescript is converted into js by compiler
// becuse out browser dont understand ts

// ts compiler =npm install -g typescript

// tsc {name of file} to convert tsc to js

// tsc {file name} --target es2016

// tsc --init (typescript configuration file)
// now just write tsc to compile

// after compiling it will even tell error line so the debugging will be easy

// let a:number=3;
// let c:string="kaneki";
// let d:boolean=true;

//agar koi functionality 2016 ke baad aye to type script error batadega
//otherwise hame pareshan rahte bc konsa use kar sakte hai konsa nhi

// let abc:null=null;
// let abc:undefined=undefined;

// tsc --watch (to get live output of ts to js)
//{ctrl + c} (to exit watch)

// typescript is type inference(automatically variable ka type 
// le lega jis data type se initialize kiya hai)

// let money:any; 
// money=10; now its type is any like js
// let val:unknown;(same as any but its safer  because we cannot apply operatin without consuming)

// let val:unknown=12;
// if(type of val=="number"){
//     console.log(val);
// }



// let arr:number[]=[1,2,3,4,55];
// let arr2:(string|number)[]=["rohit",32];


// tuples are array with fixed number of elements of specific types
// let tuple:[string,number]=["roghit",10]; 

//c++ is compile time language
// c++-->compile time-->machine code-->runtime-->cpu
//js was interpreted language(line by line execution)
//now js is just in time language (combination of compile time and interpreted)
// The engine first parses the code, then compiles frequently used
//  parts into machine code while the program is running.

//platform dependent language
//c++ is pdl as it produce machine code 
//js is platform independent as there is no machine code
//java is platform independet as there is byte code

//typescript is transpiler(convert from one language to another)

//  let obj:{name:string,class:number}={
//     name:"kaneki",
//     class:3
//  }

// let person :{name:string,age:number};
// person={
//     name:"gaurav",
//     age:32
// }

// type customer={
//     name:string,
//     age:number
// }

// let c1:customer={
//     name:"rohit",
//     age:12
// }

// best way to create object
// interface admin {
//     name:string,
//     age:number,
//     position:string,
//     aadhar?:number (this will be optional ,isko object me liko ya na likho)
// }
// interface admin{
//     id:number
// }

// let obj:admin={
//     name:"rohit",
//     age:32,
//     position:"manaer",
//     id:322
// }

// thats why interface is stronger and optimised


// interface customer{
//     name:string,
//     age:number,
//     balance:number
// }
 
// let obj:Partial<customer>={// ab chahe name age balance likho ya na likho
//     name:"gaurav"
// }

// Required<customer> ab kise ko bhi chor nhi sakte
// Readonly<customer> ab properties ko sirf read kar sakte hai change nhi
// obh2.name="mohan" (not allowed)

// interface teacher extends customer{//this will now take propery of customer in teacher
// school:string
// }

// array of object
// interface people {name:string,age:number};
//interface account {money:number}
// const arr:(people|account)[]=[{name:"rohit",age:20},{name:"mohit",age:18},{money:32}]



// function in ts

// function greet(a:number):number{
//     console.log(a);
//     return a+5;
// }
// greet(10);

// function meet(msg:string,val:number):void{
//     console.log(msg,val);
// }
// meet("ansi",23);


// function neet(msg:string="jitu"){
//     console.log(msg);
// }
// neet(); jitu print hoga
// neet("bittu")

// function gate(person?:string){
//     console.log(person||"mohan");
// }
// gate("rohit");
// gate();


// arrow function

// const sum=(a:number,b:number):number=>{
// return a+b;
// }
// console.log(sum(3,5));


// callback function
// type chill=(amount:number)=>void;
// function placeorder(order:number,callback:chill){
//   const amount=order+10;
//   callback(amount);

// }
// placeorder(13,(amount)=>{
//     console.log(amount);
// })

// rest parameter

// function total(...arr:number[]):void{
// let ans=0;
// arr.forEach((val)=>ans=ans+val);
// console.log(ans);
// }
// total(2,2,1,2,12,5)









                            //   classes in ts

// class person{
//      name:string;
//       age:number;

//     constructor(n1:string,n2:number){
//         this.name=n1;
//         this.age=n2;
//     }
//     fun():void{
//         console.log(this.name);
//     }
// }

// const obj1=new  person("rohti",20);
// console.log(obj1.fun());


// public private protected

// class customer{
//    public name:string;//class ke bahr acces ho gayega
//    private age:number;//only class ke andar only
//    protected balance:number;//class ke andar and extended classes
    
//     constructor(name:string,age:number,balance:number){
//         this.name=name;
//         this.age=age;
//         this.balance=balance;
//     }
// }
// class customer2 extends customer{
//     salary:number;
//     constructor(salary:number,name:string,age:number,balance:number){
//         super(name,age,balance);
//         this.salary=salary;
//     }
// } 

// const e1=new customer2(420,"rohit",20,222);

// class Customer {
//     public name: string;
//     private age: number;
//     protected balance: number;

//     constructor(name: string, age: number, balance: number) {
//         this.name = name;
//         this.age = age;
//         this.balance = balance;
//     }

//     showCustomerData() {
//         console.log(this.name);    // ✅ public
//         console.log(this.age);     // ✅ private
//         console.log(this.balance); // ✅ protected
//     }
// }

// class PremiumCustomer extends Customer {

//     constructor(name: string, age: number, balance: number) {
//         super(name, age, balance);
//     }

//     showData() {
//         console.log(this.name);    // ✅ public
//         console.log(this.age);     // ❌ private
//         console.log(this.balance); // ✅ protected   {5000}
//     }
// }

// const customer = new PremiumCustomer("Kaneki", 20, 5000);

// // Outside the class:
// console.log(customer.name);    // ✅ public
// console.log(customer.age);     // ❌ private
// console.log(customer.balance); // ❌ protected

// customer.showCustomerData(); // ✅
// customer.showData();         // ✅




// generics

// function value(a:(string|number)):(number|string){
// return a;
// }

// console.log(value(10));
// console.log(value("rohit"));

// //or

// function value<T>(a:T):T{
//     return a;
// }
// console.log(value<number>(10));
// console.log(value<string>("end"));




// interface admin<T>{
//     name:string;
//     age:number,
//     addhar:T
// }
// const obj1:admin<number>={
//     name:"kan",
//     age:20,
//     addhar:33
// }
// const obj2:admin<string>={
//     name:"ansh",
//     age:33,
//     addhar:"end"
// }



// Absolutely, Kaneki 😎. Generics are one of the most important TypeScript concepts.

// The simplest way to think about generics is:

// Generics let you write code that works with different types while still keeping type safety.

// Start with a normal function
// function identity(value: number): number {
//     return value;
// }

// This only accepts numbers:

// identity(10);       // ✅
// identity("hello");  // ❌

// You could make another function for strings:

// function identityString(value: string): string {
//     return value;
// }

// But that's repetitive.

// Generic solves this
// function identity<T>(value: T): T {
//     return value;
// }

// Here T is a type parameter.

// You can think of T as:

// "I'll tell you the type when I use this function."

// So:

// identity<number>(10);

// means:

// T = number

// and:

// identity<string>("hello");

// means:

// T = string

// The same function works for both.

// const a = identity<number>(10);       // number
// const b = identity<string>("hello");  // string
// TypeScript can usually figure out T itself

// You don't even have to write <number>:

// const a = identity(10);
// const b = identity("hello");

// TypeScript sees:

// identity(10)
//       ↓
// T = number

// identity("hello")
//       ↓
// T = string

// That's called type inference.

// Why not just use any?

// You might think:

// function identity(value: any): any {
//     return value;
// }

// This also accepts everything.

// But any throws away useful type information.

// With generics:

// function identity<T>(value: T): T {
//     return value;
// }

// const x = identity("hello");

// TypeScript knows:

// x → string

// So:

// x.toUpperCase(); // ✅
// x.toFixed();     // ❌

// With any, TypeScript wouldn't protect you properly.

// Generic arrays

// You'll see this a LOT:

// function getFirst<T>(arr: T[]): T {
//     return arr[0];
// }

// Now:

// const x = getFirst([10, 20, 30]);

// TypeScript understands:

// T = number
// x = number

// And:

// const y = getFirst(["a", "b", "c"]);

// gives:

// T = string
// y = string
// The mental model 🧠

// Don't think:

// T = some actual type

// Think:

// T = "placeholder for a type"

// function identity<T>(value: T): T
//                    ↑       ↑
//                 same type  same type

// Whatever type goes in, the same type comes out.

// number → T → number
// string → T → string
// boolean → T → boolean

// That's the basic idea of generics. Once you understand this,
//  generic arrays, interfaces, classes, and constraints become much easier. 🔥