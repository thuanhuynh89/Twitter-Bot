console.log("the bot is runnning");

var Twit = require('twit');         //require twit package

var config = require('./config');   //authentication
console.log(config);

var T = new Twit(config);           

var params = {                      //setup parameters
  q: 'banana since:2011-11-11',     
  count: 100
}

T.get('search/tweets', params, gotData);  //setup GET Request

function gotData(err, data, response) {   //handle GET Request
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
