const jwt = require("jsonwebtoken")

const getToken = (req, res, next) => {
  const authorization = req.get("authorization")
  const token = authorization && authorization.replace("Bearer ", "")

  if (token == null) {
    return res.status(401).json({ message: "Authentication token required" })
  }

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Token expired. Please sign in again" })
    }

    req.user = user
    next()
  })
}

module.exports = getToken
