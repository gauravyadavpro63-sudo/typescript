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

