//  let age=22;
//  age="twenty two";
//  console.log(age);


//  this can lead to hard debugging
// this problem is solved by type script

//  typescript is father of js
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

// typescript is type inference(acutomatically variable ka type 
// le lega jis data type se initialize kiya hai)

// let money; 
// money=10; now its type is any like js
// let val:unknown;(same as any but its safer  because we cannot apply operatin without consuming)

// let val:unknown=12;
// if(val=="number"){
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
// The engine first parses the code, then compiles frequently used parts into machine code while the program is running.

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


// generics

// function value(a:(string|number)):(number|string){
// return a;
// }

// console.log(value(10));
// console.log(value("rohit"));

// //or

// function value1<T>(a:T):T{
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