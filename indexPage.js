/*

======================================================
       JavaScript Interview Questions & Answers
 URL: - https://github.com/sudheerj/javascript-interview-questions
=========================================================


Q.1 What are the possible ways to create objects in JavaScript;

Ans.1 There are many way to create Object in JavaScript
1. Object litteral

const Person ={
     firstName: "sandeep",
     lastName : "chhauhan",

     address: function(){
        return ` ${this.firstName} is from jataula and is sir name is ${this.lastName}`
     }


}

2. Object constructor :- Using new Object() syntax

let person = new Object();

:- Creating objects using new Object() and object literal does the same thing. For simplicity, readability and execution speed, use object literal.

2. constructor
:- Constructor function in JavaScript is used for creating new objects using a blueprint.
a function build another object is know as contructor function

function Persion (){
    this.firstName = fname,
    this.lastName = lname
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

3. class
 class Car {
    constructor(){
    this.firstName = fname,
    this.lastName = lname
     }

      getInfo() {
        console.log(this.maker + " costs : " + this.price);
    }
 }

4. Object Create Method

let persion1 = new Object.create({
    name: "sandeep",
    lastName : "chauhan"
})


=======================================================================
Q.2 What is prototype chain
=======================================================================

Ans.2 protoType chaining is used to build new type of object based own existed one

Employ --------> person-------->object.protoType ------> null;

jab bhi hum koi object bante hai javaScript additonal method property add kar deta hai automatic
jo vo sabhi property protoType me hoti hai

hum protoType se koi new function ya varible bna skte hai jise ki us object k sabhi instant k lie use kar skte hai

Note:- _proto_ _proto_ not clear

============================================================
Q.3 What is the difference between Call, Apply and Bind
===========================================================

Ans.3 by the help of these method we add any method to any object
when we pass the argument to any method call takes the argument as one by one
but in apply argument takes as an Array

they both call instentely
bind method return the copy of function

Example:- in bindCallApply.js


============================================
Q.4 What is JSON and its common operations
============================================

Ans.4 JSON is a text-based data which follow the javaScript object syntex. when we transmite the accros network just me transmite text file
JSON.parse(text) is use to convert the text to object
JSON.stringify(object) Stringification: converting a native object to a string so it can be transmitted across the network


===================================
Q.5 What is the purpose of the array slice method
===================================
Ans.5 slice return the shalow copy of portion of arry in to new array
from starting position and End postion not count
=====================================
Q.6 What is the purpose of the array splice method
=============================================
Ans.6 splic method change the existing Array by remoiving or adding Array

===================================================
Q.7 What is the difference between slice and splice
===================================================
Ans.7 this question is pending becuse i revise carfully all method of Array


=====================================================
Q.8 How do you compare Object and Map
=====================================================
Ans.8 the map method is advance and new i saw this after compliting all the question


===========================================
Q.9 What is the difference between == and === operators
============================================

Ams.9 == Equal to operator only compare the value not compare the data type
  === Equal to compare both value and data type

  Note:- some more case to learn deep when i got the point mention in this

  ===================================================
  Q.10 What are lambda or arrow functions
  ====================================================

  Ans.10 An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super,

=======================================================
Q.11 What is a first class function
======================================================
Ans.11 a Function that treted like a any other varible
the function takse a function as argument or return a function is called first class function

=========================================
Q.12 What is a first order function
=========================================

Ans.12 The first oder function is function that does't takes a function as argument or not return any function these type of function is first oder function

means simple function is first oder function

============================================
Q.13 What is a higher order function
============================================
Ans.13 Higher oder function is a function that's accept a function as argument or return a another function as return value

==========================================
Q.14 What is a unary function
=========================================
Ans.14  Those function accept exactely one argument are function are unary function

==============================================
Q.15 What is the currying function
=============================================
Ans.15 currying is work like clouse example in js file

====================================================
Q.16 What is a pure function
===================================================
Ans.16 The function that alway return the result if the same argument passed in it does not depend only any state or data change
during programing . it only depend only on the argument


// Example -1 pure function

function priceAfterTax(productPrice) {
    return (productPrice * 0.20) + productPrice;
   }

   it's depend on only argument

//Example- 2 Unpure function

var tax = 20;
function calculateTax(productPrice) {
 return (productPrice * (tax/100)) + productPrice;
}

it depend on outer varible that's why it's a unpure function

========================================================
Q.17 What is the purpose of the let keyword
=======================================================
Ans.17 Let is block scop varible it allow to declarier varible which have limited scop of a block statement

let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter);

===============================================
Q.18 What is the difference between let and var
===============================================
Ans.18 var have function scop        1. let have block scop
      2. Variables will be hoisted   2 Hoisted but not initialized

=============================================================
Q.19 not important
=============================================================

============================================================
Q.20 How do you redeclare variables in switch block without an error
===========================================================
Ans.20 example in switch.js

==========================================================
Q.21 What is the Temporal Dead Zone
==========================================================
Ans.21  when we decare let varible it is hosted but not in Global scop it hosted in script scop
that why we not exex let varible before inatelaze the value to them
when we exces the let varible before inatlize that's the temperolar zone

means the time between decareaction between initalization is temperolar Zone

========================================================================
Q.22 What is IIFE(Immediately Invoked Function Expression)
=======================================================================
Ans.22 Imedate Invoke function Expression
the function as soon as it is define

(function(){


})();

Note:- The primary reason to use an IIFE is to obtain data privacy because any variables declared
within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with
IIFE then it throws an error as below,


=================================================================================================
Q.23 What is the benefit of using modules
=================================================================================================
Ans.23 this artical is best i read after competeing this this example explain in jonas vido
Url :- https://medium.com/swlh/everything-you-need-to-know-about-javascript-modules-in-6-minutes-54922fea9880

===========================================================================================================
Q.24 What is memoization
===========================================================================================================
Ans.24 in merozie.js

===========================================================================================
Q.25 What is Hoisting
===============================================================
Ans.25 Hosting is a javaScript machanisim whear varible and function declation are move
on the top of there scop before code execution.
Remenber that javascript only hoists declaration, not initalisation

================================================================
Q.26 What are classes in ES6
==============================================================
Ans.26  In ES6 classe are syntitc suger over javascript proptotype inheratence

===================================
Q.27 What are closures
======================================
Ans.27 clouser is a combination of  function and bundel Together with refrence to its surunding states
In other words, a closure gives you access to an outer function's scope from an inner function.

=============================================================
Q.30 What is scope in javascript
===========================================================
Ans.30 scoping is determin where is varible , function, object are accesible when the code during Runtime
this mean scop of varible is controlr by the location of varible declation

in javascript have 2 scop
1. Global Scop
2. Local scop

note: https://medium.com/backticks-tildes/understanding-hoisting-and-scoping-in-javascript-39ea7b41e31

important Artical  Read again deep when watch namste javaScript

=============================================
Q.31 What is a service worker
===========================================
Ans.32 this is related to PWA
learn later first complet all the related javaScript question

====================================
Q.32 How do you manipulate DOM using a service worker
====================================================
Ans.32 Pwa

===============================
Q.33 How do you reuse information across service worker restarts
======================================================
Ans.33 PWA

========================================================
Q.34 What is IndexedDB
========================================================
Ans.34 this topic is large topic i learn later

===================================
Q.35 What is web storage
===================================
Ans.3 https://medium.com/@codebyamir/web-storage-api-localstorage-sessionstorage-c464474feab7

web stroge is an API that's proved machanisem by browser to store data in form of key value pare in the client
side

for store data we can use
1. cookies
2. localstorage
3. session

==================================
Q.36 What is a post message
====================================
Ans.36 when a web application needs to intract with another web application and you want to send data message betwwen
window in a safe way
the window postMessage() is a method that allow us to send to recive data message between two window.

Note:- it's a diffrenent topic

================================================
Q.37 What is a Cookie
=================================================
Ans.37 it a piecs of data that store in our browser cookies are save in key/value pair

=================================
Q.38 Why do you need a Cookie
===============================
Ans.38 Real world Example:-
when user visite webite store user information in cookies
user next time user visite the page cookies reember the user profile

=====================================
q.39 What are the options in a cookie
=====================================
Ans.39 By default cookies is deleted when the browser is closed
but we can change the bhavior of this by seting expire Time

By default, the cookie belongs to a current page. But you can tell the browser
what path the cookie belongs to using a path parameter.

document.cookie = "username=John; path=/services";

==============================
Q.40 How do you delete a cookie
================================
Ans.40 we can use expires and set the current add mili second then it's expires

==============================================================================
Q.41 What are the differences between cookie, local storage and session storage
===============================================================================
Ans.41 ,42 on indexDB.js

==================================================
Q.45 What is a storage event and its event handler
==================================================
Ans.46 i didn't got this try after this finished

========================================
Q.47 Why do you need web storage
========================================
Ans.47 web storge is use to store data in browser without affecting website.
the information never transfer to the server

Example:- we store some value of user when they go to page and change the page degine on the basise of storege
we didn't send data to server

=================================================
Q.48 How do you check web storage browser support
=================================================

Ans.48
if(typeof(Storage)!== "undefined"){
    alert('storage')

    write here code localstorge or session storge
}else{
  Ager storage sport nahi karta to koi dura tarik likna hoga
    alert('No storage')
};

=========================================
Q.49 How do you check web workers browser support
================================================
Ans.49 if (typeof(Worker) !== "undefined") {
  // code for Web worker support.
} else {
  // Sorry! No Web Worker support..
}

===============================
Q.49 , 50 Give an example of a web worker
===================================
Ans.49 this is the part of PWA

==================================
Q.51 What is a promise
============================
Ans.51 A promise is an object that produce a single value some time in future either resolve or reject
example if any ishu in network it produces reject

===================================
Q.52 Why do you need a promise
==============================
Ans.52 promise use to handel asyncronus operation by providing the alternative method of call back and reduce the call back hell

==================================================
Q.53 What are the three states of promise
=================================================
Ans.53  There are 3 stage in promise
1. pending:- his is an initial state of the Promise before an operation begins || ye promise operation start hone ki stage hai.
2. reject :- This state indicates that the operation did not complete. In this case an error value will be thrown.
3. Resolve:- This state indicates that the specified operation was completed. || matlab humara opertion complet ho gya.

===============================================================================================================================
Q.54 What is a callback function.
==============================================================================================================================
Ans.54 a function pass to another function argument and it execute is delayed until that function code execution.
=========================================================
Q.55 Why do we need callbacks
=========================================================
Ans.55 javaScript is a event driven langauge javaScript doesnt wait it excuted the code instantly.
when we Required these type of seneriou the first task of function is execute after taht function call that's why call back function require
======================================================
Q.56 What is a callback hell
=========================================================
Ans.56 call back is a anti-patern it's makes the code complex when we perform the nested asyncrnous opertaion one after other.

======================================
Q.57 ,58,59,60 What are server-sent events
========================================
Ans.57 PWA

===============================================
Q.62 What is callback in callback
===============================================

Ans.62 we nest one call back function to another function to the code sequncely

===========================================
Q.63 What is promise chaining
==========================================
Ans.63 in promise chaning If we pass another promise as a callback to the parent promise
it will wait until the child promise get relove.

==================================
Q.64 What is promise.all
===================================
Ans.64 url for Example :- https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/

Promise.all() that takes a promise an Array of promise as an input the it gets resolve when all the promise get resolve
or any one of them gets reject

============================================================
Q.64 What is the purpose of the race method in promise
===========================================================
Ans.64 promis.rece([]) takes the promise as array
those promise first resolve or reject the code is execute.

=============================================
Q.65 promise.any
=========================================
in this method which promise is resolve first the code is execute reject promise code is not execute

==============================================================================
Q.66 What is a strict mode in javascript
==============================================================================
Ans.66 Strict Mode is a new feature in ECMAScript 5
that allows you to place a program, or a function, in a “strict” operating context.
This way it prevents certain actions from being taken and throws more exceptions

======================================================
Q.67 Why do you need strict mode
======================================================
Ans.67 Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors.

=============================
Q.68 How do you declare strict mode
===================================
Ans.68 he strict mode is declared by adding "use strict"; to the beginning of a script or a function. If declared at the beginning of a script,
it has global scope.

================================
Q.69 What is the purpose of double exclamation
================================
Ans.69 it show the result in form of true or false
  if any result have undefine ,0 , null by the help of Doubel notaion it return true false result

  ==================================
  Q.70 What is the purpose of the delete operator
  =============================================
  Ans.70 delete keyword delete the property as well as value

  ==================================
  Q.71 What is the typeof operator
  ==================================
  Ans.71 we can use the JavaScript typeof operator to find the
  type of a JavaScript variable. It returns the type of a variable or an expression.

=====================================
Q.72 What is undefined property
=====================================
Ans.72 The undefined property indicates that a variable has not been assigned a value, or not declared at all. The type of undefined value is undefined too.
======================================
Q.73 What is null value
========================================
Ans.73 Null value represent the inital object is empty

======================================================
Q.74 What is the difference between null and undefined
======================================================
Ans.74
Null
1.Converted to zero (0) while performing primitive operations
-------------
Undefined
1. Converted to NaN while performing primitive operations

========================================
Q.75 What is eval
======================================
Ans.75 evel is dngruges only learn jut shake of know

================================================
Q.76 What is the difference between window and document
=================================================
Ans.76
window
1. It is the root level element in any web page
2. By default window object is available implicitly in the page
3. It has methods like alert(), confirm() and properties like document, location

----------------------------------------
document
1. It is the direct child of the window object. This is also known as Document Object Model(DOM) Examle window.document
2. we can access it via window.document or document
3. It provides methods like getElementById, getElementsByTagName, createElement etc

===============================================================
Q.77 How do you access history in javascript
==============================================================
Ans.77
 window.history.back(); for previous history url
window.history.forward(); for next to history


====================================================
Q.78 How do you detect caps lock key turned on or not
=====================================================
Ans.78 e.getModifierState("capsLook");

==================================================
Q.79 What is isNaN
================================================
Ans.79 isNaN is use to is not a number
if the given value is any string is give the result true if value is number it give us false

=========================================================================================
Q.80 What are the differences between undeclared and undefined variables
=========================================================================================
Ans.80 if we not declare the varible and use Throw error undeclare
if we declare varible and not initalize value

=======================================================================================
Q.81 What are global variables
=======================================================================================
Ans.81 a varible decalear outside the function or declarer with window which can be assce from any function

=================================================================
Q.82 What are the problems with global variables
================================================================
Ans.83 This is because global variables are easily overwritten by other scripts.

==================================================================
Q.83 What is an event flow
================================================================
Ans.83 Event flow is the oder in which in which event recive in on web page
when we click on event which is attach to nested elemt like we click on child or perant
the wevent flow work on two ways
1. bubling is botom to top flow
2. capturing :- is top to botom event flow

// ==========================================
Q.86 What is event bubbling
===========================================
Ans.86 Event bubling is flow of event bootom to top till the outermost DOM element.
=====================================
Q.87 What is event capturing
=====================================
Ans.87 Event capturing is top to bootom until the innermost DOM elemnt;

======================================================
Q.88 How do you submit a form using JavaScript
========================================================
Ans.88 get the form by using document query and use submit for form submit;

=======================================================
Q.89 How do you find operating system details
========================================================
Ans.89 console.log(navigator.platform);

=============================================
Q.90 What is the difference between document load and DOMContentLoaded events
===================================================
Ans.90 DOMContent load fire when Html content load with out load css, image
but load is fire when all css image and all dependence load

==========================================================
Q.91 What is the difference between native, host and user objects
============================================================
Ans.91 native object are object that the part of javaScript like math, regex,string'
host object are object that provide by browser like window , DOM node
use object are object that are create by own like user profile details

==============================================
Q.92 What are the tools or techniques used for debugging JavaScript code
======================================
Ans.92 console , google Dev tool

========================================================================
Q.93 What are the pros and cons of promises over callbacks
========================================================================
Ans.93
pros means benifites
1. it avoid the call back hell
2. Easy to write parllel asyncronus  sequence code promise.all;

cons:-
1. It makes little complex code
2. You need to load a polyfill if ES6 is not supported

=======================================================
Q.94 What is the difference between an attribute and a property
======================================================
Ans.94
<input type="text" value="Name:">

Attrubut:- type , value is a attribute

property are - name, text

====================================
Q.95 What is same-origin policy
===================================
Ans.95 the same-origin policy is critical security machanisim that restric how document or script loaded by one orign from the other
Pendding i will study when i test

===================================================
Q.96 What is the purpose of void 0
==================================================
Ans.96 void

mostely void ka use Ancor Tag k sath hota hai
jab hum kisi anchor kag pr click karte hai to url to reiect karte hai

void ka use karne se abchor tag work to kare gaa pr url ko rediect nahi kare gaa

=============================================
Q.97 Is JavaScript a compiled or interpreted language
==================================================
Ans.97 javaScript is interperated langauge it execute the code line by line

===========================
Q.98 Is JavaScript a case-sensitive language
=========================================
Ans.98 yse javaScript is case-censtive

====================================
Q.99 Is there any relation between Java and JavaScript
=====================================================
Ans.99 no realtion between java and javaScript there are both of diffrent langauge
but both of object orented programing langauge

========================================
Q.100 What are events
========================================
Ans.100 Event are thing that happen on HTML and when javascript is use in HTML it react on the basise of event

===========================
Q.101 What is the use of preventDefault method
===================================
Ans.101 preventDefault cancle the default bhaviour of event
Note:- Remember that not all events are cancelable.

========================================
Q.102 What is the use of stopPropagation method
===========================================
Ans.102 stopProtogation is use to stop evntent UseCaption means stop the event bubbling and event capturing

==========================================
Q.104 What are the steps involved in return false usage
===========================================
Ans.104 to prevent the default bhaviour of event
by using preventDefault()
2. stopProgation()

=================================
Q.105 What is BOM
===================================
Ans.105 Browser Object Model allow to  javascript talk to browser
window Object is the very root element every thing else attche to it

=======================================================
Q.106 What is the use of setTimeout
=======================================================
Ans.106 setTimeOut is use to call the function spacifie special number of milisecond

===============================================
Q.107 What is the use of setInterval
================================================
Ans.107 setTInterver is use to call the function at spacify interver in milisecond

===========================================================
Q.108 Why is JavaScript treated as Single threaded
===========================================================
Ans.108 javasCript Engine have only one call Stack and only one time one code execute
multipal code is not executed.

=================================================
Q.109 What is an event delegation
==================================================
Ans.109 Event deligation popular matologey in javaScript
it allow to add addEventListner to one parent and avoid add many event listing to spacify node
example:- ok

=============================================================================================
Q.110 What is ECMAScript
============================================================================================
A.110 only Thory for knowlege i lerned after this
===========================================================================================
Q.111 What is JSON
===========================================================================================
Ans.111 json is a javaScript extence text based data which structor like javaScript object
when we interchanging the data client to server data transfer in form for text which is json

=====================================================================
Q.112 What are the syntax rules of JSON
=====================================================================
Ans.112
1.The data is in name/value pairs
2.The data is separated by commas
3.Curly braces hold objects
4.Square brackets hold arrays

======================================================================
Q.113 What is the purpose JSON stringify
======================================================================
Ans.113 the purpose of jso.stringfyer is to convert the object data in to string for transmite the data beeten two server.

=============================================================
Q.114 How do you parse JSON string
=============================================================
Ans.114 when we transmite the data in to server the data in form of string and we convert in object by using JSHON.parse();

===================================================
Q.115 What is the purpose of clearTimeout method
==================================================
Ans.115 The clearTimeOut() is use to clear the time
when we use setTimeOut it return the value and store in valible

the varible pass to the clearTimeOut to clear TimeOut

==========================================================
Q.116 What is the purpose of clearInterval method
==========================================================
Ans.116 the setInterval return the value store in varible

we use cleanInterval to clear the interveal

========================================================
Q.117 How do you redirect new page in javascript
=========================================================
Ans.117 history.location.hrf = "/about"
==================================================
Q.120 How do you check whether a string contains a substring
===========================================================
Ans.120  use inclue means this string is inclued in the string
2. indexOf string !== -1 :- means ager koi string hoga to index number return kare gaa varna -1
matlab ki ager -1 nahi to string hoga

====================================
Q.121 How do you validate an email in javascript
===========================================
Ans.121 By the help of REgex

===================================================
Q.122 How do you get the current url with javascript
====================================================
Ans.122 window.location get the complete url

==============================================
Q.123 How do get query string values in javascript
==============================================
Ans.123 var string = new URLqueryPar(window.location.serach);

use the methods console.log(string.toString())

=================================================
Q.124 How do you check if a key exists in an object
==================================================
Ans.124 There are mainly two method which i used
1. Obj.hasOwnProperty("name");
2."name" in Obj
3. Obj.name === undefidne;

================================
Q.125 How do you loop through or enumerate javascript object
==========================================
ans.125 for in loop

=====================================
Q.127 How do you test for an empty object
==========================================
Ans.127 Object.js try after this
i can't underStand

====================================================
Q.128 What is an arguments object
====================================================
Ans.126  https://www.freecodecamp.org/news/javascript-example/
liitle bit tricky

===================================================
Q.127 How do you make first letter of the string in an uppercase
====================================================
Ans.127 ok
===========================================================
Q,130 What are the pros and cons of for loop
=============================================================
Ams.130
for loop intate every value
You can use break and continue flow control statements

Note:- in javascript notes

====================================================
Q.131 How do you display the current date in javascript
====================================================
Ans.132 again practic on dates
===================================================
Q.132 How do you compare two date objects
===================================================
Ans.132 date topic

======================================================
Q.133 How do you check if a string starts with another string
======================================================
Ans.133 use StartWith

=========================================================
Q.134 How do you trim a string in javascript
============================================================
Ans.135 use trim methid


==================================================
q.135 How do you add a key value pair in javascript
===================================================
There are two main possiblity to add new key value pair in Object
var object = {
    key1: value1,
    key2: value2
}

object.key3 = "value3";
obj["key3"] = "value3";

========================================================
Q.136 Is the !-- notation represents a special operator
========================================================
A.136  save artical before this question

======================================================
Q.137 How do you assign default values to variables
=====================================================
Ans.137  var a = b || 23;

if b value is null or undefinend means falsy value the a assing 23 which is default value

====================================================
Q.138 How do you define multiline strings
===================================================
Ans.138 we use temlate string before template string we use \ to seprate line in string

=======================================================
Q.139 What is an app shell model
====================================================
use salton package lazzy load or give style when page load show the saltion

========================================================================
Q.140 Can we define properties for functions
=======================================================================
Ans.141 later

=========================================
Q.141 What is the way to find the number of parameters expected by a function
=============================================================================
Ans. argument.length
2. sum().length

=========================================================================
Q.142 What is a polyfill
=========================================================================
Ans.142 polyfile convert the moder javaScript code to older

======================================
Q.143 What are break and continue statements;
===========================================
Breack :- whean we loop and put soome condition
whean code reach that condition stop the loop

Continu: - when loop reach that condition skip the given ccondition Then continu


====================================================================
Q.144 What are js labels
====================================================================
Ans.144 lable.js
URL:- https://www.freecodecamp.org/news/javascript-loops-label-statement-continue-statement-and-break-statement-explained/

==================================
Q.145 What are the benefits of keeping declarations at the top
==========================================
Ans.145
Gives cleaner code
It provides a single place to look for local variables
Easy to avoid unwanted global variables
It reduces the possibility of unwanted re-declarations

========================================================
Q.146  How do you define JSON arrays
========================================================
Ans.146
JSON array are writen inside the Brackets and array containes javaScript Objects

"users":[
  {"firstName":"John", "lastName":"Abrahm"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Shane", "lastName":"Warn"}
]

=======================================================
Q.149 How do you generate random integers
=======================================================
Ans.149

Math.floor(Math.random() * 10) + 1;

=======================================================
Q.151 What is tree shaking
=======================================================
Ans.151 when we use import export module in javaScript most of codes are usused code floating around
Tree shaking or dead code elemation means that unused modules will not included in bundel during the procces of
the build process

webpack detect the unused code and mark as a unused code but it won't remove the code webpack relies on minfiers
to cleanup ded code

Popularized by Rich Harris’ Rollup.js module bundler, tree-shaking is the ability
to only include code in your bundle that is being used.


for clenUp code use Uglifyjs plugin.

========================================
Q.152 What is the need of tree shaking
=========================================
Ans.152

Example :- we have 2 files modul.js , index.js

modul.js
export const sayHello = name => `Hello ${name}!`;

export const sayBye = name => `Bye ${name}!`

have 2 function

-------------------------
index.js
import { sayHello } from './module';

sayHello('World');

only import 1 function

sayBye is exported but never imported. Anywhere. Therefore, due to tree-shaking, it won't be included in your bundle:

tre-shaking k waja se ye bundel me include nahi hoga

URL :- https://www.freecodecamp.org/news/tree-shaking-es6-modules-in-webpack-2-1add6672f31b/

=====================================================================================
Q.153 Is it recommended to use eval
===============================================
Ans.153 no. it allow arbitrary code to run which cause a security resion problem
as we know evel is use to run text as code

=================================
Q.154 ,155 ,156 ,157,158,159,160

These question are related to regulater expression
===============================

================================
Q.161 How do you change the style of a HTML element
==================================================
Ans.161 documnet.getElementById("demo" ).style.fontSize = "30px"
document.getElementById("title").className = "custom-title";

=================================
Q.162 What would be the result of 1+2+'3'
=======================================
ans.162 33

=========================================
Q.163 What is a debugger statement
===========================================
Ans.163 The debugger keyword is used in the code to force stop the execution of the code at a
 breaking point and calls the debugging function.
 The debugger function is executed if any debugging is needed at all else no action is performed.

 ============================================
 Q.164 What is the purpose of breakpoints in debugging
 ===================================================
 Ans.164 You set breakpoints wherever you want to pause debugger execution.

 ============================================
 Q.165 Can I use reserved words as identifiers
 ============================================
 no , reserv Kyword is not allow

=========================================
Q.166 How do you detect a mobile browser
========================================
Ans.166 navigator.userAgent.match(/window/)

========================================================
Q.167 How do you get the image width and height using JS
=========================================================
Ans.168 test ok learn aboy new Image();

=========================================================
Q.168 How do you make synchronous HTTP request
=========================================================
Ans.168

function httpGet(theUrl)
{
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttpReq.send( null );
    return xmlHttpReq.responseText;
}

Note:- revise agin hhtp request

========================================================
Q.170 How do you make asynchronous HTTP request
=========================================================
Ans.169
function httpGetAsync(theUrl, callback)
{
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function() {
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
            callback(xmlHttpReq.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

=====================================================
Q.171 How do you convert date to another timezone in javascript
============================================================
Ans.171 date Topic

=======================================================
Q.172 What are the properties used to get size of window
=======================================================
Ans.172 window.innerHeight

========================================================
Q.173 What is a conditional operator in javascript
========================================================
Ans.173 ternary operator

=========================================================
Q.174 Can you apply chaining on conditional operator
========================================================
Ans.174 yes,  i try but not understand in deep if else condition

=======================================================
Q.175 What are the ways to execute javascript after page load
=======================================================
Ans.175 use onlod function

user in body onload="script()" ;

======================================================
Q.176 What is the difference between proto and prototype
======================================================
Ans.176 see other artical to explain beeter

=======================================================
Q.177 Give an example where do you really need semicolon
=========================================================
Ans.177 not clear

===================================================
Q.178 What is a freeze method
=================================================
Ans.178 freez method is use to freez the object when we use freez we can not add new property in to rhe object
const obj = {
  prop: 100
};

Object.freeze(obj);
obj.prop = 200; // Throws an error in strict mode

console.log(obj.prop); //100

Note: It causes a TypeError if the argument passed is not an object.

================================================================
Q.179 What is the purpose of freeze method
=============================================================
Ans.179 It is used to make an object immutable.

============================================================
Q.180 Why do I need to use freeze method
============================================================
Ans.181 in object orented most of api which is not to be use for modefiy we can use freez method

=====================================================
Q.181 How do you detect a browser language preference
======================================================
Ans.181 navigator.language;

====================================================
Q.182 How to convert string to title case with javascript
========================================================
Ans. first latter capital karne hai ok

===================================================
Q.183 How do you detect javascript disabled in the page
=====================================================
Ans.183 use <noscript> </noscript>  when javaScript is disable the code is run which is in noScript
Note:- how can use in real world test


=================================================================
Q.184 What is a rest parameter
==================================================================
Ans.184 ...rest parameters get all the given argument in a function

=================================================================
Q.185 What happens if you do not use rest parameter as a last argument
=================================================================
Ans.185 ...rest paramter sholud be last parmeter as it job it collect  all the  remaing Argument
===================================================================
Q.186 What is a spread operator
=======================================================
Ans.186 sprated operation allows itrable to be expanded  to single argument

function calculateSum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

console.log(calculateSum(...numbers)); // 6

==========================================================
Q.187 How do you determine whether object is frozen or not
==========================================================
Ans.187 Object.isFrozen(personObject);

============================================================
Q.188 How do you determine two values same or not using object
============================================================
Ans.188 Object.is(window , window) true
Object.is([], []) false

====================================================
Q.189 What is the purpose of using object is method
====================================================
Ans.189
It is used for comparison of two strings.
It is used for comparison of two numbers.
It is used for comparing the polarity of two numbers.
It is used for comparison of two objects.

=================================================
Q.190 How do you copy properties from one object to other
==================================================
Ans.189
Object.assign(target , soucce)

const newObject = Object.assign(target , soucce)
===========================================
Q.191 What are the applications of assign method
==========================================
Ans.191 It is used for cloning an object.
It is used to merge objects with the same properties.

================================================
Q.192 What is a proxy object
===============================================
Ans.193 pending new Topic

=============================================
Q.193 What is the purpose of seal method
==============================================
Ans.193 seal method prevent add new propert in object
but we can change existing property value
it makes object immutable

===============================================
Q.194 What are the differences between freeze and seal methods
================================================
Ans. freeze not add or change anything in object
but seal can change the property value

=======================================================
Q.195 How do you determine if an object is sealed or not
=========================================================
Ans.196 use isSeal(personObject);

=====================================================
Q.196 How do you get enumerable key and value pairs
=====================================================
Object.entries

================================================
Q.197 What is the main difference between Object.values and Object.entries method
================================================
Object.value return only array of value
object.enteties retiurn Key value pairs of arrays

====================================================
Q.201 How can you get the list of keys of any object
===================================================
Ans.201 Object.key(personObj)
==================================================
Q.202 How do you create an object with prototype
=================================================
Ans.202
The Object.create() method is used to create a new object with the specified prototype object and properties


 const user = {
   name: 'John',
   printInfo: function () {
     console.log(`My name is ${this.name}.`);
   }
 };

 const admin = Object.create(user);

 admin.name = "nick"; // Remember that "name" is a property set on "admin" but not on "user" object

 admin.printInfo(); // My name is Nick
 user.printInfo() // My name is john

 ye mere hisab se construtor ki thra kam kar rha hai

 ====================================================
 Q.203 What is a WeakSet
 ====================================================
 Ans.203 i read the artical this is related to object
 i read agin when solve all the object question

 ======================================================
 Q.204 What are the differences between WeakSet and Set
 ======================================================
 Ans.204 object topic

 ===================================================
 Q.205 List down the collection of methods available on WeakSet
 =============================================================
 Ans.205 object Topic

 ========================================================
 Q.206 What is a WeakMap
 =========================================================
 Ans.206 Object Topic

 =============================================
 Q.207 What are the differences between WeakMap and Map
 ==============================================
 Ans.207 Object Topic

 ==============================================================
 Q.208 List down the collection of methods available on WeakMap
 ===============================================================
 Ans.208 object Topic

 =========================================================
 Q.209 What is the purpose of uneval
 ========================================================
 Ans.209
 Notic:- This feature is non-standard and is not on a standards track. Do not use it on production sites
 facing the Web: it will not work for every user. There may also be large incompatibilities between
 implementations and the behavior may change in the future.

 ===============================================
 Q.210 How do you encode an URL
 =============================================
 Ans.210 encodeURL for url encodeing
 decodeURL use for decoding url

 ====================================================
 Q.212 How do you print the contents of web page
 =================================================
 ans.212 window.print()

 ==================================================
 Q.213 What is an anonymous function
 =================================================
 Ans.213
 1. cosnt myFun = function(){

 }

 2. (function(){

 })()

 function (optionalParameters) {
  //do something
}

const myFunction = function(){ //Anonymous function assigned to a variable
  //do something
};

[1, 2, 3].map(function(element){ //Anonymous function used as a callback function
  //do something
});

======================================================================
Q.215 What is the precedence order between local and global variables
====================================================================
Ans.215 under stand this question when revise varible

==============================================================
Q.216 What are javascript accessors
=============================================================
Ans.216 Object Topic

===========================================================
Q.217 How do you define property on Object constructor
==========================================================
Ans.217 Objet Topic
=======================================================
Q.218 What is the difference between get and defineProperty
======================================================
Ans.218 Object Topic

=================================================
Q.219 What are the advantages of Getters and Setters
==============================================
Ans.219 Object Topic

==============================================================
Q.219 Can I add getters and setters using defineProperty method
==============================================================
Ans.219 Object Topic

==============================================================
Q.220 What is the purpose of switch-case
=============================================================
Asn.220 The switch case statement in JavaScript is used for decision making purposes.
In a few cases, using the switch case statement is going to be more convenient
than if-else statements. The syntax would be as below,

==================================================================
Q.221 What are primitive data types
==================================================================
Ans.221 primitive data type is a value which have no method or property

1.straing
2.boolen
3.number
4.undefined
5.null
6.symbole
7.bigint

==============================================================
Q.222 What are the different ways to access object properties
==============================================================
Ans.222
object.name
object["name"]
object[name]

=========================================
Q.225 What are the function parameter rules
=============================================
Ans.225 ok but chek topic again for explain beeter

================================================
Q.226 What is an error object
=============================================
Ans.226 error object build in error object provide the error information when error occur
it has two value
1. name
2. message

================================================================
Q.227 When you get a syntax error
==================================================================
Ans.227 when we execute the code make the syntex mistak in code
it throw the sytex error

===================================================================
Q.228 What are the different error names from error object
===================================================================
Ans.228 There are 6 erors
1. syntex error
2. type Error = when opertion is performing with wrong data Type
 Exampel = let num = 2 num.toUpperCase() this method for string not for number
3. eval Error
4. refrence error
5. URI error
6.Range Error

==================================================
Q.229 What are the various statements in error handling
======================================================
Ans.229
try catch , throw

======================================================
Q.230 What are the two types of loops in javascript
=====================================================
Ans.230
1. Entry Controll Loop :- test condition before enter in loop
2. Exit Controll Loop : test condition after enter in loop

===========================================================
Q.231 What is nodejs
==========================================================
Ans.231 Node js is javaScript run time enviroment which run the javascript out side the browser
===============================================
Q.232 What is an Intl object
=================================================
Ans.232 By adapting our apps for different languages and countries,
we provide a better user experience. It’s simpler for users to deal
with known notations for dates, currencies, and numbers.

=================================================================
Q.233 What is an Iterator
=================================================================
Ans.233 itrator is an object which define a sequence return a value upon it termination
It implements the Iterator protocol with a next() method
which returns an object with two properties:
the next value is done true

===================================================
Q.235 What is an event loop
========================================
Ans.235 Event loop :- when we run our code asyncronosly event loop is one of them play the to make code asyncronosly

when we call asyncronus code it taks call back function it register on web Api
when code goes to execute it go to callBack quey

and call stck run code one by one event loop continusly moniter the call back quey and call stack
when call stack empty by the help of Event Loop code goes to call stack and execute


====================================
Q.236 What is call stack
===================================
Ans.236  A call stack is a mechanism for an interpreter
so we can store the latest function call at the top
one the function is execute the last execution is remove


==============================================
Q.237 What is an event queue
===========================================
Ans.237 Event query is resposible to send new function to event loop
maintain the correct sequenc which all operation be sent for execution

===============================================
Q.238 What is a decorator
===============================================
Ans.238 Seprate Topic

===============================================
Q.239  What are the properties of Intl object
================================================
Ans.240 intl topic

===================================================
Q.240 What is an Unary operator
================================================
Ans.241 when we add + befor varible is a urnery operator
which is use to convert string to number
when any string is like number it convert in to number
if any string is not a number nan  not a number

=======================================================
Q.241 How do you sort elements in an array
=======================================================
Ans.241 Change - 1

=================================================================
Q.242 What is the purpose of compareFunction while sorting arrays
==================================================================
Ans.242 sort method of Array sort the array Element on the basice of string alpha bate method
when we use on number the result show wrong
by the help of compare method show the result Right

======================================================
Q.243 How do you reversing an array
=======================================
Ans.243 revers method use to revers the Array Element

=====================================================
Q.244 How do you find min and max value in an array
===================================================
Ans.244 chalange -3
URL :- https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa;

==============================================================
Q.245 How do you find min and max values without Math functions
===============================================================
Ans.245 5 Methods Chalange -4

=======================================
Q.246 What is an empty statement and purpose of it
==============================================
Ans.246 pending
=============================================
Q.247 How do you get metadata of a module
============================================
Ans.247 pending

====================================
Q.248 What is a comma operator
=====================================
Ans.248 commin operator use to evlaute operation left to right;

========================================
Q.254 What is an object initializer
=======================================
Ans.254  about object how it initalize

var initObject = {a: 'John', b: 50, c: {}};

console.log(initObject.a); // John

=============================
Q.255 How do you get the prototype of an object
=====================================
Ans.255 pending

=============================
Q.256 What happens If I pass string type for getPrototype method
==============================
Ans.256 Pending

===========================
Q.257 to 264
=======================
Ans.257 Object Topic

==============================
Q.265 What Is Obfuscation in javascript
============================
Ans.265 new Topic

===========================
Q.275 Is enums feature available in javascript
=============================================
Ans.275 no , but diffrent method
it is long Topic learn later

==========================================
Q.280 , 281, 282 How do you list all properties of an object
==========================================
Ans.276 Object Topic

===========================
Q.283 How do you extend classes
=============================
Ans.283 By Calling super

==================================
Q.284 How do I modify the url without reloading the page
====================================
Ans.284 The window.location.url property will be helpful to modify the url but it reloads the page. 
HTML5 introduced the history.pushState() and history.replaceState() methods, which allow you to add
and modify history entries, respectively. For example, you can use pushState as below,
===========================================================================
Q.285 How do you check whether an array includes a particular value or not
===========================================================================
Ans.285 Array.include() return true or false

==================================================
Q.286 How do you compare scalar arrays
============================================
Ans.286 Scaler Array means two same Array 
ki use Array me sabhi value same hai to dusre me hai 
vo aage pech bhi ho skti hai

use arry.length to compare 
Arry.every method and compare 

===============================================
Q.287 How to get the value from get parameters
================================================
Ans.287
 let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
 let url = new URL(urlString);
 let parameterZ = url.searchParams.get("z");
 console.log(parameterZ); // 3

 ======================================
 Q.288 How do you print numbers with commas as thousand separators
 =================================
 Ans.288 
 function convertToThousandFormat(x){
  return x.toLocaleString(); // 12,345.679
}

console.log(convertToThousandFormat(12345.6789));

===========================================
Q.290 Does JavaScript supports namespace
==========================================
no 
matlab ek hi name se do function bnye gey to jo phle k bad banya hai use call kare gaa 
yaa error bhi show kar sakta hai

=========================================================
Q.291 How do you declare namespace
=======================================================
Ans.291 local scop me name spacing create kar skte hai 

IFFE ka use karke 
object k ander use kar ke

================================================
Q.293 How do get the timezone offset from date
============================================
Ans.293 date topic

==========================================
Q.294 How do you load CSS and JS files dynamically
==================================================
Ans.295 long topic
=============================================
Q.295 What are the different methods to find HTML elements in DOM
===========================================
Ans.295 documet.getElementById(), class querySelector

========================================
Q.296 What is V8 JavaScript engine
=======================================
Ans.296 v8 Engine is open source height-performance javascript enging
which is use by google crome whhic is writen in c++

==============================
Q.297 Why do we call javascript as dynamic language
================================================
Ans.297 https://www.freecodecamp.org/news/what-is-javascript-definition-of-js/

=================================
Q.298 What is a void operator
=================================
Ans.298 learn agn

=================================================================================================


*/






