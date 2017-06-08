console.log("the bot is runnning");

var Twit = require('twit');         //require twit package

var config = require('./config');   //authentication
console.log(config);

var T = new Twit(config);           

var tweet = {
    status: '#haveagoodday from node.js'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log("Something went wrong!");
    } else {
        console.log("It worked!");
    }
}
