const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`)
});

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//////////////////////////////////////////////  ROUTES  //////////////////////////////////////////////

