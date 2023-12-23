let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGame = document.querySelector("#new-game-button");
let msg = document.querySelector("#message");
let msgContainer = document.querySelector(".msg");
let turn = 1;

const patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn = 1;
    enableBoxes();
    msgContainer.classList.add("hide");
};


function disableBoxes (){
for(let box of boxes){
    box.disabled = true;
}
};

function enableBoxes (){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

for(let box of boxes) {
    box.addEventListener("click", ()=>{
        if (turn % 2 != 0) { // player 1
            box.innerText = "O";
            
        } else{
            box.innerText = "X";
        }
        box.disabled = true;
        if (checkWinner()){
            disableBoxes();
            if(turn % 2 != 0) {
                showWinner("Player O");
            } else {
                showWinner("Player X");
            }
        }
        turn++;
        if (turn == 10) {
            showTie();
        }

    });
}

const showTie = () => {
    msg.innerText = `Tie Die`;
    msgContainer.classList.remove("hide");
}


const showWinner = (winner) => {
    msg.innerText = `Welcome to Illuminate, ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(p of patterns){
        if(boxes[p[0]].innerText != "" && boxes[p[1]].innerText != "" && boxes[p[2]].innerText != ""){
            if(boxes[p[0]].innerText === boxes[p[1]].innerText && boxes[p[0]].innerText === boxes[p[2]].innerText) {
                return true;
            }
        }
    }
    return false;
};




newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);