//********==================================================
var utils = require('./gameserverutils.js');
var playerModule = require('./player.js');
//********==================================================
var AGame = function()
{
    this.players = {};
};
AGame.prototype.broadcast= function(typemsg, msg)
{
    for(var key in this.players)
        this.players[key].sendMsg(typemsg, msg);
};
AGame.prototype.addPlayer= function(client)
{
    var player = new playerModule.Player(client);
    this.players[player.socket.userid] = player;
};
AGame.prototype.noticeFull=function()
{
    if(this.isFull())
    {
        var keys = Object.keys(this.players);
        var playerA = this.players[keys[0]];
        var playerB = this.players[keys[1]];
        playerB.sendMsg('join', playerA.name);
        playerA.sendMsg('join', playerB.name);
    }
};
AGame.prototype.removePlayer=function(client)
{
    var name;
    if(client.userid in this.players)
    {
        name = this.players[client.userid].name;
        delete this.players[client.userid];
    }
    this.broadcast("part", name);
};
AGame.prototype.handleRPSInput=function(client, choice)
{
    this.players[client.userid].doMove(choice);
    if(Object.keys(this.players).length<2){
        client.emit('servermsg', 'Not enough players, please wait for more players:)');
    }
    else if(utils.everyonePicked(this.players)){
        // cuz we r only supporting two players atm
        var keys = Object.keys(this.players);
        var playerA = this.players[keys[0]];
        var playerB = this.players[keys[1]];
        playerB.sendMsg('results', playerModule.packPlayerResult(playerA, playerB));
        playerA.sendMsg('results', playerModule.packPlayerResult(playerB, playerA));
        for(var key in this.players){
            this.players[key].resetChoice();
        }
    }
    else{
        client.emit("servermsg", "Waiting for other players to choose.");
    }
};
AGame.prototype.isFull=function()
{
    return Object.keys(this.players).length >= 2 ? true : false;
};
AGame.prototype.hasPlayer=function(client)
{
    return client.userid in this.players;
};
AGame.prototype.handleNickChange = function(client, nick)
{
    if(client.userid in this.players)
        this.players[client.userid].setNick(nick);
    this.noticeFull();
};
//********==================================================
exports.AGame = AGame;
