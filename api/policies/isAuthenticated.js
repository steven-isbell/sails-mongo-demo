/**
 * isAuthenticated
 *
 */
function authCheck(req, res, next) {
  console.log("SESSION: ", req.session);
  if (req.session.userId) {
    return next();
  }
  return res.redirect("/login");
}

module.exports = authCheck;
