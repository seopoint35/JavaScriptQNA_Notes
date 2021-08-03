console.log("loops");

// for (let i = 0; i < 4; i++) {
    
//     setTimeout(()=>{
//         console.log(i)
//     }, 1000 *i)
    
// }

for (var i = 0; i < 4; i++) {
    
    setTimeout(()=>{
        console.log(i)
    }, 1000 *i)
    
}

/*
how this work 

when we use var setTimout register it after second call the SetTimeout 
loop continuly run

loop run 3 times but setTimeOut resgister 3 time var i = 
and var is our global scop that's why when he register var value is over write the var value and var = 4
3
first check condiditoon 
when i = 4 check condition loop stop 
but i value is  4 
then loop 4 4 4 4

when we use let this is local scop 

when the loop run setTimeOut store value diffrent scop 

Explanation: Due to the event queue/loop of javascript, the setTimeout callback function is called
after the loop has been executed. Since the variable i is declared with the var keyword it became
a global variable and the value was equal to 4 using iteration when the time setTimeout function is invoked.
Hence, the output of the first loop is 4 4 4 4.

Whereas in the second loop, the variable i is declared as the let keyword it becomes 
a block scoped variable and it holds a new value(0, 1 ,2 3) for each iteration. Hence, the output of the first loop is 0 1 2 3.

*/