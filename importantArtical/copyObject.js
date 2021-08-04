console.log('copy object from the other object');

// use for in loop to copy the object
// Url :- https://medium.com/technofunnel/deep-and-shallow-copy-in-javascript-110f395330c5

var employeeData = {
    name: "Mayank",
    age: 31,
    designation: "Developer",
    getData: function () {
        alert(this.name)
    }
}

var destinationObject = {};



for (const key in employeeData) {
    destinationObject[key] = employeeData[key]
}

// console.log(destinationObject)

// It can only Iterate the “enumerable” properties of the object.


// 2. method -2 Object,create

var userInfo = {
    name: "Mayank",
    age: 30,
    salary: 10000,
    designation: "Developer"
}

// console.log(userInfo)

var newObject = Object.create(userInfo);

// console.log(newObject) 

/*
result {} newObjet me koi property create nahi karta name, age , salery

par hum in property ko acces kar skte hai kyo console.log(newObject.name)
ye us object ko proto me add kar deta hai 

Advantage
1.All the methods and properties which are available to the userInfo object are available 
to the new object that is created, since it exists as the part of prototypal chain.
2.The Property is made available through the prototypal chain, so the object need not consume 
more memory space to save the existing functions and properties

Disadvantage 
1.The newly created object does not create a separate property.
 Modifying the property from the Source Object modifies the data available to the new Object also.

 Afer hum userInfo me kuch change kare gey to neObjet me bhi hoga
*/

// 3. Copy Objects with “Object.assign
// Object.assign is used to copy the key value pair of one object to another.
// Object.assign(targetObject, ...sourceObject);

var employeeData2 = {
    name: "Mayank sharma",
    age: 31,
    designation: "Developer"
}

// console.log(employeeData2)


var newEmployer = Object.assign({ RoolNo: 5 }, employeeData2);

newEmployer.name = "sandeep" //hum change kar skte hai name ko 

// console.log(newEmployer)


//   Example -2 Object.asign

const data = [
    {
        id: 1,
        name: "Mayank sharma",
        age: 31,
        designation: "Developer"
    },
    {
        id: 2,
        name: "Mayank sharma",
        age: 31,
        designation: "Developer"
    },

    {
        id: 3,
        name: "Mayank sharma",
        age: 31,
        designation: "Developer"
    }


]


const addData = Object.assign( {} ,data) ;

// console.log(addData)

// what is enumerable properties in object
// https://medium.com/@ayusharma.in/objects-writable-configurable-enumerable-365cdff6a408
// https://shivamethical.medium.com/what-is-enumerable-in-javascript-e2b1c0fd0623 


// enurable 

/*
jo object ki property for in loop or Object.key me show ho vo enurable peroperty of object hoti hai


*/

let info ={
name: "shivam",
address: "xyz",
email : "sandeep@gmail.com"
}

// Object.getOwnPropertyDescriptor se firtperameter me object , second me string me key to vo key ki
// Details btaye gaa ki vo key witable, enurable, configurable hai kya nahi byDefault : true hoti hai




Object.defineProperty(info, 'name', {
    // value: 'Value for that key',
    configurable: false, // hum value ko modefied nahi kar skte delete example
    // writable: false,
    // enumerable: false,
})
let check = Object.getOwnPropertyDescriptor(info, 'name',);
// console.log(check)

// info.name = "sanjay" // chnage nahi hoga

info.email = "sanjay@gmail.com"

delete info.name; // value delet nahi hoga

// for (const key in info) {
//    console.log(info[key])
// }


// ========================================
// this is littl bit dought
let info2 ={
    name: "Roham",
    address: "xyz",
    email : "sandeep@gmail.com",
    addres: {
        village : "jataula",
        dist : "gurgaon"
    }
    }

    // for (const key in info2) {
    //     console.log(info2[key])
    // }
