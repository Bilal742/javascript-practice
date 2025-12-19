console.log("helllo world");

// let arr = [10, 20, 30, 40, 50, 60];
// let a = prompt("Enter random number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// let arr = JSON.parse(localStorage.getItem("numbers")) || [10,20,30,40,50,60];

// let a = prompt("Enter number");
// a = Number(a);

// arr.push(a);

// localStorage.setItem("numbers", JSON.stringify(arr));

// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60];
// let a;

// do {
//     a = prompt("Enter number");
//     a = Number(a);
//     arr.push(a);
// } while (a != 0);
// console.log(arr);

let arr = [1, 2, 340, 40, 540, 60];
let n = arr.filter((c) => {
    return c % 10 == 0
})

console.log(n);
