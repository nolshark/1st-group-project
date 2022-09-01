var startButton = document.querySelector(".start-button");
var rulesButton = document.querySelector(".rules-button");
var scoresButton = document.querySelector(".scores-button");
var optsReturn = document.querySelector(".options-return");
var curReturn = document.querySelector(".currency-return");
var quitButton = document.querySelector(".quit-button");
var infoScreens = document.querySelector(".info-screens");
var rules = document.querySelector(".rules");
var highScores = document.querySelector(".high-scores");
var curSel = document.querySelector(".currency-select");
var tranSel = document.querySelector(".translate-select");
var curChoice = document.querySelector(".currency-choice");
var tranChoice = document.querySelector(".translate-choice");
var hitButton = document.querySelector(".hit-button");
var holdButton = document.querySelector(".hold-button");
var p1 = document.querySelector(".p-1"); 
var d1 = document.querySelector(".d-1"); 
var p2 = document.querySelector(".p-2"); 
var d2 = document.querySelector(".d-2"); 
var p3 = document.querySelector(".p-3"); 
var d3 = document.querySelector(".d-3"); 
var p4 = document.querySelector(".p-4"); 
var d4 = document.querySelector(".d-4"); 
var p5 = document.querySelector(".p-5"); 
var d5 = document.querySelector(".d-5"); 
var p6 = document.querySelector(".p-6"); 
var d6 = document.querySelector(".d-6"); 
var p7 = document.querySelector(".p-7"); 
var d7 = document.querySelector(".d-7"); 
var p8 = document.querySelector(".p-8"); 
var d8 = document.querySelector(".d-8"); 
var p9 = document.querySelector(".p-9"); 
var d9 = document.querySelector(".d-9"); 
var p10 = document.querySelector(".p-10"); 
var d10 = document.querySelector(".d-10"); 

// Start Game

function startGame () {
    startButton.style.display = "none";

    quitButton.style.display = "grid";
    hitButton.style.display = "grid";
    holdButton.style.display = "grid";
    p1.style.display = "grid"; 
    d1.style.display = "grid"; 
    p2.style.display = "grid"; 
    d2.style.display = "grid"; 
}

//startButton.addEventListener("click", startGame);

//Get rules

rulesButton.addEventListener("click", () => {
  rulesButton.style.display = "none";
  scoresButton.style.display = "none";

  optsReturn.style.display = "grid";
  rules.style.display = "grid";
  
});

//Get high scores

scoresButton.addEventListener("click", () => {
  rulesButton.style.display = "none";
  scoresButton.style.display = "none";

  optsReturn.style.display = "grid";
  highScores.style.display = "grid";
});

//Return to options screen

optsReturn.addEventListener("click", () => {
    rulesButton.style.display = "grid";
    scoresButton.style.display = "grid";
  
    optsReturn.style.display = "none";
    rules.style.display = "none";
    highScores.style.display = "none";
    
  });

  //Quit Game

  quitButton.addEventListener("click", () => {
    startButton.style.display = "grid";
  
    quitButton.style.display = "none";
    hitButton.style.display = "none";
    holdButton.style.display = "none";
  });