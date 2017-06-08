console.log("the bot is runnning");

var Twit = require('twit');         //require twit package

var config = require('./config');   //authentication
console.log(config);

var T = new Twit(config);           

var tweet = {
    status: '#haveagoodday from node.js'    
}

T.post('statuses/update', tweet, tweeted);   //post tweet   

function tweeted(err, data, response) {     //callback if the post went through or not 
    if (err) {
        console.log("Something went wrong!");
    } else {
        console.log("It worked!");
    }
}
