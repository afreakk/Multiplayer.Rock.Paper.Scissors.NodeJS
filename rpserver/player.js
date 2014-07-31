//********==================================================
var UUID            = require('node-uuid');
var utils = require('./gameserverutils.js');
//********==================================================
function getOtherPlayer(players, me)
{
    for(var key in players)
    {
        if(key !== me.userid)
        {
            return players[key];
        }
    }
}
function packPlayerResult(player, me)
{
    var packed = {};
    packed.name = player.name;
    packed.choice = player.choice;
    packed.result = utils.getResult(player.choice, me.choice);
    return packed;
}
//********==================================================
var Player = function(socket)
{
    socket.userid = UUID();
    this.name = null;
    this.socket = socket;
    this.choice = null;
};
Player.prototype.setNick = function(nick)
{
    this.name = nick;
};
Player.prototype.doMove = function(choice)
{
    this.choice = choice;
};
Player.prototype.hasMoved = function()
{
    return this.choice === null ? false : true;
};
Player.prototype.resetChoice = function()
{
    this.choice = null;
};
Player.prototype.sendMsg = function(typemsg, msg)
{
    this.socket.emit(typemsg, msg);
};
//********==================================================
exports.Player = Player;
exports.getOtherPlayer = getOtherPlayer;
exports.packPlayerResult = packPlayerResult;
//********==================================================
