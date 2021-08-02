console.log('window Objects');
console.log(document.URL) // both are same
console.log(window.location.href) // both are same
console.log(window.location.protocol) // protocol hota hai hhttp or https
console.log(window.location.host) // host me hst name matlab domain and port
console.log(window.location.hostname) // domain local storege me 127.0.1


const obj = {
    name: "sandeep",
    lastName: "chauhan",
}



console.log(("name" in obj))
console.log(obj.hasOwnProperty("name"))

// Detect BRowser

function detectmob() {
    if (navigator.userAgent.match(/Windows/i)) {
        console.log("Window Browser")
    } else {
        console.log('not window browser')
    }
}

detectmob();

let img = new Image()
img.onload = function () {

    console.log(`this is Image width ${this.width} This is Image Height ${this.height} `)
}

img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";


// Can you apply chaining on conditional operator

// yes

// function chaning(num) {

//     if(num >= 15 ){

//         console.log(`number is greter then `)
//     }else if(num === 10){
//          console.log('condition is equal to number')
//     }else if(num <= 10){
//          console.log('number is less then condition')
//     }
// }


// chaning(20)


// function ChaningTest(num) {

//     return (num >= 15) ? console.log('number is greater the')
//     : (num === 10) ? console.log('number is ==== the')
//     : (num <= 10) ?  console.log('number is less then condition'):
// }


// url incodeing

let url = 'https://mozilla.org/?name="sandeep&&plac="gurgaon"';
console.log(url)

let encodeUrl = encodeURI(url);
console.log(encodeUrl)

let urldecode = decodeURI(encodeUrl);

console.log(urldecode)

// ============================================
// urnery operator
let x = "100";

console.log(typeof x)

let y = +x;
console.log(y)

console.log(typeof y)

console.log("=====================");

let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
let webUrl = new URL(urlString);
console.log(webUrl)
let parameterZ = webUrl.searchParams.get("z");
console.log(parameterZ); // 3

//==============

function cursurFun() {
    window.document.body.style.cursor = "wait";
}

cursurFun()