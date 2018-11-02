const path = require("path");
const friends = require("../data/friends");

module.exports = function(app) {

  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Request
  app.post("/api/friends", function(req, res) {
    let userRes = req.body;
    let newSpirit = req.body.scores;
    let diff = [];

    let spiritMath = newSpirit.reduce((a,b) => a + parseInt(b), 0);
    let newSpiritScore = parseInt(spiritMath);
    // console.log("new spirit total score: " + newSpiritScore); /////// comes back as sum totals

    // go through each spirit animal, add up scores and calculate differences between scores
    friends.forEach(spirit => {
      let spiritScore = spirit.scores.reduce((a, b) => a + b, 0);
      // console.log("spirit score!!!: "+spiritScore)
  
      let diffScore = 0;
      diffScore += Math.abs(spiritScore - newSpiritScore)
      // console.log("diff score: "+ diffScore)
      diff.push({
        name: spirit.name,
        score: diffScore,
        image: spirit.image
      })
      // console.log("diff score array " + JSON.stringify(diff));
    }); // ENDS forEach()


    // looks at each difference score and finds the smallest value and returns the object of the best match
    let match = diff.reduce( (first, next) => {
      if( first.score < next.score ){
      return first;
    } else {
      return next
    } 
    } )
    // console.log("matched friend "+JSON.stringify(match));
    friends.push(userRes); // pushes users data to friend dataset
    res.send(match); // sends match to modal for prompting

  }); // ENDS app.post()


}; // ENDS module.exports
