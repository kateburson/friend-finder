var friends = require('../data/friends');

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        newFriend = req.body;
        friends.push(newFriend);
        console.log('new friend', newFriend);

        var difference = 40;
        var match = {};
        for(var i = 0; i < friends.length; i++){
            var newFriendSum =  newFriend.scores.reduce((a,b) => a + b, 0);
            var friendSum =  friends[i].scores.reduce((a,b) => a + b, 0);
            var diff = Math.abs(newFriendSum - friendSum);
            if(diff < difference){
                difference = diff;
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                console.log(match);
                return match;
            } else {
                return
            }
        }

        res.json({
            name: match.name,
            photo: match.photo
        });
    });
}

