let userScore = 0;
let compScore = 0;
let roundCount = 0;
let maxRound = 5;
let gameActive = true;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const nGame = document.querySelector("#newGame")
const msg = document.querySelector("#msg");


const genCompChoice = () => {
    const options =["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
} 
const drawGame = (userChoice,compChoice) => {
    console.log("game was draw")
    msg.innerText = "Game was draw ,play again";
    msg.style.backgroundColor = "#081b31";
} 
 
const showWinner = (userWin, userChoice, compChoice) => {
if(userWin){
    userScore++;
    
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `you win your ${userChoice} beats ${compChoice}`; 
    
    msg.style.backgroundColor = "green";
}else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log('You lose !');
    msg.innerText = `lose ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}
}





const playGame = (userChoice) => {
    if (!gameActive) return;
    const compChoice = genCompChoice();
    roundCount++;
    
    

    if(userChoice === compChoice){
        drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        touchSound.play();
        userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper"){
        touchSound.play();
      userWin = compChoice === "scissor"? false : true;
    }else{
        touchSound.play();
        userWin = compChoice === "paper" ?false : true;
    }
    showWinner(userWin,userChoice,compChoice);

} if(roundCount === maxRound){
    
    gameActive = false;
    console.log(userScore);
    console.log(compScore);
    if(userScore > compScore){
       msg.innerText = "YOU WON AGAINST COMPUTER";
       msg.style.backgroundColor = "pink";
       msg.style.color = "black";
       scissorSound.play();
    }else if(compScore > userScore){
        msg.innerText = "COMPUTER WIN AGAINST YOU";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
        losSound.play();
    }else{
        msg.innerText = "its tie"
        msg.style.backgroundColor = "grey";
        tieSound.play();
    }
           } 

    nGame.addEventListener("click",() => {
        window.location.reload();
        
    });
}






choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("played" , userChoice)
        playGame(userChoice);

        
        
        
    });
});






