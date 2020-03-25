// Map _ Filter _ Find
// ***  Very Very Important . widely used ***

// Old System for Square
const numbers = [3, 4, 5, 6, 7, 8, 9];
const output = [];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const result = element * element;
    output.push(result)
}
console.log(output);

// way get square
const nums = [3, 4, 5, 6, 7, 8, 9];

// way # 1 for get square
function square (element) {
    return element * element;
}
// way # 2 for get square
const square = element => element * element;
// way # 3 for get square
const square = x => x * x;
// way #4 *** recommended
const result4 = nums.map(x => x * x);
console.log(result4);


// Map - 3 টা parameter নিতে পারে index, element, array
const nums = [3, 4, 5, 6, 7, 8, 9];

nums.map(function(element, index, array){
    console.log(element, index, array);
})

// Filter
const nums2 = [3, 4, 5, 6, 7, 8, 9];

const bigger = nums2.filter( x => x > 5);
    console.log(bigger);

const nums3 = [3, 4, 5, 6, 7, 8, 9];
const smaller = nums3.filter( x => x < 5);
    console.log(smaller);

//  Foreach - Find - Reduce - need to learn