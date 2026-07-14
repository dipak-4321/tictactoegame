let boxbtn = document.querySelectorAll(".box");
let boxcon = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#reset");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let nextGame =document.querySelector("#next");

let turn0 = true;

let winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
    let pl1 = 0;
    let pl2 = 0;
    let draw = 0;

boxbtn.forEach((box)=>{
box.addEventListener("click", ()=>{
    if(turn0){
        box.innerText = "O";
        turn0 = false;
    } else {
        box.innerText = "X";
        turn0 = true;
    }
    draw = draw + 1;
    box.disabled = true;

    checkwinner();
});
});
  
const showWinner = (winner)=>{
    msg.innerText = `Winner is ${winner}`;
    boxcon.classList.remove("hide");
    boxdisable();
   
    if(winner == 'O'){ 
        pl1=pl1+1;
        player1.innerText =`Player1 Score: ${pl1}`;
    }else {
        pl2=pl2+1;
        player2.innerText = `Player2 Score: ${pl2}`;
    }
}

const checkwinner = () => {
    for (let pattern of winpatterns){
        let val1 = boxbtn[pattern[0]].innerText;
        let val2 = boxbtn[pattern[1]].innerText;
        let val3 = boxbtn[pattern[2]].innerText;

        let winnerFound = false;
    
    if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 === val2 && val2 === val3){
            console.log("winner",val1);
            showWinner(val1);
            winnerFound = true;
        }
        if(draw === 9 && winnerFound !== true){
            console.log("draw");
            msg.innerText = "Draw";
            boxcon.classList.remove("hide");
            }    
    }
    }
};

const boxenable = () => {
        for (let box of boxbtn){
        box.disabled = false;
        box.innerText = "";
    }
}
const boxdisable = () => {
    for (let box of boxbtn){
        box.disabled = true;
    }
}
const resetgame = () => {
    turn0 = true;
    boxenable();
    boxcon.classList.add("hide");
    player1.innerText="Player1 Score:";
    player2.innerText="Player2 Score:";

    pl1 = 0;
    pl2 = 0;
    draw = 0;
}

resetbtn.addEventListener( "click",() => {
    resetgame();
});
const nextG = () => {
    turn0 = true;
    boxenable();
    boxcon.classList.add("hide");
    draw = 0;
};
 
nextGame.addEventListener( "click" ,() =>{
   nextG();
});



