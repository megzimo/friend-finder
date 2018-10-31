
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
        let differences = [];

        // loop through friends and do math to add  
        friends.forEach(function(user){
          let diff = 0;

            for(let i=0; i < userResponse.answers.length; i++){
              let 
            }


        })
       // push into api/friends
       
      });
    };





3

//     //POsting through express to the Friends.js only avail on server, not persitant 
//     app.post('/api/friends', function (req, res){
//         var newFriend = req.body;
//         var similarities;
//         var similaritiesArr = [];

//         friends.forEach (friend => {
//             let similarityScore = 0;

//             for ( var i = 0; i < friend.scores.length; i++) {
//                 similarityScore += Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
//             };

//             similaritiesArr.push({
//                 name: friend.name,
//                 score : similarityScore,
//                 photo: friend.photo
//             });
//         })

//         //Searching for the best match by the lowest differances
//         let matchedFriend = similaritiesArr.reduce( (carry, next) => {
//             if( carry.score < next.score )
//                 return carry;
//             else
//                 return next;
//         })

//         //Andrew showed me how to write it this was as well. Saving for reference.
//         // matchedFriend = similaritiesArr.reduce( 
//         //     (carry, next) => carry.score < next.score ? carry : next
//         // );        

//         friends.push(newFriend)
//         res.send(matchedFriend)
        
//     })



// }

// module.exports = api;
