//smicolon became optional in es6
//using let insted of var. and make varibles const as much as posible
// let age=23
// let name='sami'
// let model='EAGLE🦅🦅'

// template string
// Template literals are literals delimited with backtick (`) characters,
// allowing for multi-line strings, string interpolation
//interepolation means using placeholders of the form ${expression} to perform 
//substitutions for embedded expressions:) with embedded expressions,
// and special constructs called tagged templates.
//no concatnation at all
/* #################################*/
// let bio=`<p>tell this for all ${name}is 
// ${model} and his age is ${age}</p>`

// console.log(bio)

/* #################################*/



//DESTRUCTURING OBJECTS
/* #################################*/
// const sami={
//     name:'samuel',
//     lname:'getnet',
//     age:23,
//     education:'@DBU'
// }
// console.log(sami.name,sami.lname)
// //distructurring is instead of calling always by dot method use
// const {name,lname,age,education}=sami
// console.log(name,lname)
// //we can also give other name for object attributes
// const{name:na,lname:ln,age:old}=sami
// console.log(na, ln,old)
//not using object.attribute redundantly
/* #################################*/


//distructuring arrays(assignment)
//The destructuring assignment syntax is a JavaScript expression 
//that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.

// let array=['sami','getnet',23,'dbu','eagle']
// let [name,lname,...rest]=array
// //array[0] is become name and respectively
// console.log(name,lname)
// console.log(rest)

/* #################################*/



//object literals





// for of loop
// instead of using old for loop syntax use for of loop
//let arr=['sami','getnet','kassa']
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
//using for of
// for(let member of arr){
//     console.log(member)
    
// }
//by using for of loop we can iterate anything
// for(string of arr){
//     console.log(string)
//     //log out strings, char...
// }

 /* #################################*/

 //spread operators ...
 //The spread (...) syntax allows an iterable, 
 //such as an array or string, to be expanded in places
 // where zero or more arguments (for function calls) or 
 //elements (for array literals) are expected.

 //denotd by ...
// let arr=['sami','getnet','kassa']
// function fun(name,mname,lname){
//     let bio={
//         name:name,
//         mname:mname,
//         lname:lname
//     }
//     return bio
// }
// console.log(fun(...arr))


 /* #################################*/
 ////// rest operation is the same as spread and it is used as argument



 /* #################################*/
 // arrow function
 // instead of typing fuction milti times in named function 
 // arrow function makes it to assign func to variables

//  function sum(a,b){
//     return a+b;
//  }
//  //it arrow function is
//  let sum1=(a,b)=>{
//     return a+b
//  }
// console.log(sum1(1,2))
// in aroow funtion when sigle line of 
//retun happens it is better to use thi syntax
//   let sum1=(a,b)=>{//old one
//         return   console.log(a+b)
//      }
//   //better one
//   let sum2=(a,b)=>console.log(a+b)
//   sum2(2,3)

 /* #################################*/
/// default parameters




 /* #################################*/
 //includes
//The includes() method determines whether an array 
//includes a certain value among its entries, 
//returning true or false as appropriate.


 /* #################################*/ 
 /* #################################*/

 //import and export