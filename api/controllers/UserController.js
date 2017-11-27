/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const bcrypt = require("bcrypt");

module.exports = {
  signup: (req, res) => {
    const { username, password } = req.body;

    Users.find({ username }).exec((err, record) => {
      if (record[0])
        return res.view("users/signup", {
          taken: true
        });
      else {
        const saltRounds = 10;
        bcrypt
          .hash(password, saltRounds)
          .then(hash => {
            const hashUser = Object.assign({}, req.body, { password: hash });
            console.log(hashUser);
            Users.create(hashUser).exec((err, record) => {
              req.session.userId = record.id;
              req.session.user = record;
              return req.session.save(() => res.redirect("/characters"));
            });
          })
          .catch(console.log);
      }
    });
  },
  login: (req, res) => {
    const { username, password } = req.body;
    Users.find({ username }).exec((err, record) => {
      if (record[0]) {
        bcrypt
          .compare(password, record[0].password)
          .then(response => {
            if (response) {
              req.session.userId = record[0].id;
              req.session.user = record[0];
              return req.session.save(() => res.redirect("/characters"));
            } else return res.json("Hash Failed");
          })
          .catch(console.log);
      } else
        return res.view("users/signup", {
          noUser: true
        });
    });
  },
  logout: (req, res) => {
    req.session.destroy(() => res.redirect("/"));
  },
  checkSession: (req, res) => {
    if (req.session.user) {
      res.view("homepage", {
        user: req.session.user
      });
    }
  }
};
