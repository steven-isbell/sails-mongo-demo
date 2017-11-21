/**
 * CharacterController
 *
 * @description :: Server-side logic for managing Characters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const rp = require("request-promise");

module.exports = {
  getChars: (req, res) => {
    Characters.find().exec((err, records) => {
      if (err) return res.json(err);
      else {
        return res.view("characters/characters", {
          chars: records,
          user: req.session.userId
        });
      }
    });
  }
};
