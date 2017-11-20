/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

const rp = require("request-promise");

module.exports.bootstrap = function(cb) {
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  Characters.find({ char_name: "Luke Skywalker" }).exec((err, records) => {
    if (err) console.log("err: ", err);
    else if (!records[0]) {
      rp
        .get("https://swapi.co/api/people")
        .then(response =>
          JSON.parse(response).results.forEach(val => createChars(val))
        )
        .catch(console.log);
      cb();
    } else cb();
  });

  function createChars(char) {
    const obj = {
      char_name: char.name,
      char_films: char.films,
      char_hair: char.hair_color,
      char_eye: char.eye_color
    };

    Characters.create(obj).exec((err, response) => {
      if (err) return console.log(err);
      return;
    });
  }
};
