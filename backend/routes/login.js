const loginRouter = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const getToken = require("./userAuth")

loginRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" })
    }

    const isMatch = await bcrypt.compare(password, existingUser.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" })
    }

    // Generate token
    const userForToken = {
      id: existingUser._id,
      email: existingUser.email,
      name: existingUser.name,
      role: existingUser.role,
    }

    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: "1h",
    })

    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
      },
    })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
})

// User info route that requires token validation
loginRouter.get("/user-info", getToken, async (req, res) => {
  try {
    const userId = req.user.id // Extract user ID from the JWT token
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
    })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
})

module.exports = loginRouter
