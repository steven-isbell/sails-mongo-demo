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
        Users.find({ id: req.session.userId }).exec((error, record) => {
          return res.view("characters/characters", {
            chars: records,
            user: record[0]
          });
        });
      }
    });
  }
};
