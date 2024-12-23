const router = require("express").Router()
const User = require("../models/user")
const Item = require("../models/item")
const jwt = require("jsonwebtoken")
const getToken = require("./userAuth")

//add item(admin only)
router.post("/additem", getToken, async (req, res) => {
    try {
        const {id} = req.get
        const user = await User.findById(id)
        if(user.role !== "admin") {
            return res.status(403).json({message: "Access denied"})
        }
        const item = new Item({
            url: req.body.url,
            title: req.body.title,
            brand: req.body.brand,
            price: req.body.price,
            desc: req.body.desc
        })
        await item.save()
        res.status(200).json({message: "Item added successfully"})
    }catch(error) {
        res.status(500).json({message: "Server error"})
    }
})