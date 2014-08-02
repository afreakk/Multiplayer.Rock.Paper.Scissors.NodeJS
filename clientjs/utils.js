function getStringTime() 
{
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h = twoDig(h);
    m = twoDig(m);
    s = twoDig(s);
    return h+":"+m+":"+s;
}

function twoDig(nmb) {
    if (nmb<10) 
        nmb = "0" + nmb; 
    return nmb;
}

function expandRPS(choice)
{
    if(choice === "r")
        return "Rock";
    if(choice === "p")
        return "Paper";
    if(choice === "s")
        return "Scissor";
}
function createConsoleResultMsg(otherPlayer)
{
    var str = otherPlayer.name+" picked: "+expandRPS(otherPlayer.choice)+", and ";
    str += otherPlayer.result === 1 ? "won." : otherPlayer.result === null ? "it was a draw." : "lost.";
    return str;
}
function showResults(otherPlayer)
{
    userConsole.appendText(createConsoleResultMsg(otherPlayer));
    updateWinStreak(otherPlayer);
    mainScreen.show("result_screen");
    setTimeout(function() { mainScreen.show("choose_screen"); }, 2000);
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
function doMove(choice)
{
    socket.doMove(choice);
    mainScreen.show("selected_screen");
    document.getElementById("selected_text").innerHTML = expandRPS(choice)+" selected!";
    chatInput.focus();
}
