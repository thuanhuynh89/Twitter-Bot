console.log("the bot is runnning");

var Twit = require('twit');         //require twit package

var config = require('./config');   //authentication
var T = new Twit(config);

var exec = require('child_process').exec;   //child_process is part of node library that gets the "executable file" from the parent process

var fs = require('fs'); //enables user to read file sync

tweetIt();

function tweetIt() {
    var cmd = "C:\\Users\\Thuan\\Documents\\processing-3.3.4\\processing-java --sketch=C:\\Users\\Thuan\\Documents\\processing-3.3.4\\dots --run";  //1 execute command
    exec(cmd, processing);

    function processing() {                                     //2 generates filename
        var filename = 'dots\\output.png';
        var params = { encoding: 'base64' }
        var b64 = fs.readFileSync(filename, params);

        T.post('media/upload', { media_data: b64 }, uploaded);     //3 post filename and upload file

        function uploaded(err, data, response) {                
            var id = data.media_id_string;
            var tweet = {
                status: '#dots from node.js',
                media_ids: [id]
            }
            T.post('statuses/update', tweet, tweeted);
        }


        function tweeted(err, data, response) {
            if (err) {
                console.log("Something went wrong!");
            } else {
                console.log("It worked!");
            }
        }
    }
}

