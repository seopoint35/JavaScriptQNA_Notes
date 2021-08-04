console.log('javaScript Array.prototy.slice.call(arguments)');

function addAllTheNumber() {
   
    var argeArray = Array.prototype.slice.apply(arguments)  // this is old only for understand
    var argeArray2 = Array.from(arguments) // new type method ye bhi Array like object leta hai

    console.log(argeArray2)
    
    // ager hum ashe argument pass karte hai to [1,2,34,3] ye un sab ko Arry me convert karta hai 

    return argeArray2.reduce((acc , cuu)=>{
        
        return  acc += cuu
    })
}

console.log(addAllTheNumber(1,2,34,3));

/*
Url: - https://medium.com/@andrewsburke/array-prototype-slice-call-arguments-a94b04e74a4
Asha Hum kisi susction me lkare gey

humne koi function bnya us me calclution ki hume kuch 
vo sab calculation depend hai function k argument pr jhayer si baat hai ki argument jitne pass kare gey une hi
param pass karne hoge 

problem ye hai argumnet fix nahi hai or parmiters 

arguments function ki property hai use hum sabhi argument get kar le gey Argument aarye ki form me value return karta hai
or hum argument ko argument[0] ki thra get bhi kar skte hai pr vo argument nahi hai 

islye usko Array me conevrt karne k lie karte hai slice me Array like object pass karna hota hai

*/