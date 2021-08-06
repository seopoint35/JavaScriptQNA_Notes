/*
marks and john are tryring to comapre there BMI (Body mass Index), which is calculated using the 
formula 
BMI = mass/ height = mass/ (height * height).

(mass in kg and height in meter);

1. store marks's and jhone mass and height in varible
2. claculate BOth BMI



*/
/*
var johanHeight = 1.95;
var johanWeight = 92;

var markHeight = 1.69
var markWeight = 78



function calcBMI(mass , height) {
    
    return  mass /(height * height);
}

var JohanBMI = calcBMI(johanWeight, johanHeight)
var MarkBMI = calcBMI(markWeight, markHeight)

console.log(`johan BMI ${parseInt(JohanBMI)}  `);

console.log(`Mark BMI ${MarkBMI} `);
*/

// Chalange -2 

/*
jhon and mike both play basketball in diffrent team
in the lates 3 games 
johan terams score 89 120 103
mike team socte 116, 94 ,123

1. calcuate the avrage score each tram

*/

// var JohanTeam = [89, 120, 103];
// var markTeam = [116, 94, 123];

// var mareyTeam = [97, 134, 105]

// Avrage formula  tota / numbar of value
/*
function calAvg(score) {
    let total = 0;

    for (let i = 0; i < score.length; i++) {
        total += score[i]
    }

    return total / score.length - 1;
}

let johinAvg = calAvg(JohanTeam);
let MarkAvg = calAvg(markTeam);

let maryAvg = calAvg(mareyTeam);

console.log(`Jhone Team Avrage is ${johinAvg} `)
console.log(`Mark Team Avrage is ${MarkAvg} `)

console.log(`MAREY TEAM Avrage which played before ${maryAvg} `)
*/

// Chalange -3

/*
Johan and his family went on a holidey and went to 3 diffrent resturent 
the bill were 124, 48, 268

To tip the waiter a fair amount, john created a simple tip calculator
he like to tip 20% of the bill when the bill is less then 50,
15% when the bill is between 50 and 200 and
10% if the bill is more then 200 

percentage formula 

20 * 200/100 

*/
/*
let bill = [124, 48, 268]

function tipCalculator(bills) {

    let percentage = 0;
    let tips = []
    for (let i = 0; i < bills.length; i++) {

        if (bills[i] < 50) {
            percentage = 20
        } else if (bills[i] >= 50 || bills[i] <= 200) {
            percentage = 15;
        } else if (bills[i] > 200) {
            percentage = 10;
        }
         
        tips.push((percentage * bills[i]) /100);
    }

    return tips;


}


let totalPercentage = tipCalculator(bill);

console.log(totalPercentage)
*/

// Chalange -1 with object litteral
// point-1 this.bmi humne method me define kya object me nahi kyo
// reasion kyo ki usme koi result nahi hai vo calculation k bad aata hai islye

/*
var john={
    fullName : "johan smit",
    mass : 92,
    height: 1.95,
    calcBMI : function(){
     this.bmi =   this.mass /(this.height * this.height)

     return this.bmi;
    }
}

var mark={
    fullName : "Mark miler",
    mass : 78,
    height: 1.69,
    calcBMI : function(){
     this.bmi =   this.mass /(this.height * this.height)

     return this.bmi;
    }
}

mark.calcBMI(); // ye bhi result show kare gaa kyo ki humne retirn kya hai result
console.log(mark.bmi) // ise bhi result aa jaye gaa kyo ki hume isko define kya hai isme result save kya hai

*/

// Chalange -5 

var john ={
    fullName : "john smith",
    bills :[124, 48, 268],
    calcTips : function(){
       this.tips = [];
       this.finavalue = [];


        for (let i = 0; i < this.bills.length; i++) {
            let percentage = 0;
            let bill = this.bills[i];

            if (bill < 50) {
                percentage = 20
            } else if (bill >= 50 || bills[i] <= 200) {
                percentage = 15;
            } else if (bill > 200) {
                percentage = 10;
            }
             
            this.tips[i] = (percentage * bill) /100;
            this.finavalue[i] = bill + (percentage * bill) /100;

             
        }
    }
}

john.calcTips();
console.log(john.tips);
console.log(john.finavalue)
