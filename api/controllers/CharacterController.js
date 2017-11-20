/**
 * CharacterController
 *
 * @description :: Server-side logic for managing Characters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const rp = require("request-promise");

module.exports = {
  getChars: (req, res) => {
    rp
      .get("https://swapi.co/api/people")
      .then(response => res.json(response))
      .catch(console.log);
  }
};
