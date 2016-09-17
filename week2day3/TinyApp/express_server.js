/*jshint esversion: 6 */
'use strict';

const express = require("express");
const app = express();
app.set("view engine", "ejs");
const methodOverride = require("method-override");
app.use(methodOverride('_method'));
const PORT = process.env.PORT || 8080; // default port 8080
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/url_shortener";
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    throw err;
  }

  function getLongURL(db, shortURL, cb) {
    let query = { "shortURL": shortURL };
    db.collection("urls").findOne(query, cb);
  }

  app.get("/hello", (req, res) => {
    res.end("<html><body>Hello <b>World</b></body></html>\n");
  });

  app.get("/", (req, res) => {
    res.end("Hello!");
  });

  app.get("/urls", (req, res) => {
    db.collection("urls").find().toArray((err, results) => {
      res.render("urls_index", {
        database: results
        // messages: req.flash('error')
      });
    });
  });

  app.get("/urls/new", (req, res) => {
    res.render("urls_new");
  });

  function generateRandomString() {
    const set = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomStr = "";

    for (let i = 0; i < 6; i++) {
      let randomPosition = Math.floor(Math.random() * 36);
      let randomvarNum = set[randomPosition];
      randomStr += randomvarNum;
    }
    return randomStr;
  }

  app.post("/urls/create", (req, res) => {
    let randomStr = generateRandomString();
    let longURL = req.body.longURL;

    if (longURL.substring(0, 7) !== "http://") {
      res.redirect("/urls/new/");
    } else {
      let doc = {
        shortURL: randomStr,
        longURL: longURL
      };

      db.collection("urls").insert(doc, (err, results) => {
        res.redirect(`http://localhost:8080/urls/${randomStr}`);
      });
    }
  });

  app.get("/urls/:id", (req, res) => {
    let shortURL = req.params.id;

    getLongURL(db, shortURL, (err, result) => {
      if (err || result == null) {
        res.redirect("/urls");
      } else {
        res.render("urls_show", {
          shortURL: shortURL,
          longURL: result.longURL
        });
      }
    });
  });

  app.get("/flash", (req, res) => {
    req.flash("error", "Url does not exist!");
    res.redirect('/urls');
  });

  app.put("/urls/:id", (req, res) => {
    db.collection("urls").update({shortURL: req.params.id}, {shortURL: req.params.id, longURL: req.body.longURL}, function() {
      res.redirect('/urls');
    });
  });

  app.delete("/urls/:id", (req, res) => {
    let shortU = req.params.id;
    db.collection("urls").deleteOne(
      {shortURL: shortU},
      res.redirect('/urls'));
    });

    app.get("/u/:shortURL", (req, res) => {
      let shortURL = req.params.shortURL;
      getLongURL(db, shortURL, (err, result) => {
        if (err || result == null) {
          res.redirect('/urls');
        } else {
          res.redirect(undefined, result.longURL);
        }
      });
    });

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}!`);
    });
  });
