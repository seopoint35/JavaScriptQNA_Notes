console.log('JavaScript chalanges');


// chalange - 1  sort the string Array 
/*
=======================================================
Chanlange -2 
========================================================
["Aug", "Sep", "Jan", "June"];

Think :- Array have sort method to sort the string alphabatic


Chanange -1 :- completed
Chalange code
let months  = ["Aug", "Sep", "Jan", "June"];

console.log(months .sort()); 


chalange -1 Notes :- sort() method overwrite the orignal Array

==============================================================================
Chalange -2 
:- sort the Array in numaric
==================================================================================
Think:- Array sort work on string if we use with number it chek the first value first as string

[1, 20, 100, 300, 120] = result [1, 100, 120, 20 ,300] it wrong

pass the function in sort and compare the array By this method it return Right Result

a -b 
1 - 2 = -1 = 1
2- 5  = -3  = 2;
5-3 =  2   = 3;
5-4    1     4
             5
             
-------------------------------
Chalange complete - ok
---------------------------             

//Chalange code
let numbers = [1, 2, 5, 3, 4];

numbers.sort((a, b)=>{
   
    return a -b ;
})

console.log(numbers)

=========================================================
Chalange -3 How do you find min and max value in an array
=========================================================

Think:- use min, max method is use But Math.min , Math.max takes distingus value like 1,2,3 not an Array 

here comes Apply method

let Nums = [53,454,424,66,79,686];

console.log(Nums);

let maxNum =  Math.max.apply(this, Nums)

console.log(maxNum) // ok

function minNum(arr) {
    
 return Math.min.apply(this, arr);
}

console.log(minNum(Nums))

// Notes:- ager khai pr bhi Array ho or distingus value cheye ho to apply Method use hoga

=======================================================
Chalange -4 
find mix , mim  Number Array with diffrent diffrent methods 
=========================================================
// Method - 1 phle compare method se sort karo phir min k lie arry[0], max k lie arry[arry.length -1] 
// method- 2 foor loop

compare kya hai sabhi value ko foor loop se

let Nums = [53, 454, 424, 66, 79, 686];


function forLoopMinMax() {
    let min = Nums[0], max = Nums[0];

    for (let i = 0; i < Nums.length; i++) {

        let value = Nums[i];
        min = (value < min) ? value : min;
        max = (value > max) ? value : max;
    }

    return [min, max]

}



let [forFoormin, forLoopmax] = forLoopMinMax();

console.log(`min value of Array is ${forFoormin} and max value of Array is ${forLoopmax}`)


// Method -3 reduce i will try later

*/





















