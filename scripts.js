let boxbtn = document.querySelectorAll(".box");

let turn0 = true;

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
});
});