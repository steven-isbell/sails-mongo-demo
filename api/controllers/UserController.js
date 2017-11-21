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
              req.session.userId = response.id;
              return res.json({ message: err ? err : "Success" });
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
              req.session.userId = response.id;
              return res.json("Add Profile View");
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
    req.session.destroy(() => res.view("homepage"));
  }
};
