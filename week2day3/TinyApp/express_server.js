/*jshint esversion: 6 */
'use strict';

var express = require("express");
var app = express();
app.set("view engine", "ejs");
var methodOverride = require("method-override");
app.use(methodOverride('_method'));
var PORT = process.env.PORT || 8080; // default port 8080
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/url_shortener";

// var urlDatabase = {
//   "b2xVn2": "http://www.lighthouselabs.ca",
//   "9sm5xK": "http://www.google.com"
// };
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log('Could not connect! Unexpected error. Details below.');
    throw err;
  }

  let collection = db.collection("urls");

  function getLongURL(db, shortURL, cb) {
    let query = { "shortURL": shortURL };
    db.collection("urls").findOne(query, (err, result) => {
      if (err) {
        return cb(err);
      }
      return cb(null, result.longURL);
    });
  }

  app.get("/", (req, res) => {
    res.end("Hello!");
  });

  app.get("/urls", (req, res) => {
    collection.find().toArray((err, results) => {
      res.render("urls_index", {
        database: results
      });
    });


  });

  app.delete("/urls/:id", (req, res) => {
    delete urlDatabase[req.params.id];
    res.redirect('/urls');
  });

  app.get("/urls/new", (req, res) => {
    res.render("urls_new");
  });

  function generateRandomString() {
    var set = "abcdefghijklmnopqrstuvwxyz0123456789";
    var randomStr = "";

    for (var i = 0; i < 6; i++) {
      var randomPosition = Math.floor(Math.random() * 36);
      var randomvarNum = set[randomPosition];
      randomStr += randomvarNum;
    }
    return randomStr;
  }

  app.post("/urls/create", (req, res) => {
    var longURL = req.body.longURL;
    var randomStr = generateRandomString();

    urlDatabase[randomStr] = longURL;
    console.log(urlDatabase);

    res.redirect(`http://localhost:8080/urls/${randomStr}`);
  });


  app.get("/urls/:id", (req, res) => {
    var shortURL = req.params.id;

    var longURL = getLongURL(db,shortURL, function(x, y) {
      return y;
    });

    res.render("urls_show", {
      longURL: longURL,
      shortURL: shortURL
    });
  });

  app.put("/urls/:id", (req, res) => {
    urlDatabase[req.params.id] = req.body.longURL;
    res.redirect('/urls');
  });

  app.get("/u/:shortURL", (req, res) => {
    var shortURL = req.params.shortURL;
    var longURL = urlDatabase[shortURL];
    console.log(`shortURL is ${shortURL}, long is ${longURL}`);
    res.redirect(longURL);
  });


  app.get("/urls.json", (req, res) => {
    res.json(urlDatabase);
  });

  app.get("/hello", (req, res) => {
    res.end("<html><body>Hello <b>World</b></body></html>\n");
  });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });

});
