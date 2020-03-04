const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5); // pick selected numbers
// const removed = nums.splice(2,5); //removed selected numbers or remove and add
const removed = nums.splice(2,5, 77, 88, 99); //removed selected numbers

console.log(removed);
console.log(part);
console.log(nums);

const together = nums.join("-");
console.log(together);
