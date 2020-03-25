// Scope *** important ***
// `Scope মুলত কোথাও এক্সেস করার সীমাবদ্ধতা বুঝায়।
// যার যেখানে এক্সেস করার অনুমতি আছে সে শুধু সেখানেই এক্সেস করতে পারবে। { } দিয়ে নিজ নিজ ব্লক/এরিয়া/ এক্সেস এর সীমাবদ্ধতা সেট করা হয়।
// function এর বাইরের variable হচ্ছে Global. Global কে যে কেউ এক্সেস করতে পারে। এখানে bonus হচ্ছে global।

let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    if (result > 9){
        var mood = "happy";
        let mood = "happy";
        const mood = "happy";
        mood = "sad";
        mood = "think";
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(3, 7);
console.log(output);
console.log(bonus);

// Hoisting :
// যদি কোন scope এর ভিতর var লিখে variable declare করা হয়, তাহলে সেই variable টা তার scope এর বাহিরে গিয়ে parent এর সাথে মিলে যাবে। মানে বাইরে থেকে স্কোপের ভিতরের variable টা এক্সেসেবল হবে। এইটাই Hoisting।

// scope variables let & const || var is flexible and confusing
