// FALSY value : 0 / "" / undefined / null / NaN / false
// TRUTHY value : "0" / " " / []

// Number: যে কোন true নাম্বার 0 ছাড়া
// String: যে কোন String True শুধু empty String False.

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