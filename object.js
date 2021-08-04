console.log('Object in javaScript');


// // enteries is little bit complex try after this
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();  

// console.log(f) // Array itrator return kargey gaa

// const object1 = {
//     a: 'somestring',
//     b: 42
//   };


//  const testObj = Object.entries(object1)

//  console.log(testObj) // ye object ka Array Return kare gaa Key value pare ka

// ======================================================================================

/*
Q.1  What are the possible ways to create objects in JavaScript;

Step-1 create object various Type;
step -2 add new property in various object



*/
// 1. object litral

// const obj1 ={
//   firstName: "sandeep",
//   lastName : "chauhan"

// }

// // console.log(obj1);  ok
// // console.log('============Add new property in litter object by 2 way=================== ')
// // step-2 
// // add new propert in litter object

// obj1.nickName = "sanjay" // type-1 
// obj1['fatherName'] = "Anand pal"; // type-2

// // console.log(obj1) ok

// // console.log('==================Add new method in object litral=================')

// obj1.fullDetails = function(){
    
//  return ` litter object details is name of person is ${this.firstName} And Last name is ${this.lastName} we Add nick name Also ${this.nickName}`;
  
// }


// obj1.fullDetails()
// ------------------------------------------------------------------

// 2. using Object.creat() method
// create object method create new object existing obj
// Note:- some dought
// const addObj2={
//   product: "Mobile",
//   model: "Redmi 9A"
// }

// let obj2 = Object.create(addObj2);

// let obj2 = Object.create({product: "Mobile", model: "Redmi 9A"})
// console.log(addObj2.product )
// console.log(obj2.product )
// accept result is {product: "Mobile", model: "Redmi 9A"}
 // why result show{} 

// step-2 Add new property

// obj2.price = 7500;

// console.log(obj2)
/*
Brief Details :- 
/*
ye inheratence ki tha kam karta hai like constructor object ki copy bnata hai jo uski property hai

// practicaly use nahi kya only read kya hai to code run karke dekha tha 


*/




// -----------------------------------------------------------------


// 3 assing {} brakets
// let obj3 = {};
// console.log(obj3)
// accept Result :- {}

// ------------------------
// Step -2  add property

// obj3.name = "pawan";
// obj3.lastname = "chauhan"

// obj3.fullName = function(){
//   console.log(`${this.name} ${this.lastname}`)
// }
// obj3.fullName();

// ----------------------------------------------------------------
// 4. constructor method

// const Obj4 = function(city, village){
//   this.cityName = city;
//   this.villageName = village;
// }

// // Add property and method

// Obj4.prototype.fullAddres = function(){
   
//   return `${this.cityName} in this city have ${this.villageName} and Area is ${this.area}`
// }

// Obj4.prototype.area = "Harryana"

// const person1 = new Obj4('gurgaon', 'jataula')

// console.log(person1.fullAddres())

// 5 class

// class Student {
//   constructor(school,currentClass ){
//     this.schoolName = school;
//     this.schoolClasss = currentClass
//   }
   


// }



// const student1 = new Student('Daksh', "shideshwear");
// console.log(student1);

/*
we can not add any extra property in class 


*/



// ==============================================================
// Q.26 What are classes in ES6
/*
In ES6 classes is the primarly syntac suger over the existnc javaScript protoType-based-inheretance


*/

/*
function Bike (model , color){
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function(){
  return this.model + ' bike has' + this.color + ' color';
}

// Wherse class

class Car {
  constructor(){
    this.color= color;
    this.model= model;
  }
  getDetails() {
    return this.model + ' bike has' + this.color + ' color';
  }
}

*/


// Q.124 How do you check if a key exists in an object

// const Obj10 ={
//   name : "sandeep",
//   lastName : "chauhan",

//   start : function(){
//     return this.name + this.lastName
//   }
// }

