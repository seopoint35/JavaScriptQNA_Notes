/*
prototype chain

jo function ek object bnata hai vo contructor hota hai 



*/


let Employ = function(params) {
    this.prop1 = 456; // this means the instance of the object
    this.inner = function(){
        console.log('inner method on instance')
    }
}


let test = new Employ();

console.log(test.inner())