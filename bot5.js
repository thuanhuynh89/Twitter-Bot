console.log("the bot is runnning");

var Twit = require('twit');         //require twit package

var config = require('./config');   //authentication
var T = new Twit(config);


var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
    // var fs = require('fs');             //node module to write file system
    // var json = JSON.stringify(eventMsg,null,2); //take javaScript object and turn into string
    // fs.writeFile("tweet.json",json);    //tells fs to write new file called tweet.json

    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;

    console.log(replyto + ' ' + from);

    if (replyto === 'thuanhuynh89') {
        var newtweet = '@' + from + 'my day was good as well!!';
        tweetIt(newtweet)
    }

}



function tweetIt(txt) {         //tweets back to the follower

    var tweet = {
        status: txt
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




