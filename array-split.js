// Array Split

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(nums);

// **** Slice ****
// আমরা যখন কোন array কে ভাগ করতে চাইবো। সেক্ষেত্রে আমাদের যদি Starting index এবং Ending index জানা থাকে। তাহলে আমরা Slice ব্যবহার করবো।

const part = nums.slice(2, 5);
    console.log(part);

// *** Splice ***
// আমরা যখন কোন array থেকে কোন অংশ remove/delete করবো, তখন Splice ব্যবহার করবো। সেক্ষেত্রেও কোথা থেকে শুরু হবে (Starting index), এবং শুরু থেকে কতটা remove/delete করতে হবে সেটা সেট করে দিতে হবে।
// Splice এর মাধ্যমে remove/delete করার পাশাপাশি নতুন করে তে কিছু যোগ করতে চাইলে সেটাও আমরা সেট করে দিতে পারবো।
// এক্ষেত্রে array তে যোগ করা নতুন elements গুলো remove/delete হওয়া elements গুলোর স্থান থেকে যোগ হবে।
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// delete only
const removed = arr2.splice(0, 3);

// delete & add new
removed = arr2.splice(0, 3, 10, 20, 30, 40);
    console.log(removed);
    console.log(arr2);

// Join ব্যবহার করে array এর elements গুলো যুক্ত করা যায়।
const together = arr2.join(",");
console.log(together);
