let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const winPaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = ()=>{
    turn0 = true;
    enablebtn();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    // console.log("box click");
    if(turn){
        box.innerText = "O";
        turn = false;
    }
    else{
        box.innerText = "X";
        turn = true;
    }
    box.disabled = true;
    checkWiner();
});
});


const showWinner = ((winner) => {
    msg.innerText =`Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
});

const disalebtn = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebtn = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const checkWiner = ()=>{
    for(let pattern of winPaterns){
       
         let posi1 =   boxes[pattern[0]].innerText;
         let posi2 =   boxes[pattern[1]].innerText;
         let posi3 =    boxes[pattern[2]].innerText;
    
        if(posi1 != "" && posi2 !="" && posi3 !=""){
            if(posi1 === posi2 && posi2 === posi3){
                //   console.log("winner", posi1);
                  disalebtn();
                  showWinner(posi1);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)