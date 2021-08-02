console.log('switch')


// const action = 'say_hello';
// switch (action) {
//   case 'say_hello':
//     let message = 'hello';
//     console.log(message);
//     break;
//   case 'say_hi':
//     let message = 'hi';
//     console.log(message);
//     break;
//   default:
//     console.log('Empty action received.');
//     break;
// }

// Error because message is alredy declare and we can not re-decalre let again

// Solution

const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    let message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
    break;
  } // added brackets
}

// Case ko hum Block scop kar de gey jise ki vo block me hi rhe