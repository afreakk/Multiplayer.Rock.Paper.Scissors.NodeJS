   var 
        gameport        = process.env.PORT || 4004,
        io              = require('socket.io'),
        express         = require('express'),
        verbose         = false,
        http            = require('http'),
        app             = express(),
        server          = http.createServer(app);
 
/* Express server set up. */
 
//The express server handles passing our content to the browser,
//As well as routing users where they need to go. This example is bare bones
//and will serve any file the user requests from the root of your web server (where you launch the script from)
//so keep this in mind - this is not a production script but a development teaching tool.
 
server.listen( gameport );
console.log('\t :: Express :: Listening on port ' + gameport );

    //By default, we forward the / path to index.html automatically.
 app.get( '/', function( req, res ){
    console.log('trying to load %s', __dirname + '/index.html');
    res.sendfile( '/index.html' , { root:__dirname });
});
 
 
        //This handler will listen for requests on /*, any file from the root of our server.
        //See expressjs documentation for more info on routing.
 
app.get( '/*' , function( req, res, next ) {

        //This is the current file they have requested
    var file = req.params[0];

        //For debugging, we can track what files are requested.
    if(verbose) console.log('\t :: Express :: file requested : ' + file);

        //Send the requesting client the file.
    res.sendfile( __dirname + '/' + file );

}); //app.get *

/* Socket.IO server set up. */
 
//Express and socket.io can work together to serve the socket.io client files for you.
//This way, when the client requests '/socket.io/' files, socket.io determines what the client needs.
        
        //Create a socket.io instance using our express server
var sio = io.listen(server);

    //Configure the socket.io connection settings.
    //See http://socket.io/
sio.configure(function (){
    sio.set('log level', 0);
    sio.set('authorization', function (handshakeData, callback) {
      callback(null, true); // error first callback style
    });
});
var gameServer = new (require('./rpserver/gameservers.js')).MainServer(sio);
sio.sockets.on('connection', function (client) 
{
    gameServer.handleJoin(client);
    console.log('\t socket.io:: player ' + client.userid + ' connected');
    client.emit('onconnected', { id: client.userid } );
    client.on('rps', function(choice) {
        gameServer.handleRPSInput(client, choice);
    });
    client.on('disconnect', function () {
        gameServer.handleDisconnect(client);
    });
    client.on('nick', function(nick) {
        gameServer.handleNickChange(client, nick);
    });
    client.on('chat', function(msg) {
        gameServer.handleChat(client, msg);
    });
     
});
