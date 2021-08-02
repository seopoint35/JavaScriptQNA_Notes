console.log('indexDB cookies, localstorage, session ')

/*
IndexedDB is a low-level API for client-side storage of larger amounts of structured data,
The Browser Database 
indexDB is noSql data base
*/

// // 
// window.indexedDB = window.indexedDB;


// if(window.indexedDB){
//     console.log('this browser support indexDB')
// }else{
//     console.log('Not support')  
// }

// let request = window.indexedDB.open("QuizQuestDatabase", 1),

/*
localStorage : - it use by user untile user not clear the catch
session :- it is use by use utile not close the window

*/

// cookies
/*
Before HTML5 , cookies is only the way to store the data localey in BRowser
there are typically user for targeting adds prefrences session management
cokes have limitaion is 50 cooikes pr domain and total size 4kb

*/

// diffrence Between cookies , localStorgae, session,

/*

cookeises
localStorage
sessionStorage

1. size
cookeises - 4kb
localStorage - 5MB
sessionStorage - 5%MB

2.Browser support

cookeises - HTML4/HTML5,
localStorage - HTML5,
sessionStorage - HTML5,

3. Accesibale
cookeises - any window
localStorage - any window
sessionStorage - same Tab

4. Expire
cookeises - manulay
localStorage - never
sessionStorage - close tab

5. storage Location
cookeises - Browser / server
localStorage - Browser
sessionStorage - Browser

6. sent with Request
cookeises - yes
localStorage - no
sessionStorage - no

*/

/*
these storage in Crome dev Tool in Application

*/

// LocalStorage
/*


*/
// value store in localstorage in form of string
// localStorage.setItem('name', "sandeep" ) // set item in localstorage
/*
Ager Hum value store kar k hum localstorgae ko setItem ko delet bhi karte hai to vo value save hi rhe gi

*/
let getvalue =localStorage.getItem('name') // only give the name of key

// console.log(getvalue) // ager koi value nahi hogi to null return kare gaa

// Remove the item in localstorage

localStorage.removeItem('name')


// ========================================================
// session Storage

// sessionStorage.setItem('name', 'sanjay');

let getseesion = sessionStorage.getItem('name');

// console.log(getseesion)

sessionStorage.removeItem('name')

// Note:- session storgae and local storage method and work almost same

// =============================
// cookies
// ========================
/*
cookies k lie libreie use karni cheye NPm kyo ki vo easy hota hai likha

*/

// document.cookie = "name=sandeep; expires"
// console.log("%cThis is a red text", "color:red");






