
function expandRPS(choice)
{
    if(choice === "r")
        return "rock";
    if(choice === "p")
        return "paper";
    if(choice === "s")
        return "scissor";
}
function showResults(otherPlayer)
{
    str = otherPlayer.name+" picked: "+expandRPS(otherPlayer.choice)+", and ";
    str +=otherPlayer.result === 1 ? "won." : otherPlayer.result === null ? "it was a draw." : "lost.";
    userConsole.appendText(str);
    fadeInChooseScreen();
}
function sendRock()
{
    socket.doMove("r");
    fadeOutChooseScreen();
}
function sendPaper()
{
    socket.doMove("p");
    fadeOutChooseScreen();
}
function sendScissor()
{
    socket.doMove("s");
    fadeOutChooseScreen();
}
