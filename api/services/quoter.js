const quotes = require("./quotes.json");

module.exports.getRandomOne = function() {
  const rand = Math.floor(Math.random() * quotes.length);
  return quotes[rand];
};
