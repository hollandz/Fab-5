"use strict";

var express = require('express'),
  serveStatic = require('serve-static'),
  bodyParser = require('body-parser'),
  config = require('./config'),
  sendgrid = require('sendgrid')(config.sendgrid.user, config.sendgrid.pass);

var app = express();
// parse the posted content as JSON
app.use(bodyParser.json());

// serve up everything in the "public" folder as static content
app.use(serveStatic('public', {
  'index': ['index.html', 'index.htm']
}));

// handle POST /email calls to proxy the requests to sendgrid
app.post('/email', function(req, res, next) {
  var user = req.body.user;
  console.log(user);
  if (!user.email || !user.body) {
    return next(new Error('no user in body'));
  }
  var email = new sendgrid.Email({
    to: config.sendgrid.to,
    toname: 'Work email',
    from: user.email,
    fromname: user.name,
    subject: 'New Contact Form Submission',
    text: user.body
  });
  
  sendgrid.send(email, function(err, json) {
    if (err) {
      next(err);
    } else {
      res.send(json);      
    }
  });
});

// basic error handler (doesn't deal with 404s)
// more info here: http://expressjs.com/guide/error-handling.html
app.use(function(err, req, res, next) {
  console.error(err.stack);
  // up to you what you want the returned failure object to be
  // you could, for example, pass the sendgrid error itself through
  res.status(500).send('Something broke!');
});

app.listen(config.port);
