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
          chars: records
        });
      }
    });
    // rp
    //   .get("https://swapi.co/api/people")
    //   .then(response => {
    //     return res.view("characters/characters", {
    //       chars: JSON.parse(response).results
    //     });
    //   })
    //   .catch(console.log);
  }
};
