const numbers = [3, 4, 5, 6, 7, 8, 9];
const output = [];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const result = element * element;
    output.push(result)
}
console.log(output);


function square(element){
    return element * element;

}
const result = numbers.map(function(element){
    return element * element;
})
console.log(element, index, Array);

const numbers = [3, 4, 5, 6, 7, 8, 9];
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);
Map
const numbers = [3, 4, 5, 6, 7, 8, 9];
const result = numbers.map(x => x * x);
console.log(result);

// Filter
const numbers = [3, 4, 5, 6, 7, 8, 9];
const bigger = numbers.filter( x => x > 5);
console.log(bigger);

const numbers1 = [3, 4, 5, 6, 7, 8, 9];
const smaller = numbers1.filter( x => x < 5);
console.log(smaller);

