let runAgain = true;

while (runAgain) {
    let userChoice = prompt("Enter your choice: snake, water, or gun").toLowerCase();

    const choice = ["snake", "water", "gun"];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];

    alert(`Computer chose ${computerChoice}`);

    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "snake" && computerChoice === "water") ||
        (userChoice === "water" && computerChoice === "gun") ||
        (userChoice === "gun" && computerChoice === "snake")
    ) {
        alert("You win!");
    } else if (
        (userChoice === "snake" && computerChoice === "gun") ||
        (userChoice === "water" && computerChoice === "snake") ||
        (userChoice === "gun" && computerChoice === "water")
    ) {
        alert("You lose!");
    } else {
        alert("Invalid input! Please type Snake, Water, or Gun.");
    }

    runAgain = confirm("Do you want to play again?");
}   