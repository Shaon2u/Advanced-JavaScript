//
const students = [
    {id: 2, name: 'Mr X'},
    {id: 11, name: 'Mr Y'},
    {id: 35, name: 'Miss A'},
    {id: 87, name: 'Miss B'},
];
//
const names = students.map(s => s.name);
    console.log(names);
//
const ids = students.map(s => s.id);
    console.log(ids);

// Filter use করলে শেষ পর্যন্ত খুঁজে result দেখাবে।
const filterBig = students.filter(s => s.id>22);
    console.log(filterBig);

// Find Use করতে শুধু যেটাকে আগে পাবে যেটাকে দেখাবে।
const findBig = students.find( s => s.id>2);
    console.log(findBig);




