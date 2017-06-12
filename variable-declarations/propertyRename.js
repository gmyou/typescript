var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let { a: newName1, b: newName2 } = o;
// let newName1 = o.a;
// let newName2 = o.b;
var a = o.a, b = o.b;
console.log(o.a, o.b);
console.log(a, b);
