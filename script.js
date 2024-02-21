let currentPlayerblock=document.querySelector("[data-current-player]");
let newGame=document.querySelector("[data-new-game]");
let gameDivs = document.querySelectorAll('[data-game] > div');
let counter;
let winPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let currentPlayer;
let gridposition;
function initGame(){
    counter=0;
    currentPlayer="X";
    gridposition = ["","","","","","","","",""];
    currentPlayerblock.textContent =`Current Player - ${currentPlayer}`;
    gameDivs.forEach((div)=>{
        div.classList.remove("bg-green-600")
        div.textContent="";
        div.style.pointerEvents="all";
    });
}
initGame();

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    currentPlayerblock.textContent =`Current Player - ${currentPlayer}`;
}

function gameOver() {
    let answer="";
        winPosition.forEach((position)=>{
            if(gridposition[position[0]]!="" && gridposition[position[0]]==gridposition[position[1]] && gridposition[position[1]] ==gridposition[position[2]]){
                
                gameDivs.forEach((div)=>{div.style.pointerEvents="none"})
                
                if(gridposition[position[0]]==="X"){
                    answer="X";
                }
                else{
                    answer="O";
                }
                gameDivs[position[0]].classList.add("bg-green-600");
                gameDivs[position[1]].classList.add("bg-green-600");
                gameDivs[position[2]].classList.add("bg-green-600");
            }
        });
        if(answer!==""){
            currentPlayerblock.textContent =`Winer - ${answer}`;
            newGame.classList.remove("hidden");
        }
        else if(counter==9){
            currentPlayerblock.textContent =`Game Tied`;
            newGame.classList.remove("hidden");
        }
}

function handle(index) {
    if(gameDivs[index].textContent==""){
        counter++;
        gridposition[index]=currentPlayer;
        gameDivs[index].textContent = currentPlayer;
        gameDivs[index].style.pointerEvents="none";
        switchPlayer();
        gameOver();
    }
}

gameDivs.forEach((div, index) => {
    div.addEventListener('click',()=>{handle(index)});
    div.style.cursor = 'pointer';
});

// function endGame() {
    
// }

newGame.addEventListener("click",initGame);