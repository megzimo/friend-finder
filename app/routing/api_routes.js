const friends = require("../data/friends");
const path = require("path");

module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Request
  app.post("/api/friends", function(req, res) {
    let userResponse = req.body;
    let likeness = [];

    // loop through friends and do math to add
    friends.forEach(spirit => {
      let matchScore = 0;

      for (let i = 0; i < spirit.scores.length; i++) {
        matchScore = +Math.abs(
          parseInt(spirit.scores[i]) - parseInt(userResponse.score[i])
        );
      }

      likeness.push({
        name: spirit.name,
        score: matchScore,
        photo: spirit.photo
      });
    });

    let spiritMatch = likeness.reduce((carry, next) => {
      if (carry.score < next.score) {
        return carry;
      } else {
        return next;
      }
    });
    // push into api/friends
    friends.push(userResponse);
    res.send(spiritMatch)
  });
};

module.exports = api;
