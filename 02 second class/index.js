const express = require( 'express' );
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

// Import the routes from our various modules and add them to our application.
require("./routes/index")(app);
require("./routes/users")(app);

// Set up port and listen for incoming connections on that port.
var server = app.listen(process.env.PORT || 3001, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port);
});