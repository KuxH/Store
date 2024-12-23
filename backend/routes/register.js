const regRouter = require("express").Router()
const User = require("../models/user")
const validator = require("validator")
const bcrypt = require("bcryptjs")

regRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body

    if (!name || name.length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters long" })
    }

    // Mail validation
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" })
    }

    // Password validation
    if (
      !password ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#]).{8,}$/.test(password)
    ) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character",
      })
    }

    // Phone validation
    if (!phone || !validator.isMobilePhone(phone, "any")) {
      return res.status(400).json({ message: "Invalid phone number" })
    }

    if (!address || address.length < 5) {
      return res
        .status(400)
        .json({ message: "Address must be at least 5 characters long" })
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" })
    }

    // Password hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
    })

    await newUser.save()

    res.status(201).json({ message: "User registered successfully" })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
})

module.exports = regRouter
