console.log('About Prototype in javaScript');

/*
https://dev.to/aman_singh/what-s-the-deal-with-object-prototype-hasownproperty-call-4mbj
What’s the deal with Object.prototype.hasOwnProperty.call()?


======================
Q.1 What is Object.prototype?

 Object.prototype

 prototype.inherant is the one of the main piller of javaScript
 which allow the object inherant the property method on it's prototype

*/

var obj = { name: 'aman' }

console.log(obj)

// check this object have protoType

Object.getPrototypeOf(obj)

console.log(Object.getPrototypeOf(obj))

obj.hasOwnProperty("name") // true

// console.log(obj.hasOwnProperty("name")) 
/*
humne object bneya or humne ek method inheretant kyo prototype se jo prototype mai tha 
ye humne prototyp.inheretance se kya
*/

/*
point-2 when we created our literal Object obj, its prototype was set to 
Object.prototype .

matlab ki jab hum koi liter object bnate hai to vo sab property use kar sakta hai jo object ki prototype ki hoti hai

Object.prototype = obj.Object.prototype

*/

// veryfiy
//  The getPrototypeOf() is an inbuilt function in JavaScript which is used to check the prototype of an object that the user has created.

// console.log(Object.prototype === Object.getPrototypeOf(obj))  true;

/*
protoType chain look like

Obj --> Object.prototype ---> null

matlab phle method or property check kare gaa Obj me jab nahi mile gaa ----> to check kare gaa Objec.protoType - jab usme nahi mile gaa --- > null

when we try to acces a method or property on a Object the first look 
on it which i creat if the method is not present then look on Object.protoType

if the mathod or property is not present there then it return null

*/

var person = { name: 'peter' };

var PersonPrototype = {
    getName: function () {
        return this.name;
    }
};

// console.log(person)
// we can add new method of potoType for only person not for Object means person can acces other object not because it a person pototype not for object
Object.setPrototypeOf(person, PersonPrototype);

// person.getName() // peter


// ==============================
// 2. Borrowing a function
// ================================

function sayHello(name) {
    
console.log(`Greetings ${this.name}`) 
}

//ye Object sayHello function ko kaise Borow kare gaa
var a = {
    name: 'peter'
};

 // 'call' method is available on Function.prototype
// func.call(objRef, ...args);
sayHello.call(a) // Greetings peter 

sayHello.call(this ,'sanjay');


// ======================
// Object.create() accepts an argument which becomes
// the prototype for newly created object.
var b = Object.create(null); // Setting `null` as prototype for 'b'.  matlab Object.prototy

// console.log(Object.getPrototypeOf(b))  // result null
/*
matlab ki iska protoType nahi hai to islye ise pr 
b.hasOwnProperty('name');  use nahi hogi 

Error kya aayi gi phle object me dekhe gaa jo b hai usmai nahi phir protoType me jo hai hi nahi matlab 
ki error ye function ki thra call ho rha hai to aaye gaa ki ye function define nahi hai

ab jise object ka protoType nahi hoga to usme hu protoTyp k method kasie use kare

Object.hasOwnProperty kyo ki Object k pass to hai 

ye ek method hai call se hum kisi bhi method ko object k sath jod skte hai islye b kyo ki hum b ko jod rhe hai 
this ka use tab karte jab vo object vo hota jo define kya hai 
hasOwnProperty function hai iske perameter me hume value dani hoti hai 
jab hum call ko kisi function k sath call karte hai to us permeter me vo jaye gaa
Object.hasOwnProperty.call(b, 'name' ) ye work kare gaa
*/
console.log(b)

// Adding a 'name' property on the instance
b.name = 'peter';

// Using `hasOwnProperty` method would cause an error
// b.hasOwnProperty('name'); //🚫 throws a TypeError: a.hasOwnProperty is not a function

// Prototype chain
// b ---> null

// Will not break your code if 'a' has a null prototype. ✅
Object.prototype.hasOwnProperty.call(b, 'name'); // true; 




/*
Practics this agin for better understand  



*/
// Example -1 