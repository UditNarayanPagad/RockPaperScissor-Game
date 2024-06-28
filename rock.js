//  let nam = document.querySelector(".you");
//  nam.innerHTML = prompt("What's your name is:");

let yourScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const your_Score = document.querySelector(".your-score");
const comp_Score = document.querySelector(".computer-score");

let updateScore = ()=>{
    if(result.innerHTML === "You Win"){
        yourScore++;
        result.style.backgroundColor = "green";
    }
    else if(result.innerHTML === "Computer Win"){
        compScore++;
        result.style.backgroundColor = "red";
    }
    countScore();
}

let countScore = ()=>{
    your_Score.innerHTML = `${yourScore}`;
    comp_Score.innerHTML = `${compScore}`;
}

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    let rndTxt = Math.floor(Math.random() * 3);
    return options[rndTxt];
}

const playGame = (userChoice)=>{
    // console.log(userChoice);
    const compChoice = genCompChoice();
    // console.log(compChoice);
    winner(userChoice,compChoice)
}

let winner = (userChoice,compChoice,yourScore,compScore)=>{
    if(userChoice === compChoice){
        result.innerHTML = "Game Draw";
        result.style.backgroundColor = "#081b31";
        alert(`Computer: I have also choosen ${compChoice}`);
    }
    else if(userChoice === "scissors"){
        if(compChoice === "paper"){
            result.innerHTML = "You Win";
            
            alert(`Computer: I have choosen ${compChoice}`);
            updateScore();
        }
        else if(compChoice === "rock"){
            result.innerHTML = "Computer Win";
            updateScore();
            alert(`Computer: I have choosen ${compChoice}`);
        }
    }
    else if(userChoice === "paper"){
        if(compChoice === "rock"){
            result.innerHTML = "You Win";
            updateScore();
            alert(`Computer: I have choosen ${compChoice}`);
        }
        else if(compChoice === "scissors"){
            result.innerHTML = "Computer Win";
            updateScore();
            alert(`Computer: I have choosen ${compChoice}`);
        }
    }
    else if(userChoice === "rock"){
        if(compChoice === "scissors"){
            result.innerHTML = "You Win";
            updateScore();
            alert(`Computer: I have choosen ${compChoice}`);
        }
        else if(compChoice === "paper"){
            result.innerHTML = "Computer Win";
            updateScore();
            alert(`Computer: I have choosen ${compChoice}`);
        }
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        // console.log("Clicked",userChoice);
        playGame(userChoice);
    })
});
