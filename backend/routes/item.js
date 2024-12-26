const router = require("express").Router()
const User = require("../models/user")
const Item = require("../models/item")
const getToken = require("./userAuth")

// Add item (admin only)
router.post("/additem", getToken, async (req, res) => {
  try {
    const { id, role } = req.user

    if (role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" })
    }

    const item = new Item({
      url: req.body.url,
      title: req.body.title,
      brand: req.body.brand,
      price: req.body.price,
      desc: req.body.desc,
    })

    await item.save()

    res.status(200).json({ message: "Item added successfully" })
  } catch (error) {
    console.error("Error adding item:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
})
//update item (admin only)
router.put("/updateitem", getToken, async (req, res) => {
  try {
    const { itemid } = req.body
    if (!itemid) {
      return res.status(400).json({ message: "Item ID is required" })
    }

    const updatedItem = await Item.findById(itemid)
    await Item.findByIdAndUpdate(itemid, {
      url: req.body.url,
      title: req.body.title,
      brand: req.body.brand,
      price: req.body.price,
      desc: req.body.desc,
    })
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" })
    }
    res.status(200).json({ message: "Item updated successfully" })
  } catch (error) {
    console.error("Error updating item:", error)
    res.status(500).json({ message: "Server error" })
  }
})
//delete item (admin only)
router.delete("/deleteitem", getToken, async (req, res) => {
  try {
    const { itemid } = req.body
    if (!itemid) {
      return res.status(400).json({ message: "Item ID is required" })
    }
    const deletedItem = await Item.findByIdAndDelete(itemid)
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" })
    }
    res.status(200).json({ message: "Item deleted successfully" })
  } catch (error) {
    console.error("Error deleting item:", error)
    res.status(500).json({ message: "Server error" })
  }
})
module.exports = router
//get all items
router.get("/allitems", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 })
    return res.json({
      message: "Items fetched successfully",
      data: items,
    })
  } catch (error) {
    console.error("Error fetching items:", error)
    res.status(500).json({ message: "Server error" })
  }
})
//newly added(home page)(4 items)
router.get("/newitems", async (req, res) => {
  try {
    const items = await Item.find().sort({ created: -1 }).limit(4)
    return res.json({
      message: "Recently added items fetched successfully",
      data: items,
    })
  } catch (error) {
    console.error("Error fetching items:", error)
    res.status(500).json({ message: "Server error" })
  }
})
//get item by id
router.get("/getitem/:id", async (req, res) => {
  try {
    const { id } = req.params
    const item = await Item.findById(id)
    if (!item) {
      return res.status(404).json({ message: "Item not found" })
    }
    return res.json({
      message: "Item fetched successfully",
      data: item,
    })
  } catch (error) {
    console.error("Error fetching item:", error)
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router
