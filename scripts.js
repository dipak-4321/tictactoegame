let boxbtn = document.querySelectorAll(".box");

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
const checkwinner = () => {
    for (let pattern of winpatterns){
        let val1 = boxbtn[pattern[0]].innerText;
        let val2 = boxbtn[pattern[1]].innerText;
        let val3 = boxbtn[pattern[2]].innerText;
    
    if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 === val2 && val2 === val3){
            console.log("winner",val1);
        }
    }
    }

};
