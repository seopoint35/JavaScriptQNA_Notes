console.log('Classes in javaScript');



// ProtoType inheretance
function Car (name, model){

    this.CarName = name;
    this.CarModel = model;

}

// add function for all car instances

Car.prototype.getDetails = function(speed) {
    return `This Car name is ${this.CarName} and model is ${this.CarModel} adn is Top speed is ${speed}`
}

let maruti = new Car('Alto', 800);

console.log(maruti.CarName) // get car Name

console.log(maruti.getDetails(140));



// Classes in JavaScript

class Bike {
constructor(name, model ){
    this.BikeName = name;
    this.BikeModel = model
}

getDetails(speed){
    return `This Bike name is ${this.BikeName} and model is ${this.BikeModel} adn is Top speed is ${speed}`
}

}

let Hero = new Bike('splender', "pro");

console.log(Hero.BikeName) // get Bike name

console.log(Hero.getDetails(120));

// class and protoType work same but only syntex is diffrence and class is new concept and syntex is easy as compare to inheratence


