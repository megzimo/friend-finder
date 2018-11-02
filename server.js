const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/app/public')));

//////////////////////////////////////////////  ROUTES  //////////////////////////////////////////////

require("./app/routing/api_routes")(app);
require("./app/routing/html_routes")(app);


app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`)
});