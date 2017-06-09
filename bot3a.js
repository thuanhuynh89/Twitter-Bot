console.log("the bot is runnning");

var Twit = require('twit');         //require twit package

var config = require('./config');   //authentication
var T = new Twit(config);


tweetIt();
setInterval(tweetIt, 1000*20)

function tweetIt() {         

    var r = Math.floor(Math.random()*100);

    var tweet = {
        status: 'here is a random number' + r + ' #haveagoodday from node.js'
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        } else {
            console.log("It worked!");
        }
    }
}
