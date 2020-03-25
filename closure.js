// Closure
// কোন একটা function এর ভিতর যদি আরেকটা function কে call বা return করা হয়, তাহলে নিজেদের মধ্যে তারা একটা close environment তৈরি করে। Scope এর বাইরে থেকে যাতে অন্যরা যাতে এক্সেস করতে পারে সেজন্য তারা একটা এক্সট্রানল রেফারেন্স রেখে দেয়। এটাই মুলত closure !

function stopWatch() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
    console.log(clock1());
    console.log(clock1());
    console.log(clock1());
// 2nd time call
    const clock2 = stopWatch();
    console.log(clock2());
    console.log(clock2());
// 3rd time call
    const clock3 = stopWatch();
    console.log(clock3());
    console.log(clock3());

// Random call
    console.log(clock1());
    console.log(clock3());
    console.log(clock2());
    console.log(clock2());
    console.log(clock2());
    console.log(clock3());
    console.log(clock1());
    console.log(clock1());
    console.log(clock1());
    console.log(clock3());
