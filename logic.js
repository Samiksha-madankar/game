let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drowGame = () => {
    msg.innerText = "Game was drow. play again.";
    msg.style.backgroundColor = "#081b31";

} 

const showWinner = (userWin ,userChoice,CompChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!  Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
       } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You win! ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice);

    if(userChoice === CompChoice){
        drowGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = CompChoice ==="paper" ? true : false;
        } else if(userChoice ==="paper"){
            userWin = CompChoice ==="scissors" ? false : true;
        } else {
            userWin = CompChoice ==="rock" ? false : true;
        }
        showWinner(userWin , userChoice, CompChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playGame(userchoice);

     })
})