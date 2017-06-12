let o = {
    a: "foo",
    b: 12,
    c: "bar"
};


// let { a: newName1, b: newName2 } = o;

// let newName1 = o.a;
// let newName2 = o.b;

let { a, b }: { a: string, b: number } = o;

console.log(a, b);