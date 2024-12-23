const jwt = require("jsonwebtoken")

const getToken = (req, res, next) => {
  try {
    const authorization = req.get("authorization")

    const token = authorization && authorization.replace("Bearer ", "")

    if (!token) {
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
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
}

module.exports = getToken
