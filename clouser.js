console.log('clouser')

function counter(params) {
    let count = 1;

    return function(){
       return count++;
    }
    
}

let outer = counter();

console.log(outer())
console.log(outer())
console.log(outer())