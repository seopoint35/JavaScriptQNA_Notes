

const person1 ={
    name: "sandeep",
    lastName : "chauhan"
}



const person2 ={
    name: "Pawan",
    lastName : "Rajput"
}

const fullName ={
  
    getFullName : function(vpo){
        console.log(`full name is ${this.name} ${this.lastName} and village is ${vpo}`)
    }

}

// Use call method to bind the method with object

fullName.getFullName.call(person1 ,  'gurgaon')

// use Apply method to bind the method with object
fullName.getFullName.apply(person2 , ['jataula']);

// binde

let details = fullName.getFullName.bind(person1 ,  'gurgaon')
console.log(details());