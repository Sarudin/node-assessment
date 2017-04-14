const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./userCtrl.js');

const app = express();
app.use(bodyParser.json());

app.get('/api/users', function(req, res, next) {
  if (req.query.favorites) {
    return res.status(200).send(userCtrl.getUsersByFavorite(req.query.favorites))
  }

  if (req.query.age) {
    return res.status(200).send(userCtrl.getUsersByAgeLimit(req.query.age))
  }

  if (req.query.last_name) {
    return res.status(200).send(userCtrl.findUserByQuery(req.query.last_name))
  }

  if (req.query.email) {
    return res.status(200).send(userCtrl.findUserByQuery(req.query.email))
  }
  res.status(200).send(userCtrl.readAll());
});

app.get('/api/users/:userId', function(req, res, next) {
  res.status(200).send(userCtrl.findUserById(req.params.userId))
});

app.get('/api/admins', function(req, res, next) {
  res.status(200).send(userCtrl.getAdmins())
});

app.get('/api/nonadmins', function(req, res, next) {
  res.status(200).send(userCtrl.getNonAdmins());
});

app.put('/api/users/:userId', function(req, res, next) {
  res.status(200).send(userCtrl.updateUser(req.params.userId, req.body.first_name, req.body))
});

app.post('/api/users', function(req, res, next) {
  res.status(200).send(userCtrl.createUser(req.body))
});

app.delete('/api/users/:userId', function(req, res, next) {
  res.status(200).send(userCtrl.removeUser(req.params.userId));
})









app.listen(7777, console.log("Now listening on port 7777"));

module.exports = app;
