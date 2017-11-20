/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  signup: (req, res) => {
    console.log(req.body);
    Users.create(req.body).exec((err, record) => {
      return res.json({ message: err ? err : "Success" });
    });
  },
  login: (req, res) => {
    res.json("Login");
  }
};