// Method -1 to check object have key or not
/*
in this method Object.key(Obj10) paranthis k ander object ye key return karna hai Array me to phir hum length ka use 
kare gey to key ki length batye gaa
*/

// if(Object.keys(Obj10).length <= 0){
//   console.log("object is Empty")
// }else{
//   console.log(Object.keys(Obj10))
// }


// Method -2 
/*
in opertor in javascript use in object for checking key if object have key which i have provide the key name 
then result truu otherwise false

*/
// console.log('start' in Obj10 )
// console.log( 'name' in Obj10 )
// console.log( 'toString' in Obj10 ) // ager hum kisi method or property ka name as key mention kare gey to bhi true show kare gaa kyo ki vo protoType me hai


// in class 

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   start() {
//     console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
//   }
// }

// const toyota = new Car('Toyota', 'Camry', '2018');

// console.log('starts' in toyota)

/*
class me instance k upper use karna hota hai

*/

//  In operator Array pr bhi same ashe hi work karta hai

// Method - 3
// This method is simler to in give the name of object propert in sting it rturn true  if property have otherwise false
//  console.log(Object.hasOwnProperty('name')) 

 

/*
Note:- Object.key(Obj10) and Object.getOwnPropertyName(Obj10) are same 

result return property name in Array
 console.log(Object.getOwnPropertyNames(Obj10))
 console.log(Object.keys(Obj10))
*/

// ===========================================================

// Q.126 How do you loop through or enumerate javascript object

// var object = {
//   "k1": "value1",
//   "k2": "value2",
//   "k3": "value3"
// };


/*
for loop throw the Object 

*/

// Method -1 for in loop

// for (const key in object) {
    
//   if(object.hasOwnProperty(key)){
//     console.log(key)
//   }

// }

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     console.log(key)
    
//   }
// }


/*
Note:- 
important Url for proto type chain call method
https://dev.to/aman_singh/what-s-the-deal-with-object-prototype-hasownproperty-call-4mbj

*/


// ================================================ 
// Q.127 How do you test for an empty object

/*
There are various method 

1. fon in loop se hasOwnProperty
2. Object.key(obj)
3. important
Object.entries(obj).length === 0 && obj.constructor === Object

obj.constructor === Object

Object.contructor = Object

iska matlab hai ki

object.contructor === Object

ye object litral object hai 

 console.log(object.contructor === Object) // false

 Oobject kisi ka bhi instance nahi hai kyo ki ye litral object hai


*/

// Method -3 
// ye Array ki form me key value return karta hai
/*
[k1 , value1]
[k2 , value3]
[k3 , value3]
*/
//  console.log(Object.entries(object).length === 0) // false kyo ki key hai

//  

//  if(Object.entries(object).length === 0){
//    console.log('Object is Empty')
//  }else{
//    console.log('Object hvae keys')
//  }


// ========================================================================
 // Object.contructor = Object

 /*
function Book() { 
  // unfinished code
} 

var myBook = new Book();  // myBook jo object hai vo Book ka instance hai


Determining the type of an instance

ager hume ye jana ho ki jo object hai vo kisi ka instance hai 

MyBook instance of Book // result true

myBook.contructor === Book // true

 */


// ====================================================
// What is an arguments object


/*
This is only question 
simple that when we pass any argument to function we get directly to function without passing params
in form of Array



Note: You can't apply array methods on arguments object. But you can convert into a regular array as below.
*/
// function argFun() {
  
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {   
//     sum += arguments[i]
//   }

//   return sum;
 
// }

// console.log(argFun(2,3,4,11))
//  var argsArray = Array.prototype.slice.call(arguments)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// console.log(fruits)

// const newfruitsList = fruits.slice(2);

// console.log(newfruitsList)

// var argsArray = Array.prototype.slice.call(2,3,4,11)

// console.log(argsArray)

// Note:- 

// =========================
// Q.192 How do you copy properties from one object to other
  
  const product ={
     id: 1,
     name: "mobile",
     price : 5678
  }
    

