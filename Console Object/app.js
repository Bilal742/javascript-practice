console.log("Hello World");

console.log(console);
console.assert(4 > 7);
console.warn("warnimg");
console.info("info");
console.error("err");
console.clear();

let Obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
};

console.table(Obj);

console.time("forLoop")

for (let i = 0; i < 4; i++) {
    const element = [i];
    console.log(element);   
};

console.timeEnd("forLoop");

console.time("whileLoop")

let i = 0
while (i < 4) {
    console.log(i);
    i++;
}

console.timeEnd("whileLoop");
