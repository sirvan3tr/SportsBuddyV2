var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var methodOverride = require('method-override');
var path = require('path');
var FBsecret = require('./FBsecret');

var app = express();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new FacebookStrategy({
    clientID: FBsecret.FACEBOOK_APP_ID,
    clientSecret: FBsecret.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    enableProof: false
  },
  function(accessToken, refreshToken, profile, done) {
    //User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //  return done(err, user);
    //});
    console.log(profile.displayName);
    console.log(done(null, profile));
  }
));

app.use(logger());
app.use(cookieParser());
app.use(bodyParser());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/account', ensureAuthenticated, function(req, res){
  res.json({ user: req.user });
});

app.get('/isAuthenticated', function(req, res) {
  res.json({auth : req.isAuthenticated()});
});

app.get('/auth/facebook',
  passport.authenticate('facebook'),
  function(req, res){
    // The request will be redirected to Facebook for authentication, so this
    // function will not be called.
  });

// GET /auth/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/public/#/login' }),
  function(req, res) {
    res.redirect('/#/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.use("/public", express.static(__dirname + '/dist/public'));

app.get("/", function(request, response) {
    response.redirect('/public');
});

var server = app.listen(3000, "localhost", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  console.log("Not Authenticated");
  res.redirect('/public/#/login');
}

module.exports = app;
