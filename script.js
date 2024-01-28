// COMP CHOICE GEN
const compChoiceGen =()=>
{
    const arr=["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);

    return arr[randIdx];
}




const msg = document.querySelector("#msg");
//scores
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");


let uScore=0;
let cScore=0;
// SCORE CALCULATOR & DISPLAYER
const score = (userWin) =>
{
    // let uScore=userScore.innerText;
    // let cScore=compScore.innerText;

    if(userWin)
    {
        uScore++;
        userScore.innerText=uScore;
    }
    else
    {
        cScore++;
        compScore.innerText=cScore;
    }

}

// GAME RESULT
const gameResult = (userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        console.log(`Your ${userChoice} beats comp's ${compChoice}`);

        msg.innerText=`Your ${userChoice} beats comp's ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        console.log(`Computer's ${compChoice} beats your ${userChoice}`);

        msg.innerText=`Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }   
}


// DRAW PRINTER()
const drawMatch = ()=>
{
    console.log("match draw, play again");

    msg.innerText="match draw, play again";
    msg.style.backgroundColor="rgb(8, 8, 51)";

    
}



const playgame = (userChoice)=>
{
    const compChoice=compChoiceGen();//calling cmpChoicegen fun()  -----------------2

    console.log("Your choice is :",userChoice);
    console.log("comp choice is :",compChoice);

    
    if(userChoice === compChoice)
    {
        displayChoice(userChoice,compChoice);
        drawMatch();//draw caller--------------------------62
    }
    else
    {
        let userWin=true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissor" ? false:true;
        }
        else if(userChoice === "scissor")
        {
            userWin = compChoice === "rock" ? false:true;
        }

        gameResult(userWin,userChoice,compChoice);//game resultcaller------------------41

        score(userWin);//score calculator---------------------21


        displayChoice(userChoice,compChoice);//display choice--------------------
    }

}

const player_display = document.querySelector("#player-choice");
const comp_display = document.querySelector("#comp-choice");
const displayChoice=(userChoice,compChoice)=>//dispay choice function
{
    player_display.innerText=userChoice;
    comp_display.innerText=compChoice;

}

// FINDING THE USER CHOICE (using .forEach)

const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        // console.log("you selected your choice.",userChoice);

        playgame(userChoice);// playgame fun() caller --------72
    })
});



// SCORE RESET (on clicking reset)
const reset = document.querySelector("#reset");
reset.addEventListener("click",()=>
{
    uScore=0;
    cScore=0;

    userScore.innerText=uScore;
    compScore.innerText=cScore;

    msg.innerText="Play your move, choose one";
    msg.style.backgroundColor="rgb(8, 8, 51)";

    player_display.innerHTML=" ";
    comp_display.innerText=" ";
});



