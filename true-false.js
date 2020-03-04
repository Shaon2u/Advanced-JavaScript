// FALSY:
// 0
// ""
// undefined
// null
// Nan
// false
// TRUTHY:
// '0', ' ', []

// const name = "0";
// let name;
// console.log(name);

let name = 12;
if (name || name == 0) {
    console.log("Condition is True");
}
else {
    console.log("Condition is False");
}