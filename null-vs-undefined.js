// undefined example
// ভ্যালু সেট না করা।
let Name;
console.log(name);

// function return না করা।
function add(num1, num2) {
    console.log(num1 + num2);
    result
}
const result = add(13, 82)
console.log(result);

// return লিখা হয়েছে কিন্তু কি return করা হবে সেটা বলা হয় নাই
function add(num1, num2) {
    console.log(num1 + num2);
    return
}
const result = add(13, 82)
console.log(result);

// parameter pass না করার কারনে।
function add(num1, num2) {
    console.log(num1, num2);
}
const result = add (13);
console.log(result);

// Object এর থেকে এমন কোন property রিড করতে চাওয়া হবে, যেটা Object এ ডিফাইন করা হয় নাই।
const developer = {name: "Jone", phone:1234621};
console.log(developer.email);

//  Variable এর ভ্যালু undefined হিসাবে সেট করা। *** Not Recommended ***
let fun = undefined;
console.log(fun);

//
let age = [2,5,9]
console.log(age[11]);