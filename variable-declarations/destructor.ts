let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

first = input[0];
second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2

[first, second] = [second, first];
console.log(first); // outputs 2
console.log(second); // outputs 1