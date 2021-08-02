console.log("javaScript lable ");

for (let i = 0; i <= 3; i++) {
    console.log("This is i " , i)
   for (let j = 0; j <= 3; j++) { 
       if(j === i){
           break;
       } 
    console.log("This is j" , j)
       
   }
    
}
console.log("=============================");

function test() {
    outer: for (var i = 0; i < 3; i++) {
      console.log("i=" + i);
      for (var j = 0; j < 3; j++) {
        if (j === i) {
          continue outer;
        }
        console.log("j=" + j);
      }
    }
  }

  test();

// console.log(j)

/*
this is i 0
this is j 0
this is j 1
this is j 2
this is j 3
this is i 1
this is j 0
this is j 1
this is j 2
this is j 3


=================
j == i =this is i 0
j == i =this is i 1
j == i =this is i 2
j == i =this is i 3

*/

/*
ager hum lable ka use karye ha to vo loop ko sskip kar seta hai ager continu ka use kare gey to 

little bit clear
*/


