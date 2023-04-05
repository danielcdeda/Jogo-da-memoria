var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;

$(document).one("keydown", function () {
    nextLevel();
});

// Função que irá resetar cada vez que o jogador acertar a resposta //

function nextLevel() {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    setTimeout(() => {
        $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/' + randomChosenColor + '.mp3');
        audio.play();
    }, 700);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    userClickedPattern = [];
};

// Função de evento do click. Caso o jogador acerte a resposta, a função de cima executará novamente. Caso contrário, será fim de jogo e ele precisará resetar a página!//

$(".btn").on("click", function(event) {
    var userChosenColour = $(event.target).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    var i = userClickedPattern.length
    if (userChosenColour == gamePattern[i - 1]) {
        if (i == gamePattern.length) {
            nextLevel();
        };
    }
    else {
     $("#level-title").text("Game Over! Refresh to try again");
    } 
});

// Função em que o áudio é tocado com o click do jogador em qualquer botão //

function playSound(name) {
    var audioClick = new Audio('./sounds/' + name + '.mp3');
    audioClick.play();
};

// Função que anima o botão ao ser clicado //

function animatePress(currentColour) {
   var animatedButton = $("#" + currentColour).addClass("pressed");
   setTimeout(function(){
    animatedButton.removeClass("pressed");
}, 100);
};


