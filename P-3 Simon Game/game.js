var gamePattern = [];
var userClickedPattern = [];
var started=false;
var level=0;
var buttonColours = ["red","blue","green","yellow"];

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level"+level);
        nextSequence();
        started=true;
    }
});

function playSound(name){
    // console.log(name);
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("level- "+level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        } 
    } 
    else {
        console.log("wrong ");
        playSound("wrong");
        $("body ").addClass(".game-over");
        setTimeout(function () {
            $("body").removeClass(".game-over");
          }, 200);
          $("#level-title").text("Game Over, Press Any Key to Restart");
          startOver();
    }
}


// function startthegame(){



// randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);
// randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);
// randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);
// randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);
// randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);
// randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);
// randomChosenColour = buttonColours[nextSequence()];
// gamePattern.push(randomChosenColour);
// console.log(gamePattern);
// $("div#"+randomChosenColour)