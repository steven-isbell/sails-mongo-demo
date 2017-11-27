function hasSelected(req, res, next) {
  if (req.session.user.characters) return next();
  else return res.redirect("/characters");
}

module.exports = hasSelected;
