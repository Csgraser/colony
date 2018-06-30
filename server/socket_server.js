//all server-side sockets functions will be written here;
//initSockets will be exported to server-side index
var roomData = {};
module.exports.initSockets = function(socket, clients, ioAccess){
  var isButtonClicked = false;
  socket.emit('test', { hello: 'world' });
  socket.on('joinRoom', function(data){
    if (!roomData[data.room]){
      roomData[data.room] = {
        hasClickedButton: false,
        activeUser: '',
        incorrectUserCount: 0,
        usersCount: 0,
        gameboard: null,
      };
    }
    socket.join(data.room);

  });
}