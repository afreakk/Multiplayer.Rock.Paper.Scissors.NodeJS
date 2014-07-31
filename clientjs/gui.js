function showPlayerNick(nick)
{
   document.getElementById("player_count").innerHTML = "Players: 2/2";
   document.getElementById("opponent").innerHTML = "Opponent: "+nick;
    userConsole.appendText(nick+" joined the game.");
}
function playerLeft(nick)
{
   document.getElementById("player_count").innerHTML = "Players: 1/2";
   document.getElementById("opponent").innerHTML = "Opponent: None";
    userConsole.appendText(nick+" left the game.");
}
function loginComplete()
{
    nick = document.getElementById("nick_input").value;
    socket.changeNick(nick);
    document.getElementById("login").style.display = "none";
}
function showMainScreen()
{
   document.getElementById("main_screen").style.display = "block";
   document.getElementById("main_screen").style.opacity = 1;
}
function fadeInChooseScreen()
{
    document.getElementById("choose_screen").style.display = "block";
}
function fadeOutChooseScreen()
{
    document.getElementById("choose_screen").style.display = "none";
}
