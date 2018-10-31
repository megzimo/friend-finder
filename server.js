const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`)
});

//////////////////////////////////////////////  ROUTES  //////////////////////////////////////////////

require("./app/routing/api_routes")(app);
require("./app/routing/html_routes")(app);