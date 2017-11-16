/**
 * isAuthenticated
 *
 */
const jwt = require("express-jwt");
const { clientSecret, clientID } = require("../../config");

const authCheck = jwt({
  secret: new Buffer(clientSecret, "base64"),
  audience: clientID
});

module.exports = authCheck;
