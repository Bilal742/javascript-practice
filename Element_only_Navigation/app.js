console.log("Hello World");

let b = document.body;

// console.log(`First child of b is: ${b.firstChild}`);
// console.log(`First Element child of b is: ${b.firstElementChild.nodeName}`);

console.log(`First child of b is:`, b.firstChild);
console.log(`First Element child of b is:`, b.firstElementChild);

const changeBgRed = () => {
    document.body.firstElementChild.style.background = "black";
    document.body.firstElementChild.style.color = "white";
}

changeBgRed();

const menuIcon = document.getElementById("menuIcon")
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show")
})