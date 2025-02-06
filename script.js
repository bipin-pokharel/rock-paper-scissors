let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

const gencompchoice = () => {
     const options = ["rock","paper","scissors"];
 const randomidx = Math.floor(Math.random()*3);
 return options[randomidx];
};
const drawgame = () => {
  msg.innerText = "game was draw!. Play again";
};
const showwin = (userwin) => {
  if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = "you win!";
    msg.style.backgroundColor = "green";
  }
  else{
    computerscore++;
    computerscorepara.innerText = computerscore;
    msg.innerText = "computer win!";
    msg.style.backgroundColor = "blue";
  }
};
const playgame = (Userchoice) => {
console.log("user choice=",Userchoice);
const compchoice = gencompchoice();
console.log("compchoice=",compchoice);
if(Userchoice === compchoice){
    drawgame();
}
else{
  let userwin = true;
  if(Userchoice === "rock"){
    userwin = compchoice === "paper"?false : true;
  }
  else if(Userchoice === "paper"){
    userwin = compchoice === "scissors"?false:true;
  }
  else{
    userwin = compchoice === "rock"?false:true;
  }
  showwin(userwin);
}
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const Userchoice = choice.getAttribute("id");
    playgame(Userchoice);
  });
});

 