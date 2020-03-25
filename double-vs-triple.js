// (==) = value only!
// (===) = value + type (recommended)

const first = 2;
const second = 3;
if (first == second) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


const first = 2;
const second = 2;
if (first == second) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//
const first = 2;
const second = "2";
if (first == second) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//
const first = 2;
const second = "2";
if (first === second) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//
const first = 2;
const second = true;
if (first == second) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//
const first = 2;
const second = false;
if (first == second) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//
const first = 2;
const second = true;
if (first === second) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//

if ('2' === 2){
    console.log("inside if");
}
else {
    console.log("inside else");
}