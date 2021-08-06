console.log('currying ')

// Normal function hai 
let getUser = (firstname, lastname, age) => {
    console.log(
      "Hi, My Name is " + firstname + " " + lastname + " and Age is " + age
    )
  }
//   getUser("John", "Sonmez", 25)

//   This is curry function

function getuserCurry(firstname) {
    return function(lastname) {
      return function(age) {
        console.log(
          "Hi, My Name is " + firstname + " " + lastname + " and Age is " + age
        )
      }
    }
  }
//   getuserCurry("Curry")("Function")(22)


  let users = [
    {
      id: 1,
      name: "John",
      age: 22,
    },
    {
      id: 2,
      name: "Peters",
      age: 23,
    },
    {
      id: 3,
      name: "Smith",
      age: 24,
    },
    {
      id: 4,
      name: "Woakes",
      age: 25,
    },
  ]




  let names = [
    {
      id: 5,
      name: "dfdsfds",
      age: 22,
    },
    {
      id: 6,
      name: "ewrwer",
      age: 23,
    },
    {
      id: 7,
      name: "retretret",
      age: 24,
    },
    {
      id: 8,
      name: "tyryt",
      age: 25,
    },
  ]



const get = (property)=>{
    return function(object){
        return object[property]
    }
}


const getId  = get("id");



const usersId = users.map(getId);
const nameId = names.map(getId);

// console.log(usersId);

// console.log(nameId);


// Experiment-2 

const test1 =(el, index)=>{
   
    return el.id
}

const usertest = users.map(test1);

const nameTest = names.map(test1);

console.log(usertest)

console.log(nameTest)

// Note:- i understand but not got proper realworld example


// use of bind method is the procces of currying

// the main purpose of currying resuable code;

