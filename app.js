let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let btns=["yellow","red","purple","green"];

let h2=document.querySelector("p");
let space=document.querySelector(".space");
space.addEventListener("click",function(){
    if(started==false && level==0)
    {
        console.log("game is started");
        start=true;
        levelUp();
    }
}); 

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}
  
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    // random btn choose
    let randIdx = Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over ! your score was <b>${level}.</b><br>Press Start  to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="lightpink"; 
        },150);
        reset();
    }
} 
function btnPress(){
    let btn = this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1); 
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}