const students = [
    {id: 21, name: 'Mr X'},
    {id: 22, name: 'Mr Y'},
    {id: 24, name: 'Miss A'},
    {id: 38, name: 'Miss B'},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const filterBig = students.filter(s => s.id>22);
const findBig = students.find( s => s.id>22);

console.log(names);
console.log(ids);
console.log(filterBig);
console.log(findBig);




