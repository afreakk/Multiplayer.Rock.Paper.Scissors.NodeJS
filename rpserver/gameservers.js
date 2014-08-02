//********==================================================
var game_h = require('./agame');
//********==================================================
var MainServer = function(sio)
{
    this.sio = sio;
    this.games = [];
};
MainServer.prototype.handleRPSInput = function(client, choice)
{
    for(var i=0; i<this.games.length; i++)
    {
        if(this.games[i].hasPlayer(client))
            this.games[i].handleRPSInput(client, choice);
    }
};
MainServer.prototype.handleJoin = function(client)
{
    var joined = false;
    for(var i=0; i<this.games.length; i++)
    {
        if(!this.games[i].isFull())
        {
            this.games[i].addPlayer(client);
            joined = true;
        }
    }
    if(!joined)
    {
        this.games.push(new game_h.AGame());
        this.games[this.games.length-1].addPlayer(client);
    }
};
MainServer.prototype.handleDisconnect = function(client)
{
    for(var i=0; i<this.games.length; i++)
        this.games[i].removePlayer(client);
    console.log('\t socket.io:: client disconnected ' + client.userid );
};
MainServer.prototype.handleNickChange = function(client, nick)
{
    for(var i=0; i<this.games.length; i++)
        this.games[i].handleNickChange(client, nick);
};
MainServer.prototype.handleChat = function(client, msg)
{
    for(var i=0; i<this.games.length; i++)
        this.games[i].handleChat(client, msg);
};
//********==================================================
exports.MainServer = MainServer;
//********==================================================
