/**
 * CharacterController
 *
 * @description :: Server-side logic for managing Characters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const rp = require("request-promise");

module.exports = {
  getChars(req, res) {
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
  },
  addToList(req, res) {
    if (!req.session.user.characters) req.session.user.characters = [];

    req.session.user.characters.push(req.body);
    res.json(req.session.user.characters);
  },
  insertList(req, res) {
    Users.update(
      { id: req.session.userId },
      { characters: req.session.user.characters }
    ).exec((err, response) => {
      return res.view("characters/library", {
        chars: req.session.user.characters,
        user: req.session.user
      });
    });
  }
};
