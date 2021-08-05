console.log('Proxy Object');

/*
URL:- https://djoech.medium.com/javascript-proxy-be9ab587bab;

proxy object is use to define custome bhavirour of object fundatmentals

proxy objecct ka use islye kya jata hai jab hum koi object bnate hai or 
galti se hum koi vo value use karte hai jo define hi nahi hai vo application me bug create karta hai

vo us bug ko catch kar leta hai jab hum application bnate hai 


*/

let user = {
    name: 'David',
    profession: 'Front-End Engineer'
  };

// console.log(user.name);         // output: David
// console.log(user.profession);   // output: Front-End Engineer
// console.log(user.profesion);    // output: undefined kyo ki ye value nahi hai

const userProxy = new Proxy(user, {


   

    get : function(targetUser, propertyKey){
           
        if(! (propertyKey in targetUser)){
          
  
            throw new ReferenceError('unknow property this property is not defined in this object', propertyKey)
        }

        return targetUser[propertyKey] // return property of the object
          
    },

    set :function(obj, property, newvalue){
        
        if(property === "name" && typeof newvalue !== "string"){

            throw new TypeError('user name in form of string')
        }

        return obj[property] = newvalue
    }


})


// const typeSafeUser = new Proxy(user, {

//     set :function(obj, property, newvalue){
        
//         if(property === "name" && typeof newvalue !== "string"){

//             throw new TypeError('user name in form of string')
//         }

//         return obj[property] = newvalue
//     }
// })

userProxy.name = "max"

console.log(userProxy.name);        // output: David
console.log(userProxy.profession);  // output: Front-End Engineer
// console.log(userProxy.profesion);  // message unknow property this property is not defined in this object