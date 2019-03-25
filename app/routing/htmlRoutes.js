var server = require('server');

server.app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

server.app.get("/survey", function(req, res) {
res.sendFile(path.join(__dirname + '/survey.html'));
});