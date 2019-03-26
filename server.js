var express = require('express');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});





