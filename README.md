
# Twitter-Bot

bot.js = searches for tweets

bot2.js = post a tweet

bot3a.js = post tweets every 20 seconds

bot3b.js = if you receive a follower, bot will reply back to your follower with a auto reply

bot4.js = uploads a picture and tweet to my twitter

bot5.js = if you receive a tweet from someone, your bot will auto reply tweet 

config.js = type in in twitter access keys; you need to provide phone number to twitter get these keys

package.json = make sure to have when running node

**to run these you need to download node.js, make sure to install node_module, change file directories in the code, and have your own twitter configuration keys**

# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
heroku login

#create heroku app
heroku create name_of_heroku_app

cd to repo
git init if you haven't already
heroku git:remote -a name_of_heroku_app

git add . 
git commit -am "description"
git push heroku master
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

