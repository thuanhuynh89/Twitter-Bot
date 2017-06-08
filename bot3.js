console.log("the bot is runnning");

var Twit = require('twit');         //require twit package

var config = require('./config');   //authentication
var T = new Twit(config);


var stream = T.stream('user');     

stream.on('follow', followed);

function followed(eventMsg) {       //once followed, follower will receive reply from my twitter
    console.log("Follow event!");
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('@' + screenName + ' bot reply, how was your day?');
}



//setInterval(tweetIt, 1000*20)

function tweetIt(txt) {         //tweets back to the follwer

    //var r = Math.floor(Math.random()*100);

    var tweet = {
        status: txt //'here is a random number' + r + ' #haveagoodday from node.js'
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
