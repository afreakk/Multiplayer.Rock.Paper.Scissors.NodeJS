var Socket = function()
{
    this.s = io.connect('/');

    this.s.on('onconnected', function( data ) {
        console.log( 'Connected successfully to the socket.io server. My server side ID is ' + data.id );
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
