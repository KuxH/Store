const mongoose = require("mongoose")
const item = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
  },
  desc:{
    type: String,
    required: true,
  }
  },
  { timestamps: true }
)

module.exports = mongoose.model("item", item)
