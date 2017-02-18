# Heroku Postgres JSON Demo

The reason why this is on GitHub is because a while ago when I was just getting into web development, I decided to add this cool feature onto my personal website. Visitors would be able to write blog posts to leave a message for the public to see. I didn't care about vandalism; I just wanted to make sure visitors couldn't maliciously inject SQL code into my database.

I've decided to remove that feature from my blog and place it into a different repository. I'm thinking about simplifying the code a bit so that a beginner could be able to read and understand it. I'm thinking about ditching pug to make it easier to use with just HTML.

### What It Uses:
* ExpressJS - as a webserver
* PostgreSQL - as a database
* Socket.io - client communication (more common option would be REST)
* Pug - a view engine

### How to use with Heroku

Firstly, you want to create a new Heroku app. Then you want to make sure you provision a database with the "Heroku Postgres" add-on. This automatically adds your DATABASE_URL environmental variable. By using Heroku, it also adds your PORT environmental variable too.

You don't need a Procfile because ```npm start``` is the default web function for NodeJS apps. The presence of a ```package.json``` file already hints to Heroku that this is a NodeJS app and it will use the appropriate NodeJS buildpack.
