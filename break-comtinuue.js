const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let i = 0; i < num2.length; i++) {
    console.log(num2[i]);
}
// *** Break
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let i = 0; i < nums1.length; i++) {
    if(nums1[i] > 4 ){
        break
    }
    console.log(nums1[i]);
}

// *** continue
const num = [15, -2, 10, -4, 20, 30, -7, 50, -9];

for(let i = 0; i < num.length; i++){
    if (num [i] < 0 ){
        continue;
    }
    console.log(num[i]);
}