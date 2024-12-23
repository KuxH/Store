const mongoose = require("mongoose")

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    favourite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
    },
    orders: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("user", user)
