// Arguments
// Argument দেখতে array এর মতন কিন্তু array না।
// It's array like Object .
function add(x, x1) {
    [...arguments]

    return x + x1 + [...arguments]
}
const result = add (5, 10, 50, 100, 200);
    console.log(result);

// Theory clear ! application not clear