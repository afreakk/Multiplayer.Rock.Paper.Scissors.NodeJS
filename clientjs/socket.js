var Socket = function()
{
    this.s = io.connect('/');

    this.s.on('onconnected', function( data ) {
        console.log( 'My server side ID is ' + data.id );
    });
};
Socket.prototype.doMove = function( choice)
{
    this.s.emit("rps", choice);
};
Socket.prototype.changeNick = function(nick)
{
    this.s.emit("nick", nick);
};
Socket.prototype.sendChat = function(msg)
{
    this.s.emit("chat", msg);
};
