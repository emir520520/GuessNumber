"use strict";
let secretNumber=Math.round(Math.random()*20);
let score=document.querySelector(".score").textContent;
console.log(secretNumber); 

document.querySelector(".check").addEventListener("click",function(){
    //console.log(document.querySelector(".guess").value);
    const guess=Number(document.querySelector(".guess").value);
    document.querySelector(".number").textContent=document.querySelector(".guess").value;

    if(guess===""){                         //! There is no input
        document.querySelector(".message").textContent="Please enter number";
    }else if(guess===secretNumber){         //! Win the game
        document.querySelector(".message").textContent="Correct!";
        document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".number").style.width="30rem";      //! value always be string
        if(document.querySelector(".highscore").textContent < document.querySelector(".score").textContent){
            document.querySelector(".highscore").textContent=document.querySelector(".score").textContent;
        } 
    }else{
        compare(guess,secretNumber);
    }
});

document.querySelector(".again").addEventListener("click",function(){
    secretNumber=Math.round(Math.random()*20);
    console.log(secretNumber);
    score=20;
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";

    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
});

function compare(guess,secretNumber){

    if(score>1){
        document.querySelector(".message").textContent=guess > secretNumber ? "The number is too high" : "The number is too low"; 
        score--;
        document.querySelector(".score").textContent=score;
    }else{
        document.querySelector(".message").textContent="You lost the game!";
        document.querySelector(".check").disabled=true;
    }
}