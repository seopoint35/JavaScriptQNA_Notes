console.log('memoization');
/*
5 = 5* 5 = 25
10 = 10 * 10 = 1000;

*/

let previousValue;



function square(n) {
    
    if(previousValue != null){
        return previousValue;
    }

    let result = 0;
    
    for (let i = 1; i <= n; i++) {
       for (let j = 1; j <= n; j++) {  
            result += 1     

       }
        
    }
    previousValue = result;
    return result;
}

// console.log(square(500));





// console.log(previousValue)

/**
 * 
 * memprize speed ko increse karta hai 
 * ager hum for loop ka use karte hai loop me kuch asha alogrthem hai jo compelx hai or 
 * loop jada bar hota hai to vo time le gaa
 * to islye ager hum us function ko bar bar call kare gey to vo time le gaa
 * ager hum memorize ka use karte hai to ky kre gaa
 * ki first time to time le gaa
 * par us value ko vo store kare le gaa varible me uske according hum us function ko
 * dubar call karte hai to vo time nahi le gaa
 */

// Note:- do some Example to understand extactely for explation


