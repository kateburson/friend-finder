var friendsData = require('../data/friends');

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.send('test get');
        res.end();
    });

    app.post('/api/friends', function(req,res){
        res.send('/api/friends post');
        res.end();
    });

}