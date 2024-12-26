const router = require("express").Router()
const User = require("../models/user")
const getToken = require("./userAuth")

//add item to favourite --> user
router.put("/addfavourite", getToken, async (req, res) => {
  try {
    const { itemid, id } = req.headers
    const UserData = await User.findById(id)
    const isItemFavourite = UserData.favourite.includes(itemid)
    if (isItemFavourite) {
      return res.status(200).json({ message: "Item already in favourite list" })
    }
    await User.findByIdAndUpdate(id, { $push: { favourite: itemid } })
    res.status(200).json({ message: "Item added to favourite list" })
  } catch (error) {
    console.error("Error adding item:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
})
module.exports = router
