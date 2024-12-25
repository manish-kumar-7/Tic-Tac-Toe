let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetbutton");
let newgamebtn=document.querySelector("#newbtn");
let msgcointainer=document.querySelector(".msg");
let msg=document.querySelector("#msgp");
let turno=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno){
            box.innerText="O";
            box.style.color="red";
            box.style.backgroundColor="yellow";
            turno=false;
            
        }
        else{
            box.innerText="X";
            box.style.color="yellow";
            box.style.backgroundColor="red";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disable1=()=>{
    for(let box of boxes){
        box.disabled=true;   
    }
}
const enable1=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="";
    }
}
const showwinner=(winner)=>{
    msg.innerText= `Congratulation , Winner is ${winner}`;
    
    msgcointainer.classList.remove("hide");
    disable1();
};
const checkwinner=()=>{
    for( let pattern of winpatterns){
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
       if(position1 !=""&& position2 !="" && position3!=""){
        if(position1===position2 && position2===position3){
            console.log("Winner");
            showwinner(position1);
        }
       }
    }
};
const resetgame=()=>{
    turno=true;
    enable1();
    msgcointainer.classList.add("hide");

}
newgamebtn.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);