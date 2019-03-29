var friends = require('../data/friends');


module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsData);
    });

    app.post('/api/friends', function(req,res){
        console.log('posted!');
        newFriend = friends.friends[indexOf(friends.length -1)];
        function compare(newFriend){
            for(var i = 0; i < friends.length; i++){
                var bestFriendValue = 100;
                var bestFriend = {};
                for(var j = 0; j < friend.scores.length; i++){
                    var diff = Math.abs(newFriend.scores[j] - friend[i].scores[j]);
                    difference += diff;
                    if(difference < bestFriendValue){
                        bestFriendValue = difference;
                        bestFriend = friend[i];
                    } else {
                        return
                    }
                }
            }
            
        }
        compare(newFriend);
    });
}