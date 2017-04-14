var users = require('./users.js');

module.exports = {
  readAll: function() {
    return users.find();
  },
  findUserById: function(userId) {
    return users.findOne("id", userId);
  },
  getAdmins: function() {
    return users.find().filter(function(a) {
      return a.type === "admin";
    })
  },
  getNonAdmins: function() {
    return users.find().filter(function(a) {
      return a.type === "user";
    })
  },
  getUsersByFavorite: function(fav) {
    return users.find().filter(function(a) {
      return a.favorites.indexOf(fav) > -1;
    })
  },
  getUsersByAgeLimit: function(age) {
    return users.find().filter(function(a) {
      return a.age < age;
    })
  },
  findUserByQuery: function(term, value) {
    if (term === "last_name") {
      return users.find().filter(function(a) {
        return a.last_name === value;
      })
    }
    if (term === "email") {
      return users.find().filter(function(a) {
        return a.email === value;
      })
    }
    if (term === "state") {
      return users.find().filter(function(a) {
        return a.state === value;
      })
    }
  },
  createUser: function(newUser) {
    return users.add(newUser);
  },
  updateUser: function(userId, propsToChange) {
    return users.update(userId, propsToChange)
  },
  removeUser: function(userId) {
    return users.remove("id", userId);
  }
}
