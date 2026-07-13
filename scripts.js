let boxbtn = document.querySelectorAll(".box");
let boxcon = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#reset");

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


boxbtn.forEach((box)=>{
box.addEventListener("click", ()=>{
    if(turn0){
        box.innerText = "O";
        turn0 = false;
    } else {
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;

    checkwinner();
});
});
  
const showWinner = (winner)=>{
    msg.innerText = `Winner is ${winner}`;
    boxcon.classList.remove("hide");
    boxdisable();

}

const checkwinner = () => {
    for (let pattern of winpatterns){
        let val1 = boxbtn[pattern[0]].innerText;
        let val2 = boxbtn[pattern[1]].innerText;
        let val3 = boxbtn[pattern[2]].innerText;
    
    if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 === val2 && val2 === val3){
            console.log("winner",val1);
            showWinner(val1);
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

}

resetbtn.addEventListener( "click",() => {
    resetgame();
})


