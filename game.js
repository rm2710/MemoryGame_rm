

/* global variables defination */
var userClickedPattern = [];
var generatedPattern = [];
var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var level = 0;
var started = false;

function myname()
{
  var playername = prompt("write your name ?")
  $("#level-user").text(playername);
  $("#level-game").text("0");

}

/* validate the keypress and start the game */
$(document).keypress(function(){

  var h = event.key;
  if (h==="a")
  {
    $("#level-title").text("level "+ level);
    playnextsequence();
  }
  })

/* choose the random color based on number */
function randomchoosencolor(){
  var randnum = nextsequence();
gamePattern = buttonColours[randnum]
  return gamePattern ;
}
/* add the colors to the array*/
function playnextsequence()
{
  var generatedcolor = randomchoosencolor()
  userClickedPattern = []
  level++
  $("#level-title").text("level "+ level);
    animatePress(generatedcolor)
    playSound(generatedcolor);
      generatedPattern.push(generatedcolor);
      console.log(generatedPattern);
}

/* add the colors on button click */
$(".btn").click(function() {
var getsinglecolor = $(this).attr('id');
 animatePress(getsinglecolor)
 playSound(getsinglecolor);
userClickedPattern.push(getsinglecolor);
console.log(userClickedPattern);
checkAnswer(userClickedPattern.length-1)
});

/* Check the answer */
function checkAnswer(currentlevel){
  if (generatedPattern[currentlevel] === userClickedPattern[currentlevel])
  {
  console.log("success");

  if (generatedPattern.length === userClickedPattern.length)
  {
    var score = userClickedPattern.length
    setTimeout(function() {
      $("#level-game").text(score);
      playnextsequence();
    }, 1000);
  }
  else{
    //Gameover();
  }
  }
  else{
    console.log("wrong");
      Gameover();

  }
};
function Gameover(){
  var soundtoplay = "sounds/wrong.mp3"
    var audio = new Audio(soundtoplay);
    audio.play();
    $("body").addClass("game-over")
    setTimeout(function(){
          $("body").removeClass("game-over");
      }, 100);
      $("#level-title").text("Game Over. Press A Key to Start");
      $("#level-game").text("0");
       generatedPattern = [];
       level = 0;
}
/* animate the button */
function animatePress(pressingcolor){
  $("#"+pressingcolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  $("#"+pressingcolor).addClass("pressed ")

  setTimeout(function(){
        $("#"+pressingcolor).removeClass("pressed");
    }, 100);
}
/* play the nutton sounds */
function playSound(colorname){
var soundtoplay = "sounds/"+colorname+".mp3"
  var audio = new Audio(soundtoplay);
  audio.play();

}
/* generate a random number */
function nextsequence(){
  var myrandomnumber = Math.random();
  var mygeneratednumber = (myrandomnumber*4) ;
  var myfloorednumber = Math.floor(mygeneratednumber);
  return myfloorednumber;
}
