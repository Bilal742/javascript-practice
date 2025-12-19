console.log("helllo world");

let arr = [10, 20, 30, 40, 50, 60];
let a = prompt("Enter random number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

let arr1 = JSON.parse(localStorage.getItem("numbers")) || [10, 20, 30, 40, 50, 60];

let a1 = prompt("Enter number");
a1 = Number(a1);

arr1.push(a1);

localStorage.setItem("numbers", JSON.stringify(arr1));

console.log(arr1);

let arr2 = [10, 20, 30, 40, 50, 60];
let a2;

do {
    a2 = prompt("Enter number");
    a2 = Number(a2);
    arr2.push(a2);
} while (a != 0);
console.log(arr2);

let arr3 = [1, 2, 340, 40, 540, 60];
let n3 = arr3.filter((c) => {
    return c % 10 == 0
})

console.log(n3);

let arr4 = [1, 2, 340, 40, 1534000, 60];
let n = arr4.map((c) => {
    return c * c
})

console.log(n);
