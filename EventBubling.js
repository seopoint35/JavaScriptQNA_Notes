console.log('Event Bubling');

/*
useCapture by default false :- means it work like event Bubling 
in event Bubling go to bootom to top of Html 


*/

let GrandParent = document.getElementById('grandParent');
let Parent = document.getElementById('parent');
let Children = document.getElementById('child');

GrandParent.addEventListener('click', function(e){
    console.log("Grand parent")
    alert("Grand Parent")
    GrandParent.style.backgroundColor = "green"
    e.stopImmediatePropagation() 
}, false)

Parent.addEventListener('click', function(e){
    Parent.style.backgroundColor = "red"
    console.log("parent")
    alert("Parent")
    e.stopImmediatePropagation()  
  }, false)


Children.addEventListener('click', function(e){
    Children.style.backgroundColor = "yellow"
    console.log("child")
    alert("child")
    e.stopImmediatePropagation()  
  }, false)

// Example -1 all useCapure false
/*
Test -1 click on child
Result 
child
parent
grand parent
//  ok 

Test- 2
click on parent
result
parent
grand parent
// ok 

// Example -2 all useCapture true

Test -1 click on child

Result
Grand parent
parent
child
//  ok

Test -2  click on parent
Grand parent
parenet

Example -3 
all useCapture to be false and use e,stopImidatePropogation
*/

// console.log(navigator.platform); 


// function Hello(params) {
//     console.log("Hello function")   
//     return false;
// }


// console.log(Hello())

