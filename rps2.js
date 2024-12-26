const choices = document.querySelectorAll(".ch")
const usChoice = document.querySelector(".user-ch p")
const comChoice = document.querySelector(".comp-ch p")

const playerName = localStorage.getItem("playerName") || "Player";

let userScore = document.querySelector(".plyrscore p")
let compScore = document.querySelector(".compscore p")
let ussc = 0
let comsc = 0

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        usChoice.innerText = userChoice.toUpperCase();
        playGame(userChoice);
    })
})
function generateCompChoice(){
    const arr = ["rock","paper","scissor"];
    let randind = Math.floor((Math.random()*3))
    return arr[randind];
}
function playGame(userChoice){
    const computerChoice = generateCompChoice();
    comChoice.innerText = computerChoice.toUpperCase();
    let userWin = true
    if (userChoice===computerChoice){
        matchDraw();
    }else if ((userChoice==="rock" && computerChoice==="paper") ||
            (userChoice==="paper" && computerChoice==="scissor") ||
             (userChoice==="scissor" && computerChoice==="rock")){
                userWin = false;
                checkWinner(userWin);
    }else{
        userWin = true;
        checkWinner(userWin);
    }
}
const res = document.querySelector(".result")
function matchDraw(){
    res.innerText = "MATCH DRAWN"
    res.style.backgroundColor = "gray"
}
function UserWin(){
    res.innerText = "PLAYER WIN"
    res.style.backgroundColor = "green"
    ussc++;
    userScore.innerText = ussc;
    checkUltimateWinner();
}
function compWin(){
    res.innerText = "COMPUTER WIN"
    res.style.backgroundColor = "red"
    comsc++;
    compScore.innerText = comsc;
    checkUltimateWinner();
}
function checkWinner(userWin){
    if (userWin){
        UserWin();
    }else{
        compWin();
    }
}

function checkUltimateWinner(){
    if (ussc===10 || comsc===10){
        if (ussc===10){
            CongratsPopUp(`CONGRATULATIONS ${playerName} | YOU WON`);
            defaultSet();
        }else{
            showPopUp("COMPUTER WON")
            defaultSet();
        }
    }
}
function defaultSet(){
    usChoice.innerText = "NONE"
    comChoice.innerText = "NONE"
    comsc = 0;
    ussc = 0;
    userScore.innerText = 0
    compScore.innerText = 0
    res.innerText = "RESULT";
}
function CongratsPopUp(msg){
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <p>${msg}</p>
            <button class="popup-close">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
    const closeBut = document.querySelector(".popup-close");
    closeBut.addEventListener("click",()=>{
        popup.remove();
    })
}
function showPopUp(msg){    
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <p>${msg}</p>
            <button class="popup-close">TRY AGAIN</button>
        </div>
    `;
    document.body.appendChild(popup);
    const closeBut = document.querySelector(".popup-close");
    closeBut.addEventListener("click",()=>{
        popup.remove();
    })
}
