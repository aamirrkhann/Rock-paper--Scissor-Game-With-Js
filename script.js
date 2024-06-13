let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#computer-score");
const resetScore = document.querySelector("#start");

let bgAudio = new Audio("background-music.mp3.mp3");
let btnAudio = new Audio("button.mp3.mp3");
let winAudio = new Audio("win.mp3.mp3");
let loseAudio = new Audio("lose.mp3");


// bgAudio.play('play');

const gameDraw = () =>{
    msg.innerText = "It's Draw! Play Again";
    msg.style.backgroundColor = "rgb(67, 67, 212)";

}
const startOver = () =>{
    resetScore.addEventListener("click", () =>{
        btnAudio.play();
        window.location.reload();
    });
    

}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congratulations ${userChoice} beat ${compChoice}!`;
        msg.style.backgroundColor = "green";
        winAudio.play();
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Oops!Lose ${compChoice} beat ${userChoice}`;
        msg.style.backgroundColor = "red";
        loseAudio.play();

}
  
};



const gnCompChoice = ()=>{
    const option = ["rock","paper","scissor"];
    return option[Math.floor(Math.random()*option.length)];
}

const playGame = (userChoice) => {
    console.log("UserCHoice = ", userChoice);
    const compChoice = gnCompChoice();
    console.log("comp Choice = ", compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //paper scissor
          userWin =  compChoice === "paper"? false: true;
        }else if(userChoice === "paper"){
            // rock scissor
            userWin = compChoice === "scissor"? false: true;
        }
        else{
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
}
 
alert("click on Icon to Play Game");
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
    
        const userChoice = choice.getAttribute("id");
            bgAudio.play();
        
        btnAudio.play();
       playGame(userChoice);
       startOver();
    })
})