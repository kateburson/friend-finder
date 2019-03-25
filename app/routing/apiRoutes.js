var server = require('server');
var friend = require('friends');

server.app.get('/api/friends', function(req, res){
    res.sendFile(path.join(__dirname + '/friends.js'));
});

server.app.post('/api/friends', function(req,res){
    const data = req.body;
    bestFriend();
    res.send(friend);
});