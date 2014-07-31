var TextElem = function(id)
{
    this.id = id;
    this.elem = document.getElementById(id);
};
TextElem.prototype.setText = function(text)
{
    this.elem.innerHTML = text;
};

function expandRPS(choice)
{
    if(choice === "r")
        return "rock";
    if(choice === "p")
        return "paper";
    if(choice === "s")
        return "scissor";
}
function createConsoleResultMsg(otherPlayer)
{
    var str = otherPlayer.name+" picked: "+expandRPS(otherPlayer.choice)+", and ";
    str +=otherPlayer.result === 1 ? "won." : otherPlayer.result === null ? "it was a draw." : "lost.";
    return str;
}
function showResults(otherPlayer)
{
    userConsole.appendText(createConsoleResultMsg(otherPlayer));
    updateWinStreak(otherPlayer);
    mainScreen.show("result_screen");
    setTimeout(function()
    {
        console.log("WISISIT");
        mainScreen.show("choose_screen");

    }, 2000);
}
function updateWinStreak(otherPlayer)
{
    var your_result = "Draw.";
    if(otherPlayer.result === 1 ){
        winStreak = 0;
        your_result = "You lost.";
    }
    else if(otherPlayer.result === 0 ){
        winStreak ++;
        your_result = "You won!!!!";
    }
    mainScreen.screens.result_screen.elem.innerHTML = your_result;
    bottomBar["win-streak"].setText("Win-Streak: "+winStreak);
}
function sendRock()
{
    socket.doMove("r");
    mainScreen.show("selected_screen");
    document.getElementById("selected_text").innerHTML = "Rock selected!";
}
function sendPaper()
{
    socket.doMove("p");
    mainScreen.show("selected_screen");
    document.getElementById("selected_text").innerHTML = "Paper selected!";
}
function sendScissor()
{
    socket.doMove("s");
    mainScreen.show("selected_screen");
    document.getElementById("selected_text").innerHTML = "Scissor selected!";
}
