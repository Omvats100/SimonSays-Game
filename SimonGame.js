let gameseq=[];
let userseq=[];
 
let btns=["yellow","red","purple","green"]
let  started= false;
let lavel=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Started");
        started=true;
    }
    lavelup();
});
function gameflash(btns){
    btns.classList.add("flash");
    setTimeout(function(){
    btns.classList.remove("flash");    
    },250);
}
function userflash(btns){
    btns.classList.add("userflash");
    setTimeout(function(){
    btns.classList.remove("userflash");    
    },250);
}

 function lavelup(){
 userseq=[];
  lavel++;
  h2.innerText=`Lavel${lavel}`;
  let ranidx= Math.floor(Math.random()*3);
  let ranclr= btns[ranidx];
  let ranbtn=document.querySelector(`.${ranclr}`);
  gameseq.push(ranclr);
  console.log(gameseq);
  gameflash(ranbtn);
  
}
function checkAns(idx){
    if(userseq[idx]== gameseq[idx]){
       if(userseq.length==gameseq.length){
      setTimeout(lavelup,1000);
    }
}
    else{
        h2.innerHTML=`Game Over! Your score was <b>${lavel}</b> <br>press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";   
        },200);
    reset();
    }
}
function btnpress(){
 console.log(this); 
 let getbtn= this;//value of this is input of btnpress()
 userflash(getbtn);

  let userclr= getbtn.getAttribute("id");
  userseq.push(userclr);

  checkAns(userseq.length-1);
}
let allbtn= document.querySelectorAll(".btn");
for(botn of allbtn){
 botn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    lavel=0;
}