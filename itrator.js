console.log('javaScriptv itrator');

/*
Ans.233 itrator is an object which define a sequence return a value upon it termination
It implements the Iterator protocol with a next() method
which returns an object with two properties:
the next value is done true

This loop extracts each item in the array or iterable one at a time. 
This process of extracting one item at a time and doing something with it is called iteration.

code step :- 
itrator is an object 

matlab hume ek objet bana hai 

const itrableobject ={
    next: function(){

        return {
            value: counter,
            done : true
        }
    }
}

*/

let counter = 0;
let limit = 3;

const itrableObjectProtocol ={
    next: function(){
        counter++;

        if(counter <= limit){
            return {
                value: counter,
                done: true,
            }
        }else{
            return{
                value : null,
                done: false,
                
                stop: function(){
                    if(!done){
                        alert('falswe')
                    }
                }
                

            }
        }
    }

    
}

console.log(itrableObjectProtocol.next());
console.log(itrableObjectProtocol.next());
console.log(itrableObjectProtocol.next());
console.log(itrableObjectProtocol.next());
console.log(itrableObjectProtocol.next());

// this is ok but incomplet 
// because generator is also 
// how to implement when code reach null 

