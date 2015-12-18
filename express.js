var express = require('express');
var path = require('path');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FBsecret = require('./FBsecret');
var session = require('express-session');

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
    done(null, profile);
  }
));

app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));

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
  passport.authenticate('facebook', { failureRedirect: '/login' }),
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

module.exports = app;
