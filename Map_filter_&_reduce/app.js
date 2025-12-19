console.log("helllo");

let arr = [10,20,30,40,50,60];

let a = arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value + 1
})

console.log(a);

let b = arr.forEach((value,index,array)=>{
    console.log(value,index,array);
    return value + 1
});

console.log(b);
