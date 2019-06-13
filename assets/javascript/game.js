var wins=0;
var losses=0;
var guessLeft=10;
var playerGuess=[];

var computerChoise=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess= computerChoise[Math.round(Math.random().computerChoise.length)];


function checkGuess(){
  var userGuess = checkGuess;
  if(userGuess==computerGuess){
    numwins();
  }
  else{
    numlosses();
  }
}


function numwins(){
  wins++;
  var winPlace = document.getElementById("#numwins");
  var updateWin = "Wins: " + wins;
  winPlace.appendchild(updateWin);
}


function losses(){
  losses--;
  var lossPlace = document.getElementById("#numlosses");
  var updteLoss = "losses:"+losses;
  lossPlace.appendChild(updteLoss);
}



function reset(){
wins=0;
losses=0;
guessLeft=9;
}
reset();
var checkreset = document.getElementById("#reset").innerHTML="wins=0,losses=0,guessLeft=9"



document.addEventListener('keypress', checkGuess);